/* eslint-disable prefer-arrow-callback, no-empty-function */
import functionName from './index';
import test from 'ava';

test('Test functionality', t => {
  const myFunc = function myFunc() { };

  t.truthy(functionName(myFunc));
  t.is(functionName(myFunc), 'myFunc');
});