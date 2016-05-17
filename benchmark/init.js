/* global bench, suite */

var subjects = require('../subjects').constructors;

var dummy = '';

function Dummy() {}

suite('init', function () {
  bench('Theoretical max', function () {
    dummy = new Dummy();
  });
});

suite('*init', function () {
  bench('EventEmitter', function () {
    dummy = new subjects.EventEmitter1();
  });
  bench('EventEmitter2', function () {
    dummy = new subjects.EventEmitter2();
  });
  bench('EventEmitter3', function () {
    dummy = new subjects.EventEmitter3();
  });
  bench('ReactiveProperty', function () {
    dummy = subjects.reactiveProperty();
  });
  bench('JS-Signals', function () {
    dummy = new subjects.Signal();
  });
  bench('MiniSignals', function () {
    dummy = new subjects.MiniSignal();
  });
  bench('EventDispatcher', function () {
    dummy = new subjects.EventDispatcher();
  });
});
