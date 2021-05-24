/**
 * Instantiate a mapping from an object.
 *
 * @param {Object} object The input object.
 * @return {IterableIterator} The output mapping.
 */
const fromObject = (object) => Object.entries(object)[Symbol.iterator]();
export default fromObject;
