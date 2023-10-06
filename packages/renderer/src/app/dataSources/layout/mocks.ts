import { mockGetDataSourceListLayoutQuery, mockTestSqlite3ConnectionMutation } from '~/gql/msw'
import { db } from '~/mocks/db'

export const dataSourceListLayoutMockHandlers = [
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

  mockGetDataSourceListLayoutQuery((req, res, ctx) => {
    return res(
      ctx.data({
        dataSources: db.dataSources.getAll().map((dataSource) => ({
          id: dataSource.id,
          name: dataSource.name,
        })),
      })
    )
  }),
]
