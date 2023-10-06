import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { FragmentType, getFragmentData, graphql } from '~/gql'

const DataSourceForDataSourceListItem = graphql(`
  fragment DataSourceForDataSourceListItem on DataSource {
    id
    name
  }
`)

type Props = {
  dataSource: FragmentType<typeof DataSourceForDataSourceListItem>
}

export const DataSourceListItem = memo<Props>(function DataSourceListItem(props) {
  const dataSource = getFragmentData(DataSourceForDataSourceListItem, props.dataSource)

  return (
    <li className="border-b border-gray-300">
      <NavLink
        to={`/data-sources/${dataSource.id}`}
        className={({ isActive }) => `block px-4 py-3 ${isActive ? 'bg-blue-500 text-white' : ''}`}
      >
        {dataSource.name}
      </NavLink>
    </li>
  )
})
