import { FC } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { UserQueryStatus } from '~/gql/graphql'

type Props = {
  status: UserQueryStatus | null | undefined
}

export const NavigationStatus: FC<Props> = ({ status }) => {
  switch (status) {
    case 'SUCCESS':
      return (
        <div className="flex gap-1 items-center text-gray-500">
          <FaCheck className="text-green-500" />
          <span>execute: </span>
          <span>runtime: </span>
          <span>rows: </span>
        </div>
      )
    case 'FAILURE':
      return (
        <div className="flex gap-1 items-center text-red-500">
          <FaTimes />
          <span>Failed</span>
        </div>
      )
    case 'WORKING':
      return (
        <div className="flex gap-1 items-center text-gray-500">
          <span>Working...</span>
        </div>
      )
    default:
      return null
  }
}
