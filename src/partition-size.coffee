###!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
###

"use strict"

partition = require 'lodash.partition'

partitionSize = module.exports = do ->
  _partitionSize = (array, size, _result, _n) ->
    unless Array.isArray(array)
      throw new Error 'The first argument should be an Array.'

    return array if typeof size isnt 'number' or size <= 0
    return [array] if array.length <= size

    _r = partition array, (el, i) -> i < size

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
