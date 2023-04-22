// Class constructor for shape object
class Shape {
    constructor (shapeColour, textColour, text) {
    this.shapeColour = shapeColour;
    this.textColour = textColour;
    this.text = text;
    }
}

class Circle extends Shape {
    constructor(colour, textColour, text){
        super(colour, textColour, text,)
        //this.shape = shape
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" fill="${this.shapeColour}" />
        <text x="10" y="10" fill="${this.textColour}">${this.text}</text> </svg>`
    };
}

class Rectangle extends Shape {
    constructor(colour, textColour, text){
        super(colour, textColour, text,)
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.shapeColour}" />
        <text x="10" y="10" fill="${this.textColour}">${this.text}</text> </svg>`
    };
}

class Triangle extends Shape {
    constructor(colour, textColour, text){
        super(colour, textColour, text,)
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182"fill="${this.shapeColour}" />
<text x="10" y="10" fill="${this.textColour}">${this.text}</text> </svg>`
    };
}

function selection(res) {
    console.log(res)
    if (res.shape === 'Circle') {
        let userShape = new Circle (res.shapeColour, res.textColour, res.text)
        return userShape.render()
    }

    if (res.shape === 'Rectangle') {
        let userShape = new Rectangle (res.shapeColour, res.textColour, res.text)
        return userShape.render()
    }

    if (res.shape === 'Triangle') {
        let userShape = new Triangle (res.shapeColour, res.textColour, re.text)
        return userShape.render()
    }
};



module.exports = selection
//module.exports = {selection, Triangle, Circle, Rectangle}
