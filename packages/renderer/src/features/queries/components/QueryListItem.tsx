import { memo } from 'react'
import { Link } from 'react-router-dom'
import { UserQueryForQueryListItemFragment } from './QueryListItem.generated'

type Props = {
  query: UserQueryForQueryListItemFragment
}

export const QueryListItem = memo<Props>(function QueryListItem({ query }) {
  return (
    <li className="px-4 py-3 border-b border-gray-300">
      <Link to={`/queries/${query.id}`}>{query.title}</Link>
    </li>
  )
})
