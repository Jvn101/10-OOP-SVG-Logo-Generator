const Shape = require("./Shapeclass.js")

class Circle extends Shape {
    constructor(colour, textColour, text) {
      super(colour, textColour, text);
      
    }
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="90" fill="${this.shapeColour}" />
          <text x="150" y="122" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text> </svg>`;
    }
  }

module.exports = Circle