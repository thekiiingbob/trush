#!/usr/bin/env node

const commandLineArgs = require('command-line-args')
const createTestRailScript = require('./src/createTestRailScript')
const writeToFile = require('./src/writeToFile')

const optionDefinitions = [
  {name: 'config', alias: 'c', type: String},
  {
    name: 'output',
    alias: 'o',
    type: String,
    defaultValue: 'testRailUIScript.txt',
  },
]

const options = commandLineArgs(optionDefinitions)
const configPath = __dirname + '/' + options.config
const config = require(configPath)
const script = createTestRailScript(config)
writeToFile(script, options.output)

console.log('Testrail script written to', options.output)
