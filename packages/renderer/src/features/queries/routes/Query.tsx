import { useQuery } from '@tanstack/react-query'
import { FC, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { QueryDetailHeader } from '../components/query/QueryDetailHeader'

type Props = {
  sdk: Sdk
}

export const Query: FC<Props> = ({ sdk }) => {
  const { queryId } = useParams()
  const { data } = useQuery(['getUserQuery', queryId], () => (queryId ? sdk.getUserQuery({ id: queryId }) : undefined))

  const handleChangeTitle = useCallback((value: string) => {}, [])

  if (!data) return null

  return (
    <div className="flex-1">
      <QueryDetailHeader value={data.userQuery.title} onChange={handleChangeTitle} />
    </div>
  )
}
