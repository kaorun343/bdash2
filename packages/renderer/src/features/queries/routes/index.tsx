import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Queries = lazy(() => import('./Queries').then((m) => ({ default: m.Queries })))

export const QueryRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Queries />} />
    </Routes>
  )
}
