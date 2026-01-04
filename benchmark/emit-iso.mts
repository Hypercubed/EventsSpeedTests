import { IsoBench } from "iso-bench";

import { addHandles, createInstances, createInstancesOn } from '../shared/index.mjs';

var ASSERT = process.env['ASSERT'] === 'true';  // Set to true to enable argument checks, off for benchmarking

const N = 3;  // Max listener for many ee

  console.log();
  console.log(N + ' listener');

  var subjects = createInstances();
  
  let count = -1;
  
  function printAndReset() {
    console.log('Completed ' + count + ' calls');
    count = 0;
  }
  
  for (let i = 0; i < N; i++) {
    function handle(a: string | string[], _b?: string, _c?: string) {
      if (!subjects) return;
      if (count++ > (N * 4) && !ASSERT) return;
  
      const args = Array.prototype.slice.call(Array.isArray(a) ? a : arguments).filter(Boolean);
      if (args.length > 3) throw new Error('invalid arguments');
      
      if (args.length > 0 && args[0] !== 'bar') throw new Error('invalid first arguments');
      if (args.length > 1 && args[1] !== 'baz') throw new Error('invalid second arguments');
      if (args.length > 2 && args[2] !== 'boom') throw new Error('invalid third arguments');
    };
  
    addHandles('foo', subjects, [handle]);
  }
  
  console.log('Benchmarks running with individual call asserts ' + (ASSERT ? 'enabled' : 'disabled'));
  
  const bench = new IsoBench('Basic Emit');
  
  bench.add('node:events', () => {
    subjects.ee.emit('foo');
    subjects.ee.emit('foo', 'bar');
    subjects.ee.emit('foo', 'bar', 'baz');
    subjects.ee.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('Gozala/events', () => {
    subjects.ee1.emit('foo');
    subjects.ee1.emit('foo', 'bar');
    subjects.ee1.emit('foo', 'bar', 'baz');
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('hij1nx/EventEmitter2', () => {
    subjects.ee2.emit('foo');
    subjects.ee2.emit('foo', 'bar');
    subjects.ee2.emit('foo', 'bar', 'baz');
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('primus/eventemitter3', () => {
    subjects.ee3.emit('foo');
    subjects.ee3.emit('foo', 'bar');
    subjects.ee3.emit('foo', 'bar', 'baz');
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('millermedeiros/js-signals †', () => {
    subjects.signal.dispatch();
    subjects.signal.dispatch('bar');
    subjects.signal.dispatch('bar', 'baz');
    subjects.signal.dispatch('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('Hypercubed/mini-signals †', () => {
    subjects.miniSignal.dispatch();
    subjects.miniSignal.dispatch('bar');
    subjects.miniSignal.dispatch('bar', 'baz');
    subjects.miniSignal.dispatch('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('Hypercubed/mini-signals MiniSignalEmitter', () => {
    subjects.miniSignalEmitter.emit('foo');
    subjects.miniSignalEmitter.emit('foo', 'bar');
    subjects.miniSignalEmitter.emit('foo', 'bar', 'baz');
    subjects.miniSignalEmitter.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('jasonkarns/signal-emitter †', () => {
    subjects.signalEmitter.emit();
    subjects.signalEmitter.emit('bar');
    subjects.signalEmitter.emit('bar', 'baz');
    subjects.signalEmitter.emit('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('CaptainN/SignalsLite.js †', () => {
    subjects.signalLite.broadcast();
    subjects.signalLite.broadcast('bar');
    subjects.signalLite.broadcast('bar', 'baz');
    subjects.signalLite.broadcast('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('zouloux/signal †', () => {
    subjects.zSignal.dispatch();
    subjects.zSignal.dispatch('bar');
    subjects.zSignal.dispatch('bar', 'baz');
    subjects.zSignal.dispatch('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('Lusito/typed-signals †', () => {
    subjects.tSignal.emit();
    subjects.tSignal.emit('bar');
    subjects.tSignal.emit('bar', 'baz');
    subjects.tSignal.emit('bar', 'baz', 'boom');
  }, printAndReset);
  bench.add('Morglod/tseep', () => {
    subjects.tseep.emit('foo');
    subjects.tseep.emit('foo', 'bar');
    subjects.tseep.emit('foo', 'bar', 'baz');
    subjects.tseep.emit('foo', 'bar', 'baz', 'boom');
  }, printAndReset);
  bench.endGroup('Multiple Arguments Emit');
  
  bench.add('node:events', () => {
    subjects.ee.emit('foo', []);
    subjects.ee.emit('foo', ['bar']);
    subjects.ee.emit('foo', ['bar', 'baz']);
    subjects.ee.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('primus/eventemitter3', () => {
    subjects.ee3.emit('foo', []);
    subjects.ee3.emit('foo', ['bar']);
    subjects.ee3.emit('foo', ['bar', 'baz']);
    subjects.ee3.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('Hypercubed/mini-signals †', () => {
    subjects.miniSignal.dispatch([]);
    subjects.miniSignal.dispatch(['bar']);
    subjects.miniSignal.dispatch(['bar', 'baz']);
    subjects.miniSignal.dispatch(['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('Hypercubed/mini-signals MiniSignalEmitter', () => {
    subjects.miniSignalEmitter.emit('foo');
    subjects.miniSignalEmitter.emit('foo', ['bar']);
    subjects.miniSignalEmitter.emit('foo', ['bar', 'baz']);
    subjects.miniSignalEmitter.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('SplittyDev/evee.js *', () => { // only supports one arguments
    subjects.evee.emit('foo', []);
    subjects.evee.emit('foo', ['bar']);
    subjects.evee.emit('foo', ['bar', 'baz']);
    subjects.evee.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('gajus/sister *', () => { // only supports one arguments
    subjects.sister.trigger('foo', []);
    subjects.sister.trigger('foo', ['bar']);
    subjects.sister.trigger('foo', ['bar', 'baz']);
    subjects.sister.trigger('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('JacobFischer/ts-typed-events *†', () => { // only supports one arguments
    subjects.tsTypedEvents.emit([]);
    subjects.tsTypedEvents.emit(['bar']);
    subjects.tsTypedEvents.emit(['bar', 'baz']);
    subjects.tsTypedEvents.emit(['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('developit/mitt', () => { // only supports one arguments
    subjects.mitt.emit('foo', []);
    subjects.mitt.emit('foo', ['bar']);
    subjects.mitt.emit('foo', ['bar', 'baz']);
    subjects.mitt.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('Morglod/tseep', () => {
    subjects.tseep.emit('foo', []);
    subjects.tseep.emit('foo', ['bar']);
    subjects.tseep.emit('foo', ['bar', 'baz']);
    subjects.tseep.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('garronej/evt *', () => { // only supports one arguments
    subjects.evt.post([]);
    subjects.evt.post(['bar']);
    subjects.evt.post(['bar', 'baz']);
    subjects.evt.post(['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.add('RecursiveVoid/CozyEvent *', () => { // only supports one argument
    subjects.cozyEvent.emit('foo', []);
    subjects.cozyEvent.emit('foo', ['bar']);
    subjects.cozyEvent.emit('foo', ['bar', 'baz']);
    subjects.cozyEvent.emit('foo', ['bar', 'baz', 'boom']);
  }, printAndReset);
  bench.endGroup('Single Arguments Emit Array');
  
  await bench.consoleLog().run();


console.log();
console.log('Note: Benchmarks marked with * are only single argument emits');
console.log('Note: Benchmarks marked with † are single-channel broadcast');