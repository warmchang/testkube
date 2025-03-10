// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/testworkflows/testworkflowexecutor (interfaces: TestWorkflowExecutor)

// Package testworkflowexecutor is a generated GoMock package.
package testworkflowexecutor

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	testkube "github.com/kubeshop/testkube/pkg/api/v1/testkube"
	cloud "github.com/kubeshop/testkube/pkg/cloud"
)

// MockTestWorkflowExecutor is a mock of TestWorkflowExecutor interface.
type MockTestWorkflowExecutor struct {
	ctrl     *gomock.Controller
	recorder *MockTestWorkflowExecutorMockRecorder
}

// MockTestWorkflowExecutorMockRecorder is the mock recorder for MockTestWorkflowExecutor.
type MockTestWorkflowExecutorMockRecorder struct {
	mock *MockTestWorkflowExecutor
}

// NewMockTestWorkflowExecutor creates a new mock instance.
func NewMockTestWorkflowExecutor(ctrl *gomock.Controller) *MockTestWorkflowExecutor {
	mock := &MockTestWorkflowExecutor{ctrl: ctrl}
	mock.recorder = &MockTestWorkflowExecutorMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockTestWorkflowExecutor) EXPECT() *MockTestWorkflowExecutorMockRecorder {
	return m.recorder
}

// Execute mocks base method.
func (m *MockTestWorkflowExecutor) Execute(arg0 context.Context, arg1 string, arg2 *cloud.ScheduleRequest) TestWorkflowExecutionStream {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Execute", arg0, arg1, arg2)
	ret0, _ := ret[0].(TestWorkflowExecutionStream)
	return ret0
}

// Execute indicates an expected call of Execute.
func (mr *MockTestWorkflowExecutorMockRecorder) Execute(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Execute", reflect.TypeOf((*MockTestWorkflowExecutor)(nil).Execute), arg0, arg1, arg2)
}

// Start mocks base method.
func (m *MockTestWorkflowExecutor) Start(arg0 string, arg1 *testkube.TestWorkflowExecution, arg2 map[string]map[string]string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Start", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// Start indicates an expected call of Start.
func (mr *MockTestWorkflowExecutorMockRecorder) Start(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Start", reflect.TypeOf((*MockTestWorkflowExecutor)(nil).Start), arg0, arg1, arg2)
}
