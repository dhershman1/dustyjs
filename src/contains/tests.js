import contains from './index';
import test from 'ava';

test('Basic simple functionality', t => {
  const list = [1, 2, 3, 4];

  t.true(contains(2, list));
  t.true(contains(4, list));
});

test('Returns false when item is not in list', t => {
  const list = [1, 2, 3, 4];

  t.false(contains(5, list));
  t.false(contains('b', list));
});

test('Basic complex functionality', t => {
  const list = [{ value: 1 }, { value: 2 }];

  t.true(contains({ value: 1 }, list));
});

test('Returns false when complex type does not exist', t => {
  const list = [{ value: 1 }, { value: 2 }];

  t.false(contains({ value: 3 }, list));
  t.false(contains({ value: 'a' }, list));
});

test('Basic curry functionality', t => {
  const list = [1, 2, 3];
  const checker = contains(3);

  t.true(checker(list));
});

test('Returns false for an empty list', t => {
  t.false(contains(1, []));
});


