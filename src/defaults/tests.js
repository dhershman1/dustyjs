import defaults from './index';
import test from 'ava';

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
