import { builder } from '../../builder'
import { DataSourceRef } from './DataSource'
import { QueryGroupRef } from './QueryGroup'

builder.queryType({
  fields: (t) => ({
    dataSources: t.field({
      type: [DataSourceRef],
      resolve: (_parent, _args, { db }) => db.selectFrom('dataSource').selectAll().execute(),
    }),
    queryGroups: t.field({
      type: [QueryGroupRef],
      resolve: (_parent, _args, { db }) => db.selectFrom('queryGroup').selectAll().execute(),
    }),
  }),
})
