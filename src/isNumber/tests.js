import isNumber from './index';
import test from 'ava';

test('Test isNumber()', t => {
  t.truthy(isNumber(1), 'Results returned true');
  t.falsy(isNumber('1'), 'Results returned false');
});
