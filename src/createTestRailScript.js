const Handlebars = require('handlebars')
const readFile = require('./readFile')

function createTestrailScript(data) {
  console.log('Incoming data: ', data)

  const {
    name: name,
    description: description,
    author: author,
    version: version,
    includes: includes,
    excludes: excludes,
    jsPath: jsPath,
    cssPath: cssPath,
  } = data

  const source = `name: {{name}}
description: {{description}}
author: {{author}}
version: {{version}}
includes: {{includes}}
excludes: {{excludes}}

js:
{{{js}}}

css:
{{{css}}}
`

  const template = Handlebars.compile(source)

  const scriptData = {
    name,
    description,
    author,
    version,
    includes,
    excludes,
    js: readFile(jsPath),
    css: readFile(cssPath),
  }

  console.log('SCRIPT DATA', scriptData)

  return template(scriptData)
}

module.exports = createTestrailScript
