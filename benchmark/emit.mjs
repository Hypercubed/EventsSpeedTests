import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';


test('emit variable number of values', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handle, handle2);

    var calls = [];
    var calls2 = [];

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(calls.length, 4, e.target.name + ' called handle four times');
      t.equal(calls2.length, 4, e.target.name + ' called handle2 four times');

      t.equal(
         JSON.stringify(calls),
        '[[],["bar"],["bar","baz"],["bar","baz","boom"]]',
        e.target.name + ' handle called with correct arguments'
      );
      t.equal(
        JSON.stringify(calls2),
        '[[],["bar"],["bar","baz"],["bar","baz","boom"]]',
        e.target.name + ' handle2 called with correct arguments'
      );

      calls = [];
      calls2 = [];
    });

    s.burn('Theoretical max', function () {
      calls = [];
      calls2 = [];

      handle();
      handle2();
      handle('bar');
      handle2('bar');
      handle('bar', 'baz');
      handle2('bar', 'baz');
      handle('bar', 'baz', 'boom');
      handle2('bar', 'baz', 'boom');
    });

    s.bench('node:events', function () {
      calls = [];
      calls2 = [];

      subjects.ee.emit('foo');
      subjects.ee.emit('foo', 'bar');
      subjects.ee.emit('foo', 'bar', 'baz');
      subjects.ee.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('events', function () {
      calls = [];
      calls2 = [];
      subjects.ee1.emit('foo');
      subjects.ee1.emit('foo', 'bar');
      subjects.ee1.emit('foo', 'bar', 'baz');
      subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('hij1nx/EventEmitter2', function () {
      calls = [];
      calls2 = [];
      subjects.ee2.emit('foo');
      subjects.ee2.emit('foo', 'bar');
      subjects.ee2.emit('foo', 'bar', 'baz');
      subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('primus/eventemitter3', function () {
      calls = [];
      calls2 = [];
      subjects.ee3.emit('foo');
      subjects.ee3.emit('foo', 'bar');
      subjects.ee3.emit('foo', 'bar', 'baz');
      subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('millermedeiros/js-signals', function () {
      calls = [];
      calls2 = [];
      subjects.signal.dispatch();
      subjects.signal.dispatch('bar');
      subjects.signal.dispatch('bar', 'baz');
      subjects.signal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('Hypercubed/mini-signals', function () {
      calls = [];
      calls2 = [];
      subjects.miniSignal.dispatch();
      subjects.miniSignal.dispatch('bar');
      subjects.miniSignal.dispatch('bar', 'baz');
      subjects.miniSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('Hypercubed/mini-signals dispatchSerial', {
      defer: true,
      fn: async (deferred) => {
        calls = [];
        calls2 = [];
        await subjects.miniSignal.dispatchSerial();
        await subjects.miniSignal.dispatchSerial('bar');
        await subjects.miniSignal.dispatchSerial('bar', 'baz');
        await subjects.miniSignal.dispatchSerial('bar', 'baz', 'boom');
        deferred.resolve();
      }
    });

    s.bench('Hypercubed/mini-signals dispatchParallel', {
      defer: true,
      fn: async (deferred) => {
        calls = [];
        calls2 = [];
        await subjects.miniSignal.dispatchParallel();
        await subjects.miniSignal.dispatchParallel('bar');
        await subjects.miniSignal.dispatchParallel('bar', 'baz');
        await subjects.miniSignal.dispatchParallel('bar', 'baz', 'boom');
        deferred.resolve();
      }
    });

    s.bench('jasonkarns/signal-emitter', function () {
      calls = [];
      calls2 = [];
      subjects.signalEmitter.emit();
      subjects.signalEmitter.emit('bar');
      subjects.signalEmitter.emit('bar', 'baz');
      subjects.signalEmitter.emit('bar', 'baz', 'boom');
    });

    s.bench('CaptainN/SignalsLite.js', function () {
      calls = [];
      calls2 = [];
      subjects.signalLite.broadcast();
      subjects.signalLite.broadcast('bar');
      subjects.signalLite.broadcast('bar', 'baz');
      subjects.signalLite.broadcast('bar', 'baz', 'boom');
    });

    s.bench('zouloux/signal', function () {
      calls = [];
      calls2 = [];
      subjects.zSignal.dispatch();
      subjects.zSignal.dispatch('bar');
      subjects.zSignal.dispatch('bar', 'baz');
      subjects.zSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('Lusito/typed-signals', function () {
      calls = [];
      calls2 = [];
      subjects.tSignal.emit();
      subjects.tSignal.emit('bar');
      subjects.tSignal.emit('bar', 'baz');
      subjects.tSignal.emit('bar', 'baz', 'boom');
    });

    s.bench('Morglod/tseep', function () {
      calls = [];
      calls2 = [];
      subjects.tseep.emit('foo');
      subjects.tseep.emit('foo', 'bar');
      subjects.tseep.emit('foo', 'bar', 'baz');
      subjects.tseep.emit('foo', 'bar', 'baz', 'boom');
    });

    function handle(a, b, c) {
      if (!subjects) return;
      const args = Array.prototype.slice.call(arguments).filter(Boolean);
      if (args.length > 0 && a !== 'bar') {
        throw new Error('invalid arguments');
      }
      if (args.length > 1 && b !== 'baz') {
        throw new Error('invalid arguments');
      }
      if (args.length > 2 && c !== 'boom') {
        throw new Error('invalid arguments');
      }
      if (args.length > 100) {
        throw new Error('invalid arguments');
      }
      calls.push(Array.prototype.slice.call(args));
    }

    function handle2(a, b, c) {
      if (!subjects) return;
      const args = Array.prototype.slice.call(arguments).filter(Boolean);

      if (args.length > 100) {
        throw new Error('invalid arguments');
      }
      calls2.push(Array.prototype.slice.call(args));
    }
  });
});
