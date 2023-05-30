const SVG = require('./svg');
const {Triangle} = require('./shape');
test("should render 350 by 250 svg element", () => {
    const svg = new SVG();
    const expected = `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg"></svg>`;
    expect(svg.render()).toEqual(expected);
});
test("should append text element with stated color", () => {
    const svg = new SVG();
    const expected = `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">s</text></svg>`;
    svg.setText('s','green');
    expect(svg.render()).toEqual(expected);
});
test("should render shape elemnt", () => {
    const svg = new SVG();
    const expected =  `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">s</text></svg>`;
    svg.setText('s','green');
    const triangle = new Triangle();
    triangle.setcolor('yellow');
    svg.setShape(triangle);
    expect(svg.render()).toEqual(expected);
});
test("should throw error", () => {
    const svg = new SVG();
    const expected = new Error ("Text must not exceed 3 characters.");
    expect(() => svg.setText("svgrt", "red")).toThrow(expected);
});