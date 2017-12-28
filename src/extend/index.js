/**
 * Combines objects into a single object
 * @param  {Object} args The object we want to combine
 * @return {Object}      Returns the combined object
 */
const extend = (...args) => args.reduce((acc, x) => {
  let key = '';

  for (key in x) {
    acc[key] = x[key];
  }

  return acc;
}, {});

export default extend;
