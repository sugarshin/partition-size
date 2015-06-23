assert = require 'power-assert'

partitionSize = require '../'

describe 'partitionSize', ->
  arr = null

  beforeEach (done) ->
    arr = [1, 2, 3, 4, 5, 6, 7, 8]
    done()

  it 'array length 8 / size 4', ->
    r = partitionSize arr, 4
    assert(
      r.length is 2 and
      Array.isArray(r[0]) and
      Array.isArray(r[1]) and
      r[0].length is 4 and
      r[1].length is 4 and
      r[0].every (el, i) -> el is arr[i] and
      r[1].every (el, i) -> el is arr[i + 4]
    )

  it 'array length 8 / size 6', ->
    r = partitionSize arr, 6
    assert(
      r.length is 2 and
      Array.isArray(r[0]) and
      Array.isArray(r[1]) and
      r[0].length is 6 and
      r[1].length is 2 and
      r[0].every (el, i) -> el is arr[i] and
      r[1].every (el, i) -> el is arr[i + 6]
    )

  it 'array length 8 / size 9', ->
    r = partitionSize arr, 9
    assert(
      r.length is 1 and
      r[0].every (el, i) -> el is arr[i]
    )

  it 'array length 8 / size 0', ->
    r = partitionSize arr, 0
    assert(
      r.length is 8 and
      r.every (el, i) -> el is arr[i]
    )

  it 'array length 8 / size -1', ->
    r = partitionSize arr, -1
    assert(
      r.length is 8 and
      r.every (el, i) -> el is arr[i]
    )
