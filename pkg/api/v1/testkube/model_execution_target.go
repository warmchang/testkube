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

type ExecutionTarget struct {
	// runner labels to match
	Match map[string][]string `json:"match,omitempty"`
	// runner labels to NOT match
	Not map[string][]string `json:"not,omitempty"`
	// list of runner labels to replicate the executions
	Replicate []string `json:"replicate,omitempty"`
}
