import { Navigate, RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
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
        lazy: () => import('~/app/queries/queryGroups/layout/lazy'),
        children: [
          {
            path: ':queryGroupId',
            lazy: () => import('~/app/queries/queryGroups/_queryGroupId/layout/lazy'),
            children: [
              {
                path: ':queryId',
                lazy: () => import('~/app/queries/queryGroups/_queryGroupId/_queryId/lazy'),
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
