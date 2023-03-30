import suite from 'chuhai';
import test from 'blue-tape';
import { maxTime, minSamples, createInstancesOn } from '../subjects/index.mjs';

test('emit one array', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var called = null;
    var called2 = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 3, e.target.name + ' called handle three times');
      t.equal(called2, 3, e.target.name + ' called handle2 three times');
      called = called2 = null;
    });

    var subjects = createInstancesOn(handle, handle2);

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle(['bar']);
      handle2(['bar']);
      handle(['bar', 'baz']);
      handle2(['bar', 'baz']);
      handle(['bar', 'baz', 'boom']);
      handle2(['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo', ['bar']);
      subjects.ee1.emit('foo', ['bar', 'baz']);
      subjects.ee1.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo', ['bar']);
      subjects.ee2.emit('foo', ['bar', 'baz']);
      subjects.ee2.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo', ['bar']);
      subjects.ee3.emit('foo', ['bar', 'baz']);
      subjects.ee3.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('dripEmitter', function () {
      called = called2 = 0;
      subjects.dripEmitter.emit('foo', ['bar']);
      subjects.dripEmitter.emit('foo', ['bar', 'baz']);
      subjects.dripEmitter.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('dripEmitterEnhanced', function () {
      called = called2 = 0;
      subjects.dripEmitterEnhanced.emit('foo', ['bar']);
      subjects.dripEmitterEnhanced.emit('foo', ['bar', 'baz']);
      subjects.dripEmitterEnhanced.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('rxjs Subject', function () {
      called = called2 = 0;
      subjects.subject.next(['bar']);
      subjects.subject.next(['bar', 'baz']);
      subjects.subject.next(['bar', 'baz', 'boom']);
    });

    s.bench('ReactiveProperty', function () {
      called = called2 = 0;
      subjects.reactiveProperty(['bar']);
      subjects.reactiveProperty(['bar', 'baz']);
      subjects.reactiveProperty(['bar', 'baz', 'boom']);
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch(['bar']);
      subjects.signal.dispatch(['bar', 'baz']);
      subjects.signal.dispatch(['bar', 'baz', 'boom']);
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch(['bar']);
      subjects.miniSignal.dispatch(['bar', 'baz']);
      subjects.miniSignal.dispatch(['bar', 'baz', 'boom']);
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit(['bar']);
      subjects.signalEmitter.emit(['bar', 'baz']);
      subjects.signalEmitter.emit(['bar', 'baz', 'boom']);
    });

    s.bench('event-signal', function () {
      called = called2 = 0;
      subjects.eventSignal.emit(['bar']);
      subjects.eventSignal.emit(['bar', 'baz']);
      subjects.eventSignal.emit(['bar', 'baz', 'boom']);
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast(['bar']);
      subjects.signalLite.broadcast(['bar', 'baz']);
      subjects.signalLite.broadcast(['bar', 'baz', 'boom']);
    });

    s.bench('evee', function () {
      called = called2 = 0;
      subjects.evee.emit('foo', ['bar']);
      subjects.evee.emit('foo', ['bar', 'baz']);
      subjects.evee.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('sister', function () {
      called = called2 = 0;
      subjects.sister.trigger('foo', ['bar']);
      subjects.sister.trigger('foo', ['bar', 'baz']);
      subjects.sister.trigger('foo', ['bar', 'baz', 'boom']);
    });

    function handle(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      } else {
        if (a[0] !== 'bar') {
          throw new Error('invalid a[0] !== ' + a[0]);
        }
        if (a.length > 1 && a[1] !== 'baz') {
          throw new Error('invalid a[1] !== ' + a[1]);
        }
        if (a.length > 2 && a[2] !== 'boom') {
          throw new Error('invalid a[2] !== ' + a[1]);
        }
        if (a.length > 3) {
          throw new Error('invalid array length');
        }
      }
      called++;
    }

    function handle2() {
      if (arguments.length === 0 || arguments.length > 2) {
        // reactiveProperty emits old value
        throw new Error('Invlid arguments.length');
      }
      called2++;
    }
  });
});
