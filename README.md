[![npm](https://img.shields.io/npm/v/dusty-fns.svg?style=for-the-badge)](https://www.npmjs.com/package/dusty-fns) [![David](https://img.shields.io/david/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs) [![David](https://img.shields.io/david/dev/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs?type=dev) [![Travis](https://img.shields.io/travis/dhershman1/dustyjs.svg?style=for-the-badge)](https://travis-ci.org/dhershman1/dustyjs)

# Dusty.js (dusty-fns)

A lightweight simple library that takes **heavy** influence from [Ramda](http://ramdajs.com/)

Supports Modern browsers and IE 9+

## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Why

Dusty.js came about because I wanted to mess around with some functional helpers of my own that I use in my everyday or could use. It also lacks the vast number of different functional helper methods that libraries like Ramda, or Underscore have. This isn't me creating a library I want to use to disuade you from using one of those others, those guys are awesome and a lot of the inspiration behind my own.

You can pull specific functionality from the module to use where it's needed so you limit the amount of code you bring in from a library thanks to tree shaking, and code splitting the library down.

## Unit Tests

Each function has a set of `Basic Functionality` tests, these MUST be passing in order for the functionality to be determined working and before we add any more tests to work with additional functionality.

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
<script src="path/to/dusty-fns/dusty.min.js"></script>
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
<script src="path/to/dusty-fns/isObject/index.js"></script>
<script>
  isObject({});
</script>
```

## Documentation

You can find the documentation on each method here:

http://dusty-demos.herokuapp.com/dusty-fns
