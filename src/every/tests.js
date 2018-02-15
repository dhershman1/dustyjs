import every from './index';
import test from 'ava';

test('Basic Functionality', t => {
  t.truthy(every(x => x > 0, [1, 2, 3, 4]));
  t.falsy(every(x => x > 0, [-1, 0, 1]));
});

test('Test Curried functionality', t => {
  const run = every(x => x < 4);

  t.truthy(run([1, 2, 3]));
  t.falsy(run([4, 5, 6]));
});
