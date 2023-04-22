const inquirer = require('inquirer');

const userQuestions = [
    {
        name: 'shape',
        message: 'What shape would you like for your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColour',
        message: 'What colour would you like the selected shape to display?',
        type: 'input',
    },
    {
        name: 'text',
        message: 'Enter the business name to be displayed. Must be less than 3 characters',
        type: 'input',
        validate: (response) => {
            if (response.length > 3) {
                return console.log("\n Error, the business name must be three characters or less");
            }
            return true;
        }
    },
    {
        name: 'textColour',
        message: 'What colour would you like the business name text?: ',
        type: 'input',
    },
]


module.exports = userQuestions;