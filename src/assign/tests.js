import assign from './index';
import test from 'ava';

test('Test base functionality', t => {
  const compare = {
    test: 1,
    again: 2
  };
  const result = assign({ test: 1 }, { again: 2 });

  t.deepEqual(compare, result);
});

test('Test with more complex objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3
  };
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  });

  t.deepEqual(compare, result);
});

test('Test with nested objects', t => {
  const compare = {
    test: 1,
    again: 2,
    anotherOne: 3,
    nested: {
      thing: 1,
      forecast: 23
    }
  };
  const result = assign({ test: 1 }, {
    again: 2,
    anotherOne: 3
  }, {
    nested: {
      thing: 1,
      forecast: 23
    }
  });

  t.deepEqual(compare, result);
});
