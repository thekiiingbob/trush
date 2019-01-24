const fs = require('fs')
const path = require('path')

function readFile(filePath) {
  const pathToFile = path.resolve(process.cwd(), filePath)

  return fs.readFileSync(pathToFile, 'utf8').toString()
}

module.exports = readFile
