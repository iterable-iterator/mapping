/**
 * Inverse a mapping.
 *
 * @param {Iterable} mapping The input mapping.
 * @return {IterableIterator} The output mapping.
 */
export default function* inverse(mapping) {
	for (const [key, value] of mapping) yield [value, key];
}
