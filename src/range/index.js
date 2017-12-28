/**
 * Create an array range from start to end
 * @param  {Number} from Starting number for the range
 * @param  {Number} to   Number to end on for the range
 * @return {Array}      Returns an array of numbers consisting of the range
 */
const range = (from, to) => {
  const r = [];
  let t = to;
  let n = from;

  if (!to) {
    n = 0;
    t = from;
  }

  while (n < t) {
    r.push(n);
    n += 1;
  }

  return r;
};

export default range;
