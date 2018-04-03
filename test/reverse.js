import reverse from '../src/reverse/index';
import test from 'ava';

test('Returns reversed array', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1]);
});

test('Returns empty array when given an empty array', t => {
  t.deepEqual(reverse([]), []);
});

test('Does not mutate original array', t => {
  const x = [1, 2, 3];

  t.deepEqual(reverse(x), [3, 2, 1]);
  t.deepEqual(x, x);
});
