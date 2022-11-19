import { UserQuery, UserQueryGroup } from '~/lib/graphql/generated'

export const getUserQueryListPath = (userQueryGroupId: UserQueryGroup['id']) => {
  return `/query-groups/${userQueryGroupId}` as const
}

export const getUserQueryDetailPath = (userQueryGroupId: UserQueryGroup['id'], userQueryId: UserQuery['id']) => {
  return `/query-groups/${userQueryGroupId}/${userQueryId}` as const
}
