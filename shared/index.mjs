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

export const constructors = {
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
};

export const minSamples = 10;
export const maxTime = 0.1;

export function createInstances() {
  return {
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
  };
}

export function addHandles(subjects, handles) {
  handles.forEach((h, i) => {
    subjects.ee1.on('foo', h);
    subjects.ee2.on('foo', h);
    subjects.ee3.on('foo', h);
    subjects.signal.add(h);
    subjects.miniSignal.add(h);
    subjects.signalEmitter.on(h);
    subjects.eventSignal.addListener(h);
    subjects.signalLite.add(h);
    subjects.subject.subscribe(h);
    subjects.reactiveProperty.on(h);
    subjects.miniVent.on('foo', h);
    subjects.observ(h);
    subjects.observable(h);
    subjects.namespaceEmitter.on('foo', h);
    subjects.d3Dispatch.on('foo.' + i, h);
    subjects.waddup.subscribe('foo', ({ data }) => h(data));
    subjects.evee.on('foo', (e) => h(e.data));
    subjects.sister.on('foo', h);
  });

  return subjects;
}

export const createInstancesOn = function createInstancesOn() {
  const subjects = createInstances();
  const args = Array.prototype.slice.apply(arguments);
  return addHandles(subjects, args);
};
