import { FC } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { getFragmentData, graphql } from '~/gql'
import { GetDataSourceListLayoutQuery } from '~/gql/graphql'
import { DataSourceList } from './DataSourceList'
import { Header } from './Header'

const DataSourceForDataSourceListLayout = graphql(`
  fragment DataSourceForDataSourceListLayout on DataSource {
    ...DataSourceForDataSourceList
  }
`)

export const Component: FC = () => {
  const data = useLoaderData() as GetDataSourceListLayoutQuery
  const dataSources = getFragmentData(DataSourceForDataSourceListLayout, data.dataSources)

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <Header />
        <DataSourceList dataSources={dataSources} />
      </div>
      <Outlet />
    </div>
  )
}
