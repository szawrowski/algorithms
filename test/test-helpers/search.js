import { describe, it, expect } from 'vitest';

export const testSearchAlgorithm = (suite, searcher) => {
  describe(`${suite}`, () => {
    it('should return -1 when the array is empty', () => {
      expect(searcher([], 5)).toBe(-1);
    });

    it('should return the correct index for an element present in the array', () => {
      expect(searcher([1, 2, 3, 4, 5], 4)).toBe(3);
      expect(searcher([1, 1, 1, 2, 3, 4, 5], 3)).toBe(4);
      expect(searcher([1, 2, 3, 4, 5], 1)).toBe(0);
      expect(searcher([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    it('should return -1 when the element is not present in the array', () => {
      expect(searcher([1, 2, 3, 4, 5], 6)).toBe(-1);
      expect(searcher([1, 2, 3, 4, 5], 0)).toBe(-1);
    });

    it('should handle an array with a single element', () => {
      expect(searcher([5], 5)).toBe(0);
      expect(searcher([5], 10)).toBe(-1);
    });

    it('should handle an array with repeated elements', () => {
      expect(searcher([1, 1, 1, 1, 1], 1)).toBe(0);
      expect(searcher([1, 1, 1, 1, 1], 0)).toBe(-1);
    });

    it('should handle negative numbers correctly', () => {
      expect(searcher([-5, -3, -1, 1, 3, 5], -3)).toBe(1);
      expect(searcher([-5, -3, -1, 1, 3, 5], -10)).toBe(-1);
    });

    it('should work with arrays of different types (e.g. strings)', () => {
      expect(searcher(['apple', 'banana', 'cherry'], 'banana')).toBe(1);
      expect(searcher(['apple', 'banana', 'cherry'], 'grape')).toBe(-1);
    });
  });
};
