const Circle = require('./Circleshape.js');
const Square = require('./Squareshape.js');
const Triangle = require('./Triangleshape.js');

function selection(res) {
  console.log(res);
  if (res.shape === "Circle") {
    let userShape = new Circle(res.shapeColour, res.textColour, res.text);
    return userShape.render();
  }

  if (res.shape === "Square") {
    let userShape = new Square(res.shapeColour, res.textColour, res.text);
    return userShape.render();
  }

  if (res.shape === "Triangle") {
    let userShape = new Triangle(res.shapeColour, res.textColour, res.text);
    return userShape.render();
  }
}

module.exports = selection;
//module.exports = {selection, Triangle, Circle, Rectangle}
//module.exports = Shape;
