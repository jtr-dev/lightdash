'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checks if a value is an array
 *
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
const isArray = (val) => Array.isArray(val);

/**
 * Checks if the value has a certain typestring
 *
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * //returns true
 * isTypeOf({},"object")
 * isTypeOf([],"object")
 * isTypeOf("foo","string")
 *
 * @example
 * //returns false
 * isTypeOf("foo","number")
 */
const isTypeOf = (val, type) => typeof val === type;

/**
 * Checks if a value is undefined
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(a.b)
 * isUndefined(undefined)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isUndefined(1)
 * isUndefined(a)
 */
const isUndefined = (val) => isTypeOf(val, "undefined");

/**
 * Checks if a value is not undefined
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * const a = {};
 *
 * isDefined(1)
 * isDefined(a)
 *
 * @example
 * //returns false
 * const a = {};
 *
 * isDefined(a.b)
 * isDefined(undefined)
 */
const isDefined = (val) => !isUndefined(val);

/**
 * Checks if a target has a certain key
 *
 * @since 1.0.0
 * @param {any} target
 * @param {string} key
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([1,2,3],"0")
 * isArrayLike({length:0},"length")
 * isArrayLike("foo","replace")
 *
 * @example
 * //returns false
 * isArrayLike({},"foo")
 * isArrayLike(null,"foo")
 * isArrayLike(1,"foo")
 */
const hasKey = (target, key) => isDefined(target[key]);

/**
 * Checks if a value is either undefined or null
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNil(null)
 * isNil(undefined)
 *
 * @example
 * //returns false
 * isNil(0)
 * isNil({})
 */
const isNil = (val) => isUndefined(val) || val === null;

/**
 * Checks if a value is not nil and has a typeof object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike({})
 * isObjectLike([])
 *
 * @example
 * //returns false
 * isObjectLike(null)
 * isObjectLike(1)
 */
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is object-like and has a length property
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike("foo")
 * isArrayLike(1)
 */
const isArrayLike = (val) => isObjectLike(val) && hasKey(val, "length");

/**
 * Checks if a value is a boolean
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isBoolean(true)
 * isBoolean(false)
 *
 * @example
 * //returns false
 * isBoolean(0)
 * isBoolean(null)
 * isBoolean("")
 */
const isBoolean = (val) => isTypeOf(val, "boolean");

/**
 * Returns an array of the objects keys
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 */
const objKeys = (obj) => Object.keys(obj);

/**
 * Checks if a value is a string
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isString("foo")
 *
 * @example
 * //returns false
 * isString(1)
 */
const isString = (val) => isTypeOf(val, "string");

/**
 * Checks if an array has no items, or an object has no keys
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isEmpty([])
 * isEmpty({})
 * isEmpty("")
 *
 * @example
 * //returns false
 * isEmpty("foo")
 * isEmpty([1,2])
 */
const isEmpty = (val) => {
    if (isArrayLike(val) || isString(val)) {
        return val.length === 0;
    }
    else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    }
    else {
        return false;
    }
};

/**
 * Returns an array of the objects entries
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]} Array<[key: any, val: any]>]
 */
const objEntries = (obj) => Object.entries(obj);

/**
 * Iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 */
const forEach = (arr, fn) => arr.forEach(fn);

/**
 * Iterate over each entry of an object
 *
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 */
const forEachEntry = (obj, fn) => {
    forEach(objEntries(obj), (entry, index) => {
        fn(entry[1], entry[0], index, obj);
    });
};

/**
 * Checks if the value is instanceof the target
 *
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * //returns true
 * isInstanceOf({},Object)
 * isInstanceOf([],Object)
 * isInstanceOf([],Array)
 *
 * @example
 * //returns false
 * isInstanceOf({},Array)
 * isInstanceOf([],Map)
 */
const isInstanceOf = (val, target) => val instanceof target;

