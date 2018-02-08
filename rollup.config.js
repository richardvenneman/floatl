import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: 'src/main.ts',
    output: { file: pkg.browser, name: 'floatl', format: 'umd' },
    plugins: [
      typescript()
    ]
  },
  {
    input: 'src/main.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      typescript()
    ]
  }
];
