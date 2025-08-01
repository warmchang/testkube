package repository

import (
	"context"
	"errors"
	"fmt"

	"github.com/kubeshop/testkube/pkg/repository/leasebackend"
	"github.com/kubeshop/testkube/pkg/repository/result"
	"github.com/kubeshop/testkube/pkg/repository/testresult"
	"github.com/kubeshop/testkube/pkg/repository/testworkflow"
)

// Repository Manager - High-level interface for managing all repositories
type RepositoryManager struct {
	factory RepositoryFactory
}

func NewRepositoryManager(factory RepositoryFactory) *RepositoryManager {
	return &RepositoryManager{
		factory: factory,
	}
}

func (rm *RepositoryManager) LeaseBackend() leasebackend.Repository {
	return rm.factory.NewLeaseBackendRepository()
}

func (rm *RepositoryManager) Result() result.Repository {
	return rm.factory.NewResultRepository()
}

func (rm *RepositoryManager) TestResult() testresult.Repository {
	return rm.factory.NewTestResultRepository()
}

func (rm *RepositoryManager) TestWorkflow() testworkflow.Repository {
	return rm.factory.NewTestWorkflowRepository()
}

func (rm *RepositoryManager) GetDatabaseType() DatabaseType {
	return rm.factory.GetDatabaseType()
}

func (rm *RepositoryManager) Close(ctx context.Context) error {
	return rm.factory.Close(ctx)
}

func (rm *RepositoryManager) HealthCheck(ctx context.Context) error {
	return rm.factory.HealthCheck(ctx)
}

// Factory Builder for easy configuration
type FactoryBuilder struct {
	databaseType DatabaseType
	mongoConfig  *MongoDBFactoryConfig
	pgConfig     *PostgreSQLFactoryConfig
}

func NewFactoryBuilder() *FactoryBuilder {
	return &FactoryBuilder{}
}

func (b *FactoryBuilder) WithMongoDB(config MongoDBFactoryConfig) *FactoryBuilder {
	b.databaseType = DatabaseTypeMongoDB
	b.mongoConfig = &config
	return b
}

func (b *FactoryBuilder) WithPostgreSQL(config PostgreSQLFactoryConfig) *FactoryBuilder {
	b.databaseType = DatabaseTypePostgreSQL
	b.pgConfig = &config
	return b
}

func (b *FactoryBuilder) Build() (RepositoryFactory, error) {
	switch b.databaseType {
	case DatabaseTypeMongoDB:
		if b.mongoConfig == nil {
			return nil, errors.New("MongoDB configuration is required")
		}
		return NewMongoDBFactory(*b.mongoConfig), nil
	case DatabaseTypePostgreSQL:
		if b.pgConfig == nil {
			return nil, errors.New("PostgreSQL configuration is required")
		}
		return NewPostgreSQLFactory(*b.pgConfig), nil
	default:
		return nil, fmt.Errorf("unsupported database type: %s", b.databaseType)
	}
}
