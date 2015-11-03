'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    MiniSignal = require('mini-signals');

if (typeof window !== 'undefined') {
  MiniSignal = (typeof MiniSignal !== 'function') ? MiniSignal.default : MiniSignal;  // https://github.com/systemjs/systemjs/issues/304
} else {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

require('./suite')('init')
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
  .add('MiniSignals', function() {
    var miniSignal = new MiniSignal();
  })
  .run();
