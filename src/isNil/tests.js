import isNil from './index';
import test from 'ava';

/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */

test('Basic functionality', t => {
  t.truthy(isNil(null), 'null results returned true');
  t.truthy(isNil(undefined), 'undefined results returned false');
  t.falsy(isNil([]), 'empty array results returned false');
});
