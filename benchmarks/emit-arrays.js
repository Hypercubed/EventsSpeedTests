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

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

function handle(a) {
  if (arguments.length > 1) {
    console.log('damn');
  }
  if (a) {
    if (a.length > 0 && a[0] !== 'bar') {
      console.log('damn');
    }
    if (a.length > 1 && a[1] !== 'baz') {
      console.log('damn');
    }
  }
}

function handle2() {
  if (arguments.length > 1) {
    console.log('damn');
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

ee1.on('foo', handle); ee1.on('foo', handle2);
ee2.on('foo', handle); ee2.on('foo', handle2);
ee3.on('foo', handle); ee3.on('foo', handle2);
signal.add(handle); signal.add(handle2);
miniSignal.add(handle); miniSignal.add(handle2);
signalEmitter.on(handle); signalEmitter.on(handle2);
eventSignal.addListener(handle); eventSignal.addListener(handle2);
signalLite.add(handle); signalLite.add(handle2);
subject.subscribe(handle); subject.subscribe(handle2);

var suite = require('./suite')('emit arrays');

suite
  .add('EventEmitter', function () {
    ee1.emit('foo');
    ee1.emit('foo', ['bar']);
    ee1.emit('foo', ['bar', 'baz']);
    ee1.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('EventEmitter2', function () {
    ee2.emit('foo');
    ee2.emit('foo', ['bar']);
    ee2.emit('foo', ['bar', 'baz']);
    ee2.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('EventEmitter3', function () {
    ee3.emit('foo');
    ee3.emit('foo', ['bar']);
    ee3.emit('foo', ['bar', 'baz']);
    ee3.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('RXJS', function () {
    subject.next();
    subject.next(['bar']);
    subject.next(['bar', 'baz']);
    subject.next(['bar', 'baz', 'boom']);
  })
  .add('JS-Signals', function () {
    signal.dispatch();
    signal.dispatch(['bar']);
    signal.dispatch(['bar', 'baz']);
    signal.dispatch(['bar', 'baz', 'boom']);
  })
  .add('MiniSignals', function () {
    miniSignal.dispatch();
    miniSignal.dispatch(['bar']);
    miniSignal.dispatch(['bar', 'baz']);
    miniSignal.dispatch(['bar', 'baz', 'boom']);
  })
  .add('signal-emitter', function () {
    signalEmitter.emit();
    signalEmitter.emit(['bar']);
    signalEmitter.emit(['bar', 'baz']);
    signalEmitter.emit(['bar', 'baz', 'boom']);
  })
  .add('event-signal', function () {  // this is not a fair test, eventSignal.emit only emits one argument
    eventSignal.emit();
    eventSignal.emit(['bar']);
    eventSignal.emit(['bar', 'baz']);
    eventSignal.emit(['bar', 'baz', 'boom']);
  })
  .add('signal-lite', function () {
    signalLite.broadcast();
    signalLite.broadcast(['bar']);
    signalLite.broadcast(['bar', 'baz']);
    signalLite.broadcast(['bar', 'baz', 'boom']);
  });

suite
  .run();
