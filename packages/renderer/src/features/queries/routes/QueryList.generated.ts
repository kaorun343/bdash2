import * as Types from '../../../types';

export type GetQueriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetQueriesQuery = { queries: Array<{ id: string, title: string }> };


export const GetQueriesDocument = `
    query getQueries {
  queries {
    id
    title
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getQueries(variables?: GetQueriesQueryVariables, options?: C): Promise<GetQueriesQuery> {
      return requester<GetQueriesQuery, GetQueriesQueryVariables>(GetQueriesDocument, variables, options) as Promise<GetQueriesQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;