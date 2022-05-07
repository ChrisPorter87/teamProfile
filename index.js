const inquirer = require("inquirer");
const fs = require("fs");
const staff = [];
const { writeFile } = require("./generateHTML");

const generateHTML = require("./htmlTemplate");
const internal = require("stream");
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "teammemberName",
            message: "Please enter the team member's name(Required)",
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
            type: "input",
            name: "email",
            message: "Please enter the manager's email address",
        },
        {
            type: "list",
            name: "position",
            message: "Please enter the manager's email address",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the manager's id",
        }.then(function ({ teammemberName, position, id, email }) {
            let positionInfo = "";
            if (position === "Engineer") {
                positionInfo = "Github Profile Link";
            } else if (position === "Intern") {
                positionInfo = "school name"
            } else {
                positionInfo = "office phone number"
            }
            inquirer.prompt([{
                message: `Enter team member's ${positionInfo}`,
                name: "positionInfo"
            },
            {
                type: "list",
                message: "Would you like to add an intern or an engineer?",
                choices: [
                    "Engineer, Intern"
                ],
                name: "newMember"
            }
            ])
                .then(function ({ positionInfo, newMember }) {
                    let moreMember;
                    if (position === "Engineer") {
                        moreMember = new Engineer(teammemberName, id, email, positionInfo)
                    } else if (position === "Intern") {
                        moreMember = new internal(teammemberName, id, email, positionInfo);
                    } else {
                        moreMember = "Manager"(teammemberName, id, email, positionInfo);
                    
                    }
                    staff.push(moreMember);
                  
                })

            // {
            //   type: "input",
            //   name: "githubName",
            //   message: "Please enter the link to the team member's Github Profile",
            //   validate: (githubNameInput) => {
            //     if (githubNameInput) {
            //       return true;
            //     } else {
            //       console.log("Please enter your team member's Github profile link!");
            //       return false;
            //     }
            //   },
            // },
        ])

};

// .then(function ({ teammemberName, email, id, position, githubName}) {

// })

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
