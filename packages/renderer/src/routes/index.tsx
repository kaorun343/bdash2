import { createHashRouter, Navigate } from 'react-router-dom'
import { Layout } from '~/components/Layout'
import { createQueryRoutes } from '~/features/queries/routes'
import { GraphQLClient } from '~/lib/GraphQLClient'

export const createRouter = (client: GraphQLClient) => {
  return createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        createQueryRoutes(client),
        {
          path: '/',
          element: <Navigate to="/queries" />,
        },
      ],
    },
  ])
}
