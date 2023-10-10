import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { QueryList } from './QueryList'

export const Component: FC = () => {
  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <Header />
        <QueryList />
      </div>
      <Outlet />
    </div>
  )
}
