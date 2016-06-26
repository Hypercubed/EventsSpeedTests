# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 3ms]
- ✔ emit one array [pass: 48, fail: 0, duration: 7ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 40, fail: 0, duration: 3ms]
- ✔ emit one object - two listeners [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 51, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 36, fail: 0, duration: 2ms]
- ✔ emit one value - one listener [pass: 52, fail: 0, duration: 6ms]
- ✔ emit one value - two listeners [pass: 69, fail: 0, duration: 3ms]
- ✔ emit one value - with context [pass: 48, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 12ms]

# Summary

- duration: 44ms
- planned: 500
- assertions: 500
- pass: 500
- fail: 0

# Comments

## Platform

Chrome 51.0.2704.103 on OS X 10.11.5 NODE_ENV = production BENCH = mid

## add and remove

```
dripEmitter x 26,847,764 ops/sec ±2.35% (15 runs sampled)
MiniSignals x 12,490,114 ops/sec ±4.11% (14 runs sampled)
EventDispatcher x 5,663,363 ops/sec ±5.21% (15 runs sampled)
ReactiveProperty x 4,413,274 ops/sec ±3.31% (15 runs sampled)
pushStream x 3,830,803 ops/sec ±4.24% (15 runs sampled)
EventEmitter3 x 2,136,680 ops/sec ±3.32% (14 runs sampled)
EventEmitter x 1,617,072 ops/sec ±7.70% (14 runs sampled)
EventEmitter2 x 1,342,621 ops/sec ±3.47% (14 runs sampled)
JS-Signals x 840,228 ops/sec ±3.02% (15 runs sampled)
dripEmitterEnhanced x 622,511 ops/sec ±3.14% (15 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 11,200,889 ops/sec ±9.94% (14 runs sampled) *burn in*
MicroSignals x 7,225,655 ops/sec ±3.58% (15 runs sampled)
MiniSignals x 7,095,489 ops/sec ±2.11% (15 runs sampled)
signal-lite x 6,615,153 ops/sec ±3.16% (15 runs sampled)
push-stream x 6,233,974 ops/sec ±3.71% (14 runs sampled)
dripEmitter x 5,464,339 ops/sec ±3.94% (15 runs sampled)
ReactiveProperty x 5,319,685 ops/sec ±3.14% (15 runs sampled)
EventEmitter3 x 4,932,476 ops/sec ±3.07% (14 runs sampled)
event-signal x 2,070,841 ops/sec ±3.81% (14 runs sampled)
EventEmitter2 x 1,744,181 ops/sec ±2.71% (14 runs sampled)
RXJS x 1,559,677 ops/sec ±3.23% (15 runs sampled)
dripEmitterEnhanced x 783,043 ops/sec ±2.96% (15 runs sampled)
signal-emitter x 525,385 ops/sec ±2.41% (14 runs sampled)
pull-notify x 471,467 ops/sec ±3.19% (15 runs sampled)
EventEmitter x 195,215 ops/sec ±3.95% (15 runs sampled)
JS-Signals x 176,261 ops/sec ±2.45% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 55,482,966 ops/sec ±6.14% (15 runs sampled) *burn in*
MiniSignals x 18,168,605 ops/sec ±3.46% (15 runs sampled)
signal-lite x 17,681,796 ops/sec ±3.33% (15 runs sampled)
EventEmitter3 x 884,036 ops/sec ±4.02% (14 runs sampled)
EventEmitter2 x 785,530 ops/sec ±3.73% (14 runs sampled)
dripEmitterEnhanced x 657,738 ops/sec ±3.23% (14 runs sampled)
signal-emitter x 585,245 ops/sec ±3.05% (15 runs sampled)
JS-Signals x 125,630 ops/sec ±2.51% (15 runs sampled)
EventEmitter x 124,535 ops/sec ±4.47% (15 runs sampled)
minivents x 69,077 ops/sec ±2.60% (15 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit one object - one listener

```
Theoretical max x 12,013,176 ops/sec ±2.42% (15 runs sampled) *burn in*
MicroSignals x 10,330,869 ops/sec ±2.53% (15 runs sampled)
MiniSignals x 9,437,684 ops/sec ±2.56% (14 runs sampled)
mini-pipe x 9,373,992 ops/sec ±3.42% (15 runs sampled)
signal-lite x 8,444,576 ops/sec ±2.64% (14 runs sampled)
push-stream x 7,801,945 ops/sec ±3.96% (15 runs sampled)
dripEmitter x 7,158,884 ops/sec ±3.81% (15 runs sampled)
xstream x 7,165,243 ops/sec ±4.07% (15 runs sampled)
ReactiveProperty x 6,974,601 ops/sec ±4.20% (14 runs sampled)
EventEmitter2 x 6,854,357 ops/sec ±3.48% (15 runs sampled)
EventEmitter3 x 6,154,071 ops/sec ±22.10% (15 runs sampled)
EventEmitter x 3,549,840 ops/sec ±2.52% (15 runs sampled)
EventDispatcher x 2,919,832 ops/sec ±2.85% (15 runs sampled)
event-signal x 2,068,696 ops/sec ±3.85% (15 runs sampled)
RXJS x 1,879,804 ops/sec ±4.17% (15 runs sampled)
pull-pushable x 1,626,468 ops/sec ±3.53% (15 runs sampled)
dripEmitterEnhanced x 754,819 ops/sec ±4.85% (15 runs sampled)
pull-notify x 736,407 ops/sec ±2.47% (15 runs sampled)
signal-emitter x 499,692 ops/sec ±5.79% (15 runs sampled)
JS-Signals x 213,924 ops/sec ±2.36% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,924,083 ops/sec ±9.49% (15 runs sampled) *burn in*
MiniSignals x 5,356,585 ops/sec ±6.10% (14 runs sampled)
MicroSignals x 5,241,278 ops/sec ±5.51% (14 runs sampled)
push-stream x 4,885,512 ops/sec ±4.73% (15 runs sampled)
ReactiveProperty x 4,635,849 ops/sec ±3.60% (13 runs sampled)
dripEmitter x 4,324,220 ops/sec ±4.97% (15 runs sampled)
EventEmitter3 x 4,229,035 ops/sec ±3.78% (15 runs sampled)
signal-lite x 4,393,076 ops/sec ±8.25% (15 runs sampled)
xstream x 3,056,449 ops/sec ±10.36% (14 runs sampled)
EventDispatcher x 2,031,062 ops/sec ±10.08% (15 runs sampled)
EventEmitter2 x 1,411,508 ops/sec ±3.97% (15 runs sampled)
event-signal x 1,428,695 ops/sec ±11.05% (15 runs sampled)
RXJS x 1,310,352 ops/sec ±5.16% (15 runs sampled)
dripEmitterEnhanced x 689,020 ops/sec ±9.78% (14 runs sampled)
signal-emitter x 435,095 ops/sec ±6.19% (15 runs sampled)
pull-notify x 400,650 ops/sec ±8.40% (14 runs sampled)
EventEmitter x 190,810 ops/sec ±2.11% (15 runs sampled)
JS-Signals x 155,713 ops/sec ±6.40% (15 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 27,701,913 ops/sec ±7.32% (14 runs sampled) *burn in*
MicroSignals x 17,819,888 ops/sec ±6.18% (14 runs sampled)
xstream x 14,212,278 ops/sec ±9.13% (14 runs sampled)
ReactiveProperty x 13,628,227 ops/sec ±11.89% (14 runs sampled)
push-stream x 13,035,945 ops/sec ±9.42% (14 runs sampled)
dripEmitter x 10,231,916 ops/sec ±10.97% (13 runs sampled)
EventEmitter3 x 9,026,462 ops/sec ±12.74% (14 runs sampled)
signal-lite x 6,121,343 ops/sec ±5.28% (14 runs sampled)
MiniSignals x 6,678,231 ops/sec ±16.39% (13 runs sampled)
event-signal x 5,270,698 ops/sec ±4.91% (14 runs sampled)
RXJS x 3,816,456 ops/sec ±13.40% (14 runs sampled)
EventEmitter2 x 3,397,554 ops/sec ±10.28% (15 runs sampled)
dripEmitterEnhanced x 1,985,674 ops/sec ±11.03% (14 runs sampled)
signal-emitter x 1,410,177 ops/sec ±5.61% (15 runs sampled)
pull-notify x 1,401,980 ops/sec ±8.72% (15 runs sampled)
JS-Signals x 468,788 ops/sec ±11.21% (14 runs sampled)
EventEmitter x 426,361 ops/sec ±17.49% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
MiniSignals x 4,731,232 ops/sec ±2.70% (15 runs sampled)
Theoretical max x 4,705,851 ops/sec ±7.72% (15 runs sampled) *burn in*
dripEmitter x 4,358,583 ops/sec ±2.06% (14 runs sampled)
MicroSignal x 4,502,095 ops/sec ±6.03% (15 runs sampled)
signal-lite x 4,286,684 ops/sec ±3.83% (15 runs sampled)
push-stream x 4,197,751 ops/sec ±6.95% (15 runs sampled)
xstream x 4,012,606 ops/sec ±3.56% (15 runs sampled)
ReactiveProperty x 3,689,494 ops/sec ±7.48% (15 runs sampled)
EventEmitter3 x 3,707,871 ops/sec ±14.24% (14 runs sampled)
event-signal x 2,599,493 ops/sec ±2.22% (15 runs sampled)
EventEmitter2 x 2,020,105 ops/sec ±10.57% (15 runs sampled)
RXJS x 1,538,877 ops/sec ±2.65% (15 runs sampled)
dripEmitterEnhanced x 1,466,012 ops/sec ±10.96% (14 runs sampled)
signal-emitter x 1,091,511 ops/sec ±6.63% (15 runs sampled)
pull-notify x 450,901 ops/sec ±2.60% (15 runs sampled)
EventEmitter x 283,744 ops/sec ±4.92% (15 runs sampled)
JS-Signals x 258,253 ops/sec ±2.70% (15 runs sampled)
minivents x 68,768 ops/sec ±4.85% (14 runs sampled)
```

_Fastest is **MiniSignals, MicroSignal**_

## emit one value - one listener

```
Theoretical max x 36,615,639 ops/sec ±6.82% (15 runs sampled) *burn in*
MicroSignals x 34,473,289 ops/sec ±3.48% (15 runs sampled)
xstream x 33,036,179 ops/sec ±7.46% (15 runs sampled)
MiniSignals x 30,648,333 ops/sec ±4.41% (15 runs sampled)
mini-pipe x 28,325,039 ops/sec ±2.29% (14 runs sampled)
signal-lite x 24,432,147 ops/sec ±10.82% (15 runs sampled)
EventEmitter3 x 22,110,955 ops/sec ±3.03% (14 runs sampled)
push-stream x 21,959,177 ops/sec ±3.24% (14 runs sampled)
dripEmitter x 21,498,476 ops/sec ±2.06% (15 runs sampled)
EventEmitter2 x 21,579,476 ops/sec ±3.80% (15 runs sampled)
push-stream-patch x 21,422,832 ops/sec ±3.08% (15 runs sampled)
ReactiveProperty x 20,689,037 ops/sec ±2.11% (15 runs sampled)
EventEmitter x 11,265,801 ops/sec ±4.36% (15 runs sampled)
observ x 9,375,233 ops/sec ±3.60% (15 runs sampled)
event-signal x 6,230,399 ops/sec ±2.76% (13 runs sampled)
pull-pushable x 5,660,180 ops/sec ±2.86% (15 runs sampled)
RXJS x 5,678,890 ops/sec ±5.95% (14 runs sampled)
barracks x 5,073,292 ops/sec ±4.38% (15 runs sampled)
d3-dispatch x 4,796,638 ops/sec ±1.67% (15 runs sampled)
dripEmitterEnhanced x 2,560,004 ops/sec ±2.80% (15 runs sampled)
pull-notify x 2,376,032 ops/sec ±7.62% (15 runs sampled)
signal-emitter x 1,556,733 ops/sec ±5.18% (15 runs sampled)
observable x 821,433 ops/sec ±2.65% (15 runs sampled)
minivents x 676,001 ops/sec ±3.22% (15 runs sampled)
JS-Signals x 641,843 ops/sec ±2.55% (15 runs sampled)
namespace-emitter x 549,859 ops/sec ±3.10% (15 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one value - two listeners

```
Theoretical max x 24,855,258 ops/sec ±7.48% (14 runs sampled) *burn in*
MicroSignals x 18,564,258 ops/sec ±2.31% (15 runs sampled)
MiniSignals x 18,378,514 ops/sec ±2.74% (15 runs sampled)
signal-lite x 16,771,307 ops/sec ±3.20% (14 runs sampled)
push-stream x 15,999,680 ops/sec ±2.43% (15 runs sampled)
push-stream-patch x 15,653,280 ops/sec ±3.17% (14 runs sampled)
xstream x 13,965,210 ops/sec ±2.35% (14 runs sampled)
dripEmitter x 13,678,955 ops/sec ±3.87% (15 runs sampled)
EventEmitter3 x 13,463,345 ops/sec ±2.91% (14 runs sampled)
ReactiveProperty x 13,212,450 ops/sec ±3.02% (15 runs sampled)
observ x 5,660,870 ops/sec ±3.55% (14 runs sampled)
event-signal x 5,241,408 ops/sec ±4.90% (14 runs sampled)
EventEmitter2 x 4,600,126 ops/sec ±3.42% (15 runs sampled)
RXJS x 3,737,038 ops/sec ±3.24% (15 runs sampled)
dripEmitterEnhanced x 2,408,634 ops/sec ±2.25% (15 runs sampled)
d3-dispatch x 2,381,013 ops/sec ±3.22% (15 runs sampled)
signal-emitter x 1,558,726 ops/sec ±1.59% (15 runs sampled)
pull-notify x 1,392,355 ops/sec ±10.23% (15 runs sampled)
observable x 774,384 ops/sec ±3.55% (15 runs sampled)
EventEmitter x 580,182 ops/sec ±3.92% (15 runs sampled)
JS-Signals x 536,927 ops/sec ±2.67% (15 runs sampled)
namespace-emitter x 481,754 ops/sec ±3.13% (15 runs sampled)
minivents x 381,293 ops/sec ±2.77% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one value - with context

```
Theoretical max x 31,754,897 ops/sec ±6.72% (15 runs sampled) *burn in*
MiniSignals x 20,893,709 ops/sec ±2.27% (15 runs sampled)
MicroSignals x 20,313,712 ops/sec ±2.68% (15 runs sampled)
signal-lite x 19,051,873 ops/sec ±3.76% (15 runs sampled)
push-stream x 16,273,113 ops/sec ±2.85% (15 runs sampled)
ReactiveProperty x 16,528,329 ops/sec ±5.00% (15 runs sampled)
EventEmitter3 x 15,806,233 ops/sec ±3.13% (16 runs sampled)
dripEmitter x 14,331,891 ops/sec ±3.63% (15 runs sampled)
event-signal x 5,976,153 ops/sec ±2.76% (15 runs sampled)
RXJS x 4,737,063 ops/sec ±3.98% (15 runs sampled)
EventEmitter2 x 4,583,342 ops/sec ±3.00% (14 runs sampled)
dripEmitterEnhanced x 2,322,815 ops/sec ±4.65% (15 runs sampled)
signal-emitter x 1,610,426 ops/sec ±3.63% (15 runs sampled)
pull-notify x 1,555,035 ops/sec ±2.24% (15 runs sampled)
EventEmitter x 584,001 ops/sec ±2.10% (15 runs sampled)
JS-Signals x 537,253 ops/sec ±3.06% (16 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit variable number of values

```
Theoretical max x 6,697,512 ops/sec ±11.23% (15 runs sampled) *burn in*
MiniSignals x 4,538,083 ops/sec ±4.50% (15 runs sampled)
signal-lite x 4,250,838 ops/sec ±4.07% (15 runs sampled)
EventEmitter3 x 1,246,902 ops/sec ±2.72% (15 runs sampled)
EventEmitter2 x 742,341 ops/sec ±2.95% (15 runs sampled)
dripEmitterEnhanced x 449,049 ops/sec ±3.25% (15 runs sampled)
signal-emitter x 307,328 ops/sec ±4.90% (15 runs sampled)
EventEmitter x 136,277 ops/sec ±2.63% (15 runs sampled)
JS-Signals x 133,230 ops/sec ±2.76% (14 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventDispatcher x 51,210,106 ops/sec ±3.26% (15 runs sampled)
Theoretical max x 51,058,431 ops/sec ±6.75% (14 runs sampled) *burn in*
EventEmitter3 x 48,610,576 ops/sec ±3.94% (14 runs sampled)
DripEmitter x 47,831,633 ops/sec ±4.04% (14 runs sampled)
EventEmitter x 34,539,409 ops/sec ±2.74% (14 runs sampled)
EventEmitter2 x 31,552,881 ops/sec ±4.34% (15 runs sampled)
MiniSignals x 29,987,301 ops/sec ±3.38% (15 runs sampled)
DripEmitterEnhanced x 21,403,121 ops/sec ±4.61% (14 runs sampled)
push-stream x 14,244,849 ops/sec ±1.85% (14 runs sampled)
JS-Signals x 2,036,071 ops/sec ±15.81% (13 runs sampled)
ReactiveProperty x 1,377,428 ops/sec ±12.13% (14 runs sampled)
pull-notify x 958,952 ops/sec ±5.87% (12 runs sampled)
```

_Fastest is **EventDispatcher**_
