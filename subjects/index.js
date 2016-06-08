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
var DripEmitter = require('drip/lib/drip').EventEmitter;
var DripEmitterEnhanced = require('drip/lib/drip').EnhancedEmitter;
var barracks = require('barracks');
var push = require('push-stream');
var pull = require('pull-stream');
pull.notify = require('pull-notify');
var EventDispatcher = require('./eventdispatcher');

if (typeof window === 'undefined') {
  EventEmitter2 = EventEmitter2.EventEmitter2;
}

module.exports.constructors = {
  EventEmitter1: EventEmitter1,
  EventEmitter2: EventEmitter2,
  EventEmitter3: EventEmitter3,
  Signal: Signal,
  MiniSignal: MiniSignal,
  SignalEmitter: SignalEmitter,
  EventSignal: EventSignal,
  SignalLite: SignalLite,
  Subject: Subject,
  reactiveProperty: reactiveProperty,
  MiniVent: MiniVent,
  observ: observ,
  observable: observable,
  namespaceEmitter: namespaceEmitter,
  d3Dispatch: d3Dispatch,
  EventDispatcher: EventDispatcher,
  DripEmitter: DripEmitter,
  DripEmitterEnhanced: DripEmitterEnhanced,
  barracks: barracks,
  push: push,
  pull: pull
};

module.exports.createInstances = createInstances;
module.exports.createInstancesOn = createInstancesOn;
module.exports.addHandles = addHandles;
module.exports.minSamples = 10;
module.exports.maxTime = 0.05;

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
  var eventDispatcher = new EventDispatcher();
  var dripEmitter = new DripEmitter();
  var dripEmitterEnhanced = new DripEmitterEnhanced();
  var barracksDispatcher = barracks();
  var pushStream = push.stream();
  var pullNotify = pull.notify();

  return {
    ee1: ee1,
    ee2: ee2,
    ee3: ee3,
    signalEmitter: signalEmitter,
    eventSignal: eventSignal,
    signal: signal,
    miniSignal: miniSignal,
    signalLite: signalLite,
    subject: subject,
    rProperty: rProperty,
    miniVent: miniVent,
    observValue: observValue,
    observableValue: observableValue,
    nsEmitter: nsEmitter,
    dispatch: dispatch,
    eventDispatcher: eventDispatcher,
    dripEmitter: dripEmitter,
    dripEmitterEnhanced: dripEmitterEnhanced,
    barracksDispatcher: barracksDispatcher,
    pushStream: pushStream,
    pullNotify: pullNotify
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
    subjects.eventDispatcher.addEventListener('foo', h);
    subjects.dripEmitter.on('foo', h);
    subjects.dripEmitterEnhanced.on('foo', h);
    subjects.barracksDispatcher.on('foo', h);
    subjects.pushStream(h);
    pull(subjects.pullNotify.listen(), pull.drain(h));
  });

  return subjects;
}

function createInstancesOn() {
  var subjects = createInstances();
  var args = Array.prototype.slice.apply(arguments);
  return addHandles(subjects, args);
}
