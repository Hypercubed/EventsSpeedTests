var process = require('process');
var benchmark = require('benchmark');
var _ = require('lodash');

if (typeof window !== 'undefined') {
  benchmark = benchmark.runInContext({_, process});
  window.Benchmark = benchmark;
}

console.log('#', benchmark.platform.description);
