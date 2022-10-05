import { createHashRouter, Navigate } from 'react-router-dom'
import { Layout } from '~/components/Layout'
import { queryRoutes } from '~/features/queries/routes'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      queryRoutes,
      {
        path: '/',
        element: <Navigate to="/queries" />,
      },
    ],
  },
])
