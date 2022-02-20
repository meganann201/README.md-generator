// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => 
    inquirer.prompt([
        {
          type: "input",
          name: "author",
          message: "What is the author's name?" 
        },
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?"
          },
          {
            type: "input",
            name: "title",
            message: "What is your project's title?"
          },
          {
            type: "input",
            name: "description",
            message: "Enter a description about your project."
          },
          {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?"
          },
          {
            type: "input",
            name: "installation",
            message: "What command should be ran to install dependencies?"
          },
          {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?"
          }
    ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
