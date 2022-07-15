import typescript from 'rollup-plugin-typescript2'
import svgr from '@svgr/rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import styled from 'styled-components'

// import alias from '@rollup/plugin-alias';
// import dts from "rollup-plugin-dts";

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' },
    plugins: [
      peerDepsExternal(),
      url(),
      svgr(),
      resolve(),
      commonjs(),
      postcss(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
]
