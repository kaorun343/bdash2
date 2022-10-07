import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'

const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))
const Query = lazy(() => import('./Query').then((m) => ({ default: m.Query })))

export const createQueryRoutes = (sdk: Sdk): RouteObject => {
  return {
    path: '/queries',
    element: <Queries sdk={sdk} />,
    loader: async () => sdk.getUserQueries(),
    children: [
      {
        path: ':queryId',
        element: <Query />,
        loader: ({ params }) => sdk.getUserQuery({ id: params.queryId! }),
        errorElement: <Navigate to="/queries" />,
      },
    ],
  }
}
