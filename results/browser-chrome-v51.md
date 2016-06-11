# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 2ms]
✔ init [pass: 20, fail: 0]
✔ emit [pass: 18, fail: 0, duration: 19ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 7ms]
✔ emit objects [pass: 28, fail: 0, duration: 1ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 1ms]
✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
✔ add-remove [pass: 18, fail: 0, duration: 6ms]
```

# Summary

- duration: 41ms
- assertions: 247
- pass: 247
- fail: 0

# Comments

# Platform

Chrome 51.0.2704.63 on OS X 10.11.2

# init

## init

```
EventDispatcher x 45,922,205 ops/sec ±2.49% (10 runs sampled)
Theoretical max x 42,542,840 ops/sec ±6.32% (10 runs sampled) *burn in*
EventEmitter3 x 41,566,707 ops/sec ±4.48% (10 runs sampled)
DripEmitter x 42,079,456 ops/sec ±8.57% (10 runs sampled)
EventEmitter x 33,730,853 ops/sec ±3.81% (10 runs sampled)
MiniSignals x 28,422,199 ops/sec ±2.97% (10 runs sampled)
EventEmitter2 x 25,889,210 ops/sec ±2.28% (10 runs sampled)
DripEmitterEnhanced x 17,323,138 ops/sec ±2.10% (10 runs sampled)
JS-Signals x 1,604,326 ops/sec ±19.76% (10 runs sampled)
ReactiveProperty x 952,877 ops/sec ±23.11% (10 runs sampled)
```

_Fastest is **EventDispatcher, DripEmitter**_

# emit

## emit

```
Theoretical max x 8,902,736 ops/sec ±10.68% (10 runs sampled) *burn in*
signal-lite x 5,193,552 ops/sec ±3.11% (10 runs sampled)
MiniSignals x 4,734,558 ops/sec ±4.32% (10 runs sampled)
EventEmitter3 x 1,221,904 ops/sec ±3.92% (10 runs sampled)
EventEmitter2 x 667,607 ops/sec ±4.04% (10 runs sampled)
dripEmitterEnhanced x 395,277 ops/sec ±6.15% (10 runs sampled)
signal-emitter x 303,816 ops/sec ±5.29% (10 runs sampled)
EventEmitter x 102,618 ops/sec ±3.24% (10 runs sampled)
JS-Signals x 102,413 ops/sec ±3.58% (10 runs sampled)
```

_Fastest is **signal-lite**_

# emit one parameter

## emit one parameter

```
Theoretical max x 20,813,866 ops/sec ±3.25% (10 runs sampled) *burn in*
MiniSignals x 18,196,569 ops/sec ±5.64% (10 runs sampled)
signal-lite x 15,649,943 ops/sec ±4.28% (10 runs sampled)
dripEmitter x 14,840,354 ops/sec ±2.65% (10 runs sampled)
EventEmitter3 x 12,737,983 ops/sec ±6.21% (10 runs sampled)
ReactiveProperty x 11,642,592 ops/sec ±1.89% (10 runs sampled)
event-signal x 5,721,308 ops/sec ±3.37% (10 runs sampled)
observ x 4,914,566 ops/sec ±3.11% (10 runs sampled)
EventEmitter2 x 4,494,390 ops/sec ±4.84% (10 runs sampled)
RXJS x 3,958,919 ops/sec ±4.94% (10 runs sampled)
d3-dispatch x 2,212,817 ops/sec ±5.17% (10 runs sampled)
dripEmitterEnhanced x 2,097,877 ops/sec ±3.82% (10 runs sampled)
signal-emitter x 1,265,219 ops/sec ±5.54% (10 runs sampled)
observable x 625,428 ops/sec ±5.51% (10 runs sampled)
EventEmitter x 493,366 ops/sec ±6.41% (10 runs sampled)
JS-Signals x 440,230 ops/sec ±6.40% (10 runs sampled)
namespace-emitter x 421,144 ops/sec ±2.59% (10 runs sampled)
minivents x 302,669 ops/sec ±7.02% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit objects

