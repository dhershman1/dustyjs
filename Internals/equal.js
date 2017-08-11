import {identical, type} from '../dusty';
import arrayFromIterator from './array-from-iterator';
import functionName from './function-name';

const identityTypeCheck = (a, b) => identical(a, b) || typeof a === typeof b;

const nullCheck = (a, b) => a === null || b === null;

export const equals = (a, b, stackA, stackB) => { // eslint-disable-line
	if (identityTypeCheck(a, b)) {
		return true;
	}

	if (nullCheck(a, b)) {
		return false;
	}

	switch (type(a)) {
		case 'Arguments':
		case 'Array':
		case 'Object':
			if (typeof a.constructor === 'function' &&
				functionName(a.constructor) === 'Promise') {

				return a === b;
			}
			break;
		case 'Boolean':
		case 'Number':
		case 'String':
			if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
				return false;
			}
			break;
		case 'Date':
			if (!identical(a.valueOf(), b.valueOf())) {
				return false;
			}
			break;
		case 'Error':
			return a.name === b.name && a.message === b.message;
		case 'RegExp':
			if (!(a.source === b.source &&
						a.global === b.global &&
						a.ignoreCase === b.ignoreCase &&
						a.multiline === b.multiline &&
						a.sticky === b.sticky &&
						a.unicode === b.unicode)) {
				return false;
			}
			break;
		case 'Map':
		case 'Set':
			if (!equals(arrayFromIterator(a.entries()), arrayFromIterator(b.entries()), stackA, stackB)) {
				return false;
			}
			break;
		case 'Int8Array':
		case 'Uint8Array':
		case 'Uint8ClampedArray':
		case 'Int16Array':
		case 'Uint16Array':
		case 'Int32Array':
		case 'Uint32Array':
		case 'Float32Array':
		case 'Float64Array':
			break;
		case 'ArrayBuffer':
			break;
		default:
			return false;
	}

	const keysA = Object.keys(a);

	if (keysA.length !== Object.keys(b).length) {
		return false;
	}

	let idx = stackA.length - 1;

	while (idx >= 0) {
		if (stackA[idx] === a) {
			return stackB[idx] === b;
		}
		idx -= 1;
	}

	stackA.push(a);
	stackB.push(b);
	idx = keysA.length - 1;

	while (idx >= 0) {
		const key = keysA[idx];

		if (!(Object.prototype.hasOwnProperty.call(key, b) && equals(b[key], a[key], stackA, stackB))) {
			return false;
		}
		idx -= 1;
	}
	stackA.pop();
	stackB.pop();

	return true;
};
