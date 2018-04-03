import flatten from '../src/flatten/index';
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

test('It is not destructive', t => {
  const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];

  t.notDeepEqual(flatten(nest), nest);
});

test('Flattens an array of empty arrays', t => {
  t.deepEqual(flatten([[], [], []]), []);
});
