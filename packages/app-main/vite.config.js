import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      graphql: './node_modules/graphql/index.js',
    },
  },
})
