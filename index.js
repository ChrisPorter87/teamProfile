const inquirer = require("inquirer");
const fs = require("fs");
const staff = [];
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
function startPage() {
  headerHtml();
  promptUser();
}
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
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
        message: "Please enter the team member's email address",
      },
      {
        type: "list",
        name: "role",
        message: "Please choose the employee's role",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Enter the team member's id number",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let positionInfo = "";
      if (role === "Engineer") {
        positionInfo = "Github Profile Link";
      } else if (role === "Intern") {
        positionInfo = "school name";
      } else {
        positionInfo = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${positionInfo}`,
            name: "positionInfo",
          },
          {
            type: "list",
            message: "Would you like to add another team member?",
            choices: ["yes", "no"],
            name: "newMember",
          },
        ])
        .then(function ({ positionInfo, newMember }) {
          let moreMember;
          if (role === "Engineer") {
            moreMember = new Engineer(name, id, email, positionInfo);
          } else if (role === "Intern") {
            moreMember = new Intern(name, id, email, positionInfo);
          } else {
            moreMember = new Manager(name, id, email, positionInfo);
          }
          staff.push(moreMember);
          addMembers(moreMember).then(function () {
            if (newMember === "yes") {
              promptUser();
            } else {
              finishPage();
            }
          });
        });
    });
}
function headerHtml() {
  const html = `<!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />
    <title>Team Profile</title>
  </head>

  <body>
  <header><nav class="teal lighten-2">
         <span class="brand-logo center">My Team</span>
      </nav>
   </header>
   <div class="col m4">`;
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("begin page");
}

function addMembers(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let text = "";
    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      text = `
      <div class="card light-blue darken-3">
         <div class="card-header white-text center-align">
            <h4>${name}</h4>
            <h5>Manager</h5>
         </div>
         <div class="card-content teal lighten-2">
            <p class="id">ID: ${id}</p>
            <p class="email">Email: <a href= "mailto:${email}">${email}</a></p>
            <p class= "officeNumber"> Office Number: ${officeNumber}</p>
         </div>
      </div>
   </div>`;
    } else if (role === "Engineer") {
      const gitHub = member.getGithub();
      text = `
  <div class="col m4">
      <div class="card light-blue darken-3">
         <div class="card-header white-text center-align">
            <h4>${name}</h4>
            <h5>Engineer</h5>
         </div>
         <div class="card-content deep-purple accent-1">
            <p class="id">ID: ${id}</p>
            <p class="email">Email: <a href= "mailto:${email}">${email}</a></p>
            <p class="github">GitHub: <a href=${gitHub} target="_blank">${gitHub}</a></p>
         </div>
      </div>
   </div>`;
    } else {
      const school = member.getSchool();
      text = `
    <div class="col m4">
      <div class="card green darken-4">
        <div class="card-header amber-text center-align">
          <h4>${name}</h4>
          <h5>Intern</h5>
        </div>
        <div class="card-content orange darken-4">
          <p class="id">ID: ${id}</p>
          <p class="email">
            Email: <a href="mailto:${email}">${email}</a>
          </p>
          <p class="school">
            School:
            
              ${school}
            
          </p>
        </div>
      </div>
    </div>`;
    }
    fs.appendFile("./dist/index.html", text, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function finishPage() {
  const html = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
  </html>`;
  fs.appendFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

// .then(function ({ teammemberName, email, id, position, githubName}) {

// })

startPage();
