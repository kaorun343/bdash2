import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { QueryList } from '../components/QueryList'
import { GetQueriesQuery } from './index.generated'

export const Queries: FC = () => {
  const data = useLoaderData() as GetQueriesQuery

  return (
    <div className="flex">
      <QueryList queries={data.queries} />
      <Outlet />
    </div>
  )
}
