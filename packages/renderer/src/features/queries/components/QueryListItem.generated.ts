import * as Types from '../../../types';

export type UserQueryForQueryListItemFragment = { id: string, title: string };

export const UserQueryForQueryListItemFragmentDoc = `
    fragment UserQueryForQueryListItem on UserQuery {
  id
  title
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;