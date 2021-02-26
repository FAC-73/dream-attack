# Professional README Generator

![Animated GIF of password generator](https://github.com/FAC-73/dream-attack/blob/master/Assets/ReadmeGenerator.gif?raw=true)

Quickly and easily create a README file by using a command-line application to generate one. 
This allows the project creator to devote more time to working on the project. 

Watch the video of the generator [here ](https://github.com/FAC-73/dream-attack/blob/master/Assets/README-generator-video.mov)
<br />

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

A node.js application that prompts a user for input using [inquirer.js ](https://www.npmjs.com/package/inquirer)to populate a README file for a Github repository. The README file is generated and written to a directory called export and can be found [here ](https://github.com/FAC-73/dream-attack/blob/master/export/README.md)
<br />

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

```md
npm init
```
```md
npm install inquirer
```

## Usage
Run the following command at the root of your directory and answer the prompted questions in terminal/bash.

```md
node index.js
```

## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />

## Contributing
[Kay Davis](https://github.com/FAC-73)
<br />

## Built with
- [Javascript](https://www.w3schools.com/jsref/default.asp)
- [Node.js](https://nodejs.org/en/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [JSON](https://www.json.org/json-en.html)

## Questions?

### GitHub Username:
[FAC-73](https://github.com/FAC-73)

###  ✉️ Email me:
[kaydavis21@googlemail.com](mailto:kaydavis21@googlemail.com)

### 📁 GitHub project repo:
[https://github.com/FAC-73/dream-attack](https://github.com/FAC-73/dream-attack)

### 🔗 Deployed application:
[https://github.com/FAC-73/dream-attack](https://github.com/FAC-73/dream-attack)
