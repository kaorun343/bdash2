import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { QueryList } from '../components/queries/QueryList'
import { QueryListHeader } from '../components/queries/QueryListHeader'

type Props = {
  sdk: Sdk
}

export const Queries: FC<Props> = ({ sdk }) => {
  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <QueryListHeader sdk={sdk} />
        <QueryList sdk={sdk} />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
