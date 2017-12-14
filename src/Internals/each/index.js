import { has, type } from '../../index';

const each = (data, cb) => {
  const keys = Object.keys(data);

  keys.forEach(prop => {
    if (has(prop, data)) {
      if (type(data[prop]) === 'object') {
        each(data[prop], cb);
      }
      cb(data[prop], prop);
    }
  });
};

export default each;
