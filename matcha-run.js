var matcha = require('matcha');
var Interface = require('matcha/lib/matcha/interface');

var suite = new matcha.Suite();

new Interface(suite, {
  style: 'bdd'
});

var reporter = require('./markdown-reporter');

suite.emit('pre-require');

suite.emit('require', require('./benchmark/emit'));
suite.emit('require', require('./benchmark/emit-one'));
suite.emit('require', require('./benchmark/emit-bound'));
suite.emit('require', require('./benchmark/emit-many'));
suite.emit('require', require('./benchmark/emit-large'));
suite.emit('require', require('./benchmark/emit-arrays'));
suite.emit('require', require('./benchmark/emit-objects'));
suite.emit('require', require('./benchmark/init'));
suite.emit('require', require('./benchmark/add-remove'));

run(suite, function () {

});

function run(suite, cb) {
  var runner = new matcha.Runner(suite);
  reporter(runner, matcha.utils);
  runner.run(cb);
}
