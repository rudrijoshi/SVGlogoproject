const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');
const {Circle, Triangle, Square} = require("./lib/shape");
const question = [{
        type: 'input',
        name: 'text',
        message: 'Please enter 3 character',
        validate: (text) => {
            if (text.length > 3 && text.length < 1) {
                console.error('Text must not exceed 3 characters.');
            } else {
                return true;
            }
        }

    },
    {
        type: 'list',
        name: 'color',
        message: 'Please enter the text color',
        choices: ['green', 'yellow', 'red', 'orange'],
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose one of the shape from the list',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'list',
        name: 'shapecolor',
        message: 'Please enter the shape color',
        choices: ['red', 'yellow', 'green'],
    },
    ];
    inquirer.prompt(question).then((answers) => {
        let myObject;
        switch (answers.shape) {
            case "triangle":
                myObject = new Triangle();
                myObject.setcolor(answers.shapecolor);
                break;
            case "circle":
                myObject = new Circle();
                myObject.setcolor(answers.shapecolor);
                break;
            case "square":
                myObject = new Square();
                myObject.setcolor(answers.shapecolor);
                break;
        }
        const nSVG =new SVG();
        nSVG.setShape(myObject);
        nSVG.setText(answers.text, answers.color);
        fs.writeFile('logo.svg', nSVG.render(), (error) => 
     error ? console.log(error) : console.log('Generated logo.svg')
        );
    });
