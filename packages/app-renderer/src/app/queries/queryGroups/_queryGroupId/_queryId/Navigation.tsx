import { FC } from 'react'
import { UserQueryStatus } from '~/gql/graphql'
import { NavigationStatus } from './NavigationStatus'
import { NavigationButton } from './NavigationButton'

type Props = {
  status: UserQueryStatus | null | undefined
}

export const Navigation: FC<Props> = ({ status }) => {
  return (
    <nav className="px-2 py-2 bg-gray-50 border-y border-gray-300 flex gap-2 items-center">
      <NavigationButton status={status} />
      <NavigationStatus status={status} />
    </nav>
  )
}
