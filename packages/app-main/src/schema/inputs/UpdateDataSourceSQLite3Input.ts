import { builder } from '../../builder'

export const UpdateDataSourceSQLite3InputRef = builder.inputType('UpdateDataSourceSQLite3Input', {
  fields: (t) => ({
    id: t.id({ required: true }),
    name: t.string({ required: true }),

    path: t.string(),
  }),
})
