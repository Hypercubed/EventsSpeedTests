# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 51, fail: 0, duration: 7ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 6ms]
- ✔ emit one object - one listener [pass: 42, fail: 0, duration: 3ms]
- ✔ emit one object - two listeners [pass: 57, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 7ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 3ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 2ms]
- ✔ emit one value - one listener [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 51, fail: 0, duration: 3ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 2ms]
- ✔ init [pass: 24, fail: 0, duration: 21ms]

# Summary

- duration: 62ms
- planned: 653
- assertions: 653
- pass: 653
- fail: 0

# Comments

## Platform

Node.js 4.4.7 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 19,540,788 ops/sec ±7.33% (17 runs sampled)
MiniSignals x 15,746,393 ops/sec ±3.72% (17 runs sampled)
EventDispatcher x 4,615,671 ops/sec ±4.93% (16 runs sampled)
pushStream x 3,475,169 ops/sec ±3.54% (18 runs sampled)
EventEmitter x 3,821,591 ops/sec ±17.15% (17 runs sampled)
ReactiveProperty x 3,146,746 ops/sec ±2.92% (17 runs sampled)
EventEmitter3 x 1,784,382 ops/sec ±3.61% (16 runs sampled)
EventEmitter2 x 1,097,638 ops/sec ±4.59% (17 runs sampled)
JS-Signals x 619,585 ops/sec ±7.36% (18 runs sampled)
dripEmitterEnhanced x 164,434 ops/sec ±8.71% (15 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 12,989,053 ops/sec ±3.33% (15 runs sampled) *burn in*
MicroSignals x 7,383,146 ops/sec ±3.27% (16 runs sampled)
MiniSignals x 6,896,214 ops/sec ±3.78% (17 runs sampled)
signal-lite x 6,560,228 ops/sec ±4.65% (16 runs sampled)
push-stream x 5,630,273 ops/sec ±5.89% (16 runs sampled)
ReactiveProperty x 5,384,330 ops/sec ±3.55% (17 runs sampled)
EventEmitter3 x 4,422,011 ops/sec ±3.54% (17 runs sampled)
dripEmitter x 4,209,717 ops/sec ±9.00% (15 runs sampled)
EventEmitter x 3,563,870 ops/sec ±3.26% (17 runs sampled)
event-signal x 2,016,144 ops/sec ±2.80% (16 runs sampled)
EventEmitter2 x 1,582,104 ops/sec ±3.84% (17 runs sampled)
pull-notify x 1,369,100 ops/sec ±3.77% (17 runs sampled)
evee x 996,337 ops/sec ±4.29% (17 runs sampled)
RXJS x 1,159,290 ops/sec ±23.70% (14 runs sampled)
dripEmitterEnhanced x 804,560 ops/sec ±9.15% (17 runs sampled)
signal-emitter x 208,720 ops/sec ±4.04% (17 runs sampled)
JS-Signals x 204,104 ops/sec ±4.25% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit many values - two listeners

```
Theoretical max x 24,029,790 ops/sec ±4.15% (15 runs sampled) *burn in*
MiniSignals x 12,266,358 ops/sec ±5.33% (17 runs sampled)
signal-lite x 11,204,699 ops/sec ±5.05% (15 runs sampled)
EventEmitter x 2,308,656 ops/sec ±3.14% (16 runs sampled)
EventEmitter3 x 2,286,711 ops/sec ±3.90% (16 runs sampled)
EventEmitter2 x 1,769,960 ops/sec ±2.46% (17 runs sampled)
dripEmitterEnhanced x 1,236,574 ops/sec ±6.01% (17 runs sampled)
signal-emitter x 276,266 ops/sec ±5.16% (17 runs sampled)
JS-Signals x 186,979 ops/sec ±10.66% (15 runs sampled)
minivents x 114,233 ops/sec ±9.70% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 8,598,085 ops/sec ±2.92% (17 runs sampled) *burn in*
MiniSignals x 8,267,090 ops/sec ±4.43% (17 runs sampled)
MicroSignals x 7,900,199 ops/sec ±7.20% (17 runs sampled)
signal-lite x 7,202,255 ops/sec ±4.76% (15 runs sampled)
mini-pipe x 6,903,292 ops/sec ±3.50% (15 runs sampled)
xstream x 6,465,969 ops/sec ±3.10% (17 runs sampled)
push-stream x 5,731,969 ops/sec ±5.55% (16 runs sampled)
ReactiveProperty x 5,749,435 ops/sec ±7.44% (15 runs sampled)
EventEmitter3 x 4,955,175 ops/sec ±2.92% (17 runs sampled)
EventEmitter x 4,321,147 ops/sec ±4.69% (14 runs sampled)
EventEmitter2 x 4,461,581 ops/sec ±19.98% (13 runs sampled)
dripEmitter x 3,989,642 ops/sec ±16.81% (15 runs sampled)
EventDispatcher x 3,219,708 ops/sec ±3.91% (12 runs sampled)
pull-notify x 2,308,367 ops/sec ±3.82% (17 runs sampled)
event-signal x 2,146,623 ops/sec ±3.62% (15 runs sampled)
pull-pushable x 2,126,752 ops/sec ±6.95% (17 runs sampled)
RXJS x 1,532,487 ops/sec ±8.37% (16 runs sampled)
dripEmitterEnhanced x 819,287 ops/sec ±8.04% (15 runs sampled)
JS-Signals x 193,912 ops/sec ±4.00% (17 runs sampled)
signal-emitter x 188,513 ops/sec ±6.06% (17 runs sampled)
evee x 188,866 ops/sec ±7.47% (17 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,509,734 ops/sec ±4.21% (17 runs sampled) *burn in*
push-stream x 4,641,388 ops/sec ±3.21% (17 runs sampled)
MicroSignals x 4,690,516 ops/sec ±8.10% (14 runs sampled)
MiniSignals x 4,471,923 ops/sec ±8.47% (16 runs sampled)
dripEmitter x 4,026,978 ops/sec ±2.81% (16 runs sampled)
signal-lite x 4,101,498 ops/sec ±10.03% (17 runs sampled)
ReactiveProperty x 3,991,839 ops/sec ±8.27% (16 runs sampled)
EventEmitter3 x 3,590,447 ops/sec ±4.20% (15 runs sampled)
xstream x 3,335,477 ops/sec ±3.15% (15 runs sampled)
EventEmitter x 3,094,550 ops/sec ±2.56% (18 runs sampled)
EventDispatcher x 2,597,052 ops/sec ±4.34% (18 runs sampled)
EventEmitter2 x 1,441,662 ops/sec ±4.68% (17 runs sampled)
RXJS x 1,149,043 ops/sec ±6.37% (14 runs sampled)
pull-notify x 1,061,663 ops/sec ±4.46% (15 runs sampled)
event-signal x 1,147,402 ops/sec ±20.43% (14 runs sampled)
evee x 844,387 ops/sec ±4.14% (15 runs sampled)
dripEmitterEnhanced x 789,004 ops/sec ±9.21% (17 runs sampled)
JS-Signals x 170,829 ops/sec ±9.78% (15 runs sampled)
signal-emitter x 152,269 ops/sec ±12.42% (15 runs sampled)
```

_Fastest is **push-stream, MicroSignals, MiniSignals, signal-lite**_

## emit one random value - one listener

```
Theoretical max x 25,264,644 ops/sec ±4.32% (15 runs sampled) *burn in*
MicroSignals x 23,246,749 ops/sec ±3.78% (17 runs sampled)
xstream x 23,467,935 ops/sec ±5.72% (17 runs sampled)
mini-pipe x 22,135,897 ops/sec ±4.37% (17 runs sampled)
MiniSignals x 21,485,698 ops/sec ±4.57% (17 runs sampled)
signal-lite x 19,044,181 ops/sec ±6.76% (17 runs sampled)
ReactiveProperty x 16,197,083 ops/sec ±3.57% (17 runs sampled)
push-stream x 16,365,398 ops/sec ±5.63% (15 runs sampled)
EventEmitter2 x 15,818,163 ops/sec ±3.66% (16 runs sampled)
push-stream-patch x 15,285,713 ops/sec ±6.16% (17 runs sampled)
dripEmitter x 15,786,987 ops/sec ±13.02% (16 runs sampled)
EventEmitter x 13,664,669 ops/sec ±3.81% (17 runs sampled)
EventEmitter3 x 14,672,601 ops/sec ±13.81% (17 runs sampled)
observ x 7,941,039 ops/sec ±4.75% (18 runs sampled)
pull-notify x 7,814,511 ops/sec ±6.20% (15 runs sampled)
pull-pushable x 7,088,040 ops/sec ±5.45% (17 runs sampled)
event-signal x 5,269,946 ops/sec ±4.70% (17 runs sampled)
barracks x 4,775,723 ops/sec ±3.25% (17 runs sampled)
RXJS x 4,442,958 ops/sec ±4.26% (17 runs sampled)
d3-dispatch x 3,490,531 ops/sec ±3.75% (16 runs sampled)
dripEmitterEnhanced x 3,096,477 ops/sec ±4.36% (17 runs sampled)
observable x 2,080,901 ops/sec ±3.30% (15 runs sampled)
minivents x 737,523 ops/sec ±5.25% (13 runs sampled)
JS-Signals x 603,964 ops/sec ±5.17% (17 runs sampled)
signal-emitter x 555,917 ops/sec ±3.76% (15 runs sampled)
namespace-emitter x 548,105 ops/sec ±3.72% (17 runs sampled)
evee x 492,805 ops/sec ±5.14% (15 runs sampled)
```

_Fastest is **MicroSignals, xstream, mini-pipe**_

## emit one random value - two listeners

```
Theoretical max x 15,113,644 ops/sec ±4.57% (17 runs sampled) *burn in*
push-stream-patch x 13,312,399 ops/sec ±4.46% (15 runs sampled)
MicroSignals x 13,328,006 ops/sec ±6.75% (17 runs sampled)
push-stream x 13,077,846 ops/sec ±4.75% (17 runs sampled)
signal-lite x 12,993,733 ops/sec ±4.94% (17 runs sampled)
MiniSignals x 13,082,480 ops/sec ±7.80% (16 runs sampled)
xstream x 11,731,627 ops/sec ±4.17% (17 runs sampled)
EventEmitter3 x 10,484,900 ops/sec ±2.78% (15 runs sampled)
dripEmitter x 10,636,325 ops/sec ±9.39% (17 runs sampled)
ReactiveProperty x 10,144,279 ops/sec ±7.52% (16 runs sampled)
EventEmitter x 8,299,339 ops/sec ±3.84% (17 runs sampled)
EventEmitter2 x 4,686,311 ops/sec ±3.88% (17 runs sampled)
observ x 4,764,511 ops/sec ±5.75% (15 runs sampled)
event-signal x 4,602,205 ops/sec ±4.63% (15 runs sampled)
RXJS x 3,714,490 ops/sec ±4.51% (15 runs sampled)
pull-notify x 2,926,321 ops/sec ±9.81% (15 runs sampled)
evee x 2,695,516 ops/sec ±2.97% (15 runs sampled)
dripEmitterEnhanced x 2,377,677 ops/sec ±7.83% (15 runs sampled)
waddup x 2,177,317 ops/sec ±7.22% (17 runs sampled)
d3-dispatch x 2,112,652 ops/sec ±4.65% (17 runs sampled)
observable x 1,260,900 ops/sec ±8.54% (15 runs sampled)
JS-Signals x 536,934 ops/sec ±4.12% (17 runs sampled)
namespace-emitter x 518,259 ops/sec ±5.80% (17 runs sampled)
signal-emitter x 487,804 ops/sec ±9.45% (17 runs sampled)
minivents x 378,548 ops/sec ±5.42% (17 runs sampled)
```

_Fastest is **push-stream-patch, MicroSignals, push-stream, signal-lite, MiniSignals**_

## emit one value - bound function

```
Theoretical max x 3,814,237 ops/sec ±3.98% (14 runs sampled) *burn in*
dripEmitter x 3,201,085 ops/sec ±3.55% (17 runs sampled)
xstream x 3,105,153 ops/sec ±5.01% (16 runs sampled)
MicroSignals x 3,178,375 ops/sec ±8.16% (14 runs sampled)
push-stream x 3,017,376 ops/sec ±5.86% (14 runs sampled)
EventEmitter3 x 2,980,947 ops/sec ±6.98% (17 runs sampled)
EventEmitter x 2,819,664 ops/sec ±3.05% (17 runs sampled)
ReactiveProperty x 2,827,056 ops/sec ±5.16% (14 runs sampled)
event-signal x 2,229,168 ops/sec ±5.67% (17 runs sampled)
RXJS x 1,987,356 ops/sec ±7.80% (17 runs sampled)
pull-notify x 1,813,167 ops/sec ±7.45% (17 runs sampled)
EventEmitter2 x 1,860,543 ops/sec ±11.70% (11 runs sampled)
MiniSignals x 1,548,316 ops/sec ±3.84% (16 runs sampled)
dripEmitterEnhanced x 1,550,616 ops/sec ±4.29% (16 runs sampled)
signal-lite x 1,370,703 ops/sec ±6.92% (15 runs sampled)
signal-emitter x 472,600 ops/sec ±7.98% (15 runs sampled)
JS-Signals x 446,903 ops/sec ±4.61% (16 runs sampled)
evee x 361,236 ops/sec ±9.18% (16 runs sampled)
```

_Fastest is **dripEmitter, xstream, MicroSignals, push-stream**_

## emit one value - many listeners

```
Theoretical max x 5,007,458 ops/sec ±4.22% (17 runs sampled) *burn in*
push-stream x 4,701,978 ops/sec ±4.35% (17 runs sampled)
MiniSignals x 4,274,626 ops/sec ±6.08% (17 runs sampled)
EventEmitter3 x 3,970,656 ops/sec ±3.26% (15 runs sampled)
dripEmitter x 3,912,269 ops/sec ±5.52% (15 runs sampled)
signal-lite x 3,894,596 ops/sec ±6.74% (17 runs sampled)
MicroSignal x 3,926,197 ops/sec ±14.09% (15 runs sampled)
ReactiveProperty x 3,541,487 ops/sec ±6.13% (17 runs sampled)
xstream x 3,602,000 ops/sec ±12.43% (15 runs sampled)
EventEmitter x 3,228,450 ops/sec ±9.12% (17 runs sampled)
EventEmitter2 x 2,569,410 ops/sec ±6.64% (15 runs sampled)
event-signal x 2,609,058 ops/sec ±10.02% (16 runs sampled)
dripEmitterEnhanced x 1,784,438 ops/sec ±4.81% (17 runs sampled)
RXJS x 1,532,202 ops/sec ±6.01% (15 runs sampled)
evee x 1,106,555 ops/sec ±7.53% (17 runs sampled)
pull-notify x 847,733 ops/sec ±4.41% (17 runs sampled)
signal-emitter x 498,200 ops/sec ±6.44% (14 runs sampled)
JS-Signals x 385,669 ops/sec ±6.70% (15 runs sampled)
minivents x 92,331 ops/sec ±11.62% (17 runs sampled)
```

_Fastest is **push-stream**_

## emit one value - one listener

```
Theoretical max x 35,841,089 ops/sec ±5.94% (17 runs sampled) *burn in*
xstream x 35,239,247 ops/sec ±10.10% (17 runs sampled)
MiniSignals x 27,667,511 ops/sec ±4.04% (46 runs sampled)
MicroSignals x 28,493,403 ops/sec ±10.85% (16 runs sampled)
mini-pipe x 26,547,246 ops/sec ±4.05% (17 runs sampled)
signal-lite x 24,025,853 ops/sec ±5.51% (15 runs sampled)
push-stream x 19,621,873 ops/sec ±5.52% (17 runs sampled)
ReactiveProperty x 19,259,119 ops/sec ±4.28% (15 runs sampled)
push-stream-patch x 19,229,595 ops/sec ±6.89% (17 runs sampled)
EventEmitter2 x 18,646,150 ops/sec ±4.81% (17 runs sampled)
EventEmitter3 x 18,006,051 ops/sec ±16.40% (17 runs sampled)
dripEmitter x 16,565,888 ops/sec ±12.55% (17 runs sampled)
EventEmitter x 14,330,904 ops/sec ±4.09% (17 runs sampled)
pull-pushable x 8,453,329 ops/sec ±7.57% (17 runs sampled)
pull-notify x 7,911,537 ops/sec ±15.00% (15 runs sampled)
observ x 6,944,959 ops/sec ±6.62% (13 runs sampled)
event-signal x 6,567,081 ops/sec ±3.14% (17 runs sampled)
d3-dispatch x 5,842,948 ops/sec ±7.15% (17 runs sampled)
RXJS x 4,682,779 ops/sec ±8.24% (17 runs sampled)
barracks x 4,672,386 ops/sec ±8.20% (17 runs sampled)
dripEmitterEnhanced x 2,690,784 ops/sec ±10.95% (13 runs sampled)
observable x 1,877,637 ops/sec ±3.76% (17 runs sampled)
minivents x 768,354 ops/sec ±4.67% (18 runs sampled)
JS-Signals x 568,352 ops/sec ±8.16% (15 runs sampled)
evee x 550,775 ops/sec ±7.93% (17 runs sampled)
namespace-emitter x 491,962 ops/sec ±6.73% (15 runs sampled)
signal-emitter x 484,723 ops/sec ±7.50% (16 runs sampled)
```

_Fastest is **xstream**_

## emit one value - two listeners

```
Theoretical max x 24,558,900 ops/sec ±5.63% (17 runs sampled) *burn in*
MicroSignals x 17,688,983 ops/sec ±4.35% (17 runs sampled)
MiniSignals x 16,269,863 ops/sec ±3.58% (16 runs sampled)
signal-lite x 15,473,986 ops/sec ±3.79% (16 runs sampled)
push-stream x 14,412,026 ops/sec ±3.68% (15 runs sampled)
push-stream-patch x 14,297,251 ops/sec ±3.86% (18 runs sampled)
xstream x 13,662,159 ops/sec ±4.81% (16 runs sampled)
dripEmitter x 12,440,530 ops/sec ±3.92% (15 runs sampled)
ReactiveProperty x 12,062,463 ops/sec ±4.24% (15 runs sampled)
EventEmitter3 x 11,924,283 ops/sec ±4.28% (17 runs sampled)
EventEmitter x 9,832,946 ops/sec ±3.82% (18 runs sampled)
observ x 5,659,521 ops/sec ±4.71% (17 runs sampled)
event-signal x 5,560,971 ops/sec ±6.40% (15 runs sampled)
EventEmitter2 x 4,906,221 ops/sec ±4.77% (17 runs sampled)
RXJS x 4,099,132 ops/sec ±3.45% (17 runs sampled)
d3-dispatch x 4,051,819 ops/sec ±4.62% (17 runs sampled)
pull-notify x 3,702,824 ops/sec ±1.97% (17 runs sampled)
dripEmitterEnhanced x 2,768,471 ops/sec ±6.98% (17 runs sampled)
evee x 2,535,338 ops/sec ±5.91% (17 runs sampled)
waddup x 2,219,279 ops/sec ±4.65% (17 runs sampled)
observable x 1,341,525 ops/sec ±4.52% (17 runs sampled)
signal-emitter x 585,645 ops/sec ±4.22% (16 runs sampled)
JS-Signals x 544,889 ops/sec ±4.14% (17 runs sampled)
namespace-emitter x 496,477 ops/sec ±4.54% (16 runs sampled)
minivents x 462,666 ops/sec ±3.55% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - with context

```
MiniSignals x 16,491,654 ops/sec ±5.56% (17 runs sampled)
signal-lite x 15,797,071 ops/sec ±4.58% (13 runs sampled)
EventEmitter3 x 11,793,309 ops/sec ±5.07% (17 runs sampled)
event-signal x 5,554,758 ops/sec ±3.64% (17 runs sampled)
Theoretical max x 3,867,306 ops/sec ±4.91% (15 runs sampled) *burn in*
MicroSignals x 3,383,848 ops/sec ±3.77% (17 runs sampled)
push-stream x 3,152,654 ops/sec ±6.24% (16 runs sampled)
EventEmitter x 2,814,011 ops/sec ±3.67% (17 runs sampled)
ReactiveProperty x 2,743,406 ops/sec ±4.53% (15 runs sampled)
dripEmitter x 2,763,997 ops/sec ±7.85% (16 runs sampled)
EventEmitter2 x 2,194,129 ops/sec ±4.57% (15 runs sampled)
RXJS x 1,975,478 ops/sec ±7.21% (17 runs sampled)
dripEmitterEnhanced x 1,680,887 ops/sec ±5.75% (16 runs sampled)
pull-notify x 1,706,322 ops/sec ±13.85% (15 runs sampled)
JS-Signals x 576,656 ops/sec ±3.93% (17 runs sampled)
signal-emitter x 574,140 ops/sec ±3.72% (17 runs sampled)
evee x 350,460 ops/sec ±7.48% (17 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit variable number of values

```
Theoretical max x 7,375,354 ops/sec ±6.67% (17 runs sampled) *burn in*
MiniSignals x 4,645,655 ops/sec ±3.12% (17 runs sampled)
signal-lite x 3,955,709 ops/sec ±6.37% (15 runs sampled)
EventEmitter x 2,215,086 ops/sec ±5.45% (17 runs sampled)
EventEmitter3 x 2,162,526 ops/sec ±3.43% (18 runs sampled)
EventEmitter2 x 860,616 ops/sec ±13.67% (13 runs sampled)
dripEmitterEnhanced x 585,812 ops/sec ±6.35% (17 runs sampled)
signal-emitter x 144,302 ops/sec ±7.48% (17 runs sampled)
JS-Signals x 137,441 ops/sec ±11.16% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
DripEmitter x 56,824,424 ops/sec ±5.28% (17 runs sampled)
EventDispatcher x 54,828,878 ops/sec ±5.14% (17 runs sampled)
Theoretical max x 54,802,823 ops/sec ±6.90% (17 runs sampled) *burn in*
EventEmitter3 x 50,398,540 ops/sec ±14.65% (16 runs sampled)
MiniSignals x 37,293,938 ops/sec ±4.11% (17 runs sampled)
EventEmitter2 x 28,387,521 ops/sec ±14.34% (17 runs sampled)
EventEmitter x 24,349,963 ops/sec ±9.83% (17 runs sampled)
DripEmitterEnhanced x 22,039,449 ops/sec ±5.30% (16 runs sampled)
push-stream x 14,436,704 ops/sec ±4.33% (17 runs sampled)
JS-Signals x 2,207,981 ops/sec ±8.92% (13 runs sampled)
ReactiveProperty x 1,123,405 ops/sec ±10.95% (14 runs sampled)
pull-notify x 964,275 ops/sec ±14.16% (14 runs sampled)
```

_Fastest is **DripEmitter, EventDispatcher, EventEmitter3**_
