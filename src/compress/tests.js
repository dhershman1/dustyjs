import compress from './index';
import test from 'ava';

test('Basic Functionality', t => {
  const results = compress({
    test: '',
    cool: 'thing',
    not: 'removed'
  });

  t.falsy(results.test);
  t.is(results.cool, 'thing');
  t.is(results.not, 'removed');
});
