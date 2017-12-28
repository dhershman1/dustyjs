/**
 * Determines if the object has a property
 * @param  {String} prop The prop to look for
 * @param  {Object} obj The Object we are searching
 * @return {Boolean} Returns based on if the prop is found or not
 */
const has = (prop, obj) => Object.prototype.hasOwnProperty.call(obj, prop);

export default has;
