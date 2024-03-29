import { builder } from '../../builder'
import { Query } from '../../types'
import { QueryStatusRef } from '../enums/QueryStatus'
import { DateTimeRef } from '../scalars/DateTime'

export const BdashQueryRef = builder.objectRef<Query>('BdashQuery')

BdashQueryRef.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    body: t.exposeString('body'),
    status: t.expose('status', { type: QueryStatusRef, nullable: true }),
    createdAt: t.expose('createdAt', { type: DateTimeRef }),
    updatedAt: t.expose('updatedAt', { type: DateTimeRef }),
  }),
})
