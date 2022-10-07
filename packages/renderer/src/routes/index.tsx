import { createHashRouter, Navigate } from 'react-router-dom'
import { Layout } from '~/components/Layout'
import { createQueryRoutes } from '~/features/queries/routes'
import { Sdk } from '~/lib/graphql/generated'

export const createRouter = (sdk: Sdk) => {
  return createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        createQueryRoutes(sdk),
        {
          path: '/',
          element: <Navigate to="/queries" />,
        },
      ],
    },
  ])
}
