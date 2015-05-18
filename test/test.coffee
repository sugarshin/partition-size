{ jsdom } = require 'jsdom'
global.document = jsdom '<html><body></body></html>'
global.window = document.defaultView
global.navigator = window.navigator

assert = require 'power-assert'

partitionSize = require '../src/partition-size.coffee'

describe 'partitionSize', ->
  it 'partitionSize', ->
    assert true
