import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { QueryList } from '../components/QueryList'
import { UserQueryForQueryListItemFragment } from '../components/QueryListItem.generated'

export const Queries: FC = () => {
  const data = useLoaderData() as readonly UserQueryForQueryListItemFragment[]

  return (
    <div className="flex">
      <QueryList queries={data} />
      <Outlet />
    </div>
  )
}
