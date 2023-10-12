import { graphql, print } from 'graphql'
import gql from 'graphql-tag'
import { Kysely } from 'kysely'
import initSqlJs from 'sql.js'
import { createDatabase } from '../../../src/database'
import { migrateToLatest } from '../../../src/migrations'
import { schema } from '../../../src/schema'
import { Database } from '../../../src/types'

const SQL = await initSqlJs()
let db: Kysely<Database>

const queryGroupId = 30

beforeEach(async () => {
  db = createDatabase(new SQL.Database())
  await migrateToLatest(db)

  await db
    .insertInto('queryGroup')
    .values({
      id: queryGroupId,
      name: 'test group',
      createdAt: '2021-01-01 00:00:00',
      updatedAt: '2021-01-01 00:00:00',
    })
    .executeTakeFirstOrThrow()

  await db
    .insertInto('query')
    .values([
      {
        queryGroupId,
        title: 'test query',
        body: 'SELECT * FROM test_table',
        createdAt: '2021-01-01 00:00:00',
        updatedAt: '2021-01-01 00:00:00',
      },
      {
        queryGroupId,
        title: 'test query 2',
        body: 'SELECT * FROM test_table',
        createdAt: '2021-01-01 00:00:00',
        updatedAt: '2021-01-01 00:00:00',
        status: 'success',
      },
    ])
    .execute()
})

const source = print(gql`
  query getQueries($queryGroupId: ID!) {
    queriesByQueryGroupId(queryGroupId: $queryGroupId) {
      id
      title
      body
      status
      createdAt
      updatedAt
    }
  }
`)

describe('Query.queriesByQueryGroupId', () => {
  it('should return all queries by query group id', async () => {
    const result = await graphql({
      schema,
      source,
      contextValue: { db },
      variableValues: { queryGroupId },
    })
    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "queriesByQueryGroupId": [
            {
              "body": "SELECT * FROM test_table",
              "createdAt": "2020-12-31T15:00:00.000Z",
              "id": "1",
              "status": null,
              "title": "test query",
              "updatedAt": "2020-12-31T15:00:00.000Z",
            },
            {
              "body": "SELECT * FROM test_table",
              "createdAt": "2020-12-31T15:00:00.000Z",
              "id": "2",
              "status": "SUCCESS",
              "title": "test query 2",
              "updatedAt": "2020-12-31T15:00:00.000Z",
            },
          ],
        },
      }
    `)
  })
})
