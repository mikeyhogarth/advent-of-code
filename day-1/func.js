const cartesian = require("big-cartesian");
const sumArray = (arr) => arr.reduce((total, num) => total + num);
const multiplyArray = (arr) => arr.reduce((total, num) => total * num);

module.exports = (input, n) => {
  const iterator = cartesian(Array(n).fill(input));

  for (let tuple of iterator) {
    if (sumArray(tuple) === 2020) return multiplyArray(tuple);
  }
};
