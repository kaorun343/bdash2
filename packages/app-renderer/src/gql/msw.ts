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

export enum UserQueryStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
  Working = 'WORKING'
}

export type DataSourceForDataSourceListLayoutFragment = { __typename?: 'DataSource', id: string, name: string };

export type DataSourceForDataSourceListFragment = { __typename?: 'DataSource', id: string, name: string };

export type DataSourceForDataSourceListItemFragment = { __typename?: 'DataSource', id: string, name: string };

export type TestSqlite3ConnectionMutationVariables = Exact<{
  input: TestSqlite3ConnectionInput;
}>;


export type TestSqlite3ConnectionMutation = { __typename?: 'Mutation', testSqlite3Connection: { __typename?: 'TestSqlite3ConnectionResponse', success: boolean } };

export type GetDataSourceListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataSourceListLayoutQuery = { __typename?: 'Query', dataSources: Array<{ __typename?: 'DataSource', id: string, name: string }> };

export type UserQueryForQueryDetailPageFragment = { __typename?: 'UserQuery', status?: UserQueryStatus | null, id: string, title: string, body: string };

export type UserQueryForEditorFragment = { __typename?: 'UserQuery', id: string, title: string, body: string };

export type UpdateUserQueryTitleMutationVariables = Exact<{
  input: UpdateUserQueryTitleInput;
}>;


export type UpdateUserQueryTitleMutation = { __typename?: 'Mutation', updateUserQueryTitle: { __typename?: 'UpdateUserQueryTitlePayload', userQuery: { __typename?: 'UserQuery', title: string } } };

export type GetQueryDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetQueryDetailPageQuery = { __typename?: 'Query', query: { __typename?: 'UserQuery', status?: UserQueryStatus | null, id: string, title: string, body: string } };

export type UserQueryForQueryListItemFragment = { __typename?: 'UserQuery', id: string, title: string };

export type UserQueryGroupForQueryGroupListLayoutFragment = { __typename?: 'UserQueryGroup', id: string, title: string };

export type UserQueryGroupForQueryGroupListFragment = { __typename?: 'UserQueryGroup', id: string, title: string };

export type UserQueryGroupForQueryGroupListItemFragment = { __typename?: 'UserQueryGroup', id: string, title: string };

export type GetQueryGroupListLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueryGroupListLayoutQuery = { __typename?: 'Query', queryGroups: Array<{ __typename?: 'UserQueryGroup', id: string, title: string }> };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockTestSqlite3ConnectionMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ testSqlite3Connection })
 *   )
 * })
 */
export const mockTestSqlite3ConnectionMutation = (resolver: ResponseResolver<GraphQLRequest<TestSqlite3ConnectionMutationVariables>, GraphQLContext<TestSqlite3ConnectionMutation>, any>) =>
  graphql.mutation<TestSqlite3ConnectionMutation, TestSqlite3ConnectionMutationVariables>(
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
 * mockUpdateUserQueryTitleMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ updateUserQueryTitle })
 *   )
 * })
 */
export const mockUpdateUserQueryTitleMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateUserQueryTitleMutationVariables>, GraphQLContext<UpdateUserQueryTitleMutation>, any>) =>
  graphql.mutation<UpdateUserQueryTitleMutation, UpdateUserQueryTitleMutationVariables>(
    'UpdateUserQueryTitle',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQueryDetailPageQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ userQuery })
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
 *     ctx.data({ userQueryGroups })
 *   )
 * })
 */
export const mockGetQueryGroupListLayoutQuery = (resolver: ResponseResolver<GraphQLRequest<GetQueryGroupListLayoutQueryVariables>, GraphQLContext<GetQueryGroupListLayoutQuery>, any>) =>
  graphql.query<GetQueryGroupListLayoutQuery, GetQueryGroupListLayoutQueryVariables>(
    'GetQueryGroupListLayout',
    resolver
  )
