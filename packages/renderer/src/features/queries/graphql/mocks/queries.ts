import {
  mockQueryDetailPageQuery,
  mockQueryGroupListPageQuery,
  mockQueryListPageQuery,
  UserQueryStatus,
} from '~/lib/graphql/generated'
import { db } from '~/mocks/db'

export const queryHandlers = [
  mockQueryListPageQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueriesByGroup: db.userQueries.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockQueryGroupListPageQuery((req, res, ctx) => {
    return res(
      ctx.data({
        userQueryGroups: db.userQueryGroups.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      })
    )
  }),

  mockQueryDetailPageQuery((req, res, ctx) => {
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
          status: userQuery.status as UserQueryStatus,
        },
      })
    )
  }),
]
