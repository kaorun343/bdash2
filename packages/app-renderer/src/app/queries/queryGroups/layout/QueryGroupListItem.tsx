import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FragmentType, getFragmentData, graphql } from '~/gql'

const UserQueryGroupForQueryGroupListItem = graphql(`
  fragment UserQueryGroupForQueryGroupListItem on UserQueryGroup {
    id
    title
  }
`)

type Props = {
  queryGroup: FragmentType<typeof UserQueryGroupForQueryGroupListItem>
}

export const QueryGroupListItem: FC<Props> = (props) => {
  const queryGroup = getFragmentData(UserQueryGroupForQueryGroupListItem, props.queryGroup)

  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={`/queries/${queryGroup.id}`}
        className={({ isActive }) => `block px-4 py-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
      >
        {queryGroup.title}
      </NavLink>
    </li>
  )
}
