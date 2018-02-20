import is from '../is';
import partition from './index';
import test from 'ava';

test('Basic functionality', t => {
  const check = is(String);

  t.deepEqual(partition(check, []), [[], []]);
  t.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]]);
  t.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []]);
});

test('Works along with objects', t => {
  const check = is(String);

  t.deepEqual(partition(check, {}), [[], []]);
  t.deepEqual(partition(check, {
    a: 'foo',
    b: 'bar',
    c: 100
  }), [['foo', 'bar'], [100]]);
  t.deepEqual(partition(check, {
    a: 'foo',
    b: 'bar'
  }), [['foo', 'bar'], []]);
});

test('Is curried', t => {
  const part = partition(is(String));

  t.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]]);
  t.deepEqual(part({
    a: 'foo',
    b: 'bar',
    c: 100
  }), [['foo', 'bar'], [100]]);
});
