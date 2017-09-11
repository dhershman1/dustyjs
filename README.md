# Dusty.js

> On the dusty road of JavaScript, functional libraries will always be there for us

A lightweight simple library that takes **heavy** influence from Ramda

## How To

> Currently does not live on npm on its way

## Methods

## d__

Used as a placeholder value for argument lists

### Usage

```js
import {d__} from 'dustyjs';

const coolFunc = (a, b, c) => {
	return c;
}

coolFunc('Test', d__, 'Cool');
// Output: 'Cool'
```

## isArray(a)

Uses the built in is Array function if it is available, returns true if item is indeed an array

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import {isArray} from 'dustyjs';

isArray(['test']);
// Output: true
```

## isObject(a)

Checks if the object is indeed an object

### Arguments

- `a` - Accepts a single argument which is the value to check

### Usage

```js
import {isObject} from 'dustyjs';

isObject({test: 'yes'});
// Output: true
```

## isEqual(a, b)

Checks if the object is indeed an object

### Arguments

- `a` - value 1 to compare
- `b` - value 2 to compare

### Usage

```js
import {isEqual} from 'dustyjs';

isEqual({}, {});
// Output: true
isEqual({a: 1}, {a: 2});
// Output: false
isEqual(NaN, 'NaN');
//Output: false
```

## has(prop, obj)

Validates that the object contains the supplied property

### Arguments

- `prop` - the property to search for
- `obj` - the object to search

### Usage

```js
import {has} from 'dustyjs';

const test = {
	cool: 1
};

has('cool', test);
//Output: true
```

## deepClone(obj)

Deep clones a value to a brand new value 1 to 1 clone

### Arguments

- `obj` - The item to clone

### Usage

```js
import {deepClone} from 'dustyjs';

const test = {
	a: 1,
	b: 2
};

const newObj = deepClone(test);

newObj.a = 2;

console.log(test); // Output: {a: 1, b: 1}
console.log(newObj); // Output: {a: 1, b: 2}
```

## clone(obj)

Shallow Clone of an object passed in

### Arguments

- `obj` - The item to clone

### Usage

```js
import {clone} from 'dustyjs';

const test = {
	a: 1
};

clone(test);
// Output: {a: 1}

```
