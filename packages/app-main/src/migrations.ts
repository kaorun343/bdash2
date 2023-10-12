import { Kysely, Migration, Migrator, sql } from 'kysely'

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

      await db.schema
        .createTable('query')
        .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey())
        .addColumn('queryGroupId', 'integer', (col) => col.references('queryGroup.id').onDelete('set null'))
        .addColumn('dataSourceId', 'integer', (col) => col.references('dataSource.id').onDelete('set null'))
        .addColumn('title', 'text', (col) => col.notNull())
        .addColumn('body', 'text', (col) => col.notNull().defaultTo(''))
        .addColumn('status', 'text', (col) => col.check(sql`status IN ('success', 'failure')`))
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
