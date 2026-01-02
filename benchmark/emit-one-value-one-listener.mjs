import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

test('emit one value - one listener', function (t) {
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
      handle('bar');
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

    s.bench('d3/d3-dispatch', function () {
      called = 0;
      subjects.d3Dispatch.call('foo', null, 'bar');
    });

    s.bench('sethvincent/namespace-emitter', function () {
      called = 0;
      subjects.namespaceEmitter.emit('foo', 'bar');
    });

    s.bench('datavis-tech/reactive-property', function () {
      called = 0;
      subjects.reactiveProperty('bar');
    });

    s.bench('dominictarr/observable', function () {
      called = 0;
      subjects.observable('bar');
    });

    s.bench('Raynos/observ', function () {
      called = 0;
      subjects.observ.set('bar');
    });

    s.bench('reactivex/rxjs Subject', function () {
      called = 0;
      subjects.subject.next('bar');
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

    s.bench('gajus/sister', function () {
      called = 0;
      subjects.sister.trigger('foo', 'bar');
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
    //   fn: async (deferred) => {
    //     called = 0;
    //     await subjects.emittery.emit('foo', 'bar');
    //     deferred.resolve();
    //   }
    // });

    // s.bench('sindresorhus/emittery .emitSerial', {
    //   defer: true,
    //   fn: async (deferred) => {
    //     called = 0;
    //     await subjects.emittery.emitSerial('foo', 'bar');
    //     deferred.resolve();
    //   }
    // });

    function handle(a) {
      if (!subjects) return;
      // if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
      //   throw new Error('invalid arguments ' + a);
      // }
      if (a !== 'bar') {
        throw new Error('invalid arguments ' + a);
      }
      called++;
    }
  });
});
