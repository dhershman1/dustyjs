import intersection from './index';
import test from 'ava';

test('Returns an array with items from both arrays', t => {
  t.deepEqual(intersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4]);
});

test('Its curried', t => {
  const inter = intersection([1, 2, 3, 4]);

  t.deepEqual(inter([3, 4, 5, 6]), [3, 4]);
});
