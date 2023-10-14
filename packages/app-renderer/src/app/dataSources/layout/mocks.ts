import { mockGetDataSourceListLayoutQuery, mockTestSqlite3ConnectionQuery } from '~/gql/msw'
import { db } from '~/mocks/db'

export const dataSourceListLayoutMockHandlers = [
  mockTestSqlite3ConnectionQuery(async (req, res, ctx) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return res(
      ctx.data({
        connectionTestSQLite3: {
          success: true,
        },
      }),
    )
  }),

  mockGetDataSourceListLayoutQuery((req, res, ctx) => {
    return res(
      ctx.data({
        dataSources: db.dataSources.getAll().map((dataSource) => ({
          id: dataSource.id,
          name: dataSource.name,
        })),
      }),
    )
  }),
]
