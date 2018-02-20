import empty from './index';
import test from 'ava';

test('Test array functionality', t => {
  t.deepEqual(empty([1, 2, 3]), []);
  t.deepEqual(empty(['abc', 123, 'you and me']), []);
});

test('Test object functionality', t => {
  t.deepEqual(empty({ test: 1 }), {});
  t.deepEqual(empty({
    test: 1,
    nested: {
      again: 2
    }
  }), {});
});

test('Test string functionality', t => {
  t.is(empty('Empty this string!'), '');
  t.is(empty('123456789'), '');
});

test('Empty String', t => {
  const results = empty('Sweet little fox');

  t.is(results, '', 'The string is empty');
});

test('Return 0 for a null value', t => {
  const results = empty(null);

  t.false(results);
});

test('Empty an array', t => {
  const results = empty([1, 2, 3]);

  t.is(results.length, 0, 'Array is empty');
  t.truthy(Array.isArray(results), 'Array is still an array');
});

test('Empty an object', t => {
  const results = empty({
    test: 'an object',
    inner: {
      innerTest: 'this objects inner'
    }
  });

  t.truthy(results, 'Got back results');
  t.deepEqual(results, {}, 'Results are an empty object');
});
