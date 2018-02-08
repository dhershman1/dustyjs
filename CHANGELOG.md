# Changelog

## v0.5.0

**Please Note: The next `0.x.x` versions are contributing to the full `v1.0.0` release of dusty-fns please report any issues ASAP! Thanks!**

- Added: `is` function which is curried
  - **NOTE** This is meant to replace the `isX` simple functions see issue [#9](https://github.com/dhershman1/dustyjs/issues/9) for more info
  - However these functions have not been removed yet, but will in the full `v1.0.0` release
- Added: `prepend` function which is curried
- Added: `defaults` function which is curried
- Added: `juxt` function which is technically curried (Required curry)
- Added: `since` to jsdoc blocks
- Added `sig` to jsdoc blocks
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