import isEmpty from './index';
import test from 'ava';

test('Test isEmpty()', t => {
  t.truthy(isEmpty({}), 'Object is empty');
  t.truthy(isEmpty([]), 'Array is empty');
  t.truthy(isEmpty(''), 'String is Empty');
  t.falsy(isEmpty('Test'), 'String is not empty');
  t.falsy(isEmpty([1]), 'Array is not empty');
  t.falsy(isEmpty({ test: 1 }), 'Object is not empty');
});
