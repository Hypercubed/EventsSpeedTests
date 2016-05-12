
var EventEmitter1 = require('events').EventEmitter;
var EventEmitter2 = require('eventemitter2');
var EventEmitter3 = require('eventemitter3');
var Signal = require('signals');
var MiniSignal = require('mini-signals');
var SignalEmitter = require('signal-emitter');
var EventSignal = require('event-signal');
var SignalLite = require('signals-lite').SignalLite;
var Subject = require('@reactivex/rxjs/dist/cjs/Subject').Subject;
var reactiveProperty = require('reactive-property');
var MiniVent = require('minivents');
var observ = require('observ');
var observable = require('observable');
var namespaceEmitter = require('namespace-emitter');
var d3Dispatch = require('d3-dispatch').dispatch;

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

module.exports.constructors = {
  EventEmitter1,
  EventEmitter2,
  EventEmitter3,
  Signal,
  MiniSignal,
  SignalEmitter,
  EventSignal,
  SignalLite,
  Subject,
  reactiveProperty,
  MiniVent,
  observ,
  observable,
  namespaceEmitter,
  d3Dispatch
};

module.exports.createInstances = createInstances;
module.exports.createInstancesOn = createInstancesOn;
module.exports.addHandles = addHandles;

function createInstances() {
  var ee1 = new EventEmitter1();
  var ee2 = new EventEmitter2();
  var ee3 = new EventEmitter3();
  var signalEmitter = new SignalEmitter(new EventEmitter3(), 'foo');
  var eventSignal = new EventSignal();
  var signal = new Signal();
  var miniSignal = new MiniSignal();
  var signalLite = new SignalLite();
  var subject = new Subject();
  var rProperty = reactiveProperty();
  var miniVent = new MiniVent();
  var observValue = observ();
  var observableValue = observable();
  var nsEmitter = namespaceEmitter();
  var dispatch = d3Dispatch('foo');

  return {
    ee1,
    ee2,
    ee3,
    signalEmitter,
    eventSignal,
    signal,
    miniSignal,
    signalLite,
    subject,
    rProperty,
    miniVent,
    observValue,
    observableValue,
    nsEmitter,
    dispatch
  };
}

function addHandles(subjects, handels) {
  handels.forEach(function (h, i) {
    subjects.ee1.on('foo', h);
    subjects.ee2.on('foo', h);
    subjects.ee3.on('foo', h);
    subjects.signal.add(h);
    subjects.miniSignal.add(h);
    subjects.signalEmitter.on(h);
    subjects.eventSignal.addListener(h);
    subjects.signalLite.add(h);
    subjects.subject.subscribe(h);
    subjects.rProperty.on(h);
    subjects.miniVent.on('foo', h);
    subjects.observValue(h);
    subjects.observableValue(h);
    subjects.nsEmitter.on('foo', h);
    subjects.dispatch.on('foo.' + i, h);
  });

  return subjects;
}

function createInstancesOn() {
  var subjects = createInstances();
  var args = Array.prototype.slice.apply(arguments);
  return addHandles(subjects, args);
}
