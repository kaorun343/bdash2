import { Kysely } from 'kysely'
import initSqlJs from 'sql.js'
import { createDatabase } from '../src/database'
import { migrateToLatest } from '../src/migrations'
import { Database } from '../src/types'

const SQL = await initSqlJs()
let db: Kysely<Database>

describe('migrations', () => {
  it('should migrate to latest', async () => {
    db = createDatabase(new SQL.Database())
    const result = await migrateToLatest(db)
    expect(result).toMatchInlineSnapshot(`
      {
        "results": [
          {
            "direction": "Up",
            "migrationName": "v1",
            "status": "Success",
          },
        ],
      }
    `)
  })
})
