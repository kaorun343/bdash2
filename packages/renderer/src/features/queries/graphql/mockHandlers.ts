import { factory, primaryKey } from '@mswjs/data'
import {
  mockCreateUserQueryMutation,
  mockGetUserQueriesQuery,
  mockGetUserQueryQuery,
  mockUpdateUserQueryTitleMutation,
} from '~/lib/graphql/generated'

const db = factory({
  queries: {
    id: primaryKey(String),
    title: String,
    body: String,
  },
})

db.queries.create({
  id: `${Date.now()}`,
  title: 'New Query',
})

export const queriesHandlers = [
  mockCreateUserQueryMutation(async (req, res, ctx) => {
    const id = `${Date.now()}`
    const title = req.variables.input.title

    const result = db.queries.create({
      id,
      title,
      body: '',
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

  mockGetUserQueryQuery((req, res, ctx) => {
    const { id } = req.variables
    const userQuery = db.queries.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    })

    if (!userQuery) {
      return res(
        ctx.errors([
          {
            message: `Could not find user query with id ${id}`,
          },
        ])
      )
    }

    return res(
      ctx.data({
        userQuery: {
          id: userQuery.id,
          title: userQuery.title,
          body: userQuery.body,
        },
      })
    )
  }),

  mockUpdateUserQueryTitleMutation((req, res, ctx) => {
    const input = req.variables.input
    db.queries.update({
      where: {
        id: {
          equals: input.id,
        },
      },
      data: {
        title: input.title,
      },
    })

    return res(
      ctx.data({
        updateUserQueryTitle: {
          userQuery: {
            title: input.title,
          },
        },
      })
    )
  }),
]
