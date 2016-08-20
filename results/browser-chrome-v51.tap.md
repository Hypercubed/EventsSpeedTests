# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 4ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 2ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 11ms]

# Summary

- duration: 32ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Chrome 52.0.2743.116 on OS X 10.11.5 NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 27,057,711 ops/sec ±12.13% (11 runs sampled)
MiniSignals x 13,914,747 ops/sec ±6.06% (11 runs sampled)
EventDispatcher x 5,607,400 ops/sec ±3.28% (11 runs sampled)
ReactiveProperty x 3,437,766 ops/sec ±4.08% (11 runs sampled)
pushStream x 2,452,010 ops/sec ±2.17% (11 runs sampled)
EventEmitter3 x 1,892,716 ops/sec ±6.85% (11 runs sampled)
EventEmitter x 1,536,364 ops/sec ±28.29% (11 runs sampled)
EventEmitter2 x 1,065,587 ops/sec ±7.49% (11 runs sampled)
JS-Signals x 816,523 ops/sec ±3.65% (11 runs sampled)
dripEmitterEnhanced x 538,530 ops/sec ±3.41% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 13,515,987 ops/sec ±3.92% (11 runs sampled) *burn in*
MiniSignals x 7,044,114 ops/sec ±3.90% (11 runs sampled)
MicroSignals x 7,006,549 ops/sec ±5.16% (11 runs sampled)
sister x 6,875,638 ops/sec ±4.71% (11 runs sampled)
signal-lite x 6,465,580 ops/sec ±3.58% (11 runs sampled)
push-stream x 6,152,500 ops/sec ±6.70% (10 runs sampled)
dripEmitter x 5,261,133 ops/sec ±6.87% (10 runs sampled)
EventEmitter3 x 5,180,840 ops/sec ±6.79% (10 runs sampled)
ReactiveProperty x 5,022,502 ops/sec ±4.21% (10 runs sampled)
evee x 3,094,422 ops/sec ±4.47% (11 runs sampled)
event-signal x 1,982,346 ops/sec ±4.70% (11 runs sampled)
RXJS x 1,601,019 ops/sec ±5.68% (11 runs sampled)
EventEmitter2 x 1,577,220 ops/sec ±4.61% (11 runs sampled)
dripEmitterEnhanced x 792,445 ops/sec ±3.28% (11 runs sampled)
pull-notify x 614,032 ops/sec ±2.49% (11 runs sampled)
signal-emitter x 441,152 ops/sec ±23.63% (10 runs sampled)
EventEmitter x 380,553 ops/sec ±8.40% (11 runs sampled)
JS-Signals x 347,298 ops/sec ±4.22% (11 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 27,562,684 ops/sec ±6.08% (11 runs sampled) *burn in*
signal-lite x 14,289,365 ops/sec ±3.69% (11 runs sampled)
MiniSignals x 14,631,232 ops/sec ±7.74% (10 runs sampled)
EventEmitter3 x 809,145 ops/sec ±5.00% (11 runs sampled)
EventEmitter2 x 752,645 ops/sec ±3.39% (11 runs sampled)
dripEmitterEnhanced x 626,731 ops/sec ±5.29% (11 runs sampled)
signal-emitter x 496,131 ops/sec ±5.13% (11 runs sampled)
JS-Signals x 233,833 ops/sec ±6.12% (11 runs sampled)
EventEmitter x 227,538 ops/sec ±9.76% (10 runs sampled)
minivents x 145,238 ops/sec ±7.25% (11 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit one object - one listener

```
Theoretical max x 9,615,052 ops/sec ±8.38% (11 runs sampled) *burn in*
MicroSignals x 8,768,378 ops/sec ±6.90% (11 runs sampled)
MiniSignals x 8,044,938 ops/sec ±4.13% (11 runs sampled)
mini-pipe x 7,104,091 ops/sec ±6.75% (11 runs sampled)
xstream x 5,931,580 ops/sec ±3.15% (10 runs sampled)
push-stream x 5,843,791 ops/sec ±5.10% (11 runs sampled)
dripEmitter x 5,744,704 ops/sec ±5.96% (11 runs sampled)
signal-lite x 6,282,815 ops/sec ±16.25% (11 runs sampled)
ReactiveProperty x 5,528,037 ops/sec ±4.61% (11 runs sampled)
EventEmitter3 x 5,185,165 ops/sec ±3.70% (11 runs sampled)
EventEmitter2 x 5,423,229 ops/sec ±12.12% (10 runs sampled)
sister x 4,803,610 ops/sec ±11.60% (11 runs sampled)
evee x 3,145,324 ops/sec ±13.96% (11 runs sampled)
EventEmitter x 3,072,784 ops/sec ±13.22% (11 runs sampled)
EventDispatcher x 2,673,181 ops/sec ±4.88% (11 runs sampled)
event-signal x 2,209,660 ops/sec ±6.04% (11 runs sampled)
RXJS x 1,557,263 ops/sec ±6.60% (11 runs sampled)
pull-pushable x 993,827 ops/sec ±5.12% (11 runs sampled)
pull-notify x 986,523 ops/sec ±9.94% (11 runs sampled)
dripEmitterEnhanced x 670,599 ops/sec ±7.26% (10 runs sampled)
signal-emitter x 453,414 ops/sec ±3.35% (11 runs sampled)
JS-Signals x 442,141 ops/sec ±4.49% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 6,300,972 ops/sec ±8.73% (10 runs sampled) *burn in*
signal-lite x 4,537,780 ops/sec ±7.71% (11 runs sampled)
MicroSignals x 4,094,136 ops/sec ±5.30% (11 runs sampled)
MiniSignals x 4,106,822 ops/sec ±8.08% (10 runs sampled)
push-stream x 3,463,337 ops/sec ±5.69% (11 runs sampled)
dripEmitter x 3,463,792 ops/sec ±5.74% (11 runs sampled)
sister x 3,521,723 ops/sec ±8.07% (10 runs sampled)
ReactiveProperty x 3,610,772 ops/sec ±12.14% (11 runs sampled)
EventEmitter3 x 3,525,378 ops/sec ±9.96% (10 runs sampled)
xstream x 2,971,929 ops/sec ±9.31% (10 runs sampled)
EventDispatcher x 2,191,862 ops/sec ±21.65% (11 runs sampled)
evee x 1,638,162 ops/sec ±5.71% (10 runs sampled)
event-signal x 1,498,446 ops/sec ±11.03% (10 runs sampled)
EventEmitter2 x 1,194,369 ops/sec ±23.66% (11 runs sampled)
RXJS x 1,046,275 ops/sec ±10.96% (10 runs sampled)
dripEmitterEnhanced x 634,511 ops/sec ±12.53% (10 runs sampled)
pull-notify x 562,845 ops/sec ±5.96% (11 runs sampled)
signal-emitter x 395,836 ops/sec ±5.45% (10 runs sampled)
JS-Signals x 296,783 ops/sec ±3.07% (11 runs sampled)
EventEmitter x 332,609 ops/sec ±20.68% (11 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit one random value - one listener

```
xstream x 25,009,532 ops/sec ±4.86% (11 runs sampled)
MicroSignals x 24,169,561 ops/sec ±9.88% (11 runs sampled)
mini-pipe x 19,759,439 ops/sec ±3.41% (11 runs sampled)
Theoretical max x 21,627,696 ops/sec ±14.86% (10 runs sampled) *burn in*
signal-lite x 21,196,317 ops/sec ±13.70% (11 runs sampled)
dripEmitter x 18,002,279 ops/sec ±3.18% (11 runs sampled)
push-stream-patch x 17,609,054 ops/sec ±5.44% (11 runs sampled)
EventEmitter3 x 17,099,308 ops/sec ±2.92% (11 runs sampled)
ReactiveProperty x 15,155,764 ops/sec ±5.37% (11 runs sampled)
MiniSignals x 17,189,217 ops/sec ±25.77% (10 runs sampled)
push-stream x 14,368,028 ops/sec ±6.51% (10 runs sampled)
evee x 12,402,367 ops/sec ±2.61% (11 runs sampled)
EventEmitter2 x 12,957,491 ops/sec ±29.40% (11 runs sampled)
EventEmitter x 7,875,288 ops/sec ±5.19% (10 runs sampled)
event-signal x 6,907,717 ops/sec ±5.45% (11 runs sampled)
RXJS x 5,446,905 ops/sec ±7.92% (11 runs sampled)
barracks x 4,962,104 ops/sec ±6.49% (11 runs sampled)
observ x 4,035,652 ops/sec ±8.63% (11 runs sampled)
d3-dispatch x 3,760,196 ops/sec ±2.52% (11 runs sampled)
pull-notify x 3,668,707 ops/sec ±2.40% (11 runs sampled)
pull-pushable x 3,408,825 ops/sec ±15.56% (11 runs sampled)
minivents x 1,992,563 ops/sec ±1.97% (11 runs sampled)
dripEmitterEnhanced x 1,966,525 ops/sec ±10.00% (11 runs sampled)
JS-Signals x 1,616,192 ops/sec ±4.88% (11 runs sampled)
signal-emitter x 1,338,760 ops/sec ±13.36% (10 runs sampled)
namespace-emitter x 798,931 ops/sec ±6.65% (10 runs sampled)
observable x 716,984 ops/sec ±3.84% (11 runs sampled)
```

_Fastest is **xstream, MicroSignals**_

## emit one random value - two listeners

```
MiniSignals x 16,567,314 ops/sec ±2.02% (11 runs sampled)
MicroSignals x 16,605,523 ops/sec ±2.54% (11 runs sampled)
signal-lite x 15,363,850 ops/sec ±2.83% (11 runs sampled)
Theoretical max x 16,098,848 ops/sec ±17.81% (11 runs sampled) *burn in*
push-stream-patch x 14,035,515 ops/sec ±3.04% (11 runs sampled)
dripEmitter x 13,910,720 ops/sec ±3.26% (11 runs sampled)
xstream x 13,274,359 ops/sec ±1.60% (11 runs sampled)
EventEmitter3 x 13,360,825 ops/sec ±2.80% (11 runs sampled)
push-stream x 13,451,778 ops/sec ±12.36% (11 runs sampled)
ReactiveProperty x 11,875,586 ops/sec ±2.67% (11 runs sampled)
evee x 7,441,553 ops/sec ±18.02% (11 runs sampled)
event-signal x 6,421,054 ops/sec ±1.90% (11 runs sampled)
EventEmitter2 x 5,473,291 ops/sec ±2.75% (11 runs sampled)
observ x 5,113,341 ops/sec ±4.24% (11 runs sampled)
waddup x 4,590,650 ops/sec ±2.85% (11 runs sampled)
RXJS x 4,290,857 ops/sec ±3.96% (11 runs sampled)
dripEmitterEnhanced x 2,219,122 ops/sec ±3.60% (11 runs sampled)
d3-dispatch x 2,171,985 ops/sec ±2.55% (11 runs sampled)
EventEmitter x 1,504,991 ops/sec ±3.77% (11 runs sampled)
pull-notify x 1,653,051 ops/sec ±14.20% (11 runs sampled)
signal-emitter x 1,461,125 ops/sec ±5.09% (11 runs sampled)
minivents x 1,219,058 ops/sec ±1.84% (11 runs sampled)
JS-Signals x 1,180,391 ops/sec ±5.72% (11 runs sampled)
namespace-emitter x 845,630 ops/sec ±1.88% (10 runs sampled)
observable x 754,653 ops/sec ±2.54% (11 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 28,884,619 ops/sec ±11.10% (10 runs sampled) *burn in*
MicroSignals x 18,600,780 ops/sec ±2.46% (11 runs sampled)
push-stream x 15,880,999 ops/sec ±4.41% (11 runs sampled)
xstream x 15,296,358 ops/sec ±1.20% (11 runs sampled)
ReactiveProperty x 15,120,160 ops/sec ±3.80% (11 runs sampled)
dripEmitter x 14,010,225 ops/sec ±4.25% (11 runs sampled)
EventEmitter3 x 12,917,622 ops/sec ±3.42% (11 runs sampled)
MiniSignals x 8,409,737 ops/sec ±2.29% (11 runs sampled)
signal-lite x 6,470,783 ops/sec ±2.49% (11 runs sampled)
event-signal x 6,227,447 ops/sec ±2.88% (11 runs sampled)
EventEmitter2 x 5,609,806 ops/sec ±2.96% (11 runs sampled)
RXJS x 4,507,100 ops/sec ±4.65% (11 runs sampled)
evee x 3,328,378 ops/sec ±3.60% (11 runs sampled)
dripEmitterEnhanced x 2,250,138 ops/sec ±3.64% (10 runs sampled)
pull-notify x 1,846,542 ops/sec ±7.68% (11 runs sampled)
EventEmitter x 1,515,740 ops/sec ±2.53% (11 runs sampled)
signal-emitter x 1,447,179 ops/sec ±3.51% (10 runs sampled)
JS-Signals x 1,257,317 ops/sec ±2.72% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
MiniSignals x 5,195,603 ops/sec ±3.21% (11 runs sampled)
MicroSignal x 5,139,406 ops/sec ±2.58% (11 runs sampled)
push-stream x 5,121,904 ops/sec ±3.74% (11 runs sampled)
signal-lite x 4,734,987 ops/sec ±3.42% (11 runs sampled)
dripEmitter x 4,644,216 ops/sec ±4.00% (11 runs sampled)
xstream x 4,477,313 ops/sec ±1.37% (11 runs sampled)
EventEmitter3 x 4,470,108 ops/sec ±3.12% (11 runs sampled)
Theoretical max x 4,558,475 ops/sec ±13.25% (10 runs sampled) *burn in*
ReactiveProperty x 3,945,448 ops/sec ±2.25% (11 runs sampled)
event-signal x 3,118,950 ops/sec ±2.25% (11 runs sampled)
EventEmitter2 x 2,660,928 ops/sec ±4.15% (11 runs sampled)
evee x 2,019,374 ops/sec ±4.13% (11 runs sampled)
dripEmitterEnhanced x 1,803,478 ops/sec ±2.41% (11 runs sampled)
RXJS x 1,688,736 ops/sec ±5.09% (11 runs sampled)
signal-emitter x 996,319 ops/sec ±3.61% (11 runs sampled)
EventEmitter x 495,419 ops/sec ±3.01% (11 runs sampled)
pull-notify x 427,359 ops/sec ±2.96% (11 runs sampled)
JS-Signals x 414,815 ops/sec ±4.32% (11 runs sampled)
minivents x 320,627 ops/sec ±3.71% (11 runs sampled)
```

_Fastest is **MiniSignals, MicroSignal, push-stream**_

## emit one value - one listener

```
Theoretical max x 42,648,454 ops/sec ±8.25% (11 runs sampled) *burn in*
xstream x 39,193,316 ops/sec ±2.93% (11 runs sampled)
MicroSignals x 37,974,623 ops/sec ±2.34% (11 runs sampled)
MiniSignals x 33,131,416 ops/sec ±4.31% (11 runs sampled)
mini-pipe x 29,472,299 ops/sec ±2.57% (11 runs sampled)
sister x 29,831,161 ops/sec ±15.05% (11 runs sampled)
signal-lite x 26,523,138 ops/sec ±12.76% (11 runs sampled)
EventEmitter2 x 23,803,346 ops/sec ±3.29% (11 runs sampled)
EventEmitter3 x 22,802,017 ops/sec ±5.72% (11 runs sampled)
dripEmitter x 22,368,733 ops/sec ±4.24% (11 runs sampled)
push-stream-patch x 21,686,468 ops/sec ±2.31% (11 runs sampled)
ReactiveProperty x 21,770,790 ops/sec ±3.05% (11 runs sampled)
push-stream x 20,936,669 ops/sec ±1.67% (11 runs sampled)
evee x 16,473,577 ops/sec ±2.64% (11 runs sampled)
EventEmitter x 12,251,359 ops/sec ±11.51% (11 runs sampled)
event-signal x 7,953,532 ops/sec ±5.27% (11 runs sampled)
RXJS x 6,456,965 ops/sec ±2.71% (11 runs sampled)
barracks x 6,081,841 ops/sec ±6.32% (11 runs sampled)
d3-dispatch x 5,019,263 ops/sec ±3.19% (11 runs sampled)
observ x 4,547,985 ops/sec ±2.85% (11 runs sampled)
pull-notify x 3,497,408 ops/sec ±5.40% (10 runs sampled)
pull-pushable x 3,300,291 ops/sec ±13.34% (11 runs sampled)
dripEmitterEnhanced x 2,785,957 ops/sec ±4.29% (10 runs sampled)
minivents x 2,094,638 ops/sec ±5.92% (11 runs sampled)
JS-Signals x 1,848,730 ops/sec ±2.76% (11 runs sampled)
signal-emitter x 1,568,091 ops/sec ±4.35% (11 runs sampled)
namespace-emitter x 1,170,496 ops/sec ±2.86% (11 runs sampled)
observable x 856,596 ops/sec ±6.79% (11 runs sampled)
```

_Fastest is **xstream**_

## emit one value - two listeners

```
Theoretical max x 25,068,197 ops/sec ±12.79% (11 runs sampled) *burn in*
MicroSignals x 19,170,217 ops/sec ±3.91% (11 runs sampled)
MiniSignals x 18,749,149 ops/sec ±3.57% (11 runs sampled)
signal-lite x 18,173,999 ops/sec ±2.75% (11 runs sampled)
sister x 19,222,243 ops/sec ±12.85% (11 runs sampled)
push-stream-patch x 16,459,889 ops/sec ±3.94% (11 runs sampled)
push-stream x 15,261,676 ops/sec ±1.72% (11 runs sampled)
EventEmitter3 x 14,765,766 ops/sec ±3.81% (11 runs sampled)
dripEmitter x 14,363,402 ops/sec ±5.06% (11 runs sampled)
ReactiveProperty x 14,371,024 ops/sec ±6.22% (10 runs sampled)
xstream x 14,294,862 ops/sec ±15.61% (10 runs sampled)
evee x 9,534,996 ops/sec ±2.30% (11 runs sampled)
event-signal x 6,578,005 ops/sec ±4.73% (11 runs sampled)
observ x 6,008,628 ops/sec ±3.26% (11 runs sampled)
EventEmitter2 x 5,225,312 ops/sec ±3.06% (11 runs sampled)
waddup x 4,811,610 ops/sec ±2.63% (11 runs sampled)
RXJS x 4,568,141 ops/sec ±3.74% (11 runs sampled)
d3-dispatch x 2,595,232 ops/sec ±3.18% (11 runs sampled)
dripEmitterEnhanced x 2,580,946 ops/sec ±3.17% (11 runs sampled)
pull-notify x 1,963,133 ops/sec ±2.50% (11 runs sampled)
signal-emitter x 1,577,983 ops/sec ±2.45% (11 runs sampled)
EventEmitter x 1,565,791 ops/sec ±2.34% (11 runs sampled)
minivents x 1,262,182 ops/sec ±2.75% (10 runs sampled)
JS-Signals x 1,273,823 ops/sec ±3.74% (11 runs sampled)
namespace-emitter x 932,903 ops/sec ±2.40% (11 runs sampled)
observable x 805,200 ops/sec ±2.87% (11 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, sister**_

## emit one value - with context

```
Theoretical max x 27,284,099 ops/sec ±18.95% (10 runs sampled) *burn in*
sister x 20,173,122 ops/sec ±2.75% (11 runs sampled)
MicroSignals x 19,345,442 ops/sec ±2.55% (11 runs sampled)
signal-lite x 18,637,358 ops/sec ±2.62% (11 runs sampled)
MiniSignals x 18,314,209 ops/sec ±4.01% (11 runs sampled)
push-stream x 15,969,942 ops/sec ±4.30% (11 runs sampled)
ReactiveProperty x 15,590,530 ops/sec ±3.29% (11 runs sampled)
EventEmitter3 x 15,267,080 ops/sec ±3.06% (11 runs sampled)
dripEmitter x 14,129,723 ops/sec ±2.19% (11 runs sampled)
event-signal x 6,727,453 ops/sec ±2.87% (11 runs sampled)
EventEmitter2 x 5,643,734 ops/sec ±3.16% (11 runs sampled)
RXJS x 4,598,317 ops/sec ±4.16% (11 runs sampled)
evee x 3,434,392 ops/sec ±1.60% (11 runs sampled)
dripEmitterEnhanced x 2,507,945 ops/sec ±2.39% (11 runs sampled)
pull-notify x 1,970,994 ops/sec ±3.90% (11 runs sampled)
signal-emitter x 1,543,595 ops/sec ±3.35% (11 runs sampled)
EventEmitter x 1,542,739 ops/sec ±3.35% (11 runs sampled)
JS-Signals x 1,248,242 ops/sec ±3.97% (11 runs sampled)
```

_Fastest is **sister**_

## emit variable number of values

```
Theoretical max x 6,956,787 ops/sec ±12.82% (11 runs sampled) *burn in*
MiniSignals x 4,719,190 ops/sec ±3.83% (11 runs sampled)
signal-lite x 4,418,735 ops/sec ±2.87% (11 runs sampled)
EventEmitter3 x 1,258,574 ops/sec ±3.75% (11 runs sampled)
EventEmitter2 x 817,168 ops/sec ±2.95% (11 runs sampled)
dripEmitterEnhanced x 484,918 ops/sec ±4.35% (11 runs sampled)
signal-emitter x 332,050 ops/sec ±2.86% (11 runs sampled)
JS-Signals x 320,961 ops/sec ±4.65% (11 runs sampled)
EventEmitter x 274,629 ops/sec ±5.52% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 55,334,632 ops/sec ±2.01% (11 runs sampled)
EventDispatcher x 55,040,055 ops/sec ±3.40% (11 runs sampled)
DripEmitter x 54,602,158 ops/sec ±5.24% (10 runs sampled)
EventEmitter x 36,178,142 ops/sec ±3.38% (11 runs sampled)
MiniSignals x 35,934,590 ops/sec ±5.16% (11 runs sampled)
EventEmitter2 x 32,269,201 ops/sec ±1.98% (11 runs sampled)
Theoretical max x 41,325,286 ops/sec ±45.02% (11 runs sampled) *burn in*
DripEmitterEnhanced x 22,072,368 ops/sec ±4.11% (11 runs sampled)
push-stream x 13,335,510 ops/sec ±2.26% (11 runs sampled)
JS-Signals x 2,098,747 ops/sec ±11.86% (10 runs sampled)
ReactiveProperty x 1,393,592 ops/sec ±11.09% (10 runs sampled)
pull-notify x 1,044,642 ops/sec ±15.75% (10 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher, DripEmitter**_
