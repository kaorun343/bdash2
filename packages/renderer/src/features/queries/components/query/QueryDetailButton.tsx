import { FC } from 'react'
import { QueryDetailPageQuery, UserQueryStatus } from '~/lib/graphql/generated'

type Props = {
  status: QueryDetailPageQuery['userQuery']['status']
  onCancel: () => void
  onExecute: () => void
}

const className = 'bg-white border rounded px-3 py-1 text-sm hover:bg-gray-100'

export const QueryDetailButton: FC<Props> = ({ status, onCancel, onExecute }) => {
  switch (status) {
    case UserQueryStatus.Working:
      return (
        <button type="button" className={className} onClick={onCancel}>
          Cancel
        </button>
      )
    default:
      return (
        <button type="button" className={className} onClick={onExecute}>
          Execute
        </button>
      )
  }
}
