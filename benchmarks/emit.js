'use strict';

/**
 * Benchmark related modules.
 */
var benchmark = require('benchmark');



/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter;

var Signal = require('signals'),
    HcSignal;

if (typeof window !== 'undefined') {
  window.Benchmark = benchmark;
  HcSignal = require('hcSignals');
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
  HcSignal = null;
}

var ShotgunSignal = require('../flairGun');

function handle() {
  if (arguments.length > 100) console.log('damn');
}

function handle2() {
  if (arguments.length > 100) console.log('damn');
}

/**
 * Instances.
 */
var ee2 = new EventEmitter2(),
    ee3 = new EventEmitter3(),
    ee1 = new EventEmitter1();

var signal = new Signal(),
    hcSignal = HcSignal ? (new HcSignal()) : null,
    shotgunSignal = new ShotgunSignal();

ee3.on('foo', handle); ee3.on('foo', handle2);
ee2.on('foo', handle);
ee1.on('foo', handle);
signal.add(handle); signal.add(handle2);

shotgunSignal.add(handle); shotgunSignal.add(handle2);

var suite = new benchmark.Suite()

suite
  /* .add('EventEmitter1', function() {
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
  }) */
  .add('EventEmitter3', function() {
    ee3.emit('foo');
    ee3.emit('foo', 'bar');
    ee3.emit('foo', 'bar', 'baz');
    ee3.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('Signal', function() {
    signal.dispatch();
    signal.dispatch('bar');
    signal.dispatch('bar', 'baz');
    signal.dispatch('bar', 'baz', 'boom');
  })
  .add('ShotgunSignal', function() {
    shotgunSignal.emit();
    shotgunSignal.emit('bar');
    shotgunSignal.emit('bar', 'baz');
    shotgunSignal.emit('bar', 'baz', 'boom');
  })
  .on('cycle', function cycle(e) {
    var details = e.target;

    console.log('Finished benchmarking: "%s"', details.name);
    console.log('Count (%d), Cycles (%d), Elapsed (%d), Hz (%d)'
      , details.count
      , details.cycles
      , details.times.elapsed
      , details.hz
    );

  })
  .on('complete', function completed() {
    console.log('Benchmark: "%s" is the fastest.', this.filter('fastest').pluck('name').join(','));
  });

if (hcSignal) {
  suite
    .add('Signal patch', function() {
      signal.dispatch();
      signal.dispatch('bar');
      signal.dispatch('bar', 'baz');
      signal.dispatch('bar', 'baz', 'boom');
    });
}

suite
  .run();