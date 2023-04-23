const Shape = require("./Shapeclass.js")

class Square extends Shape {
    constructor(colour, textColour, text) {
      super(colour, textColour, text);
    }
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="80" width="150" height="150" fill="${this.colour}" /><text x="155" y="96" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text> </svg>`;
    }
  }

  module.exports = Square