###!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
###

"use strict"

partition = require 'lodash.partition'

module.exports = partitionSize = do ->
  _partitionSize = (array, point, result, n) ->
    return array if array.length <= point
    if result?
      _result = result
      _result.pop()
      partition(
        array
        (el, i, array) -> i < point
      ).forEach (el, i) -> _result.push el
    else
      _result = partition　array, (el, i, array) -> i < point

    if n? then _n = n + 1 else _n = 1

    if _result[_n].length > point
      _partitionSize _result[_n], point, _result, _n
    else
      return _result
