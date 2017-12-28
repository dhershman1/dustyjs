import range from './index';
import test from 'ava';

test('Test base functionality', t => {
  const results = range(1, 5);

  t.truthy(results);
  t.deepEqual(results, [1, 2, 3, 4]);
});

test('Test missing first argument', t => {
  const results = range(5);

  t.truthy(results);
  t.deepEqual(results, [0, 1, 2, 3, 4]);
});
