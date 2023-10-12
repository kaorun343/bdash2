import { builder } from '../../builder'
import { QueryGroup } from '../../types'
import { DateTimeResolverRef } from '../scalars/DateTime'

export const QueryGroupRef = builder.objectRef<QueryGroup>('QueryGroup')

QueryGroupRef.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    createdAt: t.expose('createdAt', { type: DateTimeResolverRef }),
    updatedAt: t.expose('updatedAt', { type: DateTimeResolverRef }),
  }),
})
