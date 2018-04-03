/* eslint-disable prefer-arrow-callback, no-empty-function, func-names, no-undefined */
import test from 'ava';
import type from '../src/type/index';

test('Array is given back when given array literal', t => {
  t.is(type([]), 'Array');
});

test('Object is given back when given object literal', t => {
  t.is(type({}), 'Object');
});

test('RegExp is given back when given regexp literal', t => {
  t.is(type(/[A-z]/), 'RegExp');
});

test('Number is given back when given number value', t => {
  t.is(type(1), 'Number');
});

test('Number is given back when given NaN value', t => {
  t.is(type(NaN), 'Number');
});

test('String is given back when given string value', t => {
  t.is(type('testing'), 'String');
});

test('String given if given a String object', t => {
  t.is(type(new String('I am a String object')), 'String'); // eslint-disable-line no-new-wrappers
});

test('Null if given the null value', t => {
  t.is(type(null), 'Null');
});

test('Undefined if given the undefined value', t => {
  t.is(type(undefined), 'Undefined');
});
