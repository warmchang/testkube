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

// problem response in case of error
type Problem struct {
	// Type contains a URI that identifies the problem type.
	Type_ string `json:"type,omitempty"`
	// Title is a short, human-readable summary of the problem type. This title SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
	Title string `json:"title,omitempty"`
	// HTTP status code for this occurrence of the problem.
	Status int32 `json:"status,omitempty"`
	// A human-readable explanation specific to this occurrence of the problem.
	Detail string `json:"detail,omitempty"`
	// A URI that identifies the specific occurrence of the problem. This URI may or may not yield further information if de-referenced.
	Instance string `json:"instance,omitempty"`
}
