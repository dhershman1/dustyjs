import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  onwarn: warning => {
    console.warn(warning); // eslint-disable-line
  },
  plugins: [
    resolve(),
    buble(),
    uglify()
  ],
  output: {
    name: 'dusty',
    format: 'umd',
    file: 'dist/dusty-fns.umd.js'
  }
};
