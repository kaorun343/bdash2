import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { GetUserQueriesQuery, Sdk } from '~/lib/graphql/generated'
import { QueryList } from '../components/QueryList'

type Props = {
  sdk: Sdk
}

export const Queries: FC<Props> = ({ sdk }) => {
  const data = useLoaderData() as GetUserQueriesQuery

  return (
    <div className="flex">
      <QueryList queries={data.userQueries} sdk={sdk} />
      <Outlet />
    </div>
  )
}
