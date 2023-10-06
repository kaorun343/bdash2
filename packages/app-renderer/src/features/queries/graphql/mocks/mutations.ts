import { mockCreateUserQueryMutation, mockUpdateUserQueryTitleMutation } from '~/lib/graphql/generated'
import { db } from '~/mocks/db'

export const mutationHandlers = [
  mockCreateUserQueryMutation(async (req, res, ctx) => {
    const id = `${Date.now()}`
    const title = req.variables.input.title

    const result = db.userQueries.create({
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
      })
    )
  }),
]
