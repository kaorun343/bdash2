import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'

export const App: FC = () => {
  return <RouterProvider router={router} />
}
