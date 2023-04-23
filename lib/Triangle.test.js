const Triangle = require("./Triangleshape.js");

//FROM README FILE -- The following example test should pass:
describe("Triangle", () => {
  it("should return an SVG file that matches the criteria", () => {
    const triangle = new Triangle("blue", "red", "ABC");
    expect(triangle.render())
      .toBe(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182"fill="blue" /> <text x="148" y="165" font-size="60" text-anchor="middle" fill="red">ABC</text> </svg>`);
  });
});

