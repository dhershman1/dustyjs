export default [{"title":"clone","syntax":"clone(x)","usage":{"commonjs":{"title":"CommonJs","code":"const clone = require('dusty-fns/clone');"},"standard":{"title":"Standard","code":"import clone from 'dusty-fns/clone';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/clone/index.js\"></script>"}},"desc":"Shallow clone an object or array","examples":["const obj = clone({things: 1}); // => { things: 1 }\rconst arr = clone([1, 2, 3]); // => [1, 2, 3]"],"params":[{"type":{"names":["Object"]},"description":"The object that should be cloned","name":"x"}],"returns":[{"type":{"names":["Object"]},"description":"Returns the shallow clone of the object"}]},{"title":"compress","syntax":"compress(x)","usage":{"commonjs":{"title":"CommonJs","code":"const compress = require('dusty-fns/compress');"},"standard":{"title":"Standard","code":"import compress from 'dusty-fns/compress';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/compress/index.js\"></script>"}},"desc":"Takes an object and compresses it down removing falsy and empty values","examples":["const obj = compress({ thing: '', test: 1 }); // => { test: 1 }"],"params":[{"type":{"names":["Object"]},"description":"The Object to compress","name":"x"}],"returns":[{"type":{"names":["Object"]},"description":"Returns a new object without the unwanted values"}]},{"title":"curry","syntax":"curry(f, args)","usage":{"commonjs":{"title":"CommonJs","code":"const curry = require('dusty-fns/curry');"},"standard":{"title":"Standard","code":"import curry from 'dusty-fns/curry';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/curry/index.js\"></script>"}},"desc":"Create a curried function","examples":["const add = curry((a, b) => a + b);\radd(1)(2); // => 3\radd(1, 2); // => 3"],"params":[{"type":{"names":["function"]},"description":"The function we will be running","name":"f"},{"type":{"names":["Any"]},"description":"extra args to apply if needed","name":"args"}],"returns":[{"type":{"names":["Any"]},"description":"Returns based on the function sent in"}]},{"title":"deepClone","syntax":"deepClone(x)","usage":{"commonjs":{"title":"CommonJs","code":"const deepClone = require('dusty-fns/deepClone');"},"standard":{"title":"Standard","code":"import deepClone from 'dusty-fns/deepClone';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/deepClone/index.js\"></script>"}},"desc":"Clones the object sent in (Hard Clone)","examples":["const cloned = deepClone({ test: 1 }) // => { test: 1 }"],"params":[{"type":{"names":["Object"]},"description":"The object we want to get cloned","name":"x"}],"returns":[{"type":{"names":["Object"]},"description":"Returns the cloned object back"}]},{"title":"empty","syntax":"empty(x)","usage":{"commonjs":{"title":"CommonJs","code":"const empty = require('dusty-fns/empty');"},"standard":{"title":"Standard","code":"import empty from 'dusty-fns/empty';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/empty/index.js\"></script>"}},"desc":"Empties out the items of the sent value","examples":["const obj = empty({ test: 1 }); // => {}\rconst arr = empty([1, 2, 3]); // => []\rconst str = empty('test'); // => ''"],"params":[{"type":{"names":["*"]},"description":"The item to empty","name":"x"}],"returns":[{"type":{"names":["*"]},"description":"Returns the empty item"}]},{"title":"extend","syntax":"extend(args)","usage":{"commonjs":{"title":"CommonJs","code":"const extend = require('dusty-fns/extend');"},"standard":{"title":"Standard","code":"import extend from 'dusty-fns/extend';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/extend/index.js\"></script>"}},"desc":"Combines objects into a single object","examples":["const obj = extend({ test: 1 }, { thing: 2 }); // => { test: 1, thing: 2 }"],"params":[{"type":{"names":["Object"]},"description":"The object we want to combine","name":"args"}],"returns":[{"type":{"names":["Object"]},"description":"Returns the combined object"}]},{"title":"find","syntax":"find(f, x)","usage":{"commonjs":{"title":"CommonJs","code":"const find = require('dusty-fns/find');"},"standard":{"title":"Standard","code":"import find from 'dusty-fns/find';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/find/index.js\"></script>"}},"desc":"Find an item based on the function sent in and its list","examples":["const obj = find(v => v.val === 'test', {val: 'test'}); // => 'test'\rconst arr = find(v => v.val === 'test', [{val: 'test'}, {val: 'none'}]); // => { val: 'test' }"],"params":[{"type":{"names":["function"]},"description":"The function used/called during the find","name":"f"},{"type":{"names":["Object"]},"description":"The list we want to search through","name":"x"}],"returns":[{"type":{"names":["Any"]},"description":"Returns either the found item, or false if nothing is found"}]},{"title":"fuzzySearch","syntax":"fuzzySearch(h, n)","usage":{"commonjs":{"title":"CommonJs","code":"const fuzzySearch = require('dusty-fns/fuzzySearch');"},"standard":{"title":"Standard","code":"import fuzzySearch from 'dusty-fns/fuzzySearch';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/fuzzySearch/index.js\"></script>"}},"desc":"Fuzzy search setup to look find things fast and effective","examples":["const results = fuzzySearch('test', 'te'); // => true\nconst results = fuzzySearch('testing', 'dog'); // => false"],"params":[{"type":{"names":["String"]},"description":"The value to search for","name":"h"},{"type":{"names":["String"]},"description":"The Item to search","name":"n"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns a boolean determined by if the value is found or not by the search"}]},{"title":"has","syntax":"has(prop, obj)","usage":{"commonjs":{"title":"CommonJs","code":"const has = require('dusty-fns/has');"},"standard":{"title":"Standard","code":"import has from 'dusty-fns/has';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/has/index.js\"></script>"}},"desc":"Determines if the object has a property","examples":["const obj = has('thing', { test: 1, thing: 2 }); // => true"],"params":[{"type":{"names":["String"]},"description":"The prop to look for","name":"prop"},{"type":{"names":["Object"]},"description":"The Object we are searching","name":"obj"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns based on if the prop is found or not"}]},{"title":"identical","syntax":"identical(a, b)","usage":{"commonjs":{"title":"CommonJs","code":"const identical = require('dusty-fns/identical');"},"standard":{"title":"Standard","code":"import identical from 'dusty-fns/identical';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/identical/index.js\"></script>"}},"desc":"Performs a check to see if the items are identical in the sense that they reference the same memory","examples":["const obj = identical(NaN, NaN); // => true"],"params":[{"type":{"names":["Any"]},"description":"The first value to compare","name":"a"},{"type":{"names":["Any"]},"description":"The second value to compare","name":"b"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns a boolean based on the check"}]},{"title":"isArray","syntax":"isArray(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isArray = require('dusty-fns/isArray');"},"standard":{"title":"Standard","code":"import isArray from 'dusty-fns/isArray';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isArray/index.js\"></script>"}},"desc":"Verifies if the value is of type array","examples":["const arr = isArray([]); // => true"],"params":[{"type":{"names":["Array"]},"description":"The value to check","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean depending on the result"}]},{"title":"isEmpty","syntax":"isEmpty(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isEmpty = require('dusty-fns/isEmpty');"},"standard":{"title":"Standard","code":"import isEmpty from 'dusty-fns/isEmpty';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isEmpty/index.js\"></script>"}},"desc":"Determines if the entered value is empty or not","examples":["const arr = isEmpty([]); // => true\rconst obj = isEmpty({}); // => true\rconst str = isEmpty(''); // => true\rconst num = isEmpty(0); // => true"],"params":[{"type":{"names":["Any"]},"description":"Value to check against","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean after running our check"}]},{"title":"isEqual","syntax":"isEqual(a, b)","usage":{"commonjs":{"title":"CommonJs","code":"const isEqual = require('dusty-fns/isEqual');"},"standard":{"title":"Standard","code":"import isEqual from 'dusty-fns/isEqual';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isEqual/index.js\"></script>"}},"desc":"Takes and compares two items","examples":["const obj = isEqual({}, {}); // => true\rconst arr = isEqual([], []); // => true"],"params":[{"type":{"names":["Any"]},"description":"First item to compare","name":"a"},{"type":{"names":["Any"]},"description":"Second item to compare","name":"b"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean after running our comparison check"}]},{"title":"isFunction","syntax":"isFunction(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isFunction = require('dusty-fns/isFunction');"},"standard":{"title":"Standard","code":"import isFunction from 'dusty-fns/isFunction';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isFunction/index.js\"></script>"}},"desc":"Determines if the value is a function","examples":["const fun = isFunction(() => ''); // => true"],"params":[{"type":{"names":["Object"]},"description":"The object to test against","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns boolean based on the check"}]},{"title":"isNull","syntax":"isNull(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isNull = require('dusty-fns/isNull');"},"standard":{"title":"Standard","code":"import isNull from 'dusty-fns/isNull';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isNull/index.js\"></script>"}},"desc":"Checks if the value is a null value","examples":["const nu = isNull(null); // => true"],"params":[{"type":{"names":["Object"]},"description":"The object to test against","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns a boolean based on the check"}]},{"title":"isNumber","syntax":"isNumber(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isNumber = require('dusty-fns/isNumber');"},"standard":{"title":"Standard","code":"import isNumber from 'dusty-fns/isNumber';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isNumber/index.js\"></script>"}},"desc":"Checks if the value is a Number","examples":["const num = isNumber(1); // => true"],"params":[{"type":{"names":["Number"]},"description":"The value to check","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean after testing our value"}]},{"title":"isObject","syntax":"isObject(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isObject = require('dusty-fns/isObject');"},"standard":{"title":"Standard","code":"import isObject from 'dusty-fns/isObject';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isObject/index.js\"></script>"}},"desc":"Verifies the item is an object","examples":["const obj = isObject({}); // => true"],"params":[{"type":{"names":["Object"]},"description":"The item to verify","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns true or false if the item is an object"}]},{"title":"isRegExp","syntax":"isRegExp(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isRegExp = require('dusty-fns/isRegExp');"},"standard":{"title":"Standard","code":"import isRegExp from 'dusty-fns/isRegExp';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isRegExp/index.js\"></script>"}},"desc":"Checks if the value is a RegExp String","examples":["const reg = isRegExp(/\\w/g); // => true"],"params":[{"type":{"names":["String"]},"description":"The value to check","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean after testing our value"}]},{"title":"isString","syntax":"isString(x)","usage":{"commonjs":{"title":"CommonJs","code":"const isString = require('dusty-fns/isString');"},"standard":{"title":"Standard","code":"import isString from 'dusty-fns/isString';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/isString/index.js\"></script>"}},"desc":"Checks if the value is a String","examples":["const str = isString('test'); // => true"],"params":[{"type":{"names":["String"]},"description":"The value to check","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns the boolean after testing our value"}]},{"title":"last","syntax":"","usage":{"commonjs":{"title":"CommonJs","code":"const last = require('dusty-fns/last');"},"standard":{"title":"Standard","code":"import last from 'dusty-fns/last';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/last/index.js\"></script>"}},"desc":"Grabs the last index of an array","examples":["const arr = last([1, 3]); // => 3\rconst str = last('abc'); // => 'c'"],"returns":[{"type":{"names":["Any"]},"description":"Returns whatever was the last piece of our array"}]},{"title":"mean","syntax":"mean(x)","usage":{"commonjs":{"title":"CommonJs","code":"const mean = require('dusty-fns/mean');"},"standard":{"title":"Standard","code":"import mean from 'dusty-fns/mean';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/mean/index.js\"></script>"}},"desc":"Get the mean of a set of numbers","examples":["const avg = mean(1, 2, 3, 2); // => 2\rconst avg = mean([1, 2, 3, 2]); // => 2"],"params":[{"type":{"names":["Number","Array"]},"description":"An amount of numbers or array of numbers","name":"x"}],"returns":[{"type":{"names":["Number"]},"description":"Returns the mean avg of the numbers"}]},{"title":"not","syntax":"not(x)","usage":{"commonjs":{"title":"CommonJs","code":"const not = require('dusty-fns/not');"},"standard":{"title":"Standard","code":"import not from 'dusty-fns/not';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/not/index.js\"></script>"}},"desc":"Returns boolean based on if the value is not","examples":["const reverse = not(true); // => false"],"params":[{"type":{"names":["Boolean"]},"description":"The values to compare against","name":"x"}],"returns":[{"type":{"names":["Boolean"]},"description":"Returns boolean back based on the results"}]},{"title":"nth","syntax":"nth(o, x)","usage":{"commonjs":{"title":"CommonJs","code":"const nth = require('dusty-fns/nth');"},"standard":{"title":"Standard","code":"import nth from 'dusty-fns/nth';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/nth/index.js\"></script>"}},"desc":"Returns the nth element of the given list or string.","examples":["const i = nth(3, [1, 2, 3, 4, 5, 6, 7]); // => 4"],"params":[{"type":{"names":["Number"]},"description":"How much to offset the value","name":"o"},{"type":{"names":["String","Array"]},"description":"The Array or list to crawl through","name":"x"}],"returns":[{"type":{"names":["String","Number"]},"description":"Returns the value of the found index"}]},{"title":"omit","syntax":"omit(key, x)","usage":{"commonjs":{"title":"CommonJs","code":"const omit = require('dusty-fns/omit');"},"standard":{"title":"Standard","code":"import omit from 'dusty-fns/omit';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/omit/index.js\"></script>"}},"desc":"Create a new Array/Object by omitting the requested values","examples":["const obj = omit('test', { test: '3432', thing: 123 }); // => { thing: 123 }\rconst arr = omit(['a', 'b'], { a: 1, b: 2, c: 3}); // => { c: 3 }"],"params":[{"type":{"names":["String"]},"description":"The key(s) in which to omit from the data","name":"key"},{"type":{"names":["Object"]},"description":"The array or object to search through","name":"x"}],"returns":[{"type":{"names":["Object"]},"description":"Returns the newly created data without the omitted values"}]},{"title":"range","syntax":"range(from, to)","usage":{"commonjs":{"title":"CommonJs","code":"const range = require('dusty-fns/range');"},"standard":{"title":"Standard","code":"import range from 'dusty-fns/range';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/range/index.js\"></script>"}},"desc":"Create an array range from start to end","examples":["const test = range(3, 7); // => [3, 4, 5, 6]\rconst test = range(3); // => [0, 1, 2];"],"params":[{"type":{"names":["Number"]},"description":"Starting number for the range","name":"from"},{"type":{"names":["Number"]},"description":"Number to end on for the range","name":"to"}],"returns":[{"type":{"names":["Array"]},"description":"Returns an array of numbers consisting of the range"}]},{"title":"removeAtIndex","syntax":"removeAtIndex(i, x)","usage":{"commonjs":{"title":"CommonJs","code":"const removeAtIndex = require('dusty-fns/removeAtIndex');"},"standard":{"title":"Standard","code":"import removeAtIndex from 'dusty-fns/removeAtIndex';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/removeAtIndex/index.js\"></script>"}},"desc":"Remove an item from a certain point in the index","examples":["const test = removeAtIndex(2, [0, 1, 2, 3]); // => [0, 1, 3]"],"params":[{"type":{"names":["Number"]},"description":"The index number to remove from","name":"i"},{"type":{"names":["Array"]},"description":"The array in question","name":"x"}],"returns":[{"type":{"names":["Array"]},"description":"returns the modified array back"}]},{"title":"replaceAtIndex","syntax":"replaceAtIndex(i, t, x)","usage":{"commonjs":{"title":"CommonJs","code":"const replaceAtIndex = require('dusty-fns/replaceAtIndex');"},"standard":{"title":"Standard","code":"import replaceAtIndex from 'dusty-fns/replaceAtIndex';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/replaceAtIndex/index.js\"></script>"}},"desc":"Add an item to an array within a certain index of the array","examples":["const test = replaceAtIndex(2, 10, [0, 1, 2, 3]); // => [0, 1, 10, 3]"],"params":[{"type":{"names":["Number"]},"description":"The index number to add at","name":"i"},{"type":{"names":["Object","Array","Number","String"]},"description":"What we want to add to our array","name":"t"},{"type":{"names":["Array"]},"description":"The array in question","name":"x"}],"returns":[{"type":{"names":["Array"]},"description":"Returns the modified array"}]},{"title":"type","syntax":"type(x)","usage":{"commonjs":{"title":"CommonJs","code":"const type = require('dusty-fns/type');"},"standard":{"title":"Standard","code":"import type from 'dusty-fns/type';"},"browser":{"title":"Browser","code":"<script src=\"path/to/node_modules/dusty-fns/type/index.js\"></script>"}},"desc":"Finds the type of the sent value","examples":["type({}); // => 'Object'\rtype([]); // => 'Array'\rtype(null); // => 'Null'\rtype(undefined); // => 'Undefined'\rtype('hi'); // => 'String'\rtype(1); // => 'Number'\rtype(/1/g); // => 'RegExp'\rtype(new Date()); // => 'Date'\rtype(true); // => 'Boolean'"],"params":[{"type":{"names":["Any"]},"description":"The value to test","name":"x"}],"returns":[{"type":{"names":["String"]},"description":"Returns the string of the value type"}]}]