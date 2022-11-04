import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { GetUserQueriesQuery, Sdk } from '~/lib/graphql/generated'
import { QueryListItem } from './QueryListItem'

type Props = {
  sdk: Sdk
}

export const QueryList: FC<Props> = ({ sdk }) => {
  const { data } = useQuery<GetUserQueriesQuery>(['getUserQueries'], () => sdk.getUserQueries())

  return (
    <ul>
      {data?.userQueries.map((query) => (
        <QueryListItem key={query.id} query={query} />
      ))}
    </ul>
  )
}
