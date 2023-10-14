import clsx from 'clsx'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FragmentType, getFragmentData, graphql } from '~/gql'

const BdashQueryForQueryListItem = graphql(`
  fragment BdashQueryForQueryListItem on BdashQuery {
    id
    title
  }
`)

type Props = {
  query: FragmentType<typeof BdashQueryForQueryListItem>
  groupId: string
}

export const QueryListItem: FC<Props> = (props) => {
  const query = getFragmentData(BdashQueryForQueryListItem, props.query)
  const { groupId } = props

  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={`/queries/${groupId}/${query.id}`}
        className={({ isActive }) => clsx('block px-4 py-3', isActive && 'bg-blue-500 text-white')}
      >
        {query.title}
      </NavLink>
    </li>
  )
}
