import arrayFromIterator from '../src/_internals/array-from-iterator';
import test from 'ava';

const makeIterator = array => {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < array.length ? {
        value: array[nextIndex++],
        done: false
      } : { done: true };
    }
  };
};

test('Test functionality', t => {
  const iter = makeIterator([]);

  t.truthy(arrayFromIterator(iter));
  t.deepEqual(arrayFromIterator(iter), []);
});

test('Test value functionality', t => {
  const iter = makeIterator(['test']);
  const results = arrayFromIterator(iter);

  t.truthy(results);
  t.deepEqual(results, ['test']);
});
