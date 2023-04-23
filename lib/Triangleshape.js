const Shape = require("./Shapeclass.js")

class Triangle extends Shape {
    constructor(colour, textColour, text) {
      super(colour, textColour, text);
    }
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182"fill="${this.shapeColour}" />
          <text x="148" y="165" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text> </svg>`;
    }
  }

  module.export = Triangle