import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

var ASSERT = process.env['ASSERT'] === 'true';  // Set to true to enable argument checks, off for benchmarking

test('emit variable number of values', t => {
  return suite('', s => {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handle, handle2);

    var calls = [];
    var calls2 = [];

    s.cycle(e => {
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

    s.burn('Theoretical max', () => {
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

    s.burn('Theoretical max†', () => {
      calls = [];
      calls2 = [];

      handle([]);
      handle2([]);
      handle(['bar']);
      handle2(['bar']);
      handle(['bar', 'baz']);
      handle2(['bar', 'baz']);
      handle(['bar', 'baz', 'boom']);
      handle2(['bar', 'baz', 'boom']);
    });

    s.bench('node:events', () => {
      calls = [];
      calls2 = [];

      subjects.ee.emit('foo');
      subjects.ee.emit('foo', 'bar');
      subjects.ee.emit('foo', 'bar', 'baz');
      subjects.ee.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('node:events*', () => {
      calls = [];
      calls2 = [];

      subjects.ee.emit('foo', []);
      subjects.ee.emit('foo', ['bar']);
      subjects.ee.emit('foo', ['bar', 'baz']);
      subjects.ee.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('Gozala/events', () => {
      calls = [];
      calls2 = [];
      subjects.ee1.emit('foo');
      subjects.ee1.emit('foo', 'bar');
      subjects.ee1.emit('foo', 'bar', 'baz');
      subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('hij1nx/EventEmitter2', () => {
      calls = [];
      calls2 = [];
      subjects.ee2.emit('foo');
      subjects.ee2.emit('foo', 'bar');
      subjects.ee2.emit('foo', 'bar', 'baz');
      subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('primus/eventemitter3', () => {
      calls = [];
      calls2 = [];
      subjects.ee3.emit('foo');
      subjects.ee3.emit('foo', 'bar');
      subjects.ee3.emit('foo', 'bar', 'baz');
      subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('primus/eventemitter3*', () => {
      calls = [];
      calls2 = [];
      subjects.ee3.emit('foo', []);
      subjects.ee3.emit('foo', ['bar']);
      subjects.ee3.emit('foo', ['bar', 'baz']);
      subjects.ee3.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('millermedeiros/js-signals†', () => {
      calls = [];
      calls2 = [];
      subjects.signal.dispatch();
      subjects.signal.dispatch('bar');
      subjects.signal.dispatch('bar', 'baz');
      subjects.signal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('Hypercubed/mini-signals†', () => {
      calls = [];
      calls2 = [];
      subjects.miniSignal.dispatch();
      subjects.miniSignal.dispatch('bar');
      subjects.miniSignal.dispatch('bar', 'baz');
      subjects.miniSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('Hypercubed/mini-signals†*', () => {
      calls = [];
      calls2 = [];
      subjects.miniSignal.dispatch([]);
      subjects.miniSignal.dispatch(['bar']);
      subjects.miniSignal.dispatch(['bar', 'baz']);
      subjects.miniSignal.dispatch(['bar', 'baz', 'boom']);
    });


    s.bench('Hypercubed/mini-signals MiniSignalEmitter', () => {
      calls = [];
      calls2 = [];
      subjects.miniSignalEmitter.emit('foo');
      subjects.miniSignalEmitter.emit('foo', 'bar');
      subjects.miniSignalEmitter.emit('foo', 'bar', 'baz');
      subjects.miniSignalEmitter.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('Hypercubed/mini-signals MiniSignalEmitter*', () => {
      calls = [];
      calls2 = [];
      subjects.miniSignalEmitter.emit('foo');
      subjects.miniSignalEmitter.emit('foo', ['bar']);
      subjects.miniSignalEmitter.emit('foo', ['bar', 'baz']);
      subjects.miniSignalEmitter.emit('foo', ['bar', 'baz', 'boom']);
    });

    // s.bench('Hypercubed/mini-signals† dispatchSerial', {
    //   defer: true,
    //   fn: async (deferred) => {
    //     calls = [];
    //     calls2 = [];
    //     await subjects.miniSignal.dispatchSerial();
    //     await subjects.miniSignal.dispatchSerial('bar');
    //     await subjects.miniSignal.dispatchSerial('bar', 'baz');
    //     await subjects.miniSignal.dispatchSerial('bar', 'baz', 'boom');
    //     deferred.resolve();
    //   }
    // });

    // s.bench('Hypercubed/mini-signals† dispatchParallel', {
    //   defer: true,
    //   fn: async (deferred) => {
    //     calls = [];
    //     calls2 = [];
    //     await subjects.miniSignal.dispatchParallel();
    //     await subjects.miniSignal.dispatchParallel('bar');
    //     await subjects.miniSignal.dispatchParallel('bar', 'baz');
    //     await subjects.miniSignal.dispatchParallel('bar', 'baz', 'boom');
    //     deferred.resolve();
    //   }
    // });

    s.bench('jasonkarns/signal-emitter†', () => {
      calls = [];
      calls2 = [];
      subjects.signalEmitter.emit();
      subjects.signalEmitter.emit('bar');
      subjects.signalEmitter.emit('bar', 'baz');
      subjects.signalEmitter.emit('bar', 'baz', 'boom');
    });

    s.bench('CaptainN/SignalsLite.js†', () => {
      calls = [];
      calls2 = [];
      subjects.signalLite.broadcast();
      subjects.signalLite.broadcast('bar');
      subjects.signalLite.broadcast('bar', 'baz');
      subjects.signalLite.broadcast('bar', 'baz', 'boom');
    });

    s.bench('zouloux/signal†', () => {
      calls = [];
      calls2 = [];
      subjects.zSignal.dispatch();
      subjects.zSignal.dispatch('bar');
      subjects.zSignal.dispatch('bar', 'baz');
      subjects.zSignal.dispatch('bar', 'baz', 'boom');
    });

    s.bench('SplittyDev/evee.js*', () => { // supports one arguments
      calls = [];
      calls2 = [];
      subjects.evee.emit('foo', []);
      subjects.evee.emit('foo', ['bar']);
      subjects.evee.emit('foo', ['bar', 'baz']);
      subjects.evee.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('gajus/sister*', () => { // supports one arguments
      calls = [];
      calls2 = [];
      subjects.sister.trigger('foo', []);
      subjects.sister.trigger('foo', ['bar']);
      subjects.sister.trigger('foo', ['bar', 'baz']);
      subjects.sister.trigger('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('Lusito/typed-signals†', () => {
      calls = [];
      calls2 = [];
      subjects.tSignal.emit();
      subjects.tSignal.emit('bar');
      subjects.tSignal.emit('bar', 'baz');
      subjects.tSignal.emit('bar', 'baz', 'boom');
    });

    s.bench('JacobFischer/ts-typed-events*†', () => { // supports one arguments
      calls = [];
      calls2 = [];
      subjects.tsTypedEvents.emit([]);
      subjects.tsTypedEvents.emit(['bar']);
      subjects.tsTypedEvents.emit(['bar', 'baz']);
      subjects.tsTypedEvents.emit(['bar', 'baz', 'boom']);
    });

    s.bench('developit/mitt*', () => { // supports one arguments
      calls = [];
      calls2 = [];
      subjects.mitt.emit('foo', []);
      subjects.mitt.emit('foo', ['bar']);
      subjects.mitt.emit('foo', ['bar', 'baz']);
      subjects.mitt.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('Morglod/tseep', () => {
      calls = [];
      calls2 = [];
      subjects.tseep.emit('foo');
      subjects.tseep.emit('foo', 'bar');
      subjects.tseep.emit('foo', 'bar', 'baz');
      subjects.tseep.emit('foo', 'bar', 'baz', 'boom');
    });

    s.bench('Morglod/tseep*', () => {
      calls = [];
      calls2 = [];
      subjects.tseep.emit('foo', []);
      subjects.tseep.emit('foo', ['bar']);
      subjects.tseep.emit('foo', ['bar', 'baz']);
      subjects.tseep.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('garronej/evt*', () => { // supports one arguments
      calls = [];
      calls2 = [];
      subjects.evt.post([]);
      subjects.evt.post(['bar']);
      subjects.evt.post(['bar', 'baz']);
      subjects.evt.post(['bar', 'baz', 'boom']);
    });

    s.bench('RecursiveVoid/CozyEvent*', () => { // supports one argument
      calls = [];
      calls2 = [];
      subjects.cozyEvent.emit('foo', []);
      subjects.cozyEvent.emit('foo', ['bar']);
      subjects.cozyEvent.emit('foo', ['bar', 'baz']);
      subjects.cozyEvent.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.complete(() => {
      console.log('');
      console.log('Test run with individual call asserts ' + (ASSERT ? 'enabled' : 'disabled'));
      console.log('Note: Benchmarks marked with * are single argument emits, which is an array in this case.');
      console.log('Note: Benchmarks marked with † are single-channel broadcast');
    });

    function handle(a, _b, _c) {
      if (!subjects) return;

      const args = Array.isArray(a) ? a : Array.prototype.slice.call(arguments).filter(Boolean);
      calls.push(args);
      if (!ASSERT) return;

      if (args.length > 3) throw new Error('invalid arguments');
      if (args.length > 0 && args[0] !== 'bar') throw new Error('invalid first arguments');
      if (args.length > 1 && args[1] !== 'baz') throw new Error('invalid second arguments');
      if (args.length > 2 && args[2] !== 'boom') throw new Error('invalid third arguments');
    }

    function handle2(a, _b, _c) {
      if (!subjects) return;

      const args = Array.isArray(a) ? a : Array.prototype.slice.call(arguments).filter(Boolean);
      calls2.push(args);
      if (!ASSERT) return;

      if (args.length > 3) throw new Error('invalid arguments');
      if (args.length > 0 && args[0] !== 'bar') throw new Error('invalid first arguments');
      if (args.length > 1 && args[1] !== 'baz') throw new Error('invalid second arguments');
      if (args.length > 2 && args[2] !== 'boom') throw new Error('invalid third arguments');
    }
  });
});
