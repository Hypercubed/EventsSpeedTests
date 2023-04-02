import suite from 'chuhai';
import test from 'tape';
import {
  maxTime,
  minSamples,
  constructors as _constructors,
} from '../shared/index.mjs';

test('init', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var constructors = _constructors;

    var dummy = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.ok(
        typeof dummy === 'object' || typeof dummy === 'function',
        e.target.name + ' constructed an object'
      );
      dummy = null;
    });

    function Dummy() {}

    s.burn('Theoretical max', function () {
      dummy = new Dummy();
    });

    s.bench('EventEmitter', function () {
      dummy = new constructors.Events();
    });

    s.bench('EventEmitter2', function () {
      dummy = new constructors.EventEmitter2();
    });

    s.bench('EventEmitter3', function () {
      dummy = new constructors.EventEmitter3();
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
  });
});
