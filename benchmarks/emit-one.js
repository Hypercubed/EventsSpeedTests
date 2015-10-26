'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    Signal2,
    MiniSignal = require('mini-signals'),
    SignalEmitter = require('signal-emitter'),
    EventSignal = require('event-signal'),
    SignalLite = require('signals-lite').SignalLite;

if (typeof window !== 'undefined') {
  Signal2 = require('hcSignals');
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
  Signal2 = require('../jspm_packages/github/Hypercubed/js-signals@fixv8optbuild/dist/signals');
}

function handle(a,b) {
  if (arguments.length > 0 && a !== 'bar') {console.log('damn'); process.exit(); }
  if (arguments.length > 1 && b !== 'baz') {console.log('damn'); process.exit(); }
  if (arguments.length > 100) {console.log('damn');}
}

function handle2() {
  if (arguments.length > 100) {console.log('damn');}
}

/**
 * Instances.
 */
var ee1 = new EventEmitter1(),
    ee2 = new EventEmitter2(),
    ee3 = new EventEmitter3(),
    signalEmitter = new SignalEmitter(new EventEmitter3(), 'foo'),
    eventSignal = new EventSignal(),
    signal = new Signal(),
    signal2 = new Signal2(),
    miniSignal = new MiniSignal(),
    signalLite = new SignalLite();

ee1.on('foo', handle); ee1.on('foo', handle2);
ee2.on('foo', handle); ee2.on('foo', handle2);
ee3.on('foo', handle); ee3.on('foo', handle2);
signal.add(handle); signal.add(handle2);
signal2.add(handle); signal2.add(handle2);
miniSignal.add(handle); miniSignal.add(handle2);
signalEmitter.on(handle); signalEmitter.on(handle2);
eventSignal.addListener(handle);  eventSignal.addListener(handle2);
signalLite.add(handle);  signalLite.add(handle2);

var suite = require('./suite')('emit one parameter');

suite
  .add('EventEmitter1', function() {
    ee1.emit('bar');
  })
  .add('EventEmitter2', function() {
    ee2.emit('bar');
  })
  .add('EventEmitter3', function() {
    ee3.emit('bar');
  })
  .add('JS-Signals', function() {
    signal.dispatch('bar');
  })
  .add('JS-Signals patch', function() {
    signal2.dispatch('bar');
  })
  .add('MiniSignals', function() {
    miniSignal.dispatch('bar');
  })
  .add('signal-emitter', function() {
    signalEmitter.emit('bar');
  })
  .add('event-signal', function() {  // eventSignal.emit only emits one argument
    eventSignal.emit('bar');
  })
  .add('signal-lite', function() {
    signalLite.trigger('bar');
  });

suite
  .run();
