const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
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

const createPage = (email, position, teammemberName) => {
  const html = `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h2>${teammemberName}</h2>
    <h2>${email}</h2>
    <h3>${position}</h3>
  </body>
  </html>
  `;
  fs.writeFile(
    "./dist/index.html",
    createPage(teammemberName, email, position),
    function (err) {
      if (err) {
        console.log(err);
      }
      console.log(html);
    }
  );
};

promptUser()
  .then(() => {
    return createPage;
  })
  .catch((err) => {
    console.log(err);
  });
