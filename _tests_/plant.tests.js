import Template from './../src/js/template.js';

describe('Template', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const template = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});