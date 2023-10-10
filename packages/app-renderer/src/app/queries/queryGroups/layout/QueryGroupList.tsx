import { FC } from 'react'
import { FragmentType, getFragmentData, graphql } from '~/gql'
import { QueryGroupListItem } from './QueryGroupListItem'

const UserQueryGroupForQueryGroupList = graphql(`
  fragment UserQueryGroupForQueryGroupList on UserQueryGroup {
    id
    ...UserQueryGroupForQueryGroupListItem
  }
`)

type Props = {
  queryGroups: readonly FragmentType<typeof UserQueryGroupForQueryGroupList>[]
}

export const QueryGroupList: FC<Props> = (props) => {
  const queryGroups = getFragmentData(UserQueryGroupForQueryGroupList, props.queryGroups)

  return (
    <ul>
      {queryGroups.map((queryGroup) => (
        <QueryGroupListItem key={queryGroup.id} queryGroup={queryGroup} />
      ))}
    </ul>
  )
}
