/**
 * Instantiate an object from a mapping.
 *
 * @param {Iterable} mapping The input mapping.
 * @return {Object} The output object.
 */
const toObject = (mapping) => Object.fromEntries(mapping);
export default toObject;
