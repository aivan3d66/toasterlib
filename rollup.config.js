import typescript from 'rollup-plugin-typescript2'
import svgr from '@svgr/rollup'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import commonjs from '@rollup/plugin-commonjs'

// import alias from '@rollup/plugin-alias';
// import dts from "rollup-plugin-dts";

import styled from 'styled-components';
import postcss from 'postcss'

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ['styled-components'],
    plugins: [
      peerDepsExternal(),
      // external(),
      url(),
      svgr(),
      resolve(),
      commonjs(),
      postcss(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    globals: { 'styled-components': 'styled' },
  },
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];
