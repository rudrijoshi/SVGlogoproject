const {Circle, Triangle, Square} = require('./shape');
describe("Triangle", ()=> {
    test("should render svg for a blue polygon element", () => {
        const expected = 
        `<polygon points="140, 18 295, 182 25, 182" fill="blue"/>`;
        const triangle = new Triangle();
        triangle.setcolor("blue");
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor parameter", ()=> {
        const expected  =  `<polygon points="140, 18 295, 182 25, 182" fill="blue"/>`;
        const triangle = new Triangle();
        triangle.setcolor("blue");
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
});

describe("Circle", () => {
    test("should render svg for a blue circle element", () => {
        const expected = `<circle cx="150" cy="110" r="90" fill="blue"/>`;
        const circle = new Circle();
        circle.setcolor("blue");
        const actual = circle.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor paramter", () => {
        const expected = `<circle cx="150" cy="110" r="90" fill="blue"/>`;
        const circle = new Circle();
        circle.setcolor("blue");
        const actual = circle.render();
        expect(actual).toEqual(expected);
    });
});

describe("Square", () => {
    test("should render svg for a green square", () => {
        const expected=`<rect x="70" y="30" width="150" height="150" fill="green"/>`;
        const square = new Square();
        square.setcolor("green");
        const actual =square.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor parameter", () => {
        const expected = `<rect x="70" y="30" width="150" height="150" fill="green"/>`;
        const square = new Square();
        square.setcolor("green");
        const actual = square.render();
        expect(actual).toEqual(expected);
    });
});
