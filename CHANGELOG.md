# Changelog

## v2.2.0 (Unreleased)

### New

- Added `curryN` function which works a lot like `curry` but requires you tell it how many arguments to expect. Which helps it work with default and rest params
- Added `round` function which uses exponents to accuratly round numbers based on a provided precision
- Replaced `eslint` with `standardjs` linting

## Improved

- Moved all functionality to a flat level (they no longer live inside their own folders)
  - This changes how CDNs work slightly but only by deleting the index.js so `path/to/dusty-fns/name/index.js` would become `path/to/dusty-fns/name.js`
  - This change will NOT affect anything about how the module is used, this will only apply to those using CDN or pathing to the module
- Drastically improved internal docs generation script speed
- Slight Tweaks to other internal scripts
- Improved the flow and readability of `fuzzySearch`
- Slight tweak to slightly lower `isEqual` file size

## Updated

- All Dev Dependencies have been brought up to date
- Much needed README update

## v2.1.0

### New

- Added `values` function which acts like `Object.values` but with IE9+ support
- Added `entries` function which acts like `Object.entries` but with IE9+ support

## v2.0.2

- I accidentally appeared to have put babel core as a dependency, this is fixed now

## v2.0.1

### New

- Added a `intersection` function which goes through 2 arrays to create a new one of common values
- Dropped webpack build system in favor of rollup, this has provided extremely improved builds with much smaller files and faster builds
    - This won't have any effect on how the library is used, only on size and performance
    - The main file size is now only 8kb! Compared to the 22.5kb from before

### Improved

- Tweaked `assign` function to be a little bit smaller
- Verbage changes to some functions params or variables
- Tweaked `compress` function to be a little bit smaller and easier to follow
- Tweaked `find` function to use a while loop and small verbage changes

## v2.0.0

### BREAKING CHANGES

- `contains` now only runs on Arrays
- `partition` now only runs on Arrays
- `reject` now only runs on Arrays
- `pluck` now only runs on Objects
- `find` now only accepts array types
- `nth` technically can work with strings, but is only array focused now returns `undefined` if used on a string that doesn't have a character at the desired index
- `omit` now only runs on Objects
- `prop` now only accepts a string (as documentation mentioned) as it's first param
- `empty` throws a type error when given an invalid type if not given a String, Array, or Object
- Renamed `extend` to `assign` (to go hand in hand with `Object.assign` so to speak)
- Renamed `removeAtIndex` to `removeAt` to make it a little shorter to use
- Renamed `replaceAtIndex` to `replaceAt` to make it a little shorter to use
- `compress` now only removes undefined and null values and skips over falsey ones
- Renamed `any` to `some`

### New

- Added `words` function which breaks down a string based on whitespace
- Added `includes` function which looks through string to find the requested value
- Added `reduce` function which reduces an array down (is Curried)
- Added `trim` function which removes the whitespace on either side of a string
- Added `add` function to generate a sum of two numbers
- Added `sub` function to generate a difference of two numbers
- Added `mul` function to generate a product of two numbers
- Added `div` function to generate a quotient of two numbers
- Added `length` function which returns the length of a passed array
- Added `reverse` function which creates a new array based on the one pased in and reverses it
- Added `and` function which checks if two Booleans passed in are true
- Added `or` function which checks if at least one of two Booleans passed in are true
- Added `slice` function which returns a subset of an array based on the provided indexes
- Added `identity` function which just returns itself
- Added `pipe` function which applies a sequence of transformations over a value
- Added `sort` function which sorts a supplied array with the supplied comparison function
- Added `gcd` function which gets the greatest common denominator of two numbers passed in
- Added `lcm` function which gets the least common multiple of two numbers passed in
- Added `capitalize` function which capitalizes the first letter of the string passed in
- Added `difference` function which compares two arrays to create a new array of different values
- Added `uniq` function which takes a function and builds an array of unique values with it
- Added `union` function which combines a series of passed in arrays

### Improved

- The `curry` function is a little more optimized for space saving
- Updated all dev dependencies for better testing and builds
- Improved `defaults` function for size and hopefully performance
- Tiny (like super tiny) code adjustments for more optimal sizes (super small size benefits)
- Made `every` use the method instead of reinventing the wheel
- Made `some` (any) use the method instead of reinventing the wheel
- Overall code improvements taking more advantage of newer js rules that we can transpile with babel
- Thanks to babel we can take advantage of new functionality IF it is there, otherwise we use our own

## v1.0.2

### Improved

