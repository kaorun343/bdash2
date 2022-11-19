import { mockGetUserQueriesQuery, mockGetUserQueryGroupsQuery, mockGetUserQueryQuery } from '~/lib/graphql/generated'
import { db } from './db'

export const queryHandlers = [
  mockGetUserQueriesQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueriesByGroup: db.userQueries.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockGetUserQueryGroupsQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueryGroups: db.userQueryGroups.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockGetUserQueryQuery((req, res, ctx) => {
    const { id } = req.variables
    const userQuery = db.userQueries.findFirst({
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
]
