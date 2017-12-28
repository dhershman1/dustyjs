import clone from './index';
import test from 'ava';

test('Test array functionality', t => {
  const val = [1, 2, 3, 4];

  t.deepEqual(clone(val), val);
});

test('Test object functionality', t => {
  const val = {
    test: 1,
    again: 2,
    anotherOne: 3
  };

  t.deepEqual(clone(val), val);
});
