const createTestRailScript = require('../createTestRailScript')

test('createTestRailScript returns returns string of script', () => {
  const data = {
    name: 'foo',
    description: 'bar',
    author: 'baz',
    version: '1.0.0',
    includes: 'var/bar',
    excludes: 'buzz',
    jsPath: 'src/__tests__/examples/example.js',
    cssPath: 'src/__tests__/examples/example.css',
  }
  const response = createTestRailScript(data)

  const expectedScript = `
name: foo
description: bar
author: baz
version: 1.0.0
includes: var/bar
excludes: buzz

js:
function test() {
  return true;
}


css:
.lsoverlay {
  position: fixed;
  display: flex;
}

`
  expect(response).toBe(expectedScript)
})
