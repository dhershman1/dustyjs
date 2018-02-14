const path = require('path');
const globby = require('globby');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const findEntries = () => {
  const results = {};
  const paths = globby.sync(['src/*/index.js', '!src/_internals']);

  paths.forEach(p => {
    const { name, dir } = path.parse(p);
    let [, moduleName] = dir.split('/');

    if (name !== 'index') {
      moduleName = name;
    }

    results[moduleName] = path.resolve(__dirname, p);

    return true;
  });

  return results;
};

module.exports = {
  entry: findEntries(),
  output: {
    path: path.resolve(__dirname),
    filename: '[name]/index.js',
    library: 'dusty',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['babel-preset-env', {
              'targets': {
                'browsers': ['last 2 versions', 'ie >= 9']
              },
              'modules': 'umd',
              'useBuiltIns': false
            }]]
          }
        }
      }
    ]
  }
};
