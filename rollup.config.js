import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  onwarn: warning => {
    console.warn(warning);
  },
  plugins: [
    resolve(),
    buble(),
    uglify()
  ],
  output: {
    name: 'DustyJS',
    format: 'umd',
    file: 'dist/dustyjs.umd.js'
  }
};
