import initSqlJs from 'sql.js'
import { migrateToLatest } from '../../../src/migrations'
import { Kysely } from 'kysely'
import { Database } from '../../../src/types'
import { createDatabase } from '../../../src/database'
import gql from 'graphql-tag'
import { graphql, print } from 'graphql'
import { schema } from '../../../src/schema'

const SQL = await initSqlJs()
let db: Kysely<Database>

const source = print(gql`
  mutation createDataSourceSQLite3($input: CreateDataSourceSQLite3Input!) {
    createDataSourceSQLite3(input: $input) {
      id
      name
      config {
        __typename
        ... on DataSourceConfigSQLite3 {
          path
        }
      }
    }
  }
`)

beforeEach(async () => {
  db = createDatabase(new SQL.Database())
  await migrateToLatest(db)
})

describe('Mutation.createDataSourceSQLite3', () => {
  it('should create SQLite data source', async () => {
    const result = await graphql({
      schema,
      source,
      contextValue: { db },
      variableValues: { input: { name: 'test', path: '/path/to/sqlite3.database' } },
    })
    expect(result).toMatchSnapshot()
  })
})
