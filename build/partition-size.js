(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.partitionSize = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/*!
 * @license partition-size
 * (c) sugarshin
 * License: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = partitionSize;

function partitionSize(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('should be an Array.');
  }

  if (typeof size !== 'number' || size <= 0) {
    return array;
  }

  if (array.length <= size) {
    return [array];
  }

  return array.reduce(function (result, current, i) {
    if (i % size === 0) {
      result.push([current]);
    } else {
      result[result.length - 1].push(current);
    }
    return result;
  }, []);
}

module.exports = exports['default'];

},{}]},{},[1])(1)
});