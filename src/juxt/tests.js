import juxt from './index';
import test from 'ava';

test('Test basic functionality', t => {
  const getRange = juxt(Math.min, Math.max);

  t.deepEqual(getRange(3, 4, 9, -3), [-3, 9]);
});
