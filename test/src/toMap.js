import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';
import {repr} from './_fixtures.js';
import {toMap} from '#module';

const macro = (t, mapping) => {
	t.deepEqual(toMap(mapping), new Map(mapping));
};

macro.title = (title, mapping) =>
	title ?? `toMap(${repr(mapping)}) is new Map(${repr(mapping)})`;

test(macro, []);
test(macro, Array.from(enumerate('abcde')));
