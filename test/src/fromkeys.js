import test from 'ava';

import {fromkeys} from '../../src/index.js';

test('fromkeys', (t) => {
	t.deepEqual([...fromkeys('', 1)], []);

	t.deepEqual(
		[...fromkeys('abcde', 1)],
		[
			['a', 1],
			['b', 1],
			['c', 1],
			['d', 1],
			['e', 1],
		],
	);
});
