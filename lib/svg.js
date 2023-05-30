class SVG {
    constructor(){
        this.text="";
        this.shapeEl="";
    }
    render() {
        return `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.text}</svg>`;
    }
    setText(msg, color){
        if(msg.length > 3){
            throw new Error("Text must not exceed 3 characters.");
        }
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${msg}</text>`;
    }
    setShape(shape) {
        this.shapeEl = shape.render();
    }
};
module.exports = SVG;