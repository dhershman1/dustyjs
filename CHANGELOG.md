# Changelog

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