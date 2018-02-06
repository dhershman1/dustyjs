import contains from './index';
import test from 'ava';

test('Basic simple functionality', t => {
  const list = [1, 2, 3, 4];

  t.is(contains(2, list), 1);
  t.is(contains(4, list), 3);
});

test('Basic complex functionality', t => {
  const list = [{ value: 1 }, { value: 2 }];

  t.is(contains({ value: 1 }, list), 0);
});

test('Basic curry functionality', t => {
  const list = [1, 2, 3];
  const checker = contains(3);

  t.is(checker(list), 2);
});
