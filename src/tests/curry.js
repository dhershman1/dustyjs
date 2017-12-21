import { curry } from '../index';
import test from 'ava';

test('Basic Curry test', t => {
  const add = curry((a, b, c) => a + b + c);
  const results = add(2)(4)(10);

  t.truthy(results, 'Results came by');
  t.is(results, 16, 'Results are equal to 16');
  t.is(typeof results, 'number', 'Result is a number');
});
