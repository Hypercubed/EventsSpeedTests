'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    MiniSignal = require('mini-signals'),
    Signal2;

if (typeof window !== 'undefined') {
  Signal2 = require('hcSignals');
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
  Signal2 = require('../jspm_packages/github/Hypercubed/js-signals@fixv8optbuild/dist/signals');
}

var suite = require('./suite')('init');

suite
  .add('EventEmitter1', function() {
    var ee2 = new EventEmitter1();
  })
  .add('EventEmitter2', function() {
    var ee2 = new EventEmitter2();
  })
  .add('EventEmitter3', function() {
    var ee2 = new EventEmitter3();
  })
  .add('JS-Signals', function() {
    var signal = new Signal();
  })
  .add('JS-Signals patch', function() {
    var signal2 = new Signal2();
  })
  .add('MiniSignals', function() {
    var miniSignal = new MiniSignal();
  });

suite
  .run();
