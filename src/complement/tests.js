import complement from './index';
import test from 'ava';

test('Basic functionality', t => {
  t.false(complement(Array.isArray, []));
  t.true(complement(Array.isArray, 10));
});

test('Curried functionality', t => {
  const isNot = complement(Array.isArray);

  t.false(isNot([]));
  t.true(isNot(10));
});
