/**
 * Checks if a value is an array
 *
 * `Array.isArray` shorthand
 *
 * @function isArray
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArray([]);
 * isArray([1, 2, 3]);
 *
 * @example
 * // returns false
 * isArray({});
 */
declare const isArray: (arg: any) => arg is any[];
export default isArray;
