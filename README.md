# Dusty.js

> On the dusty road of JavaScript, functional libraries will always be there for us

A lightweight simple library that takes **heavy** influence from Ramda

Supports Modern browsers and IE 9+

## How To

> Currently does not live on npm on its way

## Methods

## __

Used as a placeholder value for argument lists

### Usage

```js
import { __ } from 'dusty-fns';

const coolFunc = (a, b, c) => {
	return c;
}

coolFunc('Test', __, 'Cool');
// Output: 'Cool'
```

## clone(obj)

Shallow Clone of an object passed in

### Arguments

- `obj` - The item to clone

### Usage

```js
import { clone } from 'dusty-fns';

const test = {
	a: 1
};

clone(test);
// Output: {a: 1}
```

## curry(f, ...args)

Creates curried functions

### Arguments

- `f` - The running function
- `...args` - extra arguments to apply if needed

### Usage

```js
import { curry } from 'dusty-fns';

const add = curry((a, b, c) => a + b + c);
const results = add(2)(4)(10); // => 16
```

## deepClone(obj)

Deep clones a value to a brand new value 1 to 1 clone

### Arguments

- `obj` - The item to clone

### Usage

```js
import { deepClone } from 'dusty-fns';

const test = {
	a: 1,
	b: 2
};

const newObj = deepClone(test);

newObj.b = 2;

console.log(test); // Output: {a: 1, b: 1}
console.log(newObj); // Output: {a: 1, b: 2}
```

## extend(...args)

Combines the given objects into a single object by extending them

### Arguments

- `...args` - The obejcts we want to combine

### Usage

```js
import { extend } from 'dusty-fns';

extend({ test: 1 }, { again: 2 }); // => { test: 1, again: 2 }
```

## empty(x)

Empties out the given item and returns a brand new of the same type

### Arguments

- `x` - The item that should be emptied

### Usage

```js
import { empty } from 'dusty-fns';

empty({test: 1}); // => {}
empty([1]); // => []
empty('Hello'); // => ''
empty(1); // => 0
```

## find(f, x)

Find an item using the function passed in and it's list

### Arguments

- `f` - The `function` used/called during the find
- `x` - The list we want to search through

### Usage

```js
import { find } from 'dusty-fns';

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

## has(prop, obj)

Validates that the object contains the supplied property

### Arguments

- `prop` - the property to search for
- `obj` - the object to search

### Usage

```js
import { has } from 'dusty-fns';

const test = {
	cool: 1
};

has('cool', test);
//Output: true
```

## identical(a, b)

Checks to see if the items provided are identical (That they refrence the same memory)

### Arguments

- `a` - The first value to compare
- `b` - The second value to compare

### Usage

```js
import { identical } from 'dusty-fns';

const o = {};

identical(o, o); // => true
identical(0, 0); // => true
identical('t', 't'); // => true
identical({}, {}); // => false
identical([], []); // => false
identical(0, -0); // => false
identical(NaN, NaN) // => true
```

## isArray(a)

Uses the built in is Array function if it is available, returns true if item is indeed an array

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import { isArray } from 'dusty-fns';

isArray(['test']);
// Output: true
```

## isEmpty(a)

Checks to see if the provided value is empty or not

### Arguments

- `a` - The value to check

### Usage

```js
import { isEmpty } from 'dusty-fns';

isEmpty({}) // => true
isEmpty([]) // => true
isEmpty('') // => true
```

## isEqual(a, b)

Checks if the object is indeed an object

### Arguments

- `a` - value 1 to compare
- `b` - value 2 to compare

### Usage

```js
import { isEqual } from 'dusty-fns';

isEqual({}, {});
// Output: true
isEqual({a: 1}, {a: 2});
// Output: false
isEqual(NaN, 'NaN');
//Output: false
```

## isFunction(a)

Checks if the provided item is a function or not

### Arguments

- `a` - The value to check against

### Usage

