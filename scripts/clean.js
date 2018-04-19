const path = require('path');
const fs = require('fs');
const del = require('del');

const fileList = fs.readdirSync(path.join(__dirname, '..'));

const ignoredFiles = [
  '.git',
  '.gitignore',
  '.npmignore',
  '.github',
  'node_modules',
  'src',
  'test',
  'scripts',
  '.babelrc',
  '.eslintignore',
  'LICENSE',
  'dusty.min',
  'docs',
  '.eslintrc',
  'rollup.config',
  'rollup.split',
  'dusty.min.js'
];
const results = fileList.filter(f => {
  const { ext, name } = path.parse(f);

  return ignoredFiles.indexOf(name) === -1 && (!ext || ['.js', '.map'].indexOf(ext) !== -1);
});

del(results).then(() => {
  console.info('Finished Cleaning Up');
});
