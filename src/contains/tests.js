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

test('Basic curry functionality', t => {
  const list = [1, 2, 3];
  const checker = contains(3);

  t.true(checker(list));
});

test('Returns false for an empty list', t => {
  t.false(contains(1, []));
});

test('Returns false for invalid type comparisons', t => {
  t.false(contains('1', [1]));
});
