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

type TestSuiteStepV2 struct {
	StopTestOnFailure bool                        `json:"stopTestOnFailure"`
	Execute           *TestSuiteStepExecuteTestV2 `json:"execute,omitempty"`
	Delay             *TestSuiteStepDelayV2       `json:"delay,omitempty"`
}