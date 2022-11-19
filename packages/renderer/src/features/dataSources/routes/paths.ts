import { DataSource } from '~/lib/graphql/generated'

export const getTableListPath = (dataSourceId: DataSource['id']) => {
  return `/data-sources/${dataSourceId}` as const
}
