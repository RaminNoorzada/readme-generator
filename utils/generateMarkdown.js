// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[Github license](https:img.//shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '') {
    return `\n * [license] (#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `## License
    This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ## ${data.description}

  ## Table of contents:

  * [Description] (#dsecription)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License](#license)
  * [Contribution] (#contributing)
  * [Test] (#test)
  * [GitHub] (#github)
  * [Email] (#email)
   
  ## Installation
   ${data.installation}

  ## Usage 
   ${data.usage}

  ## License 
   ${data.license}

  ## Contribution
   ${data.contributing}

  ## Test 
   ${data.test}

  ## Contact
  - [github]("https://github.com/${data.github}")
  - [email] ("https://github.com/${data.email}")

  - Proffissional Readme Generator.
`
}

module.exports = generateMarkdown;
