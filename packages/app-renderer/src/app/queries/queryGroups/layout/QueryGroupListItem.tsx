import clsx from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FragmentType, getFragmentData, graphql } from '~/gql'

const QueryGroupForQueryGroupListItem = graphql(`
  fragment QueryGroupForQueryGroupListItem on QueryGroup {
    id
    name
  }
`)

type Props = {
  queryGroup: FragmentType<typeof QueryGroupForQueryGroupListItem>
}

export const QueryGroupListItem: FC<Props> = (props) => {
  const queryGroup = getFragmentData(QueryGroupForQueryGroupListItem, props.queryGroup)

  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={`/queries/${queryGroup.id}`}
        className={({ isActive }) => clsx('block px-4 py-3', isActive && 'bg-blue-500 text-white')}
      >
        {queryGroup.name}
      </NavLink>
    </li>
  )
}
