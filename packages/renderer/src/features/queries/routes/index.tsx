import { lazy } from 'react'
import { UserQueryForQueryListItemFragment } from '../components/QueryListItem.generated'

const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))

export const queryRoutes = {
  path: '/queries',
  element: <Queries />,
  loader: async (): Promise<readonly UserQueryForQueryListItemFragment[]> => {
    return []
  },
}
