import replaceAt from './index';
import test from 'ava';

test('Replaces value at index', t => {
  const result = replaceAt(2, 10, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 10, 3]);
});

test('Handles string based arrays', t => {
  t.deepEqual(replaceAt(1, 'haha', ['foo', 'bar', 'bax']), ['foo', 'haha', 'bax']);
});

test('It only replaces the index it was told', t => {
  t.deepEqual(replaceAt(1, 10, [0, 1, 1, 2, 2, 3]), [0, 10, 1, 2, 2, 3]);
});

test('Is curried', t => {
  t.deepEqual(replaceAt(2)(10)([0, 1, 2, 3]), [0, 1, 10, 3]);
});
