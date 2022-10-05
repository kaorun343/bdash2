import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

type Props = {
  router: ReturnType<typeof createHashRouter>
}

export const App: FC<Props> = ({ router }) => {
  return <RouterProvider router={router} />
}
