import test from 'ava';

import {fromObject} from '#module';

test('fromObject', (t) => {
	t.deepEqual(Array.from(fromObject({})), []);

	t.deepEqual(Array.from(fromObject({a: 0, b: 1, c: 2, d: 3, e: 4})), [
		['a', 0],
		['b', 1],
		['c', 2],
		['d', 3],
		['e', 4],
	]);
});
