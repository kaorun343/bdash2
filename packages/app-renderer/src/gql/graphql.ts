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

export type UserQueryForQueryDetailPageFragment = (
  { __typename?: 'UserQuery', status?: UserQueryStatus | null }
  & { ' $fragmentRefs'?: { 'UserQueryForEditorFragment': UserQueryForEditorFragment } }
) & { ' $fragmentName'?: 'UserQueryForQueryDetailPageFragment' };

export type UserQueryForEditorFragment = { __typename?: 'UserQuery', id: string, title: string, body: string } & { ' $fragmentName'?: 'UserQueryForEditorFragment' };

export type UpdateUserQueryTitleMutationVariables = Exact<{
  input: UpdateUserQueryTitleInput;
}>;


export type UpdateUserQueryTitleMutation = { __typename?: 'Mutation', updateUserQueryTitle: { __typename?: 'UpdateUserQueryTitlePayload', userQuery: { __typename?: 'UserQuery', title: string } } };

export type GetQueryDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetQueryDetailPageQuery = { __typename?: 'Query', query: (
    { __typename?: 'UserQuery' }
    & { ' $fragmentRefs'?: { 'UserQueryForQueryDetailPageFragment': UserQueryForQueryDetailPageFragment } }
  ) };

export type UserQueryForQueryListItemFragment = { __typename?: 'UserQuery', id: string, title: string } & { ' $fragmentName'?: 'UserQueryForQueryListItemFragment' };

export type UserQueryGroupForQueryGroupListLayoutFragment = (
  { __typename?: 'UserQueryGroup' }
  & { ' $fragmentRefs'?: { 'UserQueryGroupForQueryGroupListFragment': UserQueryGroupForQueryGroupListFragment } }
) & { ' $fragmentName'?: 'UserQueryGroupForQueryGroupListLayoutFragment' };

export type UserQueryGroupForQueryGroupListFragment = (
  { __typename?: 'UserQueryGroup', id: string }
  & { ' $fragmentRefs'?: { 'UserQueryGroupForQueryGroupListItemFragment': UserQueryGroupForQueryGroupListItemFragment } }
) & { ' $fragmentName'?: 'UserQueryGroupForQueryGroupListFragment' };

export type UserQueryGroupForQueryGroupListItemFragment = { __typename?: 'UserQueryGroup', id: string, title: string } & { ' $fragmentName'?: 'UserQueryGroupForQueryGroupListItemFragment' };

export type GetQueryGroupListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryGroupListLayoutQuery = { __typename?: 'Query', queryGroups: Array<(
    { __typename?: 'UserQueryGroup' }
    & { ' $fragmentRefs'?: { 'UserQueryGroupForQueryGroupListLayoutFragment': UserQueryGroupForQueryGroupListLayoutFragment } }
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
export const UserQueryForEditorFragmentDoc = new TypedDocumentString(`
    fragment UserQueryForEditor on UserQuery {
  id
  title
  body
}
    `, {"fragmentName":"UserQueryForEditor"}) as unknown as TypedDocumentString<UserQueryForEditorFragment, unknown>;
export const UserQueryForQueryDetailPageFragmentDoc = new TypedDocumentString(`
    fragment UserQueryForQueryDetailPage on UserQuery {
  status
  ...UserQueryForEditor
}
    fragment UserQueryForEditor on UserQuery {
  id
  title
  body
}`, {"fragmentName":"UserQueryForQueryDetailPage"}) as unknown as TypedDocumentString<UserQueryForQueryDetailPageFragment, unknown>;
export const UserQueryForQueryListItemFragmentDoc = new TypedDocumentString(`
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `, {"fragmentName":"UserQueryForQueryListItem"}) as unknown as TypedDocumentString<UserQueryForQueryListItemFragment, unknown>;
export const UserQueryGroupForQueryGroupListItemFragmentDoc = new TypedDocumentString(`
    fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  title
}
    `, {"fragmentName":"UserQueryGroupForQueryGroupListItem"}) as unknown as TypedDocumentString<UserQueryGroupForQueryGroupListItemFragment, unknown>;
export const UserQueryGroupForQueryGroupListFragmentDoc = new TypedDocumentString(`
    fragment UserQueryGroupForQueryGroupList on UserQueryGroup {
  id
  ...UserQueryGroupForQueryGroupListItem
}
    fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  title
}`, {"fragmentName":"UserQueryGroupForQueryGroupList"}) as unknown as TypedDocumentString<UserQueryGroupForQueryGroupListFragment, unknown>;
export const UserQueryGroupForQueryGroupListLayoutFragmentDoc = new TypedDocumentString(`
    fragment UserQueryGroupForQueryGroupListLayout on UserQueryGroup {
  ...UserQueryGroupForQueryGroupList
}
    fragment UserQueryGroupForQueryGroupList on UserQueryGroup {
  id
  ...UserQueryGroupForQueryGroupListItem
}
fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  title
}`, {"fragmentName":"UserQueryGroupForQueryGroupListLayout"}) as unknown as TypedDocumentString<UserQueryGroupForQueryGroupListLayoutFragment, unknown>;
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
export const UpdateUserQueryTitleDocument = new TypedDocumentString(`
    mutation UpdateUserQueryTitle($input: UpdateUserQueryTitleInput!) {
  updateUserQueryTitle(input: $input) {
    userQuery {
      title
    }
  }
}
    `) as unknown as TypedDocumentString<UpdateUserQueryTitleMutation, UpdateUserQueryTitleMutationVariables>;
export const GetQueryDetailPageDocument = new TypedDocumentString(`
    query GetQueryDetailPage($id: ID!) {
  query: userQuery(id: $id) {
    ...UserQueryForQueryDetailPage
  }
}
    fragment UserQueryForQueryDetailPage on UserQuery {
  status
  ...UserQueryForEditor
}
fragment UserQueryForEditor on UserQuery {
  id
  title
  body
}`) as unknown as TypedDocumentString<GetQueryDetailPageQuery, GetQueryDetailPageQueryVariables>;
export const GetQueryGroupListLayoutDocument = new TypedDocumentString(`
    query GetQueryGroupListLayout {
  queryGroups: userQueryGroups {
    ...UserQueryGroupForQueryGroupListLayout
  }
}
    fragment UserQueryGroupForQueryGroupListLayout on UserQueryGroup {
  ...UserQueryGroupForQueryGroupList
}
fragment UserQueryGroupForQueryGroupList on UserQueryGroup {
  id
  ...UserQueryGroupForQueryGroupListItem
}
fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  title
}`) as unknown as TypedDocumentString<GetQueryGroupListLayoutQuery, GetQueryGroupListLayoutQueryVariables>;