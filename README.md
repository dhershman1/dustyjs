[![npm](https://img.shields.io/npm/v/dusty-fns.svg?style=for-the-badge)](https://www.npmjs.com/package/dusty-fns) [![David](https://img.shields.io/david/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs) [![David](https://img.shields.io/david/dev/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs?type=dev) [![Travis](https://img.shields.io/travis/dhershman1/dustyjs.svg?style=for-the-badge)](https://travis-ci.org/dhershman1/dustyjs)

# Dusty.js (dusty-fns)

A lightweight simple library that takes **heavy** influence from [Ramda](http://ramdajs.com/)

Supports Modern browsers and IE 9+

Check out the documentation here: [Docs](https://dusty-demos.herokuapp.com/dusty-fns)

## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Why

Dusty.js came about because I wanted to mess around with some functional helpers of my own that I use in my everyday or could use. This small library is about 5KB (4.31KB) in size, but it also lacks the vast number of different functional helper methods that libraries like Ramda, or Underscore have. This isn't me creating a library I want to use to disuade you from using one of those others, those guys are awesome and a lot of the inspiration behind my own.

You can pull specific functionality from the module to use where it's needed so you limit the amount of code you bring in from a library thanks to tree shaking, and code splitting the library down.

## How To

Standard module system

```js
import dusty from 'dusty-fns';

dusty.isObject({});
```

Common JS

```js
const dusty = require('dusty-fns');

dusty.isObject({});
```

Through the browser

```html
<script src="path/to/node_modules/dusty-fns/main/index.js"></script>
<script>
  dusty.isObject({});
</script>
```

## Split Methods

Each method is importable by itself or desturctured from the main object. The benefit to being split up and importable individually is this helps out with tree shaking and only using the functionality you need at that time.

Examples:

Standard module system

```js
import isObject from 'dusty-fns/isObject';

isObject({});
```

Common JS

```js
const isObject = require('dusty-fns/isObject');

isObject({});
```

Through your browser

```html
<script src="path/to/node_modules/dusty-fns/isObject/index.js"></script>
<script>
  isObject({});
</script>
```

## Methods

- [__](#__)
- [clone](#clone)
- [curry](#curry)
- [deepClone](#deepclone)
- [empty](#empty)
- [extend](#extend)
- [find](#find)
- [has](#has)
- [identical](#identical)
- [isArray](#isarray)
- [isEmpty](#isempty)
- [isEqual](#isequal)
- [isFunction](#isfunction)
- [isNull](#isnull)
- [isNumber](#isnumber)
- [isObject](#isobject)
- [isRegExp](#isregexp)
- [isString](#isstring)
- [last](#last)
- [mean](#mean)
- [not](#not)
- [nth](#nth)
- [omit](#omit)
- [range](#range)
- [removeAtIndex](#removeatindex)
- [replaceAtIndex](#replaceatindex)
- [type](#type)

## __

Used as a placeholder value for argument lists

### Usage

```js
import __ from 'dusty-fns/__';

const coolFunc = (a, b, c) => {
	return c;
}

coolFunc('Test', __, 'Cool'); // => 'Cool'
```

## clone

Shallow Clone of an object or array that is passed in

### Arguments

- `x` - The item to clone

### Usage

```js
import clone from 'dusty-fns/clone';

clone({ a: 1 }); // => { a: 1 }
clone([1, 2, 3]); // => [1, 2, 3]
```

## curry

Creates curried functions

### Arguments

- `f` - The running function
- `args` - extra arguments to apply if needed

### Usage

```js
import curry from 'dusty-fns/curry';

const add = curry((a, b, c) => a + b + c);
const results = add(2)(4)(10); // => 16
```

## deepClone

Deep clones a value to a brand new value 1 to 1 clone

### Arguments

- `obj` - The item to clone

### Usage

```js
import deepClone from 'dusty-fns/deepClone';

const test = {
	a: 1,
	b: 2
};

const newObj = deepClone(test);

newObj.b = 2;

console.log(test); // => {a: 1, b: 1}
console.log(newObj); // => {a: 1, b: 2}
```

## empty

Empties out the given item and returns a brand new of the same type

### Arguments

- `x` - The item that should be emptied

### Usage

```js
import empty from 'dusty-fns/empty';

empty({test: 1}); // => {}
empty([1]); // => []
empty('Hello'); // => ''
empty(1); // => 0
```

## extend

Combines the given objects into a single object by extending them

### Arguments

- `args` - The obejcts we want to combine

### Usage

```js
import extend from 'dusty-fns/extend';

extend({ test: 1 }, { again: 2 }); // => { test: 1, again: 2 }
```

## find

Find an item using the function passed in and it's list

### Arguments

- `f` - The `function` used/called during the find
- `x` - The list we want to search through

### Usage

```js
import find from 'dusty-fns/find';

find(val => val === 1, [2, 32, 1]); // => 1

find(({val}) => val === 1, [{val: 2}, {val: 32}, {val: 1}]); // => {val: 1}

find(val => val === 1, {
    testing: 2,
    thing: 3,
    other: 1
  }); // => 1

find(({inner}) => inner === 1, {
    testing: {
      inner: 2
    },
    thing: {
      inner: 3
    },
    other: {
      inner: 1
    }
  }); // => { inner: 1 }
```

## has

Validates that the object contains the supplied property

### Arguments

- `prop` - the property to search for
- `obj` - the object to search

### Usage

```js
import has from 'dusty-fns/has';

const test = {
	cool: 1
};

has('cool', test); // => true
```

## identical

Checks to see if the items provided are identical (That they refrence the same memory)

### Arguments

- `a` - The first value to compare
- `b` - The second value to compare

### Usage

```js
import identical from 'dusty-fns/identical';

const o = {};

identical(o, o); // => true
identical(0, 0); // => true
identical('t', 't'); // => true
identical({}, {}); // => false
identical([], []); // => false
identical(0, -0); // => false
identical(NaN, NaN) // => true
```

## isArray

Uses the built in is Array function if it is available, returns true if item is indeed an array

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import isArray from 'dusty-fns/isArray';

isArray(['test']); // => true
```

## isEmpty

Checks to see if the provided value is empty or not

### Arguments

- `a` - The value to check

### Usage

```js
import isEmpty from 'dusty-fns/isEmpty';

isEmpty({}) // => true
isEmpty([]) // => true
isEmpty('') // => true
```

## isEqual

Checks if the object is indeed an object

### Arguments

- `a` - value 1 to compare
- `b` - value 2 to compare

### Usage

```js
import isEqual from 'dusty-fns/isEqual';

isEqual({}, {}); // => true
isEqual([1], [1]); // => true
isEqual({ a: 1 }, { a: 2 }); // => false
isEqual(NaN, 'NaN'); // => false
```

## isFunction

Checks if the provided item is a function or not

### Arguments

- `a` - The value to check against

### Usage

```js
import isFunction from 'dusty-fns/isFunction';

isFunction(function() { return true; }); // => true
isFunction(() => {}); // => true
```

## isNull

Checks if the provided item is null or not

### Arguments

- `a` - The value to check against

### Usage

```js
import isNull from 'dusty-fns/isNull';

isNull(null); // => true
isNull(1) // => false
```

## isNumber

Checks if the provided item is a number or not

### Arguments

- `a` - The value to check against

### Usage

```js
import isNumber from 'dusty-fns/isNumber';

isNumber('1'); // => false
isNumber(1) // => true
```

## isObject

Checks if the object is indeed an object

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import isObject from 'dusty-fns/isObject';

isObject({test: 'yes'}); // => true
```

## isRegExp

Checks if the provided item is a regex type or not

### Arguments

- `a` - The value to check against

### Usage

```js
import isRegExp from 'dusty-fns/isRegExp';

isRegExp('1'); // => false
isRegExp(/1/g) // => true
isRegExp(new RegExp(/1/, 'g')) // => true
```

## isString

Checks if the provided item is a String type or not

### Arguments

- `a` - The value to check against

### Usage

```js
import isString from 'dusty-fns/isString';

isString('1'); // => true
isString(1); // => false
```

## last

Grabs the last index of an item

### Arguments

- `x` - The item we want to grab from

### Usage

```js
import last from 'dusty-fns/last';

last([0, 1, 2]); // => 2
last('abc'); // => c
last([]) // => undefined
```

## mean

Get the mean of a set of numbers

### Arguments

- `x` - Set of numbers or an array of numbers

### Usage

```js
import mean from 'dusty-fns/mean';

mean(1, 2, 3, 2); // => 2
mean([1, 2, 3, 2]); // => 2
```

## not

Returns the `!` of the argument passed in

### Arguments

- `x` - The value to run on

### Usage

```js
import not from 'dusty-fns/not';

not(true); // => false
not(false); // => true
not(1); // => false
not(0); // => true
```

## nth

Returns the nth element of the given list or string

### Arguments

- `o` - The offset value we want to use
- `x` - The list/string to use

### Usage

```js
import nth from 'dusty-fns/nth';

const list = [1, 2, 3, 4];

nth(1, list); // => 2
nth(-1, list); // => 4
nth(-99, list); // => undefined
```

## omit

Create a new Array/Object by omitting the requested values

### Arguments

- `key` - The key(s) in which to omit from the provided list
- `x` - The array or object to search through

### Usage

```js
import omit from 'dusty-fns/omit';

const list = {
    test: 1,
    cool: 2,
    cat: 'Mew!'
  };
const list2 = ['cool', 'cat', 'cool', 'test', 'bobby'];

omit('test', list); // => { cool: 2, cat: 'Mew!' }
omit(['test', 'cat'], list); // => { cool: 2 }
omit('cool', list2); // => ['cat', 'test', 'bobby']
omit(['cool', 'cat'], list2); // => ['test', 'bobby']
```

## range

Create an array range from start to finish

### Arguments

- `from` - Where to start our range (optional)
- `to` - Where to end our range

### Usage

```js
import range from 'dusty-fns/range';

range(1, 5); // => [1, 2, 3, 4]
range(5); // => [0, 1, 2, 3, 4]
```

## removeAtIndex

Remove an item from an array at a certain index

### Arguments

- `i` - The index number to remove from
- `x` - The array to go through

### Usage

```js
import removeAtIndex from 'dusty-fns/removeAtIndex';

const list = [1, 2, 3, 4, 5];

removeAtIndex(1, list); // => [1, 3, 4, 5]
removeAtIndex(-1, list); // => [1, 2, 3, 4]
```

## replaceAtIndex

Add an item to an array at a certain index point of that array

### Arguments

- `i` - The index Number to use
- `t` - The value we want to add to our array
- `x` - The Array itself

### Usage

```js
import replaceAtIndex from 'dusty-fns/replaceAtIndex';

const list = [1, 2, 3, 4];

replaceAtIndex(0, 'brown', list); // => ['brown', 2, 3, 4]
```

## type

Finds the type of the argument passed in

### Arguments

- `a` - The value to check the type of

### Usage

```js
import type from 'dusty-fns/type';

type({}); // => 'Object'
type([]); // => 'Array'
type(null); // => 'Null'
type(undefined); // => 'Undefined'
type('hi'); // => 'String'
type(1); // => 'Number'
type(/1/g); // => 'RegExp'
type(new Date()); // => 'Date'
type(true); // => 'Boolean'
```
