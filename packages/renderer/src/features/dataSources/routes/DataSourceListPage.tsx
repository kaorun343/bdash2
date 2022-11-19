import { FC, Suspense } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { DataSourceListPageQuery, Sdk } from '~/lib/graphql/generated'
import { DataSourceList } from '../components/dataSources/DataSourceList'

type Props = {
  sdk: Sdk
}

export const DataSourceListPage: FC<Props> = ({ sdk }) => {
  const data = useLoaderData() as DataSourceListPageQuery

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <DataSourceList data={data} />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
