import { FC } from 'react'
import { FragmentType, getFragmentData, graphql } from '~/gql'
import { DataSourceListItem } from './DataSourceListItem'

const DataSourceForDataSourceList = graphql(`
  fragment DataSourceForDataSourceList on DataSource {
    id
    ...DataSourceForDataSourceListItem
  }
`)

type Props = {
  dataSources: readonly FragmentType<typeof DataSourceForDataSourceList>[]
}

export const DataSourceList: FC<Props> = (props) => {
  const dataSources = getFragmentData(DataSourceForDataSourceList, props.dataSources)

  return (
    <ul>
      {dataSources.map((dataSource) => (
        <DataSourceListItem key={dataSource.id} dataSource={dataSource} />
      ))}
    </ul>
  )
}
