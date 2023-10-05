import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalMenu } from './GlobalMenu'

export const Component: FC = () => {
  return (
    <div className="flex">
      <aside>
        <GlobalMenu />
      </aside>
      <Outlet />
    </div>
  )
}
