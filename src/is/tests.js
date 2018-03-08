import is from './index';
import test from 'ava';

/* eslint-disable
func-names,
brace-style,
prefer-rest-params,
no-new-wrappers,
prefer-arrow-callback,
no-empty-function */

test('Test simple types functionality', t => {
  t.true(is(String, ''));
  t.true(is(Number, 0));
  t.true(is(Boolean, true));
});

test('Test complex types functionality', t => {
  t.true(is(Function, a => a));
  t.true(is(Object, {}));
  t.true(is(Array, []));
  t.true(is(RegExp, /[0-9]/g));
});

test('Considers almost everything as an object', t => {
  const isObj = is(Object);

  t.true(isObj({}));
  t.true(isObj([]));
  t.true(isObj((function () { return arguments; })()));
  t.true(isObj(new Boolean(false)));
  t.true(isObj(new Date()));
  t.true(isObj(new Number(0)));
  t.true(isObj(function () {}));
  t.true(isObj(/(?:)/));
  t.true(isObj(new String('')));
});

test('Does not coerce', t => {
  t.false(is(Boolean, 1));
  t.false(is(Number, '1'));
  t.false(is(Number, false));
});

test('Recognizes primitives as their object equivilents', t => {
  t.true(is(Boolean, false));
  t.true(is(Number, 0));
  t.true(is(String, ''));
});

test('Should now consider primitives to be part of an object', t => {
  t.false(is(Object, false));
  t.false(is(Object, 0));
  t.false(is(Object, ''));
});
