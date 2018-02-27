import omit from './index';
import test from 'ava';

test('Test omit()', t => {
  t.deepEqual(omit('test', {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cool: 2,
    cat: 'Mew!'
  });

  t.deepEqual(omit(['cool', 'test'], {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  }), {
    cat: 'Mew!'
  });

  t.deepEqual(omit('cool', ['cool', 'cat', 'cool']), ['cat']);
  t.deepEqual(omit(['cool', 'test'], ['cool', 'cat', 'cool', 'test', 'bobby']), ['cat', 'bobby']);
});

test('Test curried omit single key', t => {
  const omiter = omit('test');
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  });

  t.deepEqual(results, {
    cool: 2,
    cat: 'Mew!'
  });

});

test('Test curried omit array of keys', t => {
  const omiter = omit(['cool', 'test']);
  const results = omiter({
    test: 1,
    cool: 2,
    cat: 'Mew!'
  });

  t.deepEqual(results, { cat: 'Mew!' });
});

test('Test curried omit array values with single key', t => {
  const omiter = omit('cool');
  const results = omiter(['cool', 'cat', 'cool']);

  t.deepEqual(results, ['cat']);
});

test('Test curried omit array values and keys', t => {
  const omiter = omit(['cool', 'test']);
  const results = omiter(['cool', 'cat', 'cool', 'test', 'bobby']);

  t.deepEqual(results, ['cat', 'bobby']);
});
