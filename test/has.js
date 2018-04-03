import has from '../src/has/index';
import test from 'ava';

test('Test has()', t => {
  t.truthy(has('test', { test: 1 }), 'Has test');
  t.falsy(has('test', { cool: 1 }), 'Does not have test');
});

test('Test curried has', t => {
  const hasProp = has('test');

  t.truthy(hasProp({ test: 1 }));
  t.falsy(hasProp({ cool: 1 }));
});

test('It does not check props from the prototype chain', t => {
  const Person = () => {
    Array.isArray([]);
  };

  Person.prototype.age = 10;
  const bob = new Person();

  t.false(has('age', bob));
});
