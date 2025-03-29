import { binarySearch } from '@/search/binary-search.js'

describe('binarySearch', () => {
  it('should return -1 for an empty array', () => {
    expect(binarySearch([], 4)).toEqual(-1);
  });

  it('should find the element in a sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
  });

  it('should return -1 if element is not in the sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });

  it('should find the element in a sorted array with duplicate values', () => {
    expect(binarySearch([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9], 3)).toEqual(3);
  });

  it('should find the element in a sorted array with negative values', () => {
    expect(binarySearch([-5, -2, -1, 0, 3], -2)).toEqual(1);
  });

  it('should find the element in a sorted array with mixed positive and negative values', () => {
    expect(binarySearch([-8, -5, -1, 0, 2, 3], 3)).toEqual(5);
  });

  it('should return -1 if the element is smaller than the smallest element in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toEqual(-1);
  });

  it('should return -1 if the element is bigger than the biggest element in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });

  it('should handle single element array - found', () => {
    expect(binarySearch([5], 5)).toEqual(0);
  });

  it('should handle single element array - not found', () => {
    expect(binarySearch([5], 6)).toEqual(-1);
  });
});
