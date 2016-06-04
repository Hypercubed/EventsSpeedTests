var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('init', function (t) {
  return suite('init', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var constructors = setup.constructors;

    var dummy = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.ok(typeof dummy === 'object' || typeof dummy === 'function', e.target.name + ' constructed an object');
      dummy = null;
    });

    function Dummy() {}

    s.burn('Theoretical max', function () {
      dummy = new Dummy();
    });

    s.bench('EventEmitter', function () {
      dummy = new constructors.EventEmitter1();
    });

    s.bench('EventEmitter2', function () {
      dummy = new constructors.EventEmitter2();
    });

    s.bench('EventEmitter3', function () {
      dummy = new constructors.EventEmitter3();
    });

    s.bench('DripEmitter', function () {
      dummy = new constructors.DripEmitter();
    });

    s.bench('DripEmitterEnhanced', function () {
      dummy = new constructors.DripEmitterEnhanced();
    });

    s.bench('ReactiveProperty', function () {
      dummy = constructors.reactiveProperty();
    });

    s.bench('JS-Signals', function () {
      dummy = new constructors.Signal();
    });

    s.bench('MiniSignals', function () {
      dummy = new constructors.MiniSignal();
    });

    s.bench('EventDispatcher', function () {
      dummy = new constructors.EventDispatcher();
    });
  });
});
