import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { UserQueryGroupForQueryGroupListItemFragment } from '~/lib/graphql/generated'

type Props = {
  userQueryGroup: UserQueryGroupForQueryGroupListItemFragment
}

export const QueryGroupListItem = memo<Props>(function QueryGroupListItem({ userQueryGroup }) {
  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={`/query-groups/${userQueryGroup.id}`}
        className={({ isActive }) => `block px-4 py-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
      >
        {userQueryGroup.name}
      </NavLink>
    </li>
  )
})
