package main

import (
	"fmt"
	"os"
	"os/signal"
	"path/filepath"
	"slices"
	"strings"
	"syscall"
	"time"

	"github.com/kballard/go-shellquote"

	"github.com/kubeshop/testkube/cmd/testworkflow-init/constants"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/control"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/data"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/output"
	"github.com/kubeshop/testkube/cmd/testworkflow-init/run"
)

func main() {
	if len(os.Args) < 2 {
		output.Failf(output.CodeInputError, "missing step reference")
	}
	data.Step.Ref = os.Args[1]

	now := time.Now()

	// Load shared state
	data.LoadState()

	// Initialize space for parsing args
	config := map[string]string{}
	computed := []string(nil)
	conditions := []data.Rule(nil)
	resulting := []data.Rule(nil)
	timeouts := []data.Timeout(nil)
	paused := false
	toolkit := false
	args := []string(nil)

	// Read arguments into the base data
	for i := 2; i < len(os.Args); i += 2 {
		if i+1 == len(os.Args) {
			break
		}
		switch os.Args[i] {
		case constants.ArgSeparator:
			args = os.Args[i+1:]
			i = len(os.Args)
		case constants.ArgInit, constants.ArgInitLong:
			data.Step.InitStatus = os.Args[i+1]
		case constants.ArgCondition, constants.ArgConditionLong:
			v := strings.SplitN(os.Args[i+1], "=", 2)
			refs := strings.Split(v[0], ",")
			if len(v) == 2 {
				conditions = append(conditions, data.Rule{Expr: v[1], Refs: refs})
			} else {
				conditions = append(conditions, data.Rule{Expr: "true", Refs: refs})
			}
		case constants.ArgResult, constants.ArgResultLong:
			v := strings.SplitN(os.Args[i+1], "=", 2)
			refs := strings.Split(v[0], ",")
			if len(v) == 2 {
				resulting = append(resulting, data.Rule{Expr: v[1], Refs: refs})
			} else {
				resulting = append(resulting, data.Rule{Expr: "true", Refs: refs})
			}
		case constants.ArgTimeout, constants.ArgTimeoutLong:
			v := strings.SplitN(os.Args[i+1], "=", 2)
			if len(v) == 2 {
				timeouts = append(timeouts, data.Timeout{Ref: v[0], Duration: v[1]})
			} else {
				timeouts = append(timeouts, data.Timeout{Ref: v[0], Duration: ""})
			}
		case constants.ArgComputeEnv, constants.ArgComputeEnvLong:
			computed = append(computed, strings.Split(os.Args[i+1], ",")...)
		case constants.ArgPaused, constants.ArgPausedLong:
			paused = true
			i--
		case constants.ArgNegative, constants.ArgNegativeLong:
			config["negative"] = os.Args[i+1]
		case constants.ArgWorkingDir, constants.ArgWorkingDirLong:
			wd, err := filepath.Abs(os.Args[i+1])
			if err == nil {
				_ = os.MkdirAll(wd, 0755)
				err = os.Chdir(wd)
			} else {
				_ = os.MkdirAll(wd, 0755)
				err = os.Chdir(os.Args[i+1])
			}
			if err != nil {
				fmt.Printf("warning: error using %s as working director: %s\n", os.Args[i+1], err.Error())
			}
		case constants.ArgRetryCount:
			config["retryCount"] = os.Args[i+1]
		case constants.ArgRetryUntil:
			config["retryUntil"] = os.Args[i+1]
		case constants.ArgToolkit, constants.ArgToolkitLong:
			toolkit = true
			i--
		case constants.ArgDebug:
			config["debug"] = os.Args[i+1]
		default:
			output.Failf(output.CodeInputError, "unknown parameter: %s", os.Args[i])
		}
	}

	// Clean up unnecessary variables for non-toolkit containers
	if !toolkit {
		_ = os.Unsetenv("TK_REF")
	}

	// Configure PWD variable, to make it similar to shell environment variables
	if os.Getenv("PWD") == "" {
		cwd, err := os.Getwd()
		if err == nil {
			_ = os.Setenv("PWD", cwd)
		}
	}

	// Compute environment variables
	for _, name := range computed {
		initial := os.Getenv(name)
		value, err := data.Template(initial)
		if err != nil {
			output.Failf(output.CodeInputError, `resolving "%s" environment variable: %s: %s`, name, initial, err.Error())
		}
		_ = os.Setenv(name, value)
	}

	// Compute conditional steps - ignore errors initially, as the may be dependent on themselves
	data.Iterate(conditions, func(c data.Rule) bool {
		expr, err := data.Expression(c.Expr)
		if err != nil {
			return false
		}
		v, _ := expr.BoolValue()
		if !v {
			for _, r := range c.Refs {
				data.State.GetStep(r).Skip(now)
			}
		}
		return true
	})

	// Fail invalid conditional steps
	for _, c := range conditions {
		_, err := data.Expression(c.Expr)
		if err != nil {
			output.Failf(output.CodeInputError, "broken condition for refs: %s: %s: %s", strings.Join(c.Refs, ", "), c.Expr, err.Error())
		}
	}

	// Start all acknowledged steps
	for _, f := range resulting {
		for _, r := range f.Refs {
			if r != "" {
				data.State.GetStep(r).Start(now)
			}
		}
	}
	for _, t := range timeouts {
		if t.Ref != "" {
			data.State.GetStep(t.Ref).Start(now)
		}
	}
	data.State.GetStep(data.Step.Ref).Start(now)

	// Register timeouts
	for _, t := range timeouts {
		err := data.State.GetStep(t.Ref).SetTimeoutDuration(now, t.Duration)
		if err != nil {
			output.Failf(output.CodeInputError, "broken timeout for ref: %s: %s: %s", t.Ref, t.Duration, err.Error())
		}
	}

	// Save the resulting conditions
	data.Config.Resulting = resulting

	// Don't call further if the step is already skipped
	if data.State.GetStep(data.Step.Ref).Status == data.StepStatusSkipped {
		if data.Config.Debug {
			fmt.Printf("Skipped.\n")
		}
		data.Finish()
	}

	// Handle pausing
	if paused {
		data.Step.Pause(now)
	}

	// Load the rest of the configuration
	var err error
	for k, v := range config {
		config[k], err = data.Template(v)
		if err != nil {
			output.Failf(output.CodeInputError, `resolving "%s" param: %s: %s`, k, v, err.Error())
		}
	}
	data.LoadConfig(config)

	// Compute templates in the cmd/args
	original := slices.Clone(args)
	for i := range args {
		args[i], err = data.Template(args[i])
		if err != nil {
			output.Failf(output.CodeInputError, `resolving command: %s: %s`, shellquote.Join(original...), err.Error())
		}
	}

	// Fail when there is nothing to run
	if len(args) == 0 {
		output.Failf(output.CodeNoCommand, "missing command to run")
	}

	// Handle aborting
	stopSignal := make(chan os.Signal, 1)
	signal.Notify(stopSignal, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-stopSignal
		fmt.Println("The task was aborted.")
		data.Step.Status = data.StepStatusAborted
		data.Step.ExitCode = output.CodeAborted
		data.Finish()
	}()

	// Handle timeouts.
	// Ignores time when the step was paused.
	for _, t := range timeouts {
		go func(ref string) {
			start := now
			timeout := data.State.GetStep(ref).TimeoutAt.Sub(start)
			for {
				time.Sleep(timeout)
				took := data.Step.Took(start)
				if took < timeout {
					timeout -= took
					continue
				}
				fmt.Printf("Timed out.\n")
				data.State.GetStep(ref).SetStatus(data.StepStatusTimeout)
				data.Step.Status = data.StepStatusTimeout
				data.Step.ExitCode = output.CodeTimeout
				data.Finish()
			}
		}(t.Ref)
	}

	// Run the control server
	controlSrv := control.NewServer(constants.ControlServerPort, data.Step)
	_, err = controlSrv.Listen()
	if err != nil {
		fmt.Printf("Failed to start control server at port %d: %s\n", constants.ControlServerPort, err.Error())
		os.Exit(int(output.CodeInternal))
	}

	// Start the task
	data.Step.Executed = true
	run.Run(args[0], args[1:])

	os.Exit(0)
}
