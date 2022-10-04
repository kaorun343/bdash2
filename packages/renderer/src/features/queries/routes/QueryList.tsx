import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const QueryList: FC = () => {
  return (
    <div>
      <h1>QueryList</h1>
      <Outlet />
    </div>
  )
}
