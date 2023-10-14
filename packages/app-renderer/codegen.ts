import { schema } from '@bdash2/app-main/dist/schema'
import { printSchema } from 'graphql'

export default {
  schema: printSchema(schema),
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        enumsAsTypes: true,
      },
      presetConfig: {
        fragmentMasking: {
          unmaskFunctionName: 'getFragmentData',
        },
      },
    },
    './src/gql/msw.ts': {
      presetConfig: {
        typesPath: './graphql.ts',
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-msw'],
    },
  },
} satisfies import('@graphql-codegen/cli').CodegenConfig
