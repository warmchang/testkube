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

// options to download artifacts from previous steps
type DownloadArtifactOptions struct {
	AllPreviousSteps bool `json:"allPreviousSteps,omitempty"`
	// previous step numbers starting from 1
	PreviousStepNumbers []int32 `json:"previousStepNumbers,omitempty"`
}