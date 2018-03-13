[![npm](https://img.shields.io/npm/v/dusty-fns.svg?style=for-the-badge)](https://www.npmjs.com/package/dusty-fns) [![David](https://img.shields.io/david/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs) [![David](https://img.shields.io/david/dev/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs?type=dev) [![Travis](https://img.shields.io/travis/dhershman1/dustyjs.svg?style=for-the-badge)](https://travis-ci.org/dhershman1/dustyjs)

# Dusty.js (dusty-fns)

A light weight pure functional library with single type utility functions

## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Why

The idea for dusty-fns is to not just be another library but to introduce a pure single task functional experience. This is to keep things light, and optimal in terms of size and performance. (Note that some of the functionality isn't there yet, but I didn't want to change things after 1.0.0 released that would require a major version bump)

This library isn't here to compete with libraries like [Ramdajs](http://ramdajs.com/), [lodash](https://lodash.com/), or [underscore](http://underscorejs.org/). It is simply here because I wanted something I could use in my projects I built myself. Then I decided that maybe I'd share those functions, this is how dusty-fns came about and I'd love it if you find ways of improvement within the code that you open an issue and point things out!

## How To

Standard module system

```js
import dusty from 'dusty-fns';
```

Common JS

```js
const dusty = require('dusty-fns');
```

Through the browser

```html
<script src="path/to/dusty-fns/dusty.min.js"></script>
```

## Documentation

You can find the documentation on each method here:

http://www.dusty.codes/dusty-fns

## Split Methods

Like [lodash](https://lodash.com/) each method is importable by itself or desturctured from the main object. The benefit to being split up and importable individually is this helps out with tree shaking and only using the functionality you need at that time. Keeping builds smaller.

Examples:

Standard module system

```js
import isEmpty from 'dusty-fns/isEmpty';

isEmpty({});
```

Common JS

```js
const isEmpty = require('dusty-fns/isEmpty');

isEmpty({});
```

Through your browser

```html
<script src="path/to/dusty-fns/isEmpty/index.js"></script>
<script>
  isEmpty({});
</script>
```
