import mean from '../src/mean/index';
import test from 'ava';

test('Test base functionality', t => {
  const results = mean([1, 2, 3, 2]);

  t.truthy(results);
  t.is(results, 2);
});

test('Returns mean of a single value list', t => {
  t.is(mean([2]), 2);
});

test('Returns NaN for empty lists', t => {
  t.is(mean([]), NaN);
});

test('Returns NaN when nothing is passed', t => {
  t.is(mean(), NaN);
});
