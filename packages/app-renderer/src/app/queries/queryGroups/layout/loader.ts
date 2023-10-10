import { LoaderFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

const GetQueryGroupListLayout = graphql(`
  query GetQueryGroupListLayout {
    queryGroups: userQueryGroups {
      ...UserQueryGroupForQueryGroupListLayout
    }
  }
`)

export const loader: LoaderFunction = async () => {
  const data = await requestToGraphQL(GetQueryGroupListLayout)
  return data
}
