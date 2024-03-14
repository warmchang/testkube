// this test need git to test fetchers
package content

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/kubeshop/testkube/pkg/utils/test"

	"github.com/stretchr/testify/assert"

	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
)

// this content is also saved in test repo
// in https:///github.com/kubeshop/testkube-docker-action/blob/main/action.yaml
// file with \n on end
const fileContent = `action.yml
name: 'Testkube CLI'
description: 'Execute Testkube command'
inputs:
  command:
    description: 'Command'
    required: true
    default: 'get'
  resource:
    description: 'Resource'
    required: false
    default: 'tests'
  namespace:
    description: 'Namespace'
    required: false
    default: 'testkube'
  api-key:
    description: 'API key'
    required: false
    default: ''
  api-uri:
    description: 'API uri'
    required: false
    default: ''
  parameters:
    description: 'Parameters'
    required: false
    default: ''
  stdin:
    description: 'Standard input'
    required: false
    default: ''
outputs:
  result:
    description: 'The result of the command'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.command }}
    - ${{ inputs.resource }}
    - ${{ inputs.namespace }}
    - ${{ inputs.api-key }}
    - ${{ inputs.api-uri }}
    - ${{ inputs.parameters }}
    - ${{ inputs.stdin }}`

func TestFetcher_Integration(t *testing.T) {
	test.IntegrationTest(t)
	t.Parallel()

	f := NewFetcher("")

	t.Run("test fetch uri", func(t *testing.T) {
		t.Parallel()

		content := &testkube.TestContent{
			Type_: string(testkube.TestContentTypeString),
			Data:  fileContent,
		}

		path, err := f.Fetch(content)
		assert.NoError(t, err)
		assert.FileExists(t, path)

		d, err := os.ReadFile(path)
		assert.NoError(t, err)
		assert.Equal(t, string(fileContent), string(d))
	})

	t.Run("test fetch git repo based file", func(t *testing.T) {
		t.Parallel()

		content := &testkube.TestContent{
			Type_: string(testkube.TestContentTypeGitFile),
			Repository: testkube.NewGitRepository("https://github.com/kubeshop/testkube-docker-action.git", "main").
				WithPath("action.yaml"),
		}

		path, err := f.Fetch(content)
		assert.NoError(t, err)
		assert.FileExists(t, path)

		d, err := os.ReadFile(path)
		assert.NoError(t, err)
		assert.Equal(t, string(fileContent), string(d))
	})

	t.Run("test fetch git root dir", func(t *testing.T) {
		t.Parallel()

		content := &testkube.TestContent{
			Type_: string(testkube.TestContentTypeGitDir),
			Repository: testkube.NewGitRepository("https://github.com/kubeshop/testkube-docker-action.git", "main").
				WithPath(""),
		}

		path, err := f.Fetch(content)
		assert.NoError(t, err)
		assert.FileExists(t, filepath.Join(path, "action.yaml"))
		assert.FileExists(t, filepath.Join(path, "README.md"))
		assert.FileExists(t, filepath.Join(path, ".github/update-major-version.yml"))

	})

	t.Run("test fetch git subdir", func(t *testing.T) {
		t.Parallel()

		content := &testkube.TestContent{
			Type_: string(testkube.TestContentTypeGitDir),
			Repository: testkube.NewGitRepository("https://github.com/kubeshop/testkube-docker-action.git", "main").
				WithPath(".github"),
		}

		path, err := f.Fetch(content)
		assert.NoError(t, err)
		assert.FileExists(t, filepath.Join(path, "update-major-version.yml"))
	})

	t.Run("test fetch no content", func(t *testing.T) {
		t.Parallel()

		content := &testkube.TestContent{
			Type_: string(testkube.TestContentTypeEmpty),
		}

		path, err := f.Fetch(content)
		assert.NoError(t, err)
		assert.Equal(t, "", path)
	})

	t.Run("test IsGitDir", func(t *testing.T) {
		t.Parallel()

		t.Run("with file", func(t *testing.T) {
			t.Parallel()

			repo := testkube.NewGitRepository("https://github.com/kubeshop/testkube-docker-action.git", "main").WithPath("action.yaml")

			contentType, err := f.CalculateGitContentType(*repo)
			assert.NoError(t, err)
			assert.Equal(t, "git-file", contentType)
		})

		t.Run("with dir", func(t *testing.T) {
			t.Parallel()

			repo := testkube.NewGitRepository("https://github.com/kubeshop/testkube-docker-action.git", "main").WithPath(".github")

			contentType, err := f.CalculateGitContentType(*repo)
			assert.NoError(t, err)
			assert.Equal(t, "git-dir", contentType)
		})
	})
}

func TestFetcher_GetPathAndWorkingDir(t *testing.T) {
	t.Parallel()

	var tests = []struct {
		content    testkube.TestContent
		dataDir    string
		path       string
		workingDir string
		err        error
	}{
		{
			content: testkube.TestContent{
				Type_: string(testkube.TestContentTypeString),
			},
			dataDir:    "/data",
			path:       "/data/test-content",
			workingDir: "",
		},
		{
			content: testkube.TestContent{
				Type_: string(testkube.TestContentTypeFileURI),
			},
			dataDir:    "/data",
			path:       "/data/test-content",
			workingDir: "",
		},
		{
			content: testkube.TestContent{
				Type_: string(testkube.TestContentTypeGit),
				Repository: &testkube.Repository{
					Path:       "path",
					WorkingDir: "working-dir",
				},
			},
			dataDir:    "/data",
			path:       "/data/repo/path",
			workingDir: "/data/repo/working-dir",
		},
		{
			content: testkube.TestContent{
				Type_: string(testkube.TestContentTypeGitDir),
				Repository: &testkube.Repository{
					Path:       "path",
					WorkingDir: "working-dir",
				},
			},
			dataDir:    "/data",
			path:       "/data/repo/path",
			workingDir: "/data/repo/working-dir",
		},
		{
			content: testkube.TestContent{
				Type_: string(testkube.TestContentTypeGitFile),
				Repository: &testkube.Repository{
					Path:       "path",
					WorkingDir: "working-dir",
				},
			},
			dataDir:    "/data",
			path:       "/data/repo/path",
			workingDir: "/data/repo/working-dir",
		},
		{
			dataDir:    "/data",
			path:       "",
			workingDir: "",
		},
	}

	for _, test := range tests {
		path, workingDir, err := GetPathAndWorkingDir(&test.content, test.dataDir)

		assert.NoError(t, err)
		assert.Equal(t, test.path, path)
		assert.Equal(t, test.workingDir, workingDir)
	}
}
