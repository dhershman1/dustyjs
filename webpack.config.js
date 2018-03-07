const path = require('path');
const globby = require('globby');
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
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: '[name]/index.js',
    library: 'dusty',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
