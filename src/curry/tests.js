import curry from './index';
import replaceAtIndex from '../replaceAtIndex';
import test from 'ava';

test('Basic Curry test', t => {
  const add = curry((a, b, c) => a + b + c);
  const results = add(2)(4)(10);

  t.truthy(results, 'Results came by');
  t.is(results, 16, 'Results are equal to 16');
  t.is(typeof results, 'number', 'Result is a number');
});

test('Testing curry with another function', t => {
  const first = curry(replaceAtIndex)(0);
  const results = first('brown', [1, 2, 3, 4]);

  t.truthy(results);
  t.deepEqual(results, ['brown', 2, 3, 4]);
});

test('Testing curry with another function again', t => {
  const second = curry(replaceAtIndex)(1)('brown');
  const results = second([1, 2, 3, 4]);

  t.truthy(results);
  t.deepEqual(results, [1, 'brown', 3, 4]);
});
