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

const badgesDescription = {
  "GNU AGPLv3": "https://choosealicense.com/licenses/agpl-3.0/",
  "GNU GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
  "GNU LGPLv3": "https://choosealicense.com/licenses/lgpl-3.0/",
  "Mozilla Public License 2.0":
    "https://choosealicense.com/licenses/mpl-2.0/",
  "Apache License 2.0":
    "https://choosealicense.com/licenses/apache-2.0/",
  "MIT License": "https://choosealicense.com/licenses/mit/",
  "Boost Software License 1.0":
    "https://choosealicense.com/licenses/bsl-1.0/",
  "The Unlicense": "https://choosealicense.com/licenses/unlicense/",
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseChoice = data.license_information.toString()
  console.log(licenseChoice);
  return `# ${data.project_title}

## Badges
![${data.license_information}](${badges[data.license_information]})

## Description
${data.description}

## Table of Contents
-[Installation](#installation)\n
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
![More License information here](${badgesDescription[data.license_information]})

## Questions
GitHub: https://github.com/${data.github}\n
Contact Me: ${data.email}\n

## Video Walkthrough
THIS TEXT WILL BE REPLACED WITH A URL TO THE VIDEO WALKTHROUGH
`;
}

module.exports = generateMarkdown;
