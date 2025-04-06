/**
 * @fileoverview Binary Search algorithm.
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Binary_search_algorithm
 */

/**
 * Performs a binary search on a sorted array.
 *
 * @param arr The sorted array to search.
 * @param target The value to search for.
 * @returns The index of the target element, or -1 if not found.
 *
 * @example
 * const index = binarySearch([1, 1, 3, 4, 5], 4);
 * console.log(index); // 3
 */
export const binarySearch = (arr, target) => {
  const length = arr.length;
  if (length === 0) {
    return -1;
  }
  let left = 0;
  let right = length - 1;
  let result = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      // Target found
      result = middle;
      right = middle - 1;
    }
    if (arr[middle] < target) {
      // Search in the right half
      left = middle + 1;
    } else {
      // Search in the left half
      right = middle - 1;
    }
  }
  return result;
};
