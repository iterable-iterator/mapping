import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';

import {inverse} from '../../src/index.js';

test('inverse', (t) => {
	t.deepEqual([...inverse(enumerate(''))], []);

	t.deepEqual(
		[...inverse(enumerate('abcde'))],
		[
			['a', 0],
			['b', 1],
			['c', 2],
			['d', 3],
			['e', 4],
		],
	);
});
