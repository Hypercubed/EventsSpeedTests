var process = require('process');
var benchmark = require('benchmark');
var _ = require('lodash');

if (typeof window !== 'undefined') {
  benchmark = benchmark.runInContext({_, process});
  window.Benchmark = benchmark;
}

console.log('#', benchmark.platform.description);

module.exports = function suite(name) {
  var suite = new benchmark.Suite(name);

  suite
    .on('start', function cycle() {
      console.log('\n##', this.name);
    })
    .on('cycle', function cycle(e) {
      if (!e.target.aborted) {
        console.log('    ' + String(e.target));
      }
    })
    .on('error', function (e) {
      console.log(String(e.target.name) + ' ' + String(e.target.error));
    })
    .on('complete', function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

  return suite;
};
