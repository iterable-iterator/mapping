import test from 'ava';

import {constant} from '../../src/index.js';

test('constant', (t) => {
	t.deepEqual([...constant('', 1)], []);

	t.deepEqual(
		[...constant('abcde', 1)],
		[
			['a', 1],
			['b', 1],
			['c', 1],
			['d', 1],
			['e', 1],
		],
	);
});
