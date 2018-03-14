import isArray from "../is/array";

/**
 * Recursively flattens an array.
 *
 * @function arrFlattenDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * // returns [1, 2, 3]
 * arrFlattenDeep([1, 2, [3]])
 *
 * @example
 * // returns [1, 2, 3, 5, 6, 6]
 * arrFlattenDeep([1, 2, [3, [[[5]]], [6, [6]]])
 */
const arrFlattenDeep = <T>(arr: T[]): T[] => {
    const result: T[] = [];

    arr.forEach(val => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        } else {
            result.push(val);
        }
    });

    return result;
};

export default arrFlattenDeep;