/**
 * Checks if a value is an object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObject({})
 * isObject([])
 *
 * @example
 * //returns false
 * isObject(1)
 */
const isObject = (val) => isInstanceOf(val, Object);

/**
 * Deep checks if the contents of two values are the same
 *
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * isEqual(1,1)
 * isEqual({},{})
 * isEqual([1,2],[1,2])
 * isEqual([1,2,[3,4]],[1,2,[3,4]])
 *
 * @example
 * //returns false
 * isEqual([1,2,3],[1])
 * isEqual([1,2,[3]],[1,2,[4]])
 */
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (isObject(a) && isObject(b) && objKeys(a).length === objKeys(b).length) {
        let result = true;
        // tslint:disable-next-line
        forEachEntry(a, (val_a, key) => {
            // Only Check if the comparison didnt fail already
            if (result === true) {
                if (hasKey(b, key)) {
                    // tslint:disable-next-line
                    const val_b = b[key];
                    result = isEqual(val_a, val_b);
                }
                else {
                    result = false;
                }
            }
        });
        return result;
    }
    return false;
};

/**
 * Checks if a value is a map
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isMap(new Map())
 *
 * @example
 * //returns false
 * isMap([[1,2]])
 */
const isMap = (val) => isInstanceOf(val, Map);

/**
 * Checks if a value is a number
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isNumber(1)
 * isNumber(2.34)
 *
 * @example
 * //returns false
 * isNumber(null)
 */
const isNumber = (val) => isTypeOf(val, "number");

/**
 * Checks if a value is a primitive
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike(1)
 * isObjectLike(null)
 *
 * @example
 * //returns false
 * isObjectLike({})
 * isObjectLike([])
 */
const isPrimitive = (val) => !isObjectLike(val);

/**
 * Checks if two values are the same
 *
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * //returns true
 * const a = [];
 *
 * isSame(1,1)
 * isSame("foo","foo")
 * isSame(a,a)
 *
 * @example
 * //returns false
 * isSame({},{})
 * isSame([],[])
 */
const isSame = (a, b) => a === b;

/**
 * Checks if a value is a set
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSet(new Set())
 *
 * @example
 * //returns false
 * isSet([1,2])
 */
const isSet = (val) => isInstanceOf(val, Set);

/**
 * Checks if a value is a number as a string
 *
 * @since 1.0.0
 * @param {string} val
 * @returns {boolean}
 * @example
 * //returns true
 * isStringNumber("123")
 * isStringNumber("0b010")
 *
 * @example
 * //returns false
 * isStringNumber("foo")
 */
const isStringNumber = (val) => !isNaN(Number(val));

/**
 * Checks if a value is a symbol
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isSymbol(Symbol())
 *
 * @example
 * //returns false
 * isStringNumber("foo")
 */
const isSymbol = (val) => isTypeOf(val, "symbol");

/**
 * Accesses a target by a path of keys. If the path doesn't exist, null is returned
 *
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns 1
 * getLength({a:1},["a"]);
 *
 * @example
 * // returns 6
 * getLength([4,6,8],["1"]);
 *
 * @example
 * // returns 10
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
 */
const getPath = (target, path) => {
    let targetCurrent = target;
    let index = 0;
    while (isDefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];
        if (hasKey(targetCurrent, keyCurrent)) {
            targetCurrent = targetCurrent[keyCurrent];
            index++;
        }
        else {
            return null;
        }
    }
    return targetCurrent;
};

/**
 * Checks if a target has a path of keys
 *
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns true
 * getLength({a:1},["a"]);
 * getLength([4,6,8],["1"]);
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
 *
 * @example
 * // returns false
 * getLength({a:1},["c"]);
 * getLength([4,6,8],["8"]);
 * getLength({a:{b:2,c:[10,20]}},["f","x","231","21"]);
 * getLength(1,["foo"]);
 */
const hasPath = (target, path) => isNil(getPath(target, path));

