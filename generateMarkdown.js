// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '![MIT]';

  }else if(license === "BSD"){
    return '![BSD]';
  }
  else if(license === "GPL"){
    return '![GPL]';
  }
  else {
    return 'No License available';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return '(https://choosealicense.com/licenses/mit/)';

  }else if(license === "BSD"){
    return '(https://choosealicense.com/licenses/bsd-2-clause/)';
  }
  else if(license === "GPL"){
    return '(https://choosealicense.com/licenses/bsd-2-clause/)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseChoice = data.license_information.toString()
  return `# ${data.project_title}

## Description
${data.description}

## Table of Contents
-[Installation](#installation) \n
-[Usage](#usage)\n
-[Contributions](#contributions)\n
-[Test](#test)\n
-[License](#license)\n
-[Questions](#questions)\n

## Installation
${data.install_instrcutions}

## Usage
${data.usage_information}

## Contributions
${data.contributions}

## Test
${data.test_information}

## License
${renderLicenseBadge(license)} ${renderLicenseLink(licenseChoice)} 

${renderLicenseSection(license)}

## Questions
GitHub: https://github.com/${data.github}\n
Contact Me: ${data.email}\n
`;
}

module.exports = generateMarkdown;
