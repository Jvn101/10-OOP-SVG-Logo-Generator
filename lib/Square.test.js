const Square = require("./Squareshape.js");

//FROM README FILE -- The following example test should pass:
describe("Square", () => {
  it("should return an SVG file that matches the criteria", () => {
    const square = new Square("blue", "red", "ABC");
    expect(square.render())
      .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="80" width="150" height="150" fill="blue" /><text x="155" y="96" font-size="60" text-anchor="middle" fill="red">ABC</text> </svg>`);
  });
});
