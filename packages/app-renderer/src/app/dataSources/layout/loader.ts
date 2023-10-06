import { LoaderFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

const GetDataSourceListLayout = graphql(`
  query GetDataSourceListLayout {
    dataSources {
      ...DataSourceForDataSourceListLayout
    }
  }
`)

export const loader: LoaderFunction = async () => {
  const data = await requestToGraphQL(GetDataSourceListLayout)
  return data
}
