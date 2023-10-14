import { ActionFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

export const TEST_SQLITE3_CONNECTION_INTENT = 'testSqlite3Connection'

const TestSqlite3Connection = graphql(`
  query TestSqlite3Connection($path: String!) {
    connectionTestSQLite3(path: $path) {
      success
    }
  }
`)

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const intent = formData.get('intent') as string

  switch (intent) {
    case TEST_SQLITE3_CONNECTION_INTENT:
      const path = formData.get('path') as string
      const result = await requestToGraphQL(TestSqlite3Connection, { path })

      return result.connectionTestSQLite3.success
    default:
      console.info(JSON.parse(formData.get('serialized') as string))

      return {
        title: 'Data Sources',
      }
  }
}
