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

beforeEach(async () => {
  db = createDatabase(new SQL.Database())
  await migrateToLatest(db)

  await db
    .insertInto('queryGroup')
    .values({
      name: 'test group',
      createdAt: '2021-01-01 00:00:00',
      updatedAt: '2021-01-01 00:00:00',
    })
    .execute()
})

const source = print(gql`
  query getQueryGroups {
    queryGroups {
      id
      name
      createdAt
      updatedAt
    }
  }
`)

describe('Query.queryGroups', () => {
  it('should return all query groups', async () => {
    const result = await graphql({
      schema,
      source,
      contextValue: { db },
    })
    expect(result).toMatchInlineSnapshot(`
      {
        "data": {
          "queryGroups": [
            {
              "createdAt": "2020-12-31T15:00:00.000Z",
              "id": "1",
              "name": "test group",
              "updatedAt": "2020-12-31T15:00:00.000Z",
            },
          ],
        },
      }
    `)
  })
})
