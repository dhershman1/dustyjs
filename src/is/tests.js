import is from './index';
import test from 'ava';

test('Test simple types functionality', t => {
  t.truthy(is(String, ''));
  t.truthy(is(Number, 0));
  t.truthy(is(Boolean, true));
});

test('Test complex types functionality', t => {
  t.truthy(is(Function, a => a));
  t.truthy(is(Object, {}));
  t.truthy(is(Array, []));
  t.truthy(is(RegExp, /[0-9]/g));
});
