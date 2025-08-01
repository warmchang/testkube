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

// execution result returned from executor
type TestSuiteStepExecutionResultV2 struct {
	Step      *TestSuiteStepV2 `json:"step,omitempty"`
	Test      *ObjectRef       `json:"test,omitempty"`
	Execution *Execution       `json:"execution,omitempty"`
}
