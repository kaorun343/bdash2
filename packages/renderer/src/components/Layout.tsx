import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalMenu } from './GlobalMenu'

export const Layout: FC = () => {
  return (
    <div className="flex">
      <aside>
        <GlobalMenu />
      </aside>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
