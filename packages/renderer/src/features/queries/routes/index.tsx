import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const QueryList = lazy(() => import('./QueryList').then((m) => ({ default: m.QueryList })))

export const QueryRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<QueryList />} />
    </Routes>
  )
}
