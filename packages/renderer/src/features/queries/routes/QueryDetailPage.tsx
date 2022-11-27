import { FC } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { QueryDetailPageQuery, Sdk } from '~/lib/graphql/generated'
import { QueryDetail } from '../components/query/QueryDetail'

type Props = {
  sdk: Sdk
}

export const QueryDetailPage: FC<Props> = ({ sdk }) => {
  const params = useParams()
  const groupId = params.queryGroupId as string
  const data = useLoaderData() as QueryDetailPageQuery

  return <QueryDetail data={data} groupId={groupId} sdk={sdk} />
}
