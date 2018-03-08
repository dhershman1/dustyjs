import defaults from './index';
import test from 'ava';

/* eslint-disable no-undefined */

test('Basic functionality test', t => {
  const data = {
    thing: 4
  };
  const def = {
    test: 1,
    thing: 2
  };

  t.deepEqual(defaults(def, data), {
    test: 1,
    thing: 4
  });
});

test('Basic Curried functionality', t => {
  const defaulter = defaults({
    test: 'Mew!',
    thing: 'Kitty'
  });
  const data = {
    test: 'Meow!'
  };

  t.deepEqual(defaulter(data), {
    test: 'Meow!',
    thing: 'Kitty'
  });
});

test('Overwrites false or undefined values', t => {
  const data = {
    thing: 4,
    test: undefined
  };
  const def = {
    test: 1,
    thing: 2
  };

  t.deepEqual(defaults(def, data), {
    test: 1,
    thing: 4
  });
});

test('Does not overwrite zero or empty string', t => {
  const data = {
    thing: '',
    test: 0
  };
  const def = {
    test: 1,
    thing: 2
  };

  t.deepEqual(defaults(def, data), {
    test: 0,
    thing: ''
  });
});

test('Does overwrite null', t => {
  const data = {
    thing: 4,
    test: null
  };
  const def = {
    test: 1,
    thing: 2
  };

  t.deepEqual(defaults(def, data), {
    test: 1,
    thing: 4
  });
});
