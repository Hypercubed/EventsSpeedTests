'use strict';

/**
 * Preparation code.
 */
var EventEmitter2 = require('eventemitter2'),
    EventEmitter3 = require('eventemitter3'),
    EventEmitter1 = require('events').EventEmitter,
    Signal = require('signals'),
    MiniSignal = require('mini-signals'),
    Signal2 = require('signals-patch');

if (typeof window !== 'undefined') {
  MiniSignal = (typeof MiniSignal !== 'function') ? MiniSignal.default : MiniSignal;  // https://github.com/systemjs/systemjs/issues/304
} else {
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
    signal2 = new Signal2(),
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
  .add('JS-Signals patch', function() {
    signal2.add(handle);
    signal2.remove(handle);
  })
  .add('MiniSignals', function() {
    miniSignal.add(handle);
    miniSignal.remove(handle);
  })
  .run();
