const fn = require("./func");
const testData = [1721, 979, 366, 299, 675, 1456];

it("works for test data when n is 2", () => {
  expect(fn(testData, 2)).toEqual(514579);
});

it("works for test data when n is 3", () => {
  expect(fn(testData, 3)).toEqual(241861950);
});
