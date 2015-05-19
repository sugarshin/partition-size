###!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
###

"use strict"

partition = require 'lodash.partition'

module.exports = partitionSize = do ->
  _partitionSize = (array, size, _result, _n) ->
    return array if 0 >= size
    return [array] if array.length <= size

    _r = partition　array, (el, i) -> i < size

    if _result?
      _result.pop()
      _r.forEach (el) -> _result.push el
    else
      _result = _r

    if _n? then _n++ else _n = 1

    if _result[_n].length > size
      _partitionSize _result[_n], size, _result, _n
    else
      return _result
