import isEmpty from './index';
import test from 'ava';

/* eslint-disable
func-names,
brace-style,
prefer-rest-params,
no-new-wrappers,
prefer-arrow-callback,
no-undefined,
no-empty-function */

test('Test isEmpty()', t => {
  t.false(isEmpty(0));
  t.false(isEmpty(NaN));
  t.false(isEmpty(['']));
});

test('Returns false for null values', t => {
  t.false(isEmpty(null));
});

test('Returns false for undefined', t => {
  t.false(isEmpty(undefined));
});

test('Returns true for empty strings', t => {
  t.true(isEmpty(''));
  t.false(isEmpty(' '));
});

test('Returns true for empty arrays', t => {
  t.true(isEmpty([]));
  t.false(isEmpty([[]]));
});

test('Returns true for empty objects', t => {
  t.true(isEmpty({}));
  t.false(isEmpty({ x: 0 }));
});
