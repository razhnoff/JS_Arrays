/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
const reverse = array => {
  const arr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }

  return arr;
};

const reverseMap = array => {
  return array.map((item, key, arr) => {
    return arr[arr.length - 1 - key];
  });
};
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
console.log(reverseMap(data)); // [3, 2, 1]
