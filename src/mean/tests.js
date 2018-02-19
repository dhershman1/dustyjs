import mean from './index';
import test from 'ava';

test('Test base functionality', t => {
  const results = mean(1, 2, 3, 2);

  t.truthy(results);
  t.is(results, 2);
});
