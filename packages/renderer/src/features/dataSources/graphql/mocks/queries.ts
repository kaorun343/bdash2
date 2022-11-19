import { mockDataSourceListPageQuery } from '~/lib/graphql/generated'
import { db } from '~/mocks/db'

export const queryHandlers = [
  mockDataSourceListPageQuery((req, res, ctx) => {
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
