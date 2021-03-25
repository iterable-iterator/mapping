import test from 'ava';

import {object} from '../../src/index.js';

test('object', (t) => {
	t.deepEqual(object([]), {});

	t.deepEqual(
		object([
			['a', 0],
			['b', 1],
			['c', 2],
			['d', 3],
			['e', 4],
		]),
		{a: 0, b: 1, c: 2, d: 3, e: 4},
	);
});
