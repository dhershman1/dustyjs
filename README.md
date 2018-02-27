[![npm](https://img.shields.io/npm/v/dusty-fns.svg?style=for-the-badge)](https://www.npmjs.com/package/dusty-fns) [![David](https://img.shields.io/david/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs) [![David](https://img.shields.io/david/dev/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs?type=dev) [![Travis](https://img.shields.io/travis/dhershman1/dustyjs.svg?style=for-the-badge)](https://travis-ci.org/dhershman1/dustyjs)

# Dusty.js (dusty-fns)

A light weight pure functional library with single type helper functions

**This is v2.0.0 README for continued progress towards completeing the 2.0.0 project (already I know). Checkout the [project page](https://github.com/dhershman1/dustyjs/projects/2) to see what's going on.**

## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Why

The idea for dusty-fns is to not just be another library but to introduce a pure single task functional experience. This is to keep things light, and optimal in terms of size and performance. (Note that some of the functionality isn't there yet, but I didn't want to change things after 1.0.0 released that would require a major version bump)

This library isn't here to compete with libraries like [Ramdajs](http://ramdajs.com/), [lodash](https://lodash.com/), or [underscore](http://underscorejs.org/). It is simply here because I wanted something I could use in my projects I built myself. Then I decided that maybe I'd share those functions, this is how dusty-fns came about and I'd love it if you find ways of improvement within the code that you open an issue and point things out!

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

## Documentation

You can find the documentation on each method here:

http://www.dusty.codes/dusty-fns

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
