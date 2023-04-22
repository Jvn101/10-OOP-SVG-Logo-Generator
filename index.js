//packages needed for this application to run
const inquirer = require('inquirer');
const fs = require('fs');
const selection = require('./lib/shapes.js')

//Questions array
const userQuestions = require('./lib/questions.js');

function writeToFile(data) {
    console.log(data)
    fs.writeFile("./logo.svg", selection(data), (err) => err ? console.log(err + "Error!"): console.log("Success! Icon as been created"))
    // fs.writeFile("./examples/logo.svg", `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    // <circle cx="25" cy="75" r="20" fill="blue" />
    // <text x="10" y="10" fill="red">ABC</text> </svg>`, (err) => err && console.log(err + "Error!"))
}
//initalise
function init() {
    inquirer.prompt(userQuestions)
    .then(data => {writeToFile(data)
    })
};

init();

    //.then((answers) => fs.writeFile('logo.svg', svg(answers))//generateHTML(answers)))
      
     // .then(() => console.log('Logo successfully created'))
      //.catch((err) => console.error(err)));
  
  
  //Call init function
  
