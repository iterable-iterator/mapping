import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';

import {reflect} from '../../src/index.js';

test('reflect', (t) => {
	t.deepEqual([...reflect(enumerate(''))], []);

	t.deepEqual(
		[...reflect(enumerate('abcde'))],
		[
			['a', 0],
			['b', 1],
			['c', 2],
			['d', 3],
			['e', 4],
		],
	);
});
