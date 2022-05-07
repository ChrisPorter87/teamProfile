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
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h2>${templateData.teammemberName}</h2>
    <h2>${templateData.email}</h2>
    <h3>${templateData.position}</h3>
  </body>
  </html>`;
  };
};
// module.exports = generateText;
generateText("test");
