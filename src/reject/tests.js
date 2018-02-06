import reject from './index';
import test from 'ava';

test('Basic functionality', t => {
  const isOdd = n => n % 2 === 1;
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  t.deepEqual(reject(isOdd, [1, 2, 3, 4]), [2, 4]);
  t.deepEqual(reject(isOdd, obj), {
    b: 2,
    d: 4
  });
});
