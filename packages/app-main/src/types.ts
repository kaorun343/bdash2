import { ColumnType, Generated, Selectable } from 'kysely'

export type Database = {
  dataSource: DataSourceTable
  queryGroup: QueryGroupTable
}

export type DataSourceTable = {
  id: Generated<number>
  name: string
  type: 'sqlite3'
  config: ColumnType<string, string, string>
  createdAt: ColumnType<string, string, never>
  updatedAt: ColumnType<string, string, string>
}

export type QueryGroupTable = {
  id: Generated<number>
  name: string
  createdAt: ColumnType<string, string, never>
  updatedAt: ColumnType<string, string, string>
}

export type DataSource = Selectable<DataSourceTable>
export type QueryGroup = Selectable<QueryGroupTable>