import { isEqual } from '../index';
import test from 'ava';

test('Test simple types', t => {
  t.truthy(isEqual('testing', 'testing'));
  t.truthy(isEqual(1, 1));
  t.truthy(isEqual(true, true));
  t.falsy(isEqual('1', 1));
});

test('Test Array Type', t => {
  t.truthy(isEqual([], []));
  t.truthy(isEqual([1, 2, 3], [1, 2, 3]));
  t.truthy(isEqual(['test'], ['test']));
  t.falsy(isEqual([], {}));
});

test('Test Object Type', t => {
  t.truthy(isEqual({}, {}));
  t.truthy(isEqual({ test: 1 }, { test: 1 }));
  t.truthy(isEqual({
    test: 1,
    again: 'test'
  }, {
    test: 1,
    again: 'test'
  }));
  t.falsy(isEqual({ test: 1 }, { test: 2 }));
});
