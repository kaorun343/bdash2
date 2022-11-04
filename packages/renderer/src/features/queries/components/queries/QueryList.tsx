import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { GetUserQueriesQuery, Sdk } from '~/lib/graphql/generated'
import { QueryListHeader } from './QueryListHeader'
import { QueryListItem } from './QueryListItem'

type Props = {
  sdk: Sdk
}

export const QueryList: FC<Props> = ({ sdk }) => {
  const { data } = useQuery<GetUserQueriesQuery>(['getUserQueries'], () => sdk.getUserQueries())

  return (
    <div className="h-screen w-72 border-r border-gray-300">
      <QueryListHeader sdk={sdk} />
      <ul>
        {data?.userQueries.map((query) => (
          <QueryListItem key={query.id} query={query} />
        ))}
      </ul>
    </div>
  )
}
