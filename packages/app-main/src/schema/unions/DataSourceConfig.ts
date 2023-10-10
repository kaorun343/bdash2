import { builder } from '../../builder'
import { DataSourceConfigSQLite3Ref } from '../objects/DataSourceConfigSQLite3'

export const DataSourceConfigRef = builder.unionType('DataSourceConfig', {
  types: [DataSourceConfigSQLite3Ref],
  resolveType: (source) => {
    switch (source.type) {
      case 'sqlite3':
        return DataSourceConfigSQLite3Ref
    }
  },
})
