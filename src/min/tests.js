import min from './index';
import test from 'ava';

test('Basic functionality', t => {
  t.is(min([1, 3, 2, 5, 4]), 1);
  t.is(min(['c', 'a', 'b', 'f']), 'a');
});
