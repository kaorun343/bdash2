import { builder } from '../../builder'
import { DataSource } from '../../types'

export const DataSourceConfigSQLite3Ref = builder.objectRef<DataSource>('DataSourceConfigSQLite3')

DataSourceConfigSQLite3Ref.implement({
  fields: (t) => ({
    path: t.string({ resolve: (source) => source.config.path }),
  }),
})
