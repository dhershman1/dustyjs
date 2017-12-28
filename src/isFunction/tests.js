import isFunction from './index';
import test from 'ava';

/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */
test('Test isFunction()', t => {

  t.truthy(isFunction(function() {
    return true;
  }), 'Results returned true');
  t.falsy(isFunction('Test'), 'Results returned false');
});
