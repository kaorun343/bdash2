import { Kysely, Migration, Migrator } from 'kysely'

const migrations: Record<string, Migration> = {
  v1: {
    up: async (db: Kysely<any>) => {
      await db.schema
        .createTable('dataSource')
        .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey())
        .addColumn('name', 'text', (col) => col.notNull())
        .addColumn('type', 'text', (col) => col.notNull())
        .addColumn('config', 'text', (col) => col.notNull())
        .addColumn('createdAt', 'datetime', (col) => col.notNull())
        .addColumn('updatedAt', 'datetime', (col) => col.notNull())
        .execute()

      await db.schema
        .createTable('queryGroup')
        .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey())
        .addColumn('name', 'text', (col) => col.notNull())
        .addColumn('createdAt', 'datetime', (col) => col.notNull())
        .addColumn('updatedAt', 'datetime', (col) => col.notNull())
        .execute()
    },
  },
}

export const migrateToLatest = (db: Kysely<any>) => {
  const migrator = new Migrator({
    db,
    provider: { getMigrations: () => Promise.resolve(migrations) },
  })

  return migrator.migrateToLatest()
}
