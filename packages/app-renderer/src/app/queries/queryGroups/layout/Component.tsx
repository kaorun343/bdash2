import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { QueryGroupList } from './QueryGroupList'
import { GetQueryGroupListLayoutQuery } from '~/gql/graphql'
import { getFragmentData, graphql } from '~/gql'

const UserQueryGroupForQueryGroupListLayout = graphql(`
  fragment UserQueryGroupForQueryGroupListLayout on UserQueryGroup {
    ...UserQueryGroupForQueryGroupList
  }
`)

export const Component: FC = () => {
  const data = useLoaderData() as GetQueryGroupListLayoutQuery
  const queryGroups = getFragmentData(UserQueryGroupForQueryGroupListLayout, data.queryGroups)

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <QueryGroupList queryGroups={queryGroups} />
      </div>
      <Outlet />
    </div>
  )
}
