## T.R.U.S.H.

TestRail UI Script Helper

This small tool allows you to store your js and css files for TestRail UI scripts in separate files (so you can leverage your editor like a sane person), and then generate the UI Script file base off of a config file.

Config file needs to be a JS Module with the following format:

```js
module.exports = {
  name: 'foo',
  description: 'bar',
  author: 'baz',
  version: '1.0.0',
  includes: 'var/bar',
  excludes: 'buzz',
  jsPath: 'example.js',
  cssPath: 'example.css',
}
```

`npx github:thekiiingbob/trush --config path/to/testrail.config.js` will generate the file.

`--output` if you want to specify the output file, otherwise it'll be `testrail-ui-script.txt`
