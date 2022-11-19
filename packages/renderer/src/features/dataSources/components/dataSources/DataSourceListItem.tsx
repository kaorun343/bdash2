import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { DataSourceForDataSourceListItemFragment } from '~/lib/graphql/generated'
import { getTableListPath } from '../../routes/paths'

type Props = {
  dataSource: DataSourceForDataSourceListItemFragment
}

export const DataSourceListItem = memo<Props>(function DataSourceListItem({ dataSource }) {
  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={getTableListPath(dataSource.id)}
        className={({ isActive }) => `block px-4 py-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
      >
        {dataSource.name}
      </NavLink>
    </li>
  )
})