- Made `compress` a little more verbose in its source (Since it's uglified and minified anyway)

### Fixed

- `compress` so it removes null or undefined values as well as empty ones like it should (in v2.0.0 removal of empty values will be optional)
- Documentation for the `prop` function (examples were incorrect)

## v1.0.1

### New

- Added @category section to each of the functions for documentation purposes

### Improved

- Improved size of `reject` function to be smaller
- Improved size of `pluck` function to be smaller
- Improved size of `find` function to be smaller and simpler
- Improved `partition` to take advantage of es6 and make it smaller

### Fixed

- `max` & `min` sorting to do actual sorting

## v1.0.0

### BREAKING CHANGES

- Changed: `prop` function to accept arrays instead of strings
- Changed: `mean` function to accept an array of numbers instead of list of parameters
- Changed: `complement` function to be more lightweight, it can handle single param functions
- Replaced: `isNull` with `isNil` so it does a light check for null or undefined values
- Removed: `isNumber` function to be replaced with `is`
- Removed: `isString` function to be replaced with `is`
- Removed: `isFunction` function to be replaced with `is`
- Removed: `isRegExp` function to be replaced with `is`
- Removed: `isArray` function to be replaced with `is`
- Removed: `isObject` function to be replaced with `is`
- Removed: `__` placeholder because I don't feel like it really is needed

### New

- Added: `max` function
- Added: `min` function
- Added: `ensureArray` function - just ensures that a value passed in will always be an array
- Added: A description onto the `defaults` function

### Changed

- Improved: `omit` function so it functions better by itself and is smaller by itself
- Improved: `prop` function to easily rely on it's own functionality instead of a path system
- Improved: Overall testing level
- Removed: `empty` internal and just had the empty function do its leg work

### Fixed

- Fixed: Some typos in function descriptions

## v0.6.0

- Added: `map` function which is curried
- Added: `pluck` function which is curried
- Added: `prop` function which is curried
- Added: `every` function which is curried
- Added: `any` function which is curried
- Added: `complement` function which is curried
- Fixed: `filter` functionality to make more sense and not use a makeshift (bad) reduce
- Fixed: removed `Object.entries` from `filter` didn't realize babel wasn't able to transpile it like I hoped

## v0.5.0

**The next few 0.x.x versions are going to be the roadmap beta builds into v1.0.0 please report any and all issues asap.**

- Added: `is` function which is curried
  - **NOTE** This is meant to replace the `isX` simple functions see issue [#9](https://github.com/dhershman1/dustyjs/issues/9) for more info
  - However these functions have not been removed yet, but will in the full `v1.0.0` release
- Added: `prepend` function which is curried
- Added: `defaults` function which is curried
- Added: `juxt` function which is technically curried (Required curry)
- Added: `partition` function which is curried
- Added: `reject` function which is curried
- Added: `contains` function which is curried
- Added: `filter` function which is curried
- Added: `since` to jsdoc blocks
- Added: `sig` to jsdoc blocks
- Changed: `fuzzySearch` is now curried
- Changed: `find` is now curried
- Changed: `has` is now curried
- Changed: `identical` is now curried
- Changed: `nth` is now curried
- Changed: `omit` is now curried
- Changed: `removeAtIndex` is now curried
- Changed: `replaceAtIndex` is now curried
- Fixed: Browser grabbing the entire library is now possible
- Fixed: Build process & automation scripts which is now shrinking the distro file considerbly

## v0.4.1

- Fix: Documentation generation
- Improved: `flatten` function for a cleaner design

## v0.4.0

- Added: `flatten` function which can flatten an array of arrays to a single array
- Added: `first` function which pulls the first value from an array or string
- Improved: `omit` function to stop breaking linter rules
- Changed: Some test organization

## v0.3.2

- Fix build so that the files are present (Not sure what happened)

## v0.3.1

- Fixed: Docs setup for personal documentation automation

## v0.3.0

- Added: `fuzzySearch` method
- Added: `compress` method
- Updated Readme to point to the documentation site
- Some tweaks to the documentations

## v0.2.3

- Actual Fix for Webpack bug.
- Made the auto generation script cleaner

## v0.2.2

- Fix for webpack issues when bringing in entire library object

## v0.2.1

- Fix Build so it doesn't include the `_internals` functionality
- Add the main `src` folder to the the npm ignore since it isn't needed in prod
- Stopped using two different transpilers since we use `babel` with `ava` use it with `webpack` to

## v0.2.0

- Switch over to a webpack build
- You can now access each method individually if desired using `dusty-fns/methodName`
  - Example: `import isEmpty from 'dusty-fns/isEmpty';`
- Added Unit tests for `last` & `not` functions
- Cleaned up Dev Dependency list
- Fixed an alphabetize error in the readme

## v0.1.4

- Made the `README` a bit more consistant
- Improved the `clone` functionality to better handle types (can handle more than just `objects` now)
- Officially giving up on why `travis-ci` has false positive failures

## v0.1.3

- Final attempt to fix false flag on failing builds

## v0.1.2

- Attempt #2 to try and figure out why `travis-ci` keeps failing

## v0.1.1

- Tweaks to try and remedy failing `travis-ci` builds when they are not actually failing

## v0.1.0

- Initial Beta Release