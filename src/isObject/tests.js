import isObject from './index';
import test from 'ava';

test('Test isObject()', t => {

  t.truthy(isObject({ cool: 'test' }), 'Results returned true');
  t.falsy(isObject(['test']), 'Results returned false');
});
