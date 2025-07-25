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

// test execution status
type TestExecutionStatusCr struct {
	LatestExecution *Execution `json:"latestExecution,omitempty"`
	// test execution generation
	Generation int64 `json:"generation,omitempty"`
}
