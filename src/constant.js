/**
 * Creates a mapping from a sequences of keys and a single value. All keys are
 * mapped to that single value.
 *
 * @param {Iterable} keys
 * @param {any} value
 * @return {IterableIterator} The output mapping.
 */
export default function* constant(keys, value) {
	for (const key of keys) yield [key, value];
}
