'use strict';

/**
 * Preparation code.
 */
var subjects = require('./subjects').constructors;
var dummy = '';

console.log('\n## init' + dummy);

require('./suite')('init')
  .add('EventEmitter', function () {
    dummy = new subjects.EventEmitter1();
  })
  .add('EventEmitter2', function () {
    dummy = new subjects.EventEmitter2();
  })
  .add('EventEmitter3', function () {
    dummy = new subjects.EventEmitter3();
  })
  .add('ReactiveProperty', function () {
    dummy = subjects.reactiveProperty();
  })
  .add('JS-Signals', function () {
    dummy = new subjects.Signal();
  })
  .add('MiniSignals', function () {
    dummy = new subjects.MiniSignal();
  })
  .run();
