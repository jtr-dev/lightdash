import isObjectLike from "./objectLike";
import hasKey from "../has/key";
import objKeys from "../obj/keys";

/**
 * Checks if an array has no items, or an object has no keys
 *
 * @param {*} val
 * @returns {boolean}
 */
const isEmpty = (val: any): boolean => {
    if (hasKey(val, "length")) {
        return val.length === 0;
    } else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    } else {
        return false;
    }
};

export default isEmpty;