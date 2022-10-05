import * as Types from '../../../types';

import { UserQueryForQueryListItemFragmentDoc } from '../components/QueryListItem.generated';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type GetQueriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetQueriesQuery = { queries: Array<{ id: string, title: string }> };


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
