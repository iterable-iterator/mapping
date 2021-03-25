/**
 * Swap keys and values of a mapping.
 *
 * @param {Iterable} mapping The input mapping.
 * @return {IterableIterator} A new mapping with input keys and values swapped.
 */
export default function* reflect(mapping) {
	for (const [key, value] of mapping) yield [value, key];
}
