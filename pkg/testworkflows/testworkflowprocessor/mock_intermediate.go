// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor (interfaces: Intermediate)

// Package testworkflowprocessor is a generated GoMock package.
package testworkflowprocessor

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	v1 "github.com/kubeshop/testkube-operator/api/testworkflows/v1"
	stage "github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/stage"
	v10 "k8s.io/api/core/v1"
)

// MockIntermediate is a mock of Intermediate interface.
type MockIntermediate struct {
	ctrl     *gomock.Controller
	recorder *MockIntermediateMockRecorder
}

// MockIntermediateMockRecorder is the mock recorder for MockIntermediate.
type MockIntermediateMockRecorder struct {
	mock *MockIntermediate
}

// NewMockIntermediate creates a new mock instance.
func NewMockIntermediate(ctrl *gomock.Controller) *MockIntermediate {
	mock := &MockIntermediate{ctrl: ctrl}
	mock.recorder = &MockIntermediateMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockIntermediate) EXPECT() *MockIntermediateMockRecorder {
	return m.recorder
}

// AddBinaryFile mocks base method.
func (m *MockIntermediate) AddBinaryFile(arg0 []byte, arg1 *int32) (v10.VolumeMount, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddBinaryFile", arg0, arg1)
	ret0, _ := ret[0].(v10.VolumeMount)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AddBinaryFile indicates an expected call of AddBinaryFile.
func (mr *MockIntermediateMockRecorder) AddBinaryFile(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddBinaryFile", reflect.TypeOf((*MockIntermediate)(nil).AddBinaryFile), arg0, arg1)
}

// AddConfigMap mocks base method.
func (m *MockIntermediate) AddConfigMap(arg0 v10.ConfigMap) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddConfigMap", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AddConfigMap indicates an expected call of AddConfigMap.
func (mr *MockIntermediateMockRecorder) AddConfigMap(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddConfigMap", reflect.TypeOf((*MockIntermediate)(nil).AddConfigMap), arg0)
}

// AddEmptyDirVolume mocks base method.
func (m *MockIntermediate) AddEmptyDirVolume(arg0 *v10.EmptyDirVolumeSource, arg1 string) v10.VolumeMount {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddEmptyDirVolume", arg0, arg1)
	ret0, _ := ret[0].(v10.VolumeMount)
	return ret0
}

// AddEmptyDirVolume indicates an expected call of AddEmptyDirVolume.
func (mr *MockIntermediateMockRecorder) AddEmptyDirVolume(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddEmptyDirVolume", reflect.TypeOf((*MockIntermediate)(nil).AddEmptyDirVolume), arg0, arg1)
}

// AddSecret mocks base method.
func (m *MockIntermediate) AddSecret(arg0 v10.Secret) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddSecret", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AddSecret indicates an expected call of AddSecret.
func (mr *MockIntermediateMockRecorder) AddSecret(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddSecret", reflect.TypeOf((*MockIntermediate)(nil).AddSecret), arg0)
}

// AddTextFile mocks base method.
func (m *MockIntermediate) AddTextFile(arg0 string, arg1 *int32) (v10.VolumeMount, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddTextFile", arg0, arg1)
	ret0, _ := ret[0].(v10.VolumeMount)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// AddTextFile indicates an expected call of AddTextFile.
func (mr *MockIntermediateMockRecorder) AddTextFile(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddTextFile", reflect.TypeOf((*MockIntermediate)(nil).AddTextFile), arg0, arg1)
}

// AddVolume mocks base method.
func (m *MockIntermediate) AddVolume(arg0 v10.Volume) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddVolume", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AddVolume indicates an expected call of AddVolume.
func (mr *MockIntermediateMockRecorder) AddVolume(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddVolume", reflect.TypeOf((*MockIntermediate)(nil).AddVolume), arg0)
}

// AppendJobConfig mocks base method.
func (m *MockIntermediate) AppendJobConfig(arg0 *v1.JobConfig) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AppendJobConfig", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AppendJobConfig indicates an expected call of AppendJobConfig.
func (mr *MockIntermediateMockRecorder) AppendJobConfig(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AppendJobConfig", reflect.TypeOf((*MockIntermediate)(nil).AppendJobConfig), arg0)
}

// AppendPodConfig mocks base method.
func (m *MockIntermediate) AppendPodConfig(arg0 *v1.PodConfig) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AppendPodConfig", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AppendPodConfig indicates an expected call of AppendPodConfig.
func (mr *MockIntermediateMockRecorder) AppendPodConfig(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AppendPodConfig", reflect.TypeOf((*MockIntermediate)(nil).AppendPodConfig), arg0)
}

// AppendPvcs mocks base method.
func (m *MockIntermediate) AppendPvcs(arg0 map[string]v10.PersistentVolumeClaimSpec) Intermediate {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AppendPvcs", arg0)
	ret0, _ := ret[0].(Intermediate)
	return ret0
}

// AppendPvcs indicates an expected call of AppendPvcs.
func (mr *MockIntermediateMockRecorder) AppendPvcs(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AppendPvcs", reflect.TypeOf((*MockIntermediate)(nil).AppendPvcs), arg0)
}

// ConfigMaps mocks base method.
func (m *MockIntermediate) ConfigMaps() []v10.ConfigMap {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ConfigMaps")
	ret0, _ := ret[0].([]v10.ConfigMap)
	return ret0
}

// ConfigMaps indicates an expected call of ConfigMaps.
func (mr *MockIntermediateMockRecorder) ConfigMaps() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ConfigMaps", reflect.TypeOf((*MockIntermediate)(nil).ConfigMaps))
}

// ContainerDefaults mocks base method.
func (m *MockIntermediate) ContainerDefaults() stage.Container {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ContainerDefaults")
	ret0, _ := ret[0].(stage.Container)
	return ret0
}

// ContainerDefaults indicates an expected call of ContainerDefaults.
func (mr *MockIntermediateMockRecorder) ContainerDefaults() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ContainerDefaults", reflect.TypeOf((*MockIntermediate)(nil).ContainerDefaults))
}

