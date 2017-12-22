/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */
import {
  isArray,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isRegExp,
  isString
} from '../index';
import test from 'ava';

test('Test isArray()', t => {
  t.truthy(isArray(['test']), 'Results returned true');
  t.falsy(isArray({cool: 'test'}), 'Results returned false');
});

test('Test isObject()', t => {

  t.truthy(isObject({cool: 'test'}), 'Results returned true');
  t.falsy(isObject(['test']), 'Results returned false');
});

test('Test isFunction()', t => {

  t.truthy(isFunction(function() {
    return true;
  }), 'Results returned true');
  t.falsy(isFunction('Test'), 'Results returned false');
});

test('Test isNull()', t => {
  t.truthy(isNull(null), 'null results returned true');
  t.falsy(isNull(undefined), 'undefined results returned false');
  t.falsy(isNull([]), 'empty array results returned false');
});

test('Test isNumber()', t => {
  t.truthy(isNumber(1), 'Results returned true');
  t.falsy(isNumber('1'), 'Results returned false');
});

test('Test isString()', t => {
  t.falsy(isString(1), 'Results returned false');
  t.truthy(isString('1'), 'Results returned true');
});

test('Test isRegExp()', t => {
  t.falsy(isRegExp(1), 'Results returned false');
  t.truthy(isRegExp(/u/g), 'Results returned true');
});
