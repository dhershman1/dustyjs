import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './src/index.js',
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            'targets': {
              'browsers': [
                'last 2 versions',
                'ie >= 9'
              ]
            },
            'modules': false
          }
        ],
        '@babel/preset-stage-2'
      ],
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    uglify(),
    filesize()
  ],
  output: {
    file: 'dusty.min.js',
    format: 'umd',
    name: 'dusty'
  }
};
