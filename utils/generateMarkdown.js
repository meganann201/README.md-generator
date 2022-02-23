
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />


  ## Description 
  *The what, why, and how:* 
  ${data.description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
 
  ## Installation
  *Steps required to install project and how to get the development environment running:*
   ${data.installation}
  

  ## Usage 
  *Instructions and examples for use:*
   ${data.usage}

  ## Acknowledgments
  ${data.credits}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 
  

  ## Contributing
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  *If you have any questions feel free to reach out*
  - 📫 [Email](mailto:${data.email})
  - 👾 [GitHub Link](https://github.com/${data.username})
`
}

module.exports = generateMarkdown;
