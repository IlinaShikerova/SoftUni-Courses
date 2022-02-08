const { assert } = require("chai");
const rgbToHexColor = require("./6.RGB to Hex");

describe("Convert RGB to hex", () => {
  it('"red", "green", "blue" = undefined', () => {
    assert(rgbToHexColor("red", "green", "blue") === undefined);
  });

  it('"-1", "255", "255" = undefined', () => {
    assert(rgbToHexColor(-1, 255, 255) === undefined);
  });

  it('255, 255, 255 = "#FFFFFF"', () => {
    // white
    assert(rgbToHexColor(255, 255, 255) === "#FFFFFF");
  });

  it('0, 0, 0 = "#000000"', () => {
    // black
    assert(rgbToHexColor(0, 0, 0) === "#000000");
  });

  it('94, 0, 255 = "#5E00FF"', () => {
    assert(rgbToHexColor(94, 0, 255) === "#5E00FF");
  });

  it('"255", 200, "36" = undefined', () => {
    // numbers passed as strings
    assert(rgbToHexColor("255", 200, "36") === undefined);
  });

  it('240, 36, 255 = "#F024FF"', () => {
    assert(rgbToHexColor(240, 36, 255) === "#F024FF");
  });

  it("256, 256, 256 = undefined", () => {
    assert(rgbToHexColor(256, 256, 256) === undefined);
  });

  it("255, 255 = undefined", () => {
    assert(rgbToHexColor(255, 255) === undefined);
  });
});
