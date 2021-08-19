/*
 * kubtest
 *
 * Efficient testing of k8s applications mandates a k8s native approach to test mgmt/definition/execution - kubtest provides a “quality control plane” that natively integrates testing activities into k8s development and operational workflows
 *
 * API version: 0.0.5
 * Contact: api@kubtest.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package kubtest

// execution result data
type AssertionResult struct {
	Name         string `json:"name,omitempty"`
	Status       string `json:"status,omitempty"`
	ErrorMessage string `json:"error-message,omitempty"`
}
