import { factory, nullable, primaryKey } from '@mswjs/data'

export const db = factory({
  dataSources: {
    id: primaryKey(String),
    name: String,
  },
  userQueryGroups: {
    id: primaryKey(String),
    name: String,
  },
  userQueries: {
    id: primaryKey(String),
    title: String,
    body: String,
    status: nullable(String),
  },
})

db.dataSources.create({
  id: `DataSource:${Date.now()}`,
  name: 'My Database',
})

db.userQueryGroups.create({
  id: `${Date.now()}`,
  name: `Group 1`,
})

db.userQueries.create({
  id: `${Date.now()}`,
  title: 'New Query',
  status: undefined,
})
