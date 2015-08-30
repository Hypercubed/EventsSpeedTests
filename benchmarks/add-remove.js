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
    ShotgunSignal = require('../flairGun'),
    Signal2;

if (typeof window !== 'undefined') {
  window.Benchmark = benchmark;
  Signal2 = require('hcSignals');
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
  Signal2 = require('../jspm_packages/github/Hypercubed/js-signals@fixv8optbuild/dist/signals');
}

function handle() {
  if (arguments.length > 100) {console.log('damn');}
}

/**
 * Instances.
 */
var ee2 = new EventEmitter2(),
    ee3 = new EventEmitter3(),
    ee1 = new EventEmitter1(),
    signal = new Signal(),
    signal2 = new Signal2(),
    shotgunSignal = new ShotgunSignal();

var suite = require('./suite')('add-remove');

suite
  .add('EventEmitter1', function() {
    ee1.on('foo', handle);
    ee1.removeListener('foo', handle);
  })
  .add('EventEmitter2', function() {
    ee2.on('foo', handle);
    ee2.removeListener('foo', handle);
  })
  .add('EventEmitter3', function() {
    ee3.on('foo', handle);
    ee3.removeListener('foo', handle);
  })
  .add('Signal', function() {
    signal.add(handle);
    signal.remove(handle);
  })
  .add('Signal patch', function() {
    signal2.add(handle);
    signal2.remove(handle);
  })
  .add('ShotgunSignal', function() {
    shotgunSignal.add(handle);
    shotgunSignal.remove(handle);
  });

suite
  .run();