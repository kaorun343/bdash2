import { mockGetQueryGroupListLayoutQuery } from '~/gql/msw'
import { db } from '~/mocks/db'

export const queryGroupListMockHandlers = [
  mockGetQueryGroupListLayoutQuery((_req, res, ctx) => {
    return res(
      ctx.data({
        queryGroups: db.userQueryGroups.getAll().map((data) => ({
          id: data.id,
          title: data.title,
        })),
      }),
    )
  }),
]
