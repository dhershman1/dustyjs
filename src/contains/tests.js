import contains from './index';
import test from 'ava';

test('Basic simple functionality', t => {
  const list = [1, 2, 3, 4];

  t.truthy(contains(2, list));
  t.truthy(contains(4, list));
});

test('Basic complex functionality', t => {
  const list = [{ value: 1 }, { value: 2 }];

  t.truthy(contains({ value: 1 }, list));
});

test('Basic curry functionality', t => {
  const list = [1, 2, 3];
  const checker = contains(3);

  t.truthy(checker(list));
});
