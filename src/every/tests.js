import every from './index';
import test from 'ava';

test('Basic Functionality', t => {
  t.true(every(x => x > 0, [1, 2, 3, 4]));
  t.false(every(x => x > 0, [-1, 0, 1]));
});

test('Test Curried functionality', t => {
  const run = every(x => x < 4);

  t.true(run([1, 2, 3]));
  t.false(run([4, 5, 6]));
});

test('Throws an error when passed wrong type', t => {
  const err = t.throws(() => {
    every(x => x < 4, '');
  });

  t.truthy(err.message, 'x.every is not a function');
});