/**
 * Clamps a number in a range
 *
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const numberClamp = (val, min, max) => {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    else {
        return val;
    }
};

/**
 * Checks if a number is in the given range
 *
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
const numberInRange = (val, min, max) => val >= min && val <= max;

/**
 * Return a random float number in the range
 *
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @returns {number}
 */
const numberRandomFloat = (min = 0, max = 1) => min + Math.random() * (max - min);

/**
 * Return a random integer number in the range
 *
 * @since 1.0.0
 * @param {number} [min=0]
 * @param {number} [max=100]
 * @returns {number}
 */
const numberRandomInt = (min = 0, max = 1) => Math.floor(numberRandomFloat(min, max) /
    (max - min) * (max - min + 1));

/**
 * Deeply iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 */
const forEachDeep = (arr, fn) => forEach(arr, (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

/**
 * Deeply iterate over each entry of an object
 *
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 */
const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (val, key, index) => isObject(val) ? forEachEntryDeep(val, fn) : fn(val, key, index, obj));

/**
 * wrapper around a simple for-loop
 *
 * @param {number} start
 * @param {number} max
 * @param {number} increase
 * @param {function} fn fn(val: number)
 */
const forTimes = (start, max, increase, fn) => {
    for (let index = start; index < max; index += increase) {
        fn(index);
    }
};

/**
 * Chunks an array
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 * @example
 * //returns [[1,2],[3,4],[5,6]]
 * arrChunk([1,2,3,4,5,6],2)
 *
 * @example
 * //returns [[1,2,3],[4,5]]
 * arrChunk([1,2,3,4,5],3)
 */
const arrChunk = (arr, chunk) => {
    if (chunk < 1) {
        return [];
    }
    else {
        const result = [];
        forTimes(0, arr.length, chunk, (index) => {
            result.push(arr.slice(index, index + chunk));
        });
        return result;
    }
};

/**
 * Creates a new array with the values of the input array
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3], b = [1,10,3]
 * const a = [1,2,3];
 * const b = arrClone(a);
 *
 * b[1] = 10;
 */
const arrClone = (arr) => Array.from(arr);

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {ForEachIterator} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 */
const arrMap = (arr, fn) => arr.map(fn);

/**
 * Deeply maps the values of the input array with the iterator function and return the result
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {ForEachIterator} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 */
const arrMapDeep = (arr, fn) => arrMap(arr, (val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

/**
 * Deeply creates a new array with the values of the input array
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns a = [1,2,3,[5,[6]]], b = [1,2,3,[5,[10]]]
 * const a = [1,2,3,[5,[6]]];
 * const b = arrCloneDeep(a);
 *
 * b[3][1][0] = 10;
 */
const arrCloneDeep = (arr) => arrMapDeep(arrClone(arr), (val) => isArray(val) ? arrClone(val) : val);

/**
 * Filters every empty, undefined or null value out
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * //returns [1,2,3,4,5]
 * arrCompact([1,"","",2,3,null,4,undefined,5,""])
 */
const arrCompact = (arr) => arr.filter((val) => !isNil(val) && !isEmpty(val));

/**
 * Counts how many times an element appears in an array and returns a map [element,count]
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>}
 * @example
 * //returns Map{1:4, 2:2, 3:1, 4:1}
 * arrCount([1,1,2,2,1,3,4,1])
 */
const arrCount = (arr) => {
    const result = new Map();
    forEach(arr, (val) => {
        result.set(val, result.has(val) ? result.get(val) + 1 : 1);
    });
    return result;
};

/**
 * Returns an array of all elements that exist in the first array, but not any others
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * //returns [2]
 * arrDifference([1,2,3], [1,"foo",3])
 *
 * @example
 * //returns [1,3]
 * arrDifference([1,2,3], ["foo"], [2,0,2])
 */
const arrDifference = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    return arr.filter((item) => !valuesCounted.has(item));
};

/**
 * Recursively flattens an array
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrFlattenDeep = (arr) => {
    const result = [];
    forEach(arr, (val) => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        }
        else {
            result.push(val);
        }
    });
    return result;
};

/**
 * RReturns an array of all elements that exist in the first array, and at least once in the other array
 *
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * //returns [1,3]
 * arrIntersection([1,2,3], [1,"foo",3])
 *
 * @example
 * //returns [2]
 * arrIntersection([1,2,3], ["foo"], [2,0,2])
 */
const arrIntersection = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    return arr.filter((item) => valuesCounted.has(item));
};

/**
 * Returns a new array with every n-th item
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 */
const arrStep = (arr, step) => arr.filter((val, index) => index % step === 0);

// tslint:disable
/**
 * Returns an array of all unique elements in an array
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 */
const arrUniq = (arr) => arrClone(new Set(arr));

/**
 * Creates a new object with the entries of the input object
 *
 * @since 1.0.0
 * @param {object} obj
 * @returns {object}
 */
const objClone = (obj) => Object.assign({}, obj);

/**
 * Maps each entry of an object and returns the result
 *
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 */
const objMap = (obj, fn) => {
    const objNew = objClone(obj);
    forEachEntry(objNew, (val, key, index) => {
        objNew[key] = fn(val, key, index, objNew);
    });
    return objNew;
};

/**
 * Deeply maps each entry of an object and returns the result
 *
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 */
const objMapDeep = (obj, fn) => objMap(obj, (val, key, index, objNew) => {
    if (isObject(val)) {
        return objMapDeep(val, fn);
    }
    else {
        return fn(val, key, index, objNew);
    }
});

/**
 * Deeply creates a new object with the entries of the input object
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 */
const objCloneDeep = (obj) => objMapDeep(objClone(obj), (val) => isObject(val) ? objClone(val) : val);

/**
 * Returns an array of the objects values
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 */
const objValues = (obj) => Object.values(obj);

/**
 * Creates a Map from an Object
 *
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Map}
 */
const mapFromObject = (obj) => new Map(objEntries(obj));

exports.isSame = isSame;
exports.isEqual = isEqual;
exports.isInstanceOf = isInstanceOf;
exports.isTypeOf = isTypeOf;
exports.isUndefined = isUndefined;
exports.isDefined = isDefined;
exports.isNil = isNil;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isEmpty = isEmpty;
exports.isPrimitive = isPrimitive;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isStringNumber = isStringNumber;
exports.isBoolean = isBoolean;
exports.isSymbol = isSymbol;
exports.hasKey = hasKey;
exports.hasPath = hasPath;
exports.getPath = getPath;
exports.numberInRange = numberInRange;
exports.numberClamp = numberClamp;
exports.numberRandomFloat = numberRandomFloat;
exports.numberRandomInt = numberRandomInt;
exports.forTimes = forTimes;
exports.forEach = forEach;
exports.forEachDeep = forEachDeep;
exports.forEachEntry = forEachEntry;
exports.forEachEntryDeep = forEachEntryDeep;
exports.arrClone = arrClone;
exports.arrCloneDeep = arrCloneDeep;
exports.arrMap = arrMap;
exports.arrMapDeep = arrMapDeep;
exports.arrFlattenDeep = arrFlattenDeep;
exports.arrCompact = arrCompact;
exports.arrChunk = arrChunk;
exports.arrStep = arrStep;
exports.arrCount = arrCount;
exports.arrDifference = arrDifference;
exports.arrIntersection = arrIntersection;
exports.arrUniq = arrUniq;
exports.objClone = objClone;
exports.objCloneDeep = objCloneDeep;
exports.objMap = objMap;
exports.objMapDeep = objMapDeep;
exports.objKeys = objKeys;
exports.objValues = objValues;
exports.objEntries = objEntries;
exports.mapFromObject = mapFromObject;
