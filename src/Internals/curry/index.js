
import isPlaceholder from '../isPlaceholder';

const curry = (length, recieved, fn) => { // eslint-disable-line
	return function(...args) { // eslint-disable-line
		const combined = [];
		let left = length;
		let combinedIdx = 0;
		let argsIdx = 0;


		while (combinedIdx < recieved.length || argsIdx < args.length) {
			let result = '';

			if (combinedIdx < recieved.length && (!isPlaceholder(recieved[combinedIdx]) || argsIdx >= args.length)) {
				result = recieved[combinedIdx];
			} else {
				result = args[argsIdx];
				argsIdx += 1;
			}
			combined[combinedIdx] = result;
			if (!isPlaceholder(result)) {
				left -= 1;
			}
			combinedIdx += 1;
		}

		return left <= 0 ? fn.apply(this, combined) : curry(length, combined, fn); // eslint-disable-line
	};
};

export default curry;
