export default function compliment(f) {
  return function (...args) { // eslint-disable-line func-names
    return !f.apply(this, args); // eslint-disable-line no-invalid-this
  };
}
