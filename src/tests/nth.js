import { nth } from '../index';
import test from 'ava';

test('Test base functionality', t => {
  const list = ['foo', 'bar', 'baz', 'quux'];

  t.is(nth(1, list), 'bar');
  t.is(nth(-1, list), 'quux');
  t.falsy(nth(-99, list));
});

test('Test string functionality', t => {
  t.is(nth(1, 'abc'), 'b');
  t.is(nth(3, 'abc'), '');
  t.is(nth(0, 'abc'), 'a');
});
