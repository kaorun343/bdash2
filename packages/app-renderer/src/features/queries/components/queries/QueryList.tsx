import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Sdk } from '~/lib/graphql/generated'
import { QueryListItem } from './QueryListItem'

type Props = {
  groupId: string
  sdk: Sdk
}

export const QueryList: FC<Props> = ({ groupId, sdk }) => {
  const { data } = useQuery(['getUserQueries', groupId], () => sdk.queryListPage({ groupId }))

  return (
    <ul>
      {data?.userQueriesByGroup.map((query) => (
        <QueryListItem key={query.id} groupId={groupId} query={query} />
      ))}
    </ul>
  )
}
