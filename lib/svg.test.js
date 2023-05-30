const SVG = require('./svg');
test("should rendre 350 by 250 svg element", () => {
    const svg = new SVG();
    const expected = `<svg version="1.1" width="350" height="250" xmlns="http://www.w3.org/2000/svg"></svg>`;
    expect(svg.render()).toEqual(expected);
}) 