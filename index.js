// Setting up dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt with questions to append to README.md
function promptUser() {
    return inquirer.prompt([
        // prompt object array
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? ",
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description about your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions for your project, if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended usage guidance for this project? "
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for this project: ",
            choices: [
                "Apache 2.0 License",
                "GNU GPL v3",
                "MIT",
                "Mozilla Public License 2.0",
                "None"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Include any additional contributors: "
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any test instructions for this project: "
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
        {
            type: "input",
            name: "projectRepoLink",
            message: "Please include a link to your project repo: "
        },
        {
            type: "input",
            name: "projectWebPageLink",
            message: "Please include a link to your project deployed application: "
        },
    ]);
}

// Async function utilizing util.promisify
async function init() {
    try {
        // Prompt user with questions and append the responses to readme.js
        const responses = await promptUser();
        const exportContent = generateMarkdown(responses);
        // Write README.md to export directory if successful
        await writeFileAsync('./export/README.md', exportContent);
        console.log('Successfully added to README.md');
        // otherwise display an error
    } catch (err) {
        console.log(err);
    }
}

init();  