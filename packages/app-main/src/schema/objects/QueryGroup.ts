import { builder } from '../../builder'
import { QueryGroup } from '../../types'
import { DateTimeRef } from '../scalars/DateTime'

export const QueryGroupRef = builder.objectRef<QueryGroup>('QueryGroup')

QueryGroupRef.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    createdAt: t.expose('createdAt', { type: DateTimeRef }),
    updatedAt: t.expose('updatedAt', { type: DateTimeRef }),
  }),
})
