import find from './index';
import test from 'ava';

test('Test base functionality', t => {
  const result = find(val => val === 1, [2, 32, 1]);

  t.truthy(result);
  t.is(result, 1);
});

test('Test array of objects functionality', t => {
  const result = find(({ val }) => val === 1, [{ val: 2 }, { val: 32 }, { val: 1 }]);

  t.truthy(result);
  t.deepEqual(result, { val: 1 });
});

test('Test object functionality', t => {
  const result = find(val => val === 1, {
    testing: 2,
    thing: 3,
    other: 1
  });

  t.truthy(result);
  t.is(result, 1);
});

test('Test nested object functionality', t => {
  const result = find(({inner}) => inner === 1, {
    testing: {
      inner: 2
    },
    thing: {
      inner: 3
    },
    other: {
      inner: 1
    }
  });

  t.truthy(result);
  t.deepEqual(result, {inner: 1});
});

test('Test curried find', t => {
  const finder = find(({ val }) => val === 1);
  const result = finder([{ val: 2 }, { val: 32 }, { val: 1 }]);
  const deeperResults = finder([
    { val: 2 },
    { val: 32 },
    {
      val: 1,
      thing: 2
    },
    { val: 1 }
  ]);

  t.truthy(result);
  t.deepEqual(result, { val: 1 });
  t.deepEqual(deeperResults, {
    val: 1,
    thing: 2
  });
});

test('Stops at the first element that passes our function', t => {
  const runner = x => x > 100;

  t.is(find(runner, [1, 101, 3, 200, 4]), 101);
  t.is(find(runner, [1, 3, 200, 4]), 200);
});
