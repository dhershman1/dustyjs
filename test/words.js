import test from 'ava';
import words from '../src/words/index';

test('Returns an array of words', t => {
  t.deepEqual(words('my brown cow'), ['my', 'brown', 'cow']);
});

test('Works with template strings', t => {
  const x = 'brown';

  t.deepEqual(words(`my ${x} cow`), ['my', 'brown', 'cow']);
});
