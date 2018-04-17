import range from '../src/range';
import test from 'ava';

test('Create basic range array', t => {
  const results = range(1, 5);

  t.truthy(results);
  t.deepEqual(results, [1, 2, 3, 4]);
});

test('String test', t => {
  const err = t.throws(() => {
    range('a', 'd');
  });

  t.is(err.message, 'Both Arguments should be a number type');
});

test('Creates range while missing the first argument', t => {
  const results = range(5);

  t.truthy(results);
  t.deepEqual(results, [0, 1, 2, 3, 4]);
});
