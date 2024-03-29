import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

test('emit variable number of values', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn(handle, handle2);

    var called = 0;
    var called2 = 0;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 4, e.target.name + ' called handle four times');
      t.equal(called2, 4, e.target.name + ' called handle2 four times');
    });

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle();
      handle2();
      handle('bar');
      handle2('bar');
      handle('bar', 'baz');
      handle2('bar', 'baz');
      handle('bar', 'baz', 'boom');
      handle2('bar', 'baz', 'boom');
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo');
      subjects.ee1.emit('foo', 'bar');
      subjects.ee1.emit('foo', 'bar', 'baz');
      subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo');
      subjects.ee2.emit('foo', 'bar');
      subjects.ee2.emit('foo', 'bar', 'baz');
      subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo');
      subjects.ee3.emit('foo', 'bar');
      subjects.ee3.emit('foo', 'bar', 'baz');
      subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch();
      subjects.signal.dispatch('bar');
      subjects.signal.dispatch('bar', 'baz');
      subjects.signal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch();
      subjects.miniSignal.dispatch('bar');
      subjects.miniSignal.dispatch('bar', 'baz');
      subjects.miniSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit();
      subjects.signalEmitter.emit('bar');
      subjects.signalEmitter.emit('bar', 'baz');
      subjects.signalEmitter.emit('bar', 'baz', 'boom');
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast();
      subjects.signalLite.broadcast('bar');
      subjects.signalLite.broadcast('bar', 'baz');
      subjects.signalLite.broadcast('bar', 'baz', 'boom');
    });

    s.bench('zouloux/signal', function () {
      called = called2 = 0;
      subjects.zSignal.dispatch();
      subjects.zSignal.dispatch('bar');
      subjects.zSignal.dispatch('bar', 'baz');
      subjects.zSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('typed-signals', function () {
      called = called2 = 0;
      subjects.tSignal.emit();
      subjects.tSignal.emit('bar');
      subjects.tSignal.emit('bar', 'baz');
      subjects.tSignal.emit('bar', 'baz', 'boom');
    });

    function handle(a, b, c) {
      if (!subjects) {
        // ignore calls before benchmarks start
        return;
      }
      if (arguments.length > 0 && a !== 'bar') {
        throw new Error('invalid arguments');
      }
      if (arguments.length > 1 && b !== 'baz') {
        throw new Error('invalid arguments');
      }
      if (arguments.length > 2 && c !== 'boom') {
        throw new Error('invalid arguments');
      }
      if (arguments.length > 100) {
        throw new Error('invalid arguments');
      }
      called++;
    }

    function handle2() {
      if (arguments.length > 100) {
        throw new Error('invalid arguments');
      }
      called2++;
    }
  });
});
