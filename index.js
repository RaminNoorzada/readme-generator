// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your application?",
    },
    {
        type: "input",
        name: "useage",
        message: "How to use this application?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license does your application is coverd under?",
        choices: ["MIT", "Apache", "Boost", "BSD"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Is there any contributions?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("Succsess. Your README.md file has been succsessfuly generated.")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const filename = "README.md"
        fs.writeFile(filename, generateMarkdown(data), (err) => err ? console.log(err) : console.log("Success"))
        
    })
}


// Function call to initialize app
init();
