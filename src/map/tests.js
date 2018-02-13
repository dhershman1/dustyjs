import map from './index';
import test from 'ava';

/* eslint-disable object-property-newline */

const dbl = n => n * 2;

test('Basic functionality on Arrays', t => {
  t.deepEqual(map(dbl, []), []);
  t.deepEqual(map(dbl, [1, 2, 3]), [2, 4, 6]);
});

test('Basic functionality on Objects', t => {
  t.deepEqual(map(dbl, {}), {});
  t.deepEqual(map(dbl, { a: 1, b: 2, c: 3 }), { a: 2, b: 4, c: 6 });
});

test('Test is Curried', t => {
  const dbler = map(dbl);

  t.deepEqual(dbler([1, 2, 3, 4]), [2, 4, 6, 8]);
});
