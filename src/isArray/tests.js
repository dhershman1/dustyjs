import isArray from './index';
import test from 'ava';

test('Test isArray()', t => {
  t.truthy(isArray(['test']), 'Results returned true');
  t.falsy(isArray({ cool: 'test' }), 'Results returned false');
});