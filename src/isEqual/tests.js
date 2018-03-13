import isEqual from './index';
import test from 'ava';

/* eslint-disable */

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

test('Test isEqual() primatives', t => {
  const a = [];
  const b = a;

  t.truthy(isEqual(100, 100), 'number 100 equals number 100');
  t.falsy(isEqual(100, '100'), 'number 100 is not equal to string 100');
  t.truthy(isEqual([], []), '2 empty arrays are equal');
  t.truthy(isEqual(a, b), 'variable b is equal to a');
  t.truthy(isEqual('test', 'test'), 'strings are equal');
});

test('Test primitive booleans', t => {
  t.truthy(isEqual(true, true), 'simple booleans true, true are equal');
  t.truthy(isEqual(false, false), 'simple booleans false, false are equal');
  t.falsy(isEqual(true, false), 'simple booleans true, false are not equal');
  t.falsy(isEqual(false, true), 'simple booleans false, true are not equal');
});

test('Test Boolean Objects', t => {
  t.truthy(isEqual(new Boolean(true), new Boolean(true)), 'Object true and object true are equal');
  t.truthy(isEqual(new Boolean(false), new Boolean(false)), 'Object false and object false are equal');
  t.falsy(isEqual(new Boolean(false), new Boolean(true)), 'Object false and object true are not equal');
  t.falsy(isEqual(new Boolean(true), new Boolean(false)), 'Object true and object false are not equal');
});

test('Test boolean primitive do not equal boolean objects', t => {
  t.falsy(isEqual(true, new Boolean(true)), 'true is not equal to object true');
  t.falsy(isEqual(false, new Boolean(false)), 'flase is not equal to object false');
});

test('Test can handle objects', t => {
  t.truthy(isEqual({}, {}), 'empty object is equal to empty object');
  t.truthy(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), 'simple object is equal to simple object');
  t.falsy(isEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }), 'the two provided objects are not equal');
});

test('Test arguments objects', t => {
  const a = (function (...args) { return args; }());
  const b = (function (...args) { return args; }());
  const c = (function (...args) { return args; }('a', 'b', 'c'));
  const d = (function (...args) { return args; }('a', 'b', 'c'));

  t.truthy(isEqual(a, b), 'no args is equal');
  t.truthy(isEqual(c, d), '3 args is equal');
  t.falsy(isEqual(a, c), 'no args isnt equal to 3 args');
});

test('Test error objects are equal', t => {
  t.truthy(isEqual(new Error('Test'), new Error('Test')), 'Test error is equal');
  t.truthy(isEqual(new TypeError('Test'), new TypeError('Test')), 'Test type error is equal');
  t.falsy(isEqual(new Error('Test'), new TypeError('Test')), 'Test type error is not equal to regular error');
});

test('Test handles regex', t => {
  t.truthy(isEqual(/\s/, /\s/), 'handles whitespace regex');
  t.truthy(isEqual(/a/gi, /a/gi), 'handles flags');
  t.falsy(isEqual(/\s/, /\d/), 'whitespace regex is not equal to digit regex');
  t.truthy(isEqual(/a/mgi, /a/img), 'handles mixed flags');
  t.falsy(isEqual(/a/gi, /a/i), 'Handles not equal flags');
});

test('Test handles recursive data', t => {
  const c = {};
  const d = {};
  const e = [];
  const f = [];

  c.v = c;
  d.v = d;
  e.push(e);
  f.push(f);

  const nestA = {
    a: [1, 2, { c: 1 }],
    b: 1
  };
  const nestB = {
    a: [1, 2, { c: 1 }],
    b: 1
  };
  const nestC = {
    a: [1, 2, { c: 2 }],
    b: 1
  };

  t.truthy(isEqual(c, d), 'objects are equal');
  t.truthy(isEqual(e, f), 'arrays are equal');
  t.falsy(isEqual(c, f), 'objects are not equal to arrays');
  t.falsy(isEqual(d, e), 'objects are not equal to arrays');
  t.truthy(isEqual(nestA, nestB), 'nested A matches other nested data B');
  t.falsy(isEqual(nestA, nestC), 'nested A does not match other nested data C');
});

test('Test handles dates', t => {
  t.truthy(isEqual(new Date(0), new Date(0)), 'New dates of 0 match');
  t.truthy(isEqual(new Date(1), new Date(1)), 'New dates of 1 match');
  t.falsy(isEqual(new Date(1), new Date(0)), 'New dates of 1 and 0 do not match');
});

test('Test requires both objects to have the same enumerable properties with the same value', t => {

  const a1 = [];
  const a2 = [];

  a2.x = 0;

  const b1 = new Boolean(false);
  const b2 = new Boolean(false);

  b2.x = 0;

  const d1 = new Date(0);
  const d2 = new Date(0);

  d2.x = 0;

  const n1 = new Number(0);
  const n2 = new Number(0);

  n2.x = 0;

  const r1 = /(?:)/;
  const r2 = /(?:)/;

  r2.x = 0;

  const s1 = new String('');
  const s2 = new String('');

  s2.x = 0;

  t.falsy(isEqual(a1, a2), 'Array enumerables not equal');
  t.falsy(isEqual(b1, b2), 'Boolean enumerables not equal');
  t.falsy(isEqual(d1, d2), 'Date enumerables not equal');
  t.falsy(isEqual(n1, n2), 'Number enumerables not equal');
  t.falsy(isEqual(r1, r2), 'Regex enumerables not equal');
  t.falsy(isEqual(s1, s2), 'String enumerables not equal');
});

test('Test handles typed arrays', t => {
  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    const typArr1 = new ArrayBuffer(10);
    const typArr2 = new ArrayBuffer(10);
    const typArr3 = new ArrayBuffer(10);

    typArr1[0] = 1;
    typArr2[0] = 1;
    typArr3[0] = 0;
    const intTypArr = new Int8Array(typArr1);

    t.truthy(isEqual(typArr1, typArr2), 'type array buffer is equal to another array buffer');
    t.falsy(isEqual(typArr1, typArr3), 'Type array buffer 3 has different index 0');
    t.falsy(isEqual(typArr1, intTypArr), 'Type array not equal to int type array');
  }

});

test('Test handles promise objects with identity', t => {
  const p = Promise.resolve(10);
  const q = Promise.resolve(10);

  t.truthy(isEqual(p, p), 'First promise identity matches second promise');
  t.falsy(isEqual(p, q), 'First promise does not match second promise identity');
});

test('Test compares map objects by value', t => {
  t.truthy(isEqual(new Map([]), new Map([])), 'Empty map equals empty map');
  t.falsy(isEqual(new Map([]), new Map([[1, 'a']])), 'Empty map does not equal item map');
  t.truthy(isEqual(new Map([[1, 'a']]), new Map([[1, 'a']])), 'Item map with same data equals other item map');
  t.truthy(isEqual(new Map([[1, 'a'], [2, 'b']]), new Map([[1, 'a'], [2, 'b']])), 'Multi position data still matches');
  t.truthy(isEqual(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), 'mapception');
});

