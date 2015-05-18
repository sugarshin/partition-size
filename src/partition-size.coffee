###!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
###

"use strict"

partition = require 'lodash.partition'

module.exports = partitionSize = do ->
  _partitionSize = (array, size, result, n) ->
    return array if array.length <= size or 0 >= size

    if result?
      result.pop()
      partition(
        array
        (el, i, array) -> i < size
      ).forEach (el, i) -> result.push el
    else
      result = partition　array, (el, i, array) -> i < size

    if n? then n++ else n = 1

    if result[n].length > size
      _partitionSize result[n], size, result, n
    else
      return result
