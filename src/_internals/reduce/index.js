import isObject from '../isObject';

const arrayReduce = (fn, list) => list.reduce((a, v) => {
  if (fn(v)) {
    a.push(v);
  }

  return a;
}, []);

const objReduce = (fn, list) => {
  const entries = Object.entries(list);

  return entries.reduce((a, v) => {
    const [prop, val] = v;

    if (fn(val)) {
      a[prop] = val;
    }

    return a;
  }, {});
};

export default (fn, list) => {
  if (Array.isArray(list)) {
    return arrayReduce(fn, list);
  }

  if (isObject(list)) {
    return objReduce(fn, list);
  }

  return list;
};
