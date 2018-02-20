import reject from './index';
import test from 'ava';

const even = x => x % 2 === 0;

test('Reduces an array to the ones not matching a filter', t => {
  t.deepEqual(reject(even, [1, 2, 3, 4, 5]), [1, 3, 5]);
});

test('Returns an empty array if no elements passes function test', t => {
  t.deepEqual(reject(x => x < 100, [1, 90, 99]), []);
});

test('Returns an empty array when an empty array is passed in', t => {
  t.deepEqual(reject(even, []), []);
});

test('Filters objects', t => {
  const isOdd = n => n % 2 === 1;
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  t.deepEqual(reject(isOdd, {}), {});
  t.deepEqual(reject(isOdd, obj), {
    b: 2,
    d: 4
  });
});
