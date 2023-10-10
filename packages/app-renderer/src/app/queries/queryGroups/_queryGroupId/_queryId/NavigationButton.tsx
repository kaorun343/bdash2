import { FC } from 'react'
import { UserQueryStatus } from '~/gql/graphql'

type Props = {
  status: UserQueryStatus | null | undefined
}

const className = 'bg-white border rounded px-3 py-1 text-sm hover:bg-gray-100'

export const NavigationButton: FC<Props> = ({ status }) => {
  switch (status) {
    case 'WORKING':
      return (
        <button type="button" className={className}>
          Cancel
        </button>
      )
    default:
      return (
        <button type="button" className={className}>
          Execute
        </button>
      )
  }
}
