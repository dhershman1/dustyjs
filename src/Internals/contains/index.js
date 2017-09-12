import {equals} from '../../index.js';

export default (n, x, idx) => { // eslint-disable-line complexity
	let inf = null;
	let item = null;

	switch(typeof x) {
		case 'number':
			if (n === 0) {
				inf = 1 / n;

				while (idx < x.length) {
					item = x[idx];
					if (item === 0 && 1 / item === inf) {
						return idx;
					}
					idx += 1;
				}

				return -1;
			} else if (a !== a) {
				while (idx < x.length) {
					item = x[idx];
					if (typeof item === 'number' && item !== item) {
						return idx;
					}
					idx += 1;
				}

				return -1;
			}

			return x.indexOf(n, idx);
			case 'string':
			case 'boolean':
			case 'function':
			case 'undefined':
				return x.indexOf(n, idx);
			case 'object':
				if (n === null) {
					return x.indexOf(n, idx);
				}
	}

	while (idx < x.length) {
		if (equals(x[idx], n)) {
			return idx;
		}
		idx += 1;
	}

	return -1;
};
