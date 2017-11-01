import isArray from "../is/array";
import {
    forEachIterator,
} from "../lightdash.d";
import forEach from "./each";

/**
 * Recursively iterates over each element in an array
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * //returns [0,4,[0,1,[0],12]]
 * const a = [2,4,[1,1,[16],4]];
 *
 * forEachDeep(a,(val,index,arr)=>arr[index]=index*val)
 */
const forEachDeep = (arr: any[], fn: forEachIterator): void => forEach(arr,
    (val: any, index: number) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

export default forEachDeep;
