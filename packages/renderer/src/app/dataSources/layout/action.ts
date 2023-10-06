import { ActionFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

export const TEST_SQLITE3_CONNECTION_INTENT = 'testSqlite3Connection'

const TestSqlite3Connection = graphql(`
  mutation TestSqlite3Connection($input: TestSqlite3ConnectionInput!) {
    testSqlite3Connection(input: $input) {
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
      const result = await requestToGraphQL(TestSqlite3Connection, {
        input: {
          path,
        },
      })

      return result.testSqlite3Connection.success
    default:
      console.info(JSON.parse(formData.get('serialized') as string))

      return {
        title: 'Data Sources',
      }
  }
}
