'use strict';

/**
 * Preparation code.
 */
var EventEmitter1 = require('events').EventEmitter;
var EventEmitter2 = require('eventemitter2');
var EventEmitter3 = require('eventemitter3');
var Signal = require('signals');
var MiniSignal = require('mini-signals');
var SignalEmitter = require('signal-emitter');
var EventSignal = require('event-signal');
var SignalLite = require('signals-lite').SignalLite;
var MiniVent = require('minivents');

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

/**
 * Instances.
 */
var ee1 = new EventEmitter1();
var ee2 = new EventEmitter2();
var ee3 = new EventEmitter3();
var signalEmitter = new SignalEmitter(new EventEmitter3(), 'foo');
var eventSignal = new EventSignal();
var signal = new Signal();
var miniSignal = new MiniSignal();
var signalLite = new SignalLite();
var miniVent = new MiniVent();

function handle() {
  if (arguments.length > 100) {
    console.log('damn');
  }
}

function handle2() {
  if (arguments.length > 100) {
    console.log('damn');
  }
}

// events
ee1.on('foo', handle);
ee1.on('foo', handle2);
ee2.on('foo', handle);
ee2.on('foo', handle2);
ee3.on('foo', handle);
ee3.on('foo', handle2);
miniVent.on('foo', handle);
miniVent.on('foo', handle2);

// signals
signal.add(handle);
signal.add(handle2);
miniSignal.add(handle);
miniSignal.add(handle2);
signalEmitter.on(handle);
signalEmitter.on(handle2);
eventSignal.addListener(handle);
eventSignal.addListener(handle2);
signalLite.add(handle);
signalLite.add(handle2);

require('./suite')('emit large')
  .add('EventEmitter', function () {
    ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('EventEmitter2', function () {
    ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('EventEmitter3', function () {
    ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('JS-Signals', function () {
    signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('MiniSignals', function () {
    miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('signal-emitter', function () {
    signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  /* .add('event-signal', function() {  // this is not a fair test, eventSignal.emit only emits one argument
    eventSignal.emit(['bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }) */
  .add('signal-lite', function () {
    signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('minivents', function () {
    miniVent.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .run();
