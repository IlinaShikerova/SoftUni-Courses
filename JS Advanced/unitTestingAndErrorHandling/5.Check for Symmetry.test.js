const { assert } = require("chai");
const isSymmetric = require("./5.Check for Symmetry");

describe("Tests for isSymmetric(arr)", () => {
  describe("Regular cases", () => {
    // odd count - numbers only
    it("should return true on isSymmetric([1,2,1])", () => {
      assert(isSymmetric([1, 2, 1]) === true);
    });

    // even count - numbers only
    it("should return false on isSymmetric([1,2,-1])", () => {
      assert(isSymmetric([1, 2, -1]) === false);
    });

    // odd count - numbers only
    it("should return true on isSymmetric([10,20,20,10])", () => {
      assert(isSymmetric([10, 20, 20, 10]) === true);
    });

    // even count - numbers only
    it("should return false on isSymmetric([10,20,30,10])", () => {
      assert(isSymmetric([10, 20, 30, 10]) === false);
    });

    // odd count - mixed types
    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
      assert(
        isSymmetric([
          "pesho",
          new Date(2016, 8, 15),
          false,
          new Date(2016, 8, 15),
          "pesho",
        ]) === true
      );
    });

    // even count - mixed types
    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
      assert(
        isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"]) === false
      );
    });
  });

  describe("Tests for isSymmetric(arr) - Edge cases", () => {
    // number and string representation of the same number
    it('should return false on isSymmetric(["2",2])', () => {
      assert(isSymmetric(["2", 2]) === false);
    });

    // 1 item
    it("should return true on isSymmetric([2])", () => {
      assert(isSymmetric([2]) === true);
    });

    // []
    it("should return true on isSymmetric([])", () => {
      assert(isSymmetric([]) === true);
    });

    // string instead []
    it('should return false on isSymmetric("hello")', () => {
      assert(isSymmetric("hello") === false);
    });

    // [[], [], []]
    it("should return true on isSymmetric([[1,2], [2], [1,2]])", () => {
      assert(isSymmetric([[1, 2], [2], [1, 2]]) === true);
    });
  });
});
