'use strict';

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
var push = require('push-stream/stream');
var pull = require('pull-stream');
pull.notify = require('pull-notify');
pull.pushable = require('pull-pushable');
var xs = require('xstream').default;
var waddup = require('waddup').default;
var Evee = require('evee/dist/evee');
var Sister = require('sister');

var EventDispatcher = require('./eventdispatcher');
var miniPipe = require('./pipe');
var pushPatch = require('./push-stream-patch');
var MicroSignal = require('./micro-signals');

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
  miniPipe: miniPipe,
  pushPatch: pushPatch,
  MicroSignal: MicroSignal,
  pull: pull,
  xs: xs,
  waddup: waddup,
  Evee: Evee,
  Sister: Sister
};

switch (process.env.BENCH) {
  case 'fast':
    module.exports.minSamples = 1;
    module.exports.maxTime = 0.01;
    break;
  case 'full':
    module.exports.minSamples = 5;
    module.exports.maxTime = 5;
    break;
  default:
    module.exports.minSamples = 10;
    module.exports.maxTime = 0.5;
}

var createInstances = function createInstances() {
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
  var pushStream = push();
  var pipe = miniPipe();
  var pushStreamPatch = pushPatch();
  var microSignal = new MicroSignal();
  var pullNotify = pull.notify();
  var pullPushable = pull.pushable();
  var xstream = xs.create();
  var evee = new Evee();
  var sister = Sister();

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
    pipe: pipe,
    pushStreamPatch: pushStreamPatch,
    microSignal: microSignal,
    pullNotify: pullNotify,
    pullPushable: pullPushable,
    xstream: xstream,
    waddup: waddup,
    evee: evee,
    sister: sister
  };
};

var addHandles = function addHandles(subjects, handels) {
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
    try {
      subjects.barracksDispatcher.on('foo', h);
    } catch (err) {
    }
    subjects.pushStream(h);
    subjects.pipe(h);
    subjects.pushStreamPatch(h);
    subjects.microSignal.add(h);
    pull(subjects.pullNotify.listen(), pull.drain(h));
    pull(subjects.pullPushable, pull.drain(h));
    subjects.xstream.addListener({
      next: h,
      error: function (err) {
        console.error(err);
      },
      complete: function () {
        console.log('completed');
      }
    });
    subjects.waddup.subscribe('foo', function (topic, data) {
      h(data);
    });
    subjects.evee.on('foo', function (e) {
      return h(e.data);
    });
    subjects.sister.on('foo', h);
  });

  return subjects;
};

var createInstancesOn = function createInstancesOn() {
  var subjects = createInstances();
  var args = Array.prototype.slice.apply(arguments);
  return addHandles(subjects, args);
};

module.exports.createInstances = createInstances;
module.exports.createInstancesOn = createInstancesOn;
module.exports.addHandles = addHandles;
