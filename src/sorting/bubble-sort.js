/**
 * @fileoverview Bubble Sort algorithm.
 * @author szawrowski
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 */

import '@/extensions/array-extensions.js';

/**
 * Sorts an array using the Bubble Sort algorithm.
 *
 * @param array - The array to be sorted. The sorting is done in-place.
 * @returns The original array, now sorted.
 */
export const bubbleSort = array => {
  const length = array.length;
  let swapped;

  for (let i = 0; i < length; i++) {
    swapped = false;

    for (let j = 0; j < length - 1; j++) {
      // Compare adjacent elements and swap if needed
      if (array[j] > array[j + 1]) {
        // Swap elements if they are in the wrong order
        array.swap(j, j + 1);
        swapped = true;
      }
    }
    // Exit early if no elements were swapped in the inner loop
    if (!swapped) {
      break;
    }
  }
  return array;
};
