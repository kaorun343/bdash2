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

export type BdashQuery = {
  __typename?: 'BdashQuery';
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  status?: Maybe<QueryStatus>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConnectionTest = {
  __typename?: 'ConnectionTest';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type CreateDataSourceSqLite3Input = {
  name: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type DataSource = {
  __typename?: 'DataSource';
  config: DataSourceConfig;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type DataSourceConfig = DataSourceConfigSqLite3;

export type DataSourceConfigSqLite3 = {
  __typename?: 'DataSourceConfigSQLite3';
  path: Scalars['String']['output'];
};

export type DeleteDataSourceInput = {
  id: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDataSourceSQLite3: DataSource;
  deleteDataSource: Scalars['Int']['output'];
  updateDataSourceSQLite3: DataSource;
};


export type MutationCreateDataSourceSqLite3Args = {
  input: CreateDataSourceSqLite3Input;
};


export type MutationDeleteDataSourceArgs = {
  input: DeleteDataSourceInput;
};


export type MutationUpdateDataSourceSqLite3Args = {
  input: UpdateDataSourceSqLite3Input;
};

export type Query = {
  __typename?: 'Query';
  bdashQuery: BdashQuery;
  connectionTestSQLite3: ConnectionTest;
  dataSources: Array<DataSource>;
  queriesByQueryGroupId: Array<BdashQuery>;
  queryGroups: Array<QueryGroup>;
};


export type QueryBdashQueryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConnectionTestSqLite3Args = {
  path: Scalars['String']['input'];
};


export type QueryQueriesByQueryGroupIdArgs = {
  queryGroupId: Scalars['ID']['input'];
};

export type QueryGroup = {
  __typename?: 'QueryGroup';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type QueryStatus =
  | 'FAILURE'
  | 'SUCCESS';

export type UpdateDataSourceSqLite3Input = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type DataSourceForDataSourceListLayoutFragment = (
  { __typename?: 'DataSource' }
  & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListFragment': DataSourceForDataSourceListFragment } }
) & { ' $fragmentName'?: 'DataSourceForDataSourceListLayoutFragment' };

export type DataSourceForDataSourceListFragment = (
  { __typename?: 'DataSource', id: string }
  & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListItemFragment': DataSourceForDataSourceListItemFragment } }
) & { ' $fragmentName'?: 'DataSourceForDataSourceListFragment' };

export type DataSourceForDataSourceListItemFragment = { __typename?: 'DataSource', id: string, name: string } & { ' $fragmentName'?: 'DataSourceForDataSourceListItemFragment' };

export type TestSqlite3ConnectionQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type TestSqlite3ConnectionQuery = { __typename?: 'Query', connectionTestSQLite3: (
    { __typename?: 'ConnectionTest' }
    & { ' $fragmentRefs'?: { 'ConnectionTestForDialogFormButtonListFragment': ConnectionTestForDialogFormButtonListFragment } }
  ) };

export type ConnectionTestForDialogFormButtonListFragment = { __typename?: 'ConnectionTest', success: boolean, message?: string | null } & { ' $fragmentName'?: 'ConnectionTestForDialogFormButtonListFragment' };

export type GetDataSourceListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataSourceListLayoutQuery = { __typename?: 'Query', dataSources: Array<(
    { __typename?: 'DataSource' }
    & { ' $fragmentRefs'?: { 'DataSourceForDataSourceListLayoutFragment': DataSourceForDataSourceListLayoutFragment } }
  )> };

export type BdashQueryForQueryDetailPageFragment = (
  { __typename?: 'BdashQuery', status?: QueryStatus | null }
  & { ' $fragmentRefs'?: { 'BdashQueryForEditorFragment': BdashQueryForEditorFragment } }
) & { ' $fragmentName'?: 'BdashQueryForQueryDetailPageFragment' };

export type BdashQueryForEditorFragment = { __typename?: 'BdashQuery', id: string, title: string, body: string } & { ' $fragmentName'?: 'BdashQueryForEditorFragment' };

export type GetQueryDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetQueryDetailPageQuery = { __typename?: 'Query', query: (
    { __typename?: 'BdashQuery' }
    & { ' $fragmentRefs'?: { 'BdashQueryForQueryDetailPageFragment': BdashQueryForQueryDetailPageFragment } }
  ) };

export type BdashQueryForQueryListItemFragment = { __typename?: 'BdashQuery', id: string, title: string } & { ' $fragmentName'?: 'BdashQueryForQueryListItemFragment' };

export type QueryGroupForQueryGroupListLayoutFragment = (
  { __typename?: 'QueryGroup' }
  & { ' $fragmentRefs'?: { 'QueryGroupForQueryGroupListFragment': QueryGroupForQueryGroupListFragment } }
) & { ' $fragmentName'?: 'QueryGroupForQueryGroupListLayoutFragment' };

export type QueryGroupForQueryGroupListFragment = (
  { __typename?: 'QueryGroup', id: string }
  & { ' $fragmentRefs'?: { 'QueryGroupForQueryGroupListItemFragment': QueryGroupForQueryGroupListItemFragment } }
) & { ' $fragmentName'?: 'QueryGroupForQueryGroupListFragment' };

export type QueryGroupForQueryGroupListItemFragment = { __typename?: 'QueryGroup', id: string, name: string } & { ' $fragmentName'?: 'QueryGroupForQueryGroupListItemFragment' };

export type GetQueryGroupListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryGroupListLayoutQuery = { __typename?: 'Query', queryGroups: Array<(
    { __typename?: 'QueryGroup' }
    & { ' $fragmentRefs'?: { 'QueryGroupForQueryGroupListLayoutFragment': QueryGroupForQueryGroupListLayoutFragment } }
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
export const ConnectionTestForDialogFormButtonListFragmentDoc = new TypedDocumentString(`
    fragment ConnectionTestForDialogFormButtonList on ConnectionTest {
  success
  message
}
    `, {"fragmentName":"ConnectionTestForDialogFormButtonList"}) as unknown as TypedDocumentString<ConnectionTestForDialogFormButtonListFragment, unknown>;
export const BdashQueryForEditorFragmentDoc = new TypedDocumentString(`
    fragment BdashQueryForEditor on BdashQuery {
  id
  title
  body
}
    `, {"fragmentName":"BdashQueryForEditor"}) as unknown as TypedDocumentString<BdashQueryForEditorFragment, unknown>;
export const BdashQueryForQueryDetailPageFragmentDoc = new TypedDocumentString(`
    fragment BdashQueryForQueryDetailPage on BdashQuery {
  status
  ...BdashQueryForEditor
}
    fragment BdashQueryForEditor on BdashQuery {
  id
  title
  body
}`, {"fragmentName":"BdashQueryForQueryDetailPage"}) as unknown as TypedDocumentString<BdashQueryForQueryDetailPageFragment, unknown>;
export const BdashQueryForQueryListItemFragmentDoc = new TypedDocumentString(`
    fragment BdashQueryForQueryListItem on BdashQuery {
  id
  title
}
    `, {"fragmentName":"BdashQueryForQueryListItem"}) as unknown as TypedDocumentString<BdashQueryForQueryListItemFragment, unknown>;
export const QueryGroupForQueryGroupListItemFragmentDoc = new TypedDocumentString(`
    fragment QueryGroupForQueryGroupListItem on QueryGroup {
  id
  name
}
    `, {"fragmentName":"QueryGroupForQueryGroupListItem"}) as unknown as TypedDocumentString<QueryGroupForQueryGroupListItemFragment, unknown>;
export const QueryGroupForQueryGroupListFragmentDoc = new TypedDocumentString(`
    fragment QueryGroupForQueryGroupList on QueryGroup {
  id
  ...QueryGroupForQueryGroupListItem
}
    fragment QueryGroupForQueryGroupListItem on QueryGroup {
  id
  name
}`, {"fragmentName":"QueryGroupForQueryGroupList"}) as unknown as TypedDocumentString<QueryGroupForQueryGroupListFragment, unknown>;
export const QueryGroupForQueryGroupListLayoutFragmentDoc = new TypedDocumentString(`
    fragment QueryGroupForQueryGroupListLayout on QueryGroup {
  ...QueryGroupForQueryGroupList
}
    fragment QueryGroupForQueryGroupList on QueryGroup {
  id
  ...QueryGroupForQueryGroupListItem
}
fragment QueryGroupForQueryGroupListItem on QueryGroup {
  id
  name
}`, {"fragmentName":"QueryGroupForQueryGroupListLayout"}) as unknown as TypedDocumentString<QueryGroupForQueryGroupListLayoutFragment, unknown>;
export const TestSqlite3ConnectionDocument = new TypedDocumentString(`
    query TestSqlite3Connection($path: String!) {
  connectionTestSQLite3(path: $path) {
    ...ConnectionTestForDialogFormButtonList
  }
}
    fragment ConnectionTestForDialogFormButtonList on ConnectionTest {
  success
  message
}`) as unknown as TypedDocumentString<TestSqlite3ConnectionQuery, TestSqlite3ConnectionQueryVariables>;
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
export const GetQueryDetailPageDocument = new TypedDocumentString(`
    query GetQueryDetailPage($id: ID!) {
  query: bdashQuery(id: $id) {
    ...BdashQueryForQueryDetailPage
  }
}
    fragment BdashQueryForQueryDetailPage on BdashQuery {
  status
  ...BdashQueryForEditor
}
fragment BdashQueryForEditor on BdashQuery {
  id
  title
  body
}`) as unknown as TypedDocumentString<GetQueryDetailPageQuery, GetQueryDetailPageQueryVariables>;
export const GetQueryGroupListLayoutDocument = new TypedDocumentString(`
    query GetQueryGroupListLayout {
  queryGroups {
    ...QueryGroupForQueryGroupListLayout
  }
}
    fragment QueryGroupForQueryGroupListLayout on QueryGroup {
  ...QueryGroupForQueryGroupList
}
fragment QueryGroupForQueryGroupList on QueryGroup {
  id
  ...QueryGroupForQueryGroupListItem
}
fragment QueryGroupForQueryGroupListItem on QueryGroup {
  id
  name
}`) as unknown as TypedDocumentString<GetQueryGroupListLayoutQuery, GetQueryGroupListLayoutQueryVariables>;