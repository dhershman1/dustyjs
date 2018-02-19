import prop from './index';
import test from 'ava';

test('Basic functionality', t => {
  t.is(prop(['thing'], { thing: 'test' }), 'test');
  t.falsy(prop('thing', {}));
});

test('Curried functionality', t => {
  const proper = prop(['a']);

  t.is(proper({ a: 1 }), 1);
});
