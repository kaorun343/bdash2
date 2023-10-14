import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
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

export enum QueryStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export type UpdateDataSourceSqLite3Input = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type DataSourceForDataSourceListLayoutFragment = { __typename?: 'DataSource', id: string, name: string };

export type DataSourceForDataSourceListFragment = { __typename?: 'DataSource', id: string, name: string };

export type DataSourceForDataSourceListItemFragment = { __typename?: 'DataSource', id: string, name: string };

export type TestSqlite3ConnectionQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type TestSqlite3ConnectionQuery = { __typename?: 'Query', connectionTestSQLite3: { __typename?: 'ConnectionTest', success: boolean } };

export type GetDataSourceListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataSourceListLayoutQuery = { __typename?: 'Query', dataSources: Array<{ __typename?: 'DataSource', id: string, name: string }> };

export type BdashQueryForQueryDetailPageFragment = { __typename?: 'BdashQuery', status?: QueryStatus | null, id: string, title: string, body: string };

export type BdashQueryForEditorFragment = { __typename?: 'BdashQuery', id: string, title: string, body: string };

export type GetQueryDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetQueryDetailPageQuery = { __typename?: 'Query', query: { __typename?: 'BdashQuery', status?: QueryStatus | null, id: string, title: string, body: string } };

export type BdashQueryForQueryListItemFragment = { __typename?: 'BdashQuery', id: string, title: string };

export type QueryGroupForQueryGroupListLayoutFragment = { __typename?: 'QueryGroup', id: string, name: string };

export type QueryGroupForQueryGroupListFragment = { __typename?: 'QueryGroup', id: string, name: string };

export type QueryGroupForQueryGroupListItemFragment = { __typename?: 'QueryGroup', id: string, name: string };

export type GetQueryGroupListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryGroupListLayoutQuery = { __typename?: 'Query', queryGroups: Array<{ __typename?: 'QueryGroup', id: string, name: string }> };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockTestSqlite3ConnectionQuery((req, res, ctx) => {
 *   const { path } = req.variables;
 *   return res(
 *     ctx.data({ connectionTestSQLite3 })
 *   )
 * })
 */
export const mockTestSqlite3ConnectionQuery = (resolver: ResponseResolver<GraphQLRequest<TestSqlite3ConnectionQueryVariables>, GraphQLContext<TestSqlite3ConnectionQuery>, any>) =>
  graphql.query<TestSqlite3ConnectionQuery, TestSqlite3ConnectionQueryVariables>(
    'TestSqlite3Connection',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetDataSourceListLayoutQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ dataSources })
 *   )
 * })
 */
export const mockGetDataSourceListLayoutQuery = (resolver: ResponseResolver<GraphQLRequest<GetDataSourceListLayoutQueryVariables>, GraphQLContext<GetDataSourceListLayoutQuery>, any>) =>
  graphql.query<GetDataSourceListLayoutQuery, GetDataSourceListLayoutQueryVariables>(
    'GetDataSourceListLayout',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQueryDetailPageQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ bdashQuery })
 *   )
 * })
 */
export const mockGetQueryDetailPageQuery = (resolver: ResponseResolver<GraphQLRequest<GetQueryDetailPageQueryVariables>, GraphQLContext<GetQueryDetailPageQuery>, any>) =>
  graphql.query<GetQueryDetailPageQuery, GetQueryDetailPageQueryVariables>(
    'GetQueryDetailPage',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQueryGroupListLayoutQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ queryGroups })
 *   )
 * })
 */
export const mockGetQueryGroupListLayoutQuery = (resolver: ResponseResolver<GraphQLRequest<GetQueryGroupListLayoutQueryVariables>, GraphQLContext<GetQueryGroupListLayoutQuery>, any>) =>
  graphql.query<GetQueryGroupListLayoutQuery, GetQueryGroupListLayoutQueryVariables>(
    'GetQueryGroupListLayout',
    resolver
  )
