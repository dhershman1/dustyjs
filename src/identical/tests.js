import identical from './index';
import test from 'ava';

test('Test base functionality', t => {
  t.truthy(identical(0, 0));
  t.truthy(identical('t', 't'));
});

test('Test object types', t => {
  const o = {};

  t.truthy(identical(o, o));
  t.falsy(identical({ test: 1 }, { test: 1 }));
  t.falsy(identical({}, {}));
  t.falsy(identical({ test: 1 }, { test: 2 }));
});

test('Test array types', t => {
  t.falsy(identical([], []));
  t.falsy(identical([1], [1]));
  t.falsy(identical([1], [2]));
});

test('Test edge case type', t => {
  t.falsy(identical(0, -0));
  t.truthy(identical(NaN, NaN));
});