## emit objects

```
Theoretical max x 10,743,656 ops/sec ±9.52% (10 runs sampled) *burn in*
MiniSignals x 5,863,763 ops/sec ±3.51% (10 runs sampled)
signal-lite x 5,574,691 ops/sec ±5.40% (10 runs sampled)
ReactiveProperty x 5,272,746 ops/sec ±5.93% (10 runs sampled)
EventEmitter3 x 4,653,783 ops/sec ±4.75% (10 runs sampled)
dripEmitter x 4,205,355 ops/sec ±2.74% (10 runs sampled)
EventDispatcher x 2,078,428 ops/sec ±4.08% (10 runs sampled)
event-signal x 1,880,484 ops/sec ±2.75% (10 runs sampled)
EventEmitter2 x 1,421,456 ops/sec ±3.54% (10 runs sampled)
RXJS x 1,360,575 ops/sec ±7.32% (10 runs sampled)
dripEmitterEnhanced x 715,761 ops/sec ±3.83% (10 runs sampled)
signal-emitter x 428,742 ops/sec ±5.92% (10 runs sampled)
EventEmitter x 169,425 ops/sec ±3.20% (10 runs sampled)
JS-Signals x 145,306 ops/sec ±18.18% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit many parameters

## emit many parameters

```
Theoretical max x 15,309,279 ops/sec ±5.30% (10 runs sampled) *burn in*
MiniSignals x 14,120,598 ops/sec ±5.54% (10 runs sampled)
signal-lite x 12,496,511 ops/sec ±5.59% (10 runs sampled)
EventEmitter3 x 746,589 ops/sec ±6.64% (10 runs sampled)
EventEmitter2 x 684,269 ops/sec ±4.79% (10 runs sampled)
dripEmitterEnhanced x 545,312 ops/sec ±4.11% (10 runs sampled)
signal-emitter x 449,381 ops/sec ±3.24% (10 runs sampled)
EventEmitter x 107,235 ops/sec ±9.30% (10 runs sampled)
JS-Signals x 100,311 ops/sec ±3.26% (10 runs sampled)
minivents x 61,638 ops/sec ±3.43% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit many listeners

## emit many listeners

```
Theoretical max x 4,466,684 ops/sec ±6.89% (10 runs sampled) *burn in*
MiniSignals x 4,301,019 ops/sec ±4.59% (10 runs sampled)
signal-lite x 4,175,471 ops/sec ±2.58% (10 runs sampled)
EventEmitter3 x 3,768,089 ops/sec ±3.71% (10 runs sampled)
ReactiveProperty x 3,636,245 ops/sec ±2.50% (10 runs sampled)
dripEmitter x 3,676,819 ops/sec ±4.88% (10 runs sampled)
event-signal x 2,575,030 ops/sec ±3.39% (10 runs sampled)
EventEmitter2 x 2,131,473 ops/sec ±6.32% (10 runs sampled)
dripEmitterEnhanced x 1,434,635 ops/sec ±3.45% (10 runs sampled)
RXJS x 1,434,815 ops/sec ±4.23% (10 runs sampled)
signal-emitter x 982,550 ops/sec ±3.70% (10 runs sampled)
EventEmitter x 271,604 ops/sec ±6.68% (10 runs sampled)
JS-Signals x 244,618 ops/sec ±5.14% (10 runs sampled)
minivents x 70,188 ops/sec ±5.38% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit with context

## emit with context

```
Theoretical max x 26,359,725 ops/sec ±12.59% (10 runs sampled) *burn in*
MiniSignals x 18,340,121 ops/sec ±4.41% (10 runs sampled)
signal-lite x 17,760,592 ops/sec ±4.07% (10 runs sampled)
ReactiveProperty x 15,171,217 ops/sec ±3.24% (10 runs sampled)
EventEmitter3 x 13,792,473 ops/sec ±3.68% (10 runs sampled)
dripEmitter x 12,771,644 ops/sec ±3.31% (10 runs sampled)
event-signal x 5,353,952 ops/sec ±5.71% (10 runs sampled)
RXJS x 4,376,244 ops/sec ±3.42% (10 runs sampled)
EventEmitter2 x 4,204,106 ops/sec ±6.40% (10 runs sampled)
dripEmitterEnhanced x 2,070,519 ops/sec ±4.06% (10 runs sampled)
signal-emitter x 1,342,382 ops/sec ±5.03% (10 runs sampled)
EventEmitter x 500,375 ops/sec ±2.55% (10 runs sampled)
JS-Signals x 456,704 ops/sec ±13.33% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit with bound function

