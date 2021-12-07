// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter in a description for your project?',
      },
      {
        type: 'input',
        name: 'install_instructions',
        message: 'Add steps to install',
      },
      {
        type: 'input',
        name: 'usage_information',
        message: 'What will this app be used for?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'Enter contributions',
      },
      {
        type: 'input',
        name: 'test_information',
        message: 'Enter in any test information.',
      },
      {
        type: 'list',
        message: 'Choose a license',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0","MIT License","Boost Software License 1.0", "The Unlicense"],
        name: 'license_information'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      { 
        type: 'input',
        name: 'screencastify_link',
        message: 'Enter screencastify link'
      },
      {
        type: 'input',
        name: 'youtube_link',
        message: "Enter youtube link for video walkthrough"
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if(err){
        return console.log(err);
      }
      console.log("Success! Your ReadMe has been generated");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>{
            const markdown = generateMarkdown(response);

           writeToFile('README.md', markdown, (err) => {
             err ? console.log(err) : console.log("Successfully created README file");
           })
        })
}

// Function call to initialize app
init();
