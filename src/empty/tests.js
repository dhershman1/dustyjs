import empty from './index';
import test from 'ava';

test('Test array functionality', t => {
  t.deepEqual(empty([1, 2, 3]), []);
  t.deepEqual(empty(['abc', 123, 'you and me']), []);
});

test('Test object functionality', t => {
  t.deepEqual(empty({ test: 1 }), {});
  t.deepEqual(empty({
    test: 1,
    nested: {
      again: 2
    }
  }), {});
});

test('Test string functionality', t => {
  t.is(empty('Empty this string!'), '');
  t.is(empty('123456789'), '');
});
