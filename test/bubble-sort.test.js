import { bubbleSort } from '@/sorting/bubble-sort.js'

describe('bubbleSort', () => {
  it('should sort an empty array correctly', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should sort an already sorted array correctly', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reversed array correctly', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with duplicate values correctly', () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });

  it('should sort an array with negative values correctly', () => {
    expect(bubbleSort([-5, -2, 0, -8, 3, -1])).toEqual([-8, -5, -2, -1, 0, 3]);
  });

  it('should sort an array with mixed positive and negative values correctly', () => {
    expect(bubbleSort([-5, 2, 0, -8, 3, -1])).toEqual([-8, -5, -1, 0, 2, 3]);
  });
});
