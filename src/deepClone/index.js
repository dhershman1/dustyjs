/**
 * @name deepClone
 * @since v0.1.0
 * @category Function
 * @sig {*} -> {*}
 * @description Clones the object sent in (Hard Clone)
 * @param  {Object} x The object we want to get cloned
 * @return {Object}     Returns the cloned object back
 *
 * @example
 * const cloned = deepClone({ test: 1 }) // => { test: 1 }
 */
export default x => JSON.parse(JSON.stringify(x));
