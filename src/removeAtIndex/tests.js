import removeAtIndex from './index';
import test from 'ava';

test('Removes from appointed index', t => {
  const result = removeAtIndex(2, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 3]);
});

test('Can handle string based arrays', t => {
  t.deepEqual(removeAtIndex(1, ['foo', 'bar']), ['foo']);
});

test('Is curried', t => {
  const remover = removeAtIndex(2);
  const result = remover([1, 2, 3, 4]);

  t.deepEqual(result, [1, 2, 4]);
});
