'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    MiniSignal = require('mini-signals');

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
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
    miniSignal = new MiniSignal();

require('./suite')('add-remove')
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
  .add('JS-Signals', function() {
    signal.add(handle);
    signal.remove(handle);
  })
  .add('MiniSignals', function() {
    var _handle = miniSignal.add(handle);
    miniSignal.detach(_handle);
  })
  .run();
