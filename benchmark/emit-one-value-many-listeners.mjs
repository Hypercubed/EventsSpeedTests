import suite from 'chuhai';
import test from 'tape';
import {
  maxTime,
  minSamples,
  createInstances,
  addHandles,
} from '../shared/index.mjs';

test('emit one value - many listeners', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var called = null;
    var N = 10;
    var started;

    var handles = Array.apply(null, Array(N)).map(function () {
      return function (a) {
        if (!started) {
          // ignore calls before benchmarks start
          return;
        }
        if (arguments.length > 2 || a !== 'bar') {
          throw new Error('invalid arguments');
        }
        called++;
      };
    });

    var subjects = createInstances();
    addHandles(subjects, handles);
    started = true;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, N, e.target.name + ' called handles N times');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      for (var i = 0; i < 10; i++) {
        handles[i]('bar');
      }
    });

    s.bench('EventEmitter', function () {
      called = 0;
      subjects.ee1.emit('foo', 'bar');
    });
    s.bench('EventEmitter2', function () {
      called = 0;
      subjects.ee2.emit('foo', 'bar');
    });
    s.bench('EventEmitter3', function () {
      called = 0;
      subjects.ee3.emit('foo', 'bar');
    });
    s.bench('rxjs Subject', function () {
      called = 0;
      subjects.subject.next('bar');
    });
    s.bench('ReactiveProperty', function () {
      called = 0;
      subjects.reactiveProperty('bar');
    });
    s.bench('JS-Signals', function () {
      called = 0;
      subjects.signal.dispatch('bar');
    });
    s.bench('MiniSignals', function () {
      called = 0;
      subjects.miniSignal.dispatch('bar');
    });
    s.bench('signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit('bar');
    });
    s.bench('event-signal', function () {
      called = 0;
      subjects.eventSignal.emit('bar');
    });
    s.bench('signal-lite', function () {
      called = 0;
      subjects.signalLite.broadcast('bar');
    });
    s.bench('minivents', function () {
      called = 0;
      subjects.miniVent.emit('foo', 'bar');
    });
    s.bench('evee', function () {
      called = 0;
      subjects.evee.emit('foo', 'bar');
    });
  });
});
