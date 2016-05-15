var Benchmark = require('benchmark');

// based on https://github.com/JamieMason/karma-benchmark/blob/master/lib/perftacular.js
module.exports = function (suiteName, addAllBenchmarksToSuite, suiteOptions) {
  suiteOptions = suiteOptions || {};

  var currentSuite = new Benchmark.Suite(suiteName, suiteOptions);

  currentSuite
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

  global.benchmark = addBenchmarkToSuite;
  addAllBenchmarksToSuite();

  if (suiteName[0] !== '*') {
    console.log('\n## ' + suiteName);
  }

  currentSuite.run();
  return currentSuite;

  function addBenchmarkToSuite(benchName, benchmark, benchOptions) {
    currentSuite.add(benchName, benchmark, benchOptions);
  }
};

/* module.exports = function suite(name) {
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
}; */
