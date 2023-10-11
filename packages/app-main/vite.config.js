import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      graphql: resolve(__dirname, '../../node_modules/graphql/index.js'),
    },
  },
})
