/**
 * @fileoverview Binary Search algorithm.
 * @author szawrowski
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Binary_search_algorithm
 */

/**
 * Performs a binary search on a sorted array to find the index of
 * a target value.
 *
 * @param array - The sorted array to search.
 * @param target - The value to search for.
 * @returns The index of the target value in the array,
 * or -1 if the target is not found.
 */
export const binarySearch = (array, target) => {
  // Handle empty array.
  if (array.length === 0) {
    return -1;
  }
  // Initialize left and right boundaries.
  let left = 0;
  let right = array.length - 1;
  let mid;

  // Iterate while left boundary is valid.
  while (left <= right) {
    // Calculate the middle index.
    mid = Math.floor((left + right) / 2);

    // Target found.
    if (array[mid] === target) {
      return mid;
    }
    // Target is in the right half.
    else if (array[mid] < target) {
      left = mid + 1;
    }
    // Target is in the left half.
    else {
      right = mid - 1;
    }
  }
  // Target not found.
  return -1;
};
