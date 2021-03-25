import test from 'ava';

import {fromKeys} from '../../src/index.js';

test('fromKeys', (t) => {
	t.deepEqual([...fromKeys('', 1)], []);

	t.deepEqual(
		[...fromKeys('abcde', 1)],
		[
			['a', 1],
			['b', 1],
			['c', 1],
			['d', 1],
			['e', 1],
		],
	);
});
