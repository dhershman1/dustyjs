import or from '../src/or/index';
import test from 'ava';

test('Returns true when both params are true', t => {
  t.true(or(true, true));
});

test('Returns true when one param is false', t => {
  t.true(or(true, false));
});

test('Returns false when both params are false', t => {
  t.false(or(false, false));
});

test('Is curried true', t => {
  const a = or(true);

  t.true(a(true));
  t.true(a(false));
});

test('Is curried false', t => {
  const a = or(false);

  t.true(a(true));
  t.false(a(false));
});
