import { factory, primaryKey } from '@mswjs/data'

export const db = factory({
  userQueryGroups: {
    id: primaryKey(String),
    title: String,
  },
  userQueries: {
    id: primaryKey(String),
    title: String,
    body: String,
  },
})

db.userQueryGroups.create({
  id: `${Date.now()}`,
  title: `Group 1`,
})

db.userQueries.create({
  id: `${Date.now()}`,
  title: 'New Query',
})
