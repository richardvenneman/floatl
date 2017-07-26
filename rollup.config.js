import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    entry: 'src/js/index.js',
    dest: pkg.browser,
    format: 'umd',
    moduleName: 'floatl',
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  },
  {
    entry: 'src/js/index.js',
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
