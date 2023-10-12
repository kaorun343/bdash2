import { builder } from '../../builder'
import { DataSource } from '../../types'
import { DateTimeResolverRef } from '../scalars/DateTime'
import { DataSourceConfigRef } from '../unions/DataSourceConfig'

export const DataSourceRef = builder.objectRef<DataSource>('DataSource')

DataSourceRef.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    config: t.field({
      type: DataSourceConfigRef,
      resolve: (source) => ({ type: source.type, config: JSON.parse(source.config) }),
    }),
    createdAt: t.expose('createdAt', { type: DateTimeResolverRef }),
    updatedAt: t.expose('updatedAt', { type: DateTimeResolverRef }),
  }),
})
