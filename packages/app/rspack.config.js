// @ts-check

/** @type {import('@rspack/cli').Configuration[]} */
module.exports = [
  {
    entry: './src/main.ts',
    output: {
      filename: 'main.js',
    },
    target: 'electron-main',
    builtins: {
      copy: {
        patterns: [
          {
            from: require.resolve('sql.js/dist/sql-wasm.wasm'),
            dist: '.',
          },
        ],
      },
    },
  },
  {
    entry: './src/preload.ts',
    output: {
      filename: 'preload.js',
    },
    target: 'electron-preload',
  },
  {
    entry: ['./src/renderer.ts'],
    output: {
      filename: 'renderer.js',
    },
    target: 'web',
    builtins: {
      html: [
        {
          template: './src/index.html',
        },
      ],
    },
  },
]
