import includes from './index';
import test from 'ava';

test('Returns true for basic strings', t => {
  t.true(includes('cow', 'small brown cow'));
});

test('Is case insensitive', t => {
  t.true(includes('cow', 'Small Brown Cow'));
});

test('Works with string templates', t => {
  const x = 'cow';

  t.true(includes('cow', `small brown ${x}`));
});

test('Is Curried', t => {
  const checker = includes('cow');
  const x = 'cow';

  t.true(checker('small brown cow'));
  t.true(checker('Small Brown Cow'));
  t.true(checker(`small brown ${x}`));
});
