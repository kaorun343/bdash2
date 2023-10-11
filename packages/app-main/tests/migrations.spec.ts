import { Kysely } from 'kysely'
import initSqlJs from 'sql.js'
import { Database } from '../src/types'
import { createDatabase } from '../src/database'
import { migrateToLatest } from '../src/migrations'

const SQL = await initSqlJs()
let db: Kysely<Database>

describe('migrations', () => {
  it('should migrate to latest', async () => {
    db = createDatabase(new SQL.Database())
    const result = await migrateToLatest(db)
    expect(result).toMatchSnapshot()
  })
})
