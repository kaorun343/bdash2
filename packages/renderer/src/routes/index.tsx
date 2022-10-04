import { createHashRouter } from 'react-router-dom'
import { Layout } from '~/components/Layout'

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
  },
])
