class Shape{
    constructor(){
        this.color = "";
    }
    setcolor (color){
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return`<polygon points="140, 18 295, 182 25, 182" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return`<rect x="70" y="30" width="150" height="150" fill="${this.color}"/>`
    }
}
class Circle extends Shape {
    render(){
        return`<circle cx="150" cy="110" r="90" fill="${this.color}"/>`
    }
}
module.exports = {Circle, Triangle, Square};