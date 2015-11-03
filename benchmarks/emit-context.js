'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    MiniSignal = require('mini-signals'),
    SignalEmitter = require('signal-emitter'),
    EventSignal = require('event-signal'),
    SignalLite = require('signals-lite').SignalLite;

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

var ctx = {
  foo: 'bar'
};

function handle() {
  if (arguments.length > 100) {console.log('damn');}
  if (this !== ctx) {console.log('damn'); process.exit(); }

}

function handle2() {
  if (arguments.length > 100) {console.log('damn');}
  //if (this !== ctx) {console.log('damn'); process.exit(); }
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
    miniSignal = new MiniSignal(),
    signalLite = new SignalLite();

ee1.on('foo', handle.bind(ctx)); ee1.on('foo', handle2);
ee2.on('foo', handle.bind(ctx)); ee2.on('foo', handle2);
ee3.on('foo', handle, ctx); ee3.on('foo', handle2);
signal.add(handle, ctx); signal.add(handle2);
miniSignal.add(handle,ctx); miniSignal.add(handle2);
signalEmitter.on(handle, ctx); signalEmitter.on(handle2);
eventSignal.addListener(handle, ctx);  eventSignal.addListener(handle2);
signalLite.add(handle, ctx);  signalLite.add(handle2);

var suite = require('./suite')('emit with context');

suite
  .add('EventEmitter1', function() {
    ee1.emit('foo');
    ee1.emit('foo', 'bar');
    ee1.emit('foo', 'bar', 'baz');
    ee1.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('EventEmitter2', function() {
    ee2.emit('foo');
    ee2.emit('foo', 'bar');
    ee2.emit('foo', 'bar', 'baz');
    ee2.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('EventEmitter3', function() {
    ee3.emit('foo');
    ee3.emit('foo', 'bar');
    ee3.emit('foo', 'bar', 'baz');
    ee3.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('JS-Signals', function() {
    signal.dispatch();
    signal.dispatch('bar');
    signal.dispatch('bar', 'baz');
    signal.dispatch('bar', 'baz', 'boom');
  })
  .add('MiniSignals', function() {
    miniSignal.dispatch();
    miniSignal.dispatch('bar');
    miniSignal.dispatch('bar', 'baz');
    miniSignal.dispatch('bar', 'baz', 'boom');
  })
  .add('signal-emitter', function() {
    signalEmitter.emit();
    signalEmitter.emit('bar');
    signalEmitter.emit('bar', 'baz');
    signalEmitter.emit('bar', 'baz', 'boom');
  })
  /* .add('event-signal', function() { // this is not a fair test, eventSignal.emit only emits one argument
    eventSignal.emit();
    eventSignal.emit('bar');
    eventSignal.emit('bar', 'baz');
    eventSignal.emit('bar', 'baz', 'boom');
  }) */
  .add('signal-lite', function() {
    signalLite.trigger();
    signalLite.trigger('bar');
    signalLite.trigger('bar', 'baz');
    signalLite.trigger('bar', 'baz', 'boom');
  });

suite
  .run();
