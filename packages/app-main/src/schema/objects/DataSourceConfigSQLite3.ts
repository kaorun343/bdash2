import { builder } from '../../builder'
import { DataSource } from '../../types'

export const DataSourceConfigSQLite3Ref = builder.objectRef<{ type: DataSource['type']; config: Record<string, any> }>(
  'DataSourceConfigSQLite3',
)

DataSourceConfigSQLite3Ref.implement({
  fields: (t) => ({
    path: t.string({ resolve: (source) => source.config.path }),
  }),
})