```js
import { isFunction } from 'dusty-fns';

isFunction(function() { return true; }); // => true
isFunction(() => {}); // => true
```

## isNull(a)

Checks if the provided item is null or not

### Arguments

- `a` - The value to check against

### Usage

```js
import { isNull } from 'dusty-fns';

isNull(null); // => true
isNull(1) // => false
```

## isNumber(a)

Checks if the provided item is a number or not

### Arguments

- `a` - The value to check against

### Usage

```js
import { isNumber } from 'dusty-fns';

isNumber('1'); // => false
isNumber(1) // => true
```

## isObject(a)

Checks if the object is indeed an object

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import { isObject } from 'dusty-fns';

isObject({test: 'yes'});
// Output: true
```

## isRegExp(a)

Checks if the provided item is a regex type or not

### Arguments

- `a` - The value to check against

### Usage

```js
import { isRegExp } from 'dusty-fns';

isRegExp('1'); // => false
isRegExp(/1/g) // => true
isRegExp(new RegExp(/1/, 'g')) // => true
```

## isString(a)

Checks if the provided item is a String type or not

### Arguments

- `a` - The value to check against

### Usage

```js
import { isString } from 'dusty-fns';

isString('1'); // => true
isString(1); // => false
```

## last(x)

Grabs the last index of an item

### Arguments

- `x` - The item we want to grab from

### Usage

```js
import { last } from 'dusty-fns';

last([0, 1, 2]); // => 2
last('abc'); // => c
last([]) // => undefined
```

## mean(...x)

Get the mean of a set of numbers

### Arguments

- `...x` - Set of numbers or an array of numbers

### Usage

```js
import { mean } from 'dusty-fns';

mean(1, 2, 3, 2); // => 2
mean([1, 2, 3, 2]); // => 2
```

## not(x)

Returns the `!` of the argument passed in

### Arguments

- `x` - The value to run on

### Usage

```js
import { not } from 'dusty-fns';

not(true); // => false
not(false); // => true
not(1); // => false
not(0); // => true
```

## nth(o, x)

Returns the nth element of the given list or string

### Arguments

- `o` - The offset value we want to use
- `x` - The list/string to use

### Usage

```js
import { nth } from 'dusty-fns';

const list = [1, 2, 3, 4];

nth(1, list); // => 2
nth(-1, list); // => 4
nth(-99, list); // => undefined
```

## omit(key, x)

Create a new Array/Object by omitting the requested values

### Arguments

- `key` - The key(s) in which to omit from the provided list
- `x` - The array or object to search through

### Usage

```js
import { omit } from 'dusty-fns';

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

## range(from, to)

Create an array range from start to finish

### Arguments

- `from` - Where to start our range (optional)
- `to` - Where to end our range

### Usage

```js
import { range } from 'dusty-fns';

range(1, 5); // => [1, 2, 3, 4]
range(5); // => [0, 1, 2, 3, 4]
```

## removeAtIndex(i, x)

Remove an item from an array at a certain index

### Arguments

- `i` - The index number to remove from
- `x` - The array to go through

### Usage

```js
import { removeAtIndex } from 'dusty-fns';

const list = [1, 2, 3, 4, 5];

removeAtIndex(1, list); // => [1, 3, 4, 5]
removeAtIndex(-1, list); // => [1, 2, 3, 4]
```

## replaceAtIndex(i, t, x)

Add an item to an array at a certain index point of that array

### Arguments

- `i` - The index Number to use
- `t` - The value we want to add to our array
- `x` - The Array itself

### Usage

```js
import { replaceAtIndex } from 'dusty-fns';

const list = [1, 2, 3, 4];

replaceAtIndex(0, 'brown', list); // => ['brown', 2, 3, 4]
```

## type(a)

Finds the type of the argument passed in

### Arguments

- `a` - The value to check the type of

### Usage

```js
import { type } from 'dusty-fns';

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
