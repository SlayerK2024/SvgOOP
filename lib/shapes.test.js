const { Circle, Triangle, Square } = require('./shapes');

// Example test for the Circle class
  const Circle = new Circle();
  shape.setColor('#FF5733'); // A color example
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="#FF5733" />');

//Test for the Triangle class
    const Triangle = new Triangle();
    shape.setColor('#123ABC'); // A color example
    expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="#123ABC" />');

  
  // Test for the Square class
    const Square = new Square();
    shape.setColor('#456DEF'); // A color example
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="#456DEF" />');
