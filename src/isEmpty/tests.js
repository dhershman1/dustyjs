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

test('Returns false when not empty', t => {
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

test('Returns true for 0 numeric value', t => {
  t.true(isEmpty(0));
});

test('Returns true for NaN values', t => {
  t.true(isEmpty(NaN));
});
