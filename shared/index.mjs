import EventEmitter from 'node:events';
import Events from 'events';
import EventEmitter2 from 'eventemitter2';
import EventEmitter3 from 'eventemitter3';
import Signal from 'signals';
import { MiniSignal } from 'mini-signals';
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
  mitt
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
    awaitable: new AwaitableEventEmitter()
  };
}

export function addHandles(key, subjects, handles) {
  handles.forEach((h, i) => {
    subjects.ee.on(key, h);
    subjects.ee1.on(key, h);
    subjects.ee2.on(key, h);
    subjects.ee3.on(key, h);
    subjects.signal.add(h);
    subjects.miniSignal.add(h);
    subjects.signalEmitter.on(h);
    subjects.eventSignal.addListener(h);
    subjects.signalLite.add(h);
    subjects.subject.subscribe(h);
    subjects.reactiveProperty.on(h);
    subjects.miniVent.on(key, h);
    subjects.observ(h);
    subjects.observable(h);
    subjects.namespaceEmitter.on(key, h);
    subjects.d3Dispatch.on(`${key}.${i}`, h);
    subjects.waddup.subscribe(key, ({ data }) => h(data));
    subjects.evee.on(key, (e) => h(e.data));
    subjects.sister.on(key, h);
    subjects.zSignal.add(h);
    subjects.tSignal.connect(h);
    subjects.tsTypedEvents.on(h);
    subjects.mitt.on(key, h);
    subjects.emittery.on(key, h);
    subjects.awaitable.on(key, h);
  });

  return subjects;
}

export function createInstancesOn(key, ...args) {
  const subjects = createInstances();
  return addHandles(key, subjects, args);
};
