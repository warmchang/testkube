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

// configuration values used in the test workflow execution
type TestWorkflowExecutionConfigValue struct {
	// configuration value
	Value string `json:"value,omitempty"`
	// configuration value is empty
	EmptyValue bool `json:"emptyValue,omitempty"`
	// configuration value default
	DefaultValue string `json:"defaultValue,omitempty"`
	// configuration value default is empty
	EmptyDefaultValue bool `json:"emptyDefaultValue,omitempty"`
	// indicates if the value is truncated
	Truncated bool `json:"truncated,omitempty"`
	// marks value as sensitive
	Sensitive bool `json:"sensitive,omitempty"`
}
