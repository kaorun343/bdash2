import { defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
  },
  test: {
    globals: true,
    deps: {
      fallbackCJS: true,
    },
  },
})
