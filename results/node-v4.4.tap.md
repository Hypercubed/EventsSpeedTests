# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 48, fail: 0, duration: 6ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 40, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 51, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 36, fail: 0, duration: 5ms]
- ✔ emit one value - one listener [pass: 52, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 69, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 48, fail: 0, duration: 2ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 14ms]

# Summary

- duration: 42ms
- planned: 500
- assertions: 500
- pass: 500
- fail: 0

# Comments

## Platform

Node.js 4.4.6 on Darwin 64-bit NODE_ENV = production BENCH = mid

## add and remove

```
dripEmitter x 22,168,814 ops/sec ±3.67% (18 runs sampled)
MiniSignals x 15,792,253 ops/sec ±3.49% (17 runs sampled)
EventDispatcher x 4,449,420 ops/sec ±5.82% (17 runs sampled)
EventEmitter x 4,019,726 ops/sec ±15.46% (15 runs sampled)
pushStream x 3,522,253 ops/sec ±5.47% (15 runs sampled)
ReactiveProperty x 3,037,292 ops/sec ±3.38% (15 runs sampled)
EventEmitter3 x 1,818,121 ops/sec ±3.05% (18 runs sampled)
EventEmitter2 x 1,239,328 ops/sec ±3.36% (17 runs sampled)
JS-Signals x 655,377 ops/sec ±4.49% (15 runs sampled)
dripEmitterEnhanced x 173,226 ops/sec ±6.66% (17 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 12,848,266 ops/sec ±4.36% (15 runs sampled) *burn in*
MicroSignals x 7,200,339 ops/sec ±3.58% (17 runs sampled)
MiniSignals x 7,064,139 ops/sec ±6.96% (17 runs sampled)
signal-lite x 6,633,555 ops/sec ±4.49% (17 runs sampled)
push-stream x 5,995,195 ops/sec ±2.53% (17 runs sampled)
ReactiveProperty x 5,827,146 ops/sec ±4.76% (17 runs sampled)
dripEmitter x 4,960,482 ops/sec ±4.14% (17 runs sampled)
EventEmitter3 x 4,706,429 ops/sec ±2.27% (16 runs sampled)
EventEmitter x 3,756,411 ops/sec ±3.20% (17 runs sampled)
event-signal x 1,999,951 ops/sec ±6.26% (15 runs sampled)
EventEmitter2 x 1,617,222 ops/sec ±3.73% (15 runs sampled)
RXJS x 1,530,213 ops/sec ±7.42% (17 runs sampled)
dripEmitterEnhanced x 961,604 ops/sec ±5.13% (17 runs sampled)
pull-notify x 347,611 ops/sec ±2.95% (17 runs sampled)
JS-Signals x 204,110 ops/sec ±3.56% (16 runs sampled)
signal-emitter x 192,831 ops/sec ±8.89% (17 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 57,915,139 ops/sec ±2.68% (17 runs sampled) *burn in*
MiniSignals x 18,790,441 ops/sec ±2.65% (18 runs sampled)
signal-lite x 17,340,347 ops/sec ±4.74% (17 runs sampled)
EventEmitter3 x 2,499,600 ops/sec ±3.16% (17 runs sampled)
EventEmitter x 2,438,846 ops/sec ±4.15% (17 runs sampled)
EventEmitter2 x 1,981,603 ops/sec ±2.59% (18 runs sampled)
dripEmitterEnhanced x 1,597,519 ops/sec ±3.12% (16 runs sampled)
signal-emitter x 358,087 ops/sec ±3.59% (17 runs sampled)
JS-Signals x 250,331 ops/sec ±4.08% (16 runs sampled)
minivents x 144,823 ops/sec ±5.57% (16 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 12,190,784 ops/sec ±2.79% (17 runs sampled) *burn in*
MicroSignals x 10,923,520 ops/sec ±4.72% (15 runs sampled)
xstream x 10,519,687 ops/sec ±5.71% (15 runs sampled)
MiniSignals x 9,671,294 ops/sec ±4.87% (17 runs sampled)
mini-pipe x 9,228,025 ops/sec ±4.17% (16 runs sampled)
push-stream x 7,839,277 ops/sec ±4.30% (17 runs sampled)
signal-lite x 7,221,618 ops/sec ±8.85% (17 runs sampled)
ReactiveProperty x 6,747,342 ops/sec ±5.61% (17 runs sampled)
dripEmitter x 6,558,629 ops/sec ±3.48% (15 runs sampled)
EventEmitter3 x 6,493,029 ops/sec ±3.44% (16 runs sampled)
EventEmitter x 5,567,959 ops/sec ±2.62% (17 runs sampled)
EventEmitter2 x 6,008,491 ops/sec ±22.44% (17 runs sampled)
EventDispatcher x 2,957,123 ops/sec ±4.11% (14 runs sampled)
RXJS x 1,917,421 ops/sec ±5.60% (15 runs sampled)
event-signal x 1,937,100 ops/sec ±7.96% (16 runs sampled)
pull-pushable x 1,260,692 ops/sec ±3.24% (14 runs sampled)
dripEmitterEnhanced x 996,975 ops/sec ±7.45% (17 runs sampled)
pull-notify x 506,480 ops/sec ±2.49% (15 runs sampled)
JS-Signals x 200,713 ops/sec ±7.90% (15 runs sampled)
signal-emitter x 158,211 ops/sec ±13.40% (16 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one object - two listeners

```
Theoretical max x 9,193,721 ops/sec ±3.99% (15 runs sampled) *burn in*
ReactiveProperty x 5,085,409 ops/sec ±2.96% (15 runs sampled)
signal-lite x 5,059,537 ops/sec ±4.58% (17 runs sampled)
push-stream x 4,925,340 ops/sec ±6.04% (17 runs sampled)
MiniSignals x 4,675,275 ops/sec ±11.37% (16 runs sampled)
MicroSignals x 4,534,111 ops/sec ±10.52% (15 runs sampled)
dripEmitter x 4,066,167 ops/sec ±3.38% (15 runs sampled)
EventEmitter3 x 3,758,454 ops/sec ±6.35% (15 runs sampled)
xstream x 3,391,724 ops/sec ±5.07% (17 runs sampled)
EventEmitter x 3,031,839 ops/sec ±5.19% (17 runs sampled)
EventDispatcher x 2,370,432 ops/sec ±3.16% (16 runs sampled)
event-signal x 1,802,738 ops/sec ±6.73% (16 runs sampled)
EventEmitter2 x 1,464,760 ops/sec ±5.49% (17 runs sampled)
RXJS x 1,357,774 ops/sec ±7.09% (15 runs sampled)
dripEmitterEnhanced x 951,141 ops/sec ±3.14% (17 runs sampled)
pull-notify x 317,960 ops/sec ±4.88% (17 runs sampled)
signal-emitter x 189,579 ops/sec ±8.36% (17 runs sampled)
JS-Signals x 182,961 ops/sec ±11.36% (17 runs sampled)
```

_Fastest is **ReactiveProperty, signal-lite, push-stream, MiniSignals, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 3,866,738 ops/sec ±6.02% (15 runs sampled) *burn in*
MicroSignals x 3,207,941 ops/sec ±4.48% (15 runs sampled)
ReactiveProperty x 2,904,570 ops/sec ±2.52% (17 runs sampled)
xstream x 2,909,219 ops/sec ±6.34% (16 runs sampled)
dripEmitter x 2,915,073 ops/sec ±8.56% (17 runs sampled)
EventEmitter x 2,795,774 ops/sec ±4.83% (17 runs sampled)
push-stream x 2,663,643 ops/sec ±8.16% (15 runs sampled)
EventEmitter3 x 2,542,122 ops/sec ±14.11% (17 runs sampled)
event-signal x 2,294,390 ops/sec ±4.52% (16 runs sampled)
MiniSignals x 2,013,805 ops/sec ±5.53% (17 runs sampled)
RXJS x 1,997,977 ops/sec ±9.02% (15 runs sampled)
EventEmitter2 x 2,009,886 ops/sec ±10.34% (16 runs sampled)
dripEmitterEnhanced x 1,725,750 ops/sec ±2.87% (17 runs sampled)
signal-lite x 1,544,300 ops/sec ±4.84% (17 runs sampled)
pull-notify x 645,679 ops/sec ±3.26% (17 runs sampled)
signal-emitter x 478,858 ops/sec ±5.24% (17 runs sampled)
JS-Signals x 459,326 ops/sec ±2.84% (17 runs sampled)
```

