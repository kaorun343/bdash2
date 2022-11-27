import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateUserQueryInput = {
  title: Scalars['String'];
};

export type CreateUserQueryPayload = {
  userQuery: UserQuery;
};

export type DataSource = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type DataSourceTable = {
  name: Scalars['String'];
};

export type Mutation = {
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
  id: Scalars['ID'];
};

export type NoopInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
};

export type NoopPayload = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Query = {
  dataSourceTablesByDataSourceId: Array<DataSourceTable>;
  dataSources: Array<DataSource>;
  node?: Maybe<Node>;
  userQueries: Array<UserQuery>;
  userQueriesByGroup: Array<UserQuery>;
  userQuery: UserQuery;
  userQueryGroups: Array<UserQueryGroup>;
};


export type QueryDataSourceTablesByDataSourceIdArgs = {
  dataSourceId: Scalars['ID'];
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryUserQueriesByGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryUserQueryArgs = {
  id: Scalars['ID'];
};

export type TestSqlite3ConnectionInput = {
  path: Scalars['String'];
};

export type TestSqlite3ConnectionResponse = {
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UpdateUserQueryTitleInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type UpdateUserQueryTitlePayload = {
  userQuery: UserQuery;
};

export type UserQuery = Node & {
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserQueryGroup = Node & {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type DataSourceForDataSourceListItemFragment = { id: string, name: string };

export type TestSqlite3ConnectionMutationVariables = Exact<{
  input: TestSqlite3ConnectionInput;
}>;


export type TestSqlite3ConnectionMutation = { testSqlite3Connection: { success: boolean } };

export type DataSourceListPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DataSourceListPageQuery = { dataSources: Array<{ id: string, name: string }> };

export type TableListPageQueryVariables = Exact<{
  dataSourceId: Scalars['ID'];
}>;


export type TableListPageQuery = { dataSourceTablesByDataSourceId: Array<{ name: string }> };

export type UserQueryForQueryListItemFragment = { id: string, title: string };

export type UserQueryGroupForQueryGroupListItemFragment = { id: string, title: string };

export type CreateUserQueryMutationVariables = Exact<{
  input: CreateUserQueryInput;
}>;


export type CreateUserQueryMutation = { createUserQuery: { userQuery: { id: string, title: string } } };

export type GetUserQueriesQueryVariables = Exact<{
  groupId: Scalars['ID'];
}>;


export type GetUserQueriesQuery = { userQueriesByGroup: Array<{ id: string, title: string }> };

export type GetUserQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQueryQuery = { userQuery: { id: string, title: string, body: string } };

export type GetUserQueryGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQueryGroupsQuery = { userQueryGroups: Array<{ id: string, title: string }> };

export type UpdateUserQueryTitleMutationVariables = Exact<{
  input: UpdateUserQueryTitleInput;
}>;


export type UpdateUserQueryTitleMutation = { updateUserQueryTitle: { userQuery: { title: string } } };

export const DataSourceForDataSourceListItemFragmentDoc = `
    fragment DataSourceForDataSourceListItem on DataSource {
  id
  name
}
    `;
export const UserQueryForQueryListItemFragmentDoc = `
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `;
export const UserQueryGroupForQueryGroupListItemFragmentDoc = `
    fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  title
}
    `;
export const TestSqlite3ConnectionDocument = `
    mutation testSqlite3Connection($input: TestSqlite3ConnectionInput!) {
  testSqlite3Connection(input: $input) {
    success
  }
}
    `;
export const DataSourceListPageDocument = `
    query dataSourceListPage {
  dataSources {
    ...DataSourceForDataSourceListItem
  }
}
    ${DataSourceForDataSourceListItemFragmentDoc}`;
export const TableListPageDocument = `
    query tableListPage($dataSourceId: ID!) {
  dataSourceTablesByDataSourceId(dataSourceId: $dataSourceId) {
    name
  }
}
    `;
export const CreateUserQueryDocument = `
    mutation createUserQuery($input: CreateUserQueryInput!) {
  createUserQuery(input: $input) {
    userQuery {
      ...UserQueryForQueryListItem
    }
  }
}
    ${UserQueryForQueryListItemFragmentDoc}`;
export const GetUserQueriesDocument = `
    query getUserQueries($groupId: ID!) {
  userQueriesByGroup(groupId: $groupId) {
    ...UserQueryForQueryListItem
  }
}
    ${UserQueryForQueryListItemFragmentDoc}`;
export const GetUserQueryDocument = `
    query getUserQuery($id: ID!) {
  userQuery(id: $id) {
    id
    title
    body
  }
}
    `;
export const GetUserQueryGroupsDocument = `
    query getUserQueryGroups {
  userQueryGroups {
    ...UserQueryGroupForQueryGroupListItem
  }
}
    ${UserQueryGroupForQueryGroupListItemFragmentDoc}`;
export const UpdateUserQueryTitleDocument = `
    mutation updateUserQueryTitle($input: UpdateUserQueryTitleInput!) {
  updateUserQueryTitle(input: $input) {
    userQuery {
      title
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    testSqlite3Connection(variables: TestSqlite3ConnectionMutationVariables, options?: C): Promise<TestSqlite3ConnectionMutation> {
      return requester<TestSqlite3ConnectionMutation, TestSqlite3ConnectionMutationVariables>(TestSqlite3ConnectionDocument, variables, options) as Promise<TestSqlite3ConnectionMutation>;
    },
    dataSourceListPage(variables?: DataSourceListPageQueryVariables, options?: C): Promise<DataSourceListPageQuery> {
      return requester<DataSourceListPageQuery, DataSourceListPageQueryVariables>(DataSourceListPageDocument, variables, options) as Promise<DataSourceListPageQuery>;
    },
    tableListPage(variables: TableListPageQueryVariables, options?: C): Promise<TableListPageQuery> {
      return requester<TableListPageQuery, TableListPageQueryVariables>(TableListPageDocument, variables, options) as Promise<TableListPageQuery>;
    },
    createUserQuery(variables: CreateUserQueryMutationVariables, options?: C): Promise<CreateUserQueryMutation> {
      return requester<CreateUserQueryMutation, CreateUserQueryMutationVariables>(CreateUserQueryDocument, variables, options) as Promise<CreateUserQueryMutation>;
    },
    getUserQueries(variables: GetUserQueriesQueryVariables, options?: C): Promise<GetUserQueriesQuery> {
      return requester<GetUserQueriesQuery, GetUserQueriesQueryVariables>(GetUserQueriesDocument, variables, options) as Promise<GetUserQueriesQuery>;
    },
    getUserQuery(variables: GetUserQueryQueryVariables, options?: C): Promise<GetUserQueryQuery> {
      return requester<GetUserQueryQuery, GetUserQueryQueryVariables>(GetUserQueryDocument, variables, options) as Promise<GetUserQueryQuery>;
    },
    getUserQueryGroups(variables?: GetUserQueryGroupsQueryVariables, options?: C): Promise<GetUserQueryGroupsQuery> {
      return requester<GetUserQueryGroupsQuery, GetUserQueryGroupsQueryVariables>(GetUserQueryGroupsDocument, variables, options) as Promise<GetUserQueryGroupsQuery>;
    },
    updateUserQueryTitle(variables: UpdateUserQueryTitleMutationVariables, options?: C): Promise<UpdateUserQueryTitleMutation> {
      return requester<UpdateUserQueryTitleMutation, UpdateUserQueryTitleMutationVariables>(UpdateUserQueryTitleDocument, variables, options) as Promise<UpdateUserQueryTitleMutation>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

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
    'testSqlite3Connection',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDataSourceListPageQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ dataSources })
 *   )
 * })
 */
export const mockDataSourceListPageQuery = (resolver: ResponseResolver<GraphQLRequest<DataSourceListPageQueryVariables>, GraphQLContext<DataSourceListPageQuery>, any>) =>
  graphql.query<DataSourceListPageQuery, DataSourceListPageQueryVariables>(
    'dataSourceListPage',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockTableListPageQuery((req, res, ctx) => {
 *   const { dataSourceId } = req.variables;
 *   return res(
 *     ctx.data({ dataSourceTablesByDataSourceId })
 *   )
 * })
 */
export const mockTableListPageQuery = (resolver: ResponseResolver<GraphQLRequest<TableListPageQueryVariables>, GraphQLContext<TableListPageQuery>, any>) =>
  graphql.query<TableListPageQuery, TableListPageQueryVariables>(
    'tableListPage',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateUserQueryMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createUserQuery })
 *   )
 * })
 */
export const mockCreateUserQueryMutation = (resolver: ResponseResolver<GraphQLRequest<CreateUserQueryMutationVariables>, GraphQLContext<CreateUserQueryMutation>, any>) =>
  graphql.mutation<CreateUserQueryMutation, CreateUserQueryMutationVariables>(
    'createUserQuery',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetUserQueriesQuery((req, res, ctx) => {
 *   const { groupId } = req.variables;
 *   return res(
 *     ctx.data({ userQueriesByGroup })
 *   )
 * })
 */
export const mockGetUserQueriesQuery = (resolver: ResponseResolver<GraphQLRequest<GetUserQueriesQueryVariables>, GraphQLContext<GetUserQueriesQuery>, any>) =>
  graphql.query<GetUserQueriesQuery, GetUserQueriesQueryVariables>(
    'getUserQueries',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetUserQueryQuery((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ userQuery })
 *   )
 * })
 */
export const mockGetUserQueryQuery = (resolver: ResponseResolver<GraphQLRequest<GetUserQueryQueryVariables>, GraphQLContext<GetUserQueryQuery>, any>) =>
  graphql.query<GetUserQueryQuery, GetUserQueryQueryVariables>(
    'getUserQuery',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetUserQueryGroupsQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ userQueryGroups })
 *   )
 * })
 */
export const mockGetUserQueryGroupsQuery = (resolver: ResponseResolver<GraphQLRequest<GetUserQueryGroupsQueryVariables>, GraphQLContext<GetUserQueryGroupsQuery>, any>) =>
  graphql.query<GetUserQueryGroupsQuery, GetUserQueryGroupsQueryVariables>(
    'getUserQueryGroups',
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
    'updateUserQueryTitle',
    resolver
  )
