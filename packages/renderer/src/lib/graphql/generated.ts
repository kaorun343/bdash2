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
};


export type MutationCreateUserQueryArgs = {
  input: CreateUserQueryInput;
};


export type MutationNoopArgs = {
  input: NoopInput;
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
  userQuery: UserQuery;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryUserQueryArgs = {
  id: Scalars['ID'];
};

export type UserQuery = Node & {
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserQueryForQueryListItemFragment = { id: string, title: string };

export type GetUserQueriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQueriesQuery = { userQueries: Array<{ id: string, title: string }> };

export const UserQueryForQueryListItemFragmentDoc = `
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `;
export const GetUserQueriesDocument = `
    query getUserQueries {
  userQueries {
    ...UserQueryForQueryListItem
  }
}
    ${UserQueryForQueryListItemFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getUserQueries(variables?: GetUserQueriesQueryVariables, options?: C): Promise<GetUserQueriesQuery> {
      return requester<GetUserQueriesQuery, GetUserQueriesQueryVariables>(GetUserQueriesDocument, variables, options) as Promise<GetUserQueriesQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

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
