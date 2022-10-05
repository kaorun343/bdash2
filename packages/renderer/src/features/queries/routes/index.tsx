import { lazy } from 'react'
import { GraphQLClient } from '~/lib/GraphQLClient'
import { getSdk } from './index.generated'

const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))

export const createQueryRoutes = (client: GraphQLClient) => {
  const sdk = getSdk(client)

  return {
    path: '/queries',
    element: <Queries />,
    loader: async () => sdk.getQueries(),
  }
}
