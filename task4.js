/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = array => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }

  return obj;
};

const fromPairsReduce = array => {
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc[curr[0]] = curr[1];
    }

    return acc;
  }, {});
};

const data = [
  ["a", 1],
  ["b", 2]
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }
console.log(fromPairsReduce(data)); // { 'a': 1, 'b': 2 }
