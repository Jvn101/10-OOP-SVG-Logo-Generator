const {Triangle} = require('./shapes.js')
// Add triangle and shapes in
//FROM README FILE -- The following example test should pass:
const shape = new Triangle("blue", "red", "ABC");

console.log(shape.render(),"\n",`<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182"fill="blue" />
<text x="10" y="10" fill="red">ABC</text> </svg>`)

//shape.setColor("blue");
expect(shape.render()).toBe(`<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182"fill="blue" />
<text x="10" y="10" fill="red">ABC</text> </svg>`);