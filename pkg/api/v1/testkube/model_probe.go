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

// Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
type Probe struct {
	InitialDelaySeconds           int32            `json:"initialDelaySeconds,omitempty"`
	TimeoutSeconds                int32            `json:"timeoutSeconds,omitempty"`
	PeriodSeconds                 int32            `json:"periodSeconds,omitempty"`
	SuccessThreshold              int32            `json:"successThreshold,omitempty"`
	FailureThreshold              int32            `json:"failureThreshold,omitempty"`
	TerminationGracePeriodSeconds *BoxedInteger    `json:"terminationGracePeriodSeconds,omitempty"`
	Exec                          *ExecAction      `json:"exec,omitempty"`
	HttpGet                       *HttpGetAction   `json:"httpGet,omitempty"`
	TcpSocket                     *TcpSocketAction `json:"tcpSocket,omitempty"`
	Grpc                          *GrpcAction      `json:"grpc,omitempty"`
}
