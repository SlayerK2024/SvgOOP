const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Questions
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3 || 'Input must be up to three characters.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
        validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || 'Please enter a valid color keyword or hexadecimal number.'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape\'s color (keyword or hexadecimal):',
        validate: input => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(input) || 'Please enter a valid color keyword or hexadecimal number.'
      }
];

// Gtenerate the SVG content
function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeSVG = '';

  switch (shape) {
    case 'circle':
      shapeSVG = new Circle(shapeColor).svgString();
      break;
    case 'triangle':
      shapeSVG = new Triangle(shapeColor).svgString();
      break;
    case 'square':
      shapeSVG = new Square(shapeColor).svgString();
      break;
  }

  return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="100" fill="${textColor}">${text}</text>
</svg>
  `;
}

// Prompt the user and generate the SVG
inquirer.prompt(questions).then(answers => {
  const svgContent = generateSVG(answers);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});

