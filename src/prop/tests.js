import prop from './index';
import test from 'ava';

/* eslint-disable no-undefined */

test('Returns the desired property value', t => {
  t.is(prop('thing', { thing: 'test' }), 'test');
});

test('Is curried', t => {
  const proper = prop('a');

  t.is(proper({ a: 1 }), 1);
});

test('Use it as a function for mapping', t => {
  t.deepEqual([{ a: 1 }, { a: 2 }, { a: 3 }].map(prop('a')), [1, 2, 3]);
});

test('Returns undefined for empty value', t => {
  t.is(prop('x', {}), undefined);
});
