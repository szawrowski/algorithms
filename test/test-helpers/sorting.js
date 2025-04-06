import { describe, it, expect } from 'vitest';

export const testSortingAlgorithm = (suite, sorter) => {
  describe(`${suite}`, () => {
    it('should return an empty array when the input is empty', () => {
      expect(sorter([])).toEqual([]);
    });

    it('should return the same array when there is only one element', () => {
      expect(sorter([5])).toEqual([5]);
    });

    it('should return a sorted array when the input is unordered', () => {
      expect(sorter([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
      expect(sorter([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return the same array when the input is already sorted', () => {
      expect(sorter([1, 1, 3, 4, 5])).toEqual([1, 1, 3, 4, 5]);
      expect(sorter([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly handle an array with duplicate elements', () => {
      expect(sorter([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
      expect(sorter([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    });

    it('should correctly handle negative numbers', () => {
      expect(sorter([-1, -3, -2, -5])).toEqual([-5, -3, -2, -1]);
      expect(sorter([-5, -4, -3, -2, -1])).toEqual([-5, -4, -3, -2, -1]);
    });

    it('should work with arrays containing strings', () => {
      expect(sorter(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
      expect(sorter(['apple', 'banana', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
    });

    it('should be stable for equal elements (relative order should be preserved)', () => {
      const input = [3, 1, 4, 1, 5, 1];
      const sorted = sorter(input);
      expect(sorted).toEqual([1, 1, 1, 3, 4, 5]);
      expect(sorted.indexOf(1)).toBeLessThan(sorted.lastIndexOf(1));
    });
  });
};
