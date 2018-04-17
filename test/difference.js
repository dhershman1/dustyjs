import difference from '../src/difference';
import test from 'ava';

test('Returns the difference in arrays', t => {
  t.deepEqual(difference([1, 2, 3], [1]), [2, 3]);
});

test('Handles multiple arrays being passed in to it', t => {
  t.deepEqual(difference([1, 2, 3, 4, 5], [1, 2], [3]), [3, 4, 5]);
});

test('Is curried', t => {
  const diff = difference([1, 4, 13, 'test']);

  t.deepEqual(diff([1, 4, 13]), ['test']);
});
