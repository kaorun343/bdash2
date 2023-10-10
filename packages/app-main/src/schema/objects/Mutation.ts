import { sql } from 'kysely'
import { builder } from '../../builder'
import { CreateDataSourceSQLite3InputRef } from '../inputs/CreateDataSourceSQLite3Input'
import { DataSourceRef } from './DataSource'

builder.mutationType({
  fields: (t) => ({
    createDataSourceSQLite3: t.field({
      args: {
        input: t.arg({ type: CreateDataSourceSQLite3InputRef, required: true }),
      },
      type: DataSourceRef,
      resolve: async (_parent, { input }, { db }) => {
        return db
          .insertInto('dataSource')
          .values({
            name: input.name,
            type: 'sqlite3',
            config: JSON.stringify({ path: input.path }),
            createdAt: sql`datetime('now')`,
            updatedAt: sql`datetime('now')`,
          })
          .returningAll()
          .executeTakeFirstOrThrow()
      },
    }),
  }),
})
