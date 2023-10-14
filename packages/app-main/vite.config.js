import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts', 'src/schema.ts'],
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [/^node:/, /^electron$/, /^path$/, /^fs$/, /^crypto$/, /^sql\.js$/, /^graphql$/],
    },
  },
  test: {
    globals: true,
    deps: {
      fallbackCJS: true,
    },
  },
})
