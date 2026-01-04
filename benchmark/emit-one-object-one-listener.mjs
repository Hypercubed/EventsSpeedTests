import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';
import { batch } from 'signal-utils/subtle/batched-effect';

test('emit one object - one listener', function (t) {
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
      handle({ bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('node:events', function () {
      called = 0;
      subjects.ee.emit('foo', { bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('Gozala/events', function () {
      called = 0;
      subjects.ee2.emit('foo', { bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('hij1nx/EventEmitter2', function () {
      called = 0;
      subjects.ee3.emit('foo', { bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('reactivex/rxjs Subject', function () {
      called = 0;
      subjects.subject.next({ bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('datavis-tech/reactive-property', function () {
      called = 0;
      subjects.reactiveProperty({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('millermedeiros/js-signals', function () {
      called = 0;
      subjects.signal.dispatch({ bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('Hypercubed/mini-signals', function () {
      called = 0;
      subjects.miniSignal.dispatch({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('jasonkarns/signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('r-park/event-signal', function () {
      called = 0;
      subjects.eventSignal.emit({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('CaptainN/SignalsLite.js', function () {
      called = 0;
      subjects.signalLite.broadcast({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('SplittyDev/evee.js', function () {
      called = 0;
      subjects.evee.emit('foo', {
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('gajus/sister', function () {
      called = 0;
      subjects.sister.trigger('foo', {
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('JacobFischer/ts-typed-events', function () {
      called = 0;
      subjects.tsTypedEvents.emit({
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });

    s.bench('developit/mitt', function () {
      called = 0;
      subjects.mitt.emit('foo', {
        bar: 'bar',
        baz: 'baz',
        boom: Math.random(),
      });
    });
    
    // s.bench('signal-polyfill', function () {
    //   called = 0;
    //   batch(() => {
    //     subjects.signalState.set({ bar: 'bar', baz: 'baz', boom: Math.random() });
    //   });
    // });

    s.bench('Morglod/tseep', function () {
      called = 0;
      subjects.tseep.emit('foo', { bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('garronej/evt', function () {
      called = 0;
      subjects.evt.post({ bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    s.bench('RecursiveVoid/CozyEvent', function () {
      called = 0;
      subjects.cozyEvent.emit('foo', { bar: 'bar', baz: 'baz', boom: Math.random() });
    });

    function handle(a) {
      if (!subjects) return;
      if (arguments.length < 1 || arguments.length > 5) throw new Error('invalid arguments length');

      if (a.bar !== 'bar') throw new Error('Invalid bar !== ' + a.bar);
      if (a.baz && a.baz !== 'baz') throw new Error('Invalid baz !== ' + a.baz);
      if (a.boom && typeof a.boom !== 'number') throw new Error('Invalid boom !== ' + a.boom);
      called++;
    }
  });
});
