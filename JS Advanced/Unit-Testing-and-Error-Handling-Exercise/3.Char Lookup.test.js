const lookupChar = require("./3.Char Lookup");
const { assert } = require("chai");

describe('lookupChar function test', () => {
   it('return char at index', () => {
      assert(lookupChar('Love', 1) === 'o')
   });
   it('return char at index', () => {
      assert(lookupChar('L', 0) === 'L')
   });
   it('index over the string length', () => {
      assert(lookupChar('Love', 10) === 'Incorrect index')
   });
   it('negative string index', () => {
      assert(lookupChar('Love', -10) === 'Incorrect index')
   });
   it('Empty string as input', () => {
      assert(lookupChar('', 0) === 'Incorrect index')
   });
   it('return undefined if first parameter is not string', () => {
      assert(lookupChar(100, -10) === undefined)
   });
   it('return undefined with string first parameter and decimal second', () => {
      assert(lookupChar('100', 10.5) === undefined)
   });
   it('return undefined with wrong parameters type', () => {
      assert(lookupChar(100, "10.4") === undefined)
   });
});