import { mockTestSqlite3ConnectionMutation } from '~/lib/graphql/generated'

export const mutationHandlers = [
  mockTestSqlite3ConnectionMutation(async (req, res, ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return res(
      ctx.data({
        testSqlite3Connection: {
          success: true,
        },
      })
    )
  }),
]
