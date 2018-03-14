/**
 * Wrapper around try/catch.
 *
 * Returns the function result or, if an error is thrown, the error.
 *
 * @function fnAttempt
 * @memberof Fn
 * @since 3.2.0
 * @param {Function} fn
 * @param {...any[]} args
 * @returns {any|error}
 * @example
 * const foo = (a, b) => {
 *  if(b > 10){
 *    throw new RangeError();
 *  }
 *
 *  return a + b;
 * };
 *
 * fnAttempt(foo, 2, 1)   //=> 3
 * fnAttempt(foo, 2, 500) //=> RangeError
 */
const fnAttempt = <T>(fn: (...args: any[]) => T, ...args: any[]): T | Error => {
    try {
        return fn(...args);
    } catch (err) {
        return err;
    }
};

export default fnAttempt;
