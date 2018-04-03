import test from 'ava';
import union from '../src/union/index';

test('Combines two arrays together without dupes', t => {
  const result = union([1, 2, 3, 4, 5], [4, 5, 6, 7]);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7]);
});

test('Handles multiple arrays being sent in', t => {
  const result = union([1, 2, 3, 4, 5], [[4, 5, 6, 7], [6, 7, 8, 9]]);

  t.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Is curried', t => {
  const un = union([1, 2, 3, 4, 5]);

  t.deepEqual(un([4, 5, 6, 7]), [1, 2, 3, 4, 5, 6, 7]);
});
