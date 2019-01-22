const fs = require('fs')

function writeToFile(text, fileName) {
  fs.writeFileSync(__dirname + fileName, text)
}

module.exports = writeToFile
