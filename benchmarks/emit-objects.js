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
    console.log('damn array length');
  }
  if (a) {
    if (a.bar && a.bar !== 'bar') {
      console.log('damn bar');
    }
    if (a.baz && a.baz !== 'baz') {
      console.log('damn baz');
    }
    if (a.boom && a.boom !== 'boom') {
      console.log('damn boom');
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

var suite = require('./suite')('emit objects');

suite
  .add('EventEmitter', function () {
    ee1.emit('foo');
    ee1.emit('foo', {bar: 'bar'});
    ee1.emit('foo', {bar: 'bar', baz: 'baz'});
    ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('EventEmitter2', function () {
    ee2.emit('foo');
    ee2.emit('foo', {bar: 'bar'});
    ee2.emit('foo', {bar: 'bar', baz: 'baz'});
    ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('EventEmitter3', function () {
    ee3.emit('foo');
    ee3.emit('foo', {bar: 'bar'});
    ee3.emit('foo', {bar: 'bar', baz: 'baz'});
    ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('RXJS', function () {
    subject.next();
    subject.next({bar: 'bar'});
    subject.next({bar: 'bar', baz: 'baz'});
    subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('JS-Signals', function () {
    signal.dispatch();
    signal.dispatch({bar: 'bar'});
    signal.dispatch({bar: 'bar', baz: 'baz'});
    signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('MiniSignals', function () {
    miniSignal.dispatch();
    miniSignal.dispatch({bar: 'bar'});
    miniSignal.dispatch({bar: 'bar', baz: 'baz'});
    miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('signal-emitter', function () {
    signalEmitter.emit();
    signalEmitter.emit({bar: 'bar'});
    signalEmitter.emit({bar: 'bar', baz: 'baz'});
    signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('event-signal', function () {  // this is not a fair test, eventSignal.emit only emits one argument
    eventSignal.emit();
    eventSignal.emit({bar: 'bar'});
    eventSignal.emit({bar: 'bar', baz: 'baz'});
    eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('signal-lite', function () {
    signalLite.broadcast();
    signalLite.broadcast({bar: 'bar'});
    signalLite.broadcast({bar: 'bar', baz: 'baz'});
    signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

suite
  .run();
