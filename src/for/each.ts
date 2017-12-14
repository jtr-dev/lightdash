import { forEachIterator } from "../../typings/index.d";

/**
 * Iterates over each element in an array
 *
 * Wrapper around arr.forEach to have a cleaner API and better minified code
 *
 * @function forEach
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * // returns a = [0, 2, 6]
 * const a = [1, 2, 3];
 *
 * forEach(a, (val, index)=>a[index] = val * index)
 */
const forEach = (arr: any[], fn: forEachIterator): void => arr.forEach(fn);

export default forEach;
