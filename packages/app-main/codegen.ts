import { printSchema } from 'graphql'
import type { CodegenConfig } from '@graphql-codegen/cli'
import { schema } from './src/schema'

export default {
  schema: printSchema(schema),
  documents: [],
  ignoreNoDocuments: true,
  generates: {
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
} satisfies CodegenConfig
