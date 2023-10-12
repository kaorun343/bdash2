import { sql } from 'kysely'
import { builder } from '../../builder'
import { CreateDataSourceSQLite3InputRef } from '../inputs/CreateDataSourceSQLite3Input'
import { DeleteDataSourceInputRef } from '../inputs/DeleteDataSourceInput'
import { UpdateDataSourceSQLite3InputRef } from '../inputs/UpdateDataSourceSQLite3Input'
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
    updateDataSourceSQLite3: t.field({
      args: {
        input: t.arg({ type: UpdateDataSourceSQLite3InputRef, required: true }),
      },
      type: DataSourceRef,
      resolve: async (_parent, { input }, { db }) => {
        return db
          .updateTable('dataSource')
          .set({
            name: input.name,
            type: 'sqlite3',
            config: JSON.stringify({ path: input.path }),
            updatedAt: sql`datetime('now')`,
          })
          .where('id', '=', input.id)
          .returningAll()
          .executeTakeFirstOrThrow()
      },
    }),
    deleteDataSource: t.int({
      args: {
        input: t.arg({ type: DeleteDataSourceInputRef, required: true }),
      },
      resolve: async (_parent, { input }, { db }) => {
        await db.deleteFrom('dataSource').where('id', '=', input.id).execute()
        return input.id
      },
    }),
  }),
})
