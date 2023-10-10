import SchemaBuilder from '@pothos/core'
import { Kysely } from 'kysely'
import { Database } from './types'

export const builder = new SchemaBuilder<{
  Context: {
    db: Kysely<Database>
  }
}>({})
