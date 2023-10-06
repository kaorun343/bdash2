/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateUserQueryInput = {
  title: Scalars['String']['input'];
};

export type CreateUserQueryPayload = {
  __typename?: 'CreateUserQueryPayload';
  userQuery: UserQuery;
};

export type DataSource = Node & {
  __typename?: 'DataSource';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DataSourceTable = {
  __typename?: 'DataSourceTable';
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUserQuery: CreateUserQueryPayload;
  noop: NoopPayload;
  testSqlite3Connection: TestSqlite3ConnectionResponse;
  updateUserQueryTitle: UpdateUserQueryTitlePayload;
};


export type MutationCreateUserQueryArgs = {
  input: CreateUserQueryInput;
};


export type MutationNoopArgs = {
  input: NoopInput;
};


export type MutationTestSqlite3ConnectionArgs = {
  input: TestSqlite3ConnectionInput;
};


export type MutationUpdateUserQueryTitleArgs = {
  input: UpdateUserQueryTitleInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type NoopInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type NoopPayload = {
  __typename?: 'NoopPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  dataSourceTablesByDataSourceId: Array<DataSourceTable>;
  dataSources: Array<DataSource>;
  node?: Maybe<Node>;
  userQueries: Array<UserQuery>;
  userQueriesByGroup: Array<UserQuery>;
  userQuery: UserQuery;
  userQueryGroups: Array<UserQueryGroup>;
};


export type QueryDataSourceTablesByDataSourceIdArgs = {
  dataSourceId: Scalars['ID']['input'];
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserQueriesByGroupArgs = {
  groupId: Scalars['ID']['input'];
};


export type QueryUserQueryArgs = {
  id: Scalars['ID']['input'];
};

export type TestSqlite3ConnectionInput = {
  path: Scalars['String']['input'];
};

export type TestSqlite3ConnectionResponse = {
  __typename?: 'TestSqlite3ConnectionResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type UpdateUserQueryTitleInput = {
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type UpdateUserQueryTitlePayload = {
  __typename?: 'UpdateUserQueryTitlePayload';
  userQuery: UserQuery;
};

export type UserQuery = Node & {
  __typename?: 'UserQuery';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  status?: Maybe<UserQueryStatus>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserQueryGroup = Node & {
  __typename?: 'UserQueryGroup';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type UserQueryStatus =
  | 'FAILURE'
  | 'SUCCESS'
  | 'WORKING';

export type DataSourceForDataSourceListLayoutFragment = (
  { __typename?: 'DataSource' }
  & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListFragment': DataSourceForDataSourceListFragment } }
) & { ' $fragmentName'?: 'DataSourceForDataSourceListLayoutFragment' };

export type DataSourceForDataSourceListFragment = (
  { __typename?: 'DataSource', id: string }
  & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListItemFragment': DataSourceForDataSourceListItemFragment } }
) & { ' $fragmentName'?: 'DataSourceForDataSourceListFragment' };

export type DataSourceForDataSourceListItemFragment = { __typename?: 'DataSource', id: string, name: string } & { ' $fragmentName'?: 'DataSourceForDataSourceListItemFragment' };

export type TestSqlite3ConnectionMutationVariables = Exact<{
  input: TestSqlite3ConnectionInput;
}>;


export type TestSqlite3ConnectionMutation = { __typename?: 'Mutation', testSqlite3Connection: { __typename?: 'TestSqlite3ConnectionResponse', success: boolean } };

export type GetDataSourceListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataSourceListLayoutQuery = { __typename?: 'Query', dataSources: Array<(
    { __typename?: 'DataSource' }
    & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListLayoutFragment': DataSourceForDataSourceListLayoutFragment } }
  )> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const DataSourceForDataSourceListItemFragmentDoc = new TypedDocumentString(`
    fragment DataSourceForDataSourceListItem on DataSource {
  id
  name
}
    `, {"fragmentName":"DataSourceForDataSourceListItem"}) as unknown as TypedDocumentString<DataSourceForDataSourceListItemFragment, unknown>;
export const DataSourceForDataSourceListFragmentDoc = new TypedDocumentString(`
    fragment DataSourceForDataSourceList on DataSource {
  id
  ...DataSourceForDataSourceListItem
}
    fragment DataSourceForDataSourceListItem on DataSource {
  id
  name
}`, {"fragmentName":"DataSourceForDataSourceList"}) as unknown as TypedDocumentString<DataSourceForDataSourceListFragment, unknown>;
export const DataSourceForDataSourceListLayoutFragmentDoc = new TypedDocumentString(`
    fragment DataSourceForDataSourceListLayout on DataSource {
  ...DataSourceForDataSourceList
}
    fragment DataSourceForDataSourceList on DataSource {
  id
  ...DataSourceForDataSourceListItem
}
fragment DataSourceForDataSourceListItem on DataSource {
  id
  name
}`, {"fragmentName":"DataSourceForDataSourceListLayout"}) as unknown as TypedDocumentString<DataSourceForDataSourceListLayoutFragment, unknown>;
export const TestSqlite3ConnectionDocument = new TypedDocumentString(`
    mutation TestSqlite3Connection($input: TestSqlite3ConnectionInput!) {
  testSqlite3Connection(input: $input) {
    success
  }
}
    `) as unknown as TypedDocumentString<TestSqlite3ConnectionMutation, TestSqlite3ConnectionMutationVariables>;
export const GetDataSourceListLayoutDocument = new TypedDocumentString(`
    query GetDataSourceListLayout {
  dataSources {
    ...DataSourceForDataSourceListLayout
  }
}
    fragment DataSourceForDataSourceListLayout on DataSource {
  ...DataSourceForDataSourceList
}
fragment DataSourceForDataSourceList on DataSource {
  id
  ...DataSourceForDataSourceListItem
}
fragment DataSourceForDataSourceListItem on DataSource {
  id
  name
}`) as unknown as TypedDocumentString<GetDataSourceListLayoutQuery, GetDataSourceListLayoutQueryVariables>;