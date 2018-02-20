import prop from './index';
import test from 'ava';

test('Returns the desired property value', t => {
  t.is(prop(['thing'], { thing: 'test' }), 'test');
});

test('Is curried', t => {
  const proper = prop(['a']);

  t.is(proper({ a: 1 }), 1);
});
