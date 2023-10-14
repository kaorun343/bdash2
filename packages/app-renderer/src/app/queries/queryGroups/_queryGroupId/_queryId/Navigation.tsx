import { FC } from 'react'
import { QueryStatus } from '~/gql/graphql'
import { NavigationButton } from './NavigationButton'
import { NavigationStatus } from './NavigationStatus'

type Props = {
  status: QueryStatus | null | undefined
}

export const Navigation: FC<Props> = ({ status }) => {
  return (
    <nav className="px-2 py-2 bg-gray-50 border-y border-gray-300 flex gap-2 items-center">
      <NavigationButton status={status} />
      <NavigationStatus status={status} />
    </nav>
  )
}
