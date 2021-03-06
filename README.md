
**DO NOTE: The library was re branded to kyanite, you can find it here: https://github.com/dhershman1/kyanite this repo is archived and technically the dusty-fns package was marked as deprecated, thanks!**

# Dusty.js (dusty-fns)

A light weight pure functional library with single type utility functions and it only depends on itself.

## Contents

- [Changelog](#changelog)
- [Credit](#credit)
- [Philosophy](#philosophy)
- [Key Features](#key-features)
- [How To](#how-to)
- [Documentation](#documentation)
- [Modular](#modular)

## Changelog

You can view the changelog here: https://github.com/dhershman1/dustyjs/blob/master/CHANGELOG.md

## Credit

A lot of the if not most of the inpiration for this library came from 2 libraries I follow closely, Primarily most of it stems from:

- [foreword](https://github.com/abstract-tools/foreword) by [Abstract Tools](https://github.com/abstract-tools) which is a very nice and easy to use library developed by a close friend. This is where a lot of functionality, AND the idea of a pure single data type system came from I can't recommend it enough.
- [Ramdajs](http://ramdajs.com/) by [Ramda](https://github.com/ramda) a large and fairly handy library where the original idea sparked

## Philosophy

The idea for Dusty.js(dusty-fns) is to not just be another library but to introduce a pure single task functional experience. This is to keep things light, and optimal in terms of size and performance.

Working with the functional experience is working with immutable data, with this library I wanted to keep that as true as I could with using pure functions, but also in using single type data structures through out the library.

The goal for the library was to be stripped down, light weight and easy to understand intuitively. As well as being performant and optimized in the best ways possible, and I am happy with that current outcome.

## Key Features
Some of the primary features for Dusty.js (dusty-fns) are:

- Purely Functional, this was a big thing for me I wanted it to be easy to use functional system but also I wanted everything to be completely pure. I am happy with the results.
- Emphasis on single type utility functions, all of the functionality is (Theroetically) based around accepting a single data type (String, Array, Object, Number) doing what it does, and giving you back a result. Making it reliable and stable while also staying lightweight
- Everything is curried! Setup static in one spot and then pass the rest of the dynamic data in later.
- Modular! Despite the main minified file being `9.23kb` (`3.12kb` gzipped) ontop of that the library is completely modular, allowing you to bring in single functions for use! Most functions (aside from say something like `isEqual`) are below `1kb` (even smaller if you gzip) most of these are even below `500 Bytes`! Making it easy and even lighter on your large scale applications!

## How To

Standard module system

```js
import dusty from 'dusty-fns'
```

Common JS

```js
const dusty = require('dusty-fns')
```

Through the browser

```html
<script src="path/to/dusty-fns/dusty.min.js"></script>
```

## Documentation

You can find the documentation on each method here:

https://www.dusty.codes/dusty-fns

## Modular

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
<script src="path/to/dusty-fns/isEmpty.js"></script>
<script>
  isEmpty({});
</script>
```
