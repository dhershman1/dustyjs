import filter from './index';
import test from 'ava';

test('Basic functionality', t => {
  const isEven = n => n % 2 === 0;
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  t.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4]);
  t.deepEqual(filter(isEven, obj), {
    b: 2,
    d: 4
  });
});
