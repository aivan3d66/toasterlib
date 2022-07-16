import typescript from "@rollup/plugin-typescript";
import svgr from '@svgr/rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import dts from "rollup-plugin-dts";

// import alias from '@rollup/plugin-alias';

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
    plugins: [
      svgr(),
      resolve(),
      postcss(),
      typescript({ tsconfig: './tsconfig.json' }),
      commonjs(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]
