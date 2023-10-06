import { QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { queryClient } from './lib/queryClient'

type Props = {
  router: ReturnType<typeof createHashRouter>
}

export const App: FC<Props> = ({ router }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
