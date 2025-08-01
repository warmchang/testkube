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

// executor update request body
type ExecutorUpdateRequest struct {
	// object kubernetes namespace
	Namespace *string `json:"namespace,omitempty"`
	// object name
	Name *string `json:"name"`
	// ExecutorType one of \"rest\" for rest openapi based executors or \"job\" which will be default runners for testkube soon
	ExecutorType *string `json:"executorType,omitempty"`
	// Image for kube-job
	Image  *string     `json:"image,omitempty"`
	Slaves *SlavesMeta `json:"slaves,omitempty"`
	// container image pull secrets
	ImagePullSecrets *[]LocalObjectReference `json:"imagePullSecrets,omitempty"`
	// executor image command
	Command *[]string `json:"command,omitempty"`
	// additional executor binary argument
	Args *[]string `json:"args,omitempty"`
	// Types defines what types can be handled by executor e.g. \"postman/collection\", \":curl/command\" etc
	Types *[]string `json:"types,omitempty"`
	// URI for rest based executors
	Uri *string `json:"uri,omitempty"`
	// list of handled content types
	ContentTypes *[]string `json:"contentTypes,omitempty"`
	// Job template to launch executor
	JobTemplate *string `json:"jobTemplate,omitempty"`
	// name of the template resource
	JobTemplateReference *string `json:"jobTemplateReference,omitempty"`
	// executor labels
	Labels *map[string]string `json:"labels,omitempty"`
	// Available executor features
	Features *[]string            `json:"features,omitempty"`
	Meta     **ExecutorMetaUpdate `json:"meta,omitempty"`
	// use data dir as working dir for executor
	UseDataDirAsWorkingDir *bool `json:"useDataDirAsWorkingDir,omitempty"`
}
