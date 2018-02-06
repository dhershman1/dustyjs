const fs = require('fs');
const path = require('path');
const jsDocParser = require('jsdoc-to-markdown');
const ignoredFiles = ['_internals', 'esm'];

const listFns = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'));

  return files
    .filter(file => (/^[^._]/).test(file) && !ignoredFiles.includes(file))
    .map(file => ({
      name: file,
      path: `./${file}`,
      fullPath: `./src/${file}/index.js`
    }));
};

const writeDocs = fileObj => fs.writeFileSync('docs.js', `module.exports = ${JSON.stringify(fileObj)}`);

const generateUsage = name => ({
  'commonjs': {
    title: 'CommonJs',
    code: `const ${name} = require('dusty-fns/${name}');`
  },
  'standard': {
    title: 'Standard',
    code: `import ${name} from 'dusty-fns/${name}';`
  },
  'browser': {
    title: 'Browser',
    code: `<script src="path/to/dusty-fns/${name}/index.js"></script>`
  }
});

const generateSyntax = (name, args) => {
  if (!args) {
    return '';
  }

  const argsStr = args.map(a => a.optional ? `[${a.name}]` : a.name).join(', '); // eslint-disable-line

  return `${name}(${argsStr})`;
};

const generateSourceDocs = () => listFns().map(fn => jsDocParser.getTemplateDataSync({
  'files': fn.fullPath,
  'no-cache': true
})[0])
  .map(d => ({
    since: d.since,
    title: d.name,
    description: d.description,
    examples: d.examples,
    returns: d.returns,
    params: d.params,
    sig: d.customTags ? d.customTags[0].value : []
  }));

let generated = generateSourceDocs();

generated = generated.map(doc => ({
  title: doc.title,
  since: doc.since,
  syntax: generateSyntax(doc.title, doc.params),
  usage: generateUsage(doc.title),
  desc: doc.description,
  examples: doc.examples,
  params: doc.params,
  returns: doc.returns,
  sig: doc.sig
}));

writeDocs(generated);
