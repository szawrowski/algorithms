/**
 * @fileoverview Extended array methods.
 * @author szawrowski
 * @license MIT
 */

/**
 * Swaps two elements in an array at the specified indices.
 *
 * @param i1 The index of the first element to swap.
 * @param i2 The index of the second element to swap.
 * @throws {Error} If either index is out of bounds.
 * @returns The modified array with the elements swapped.
 */
Array.prototype.swap = function (i1, i2) {
  if (i1 < 0 || i1 >= this.length || i2 < 0 || i2 >= this.length) {
    throw new Error('Index out of bounds');
  }
  [this[i1], this[i2]] = [this[i2], this[i1]];
  return this;
};
