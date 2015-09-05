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
    SignalLite = require('signals-lite').SignalLite,
    MiniVent = require('minivents');

if (typeof window !== 'undefined') {
  Signal2 = require('hcSignals');
  MiniSignal = (typeof MiniSignal !== 'function') ? MiniSignal.default : MiniSignal;  // https://github.com/systemjs/systemjs/issues/304
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
  Signal2 = require('../jspm_packages/github/Hypercubed/js-signals@fixv8optbuild/dist/signals');
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
    signalLite = new SignalLite(),
    miniVent = new MiniVent();

function handle() {
  if (arguments.length > 100) {console.log('damn');}
}

function handle2() {
  if (arguments.length > 100) {console.log('damn');}
}

// events
ee1.on('foo', handle); ee1.on('foo', handle2);
ee2.on('foo', handle); ee2.on('foo', handle2);
ee3.on('foo', handle); ee3.on('foo', handle2);
miniVent.on('foo', handle); miniVent.on('foo', handle2);

// signals
signal.add(handle); signal.add(handle2);
signal2.add(handle); signal2.add(handle2);
miniSignal.add(handle); miniSignal.add(handle2);
signalEmitter.on(handle); signalEmitter.on(handle2);
eventSignal.addListener(handle);  eventSignal.addListener(handle2);
signalLite.add(handle);  signalLite.add(handle2);


var suite = require('./suite')('emit large');

suite
  .add('EventEmitter1', function() {
    ee1.emit('foo', 'bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('EventEmitter2', function() {
    ee2.emit('foo', 'bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('EventEmitter3', function() {
    ee3.emit('foo', 'bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('JS-Signals', function() {
    signal.dispatch('bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('JS-Signals patch', function() {
    signal2.dispatch('bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('MiniSignals', function() {
    miniSignal.dispatch('bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('signal-emitter', function() {
    signalEmitter.emit('bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('event-signal', function() {  // note event signal only passes on param
    eventSignal.emit(['bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9]);
  })
  .add('signal-lite', function() {
    signalLite.trigger('bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  })
  .add('minivents', function() {
    miniVent.emit('foo','bar', 'baz', 'boom',1,2,3,4,5,6,7,8,9);
  });

suite
  .run();
