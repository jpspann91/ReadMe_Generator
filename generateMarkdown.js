const badges = {
  "GNU AGPLv3": "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
  "GNU GPLv3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
  "GNU LGPLv3": "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
  "Mozilla Public License 2.0":
    "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  "Apache License 2.0":
    "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
  "Boost Software License 1.0":
    "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
  "The Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg",
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseChoice = data.license_information.toString()
  console.log(licenseChoice);
  return `# ${data.project_title}

## Description
${data.description}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Contributions](#contributions)
-[Test](#test)
-[License](#license)
-[Questions](#questions)

## Installation
${data.install_instrcutions}

## Usage
${data.usage_information}

## Contributions
${data.contributions}

## Test
${data.test_information}

## License
![${data.license_information}]${badges[data.license_information]}

## Questions
GitHub: https://github.com/${data.github}\n
Contact Me: ${data.email}\n
`;
}

module.exports = generateMarkdown;
