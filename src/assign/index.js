/**
 * @name assign
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @description Create a new object from the provided objects in the parameters
 * @param  {Object} args The object(s) we want to combine
 * @return {Object} A new Object
 *
 * @example
 * const obj = assign({ test: 1 }, { thing: 2 }); // => { test: 1, thing: 2 }
 */
export default (...args) =>
  args.reduce((acc, x) => {
    for (const key in x) {
      acc[key] = x[key];
    }

    return acc;
  }, {});
