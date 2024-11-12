// Copyright 2024 Testkube.
//
// Licensed as a Testkube Pro file under the Testkube Community
// License (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//	https://github.com/kubeshop/testkube/blob/main/licenses/TCL.txt

package devbox

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/dustin/go-humanize"
	"github.com/gookit/color"
	"github.com/pkg/errors"
	"github.com/pterm/pterm"
	"github.com/savioxavier/termlink"
	openurl "github.com/skratchdot/open-golang/open"
	"github.com/spf13/cobra"
	"golang.org/x/sync/errgroup"

	"github.com/kubeshop/testkube/cmd/kubectl-testkube/config"
	"github.com/kubeshop/testkube/cmd/tcl/kubectl-testkube/devbox/devutils"
	"github.com/kubeshop/testkube/pkg/cloud/client"
	"github.com/kubeshop/testkube/pkg/mapper/testworkflows"
	"github.com/kubeshop/testkube/pkg/ui"
)

const (
	InterceptorMainPath   = "cmd/tcl/devbox-mutating-webhook/main.go"
	BinaryStorageMainPath = "cmd/tcl/devbox-binary-storage/main.go"
	AgentMainPath         = "cmd/api-server/main.go"
	ToolkitMainPath       = "cmd/testworkflow-toolkit/main.go"
	InitProcessMainPath   = "cmd/testworkflow-init/main.go"
)

