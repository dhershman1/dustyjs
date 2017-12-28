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
