//badges object to hold the badge images and names
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
//badges description object that holds a link to a page for more information on the license
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
  const linkToArray = data.youtube_link.split('');
  const equalIndex = linkToArray.indexOf('=');
  const linkHook = linkToArray.splice(equalIndex + 1);
  const arrayToString = linkHook.join('');
  
  
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
${data.install_instructions}

## Usage
${data.usage_information}

## Contributions
${data.contributions}

## Test
${data.test_information}

## License
[License Information Found Here](${badgesDescription[data.license_information]})

## Questions
GitHub: https://github.com/${data.github}\n
Contact Me: ${data.email}\n

## Video Walkthrough
[Screencastify Link](${data.screencastify_link})

[![Watch the video](https://img.youtube.com/vi/${arrayToString}/maxresdefault.jpg)](https://youtu.be/${arrayToString})
`;
}

module.exports = generateMarkdown;
