import pluck from './index';
import test from 'ava';

/* eslint-disable object-property-newline */

test('Basic functionality Arrays', t => {
  t.deepEqual(pluck(0, [[1, 2], [3, 4]]), [1, 3]);
  t.deepEqual(pluck('a', [{ a: 1 }]), [1]);
});

test('Basic functionality Objects', t => {
  t.deepEqual(pluck('a', [{ a: 1 }, { a: 2 }]), [1, 2]);
  t.deepEqual(pluck('val', { a: { val: 3 }, b: { val: 5 } }), { a: 3, b: 5 });
});

test('Test is Curried', t => {
  const plucker = pluck('a');

  t.deepEqual(plucker([{ a: 1 }, { a: 2 }]), [1, 2]);
});
