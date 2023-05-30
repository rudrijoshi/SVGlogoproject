const {Circle, Triangle, Square} = require('./shape');
describe("Triangle", ()=> {
    test("should render svg for a blue polygon element", () => {
        const expected = 
        `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
        const triangle = new Triangle();
        triangle.setcolor("blue");
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor parameter", ()=> {
        const expected  =  `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
        const triangle = new Triangle();
        triangle.setcolor("blue");
        const actual = triangle.render();
        expect(actual).toEqual(expected);
    });
});

describe("Circle", () => {
    test("should render svg for a blue circle element", () => {
        const expected = `<circle cx="50" cy="50" r="40" fill="blue"/>`;
        const circle = new Circle();
        circle.setcolor("blue");
        const actual = circle.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor paramter", () => {
        const expected = `<circle cx="50" cy="50" r="40" fill="blue"/>`;
        const circle = new Circle();
        circle.setcolor("blue");
        const actual = circle.render();
        expect(actual).toEqual(expected);
    });
});

describe("Square", () => {
    test("should render svg for a green square", () => {
        const expected=`<rect x="80" y="50" width="105" height="105" fill="green"/>`;
        const square = new Square();
        square.setcolor("green");
        const actual =square.render();
        expect(actual).toEqual(expected);
    });
    test("should accept a fillColor parameter", () => {
        const expected = `<rect x="80" y="50" width="105" height="105" fill="green"/>`;
        const square = new Square();
        square.setcolor("green");
        const actual = square.render();
        expect(actual).toEqual(expected);
    });
});
