import { builder } from '../../builder'

export const DeleteDataSourceInputRef = builder.inputType('DeleteDataSourceInput', {
  fields: (t) => ({
    id: t.id({ required: true }),
  }),
})
