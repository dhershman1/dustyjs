import isNull from './index';
import test from 'ava';

/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */
test('Test isNull()', t => {
  t.truthy(isNull(null), 'null results returned true');
  t.falsy(isNull(undefined), 'undefined results returned false');
  t.falsy(isNull([]), 'empty array results returned false');
});