## emit with bound function

```
Theoretical max x 29,643,717 ops/sec ±4.97% (10 runs sampled) *burn in*
ReactiveProperty x 14,754,970 ops/sec ±3.43% (10 runs sampled)
dripEmitter x 12,750,649 ops/sec ±4.04% (10 runs sampled)
EventEmitter3 x 12,384,689 ops/sec ±4.70% (10 runs sampled)
MiniSignals x 7,033,613 ops/sec ±4.51% (10 runs sampled)
event-signal x 5,606,618 ops/sec ±3.63% (10 runs sampled)
signal-lite x 5,575,957 ops/sec ±6.19% (10 runs sampled)
EventEmitter2 x 4,450,296 ops/sec ±3.48% (10 runs sampled)
RXJS x 3,849,130 ops/sec ±4.88% (10 runs sampled)
dripEmitterEnhanced x 1,990,438 ops/sec ±4.78% (10 runs sampled)
signal-emitter x 1,330,189 ops/sec ±4.80% (10 runs sampled)
EventEmitter x 413,779 ops/sec ±9.44% (10 runs sampled)
JS-Signals x 374,091 ops/sec ±5.19% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

# emit arrays

## emit arrays

```
Theoretical max x 11,364,286 ops/sec ±9.93% (10 runs sampled) *burn in*
MiniSignals x 6,530,635 ops/sec ±5.61% (10 runs sampled)
signal-lite x 6,184,621 ops/sec ±3.45% (10 runs sampled)
dripEmitter x 4,913,037 ops/sec ±4.88% (10 runs sampled)
EventEmitter3 x 4,725,084 ops/sec ±4.74% (10 runs sampled)
ReactiveProperty x 4,572,608 ops/sec ±4.91% (10 runs sampled)
event-signal x 1,888,208 ops/sec ±4.80% (10 runs sampled)
RXJS x 1,499,675 ops/sec ±2.42% (10 runs sampled)
EventEmitter2 x 1,521,167 ops/sec ±5.01% (10 runs sampled)
dripEmitterEnhanced x 646,743 ops/sec ±2.82% (10 runs sampled)
signal-emitter x 452,175 ops/sec ±3.82% (10 runs sampled)
EventEmitter x 175,375 ops/sec ±2.77% (10 runs sampled)
JS-Signals x 144,081 ops/sec ±3.37% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# add-remove

## add-remove

```
dripEmitter x 25,242,053 ops/sec ±8.62% (10 runs sampled)
MiniSignals x 10,317,323 ops/sec ±5.40% (10 runs sampled)
EventDispatcher x 4,068,341 ops/sec ±2.63% (10 runs sampled)
ReactiveProperty x 3,510,996 ops/sec ±5.61% (10 runs sampled)
EventEmitter3 x 1,839,987 ops/sec ±6.03% (10 runs sampled)
EventEmitter x 1,414,975 ops/sec ±8.95% (10 runs sampled)
EventEmitter2 x 1,032,601 ops/sec ±3.42% (10 runs sampled)
JS-Signals x 668,377 ops/sec ±4.89% (10 runs sampled)
dripEmitterEnhanced x 528,284 ops/sec ±5.58% (10 runs sampled)
```

_Fastest is **dripEmitter**_
