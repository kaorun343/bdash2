import { FC, useCallback } from 'react'
import { useLoaderData } from 'react-router-dom'
import { GetUserQueryQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetailHeader } from '../components/query/QueryDetailHeader'

type Props = {
  sdk: Sdk
}

export const Query: FC<Props> = ({ sdk }) => {
  const data = useLoaderData() as GetUserQueryQuery

  const handleChangeTitle = useCallback((value: string) => {}, [])

  return (
    <div className="flex-1">
      <QueryDetailHeader value={data.userQuery.title} onChange={handleChangeTitle} />
    </div>
  )
}
