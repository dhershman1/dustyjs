import flatten from './index';
import test from 'ava';

test('Basic Array Functionality', t => {
  const results = flatten([[1, 2, 3], [4, 5, 6]]);

  t.deepEqual(results, [1, 2, 3, 4, 5, 6]);
});

test('Test array of complex objects', t => {
  const results = flatten([[{
    test: 2
  }], [{
    thing: 1
  }]]);

  t.deepEqual(results, [{
    test: 2
  }, {
    thing: 1
  }]);
});

test('Test Multi level of arrays', t => {
  const results = flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);

  t.truthy(results);
  t.deepEqual(results, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
