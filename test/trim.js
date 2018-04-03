import test from 'ava';
import trim from '../src/trim/index';

test('Returns a trimmed string', t => {
  t.is(trim('my brown cow   '), 'my brown cow');
  t.is(trim('   new things   '), 'new things');
});
