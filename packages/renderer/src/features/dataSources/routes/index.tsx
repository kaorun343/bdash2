import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'

const DataSourceListPage = lazy(() => import('./DataSourceListPage').then((m) => ({ default: m.DataSourceListPage })))
const TableListPage = lazy(() => import('./TableListPage').then((m) => ({ default: m.TableListPage })))

export const createDataSourceRoutes = (sdk: Sdk): RouteObject => {
  return {
    path: '/data-sources',
    element: <DataSourceListPage sdk={sdk} />,
    loader: () => sdk.dataSourceListPage(),
    children: [
      {
        path: ':dataSourceId',
        element: <TableListPage sdk={sdk} />,
      },
    ],
  }
}
