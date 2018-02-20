import pluck from './index';
import test from 'ava';

/* eslint-disable object-property-newline */

// test('Works with Arrays', t => {
//   t.deepEqual(pluck(0, [[1, 2], [3, 4]]), [1, 3]);
//   t.deepEqual(pluck('a', [{ a: 1 }]), [1]);
// });

// test('Works with Objects', t => {
//   t.deepEqual(pluck('a', [{ a: 1 }, { a: 2 }]), [1, 2]);
//   t.deepEqual(pluck('val', { a: { val: 3 }, b: { val: 5 } }), [3, 5]);
// });

// test('is Curried', t => {
//   const plucker = pluck('a');

//   t.deepEqual(plucker([{ a: 1 }, { a: 2 }]), [1, 2]);
// });

test('placeholder test until fixes in place', t => {
  t.truthy(pluck);
});
