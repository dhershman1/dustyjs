import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './src/index.js',
  plugins: [
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    uglify()
  ],
  output: {
    file: 'dusty.min.js',
    format: 'umd',
    name: 'dustyFns'
  }
};
