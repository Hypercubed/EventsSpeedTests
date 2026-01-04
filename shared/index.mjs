import EventEmitter from 'node:events';
import Events from 'events';
import EventEmitter2 from 'eventemitter2';
import EventEmitter3 from 'eventemitter3';
import Signal from 'signals';
import { MiniSignal, MiniSignalEmitter } from 'mini-signals';
import SignalEmitter from 'signal-emitter';
import EventSignal from 'event-signal';
import { SignalLite } from 'signals-lite';
import { Subject } from 'rxjs';
import reactiveProperty from 'reactive-property';
import MiniVent from 'minivents';
import observ from 'observ';
import observable from 'observable';
import namespaceEmitter from 'namespace-emitter';
import { dispatch as d3Dispatch } from 'd3-dispatch';
import waddup from 'waddup';
import Evee from 'evee';
import Sister from 'sister';
import { Signal as ZSignal } from '@zouloux/signal';
import { Signal as TSignal } from "typed-signals";
import { Event } from 'ts-typed-events';
import mitt from 'mitt';
import Emittery from 'emittery';
import { AwaitableEventEmitter  } from '@bitr/awaitable-event-emitter';
import { EventEmitter as TSeepEventEmitter } from "tseep";
import { Evt } from "evt";
import { Signal as SignalPoly } from "signal-polyfill";
import { batchedEffect } from 'signal-utils/subtle/batched-effect';
import { CozyEvent } from 'cozyevent';

export const constructors = {
  EventEmitter,
  Events,
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
  d3Dispatch,
  waddup,
  Evee,
  Sister,
  ZSignal,
  TSignal,
  Event,
  mitt,
  TSeepEventEmitter,
  Evt,
  SignalPoly: SignalPoly.State,
  CozyEvent,
  MiniSignalEmitter
};

export const minSamples = 10;
export const maxTime = 1;

export function createInstances() {
  return {
    ee: new EventEmitter(),
    ee1: new Events(),
    ee2: new EventEmitter2(),
    ee3: new EventEmitter3(),
    signalEmitter: new SignalEmitter(new EventEmitter3(), 'foo'),
    eventSignal: new EventSignal(),
    signal: new Signal(),
    miniSignal: new MiniSignal(),
    miniSignalEmitter: new MiniSignalEmitter({
      'foo': new MiniSignal()
    }),
    signalLite: new SignalLite(),
    subject: new Subject(),
    reactiveProperty: reactiveProperty(),
    miniVent: new MiniVent(),
    observ: observ(),
    observable: observable(),
    namespaceEmitter: namespaceEmitter(),
    d3Dispatch: d3Dispatch('foo'),
    waddup,
    evee: new Evee(),
    sister: Sister(),
    zSignal: ZSignal(),
    tSignal: new TSignal(),
    tsTypedEvents: new Event(),
    mitt: mitt(),
    emittery: new Emittery(),
    awaitable: new AwaitableEventEmitter(),
    tseep: new TSeepEventEmitter(),
    evt: new Evt.create(),
    signalState: new SignalPoly.State(),
    cozyEvent: new CozyEvent()
  };
}

export function addHandles(key, subjects, handles) {
  handles.forEach((h, i) => {
    subjects.ee.on(key, h); // node:events
    subjects.ee1.on(key, h); // Gozala/events
    subjects.ee2.on(key, h); // hij1nx/EventEmitter2
    subjects.ee3.on(key, h); // primus/eventemitter3
    subjects.signal.add(h); // millermedeiros/js-signals
    subjects.miniSignal.add(h); // Hypercubed/mini-signals
    subjects.miniSignalEmitter.on('foo', h); // Hypercubed/mini-signals MiniSignalEmitter
    subjects.signalEmitter.on(h); // jasonkarns/signal-emitter
    subjects.eventSignal.addListener(h); // r-park/event-signal
    subjects.signalLite.add(h); // CaptainN/SignalsLite.js
    subjects.subject.subscribe(h); // reactivex/rxjs
    subjects.reactiveProperty.on(h); // datavis-tech/reactive-property
    subjects.miniVent.on(key, h); // allouis/minivents
    subjects.observ(h); // Raynos/observ
    subjects.observable(h); // dominictarr/observable
    subjects.namespaceEmitter.on(key, h); // sethvincent/namespace-emitter
    subjects.d3Dispatch.on(`${key}.${i}`, h); // d3/d3-dispatch
    subjects.waddup.subscribe(key, ({ data }) => h(data)); // planttheidea/waddup
    subjects.evee.on(key, (e) => h(e.data)); // SplittyDev/evee.js
    subjects.sister.on(key, h); // gajus/sister
    subjects.zSignal.add(h); // zouloux/signal
    subjects.tSignal.connect(h); // Lusito/typed-signals
    subjects.tsTypedEvents.on(h); // JacobFischer/ts-typed-events
    subjects.mitt.on(key, h); // developit/mitt
    subjects.emittery.on(key, h); // sindresorhus/emittery
    subjects.tseep.on(key, h); // Morglod/tseep
    subjects.evt.attach(h); // garronej/evt
    subjects.awaitable.on(key, h); // bitrinjani/awaitable-event-emitter
    batchedEffect(() => h(subjects.signalState.get())); // signal-polyfill
    subjects.cozyEvent.on(key, h); // cozyevent
  });

  return subjects;
}

export function createInstancesOn(key, ...args) {
  const subjects = createInstances();
  return addHandles(key, subjects, args);
};
