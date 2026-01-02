import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

test('emit one value - two listeners', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handle, handle2);

    var calls = [];
    var calls2 = [];

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(calls.length, 1, e.target.name + ' called handle once');
      t.equal(calls2.length, 1, e.target.name + ' called handle2 once');

      t.equal(
         JSON.stringify(calls),
        '[["bar"]]',
        e.target.name + ' handle called with correct arguments'
      );
      t.equal(
        JSON.stringify(calls2),
        '[["bar"]]',
        e.target.name + ' handle2 called with correct arguments'
      );

      calls = [];
      calls2 = [];
    });

    s.burn('Theoretical max', function () {
      calls = [];
      calls2 = [];
      handle('bar');
      handle2('bar');
    });

    s.bench('node:events', function () {
      calls = [];
      calls2 = [];
      subjects.ee.emit('foo', 'bar');
    });

    s.bench('hij1nx/EventEmitter2', function () {
      calls = [];
      calls2 = [];
      subjects.ee2.emit('foo', 'bar');
    });

    s.bench('primus/eventemitter3', function () {
      calls = [];
      calls2 = [];
      subjects.ee3.emit('foo', 'bar');
    });

    s.bench('d3/d3-dispatch', function () {
      calls = [];
      calls2 = [];
      subjects.d3Dispatch.call('foo', null, 'bar');
    });

    s.bench('sethvincent/namespace-emitter', function () {
      calls = [];
      calls2 = [];
      subjects.namespaceEmitter.emit('foo', 'bar');
    });

    // s.bench('ReactiveProperty', function () {
    //   calls = [];
    //   calls2 = [];
    //   subjects.reactiveProperty('bar');
    // });

    s.bench('dominictarr/observable', function () {
      calls = [];
      calls2 = [];
      subjects.observable('bar');
    });

    s.bench('Raynos/observ', function () {
      calls = [];
      calls2 = [];
      subjects.observ.set('bar');
    });

    s.bench('reactivex/rxjs Subject', function () {
      calls = [];
      calls2 = [];
      subjects.subject.next('bar');
    });

    s.bench('millermedeiros/js-signals', function () {
      calls = [];
      calls2 = [];
      subjects.signal.dispatch('bar');
    });

    s.bench('Hypercubed/mini-signals', function () {
      calls = [];
      calls2 = [];
      subjects.miniSignal.dispatch('bar');
    });

    s.bench('jasonkarns/signal-emitter', function () {
      calls = [];
      calls2 = [];
      subjects.signalEmitter.emit('bar');
    });

    s.bench('r-park/event-signal', function () {
      calls = [];
      calls2 = [];
      subjects.eventSignal.emit('bar');
    });

    s.bench('CaptainN/SignalsLite.js', function () {
      calls = [];
      calls2 = [];
      subjects.signalLite.broadcast('bar');
    });

    s.bench('allouis/minivents', function () {
      calls = [];
      calls2 = [];
      subjects.miniVent.emit('foo', 'bar');
    });

    s.bench('planttheidea/waddup', function () {
      calls = [];
      calls2 = [];
      subjects.waddup.publish('foo', 'bar');
    });

    s.bench('SplittyDev/evee.js', function () {
      calls = [];
      calls2 = [];
      subjects.evee.emit('foo', 'bar');
    });

    s.bench('gajus/sister', function () {
      calls = [];
      calls2 = [];
      subjects.sister.trigger('foo', 'bar');
    });

    function handle(a) {
      if (!subjects) return;
      if (a !== 'bar') {
        throw new Error('invalid arguments ' + a);
      }
      calls.push(Array.from(arguments).filter(Boolean));
    }

    function handle2(a) {
      if (!subjects) {
        // ignore calls before benchmarks start
        return;
      }
      if (a !== 'bar') {
        throw new Error('invalid arguments');
      }
      calls2.push(Array.from(arguments).filter(Boolean));
    }
  });
});
