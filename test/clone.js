import clone from '../src/clone/index';
import test from 'ava';

test('Test object functionality', t => {
  const val = {
    test: 1,
    again: 2,
    anotherOne: 3
  };

  t.deepEqual(clone(val), val);
});

test('Returns value back if not an object', t => {
  t.is(clone('val'), 'val');
});

