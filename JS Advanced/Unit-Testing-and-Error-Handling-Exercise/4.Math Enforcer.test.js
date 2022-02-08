const mathEnforcer = require("./4.Math Enforcer");
const { assert } = require("chai");

describe("mathEnforcer function tests", () => {
  describe("addFive function tests", () => {
    //test with incorrect input
    it("Should return undefined with string", () => {
      assert(mathEnforcer.addFive("test") === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.addFive(null) === undefined);
    });
    //test with correct input
    it("positive integer +5", () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it("negative number +5", () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });
    it("decimal number +5", () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });
  });
  describe("substract function tests", () => {
    //test with incorrect input
    it("Should return undefined with string", () => {
      assert(mathEnforcer.subtractTen("test") === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.subtractTen([]) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.subtractTen(null) === undefined);
    });
    //test with correct input
    it("positive integer number -10", () => {
      assert(mathEnforcer.subtractTen(5) === -5);
    });
    it("negative number -10", () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });
    it("decimal number -10", () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });
  describe("sum function tests", () => {
    //test with correct input
    it("two positive integer numbers", () => {
      assert(mathEnforcer.sum(2, 3) === 5);
    });
    it("two negative integer numbers", () => {
      assert(mathEnforcer.sum(-2, -3.5) === -5.5);
    });
    it("two decimal numbers", () => {
      assert(mathEnforcer.sum(-2.5, -3.5) === -6);
    });
    //test with incorrect input
    it("first parameter string, second num", () => {
      assert(mathEnforcer.sum("love", -3.5) === undefined);
    });
    it("second parameter string, first num", () => {
      assert(mathEnforcer.sum(3, "love") === undefined);
    });
  });
});
