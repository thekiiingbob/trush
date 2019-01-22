const readFile = require('../readFile')

test('readFile returns string of file', () => {
  const data = readFile('src/__tests__/examples/readfile.example.js')
  expect(data).toBe('foobarbaz;\n')
})
