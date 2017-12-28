import isString from './index';
import test from 'ava';

test('Test isString()', t => {
  t.falsy(isString(1), 'Results returned false');
  t.truthy(isString('1'), 'Results returned true');
});
