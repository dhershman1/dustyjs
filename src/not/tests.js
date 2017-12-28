import not from './index';
import test from 'ava';

test('Test not() functionality', t => {
  t.falsy(not(true));
  t.truthy(not(false));
  t.falsy(not(1));
  t.truthy(not(0));
});
