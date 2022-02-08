const isOddOrEven = require("./2.evenOrOdd");
const { assert } = require("chai");

describe("isOddOrEven function test", () => {
  //invalid input test
  it("should return undefined if parameter is number", () => {
    assert.equal(isOddOrEven(10), undefined);
  });
  it("should return undefined if parameter is object", () => {
    assert.equal(isOddOrEven({}), undefined);
  });
  it("should return undefined if parameter is array", () => {
    assert.equal(isOddOrEven([]), undefined);
  });
  it("should return undefined if parameter is undefined", () => {
    assert.equal(isOddOrEven(undefined), undefined);
  });
  //valid input test
  it("should return even as result", () => {
    assert.equal(isOddOrEven("Hi"), "even");
  });
  it("should return odd as result", () => {
    assert.equal(isOddOrEven("Hello"), "odd");
  });
});
