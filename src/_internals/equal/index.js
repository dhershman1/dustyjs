import arrayFromIterator from '../array-from-iterator';
import functionName from '../function-name';
import has from '../../has';
import identical from '../../identical';
import type from '../../type';

const nullTypeCheck = (a, b) => a === null || b === null || type(a) !== type(b);

const typeCheck = a => {
  const allTypes = {
    complex: ['Arguments', 'Array', 'Object'],
    simple: ['Boolean', 'Number', 'String'],
    date: ['Date'],
    err: ['Error'],
    regex: ['RegExp'],
    map: ['Map', 'Set'],
    other: ['Int8Array', 'Uint8Array', 'Uint8ClampedArray',
      'Int16Array', 'Uint16Array', 'Int32Array',
      'Uint32Array', 'Float32Array', 'Float64Array', 'ArrayBuffer']
  };

  for (const prop in allTypes) {
    const currType = allTypes[prop];

    if (currType.indexOf(a) !== -1) {
      return prop;
    }
  }

  return '';
};

const equal = (a, b, stackA = [], stackB = []) => { // eslint-disable-line
  if (identical(a, b)) {
    return true;
  }

  if (nullTypeCheck(a, b)) {
    return false;
  }

  switch (typeCheck(type(a))) {
  case 'complex':
    if (typeof a.constructor === 'function' &&
      functionName(a.constructor) === 'Promise') {

      return a === b;
    }
    break;
  case 'simple':
    if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
      return false;
    }
    break;
  case 'date':
    if (!identical(a.valueOf(), b.valueOf())) {
      return false;
    }
    break;
  case 'err':
    return a.name === b.name && a.message === b.message;
  case 'regex':
    if (!(a.source === b.source &&
          a.global === b.global &&
          a.ignoreCase === b.ignoreCase &&
          a.multiline === b.multiline &&
          a.sticky === b.sticky &&
          a.unicode === b.unicode)) {
      return false;
    }
    break;
  case 'map':
    if (!equal(arrayFromIterator(a.entries()), arrayFromIterator(b.entries()), stackA, stackB)) {
      return false;
    }
    break;
  case 'other':
    break;
  default:
    return false;
  }

  const keysA = Object.keys(a);

  if (keysA.length !== Object.keys(b).length) {
    return false;
  }

  let idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;

  while (idx >= 0) {
    const key = keysA[idx];

    if (!(has(key, b) && equal(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();

  return true;
};

export default equal;
