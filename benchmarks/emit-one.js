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
var Subject = require('@reactivex/rxjs/dist/cjs/Subject').Subject;
var reactiveProperty = require('reactive-property');

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

function handle(a) {
  if (arguments.length > 2 || a !== 'bar') {
    console.log('damn');
    process.exit();
  }
}

function handle2(a) {
  if (arguments.length > 2 || a !== 'bar') {
    console.log('damn');
    process.exit();
  }
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
var subject = new Subject();
var rProperty = reactiveProperty('bar');

ee1.on('foo', handle);
ee1.on('foo', handle2);
ee2.on('foo', handle);
ee2.on('foo', handle2);
ee3.on('foo', handle);
ee3.on('foo', handle2);
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
subject.subscribe(handle);
subject.subscribe(handle2);
rProperty.on(handle);
rProperty.on(handle2);

var suite = require('./suite')('emit one parameter');

signalLite.broadcast('bar');

suite
  .add('EventEmitter', function () {
    ee1.emit('foo', 'bar');
  })
  .add('EventEmitter2', function () {
    ee2.emit('foo', 'bar');
  })
  .add('EventEmitter3', function () {
    ee3.emit('foo', 'bar');
  })
  .add('RXJS', function () {
    subject.next('bar');
  })
  .add('ReactiveProperty', function () {
    rProperty('bar');
  })
  .add('JS-Signals', function () {
    signal.dispatch('bar');
  })
  .add('MiniSignals', function () {
    miniSignal.dispatch('bar');
  })
  .add('signal-emitter', function () {
    signalEmitter.emit('bar');
  })
  .add('event-signal', function () {
    eventSignal.emit('bar');
  })
  .add('signal-lite', function () {
    signalLite.broadcast('bar');
  });

suite
  .run();
