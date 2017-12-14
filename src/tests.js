import * as dusty from './index';
import test from 'ava';

test('Test isArray()', t => {
  t.truthy(dusty.isArray(['test']), 'Results returned true');
  t.falsy(dusty.isArray({cool: 'test'}), 'Results returned false');
});

test('Test isObject()', t => {

  t.truthy(dusty.isObject({cool: 'test'}), 'Results returned true');
  t.falsy(dusty.isObject(['test']), 'Results returned false');
});

test('Test isFunction()', t => {

  t.truthy(dusty.isFunction(function () {
    return true;
  }), 'Results returned true');
  t.falsy(dusty.isFunction('Test'), 'Results returned false');
});

test('Test isNull()', t => {
  t.truthy(dusty.isNull(null), 'null results returned true');
  t.falsy(dusty.isNull(undefined), 'undefined results returned false');
  t.falsy(dusty.isNull([]), 'empty array results returned false');
});

test('Test isNumber()', t => {
  t.truthy(dusty.isNumber(1), 'Results returned true');
  t.falsy(dusty.isNumber('1'), 'Results returned false');
});

test('Test isString()', t => {
  t.falsy(dusty.isString(1), 'Results returned false');
  t.truthy(dusty.isString('1'), 'Results returned true');
});

test('Basic Curry test', t => {
  const add = dusty.curry((a, b, c) => a + b + c);
  const results = add(2)(4)(10);

  t.truthy(results, 'Results came by');
  t.is(results, 16, 'Results are equal to 16');
  t.is(typeof results, 'number', 'Result is a number');
});

test('Test has()', t => {
  t.truthy(dusty.has('test', { test: 1 }), 'Has test');
  t.falsy(dusty.has('test', { cool: 1 }), 'Does not have test');
});

test('Test isEmpty()', t => {
  t.truthy(dusty.isEmpty({}), 'Object is empty');
  t.truthy(dusty.isEmpty([]), 'Array is empty');
  t.truthy(dusty.isEmpty(''), 'String is Empty');
  t.falsy(dusty.isEmpty('Test'), 'String is not empty');
  t.falsy(dusty.isEmpty([1]), 'Array is not empty');
  t.falsy(dusty.isEmpty({ test: 1 }), 'Object is not empty');
});

test('Test removeAtIndex()', t => {
  const result = dusty.removeAtIndex(2, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 3]);
});

test('Test replaceAtIndex()', t => {
  const result = dusty.replaceAtIndex(2, 10, [0, 1, 2, 3]);

  t.deepEqual(result, [0, 1, 10, 3]);
});

test('Test omit()', t => {
  t.deepEqual(dusty.omit('test', {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cool: 2,
    cat: 'Mew!'
  });

  t.deepEqual(dusty.omit(['cool', 'test'], {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cat: 'Mew!'
  });

  t.deepEqual(dusty.omit('cool', ['cool', 'cat', 'cool']), ['cat']);
  t.deepEqual(dusty.omit(['cool', 'test'], ['cool', 'cat', 'cool', 'test', 'bobby']), ['cat', 'bobby']);
});
