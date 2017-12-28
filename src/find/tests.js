import find from './index';
import test from 'ava';

test('Test base functionality', t => {
  const result = find(val => val === 1, [2, 32, 1]);

  t.truthy(result);
  t.is(result, 1);
});

test('Test array of objects functionality', t => {
  const result = find(({val}) => val === 1, [{val: 2}, {val: 32}, {val: 1}]);

  t.truthy(result);
  t.deepEqual(result, {val: 1});
});

test('Test object functionality', t => {
  const result = find(val => val === 1, {
    testing: 2,
    thing: 3,
    other: 1
  });

  t.truthy(result);
  t.is(result, 1);
});

test('Test nested object functionality', t => {
  const result = find(({inner}) => inner === 1, {
    testing: {
      inner: 2
    },
    thing: {
      inner: 3
    },
    other: {
      inner: 1
    }
  });

  t.truthy(result);
  t.deepEqual(result, {inner: 1});
});
