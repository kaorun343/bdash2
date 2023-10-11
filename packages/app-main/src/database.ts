import {
  CompiledQuery,
  DatabaseConnection,
  Dialect,
  Driver,
  Kysely,
  QueryResult,
  SqliteAdapter,
  SqliteIntrospector,
  SqliteQueryCompiler,
} from 'kysely'
import { Database as SqlJsDatabase } from 'sql.js'
import { Database } from './types'

class SqlJsConnection implements DatabaseConnection {
  #db: SqlJsDatabase

  constructor(db: SqlJsDatabase) {
    this.#db = db
  }

  async executeQuery<R>(compiledQuery: CompiledQuery): Promise<QueryResult<R>> {
    const { sql, parameters } = compiledQuery
    const stmt = this.#db.prepare(sql)
    stmt.bind(parameters as any[])

    const rows: R[] = []
    while (stmt.step()) rows.push(stmt.getAsObject() as R)

    return {
      rows,
    }
  }

  async *streamQuery() {
    throw new Error("Sqlite driver doesn't support streaming")
  }
}

export const createDatabase = (database: SqlJsDatabase) => {
  const driver: Driver = {
    init: async () => {},
    acquireConnection: async () => new SqlJsConnection(database),
    beginTransaction: async () => {
      throw new Error('beginTransaction not implemented')
    },
    commitTransaction: async () => {
      throw new Error('commitTransaction not implemented')
    },
    rollbackTransaction: async () => {
      throw new Error('rollbackTransaction not implemented')
    },
    releaseConnection: async () => {},
    destroy: async () => {
      throw new Error('destroy not implemented')
    },
  }

  const dialect: Dialect = {
    createDriver: () => driver,
    createQueryCompiler: () => new SqliteQueryCompiler(),
    createAdapter: () => new SqliteAdapter(),
    createIntrospector: (db: Kysely<Database>) => new SqliteIntrospector(db),
  }

  return new Kysely<Database>({
    dialect,
  })
}
