import { FC } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { QueryDetailPageQuery, UserQueryStatus } from '~/lib/graphql/generated'

type Props = {
  query: QueryDetailPageQuery['userQuery']
}

export const QueryDetailStatus: FC<Props> = ({ query }) => {
  switch (query.status) {
    case UserQueryStatus.Success:
      return (
        <div className="flex gap-1 items-center text-gray-500">
          <FaCheck className="text-green-500" />
          <span>execute: </span>
          <span>runtime: </span>
          <span>rows: </span>
        </div>
      )
    case UserQueryStatus.Failure:
      return (
        <div className="flex gap-1 items-center text-red-500">
          <FaTimes />
          <span>Failed</span>
        </div>
      )
    case UserQueryStatus.Working:
      return (
        <div className="flex gap-1 items-center text-gray-500">
          <span>Working...</span>
        </div>
      )
    default:
      return null
  }
}
