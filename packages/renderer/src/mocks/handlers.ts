import { factory, primaryKey } from '@mswjs/data'
import { mockGetUserQueriesQuery } from '~/lib/graphql/generated'

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
  mockGetUserQueriesQuery((req, res, ctx) => {
    const userQueries = db.queries.getAll().map((data) => ({
      id: data.id,
      title: data.title,
    }))
    return res(ctx.data({ userQueries }))
  }),
]
