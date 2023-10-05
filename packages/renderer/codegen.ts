export default {
  schema: '../main/schema/*.graphql',
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
      preset: 'import-types',
      presetConfig: {
        typesPath: './graphql.ts',
      },
      plugins: ['typescript-msw'],
    },
  },
} satisfies import('@graphql-codegen/cli').CodegenConfig
