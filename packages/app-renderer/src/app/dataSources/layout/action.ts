import { ActionFunction } from 'react-router-dom'
import { graphql } from '~/gql'
import { requestToGraphQL } from '~/requestToGraphQL'

export const CONNECTION_TEST_INTENT = 'connectionTest'

const TestSqlite3Connection = graphql(`
  query TestSqlite3Connection($path: String!) {
    connectionTestSQLite3(path: $path) {
      ...ConnectionTestForDialogFormButtonList
    }
  }
`)

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const intent = formData.get('intent') as string

  switch (intent) {
    case CONNECTION_TEST_INTENT:
      const type = formData.get('type') as string
      switch (type) {
        case 'sqlite3':
          const path = formData.get('path') as string
          const result = await requestToGraphQL(TestSqlite3Connection, { path })
          return result.connectionTestSQLite3
        default:
          throw new Error(`Unknown type: ${type}`)
      }
    default:
      console.info(JSON.parse(formData.get('serialized') as string))

      return {
        title: 'Data Sources',
      }
  }
}
