import { FC } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { GetQueryDetailPageQuery } from '~/gql/graphql'
import { Navigation } from './Navigation'
import { Editor } from './Editor'
import { getFragmentData, graphql } from '~/gql'

const UserQueryForQueryDetailPage = graphql(`
  fragment UserQueryForQueryDetailPage on UserQuery {
    status
    ...UserQueryForEditor
  }
`)

export const Component: FC = () => {
  const data = useLoaderData() as GetQueryDetailPageQuery
  const params = useParams()
  const groupId = params.queryGroupId as string
  const query = getFragmentData(UserQueryForQueryDetailPage, data.query)

  return (
    <div className="flex-1">
      <Editor query={query} groupId={groupId} />
      <Navigation status={query.status} />
    </div>
  )
}
