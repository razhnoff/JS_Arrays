/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
const without = (array, ...args) => {
  return array.filter((item, key, arr) => {
    const result = args.find(value => item === value);
    if (!result) {
      return item;
    }
  });
};
const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]