_Fastest is **MicroSignals, dripEmitter**_

## emit one value - many listeners

```
Theoretical max x 5,027,503 ops/sec ±3.90% (15 runs sampled) *burn in*
push-stream x 4,562,236 ops/sec ±4.13% (14 runs sampled)
MiniSignals x 4,519,869 ops/sec ±3.52% (15 runs sampled)
MicroSignal x 4,496,307 ops/sec ±4.88% (15 runs sampled)
signal-lite x 4,283,196 ops/sec ±5.61% (17 runs sampled)
dripEmitter x 4,055,594 ops/sec ±3.93% (17 runs sampled)
EventEmitter3 x 3,938,119 ops/sec ±3.44% (17 runs sampled)
xstream x 3,875,757 ops/sec ±3.85% (17 runs sampled)
ReactiveProperty x 3,794,373 ops/sec ±3.08% (17 runs sampled)
EventEmitter x 3,700,899 ops/sec ±3.87% (18 runs sampled)
event-signal x 2,788,180 ops/sec ±3.11% (17 runs sampled)
EventEmitter2 x 2,508,626 ops/sec ±4.05% (17 runs sampled)
dripEmitterEnhanced x 1,867,872 ops/sec ±5.15% (17 runs sampled)
RXJS x 1,535,864 ops/sec ±6.45% (17 runs sampled)
signal-emitter x 531,770 ops/sec ±4.07% (17 runs sampled)
JS-Signals x 381,838 ops/sec ±4.08% (17 runs sampled)
pull-notify x 315,261 ops/sec ±3.59% (17 runs sampled)
minivents x 96,512 ops/sec ±10.32% (17 runs sampled)
```

