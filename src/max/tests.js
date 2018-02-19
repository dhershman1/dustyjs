import max from './index';
import test from 'ava';

test('Basic functionality', t => {
  t.is(max([1, 3, 2, 5, 4]), 5);
  t.is(max(['c', 'a', 'b', 'f']), 'f');
});
