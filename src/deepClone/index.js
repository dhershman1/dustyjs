/**
 * Clones the object sent in (Hard Clone)
 * @param  {Object} x The object we want to get cloned
 * @return {Object}     Returns the cloned object back
 */
const deepClone = x => JSON.parse(JSON.stringify(x));

export default deepClone;
