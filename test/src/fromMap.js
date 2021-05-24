import test from 'ava';

import {enumerate} from '@iterable-iterator/zip';
import {fromMap} from '../../src/index.js';

import {repr} from './_fixtures.js';

const macro = (t, mapping) => {
	t.deepEqual(Array.from(fromMap(new Map(mapping))), Array.from(mapping));
};

macro.title = (title, mapping) =>
	title ?? `fromMap(new Map(${repr(mapping)})) is ${repr(mapping)}`;

test(macro, []);
test(macro, Array.from(enumerate('abcde')));
