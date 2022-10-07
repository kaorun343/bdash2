import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { GetUserQueriesQuery } from '~/lib/graphql/generated'
import { QueryList } from '../components/QueryList'

export const Queries: FC = () => {
  const data = useLoaderData() as GetUserQueriesQuery

  return (
    <div className="flex">
      <QueryList queries={data.userQueries} />
      <Outlet />
    </div>
  )
}
