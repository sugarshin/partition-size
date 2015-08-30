import assert from 'power-assert';

import partitionSize from '../';

describe('partitionSize', () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  it('length 8 / size 4', () => {
    const expected = [[1, 2, 3, 4], [5, 6, 7, 8]];
    const actual = partitionSize(arr, 4);
    assert.deepEqual(actual, expected, 'length 8 / size 4');
  });

  it('length 8 / size 6', () => {
    const expected = [[1, 2, 3, 4, 5, 6], [7, 8]];
    const actual = partitionSize(arr, 6);
    assert.deepEqual(actual, expected, 'length 8 / size 6');
  });

  it('length 8 / size 8', () => {
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8]];
    const actual = partitionSize(arr, 8);
    assert.deepEqual(actual, expected, 'length 8 / size 8');
  });

  it('length 8 / size 1', () => {
    const expected = [[1], [2], [3], [4], [5], [6], [7], [8]];
    const actual = partitionSize(arr, 1);
    assert.deepEqual(actual, expected, 'length 8 / size 1');
  });

  it('length 8 / size 9', () => {
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8]];
    const actual = partitionSize(arr, 9);
    assert.deepEqual(actual, expected, 'length 8 / size 9');
  });

  it('length 8 / size 0', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = partitionSize(arr, 0);
    assert.deepEqual(actual, expected, 'length 8 / size 0');
  });

  it('length 8 / size -1', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = partitionSize(arr, -1);
    assert.deepEqual(actual, expected, 'length 8 / size -1');
  });

  it('size not a number', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = partitionSize(arr, 'not a number');
    assert.deepEqual(actual, expected, 'size not a number');
  });

  it('size is NaN', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = partitionSize(arr, NaN);
    assert.deepEqual(actual, expected, 'size is NaN');
  });

});
