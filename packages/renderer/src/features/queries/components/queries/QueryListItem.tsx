import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { UserQueryForQueryListItemFragment } from '~/lib/graphql/generated'
import { getUserQueryDetailPath } from '../../routes/paths'

type Props = {
  groupId: string
  query: UserQueryForQueryListItemFragment
}

export const QueryListItem = memo<Props>(function QueryListItem({ groupId, query }) {
  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={getUserQueryDetailPath(groupId, query.id)}
        className={({ isActive }) => `block px-4 py-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
      >
        {query.title}
      </NavLink>
    </li>
  )
})
