import reslove from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';
export default {
  input: "src/index.",
  output: [{
     dir: "lib/",
     format: 'cjs',
     sourceMap: true
  }
],
  sourceMap: true,
  plugins: [
      reslove(),
      eslint({fix: true}),
      commonjs(),
      typescript({include: ["src/*.ts+(|x)"]}),
      uglify({
          compress: true,
          sourcemap: true
      })
  ]
}
