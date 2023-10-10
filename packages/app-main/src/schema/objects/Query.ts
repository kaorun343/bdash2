import { builder } from '../../builder'
import { DataSourceRef } from './DataSource'

builder.queryType({
  fields: (t) => ({
    dataSources: t.field({
      type: [DataSourceRef],
      resolve: (_parent, _args, { db }) => db.selectFrom('dataSource').selectAll().execute(),
    }),
  }),
})
