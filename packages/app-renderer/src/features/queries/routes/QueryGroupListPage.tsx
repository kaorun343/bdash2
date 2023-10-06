import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { QueryGroupList } from '../components/queryGroups/QueryGroupList'

type Props = {
  sdk: Sdk
}

export const QueryGroupListPage: FC<Props> = ({ sdk }) => {
  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <QueryGroupList sdk={sdk} />
      </div>
      <Outlet />
    </div>
  )
}
