var compileModules = require('broccoli-es6-module-transpiler');

module.exports = compileModules('lib', {
  formatter: 'commonjs',
  output: 'app.cjs.js'
});
