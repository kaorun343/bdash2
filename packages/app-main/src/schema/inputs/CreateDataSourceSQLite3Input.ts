import { builder } from '../../builder'

export const CreateDataSourceSQLite3InputRef = builder.inputType('CreateDataSourceSQLite3Input', {
  fields: (t) => ({
    name: t.string({ required: true }),

    path: t.string(),
  }),
})
