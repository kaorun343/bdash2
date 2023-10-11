import { ColumnType, Generated, Selectable } from 'kysely'

export type Database = {
  dataSource: DataSourceTable
}

export type DataSourceTable = {
  id: Generated<number>
  name: string
  type: 'sqlite3'
  config: ColumnType<string, string, string>
  createdAt: ColumnType<Date, string, never>
  updatedAt: ColumnType<Date, string, string>
}

export type DataSource = Selectable<DataSourceTable>
