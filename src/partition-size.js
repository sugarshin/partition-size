/*!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
 */

'use strict';

export default function partitionSize(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('should be an Array.');
  }

  if (typeof size !== 'number' || size <= 0) {
    return array;
  }

  if (array.length <= size) {
    return [array];
  }

  return array.reduce((result, current, i) => {
    if (i % size === 0) {
      result.push([current]);
    } else {
      result[result.length - 1].push(current);
    }
    return result;
  }, []);
}
