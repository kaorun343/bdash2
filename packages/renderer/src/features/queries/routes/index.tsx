import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { queryClient } from '~/lib/queryClient'

const QueryGroups = lazy(() => import('./QueryGroups').then((m) => ({ default: m.QueryGroups })))
const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))
const Query = lazy(() => import('./Query').then((m) => ({ default: m.Query })))

export const createQueryRoutes = (sdk: Sdk): RouteObject => {
  return {
    path: '/query-groups',
    element: <QueryGroups sdk={sdk} />,
    children: [
      {
        path: ':queryGroupId',
        element: <Queries sdk={sdk} />,
        loader: () => queryClient.fetchQuery(['getUserQueries'], () => sdk.getUserQueries()),
        children: [
          {
            path: ':queryId',
            element: <Query sdk={sdk} />,
            loader: ({ params }) => {
              const queryId = params?.queryId as string
              return sdk.getUserQuery({ id: queryId })
            },
            errorElement: <Navigate to="/queries" />,
          },
        ],
        errorElement: <Navigate to="/query-groups" />,
      },
    ],
  }
}
