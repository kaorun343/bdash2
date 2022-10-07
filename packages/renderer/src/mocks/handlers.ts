import { factory, primaryKey } from '@mswjs/data'
import { mockCreateUserQueryMutation, mockGetUserQueriesQuery } from '~/lib/graphql/generated'

const db = factory({
  queries: {
    id: primaryKey(String),
    title: String,
  },
})

db.queries.create({
  id: `${Date.now()}`,
  title: 'New Query',
})

export const handlers = [
  mockCreateUserQueryMutation(async (req, res, ctx) => {
    const id = `${Date.now()}`
    const title = req.variables.input.title

    const result = db.queries.create({
      id,
      title,
    })

    return res(
      ctx.data({
        createUserQuery: {
          userQuery: {
            id: result.id,
            title: result.title,
          },
        },
      })
    )
  }),

  mockGetUserQueriesQuery((req, res, ctx) => {
    const userQueries = db.queries.getAll().map((data) => ({
      id: data.id,
      title: data.title,
    }))
    return res(ctx.data({ userQueries }))
  }),
]
