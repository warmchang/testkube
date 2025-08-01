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

type TestWorkflowContentTarball struct {
	// url for the tarball to extract
	Url string `json:"url"`
	// path where the tarball should be extracted
	Path  string        `json:"path"`
	Mount *BoxedBoolean `json:"mount,omitempty"`
}
