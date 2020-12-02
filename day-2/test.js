const fn = require("./func");

const testData = [
  ["1-3 a", "abcde"],
  ["1-3 b", "cdefg"],
  ["2-9 c", "ccccccccc"],
];

describe("day 2 part 1", () => {
  it("works for the test data", () => {
    expect(fn(testData, 1)).toEqual(2);
  });
});

describe("day 2 part 2", () => {
  it("works for the test data", () => {
    expect(fn(testData, 2)).toEqual(1);
  });
});
