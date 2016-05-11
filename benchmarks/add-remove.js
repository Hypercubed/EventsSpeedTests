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
}

function handle() {
  if (arguments.length > 100) {
    console.log('damn');
  }
}

/**
 * Instances.
 */
var ee2 = new EventEmitter2();
var ee3 = new EventEmitter3();
var ee1 = new EventEmitter1();
var signal = new Signal();
var miniSignal = new MiniSignal();

require('./suite')('add-remove')
  .add('EventEmitter', function () {
    ee1.on('foo', handle);
    ee1.removeListener('foo', handle);
  })
  .add('EventEmitter2', function () {
    ee2.on('foo', handle);
    ee2.removeListener('foo', handle);
  })
  .add('EventEmitter3', function () {
    ee3.on('foo', handle);
    ee3.removeListener('foo', handle);
  })
  .add('JS-Signals', function () {
    signal.add(handle);
    signal.remove(handle);
  })
  .add('MiniSignals', function () {
    var _handle = miniSignal.add(handle);
    miniSignal.detach(_handle);
  })
  .run();
