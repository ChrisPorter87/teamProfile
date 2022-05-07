const { createReadMeModule } = require("inquirer");
const generateText = (aboutText) => {
  if (!aboutText) {
    return "";
  }
  module.exports = (templateData) => {
    console.log("TEMPLATE DATA", templateData);
    return `<!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />
    <title>Portfolio Demo</title>
  </head>

  <body>
  <header><nav class="teal lighten-2">
         <span class="brand-logo center">My Team</span>
      </nav>
   </header>
    <h2>${templateData.teammemberName}</h2>
    <a href="mailto:${templateData.email}">${templateData.email}</a>
    <h3>${templateData.position}</h3>
    <h3>${templateData.id}</h3>
    <a href="${templateData.githubName}" target="_blank">GitHub</a> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
  </html>`;
  };
};
// module.exports = generateText;
generateText("test");
