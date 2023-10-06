import { TypedDocumentString } from '~/gql/graphql'

export const requestToGraphQL = async <TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
  return window.request(document, variables)
}
