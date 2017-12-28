import removeAtIndex from './index';
import test from 'ava';

test('Test removeAtIndex()', t => {
  const result = removeAtIndex(2, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 3]);
});
