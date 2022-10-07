import { lazy } from 'react'
import { Sdk } from '~/lib/graphql/generated'

const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))

export const createQueryRoutes = (sdk: Sdk) => {
  return {
    path: '/queries',
    element: <Queries />,
    loader: async () => sdk.getQueries(),
  }
}
