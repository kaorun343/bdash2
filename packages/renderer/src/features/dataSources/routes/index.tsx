import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'

const DataSourceListPage = lazy(() => import('./DataSourceListPage').then((m) => ({ default: m.DataSourceListPage })))

export const createDataSourceRoutes = (sdk: Sdk): RouteObject => {
  return {
    path: '/data-sources',
    element: <DataSourceListPage sdk={sdk} />,
  }
}
