/**
 * @since v0.1.0
 * @sig {k: v} -> {k: v} -> {k: v}
 * @description Create a new object from the provided objects in the parameters
 * @param  {Object} args The object(s) we want to combine
 * @return {Object} A new Object
 *
 * @example
 * const obj = extend({ test: 1 }, { thing: 2 }); // => { test: 1, thing: 2 }
 */
const extend = (...args) =>
  args.reduce((acc, x) => {
    let key = '';

    for (key in x) {
      acc[key] = x[key];
    }

    return acc;
  }, {});

export default extend;
