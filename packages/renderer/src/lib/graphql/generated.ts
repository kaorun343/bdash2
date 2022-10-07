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

export type Query = {
  queries: Array<UserQuery>;
};

export type UserQuery = {
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserQueryForQueryListItemFragment = { id: string, title: string };

export type GetQueriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueriesQuery = { queries: Array<{ id: string, title: string }> };

export const UserQueryForQueryListItemFragmentDoc = `
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `;
export const GetQueriesDocument = `
    query getQueries {
  queries {
    ...UserQueryForQueryListItem
  }
}
    ${UserQueryForQueryListItemFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getQueries(variables?: GetQueriesQueryVariables, options?: C): Promise<GetQueriesQuery> {
      return requester<GetQueriesQuery, GetQueriesQueryVariables>(GetQueriesDocument, variables, options) as Promise<GetQueriesQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetQueriesQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ queries })
 *   )
 * })
 */
export const mockGetQueriesQuery = (resolver: ResponseResolver<GraphQLRequest<GetQueriesQueryVariables>, GraphQLContext<GetQueriesQuery>, any>) =>
  graphql.query<GetQueriesQuery, GetQueriesQueryVariables>(
    'getQueries',
    resolver
  )