func NewDevBoxCommand() *cobra.Command {
	var (
		oss              bool
		rawDevboxName    string
		open             bool
		baseAgentImage   string
		baseInitImage    string
		baseToolkitImage string
		syncResources    []string
	)

	cmd := &cobra.Command{
		Use:     "devbox",
		Hidden:  true,
		Aliases: []string{"dev"},
		Run: func(cmd *cobra.Command, args []string) {
			ctx, ctxCancel := context.WithCancel(context.Background())
			stopSignal := make(chan os.Signal, 1)
			signal.Notify(stopSignal, syscall.SIGINT, syscall.SIGTERM)
			go func() {
				<-stopSignal
				ctxCancel()
			}()

			startTs := time.Now()

			// Find repository root
			rootDir := devutils.FindDirContaining(InterceptorMainPath, AgentMainPath, ToolkitMainPath, InitProcessMainPath)
			if rootDir == "" {
				ui.Fail(errors.New("testkube repository not found"))
			}

			var err error

			// Connect to cluster
			cluster, err := devutils.NewCluster()
			if err != nil {
				ui.Fail(err)
			}

			// Connect to Testkube
			cfg, err := config.Load()
			if err != nil {
				pterm.Error.Printfln("Failed to load config file: %s", err.Error())
				return
			}
			var cloud *devutils.CloudObject
			if !oss {
				cloud, err = devutils.NewCloud(cfg.CloudContext, cmd)
				if err != nil {
					pterm.Error.Printfln("Failed to connect to Cloud: %s", err.Error())
					return
				}
			}

			// Detect obsolete devbox environments
			if !oss {
				if obsolete := cloud.ListObsolete(); len(obsolete) > 0 {
					count := 0
					for _, env := range obsolete {
						err := cloud.DeleteEnvironment(env.Id)
						if err != nil {
							fmt.Printf("Failed to delete obsolete devbox environment (%s): %s\n", env.Name, err.Error())
							continue
						}
						cluster.Namespace(env.Name).Destroy()
						count++
					}
					fmt.Printf("Deleted %d/%d obsolete devbox environments\n", count, len(obsolete))
				}
			}

			// Initialize bare cluster resources
			namespace := cluster.Namespace(fmt.Sprintf("devbox-%s", rawDevboxName))
			interceptorPod := namespace.Pod("devbox-interceptor")
			agentPod := namespace.Pod("devbox-agent")
			binaryStoragePod := namespace.Pod("devbox-binary")
			mongoPod := namespace.Pod("devbox-mongodb")
			minioPod := namespace.Pod("devbox-minio")

			// Initialize binaries
			interceptorBin := devutils.NewBinary(InterceptorMainPath, cluster.OperatingSystem(), cluster.Architecture())
			binaryStorageBin := devutils.NewBinary(BinaryStorageMainPath, cluster.OperatingSystem(), cluster.Architecture())
			agentBin := devutils.NewBinary(AgentMainPath, cluster.OperatingSystem(), cluster.Architecture())
			toolkitBin := devutils.NewBinary(ToolkitMainPath, cluster.OperatingSystem(), cluster.Architecture())
			initProcessBin := devutils.NewBinary(InitProcessMainPath, cluster.OperatingSystem(), cluster.Architecture())

			// Initialize clean up
			defer interceptorBin.Close()
			defer binaryStorageBin.Close()
			defer agentBin.Close()
			defer toolkitBin.Close()
			defer initProcessBin.Close()

			// Initialize wrappers over cluster resources
			interceptor := devutils.NewInterceptor(interceptorPod, baseInitImage, baseToolkitImage, interceptorBin)
			agent := devutils.NewAgent(agentPod, cloud, baseAgentImage, baseInitImage, baseToolkitImage)
			binaryStorage := devutils.NewBinaryStorage(binaryStoragePod, binaryStorageBin)
			mongo := devutils.NewMongo(mongoPod)
			minio := devutils.NewMinio(minioPod)
			var env *client.Environment

			// Cleanup
			cleanupCh := make(chan struct{})
			var cleanupMu sync.Mutex
			cleanup := func() {
				cleanupMu.Lock()

				interceptorBin.Close()
				binaryStorageBin.Close()
				agentBin.Close()
				toolkitBin.Close()
				initProcessBin.Close()

				fmt.Println("Deleting namespace...")
				if err := namespace.Destroy(); err != nil {
					fmt.Println("Failed to destroy namespace:", err.Error())
				}
				if env != nil && env.Id != "" {
					fmt.Println("Deleting environment...")
					if err = cloud.DeleteEnvironment(env.Id); err != nil {
						fmt.Println("Failed to delete environment:", err.Error())
					}
				}
			}
			go func() {
				<-ctx.Done()
				cleanup()
				close(cleanupCh)
			}()

			fail := func(err error) {
				fmt.Println("Error:", err.Error())
				cleanup()
				os.Exit(1)
			}

			// Create environment in the Cloud
			if !oss {
				fmt.Println("Creating environment in Cloud...")
				env, err = cloud.CreateEnvironment(namespace.Name())
				if err != nil {
					fail(errors.Wrap(err, "failed to create Cloud environment"))
				}
			}

			// Create namespace
			fmt.Println("Creating namespace...")
			if err = namespace.Create(); err != nil {
				fail(errors.Wrap(err, "failed to create namespace"))
			}

			// Create resources accessor
			var resources devutils.ResourcesClient
			if oss {
				resources = devutils.NewDirectResourcesClient(cluster.KubeClient(), namespace.Name())
			} else {
				client, err := cloud.Client(env.Id)
				if err != nil {
					fail(errors.Wrap(err, "failed to create cloud client"))
				}
				resources = client
			}

			g, _ := errgroup.WithContext(ctx)
			binaryStorageReadiness := make(chan struct{})

			// Deploying interceptor
			g.Go(func() error {
				fmt.Println("[Interceptor] Building...")
				its := time.Now()
				_, err := interceptorBin.Build(ctx)
				if err != nil {
					color.Red.Printf("[Interceptor] Build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Interceptor] Built in %s.\n", time.Since(its).Truncate(time.Millisecond))
				}
				fmt.Println("[Interceptor] Deploying...")
				if err = interceptor.Create(ctx); err != nil {
					fail(errors.Wrap(err, "failed to create interceptor"))
				}
				fmt.Println("[Interceptor] Waiting for readiness...")
				if err = interceptor.WaitForReady(ctx); err != nil {
					fail(errors.Wrap(err, "failed to create interceptor"))
				}
				fmt.Println("[Interceptor] Enabling...")
				if err = interceptor.Enable(ctx); err != nil {
					fail(errors.Wrap(err, "failed to enable interceptor"))
				}
				fmt.Println("[Interceptor] Ready")
				return nil
			})

			// Deploying binary storage
			g.Go(func() error {
				fmt.Println("[Binary Storage] Building...")
				its := time.Now()
				_, err := binaryStorageBin.Build(ctx)
				if err != nil {
					color.Red.Printf("[Binary Storage] Build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Binary Storage] Built in %s.\n", time.Since(its).Truncate(time.Millisecond))
				}
				fmt.Println("[Binary Storage] Deploying...")
				if err = binaryStorage.Create(ctx); err != nil {
					fail(errors.Wrap(err, "failed to create binary storage"))
				}
				fmt.Println("[Binary Storage] Waiting for readiness...")
				if err = binaryStorage.WaitForReady(ctx); err != nil {
					fail(errors.Wrap(err, "failed to create binary storage"))
				}
				fmt.Println("[Binary Storage] Ready")
				close(binaryStorageReadiness)
				return nil
			})

			if oss {
				// Deploying Minio
				g.Go(func() error {
					fmt.Println("[Minio] Deploying...")
					if err = minio.Create(ctx); err != nil {
						fail(errors.Wrap(err, "failed to create Minio service"))
					}
					fmt.Println("[Minio] Waiting for readiness...")
					if err = minio.WaitForReady(ctx); err != nil {
						fail(errors.Wrap(err, "failed to create Minio service"))
					}
					fmt.Println("[Minio] Ready")
					return nil
				})

				// Deploying Mongo
				g.Go(func() error {
					fmt.Println("[Mongo] Deploying...")
					if err = mongo.Create(ctx); err != nil {
						fail(errors.Wrap(err, "failed to create Mongo service"))
					}
					fmt.Println("[Mongo] Waiting for readiness...")
					if err = mongo.WaitForReady(ctx); err != nil {
						fail(errors.Wrap(err, "failed to create Mongo service"))
					}
					fmt.Println("[Mongo] Ready")
					return nil
				})
			}

			// Deploying the Agent
			g.Go(func() error {
				fmt.Println("[Agent] Building...")
				its := time.Now()
				_, err := agentBin.Build(ctx)
				if err != nil {
					color.Red.Printf("[Agent] Build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Agent] Built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), agentBin.Size())
				}
				<-binaryStorageReadiness
				fmt.Println("[Agent] Uploading...")
				its = time.Now()
				_, size, err := binaryStorage.Upload(ctx, "testkube-api-server", agentBin)
				if err != nil {
					color.Red.Printf("[Agent] Upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Agent] Uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))
				}
				fmt.Println("[Agent] Deploying...")
				if err = agent.Create(ctx, env); err != nil {
					fail(errors.Wrap(err, "failed to create agent"))
				}
				fmt.Println("[Agent] Waiting for readiness...")
				if err = agent.WaitForReady(ctx); err != nil {
					fail(errors.Wrap(err, "failed to create agent"))
				}
				fmt.Println("[Agent] Ready...")
				return nil
			})

			// Building Toolkit
			g.Go(func() error {
				fmt.Println("[Toolkit] Building...")
				its := time.Now()
				_, err := toolkitBin.Build(ctx)
				if err != nil {
					color.Red.Printf("[Toolkit] Build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Toolkit] Built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), toolkitBin.Size())
				}
				<-binaryStorageReadiness
				fmt.Println("[Toolkit] Uploading...")
				its = time.Now()
				_, size, err := binaryStorage.Upload(ctx, "toolkit", toolkitBin)
				if err != nil {
					color.Red.Printf("[Toolkit] Upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Toolkit] Uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))
				}
				return nil
			})

			// Building Init Process
			g.Go(func() error {
				fmt.Println("[Init Process] Building...")
				its := time.Now()
				_, err := initProcessBin.Build(ctx)
				if err != nil {
					color.Red.Printf("[Init Process] Build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Init Process] Built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), initProcessBin.Size())
				}
				<-binaryStorageReadiness
				fmt.Println("[Init Process] Uploading...")
				its = time.Now()
				_, size, err := binaryStorage.Upload(ctx, "init", initProcessBin)
				if err != nil {
					color.Red.Printf("[Init Process] Upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
				} else {
					fmt.Printf("[Init Process] Uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))
				}
				return nil
			})

			g.Wait()

			// Live synchronisation
			fmt.Println("Creating file system watcher...")
			goWatcher, err := devutils.NewFsWatcher(rootDir)
			if err != nil {
				fail(errors.Wrap(err, "failed to watch Testkube repository"))
			}

			if len(syncResources) > 0 {
				fmt.Println("Loading Test Workflows and Templates...")
				sync := devutils.NewCRDSync()

				// Initial run
				for _, path := range syncResources {
					_ = sync.Load(path)
				}
				fmt.Printf("Started synchronising %d Test Workflows and %d Templates...\n", sync.WorkflowsCount(), sync.TemplatesCount())

				// Propagate changes from FS to CRDSync
				yamlWatcher, err := devutils.NewFsWatcher(syncResources...)
				if err != nil {
					fail(errors.Wrap(err, "failed to watch for YAML changes"))
				}
				go func() {
					for {
						if ctx.Err() != nil {
							break
						}
						file, err := yamlWatcher.Next(ctx)
						if !strings.HasSuffix(file, ".yml") && !strings.HasSuffix(file, ".yaml") {
							continue
						}
						if err == nil {
							_ = sync.Load(file)
						}
					}
				}()

				workflowLabel := func(name string) string {
					if !termlink.SupportsHyperlinks() || oss {
						return name
					}
					return name + " " + termlink.ColorLink("(open)", cloud.DashboardUrl(env.Slug, fmt.Sprintf("dashboard/test-workflows/%s", name)), "magenta")
				}

				templateLabel := func(name string) string {
					if !termlink.SupportsHyperlinks() || oss {
						return name
					}
					return name + " " + termlink.ColorLink("(open)", cloud.DashboardUrl(env.Slug, fmt.Sprintf("dashboard/test-workflow-templates/%s", name)), "magenta")
				}

				// Propagate changes from CRDSync to Cloud
				go func() {
					parallel := make(chan struct{}, 10)
					process := func(update *devutils.CRDSyncUpdate) {
						parallel <- struct{}{}
						switch update.Op {
						case devutils.CRDSyncUpdateOpCreate:
							if update.Template != nil {
								update.Template.Spec.Events = nil // ignore Cronjobs
								_, err := resources.CreateTestWorkflowTemplate(*testworkflows.MapTemplateKubeToAPI(update.Template))
								if err != nil {
									fmt.Printf("CRD Sync: creating template: %s: error: %s\n", templateLabel(update.Template.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: created template:", templateLabel(update.Template.Name))
								}
							} else {
								update.Workflow.Spec.Events = nil // ignore Cronjobs
								_, err := resources.CreateTestWorkflow(*testworkflows.MapKubeToAPI(update.Workflow))
								if err != nil {
									fmt.Printf("CRD Sync: creating workflow: %s: error: %s\n", workflowLabel(update.Workflow.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: created workflow:", workflowLabel(update.Workflow.Name))
								}
							}
						case devutils.CRDSyncUpdateOpUpdate:
							if update.Template != nil {
								update.Template.Spec.Events = nil // ignore Cronjobs
								_, err := resources.UpdateTestWorkflowTemplate(*testworkflows.MapTemplateKubeToAPI(update.Template))
								if err != nil {
									fmt.Printf("CRD Sync: updating template: %s: error: %s\n", templateLabel(update.Template.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: updated template:", templateLabel(update.Template.Name))
								}
							} else {
								update.Workflow.Spec.Events = nil
								_, err := resources.UpdateTestWorkflow(*testworkflows.MapKubeToAPI(update.Workflow))
								if err != nil {
									fmt.Printf("CRD Sync: updating workflow: %s: error: %s\n", workflowLabel(update.Workflow.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: updated workflow:", workflowLabel(update.Workflow.Name))
								}
							}
						case devutils.CRDSyncUpdateOpDelete:
							if update.Template != nil {
								err := resources.DeleteTestWorkflowTemplate(update.Template.Name)
								if err != nil {
									fmt.Printf("CRD Sync: deleting template: %s: error: %s\n", templateLabel(update.Template.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: deleted template:", templateLabel(update.Template.Name))
								}
							} else {
								err := resources.DeleteTestWorkflow(update.Workflow.Name)
								if err != nil {
									fmt.Printf("CRD Sync: deleting workflow: %s: error: %s\n", workflowLabel(update.Workflow.Name), err.Error())
								} else {
									fmt.Println("CRD Sync: deleted workflow:", workflowLabel(update.Workflow.Name))
								}
							}
						}
						<-parallel
					}
					for {
						if ctx.Err() != nil {
							break
						}
						update, err := sync.Next(ctx)
						if err != nil {
							continue
						}
						go process(update)
					}
				}()
			}

			fmt.Println("Waiting for file changes...")

			rebuild := func(ctx context.Context) {
				select {
				case <-ctx.Done():
					return
				case <-time.After(100 * time.Millisecond):
				}
				g, _ := errgroup.WithContext(ctx)
				ts := time.Now()
				fmt.Println(color.Yellow.Render("Rebuilding applications..."))
				g.Go(func() error {
					its := time.Now()
					_, err := agentBin.Build(ctx)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Agent: build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					fmt.Printf("  Agent: built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), agentBin.Size())

					its = time.Now()
					cached, size, err := binaryStorage.Upload(ctx, "testkube-api-server", agentBin)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Agent: upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					if cached {
						fmt.Printf("  Agent: no changes.\n")
					} else {
						fmt.Printf("  Agent: uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))

						// Restart only if it has changes
						err := agentPod.Restart(ctx)
						if ctx.Err() != nil {
							return nil
						}
						if err == nil {
							fmt.Printf("  Agent: restarted. Waiting for readiness...\n")
							_ = agentPod.RefreshData(ctx)
							err = agentPod.WaitForReady(ctx)
							if ctx.Err() != nil {
								return nil
							}
							if err == nil {
								fmt.Printf("  Agent: ready again\n")
							} else {
								fail(errors.Wrap(err, "failed to wait for agent pod readiness"))
							}
						} else {
							fmt.Printf("  Agent: restart failed: %s\n", err.Error())
						}
					}
					return nil
				})
				g.Go(func() error {
					its := time.Now()
					_, err := toolkitBin.Build(ctx)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Toolkit: build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					fmt.Printf("  Toolkit: built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), toolkitBin.Size())

					its = time.Now()
					cached, size, err := binaryStorage.Upload(ctx, "toolkit", toolkitBin)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Toolkit: upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					if cached {
						fmt.Printf("  Toolkit: no changes.\n")
					} else {
						fmt.Printf("  Toolkit: uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))
					}
					return nil
				})
				g.Go(func() error {
					its := time.Now()
					_, err := initProcessBin.Build(ctx)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Init Process: build failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					fmt.Printf("  Init Process: built in %s (size: %s).\n", time.Since(its).Truncate(time.Millisecond), initProcessBin.Size())

					its = time.Now()
					cached, size, err := binaryStorage.Upload(ctx, "init", initProcessBin)
					if ctx.Err() != nil {
						return nil
					}
					if err != nil {
						color.Red.Printf("  Init Process: upload failed in %s. Error: %s\n", time.Since(its).Truncate(time.Millisecond), err)
						return err
					}
					if cached {
						fmt.Printf("  Init Process: no changes.\n")
					} else {
						fmt.Printf("  Init Process: uploaded %s in %s.\n", humanize.Bytes(uint64(size)), time.Since(its).Truncate(time.Millisecond))
					}
					return nil
				})
				err = g.Wait()
				if ctx.Err() == nil {
					color.Green.Println("Applications updated in", time.Since(ts).Truncate(time.Millisecond))
				}
			}

			color.Green.Println("Development box is ready. Took", time.Since(startTs).Truncate(time.Millisecond))
			fmt.Println("Namespace:", namespace.Name())
			if !oss {
				if termlink.SupportsHyperlinks() {
					fmt.Println("Dashboard:", termlink.Link(cloud.DashboardUrl(env.Slug, "dashboard/test-workflows"), cloud.DashboardUrl(env.Slug, "dashboard/test-workflows")))
				} else {
					fmt.Println("Dashboard:", cloud.DashboardUrl(env.Slug, "dashboard/test-workflows"))
				}
			}
			if open {
				openurl.Run(cloud.DashboardUrl(env.Slug, "dashboard/test-workflows"))
			}

			_, rebuildCtxCancel := context.WithCancel(ctx)
			for {
				if ctx.Err() != nil {
					break
				}
				file, err := goWatcher.Next(ctx)
				if err != nil {
					fmt.Println("file system watcher error:", err.Error())
				} else if strings.HasSuffix(file, ".go") {
					relPath, _ := filepath.Rel(rootDir, file)
					if relPath == "" {
						relPath = file
					}
					fmt.Printf("%s changed\n", relPath)
					rebuildCtxCancel()
					var rebuildCtx context.Context
					rebuildCtx, rebuildCtxCancel = context.WithCancel(ctx)
					go rebuild(rebuildCtx)
				}
			}
			rebuildCtxCancel()

			<-cleanupCh
		},
	}

	cmd.Flags().StringVarP(&rawDevboxName, "name", "n", fmt.Sprintf("%d", time.Now().UnixNano()), "devbox name")
	cmd.Flags().StringSliceVarP(&syncResources, "sync", "s", nil, "synchronise resources at paths")
	cmd.Flags().BoolVarP(&open, "open", "o", false, "open dashboard in browser")
	cmd.Flags().BoolVarP(&oss, "oss", "O", false, "run open source version")
	cmd.Flags().StringVar(&baseInitImage, "init-image", "kubeshop/testkube-tw-init:latest", "base init image")
	cmd.Flags().StringVar(&baseToolkitImage, "toolkit-image", "kubeshop/testkube-tw-toolkit:latest", "base toolkit image")
	cmd.Flags().StringVar(&baseAgentImage, "agent-image", "kubeshop/testkube-api-server:latest", "base agent image")

	return cmd
}