import test from 'ava';
import values from './index';

test('Grabs the values of our objects', t => {
  const results = values({
    a: 1,
    b: 2,
    c: 3
  });

  t.deepEqual(results, [1, 2, 3]);
});
