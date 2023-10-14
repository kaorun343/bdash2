import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { getFragmentData, graphql } from '~/gql'
import { GetQueryGroupListLayoutQuery } from '~/gql/graphql'
import { QueryGroupList } from './QueryGroupList'

const QueryGroupForQueryGroupListLayout = graphql(`
  fragment QueryGroupForQueryGroupListLayout on QueryGroup {
    ...QueryGroupForQueryGroupList
  }
`)

export const Component: FC = () => {
  const data = useLoaderData() as GetQueryGroupListLayoutQuery
  const queryGroups = getFragmentData(QueryGroupForQueryGroupListLayout, data.queryGroups)

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <QueryGroupList queryGroups={queryGroups} />
      </div>
      <Outlet />
    </div>
  )
}
