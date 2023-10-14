import { FC } from 'react'
import { FragmentType, getFragmentData, graphql } from '~/gql'
import { QueryGroupListItem } from './QueryGroupListItem'

const QueryGroupForQueryGroupList = graphql(`
  fragment QueryGroupForQueryGroupList on QueryGroup {
    id
    ...QueryGroupForQueryGroupListItem
  }
`)

type Props = {
  queryGroups: readonly FragmentType<typeof QueryGroupForQueryGroupList>[]
}

export const QueryGroupList: FC<Props> = (props) => {
  const queryGroups = getFragmentData(QueryGroupForQueryGroupList, props.queryGroups)

  return (
    <ul>
      {queryGroups.map((queryGroup) => (
        <QueryGroupListItem key={queryGroup.id} queryGroup={queryGroup} />
      ))}
    </ul>
  )
}
