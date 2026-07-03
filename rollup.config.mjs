import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    url({
      include: ['**/*.svg'],
      limit: Number.MAX_SAFE_INTEGER,
      fileName: 'logos/[name][extname]',
    }),

    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
  ],
  external: ['react', 'react-dom'],
}
