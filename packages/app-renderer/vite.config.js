import { babelOptimizerPlugin } from '@graphql-codegen/client-preset'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [[babelOptimizerPlugin, { artifactDirectory: './src/gql', gqlTagName: 'graphql' }]],
      },
    }),
  ],
}))
