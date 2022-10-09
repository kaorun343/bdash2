import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Sdk } from '~/lib/graphql/generated'
import { QueryList } from '../components/queries/QueryList'

type Props = {
  sdk: Sdk
}

export const Queries: FC<Props> = ({ sdk }) => {
  return (
    <div className="flex w-full">
      <QueryList sdk={sdk} />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
