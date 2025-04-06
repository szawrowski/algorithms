/**
 * @fileoverview Bubble Sort algorithm.
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 */

/**
 * Sorts an array using the Bubble Sort algorithm.
 *
 * @param arr The array to be sorted.
 * @returns A new sorted array.
 *
 * @example
 * const sorted = bubbleSort([3, 1, 4, 1, 5]);
 * console.log(sorted); // [1, 1, 3, 4, 5]
 */
export const bubbleSort = arr => {
  const data = [...arr];
  const length = data.length;
  let swapped;

  if (length <= 1) {
    return data;
  }
  for (let i = 0; i < length; i++) {
    swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        // Swap elements if they are in the wrong order
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        swapped = true;
      }
    }
    // Exit early if no elements were swapped in the inner loop
    if (!swapped) {
      return data;
    }
  }
  return data;
};