// JobConfig mocks base method.
func (m *MockIntermediate) JobConfig() v1.JobConfig {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "JobConfig")
	ret0, _ := ret[0].(v1.JobConfig)
	return ret0
}

// JobConfig indicates an expected call of JobConfig.
func (mr *MockIntermediateMockRecorder) JobConfig() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "JobConfig", reflect.TypeOf((*MockIntermediate)(nil).JobConfig))
}

// NextRef mocks base method.
func (m *MockIntermediate) NextRef() string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "NextRef")
	ret0, _ := ret[0].(string)
	return ret0
}

// NextRef indicates an expected call of NextRef.
func (mr *MockIntermediateMockRecorder) NextRef() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "NextRef", reflect.TypeOf((*MockIntermediate)(nil).NextRef))
}

// PodConfig mocks base method.
func (m *MockIntermediate) PodConfig() v1.PodConfig {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "PodConfig")
	ret0, _ := ret[0].(v1.PodConfig)
	return ret0
}

// PodConfig indicates an expected call of PodConfig.
func (mr *MockIntermediateMockRecorder) PodConfig() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "PodConfig", reflect.TypeOf((*MockIntermediate)(nil).PodConfig))
}

// Pvcs mocks base method.
func (m *MockIntermediate) Pvcs() map[string]v10.PersistentVolumeClaim {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Pvcs")
	ret0, _ := ret[0].(map[string]v10.PersistentVolumeClaim)
	return ret0
}

// Pvcs indicates an expected call of Pvcs.
func (mr *MockIntermediateMockRecorder) Pvcs() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Pvcs", reflect.TypeOf((*MockIntermediate)(nil).Pvcs))
}

// Secrets mocks base method.
func (m *MockIntermediate) Secrets() []v10.Secret {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Secrets")
	ret0, _ := ret[0].([]v10.Secret)
	return ret0
}

// Secrets indicates an expected call of Secrets.
func (mr *MockIntermediateMockRecorder) Secrets() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Secrets", reflect.TypeOf((*MockIntermediate)(nil).Secrets))
}

// Volumes mocks base method.
func (m *MockIntermediate) Volumes() []v10.Volume {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Volumes")
	ret0, _ := ret[0].([]v10.Volume)
	return ret0
}

// Volumes indicates an expected call of Volumes.
func (mr *MockIntermediateMockRecorder) Volumes() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Volumes", reflect.TypeOf((*MockIntermediate)(nil).Volumes))
}
