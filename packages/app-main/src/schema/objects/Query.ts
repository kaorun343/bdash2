import { readFile } from 'node:fs/promises'
import initSqlJs from 'sql.js'
import { builder } from '../../builder'
import { BdashQueryRef } from './BdashQuery'
import { ConnectionTestRef } from './ConnectionTest'
import { DataSourceRef } from './DataSource'
import { QueryGroupRef } from './QueryGroup'

builder.queryType({
  fields: (t) => ({
    bdashQuery: t.field({
      type: BdashQueryRef,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: (_parent, { id }, { db }) =>
        db.selectFrom('query').where('id', '=', id).limit(1).selectAll().executeTakeFirstOrThrow(),
    }),
    connectionTestSQLite3: t.field({
      type: ConnectionTestRef,
      args: {
        path: t.arg.string({ required: true }),
      },
      resolve: async (_parent, { path }) => {
        try {
          const SQL = await initSqlJs()
          const db = new SQL.Database(await readFile(path))
          db.run(`SELECT 1`)
          return { success: true }
        } catch (err) {
          return { success: false, message: (err as any).message }
        }
      },
    }),
    dataSources: t.field({
      type: [DataSourceRef],
      resolve: (_parent, _args, { db }) => db.selectFrom('dataSource').selectAll().execute(),
    }),
    queryGroups: t.field({
      type: [QueryGroupRef],
      resolve: (_parent, _args, { db }) => db.selectFrom('queryGroup').selectAll().execute(),
    }),
    queriesByQueryGroupId: t.field({
      type: [BdashQueryRef],
      args: {
        queryGroupId: t.arg.id({ required: true }),
      },
      resolve: (_parent, { queryGroupId }, { db }) =>
        db.selectFrom('query').where('queryGroupId', '=', queryGroupId).selectAll().execute(),
    }),
  }),
})
