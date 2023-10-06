import { Navigate, RouteObject } from 'react-router-dom'
import { Sdk } from './lib/graphql/generated'

export const createRoutes = (sdk: Sdk): RouteObject[] => {
  return [
    {
      path: '/',
      lazy: () => import('~/app/layout/lazy'),
      children: [
        {
          index: true,
          element: <Navigate to="/query-groups" />,
        },
        {
          path: '/query-groups',
          lazy: async () => {
            const { QueryGroupListPage } = await import('~/features/queries/routes/QueryGroupListPage')
            return {
              element: <QueryGroupListPage sdk={sdk} />,
            }
          },
          loader: () => sdk.queryGroupListPage(),
          children: [
            {
              path: ':queryGroupId',
              lazy: async () => {
                const { QueryListPage } = await import('~/features/queries/routes/QueryListPage')
                return {
                  element: <QueryListPage sdk={sdk} />,
                }
              },
              loader: ({ params }) => {
                const groupId = params?.queryGroupId as string
                return sdk.queryListPage({ groupId })
              },
              children: [
                {
                  path: ':queryId',
                  lazy: async () => {
                    const { QueryDetailPage } = await import('~/features/queries/routes/QueryDetailPage')
                    return {
                      element: <QueryDetailPage sdk={sdk} />,
                    }
                  },
                  loader: ({ params }) => {
                    const queryId = params?.queryId as string
                    return sdk.queryDetailPage({ id: queryId })
                  },
                },
              ],
              errorElement: <Navigate to="/query-groups" />,
            },
          ],
        },
        {
          path: '/data-sources',
          lazy: () => import('~/app/dataSources/layout/lazy'),
          children: [
            {
              index: true,
              element: null,
            },
            {
              path: ':dataSourceId',
              element: null,
            },
          ],
        },
      ],
    },
  ]
}
