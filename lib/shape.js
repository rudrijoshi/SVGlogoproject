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
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    render() {
        return`<rect x="80" y="50" width="105" height="105" fill="${this.color}"/>`
    }
}
class Circle extends Shape {
    render(){
        return`<circle cx="50" cy="50" r="40" fill="${this.color}"/>`
    }
}
module.exports = {Circle, Triangle, Square};