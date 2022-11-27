import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { queryClient } from '~/lib/queryClient'

const QueryGroupListPage = lazy(() => import('./QueryGroupListPage').then((m) => ({ default: m.QueryGroupListPage })))
const QueryListPage = lazy(() => import('./QueryListPage').then((m) => ({ default: m.QueryListPage })))
const QueryDetailPage = lazy(() => import('./QueryDetailPage').then((m) => ({ default: m.QueryDetailPage })))

export const createQueryRoutes = (sdk: Sdk): RouteObject => {
  return {
    path: '/query-groups',
    element: <QueryGroupListPage sdk={sdk} />,
    loader: () => sdk.getUserQueryGroups(),
    children: [
      {
        path: ':queryGroupId',
        element: <QueryListPage sdk={sdk} />,
        loader: ({ params }) => {
          const groupId = params?.queryGroupId as string
          return queryClient.fetchQuery(['getUserQueries', groupId], () => sdk.getUserQueries({ groupId }))
        },
        children: [
          {
            path: ':queryId',
            element: <QueryDetailPage sdk={sdk} />,
            loader: ({ params }) => {
              const queryId = params?.queryId as string
              return sdk.getUserQuery({ id: queryId })
            },
          },
        ],
        errorElement: <Navigate to="/query-groups" />,
      },
    ],
  }
}
