/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */
import test from 'ava';
import { type } from '../index';

test('Test base functionality', t => {
  t.is(type([]), 'Array');
  t.is(type({}), 'Object');
  t.is(type(true), 'Boolean');
  t.is(type(1), 'Number');
  t.is(type('test'), 'String');
  t.is(type(undefined), 'Undefined');
  t.is(type(null), 'Null');
  t.is(type(new Date()), 'Date');
});
