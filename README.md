[![npm](https://img.shields.io/npm/v/dusty-fns.svg?style=for-the-badge)](https://www.npmjs.com/package/dusty-fns) [![David](https://img.shields.io/david/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs) [![David](https://img.shields.io/david/dev/dhershman1/dustyjs.svg?style=for-the-badge)](https://david-dm.org/dhershman1/dustyjs?type=dev) [![Travis](https://img.shields.io/travis/dhershman1/dustyjs.svg?style=for-the-badge)](https://travis-ci.org/dhershman1/dustyjs)

# Dusty.js (dusty-fns)

A lightweight simple library that takes **heavy** influence from [Ramda](http://ramdajs.com/)


## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Why

Dusty.js came about because I wanted to mess around with some functional helpers of my own that I use in my everyday or could use. It also lacks the vast number of different functional helper methods that libraries like Ramda, Lodash, or Underscore have. This isn't me creating a library I want to use to disuade you from using one of those others, those guys are awesome and a lot of the inspiration behind my own, this was mainly to have fun with a functional library that I will probably use in the future and wanted to share to get input, suggestions, etc. From the general public.


## Contribution

The wireframe for the `v1.0.0` release is laid out and waiting to be filled with suggestions, bug reports, and more feel free to post any issues you are facing or idea you may have to the github for [dusty.js](https://github.com/dhershman1/dustyjs/projects/1) All ideas are welcome so don't hesitate to post an issue about it there on the github.

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

http://www.dusty.codes/dusty-fns
