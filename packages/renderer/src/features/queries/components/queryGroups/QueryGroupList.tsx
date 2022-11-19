import { FC } from 'react'
import { useLoaderData } from 'react-router-dom'
import { GetUserQueryGroupsQuery, Sdk } from '~/lib/graphql/generated'
import { QueryGroupListItem } from './QueryGroupListItem'

type Props = {
  sdk: Sdk
}

export const QueryGroupList: FC<Props> = ({ sdk }) => {
  const data = useLoaderData() as GetUserQueryGroupsQuery
  const userQueryGroups = data.userQueryGroups

  return (
    <ul>
      {userQueryGroups.map((userQueryGroup) => (
        <QueryGroupListItem key={userQueryGroup.id} userQueryGroup={userQueryGroup} />
      ))}
    </ul>
  )
}
