import { createHashRouter, Navigate } from 'react-router-dom'
import { Layout } from '~/components/Layout'
import { createDataSourceRoutes } from '~/features/dataSources/routes'
import { createQueryRoutes } from '~/features/queries/routes'
import { Sdk } from '~/lib/graphql/generated'

export const createRouter = (sdk: Sdk) => {
  return createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        createQueryRoutes(sdk),
        createDataSourceRoutes(sdk),
        {
          path: '/',
          element: <Navigate to="/query-groups" />,
        },
      ],
    },
  ])
}
