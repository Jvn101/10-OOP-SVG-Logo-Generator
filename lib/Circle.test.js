const Circle = require("./Circleshape.js")

//FROM README FILE -- The following example test should pass:
describe("Circle", () => {
  it("should return an SVG file that matches the criteria", () => {
    const circle = new Circle("blue", "red", "ABC");
    expect(circle.render())
      .toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="90" fill="blue" /><text x="150" y="122" font-size="60" text-anchor="middle" fill="red">ABC</text> </svg>`);
  });
});
  