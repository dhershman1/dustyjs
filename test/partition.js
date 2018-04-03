import is from '../src/is/index';
import partition from '../src/partition/index';
import test from 'ava';

test('Basic functionality', t => {
  const check = is(String);

  t.deepEqual(partition(check, []), [[], []]);
  t.deepEqual(partition(check, ['foo', 'bar', 100]), [['foo', 'bar'], [100]]);
  t.deepEqual(partition(check, ['foo', 'bar']), [['foo', 'bar'], []]);
});

test('Is curried', t => {
  const part = partition(is(String));

  t.deepEqual(part(['foo', 'bar', 100]), [['foo', 'bar'], [100]]);
});
