import { replaceAtIndex } from '../index';
import test from 'ava';

test('Test replaceAtIndex()', t => {
  const result = replaceAtIndex(2, 10, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 10, 3]);
});
