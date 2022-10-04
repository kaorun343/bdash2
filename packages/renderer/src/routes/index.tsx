import { lazy } from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import { Layout } from '~/components/Layout'

const QueryRoutes = lazy(() => import('~/features/queries/routes').then((m) => ({ default: m.QueryRoutes })))

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/queries',
        element: <QueryRoutes />,
      },
      {
        path: '/',
        element: <Navigate to="/queries" />,
      },
    ],
  },
])
