'use strict';

/**
 * Preparation code.
 */
var EventEmitter1 = require('events').EventEmitter;
var EventEmitter2 = require('eventemitter2');
var EventEmitter3 = require('eventemitter3');
var Signal = require('signals');
var MiniSignal = require('mini-signals');

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
} else {
  MiniSignal = (typeof MiniSignal === 'function') ? MiniSignal : MiniSignal.default;  // https://github.com/systemjs/systemjs/issues/304
}

require('./suite')('init')
  .add('EventEmitter', function () {
    var ee2 = new EventEmitter1();
  })
  .add('EventEmitter2', function () {
    var ee2 = new EventEmitter2();
  })
  .add('EventEmitter3', function () {
    var ee2 = new EventEmitter3();
  })
  .add('JS-Signals', function () {
    var signal = new Signal();
  })
  .add('MiniSignals', function () {
    var miniSignal = new MiniSignal();
  })
  .run();
