import clone from './index';
import test from 'ava';

test('Test object functionality', t => {
  const val = {
    test: 1,
    again: 2,
    anotherOne: 3
  };

  t.deepEqual(clone(val), val);
});
