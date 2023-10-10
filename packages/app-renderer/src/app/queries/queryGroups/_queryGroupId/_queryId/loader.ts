import { LoaderFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

const GetQueryDetailPage = graphql(`
  query GetQueryDetailPage($id: ID!) {
    query: userQuery(id: $id) {
      ...UserQueryForQueryDetailPage
    }
  }
`)

export const loader: LoaderFunction = async ({ params }) => {
  const id = params?.queryId as string
  return requestToGraphQL(GetQueryDetailPage, { id })
}
