import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

import { readFileSync } from 'fs';

const pkg = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8')
);

export default {
  input: './src/index.ts', // entry point for your library
  output: [
    {
      file: pkg.main, // CommonJS build (e.g., dist/index.js)
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module, // ES module build (e.g., dist/index.esm.js)
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    postcss({
      extensions: ['.css'],
    }),
  ],
};
