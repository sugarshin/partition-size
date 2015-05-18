###!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
###

"use strict"

partition = require 'lodash.partition'

module.exports = partitionSize = do ->
  _partitionSize = (array, point, result, n) ->
    return array if array.length <= point or 0 >= point

    if result?
      result.pop()
      partition(
        array
        (el, i, array) -> i < point
      ).forEach (el, i) -> result.push el
    else
      result = partition　array, (el, i, array) -> i < point

    if n? then n++ else n = 1

    if result[n].length > point
      _partitionSize result[n], point, result, n
    else
      return result
