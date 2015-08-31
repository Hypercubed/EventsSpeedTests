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

for(var i = 0; i < 10; i++) {
  var handle = function handle() {
    if (arguments.length > 100) {console.log('damn');}
  }

  // events
  ee1.on('foo', handle);
  ee2.on('foo', handle);
  ee3.on('foo', handle);
  miniVent.on('foo', handle);

  // signals
  signal.add(handle);
  signal2.add(handle);
  miniSignal.add(handle);
  signalEmitter.on(handle);
  eventSignal.addListener(handle);
  signalLite.add(handle);
}

var suite = require('./suite')('emit many');

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
  .add('JS-Signals patch', function() {
    signal2.dispatch();
    signal2.dispatch('bar');
    signal2.dispatch('bar', 'baz');
    signal2.dispatch('bar', 'baz', 'boom');
  })
  .add('MiniSignals', function() {
    miniSignal.emit();
    miniSignal.emit('bar');
    miniSignal.emit('bar', 'baz');
    miniSignal.emit('bar', 'baz', 'boom');
  })
  .add('signal-emitter', function() {
    signalEmitter.emit();
    signalEmitter.emit('bar');
    signalEmitter.emit('bar', 'baz');
    signalEmitter.emit('bar', 'baz', 'boom');
  })
  .add('event-signal', function() {  // note event signal only passes on param
    eventSignal.emit();
    eventSignal.emit('bar');
    eventSignal.emit(['bar', 'baz']);
    eventSignal.emit(['bar', 'baz', 'boom']);
  })
  .add('signal-lite', function() {
    signalLite.trigger();
    signalLite.trigger('bar');
    signalLite.trigger('bar', 'baz');
    signalLite.trigger('bar', 'baz', 'boom');
  })
  .add('minivents', function() {
    miniVent.emit('foo');
    miniVent.emit('foo','bar');
    miniVent.emit('foo','bar', 'baz');
    miniVent.emit('foo','bar', 'baz', 'boom');
  });

suite
  .run();