_Fastest is **push-stream, MiniSignals, MicroSignal, signal-lite**_

## emit one value - one listener

```
Theoretical max x 38,763,482 ops/sec ±4.14% (17 runs sampled) *burn in*
xstream x 34,833,411 ops/sec ±5.96% (17 runs sampled)
MicroSignals x 34,060,210 ops/sec ±4.31% (17 runs sampled)
mini-pipe x 29,474,257 ops/sec ±3.43% (16 runs sampled)
MiniSignals x 28,154,490 ops/sec ±4.87% (15 runs sampled)
signal-lite x 24,911,631 ops/sec ±4.68% (17 runs sampled)
push-stream x 20,833,090 ops/sec ±5.92% (17 runs sampled)
dripEmitter x 19,452,583 ops/sec ±4.42% (14 runs sampled)
push-stream-patch x 20,037,868 ops/sec ±10.28% (17 runs sampled)
ReactiveProperty x 18,657,831 ops/sec ±9.11% (17 runs sampled)
EventEmitter3 x 18,369,720 ops/sec ±13.15% (17 runs sampled)
EventEmitter x 16,384,643 ops/sec ±3.85% (15 runs sampled)
EventEmitter2 x 17,988,045 ops/sec ±21.55% (15 runs sampled)
observ x 10,132,245 ops/sec ±5.30% (17 runs sampled)
event-signal x 7,005,493 ops/sec ±2.89% (18 runs sampled)
d3-dispatch x 5,704,617 ops/sec ±6.83% (15 runs sampled)
RXJS x 5,417,258 ops/sec ±3.28% (16 runs sampled)
barracks x 4,684,565 ops/sec ±11.17% (15 runs sampled)
pull-pushable x 4,244,856 ops/sec ±4.28% (16 runs sampled)
dripEmitterEnhanced x 3,247,345 ops/sec ±4.71% (15 runs sampled)
observable x 2,018,489 ops/sec ±4.48% (15 runs sampled)
pull-notify x 1,524,278 ops/sec ±4.60% (18 runs sampled)
minivents x 796,670 ops/sec ±4.83% (15 runs sampled)
signal-emitter x 593,281 ops/sec ±5.30% (17 runs sampled)
JS-Signals x 573,600 ops/sec ±4.05% (17 runs sampled)
namespace-emitter x 534,353 ops/sec ±9.70% (17 runs sampled)
```

