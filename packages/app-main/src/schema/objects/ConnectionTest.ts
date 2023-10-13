import { builder } from '../../builder'

export const ConnectionTestRef = builder.objectRef<{ success: boolean; message?: string }>('ConnectionTest')

ConnectionTestRef.implement({
  fields: (t) => ({
    success: t.exposeBoolean('success'),
    message: t.exposeString('message', { nullable: true }),
  }),
})
