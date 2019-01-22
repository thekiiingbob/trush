const fs = require('fs')

function writeToFile(text, fileName) {
  fs.writeFileSync(fileName, text)
}

module.exports = writeToFile
