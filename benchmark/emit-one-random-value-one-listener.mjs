import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

test('emit one random value - one listener', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handle);

    var called = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, e.target.name + ' called handle once');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      handle(Math.random());
    });

    s.bench('EventEmitter', function () {
      called = 0;
      subjects.ee1.emit('foo', Math.random());
    });

    s.bench('EventEmitter2', function () {
      called = 0;
      subjects.ee2.emit('foo', Math.random());
    });

    s.bench('EventEmitter3', function () {
      called = 0;
      subjects.ee3.emit('foo', Math.random());
    });

    s.bench('d3-dispatch', function () {
      called = 0;
      subjects.d3Dispatch.call('foo', null, Math.random());
    });

    s.bench('namespace-emitter', function () {
      called = 0;
      subjects.namespaceEmitter.emit('foo', Math.random());
    });

    s.bench('ReactiveProperty', function () {
      called = 0;
      subjects.reactiveProperty(Math.random());
    });

    s.bench('observable', function () {
      called = 0;
      subjects.observable(Math.random());
    });

    s.bench('observ', function () {
      called = 0;
      subjects.observ.set(Math.random());
    });

    s.bench('rxjs Subject', function () {
      called = 0;
      subjects.subject.next(Math.random());
    });

    s.bench('JS-Signals', function () {
      called = 0;
      subjects.signal.dispatch(Math.random());
    });

    s.bench('MiniSignals', function () {
      called = 0;
      subjects.miniSignal.dispatch(Math.random());
    });

    s.bench('signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit(Math.random());
    });

    s.bench('event-signal', function () {
      called = 0;
      subjects.eventSignal.emit(Math.random());
    });

    s.bench('signal-lite', function () {
      called = 0;
      subjects.signalLite.broadcast(Math.random());
    });

    s.bench('minivents', function () {
      called = 0;
      subjects.miniVent.emit('foo', Math.random());
    });

    s.bench('evee', function () {
      called = 0;
      subjects.evee.emit('foo', Math.random());
    });

    function handle(a) {
      if (!subjects) {
        // ignore calls before benchmarks start
        return;
      }
      // if (arguments.length === 0 || arguments.length > 2) {
      //   throw new Error('invalid number of arguments ' + arguments.length);
      // }
      if (typeof a !== 'number') {
        throw new Error('invalid arguments ' + a);
      }
      called++;
    }
  });
});
