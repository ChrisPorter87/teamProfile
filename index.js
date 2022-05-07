const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const { writeFile } = require("./generateHTML");

const generateHTML = require("./htmlTemplate");
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "teammemberName",
      message: "Please enter your team member's name? (Required)",
      validate: (teamMemberNameInput) => {
        if (teamMemberNameInput) {
          return true;
        } else {
          console.log("Please enter your team member's name!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "position",
      message: "Please select the team member's position",
      choices: ["Manager", "Intern", "Engineer", "Employee"],
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the team member's email address",
    },
  ]);
};

promptUser()
  .then((templateData) => {
    return generateHTML(templateData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
