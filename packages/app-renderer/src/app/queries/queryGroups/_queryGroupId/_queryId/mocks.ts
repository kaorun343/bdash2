import { UserQueryStatus, mockGetQueryDetailPageQuery, mockUpdateUserQueryTitleMutation } from '~/gql/msw'
import { db } from '~/mocks/db'

export const queryDetailPageMockHandlers = [
  mockGetQueryDetailPageQuery((req, res, ctx) => {
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
        ]),
      )
    }

    return res(
      ctx.data({
        query: {
          id: userQuery.id,
          title: userQuery.title,
          body: userQuery.body,
          status: userQuery.status as UserQueryStatus,
        },
      }),
    )
  }),

  mockUpdateUserQueryTitleMutation((req, res, ctx) => {
    const input = req.variables.input
    db.userQueries.update({
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
      }),
    )
  }),
]
