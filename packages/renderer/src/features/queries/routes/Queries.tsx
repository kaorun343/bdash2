import { FC, Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { QueryList } from '../components/queries/QueryList'
import { QueryListHeader } from '../components/queries/QueryListHeader'

type Props = {
  sdk: Sdk
}

export const Queries: FC<Props> = ({ sdk }) => {
  const params = useParams()
  const groupId = params.queryGroupId as string

  return (
    <div className="flex w-full">
      <div className="h-screen w-72 border-r border-gray-300">
        <QueryListHeader groupId={groupId} sdk={sdk} />
        <QueryList groupId={groupId} sdk={sdk} />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
