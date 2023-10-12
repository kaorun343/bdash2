import { graphql, print } from 'graphql'
import gql from 'graphql-tag'
import { Kysely } from 'kysely'
import initSqlJs from 'sql.js'
import { createDatabase } from '../../../src/database'
import { migrateToLatest } from '../../../src/migrations'
import { schema } from '../../../src/schema'
import { Database } from '../../../src/types'

const source = print(gql`
  query getDataSources {
    dataSources {
      id
      name
      config {
        __typename
        ... on DataSourceConfigSQLite3 {
          path
        }
      }
      createdAt
      updatedAt
    }
  }
`)

const SQL = await initSqlJs()
let db: Kysely<Database>

beforeEach(async () => {
  db = createDatabase(new SQL.Database())
  await migrateToLatest(db)

  await db
    .insertInto('dataSource')
    .values({
      name: 'test',
      type: 'sqlite3',
      config: JSON.stringify({ path: '/path/to/sqlite3.database' }),
      createdAt: '2021-01-01 00:00:00',
      updatedAt: '2021-01-01 00:00:00',
    })
    .execute()
})

describe('Query.dataSources', () => {
  it('should return all data sources', async () => {
    const result = await graphql({
      schema,
      source,
      contextValue: { db },
    })
    expect(result).toMatchSnapshot()
  })
})
