var process = require('process');
var benchmark = require('benchmark');
var _ = require('lodash');

if (typeof window !== 'undefined') {
  benchmark = benchmark.runInContext({_, process});
  window.Benchmark = benchmark;
}

module.exports = function suite(name) {
  var suite = new benchmark.Suite(name);

  suite
    .on('cycle', function cycle(e) {
      if (!e.target.aborted) {
        console.log('    ' + String(e.target));
      }
    })
    .on('error', function (e) {
      console.log(String(e.target.name) + ' ' + String(e.target.error));
    })
    .on('complete', function () {
      if (this.length > 1) {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
      }
    });

  return suite;
};
