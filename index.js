// TODO: Include packages needed for this application
// external packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// internal module
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// Inquirer prompts
const questions = [{
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
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache 2.0", "GPLv2", "GPLv3", "BSD 3-clause"]
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
  },
  {
    type: "input",
    name: "contribute",
    message: "If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so."
  },
  {
    type: "input",
    name: "tests",
    message: "provide examples on how to run tests for your application."
  }
];


prompt = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      let markdown = generateMarkdown(answers)
      console.log(markdown)
      // create markdown file
      writeFile(markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}



// TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('your-README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  prompt();
}

// Function call to initialize app
init();

