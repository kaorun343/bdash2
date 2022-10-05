import { factory, primaryKey } from '@mswjs/data'
import { mockGetQueriesQuery } from '~/features/queries/routes/index.generated'

const db = factory({
  queries: {
    id: primaryKey(String),
    title: String,
  },
})

export const handlers = [
  mockGetQueriesQuery((req, res, ctx) => {
    const queries = db.queries.getAll().map((data) => ({
      id: data.id,
      title: data.title,
    }))
    return res(ctx.data({ queries }))
  }),
]
