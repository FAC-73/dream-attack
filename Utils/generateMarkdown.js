// function to take responses from licence choices and append correct license badges linked from shields.io and include link to license information
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case "Apache 2.0 License":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case "Mozilla":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case "GNU GPL v3":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case "None":
            return ``
    }
}

// function to append responses into html elements using string literals
function generateMarkdown(responses) {
    return `
<h1 align="left">${responses.title}</h1>
  
## 📖 Description
${responses.description}
<br />

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
<br />

## ⚒️ Installation
${responses.installation}
<br />

## 🖥️ Usage
${responses.usage}
<br />

## 🏷️ License
${renderLicenseBadge(responses.license)}
<br />
This application is covered by the ${responses.license} license. 
<br />

## 🙏 Contributing
${responses.contributing}
<br />

## 🧪 Tests
${responses.tests}
<br />

## 💭 Questions
${responses.questions}
<br />

## :octocat: GitHub Username:
[${responses.username}](https://github.com/${responses.username})
<br />

## ✉️ Email me:
[${responses.email}](mailto:${responses.email})
<br />

## 📁 GitHub project repo:
[${responses.projectRepoLink}](${responses.projectRepoLink})
<br />

## 🔗 Deployed application:
[${responses.projectWebPageLink}](${responses.projectWebPageLink})
<br />
`;
}

module.exports = generateMarkdown;