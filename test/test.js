import assert from 'power-assert';

import partitionSize from '../';

describe('partitionSize', () => {

  let arr = null;

  beforeEach(done => {
    arr = [1, 2, 3, 4, 5, 6, 7, 8];
    done();
  });

  it('array length 8 / size 4', () => {
    const expected = partitionSize(arr, 4);
    assert(expected.length === 2);
    assert(Array.isArray(expected[0]));
    assert(Array.isArray(expected[1]));
    assert(expected[0].length === 4);
    assert(expected[1].length === 4);
    assert(expected[0].every((el, i) => el === arr[i]));
    assert(expected[1].every((el, i) => el === arr[i + 4]));
  });

  it('array length 8 / size 6', () => {
    const expected = partitionSize(arr, 6);
    assert(expected.length === 2);
    assert(Array.isArray(expected[0]));
    assert(Array.isArray(expected[1]));
    assert(expected[0].length === 6);
    assert(expected[1].length === 2);
    assert(expected[0].every((el, i) => el === arr[i]));
    assert(expected[1].every((el, i) => el === arr[i + 6]));
  });

  it('array length 8 / size 9', () => {
    const expected = partitionSize(arr, 9);
    assert(expected.length === 1);
    assert(expected[0].every((el, i) => el === arr[i]));
  });

  it('array length 8 / size 0', () => {
    const expected = partitionSize(arr, 0);
    assert(expected.length === 8);
    assert(expected.every((el, i) => el === arr[i]));
  });

  it('array length 8 / size -1', () => {
    const expected = partitionSize(arr, -1);
    assert(expected.length === 8);
    assert(expected.every((el, i) => el === arr[i]));
  });

  it('size not a number', () => {
    const expected = partitionSize(arr, 'not a number');
    assert(expected.length === 8);
    assert(expected.every((el, i) => el === arr[i]));
  });

});
