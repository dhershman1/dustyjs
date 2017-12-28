import isRegExp from './index';
import test from 'ava';

test('Test isRegExp()', t => {
  t.falsy(isRegExp(1), 'Results returned false');
  t.truthy(isRegExp(/u/g), 'Results returned true');
});
