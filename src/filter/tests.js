import filter from './index';
import test from 'ava';

test('Basic functionality', t => {
  const isEven = n => n % 2 === 0;

  t.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4]);
});

test('Returns an empty array if no element matches', t => {
  t.deepEqual(filter(x => x > 100, [1, 3, 4, 56, 90]), []);
});

test('Filters objects', t => {
  const isEven = n => n % 2 === 0;
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  t.deepEqual(filter(isEven, obj), {
    b: 2,
    d: 4
  });
  t.deepEqual(filter(x => x > 0, {
    x: 0,
    y: 0,
    z: 0
  }), {});
});
