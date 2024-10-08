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

import "fmt"

type Webhooks []Webhook

func (list Webhooks) Table() (header []string, output [][]string) {
	header = []string{"Name", "URI", "Events", "Selector", "Labels", "Disabled"}

	for _, e := range list {
		output = append(output, []string{
			e.Name,
			e.Uri,
			fmt.Sprintf("%v", e.Events),
			e.Selector,
			MapToString(e.Labels),
			fmt.Sprint(e.Disabled),
		})
	}

	return
}

func (w Webhook) GetName() string {
	return w.Name
}

func (w Webhook) GetNamespace() string {
	return w.Namespace
}

func (w Webhook) GetLabels() map[string]string {
	return w.Labels
}

func (w Webhook) GetAnnotations() map[string]string {
	return w.Annotations
}
