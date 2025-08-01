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

type TestWorkflowSpec struct {
	Use       []TestWorkflowTemplateRef              `json:"use,omitempty"`
	Config    map[string]TestWorkflowParameterSchema `json:"config,omitempty"`
	System    *TestWorkflowSystem                    `json:"system,omitempty"`
	Content   *TestWorkflowContent                   `json:"content,omitempty"`
	Services  map[string]TestWorkflowServiceSpec     `json:"services,omitempty"`
	Container *TestWorkflowContainerConfig           `json:"container,omitempty"`
	Job       *TestWorkflowJobConfig                 `json:"job,omitempty"`
	Pod       *TestWorkflowPodConfig                 `json:"pod,omitempty"`
	Setup     []TestWorkflowStep                     `json:"setup,omitempty"`
	Steps     []TestWorkflowStep                     `json:"steps,omitempty"`
	After     []TestWorkflowStep                     `json:"after,omitempty"`
	Events    []TestWorkflowEvent                    `json:"events,omitempty"`
	Execution *TestWorkflowTagSchema                 `json:"execution,omitempty"`
	Pvcs      map[string]TestWorkflowPvcConfig       `json:"pvcs,omitempty"`
}
