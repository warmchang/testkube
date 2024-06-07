/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

type TestWorkflowExecutionCr struct {
	TestWorkflow     *ObjectRef                     `json:"testWorkflow"`
	ExecutionRequest *TestWorkflowExecutionRequest  `json:"executionRequest,omitempty"`
	Status           *TestWorkflowExecutionStatusCr `json:"status,omitempty"`
	// disable webhooks for this execution
	DisableWebhooks bool `json:"disableWebhooks,omitempty"`
}
