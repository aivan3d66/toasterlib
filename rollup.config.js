import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import resolve from '@rollup/plugin-node-resolve'
import svgr from '@svgr/rollup'
import path from 'path'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [{
  input: './src/index.tsx',
  output: {
    file: './dist/prod.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [resolve({ extensions: ['.jsx', '.js', '.tsx'] }), alias({
    resolve: ['.tsx', '.ts'],
    entries: [{
      find: '@',
      replacement: path.resolve(path.resolve(__dirname), 'src'),
    }],
  }), svgr(), commonjs(), babel({
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-react'],
  }), eslint(), typescript({ tsconfig: './tsconfig.json' }), generatePackageJson({
    outputFolder: 'dist',
    baseContents: (pkg) => ({
      name: pkg.name,
      version: pkg.version,
      main: '/prod.js',
      repository: pkg.repository,
      peerDependencies: {
        react: '^17.0.0',
      },
    }),
  })],
}, {
  input: 'dist/types/index.d.ts',
  output: [{
    file: 'dist/index.d.ts',
    format: 'cjs',
  }],
  plugins: [dts()],
}]

// import typescript from '@rollup/plugin-typescript'
// import svgr from '@svgr/rollup'
// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import postcss from 'rollup-plugin-postcss'
// import dts from 'rollup-plugin-dts'
// import path from 'path'
// import alias from '@rollup/plugin-alias'
//
// const packageJson = require('./package.json')
//
// export default [
//   {
//     input: 'src/index.tsx',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true,
//         exports: 'named',
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         sourcemap: true,
//         exports: 'named',
//       },
//     ],
//     plugins: [
//       svgr(),
//       resolve(),
//       alias({
//         resolve: ['.tsx', '.ts'],
//         entries: [
//           {
//             find: '@',
//             replacement: path.resolve(path.resolve(__dirname), 'src'),
//           },
//         ],
//       }),
//       postcss(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       commonjs(),
//     ],
//   },
//   {
//     input: 'dist/esm/types/index.d.ts',
//     output: [{
//       file: 'dist/index.d.ts',
//       format: 'esm',
//     }],
//     plugins: [dts()],
//   },
// ]
