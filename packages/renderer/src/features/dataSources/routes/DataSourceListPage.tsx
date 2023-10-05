import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { DataSourceListPageQuery, Sdk } from '~/lib/graphql/generated'
import { DataSourceList } from '../components/dataSources/DataSourceList'
import { DataSourceListHeader } from '../components/dataSources/DataSourceListHeader'

type Props = {
  sdk: Sdk
}

export const DataSourceListPage: FC<Props> = ({ sdk }) => {
  const data = useLoaderData() as DataSourceListPageQuery

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <DataSourceListHeader sdk={sdk} />
        <DataSourceList data={data} />
      </div>
      <Outlet />
    </div>
  )
}
