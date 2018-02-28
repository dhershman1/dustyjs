import compress from './index';
import test from 'ava';

/* eslint-disable no-undefined */

test('Basic Functionality', t => {
  const results = compress({
    test: '',
    cool: 'thing',
    not: 'removed'
  });

  t.falsy(results.test);
  t.is(results.cool, 'thing');
  t.is(results.not, 'removed');
});

test('Removes undefined values', t => {
  const results = compress({
    test: undefined,
    cool: 'thing',
    not: 'removed'
  });

  t.falsy(results.test);
  t.is(results.cool, 'thing');
  t.is(results.not, 'removed');
});

test('Removes null values', t => {
  const results = compress({
    test: null,
    cool: 'thing',
    not: 'removed'
  });

  t.falsy(results.test);
  t.is(results.cool, 'thing');
  t.is(results.not, 'removed');
});