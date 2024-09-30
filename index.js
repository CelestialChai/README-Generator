// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
        name: 'title',
        message: 'Project README name',
    },
    {   type: 'input',
        name: 'description',
        message: 'Insert project description',
    },
    {   type: 'input',
        name: 'installation',
        message: 'What command is used to install dependencies?',
        default: 'npm install',
    },
    {   type: 'input',
        name: 'usage',
        message: 'How do you use the application?',
    },
    {   type: 'input',
        name: 'contributing',
        message: 'Who are the contributors to the project?',
    },
    {   type: 'input',
        name: 'tests',
        message: 'What command is used to run test?',
        default: 'npm test',
    },
    {   type: 'list',
        name: 'license',
        message: 'What type of license will be used?',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
    },
    {   type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {   type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

//create the readme template style here

function generateReadme(answers) {
    return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributing)
  - [Run Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ${renderLicenseBadge(answers.license)}

  ## Installation
  =========
  ${answers.installation}
  =========

  ## Usage
  ${answers.usage}

  ## License
  This project is licensed under the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ========
  ${answers.tests}
  ========

  ## Questions
  If you have any questions, you can find me on [GitHub](https://github.com/${answers.github}) or contact me via email at ${answers.email}.
    `;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`Success! ${fileName} has been generated.`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    });
  }

// Function call to initialize app
init();

// license information

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === 'None') {
        return '';
    }

    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'GPLv3':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'Apache 2.0':
            return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        default:
            return '';
    }
}


  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license || license === 'None') {
      return '';
    }
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT'
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0'
      case 'Apache 2.0':
        return 'https://www.apache.org/licenses/LICENSE-2.0'
    default:
        return '';
    }
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license || license === 'None') {
      return '';
    }

    const licenseLink = renderLicenseLink(license);

    return `## License

  This project is licensed under the ${license} License. You can read more about it [here](${licenseLink}).
    `;
  }