_Fastest is **xstream, MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 26,415,779 ops/sec ±3.54% (17 runs sampled) *burn in*
MiniSignals x 17,393,824 ops/sec ±3.67% (17 runs sampled)
MicroSignals x 17,285,696 ops/sec ±5.45% (15 runs sampled)
signal-lite x 16,020,474 ops/sec ±2.84% (17 runs sampled)
push-stream x 15,710,045 ops/sec ±3.63% (15 runs sampled)
push-stream-patch x 15,488,557 ops/sec ±3.91% (17 runs sampled)
dripEmitter x 13,583,092 ops/sec ±3.60% (15 runs sampled)
ReactiveProperty x 13,453,461 ops/sec ±4.71% (15 runs sampled)
EventEmitter3 x 12,293,525 ops/sec ±4.19% (17 runs sampled)
xstream x 11,981,324 ops/sec ±5.19% (17 runs sampled)
EventEmitter x 9,865,019 ops/sec ±4.95% (17 runs sampled)
observ x 6,199,082 ops/sec ±3.23% (17 runs sampled)
event-signal x 6,022,456 ops/sec ±4.65% (17 runs sampled)
EventEmitter2 x 5,179,859 ops/sec ±2.96% (16 runs sampled)
RXJS x 4,468,159 ops/sec ±3.20% (13 runs sampled)
d3-dispatch x 4,370,246 ops/sec ±3.79% (17 runs sampled)
dripEmitterEnhanced x 2,861,549 ops/sec ±7.57% (17 runs sampled)
observable x 1,549,347 ops/sec ±3.07% (18 runs sampled)
pull-notify x 888,152 ops/sec ±7.87% (17 runs sampled)
signal-emitter x 633,874 ops/sec ±2.64% (18 runs sampled)
namespace-emitter x 571,960 ops/sec ±3.22% (16 runs sampled)
JS-Signals x 541,932 ops/sec ±18.46% (16 runs sampled)
minivents x 435,623 ops/sec ±4.61% (18 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one value - with context

```
MiniSignals x 18,253,866 ops/sec ±4.26% (16 runs sampled)
signal-lite x 16,816,636 ops/sec ±4.22% (15 runs sampled)
EventEmitter3 x 13,115,309 ops/sec ±6.12% (15 runs sampled)
event-signal x 5,800,400 ops/sec ±3.53% (17 runs sampled)
Theoretical max x 3,945,085 ops/sec ±4.11% (17 runs sampled) *burn in*
push-stream x 3,525,827 ops/sec ±3.42% (17 runs sampled)
dripEmitter x 3,211,286 ops/sec ±3.97% (17 runs sampled)
MicroSignals x 3,261,912 ops/sec ±8.83% (17 runs sampled)
EventEmitter x 2,907,789 ops/sec ±3.35% (15 runs sampled)
EventEmitter2 x 2,193,044 ops/sec ±3.63% (17 runs sampled)
ReactiveProperty x 2,272,454 ops/sec ±7.58% (15 runs sampled)
RXJS x 2,173,482 ops/sec ±4.82% (17 runs sampled)
dripEmitterEnhanced x 1,791,913 ops/sec ±3.17% (18 runs sampled)
pull-notify x 802,725 ops/sec ±5.77% (15 runs sampled)
signal-emitter x 551,128 ops/sec ±11.31% (14 runs sampled)
JS-Signals x 473,341 ops/sec ±5.22% (16 runs sampled)
```

_Fastest is **MiniSignals**_

## emit variable number of values

```
Theoretical max x 7,662,158 ops/sec ±4.42% (17 runs sampled) *burn in*
MiniSignals x 3,470,792 ops/sec ±3.74% (17 runs sampled)
signal-lite x 3,558,588 ops/sec ±7.34% (16 runs sampled)
EventEmitter x 2,399,846 ops/sec ±2.32% (17 runs sampled)
EventEmitter3 x 2,114,334 ops/sec ±6.86% (17 runs sampled)
EventEmitter2 x 1,003,656 ops/sec ±3.62% (17 runs sampled)
dripEmitterEnhanced x 441,155 ops/sec ±12.11% (15 runs sampled)
signal-emitter x 113,556 ops/sec ±7.47% (16 runs sampled)
JS-Signals x 80,221 ops/sec ±16.89% (15 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## init

```
EventEmitter3 x 53,717,942 ops/sec ±4.40% (17 runs sampled)
EventDispatcher x 51,100,980 ops/sec ±4.39% (17 runs sampled)
DripEmitter x 50,048,533 ops/sec ±3.66% (17 runs sampled)
Theoretical max x 46,164,741 ops/sec ±4.52% (17 runs sampled) *burn in*
MiniSignals x 37,692,113 ops/sec ±5.18% (16 runs sampled)
EventEmitter2 x 27,276,967 ops/sec ±8.45% (15 runs sampled)
DripEmitterEnhanced x 19,508,996 ops/sec ±5.32% (16 runs sampled)
EventEmitter x 19,599,656 ops/sec ±8.08% (13 runs sampled)
push-stream x 15,298,362 ops/sec ±2.45% (17 runs sampled)
JS-Signals x 2,060,616 ops/sec ±10.90% (15 runs sampled)
pull-notify x 901,711 ops/sec ±4.64% (12 runs sampled)
ReactiveProperty x 985,699 ops/sec ±16.29% (13 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher**_
