/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
const flatten = array => {
  let flag = false;
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flag = true;
      arr.push(...array[i]);
    } else {
      arr.push(array[i]);
    }
  }
  if (flag) {
    return flatten(arr);
  }

  return arr;
};
const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]
