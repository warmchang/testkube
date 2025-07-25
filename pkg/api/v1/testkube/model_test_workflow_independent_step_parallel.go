/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: contact@testkube.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

type TestWorkflowIndependentStepParallel struct {
	Count    *BoxedString `json:"count,omitempty"`
	MaxCount *BoxedString `json:"maxCount,omitempty"`
	// matrix of parameters to spawn instances
	Matrix map[string]interface{} `json:"matrix,omitempty"`
	// parameters that should be distributed across sharded instances
	Shards map[string]interface{} `json:"shards,omitempty"`
	// should the step be paused initially
	Paused bool `json:"paused,omitempty"`
	// is the step expected to fail
	Negative bool `json:"negative,omitempty"`
	// is the step optional, so the failure won't affect the TestWorkflow result
	Optional bool                     `json:"optional,omitempty"`
	Retry    *TestWorkflowRetryPolicy `json:"retry,omitempty"`
	// maximum time this step may take
	Timeout string `json:"timeout,omitempty"`
	// delay before the step
	Delay string `json:"delay,omitempty"`
	// script to run in a default shell for the container
	Shell     string                     `json:"shell,omitempty"`
	Run       *TestWorkflowStepRun       `json:"run,omitempty"`
	Execute   *TestWorkflowStepExecute   `json:"execute,omitempty"`
	Artifacts *TestWorkflowStepArtifacts `json:"artifacts,omitempty"`
	// how many resources could be scheduled in parallel
	Parallelism int32 `json:"parallelism,omitempty"`
	// worker description to display
	Description string       `json:"description,omitempty"`
	Logs        *BoxedString `json:"logs,omitempty"`
	// list of files to send to parallel steps
	Transfer []TestWorkflowStepParallelTransfer `json:"transfer,omitempty"`
	// list of files to fetch from parallel steps
	Fetch     []TestWorkflowStepParallelFetch               `json:"fetch,omitempty"`
	Config    map[string]TestWorkflowParameterSchema        `json:"config,omitempty"`
	System    *TestWorkflowSystem                           `json:"system,omitempty"`
	Content   *TestWorkflowContent                          `json:"content,omitempty"`
	Services  map[string]TestWorkflowIndependentServiceSpec `json:"services,omitempty"`
	Container *TestWorkflowContainerConfig                  `json:"container,omitempty"`
	Job       *TestWorkflowJobConfig                        `json:"job,omitempty"`
	Pod       *TestWorkflowPodConfig                        `json:"pod,omitempty"`
	Setup     []TestWorkflowIndependentStep                 `json:"setup,omitempty"`
	Steps     []TestWorkflowIndependentStep                 `json:"steps,omitempty"`
	After     []TestWorkflowIndependentStep                 `json:"after,omitempty"`
	Events    []TestWorkflowEvent                           `json:"events,omitempty"`
	Execution *TestWorkflowTagSchema                        `json:"execution,omitempty"`
	Pvcs      map[string]TestWorkflowPvcConfig              `json:"pvcs,omitempty"`
}
