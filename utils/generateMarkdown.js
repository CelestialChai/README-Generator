// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return ''
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


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
