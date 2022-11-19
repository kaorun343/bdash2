import { FC } from 'react'
import { DataSourceListPageQuery } from '~/lib/graphql/generated'
import { DataSourceListItem } from './DataSourceListItem'

type Props = {
  data: DataSourceListPageQuery
}

export const DataSourceList: FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.dataSources.map((dataSource) => (
        <DataSourceListItem key={dataSource.id} dataSource={dataSource} />
      ))}
    </ul>
  )
}
