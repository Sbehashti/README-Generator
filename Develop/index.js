// Packages needed
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of Questions 
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please Enter The Name For Your Project",
    },
    {
        type:"input",
        name:"description",
        message:"Write A Description Of Your Project That Includes Purpose And Functionality",
    },
    {
        type:"input",
        name:"screenshot",
        message:"Provide A Path To The Image/Screenshot of the Deployed Page",
    },
    {
        type:"input",
        name:"link",
        message:"Provide the URL for the Deployed Application",
    },
    {
        type:"checkbox",
        name:"license",
        message:"Select Which License You Wish To Add to This Project",
        choices:["MIT","Apache 2.0","Unlicense","Mozilla Public 2.0","Eclipse Public 2.0","GNU General Public 3.0","Boost Software"],
    },
    {
        type:"input",
        name:"require",
        message:"List Any and All Project Dependencies",
    },
    {
        type:"input",
        name:"usage",
        message:"State Languages And Technologies Associated With Your Project",
    },
    {
        type:"input",
        name:"name",
        message:"Enter Your Full Name",
    },
    {
        type:"input",
        name:"creator",
        message:"Enter Your Github Username",
    },
    {
        type:"input",
        name:"email",
        message:"Enter A Valid Email Address",
    },
    {
        type:"input",
        name:"contributors",
        message:"List Any and All Contributors, Using Their Github Usernames, To Your Project",
    },
    {
        type:"input",
        name:"test",
        message:"Provide A Walkthrough Of Any Tests, If Applicable",
    },
];
// Function for writing README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    });
}
// Function call to initialize app
init();


