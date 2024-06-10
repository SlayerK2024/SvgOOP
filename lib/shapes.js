class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    svgString() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    svgString() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    svgString() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  
