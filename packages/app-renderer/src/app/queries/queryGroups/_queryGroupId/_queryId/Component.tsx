import { FC } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { getFragmentData, graphql } from '~/gql'
import { GetQueryDetailPageQuery } from '~/gql/graphql'
import { Editor } from './Editor'
import { Navigation } from './Navigation'

const BdashQueryForQueryDetailPage = graphql(`
  fragment BdashQueryForQueryDetailPage on BdashQuery {
    status
    ...BdashQueryForEditor
  }
`)

export const Component: FC = () => {
  const data = useLoaderData() as GetQueryDetailPageQuery
  const params = useParams()
  const groupId = params.queryGroupId as string
  const query = getFragmentData(BdashQueryForQueryDetailPage, data.query)

  return (
    <div className="flex-1">
      <Editor query={query} groupId={groupId} />
      <Navigation status={query.status} />
    </div>
  )
}
