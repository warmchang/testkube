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

type TestWorkflowTarget struct {
	// labels to attach to the job
	Match map[string][]string `json:"match,omitempty"`
	// labels to attach to the job
	Not       map[string][]string `json:"not,omitempty"`
	Replicate []string            `json:"replicate,omitempty"`
}
