# partition-size

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

Splits an array by size.

## Getting started

```
npm i partition-size
```

## Usage

```js
var partitionSize = require('partition-size');

var njs = [
  'vivalo',
  '3rensho',
  'kalavinka',
  'level',
  'nagasawa',
  'umezawa',
  'makino'
];

var result = partitionSize(njs, 3);

console.log(result); // => [['vivalo', '3rensho', 'kalavinka'], ['level', 'nagasawa', 'umezawa'], ['makino']]
console.log(njs); // => ['vivalo','3rensho','kalavinka','level','nagasawa','umezawa','makino']



var arr = [1, 2, 3, 4];
var result = partitionSize(arr, 5); // => [1, 2, 3, 4]
var result = partitionSize(arr, 0); // => [1, 2, 3, 4]
var result = partitionSize(arr, -1); // => [1, 2, 3, 4]
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

```
npm test
```

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/partition-size.svg
[npm-url]: https://www.npmjs.org/package/partition-size
[bower-image]: http://img.shields.io/bower/v/partition-size.svg
[bower-url]: http://bower.io/search/?q=partition-size
[travis-image]: http://img.shields.io/travis/sugarshin/partition-size/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/partition-size
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/partition-size/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/partition-size
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fpartition-size.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fpartition-size
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/partition-size.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/partition-size.svg
