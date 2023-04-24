//packages needed for this application to run
const inquirer = require('inquirer');
const fs = require('fs');
const selection = require('./lib/shapes.js')

//Questions array
const userQuestions = require('./lib/questions.js');

function writeToFile(res) {
    fs.writeFile("./logo.svg", selection(res), (err) => err ? console.log(err + "Error!"): console.log("Success! Icon as been created"))
}
//initalise
function init() {
    inquirer.prompt(userQuestions)
    .then(res => {writeToFile(res)
    })
};

 //Call init function
init();


  
 
  
