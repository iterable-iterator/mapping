import test from 'ava';

import {toObject} from '../../src/index.js';

test('toObject', (t) => {
	t.deepEqual(toObject([]), {});

	t.deepEqual(
		toObject([
			['a', 0],
			['b', 1],
			['c', 2],
			['d', 3],
			['e', 4],
		]),
		{a: 0, b: 1, c: 2, d: 3, e: 4},
	);
});
