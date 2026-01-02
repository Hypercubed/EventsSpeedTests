import suite from 'chuhai';
import test from 'tape';
import {
  maxTime,
  minSamples,
  createInstancesOn
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
        if (!started) return; // ignore calls before benchmarks start

        // Some libraries pass more than one argument
        if (arguments.length > 5 || a !== 'bar') throw new Error('invalid arguments');
        called++;
      };
    });

    var subjects = createInstancesOn('foo', ...handles);
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

    s.bench('node:events', function () {
      called = 0;
      subjects.ee.emit('foo', 'bar');
    });
    s.bench('hij1nx/EventEmitter2', function () {
      called = 0;
      subjects.ee2.emit('foo', 'bar');
    });
    s.bench('primus/eventemitter3', function () {
      called = 0;
      subjects.ee3.emit('foo', 'bar');
    });
    s.bench('reactivex/rxjs Subject', function () {
      called = 0;
      subjects.subject.next('bar');
    });
    s.bench('datavis-tech/reactive-property', function () {
      called = 0;
      subjects.reactiveProperty('bar');
    });
    s.bench('millermedeiros/js-signals', function () {
      called = 0;
      subjects.signal.dispatch('bar');
    });
    s.bench('Hypercubed/mini-signals', function () {
      called = 0;
      subjects.miniSignal.dispatch('bar');
    });
    s.bench('jasonkarns/signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit('bar');
    });
    s.bench('r-park/event-signal', function () {
      called = 0;
      subjects.eventSignal.emit('bar');
    });
    s.bench('CaptainN/SignalsLite.js', function () {
      called = 0;
      subjects.signalLite.broadcast('bar');
    });
    s.bench('allouis/minivents', function () {
      called = 0;
      subjects.miniVent.emit('foo', 'bar');
    });
    s.bench('SplittyDev/evee.js', function () {
      called = 0;
      subjects.evee.emit('foo', 'bar');
    });
    s.bench('JacobFischer/ts-typed-events', function () {
      called = 0;
      subjects.tsTypedEvents.emit('bar');
    });
    s.bench('developit/mitt', function () {
      called = 0;
      subjects.mitt.emit('foo', 'bar');
    });
    s.bench('Morglod/tseep', function () {
      called = 0;
      subjects.tseep.emit('foo', 'bar');
    });
    s.bench('garronej/evt', function () {
      called = 0;
      subjects.evt.post('bar');
    });
    // s.bench('sindresorhus/emittery', {
    //   defer: true,
    //   fn: async function (deferred) {
    //     called = 0;
    //     await subjects.emittery.emit('foo', 'bar');
    //     deferred.resolve();
    //   }
    // });
  });
});
