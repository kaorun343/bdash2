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

export type Mutation = {
  createUserQuery: CreateUserQueryPayload;
  noop: NoopPayload;
  updateUserQueryTitle: UpdateUserQueryTitlePayload;
};


export type MutationCreateUserQueryArgs = {
  input: CreateUserQueryInput;
};


export type MutationNoopArgs = {
  input: NoopInput;
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
  node?: Maybe<Node>;
  userQueries: Array<UserQuery>;
  userQueriesByGroup: Array<UserQuery>;
  userQuery: UserQuery;
  userQueryGroups: Array<UserQueryGroup>;
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
  name: Scalars['String'];
  userQueries: Array<UserQuery>;
};

export type UserQueryForQueryListItemFragment = { id: string, title: string };

export type UserQueryGroupForQueryGroupListItemFragment = { id: string, name: string };

export type CreateUserQueryMutationVariables = Exact<{
  input: CreateUserQueryInput;
}>;


export type CreateUserQueryMutation = { createUserQuery: { userQuery: { id: string, title: string } } };

export type GetUserQueriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQueriesQuery = { userQueries: Array<{ id: string, title: string }> };

export type GetUserQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQueryQuery = { userQuery: { id: string, title: string, body: string } };

export type GetUserQueryGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQueryGroupsQuery = { userQueryGroups: Array<{ id: string, name: string }> };

export type UpdateUserQueryTitleMutationVariables = Exact<{
  input: UpdateUserQueryTitleInput;
}>;


export type UpdateUserQueryTitleMutation = { updateUserQueryTitle: { userQuery: { title: string } } };

export const UserQueryForQueryListItemFragmentDoc = `
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `;
export const UserQueryGroupForQueryGroupListItemFragmentDoc = `
    fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
  id
  name
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
    query getUserQueries {
  userQueries {
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
    createUserQuery(variables: CreateUserQueryMutationVariables, options?: C): Promise<CreateUserQueryMutation> {
      return requester<CreateUserQueryMutation, CreateUserQueryMutationVariables>(CreateUserQueryDocument, variables, options) as Promise<CreateUserQueryMutation>;
    },
    getUserQueries(variables?: GetUserQueriesQueryVariables, options?: C): Promise<GetUserQueriesQuery> {
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
 *   return res(
 *     ctx.data({ userQueries })
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
