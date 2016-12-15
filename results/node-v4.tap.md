# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 4ms]
- ✔ emit one object - one listener [pass: 46, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 63, fail: 0, duration: 12ms]
- ✔ emit one random value - one listener [pass: 56, fail: 0, duration: 4ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one value - many listeners [pass: 40, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 57, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 46ms
- planned: 681
- assertions: 681
- pass: 681
- fail: 0

# Comments

## Platform

Node.js 4.4.7 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 23,424,549 ops/sec ±3.22% (11 runs sampled)
MiniSignals x 16,394,331 ops/sec ±6.02% (11 runs sampled)
EventDispatcher x 5,012,922 ops/sec ±1.59% (11 runs sampled)
pushStream x 3,616,431 ops/sec ±3.69% (11 runs sampled)
EventEmitter x 3,912,268 ops/sec ±24.14% (11 runs sampled)
ReactiveProperty x 3,073,096 ops/sec ±13.71% (11 runs sampled)
EventEmitter3 x 1,953,616 ops/sec ±3.55% (11 runs sampled)
EventEmitter2 x 1,336,560 ops/sec ±3.22% (11 runs sampled)
JS-Signals x 731,336 ops/sec ±3.66% (11 runs sampled)
dripEmitterEnhanced x 151,877 ops/sec ±6.43% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 13,771,135 ops/sec ±4.54% (11 runs sampled) *burn in*
MiniSignals x 7,326,145 ops/sec ±3.12% (11 runs sampled)
MicroSignals x 7,473,022 ops/sec ±7.25% (11 runs sampled)
sister x 7,276,448 ops/sec ±5.12% (10 runs sampled)
signal-lite x 6,795,949 ops/sec ±5.50% (11 runs sampled)
push-stream x 6,623,922 ops/sec ±3.58% (11 runs sampled)
ReactiveProperty x 5,790,756 ops/sec ±8.03% (11 runs sampled)
dripEmitter x 5,525,302 ops/sec ±3.64% (11 runs sampled)
evee x 4,965,652 ops/sec ±3.97% (10 runs sampled)
EventEmitter3 x 4,920,249 ops/sec ±3.18% (11 runs sampled)
EventEmitter x 4,034,591 ops/sec ±5.22% (11 runs sampled)
event-signal x 2,151,617 ops/sec ±4.51% (10 runs sampled)
EventEmitter2 x 1,764,906 ops/sec ±2.75% (11 runs sampled)
RXJS x 1,607,866 ops/sec ±7.13% (11 runs sampled)
pull-notify x 1,392,676 ops/sec ±4.32% (11 runs sampled)
dripEmitterEnhanced x 953,653 ops/sec ±20.43% (11 runs sampled)
signal-emitter x 229,153 ops/sec ±4.40% (11 runs sampled)
JS-Signals x 209,403 ops/sec ±6.11% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 25,007,351 ops/sec ±6.72% (10 runs sampled) *burn in*
MiniSignals x 15,876,535 ops/sec ±2.72% (11 runs sampled)
signal-lite x 14,822,218 ops/sec ±2.36% (11 runs sampled)
EventEmitter x 2,567,963 ops/sec ±3.24% (11 runs sampled)
EventEmitter3 x 2,597,963 ops/sec ±4.58% (11 runs sampled)
EventEmitter2 x 1,955,738 ops/sec ±4.53% (11 runs sampled)
dripEmitterEnhanced x 1,605,675 ops/sec ±3.47% (11 runs sampled)
signal-emitter x 332,041 ops/sec ±8.31% (11 runs sampled)
JS-Signals x 238,248 ops/sec ±4.60% (11 runs sampled)
minivents x 87,920 ops/sec ±23.65% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
MicroSignals x 10,018,630 ops/sec ±2.91% (11 runs sampled)
Theoretical max x 9,445,315 ops/sec ±7.29% (10 runs sampled) *burn in*
MiniSignals x 8,591,945 ops/sec ±9.04% (11 runs sampled)
mini-pipe x 8,184,748 ops/sec ±4.95% (10 runs sampled)
signal-lite x 7,989,353 ops/sec ±3.08% (11 runs sampled)
ReactiveProperty x 7,354,347 ops/sec ±2.15% (11 runs sampled)
push-stream x 6,849,306 ops/sec ±4.44% (11 runs sampled)
xstream x 6,772,091 ops/sec ±3.33% (11 runs sampled)
sister x 6,255,953 ops/sec ±2.25% (11 runs sampled)
dripEmitter x 6,337,310 ops/sec ±4.03% (11 runs sampled)
EventEmitter3 x 5,705,959 ops/sec ±7.75% (11 runs sampled)
evee x 4,826,207 ops/sec ±6.29% (11 runs sampled)
EventEmitter x 4,767,976 ops/sec ±7.21% (11 runs sampled)
EventEmitter2 x 4,638,676 ops/sec ±35.34% (10 runs sampled)
EventDispatcher x 3,426,946 ops/sec ±3.67% (11 runs sampled)
pull-pushable x 2,324,708 ops/sec ±3.58% (11 runs sampled)
pull-notify x 2,297,807 ops/sec ±8.96% (11 runs sampled)
event-signal x 1,790,797 ops/sec ±4.94% (11 runs sampled)
RXJS x 1,751,181 ops/sec ±14.02% (10 runs sampled)
mobx x 1,275,488 ops/sec ±3.48% (11 runs sampled)
dripEmitterEnhanced x 1,099,557 ops/sec ±2.82% (10 runs sampled)
JS-Signals x 206,386 ops/sec ±4.87% (11 runs sampled)
signal-emitter x 199,232 ops/sec ±7.62% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,882,221 ops/sec ±3.66% (11 runs sampled) *burn in*
MiniSignals x 5,506,635 ops/sec ±3.54% (11 runs sampled)
signal-lite x 5,417,582 ops/sec ±2.56% (11 runs sampled)
MicroSignals x 5,554,406 ops/sec ±9.48% (11 runs sampled)
sister x 4,473,911 ops/sec ±5.31% (11 runs sampled)
ReactiveProperty x 4,864,359 ops/sec ±15.88% (11 runs sampled)
dripEmitter x 3,743,102 ops/sec ±3.95% (10 runs sampled)
EventEmitter3 x 3,705,649 ops/sec ±3.72% (11 runs sampled)
xstream x 3,590,735 ops/sec ±3.05% (11 runs sampled)
evee x 3,378,005 ops/sec ±3.72% (10 runs sampled)
EventEmitter x 3,203,030 ops/sec ±2.53% (11 runs sampled)
EventDispatcher x 2,861,997 ops/sec ±3.44% (11 runs sampled)
push-stream x 3,046,004 ops/sec ±31.68% (11 runs sampled)
event-signal x 1,974,715 ops/sec ±3.45% (11 runs sampled)
pull-notify x 1,250,752 ops/sec ±2.77% (11 runs sampled)
RXJS x 1,267,098 ops/sec ±8.44% (11 runs sampled)
mobx x 1,075,385 ops/sec ±2.89% (11 runs sampled)
EventEmitter2 x 1,223,411 ops/sec ±20.99% (11 runs sampled)
dripEmitterEnhanced x 724,252 ops/sec ±10.21% (11 runs sampled)
signal-emitter x 220,483 ops/sec ±4.65% (11 runs sampled)
JS-Signals x 213,418 ops/sec ±3.63% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite, MicroSignals, ReactiveProperty**_

## emit one random value - one listener

```
MicroSignals x 27,451,143 ops/sec ±3.21% (11 runs sampled)
Theoretical max x 25,271,593 ops/sec ±6.89% (11 runs sampled) *burn in*
MiniSignals x 24,329,542 ops/sec ±3.07% (11 runs sampled)
xstream x 23,195,187 ops/sec ±7.28% (11 runs sampled)
signal-lite x 20,489,496 ops/sec ±3.76% (11 runs sampled)
push-stream-patch x 19,848,621 ops/sec ±3.74% (11 runs sampled)
push-stream x 19,595,788 ops/sec ±4.97% (11 runs sampled)
mini-pipe x 20,313,539 ops/sec ±16.35% (11 runs sampled)
evee x 16,066,665 ops/sec ±3.25% (11 runs sampled)
dripEmitter x 15,668,405 ops/sec ±5.75% (11 runs sampled)
ReactiveProperty x 14,242,546 ops/sec ±5.55% (11 runs sampled)
EventEmitter2 x 14,516,296 ops/sec ±8.16% (11 runs sampled)
EventEmitter3 x 13,957,528 ops/sec ±5.19% (11 runs sampled)
EventEmitter x 12,960,961 ops/sec ±4.88% (11 runs sampled)
observ x 7,507,782 ops/sec ±7.84% (11 runs sampled)
pull-notify x 7,618,990 ops/sec ±9.50% (11 runs sampled)
pull-pushable x 7,202,262 ops/sec ±7.02% (11 runs sampled)
event-signal x 5,644,577 ops/sec ±6.57% (11 runs sampled)
barracks x 4,774,879 ops/sec ±3.61% (10 runs sampled)
RXJS x 4,830,721 ops/sec ±6.06% (11 runs sampled)
d3-dispatch x 3,319,617 ops/sec ±12.62% (11 runs sampled)
dripEmitterEnhanced x 2,909,648 ops/sec ±11.14% (11 runs sampled)
mobx x 2,102,931 ops/sec ±5.15% (11 runs sampled)
observable x 1,658,870 ops/sec ±5.38% (11 runs sampled)
minivents x 719,164 ops/sec ±7.43% (10 runs sampled)
signal-emitter x 619,243 ops/sec ±6.34% (11 runs sampled)
JS-Signals x 617,154 ops/sec ±6.26% (11 runs sampled)
namespace-emitter x 532,694 ops/sec ±9.17% (10 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one random value - two listeners

```
MiniSignals x 16,190,076 ops/sec ±3.34% (11 runs sampled)
signal-lite x 15,949,831 ops/sec ±3.16% (11 runs sampled)
MicroSignals x 15,901,766 ops/sec ±4.74% (11 runs sampled)
Theoretical max x 14,641,160 ops/sec ±5.30% (11 runs sampled) *burn in*
push-stream-patch x 14,211,265 ops/sec ±4.07% (11 runs sampled)
push-stream x 13,784,640 ops/sec ±3.42% (11 runs sampled)
xstream x 12,653,291 ops/sec ±2.38% (11 runs sampled)
dripEmitter x 11,910,270 ops/sec ±5.68% (11 runs sampled)
ReactiveProperty x 11,492,363 ops/sec ±5.93% (11 runs sampled)
evee x 10,798,693 ops/sec ±3.04% (11 runs sampled)
EventEmitter3 x 10,610,042 ops/sec ±4.64% (11 runs sampled)
EventEmitter x 8,273,190 ops/sec ±2.88% (11 runs sampled)
event-signal x 5,374,608 ops/sec ±3.22% (11 runs sampled)
observ x 5,346,714 ops/sec ±3.23% (11 runs sampled)
EventEmitter2 x 4,467,794 ops/sec ±3.20% (11 runs sampled)
RXJS x 4,181,519 ops/sec ±3.65% (11 runs sampled)
dripEmitterEnhanced x 2,786,973 ops/sec ±3.73% (11 runs sampled)
pull-notify x 3,057,337 ops/sec ±14.12% (11 runs sampled)
waddup x 2,266,183 ops/sec ±8.60% (11 runs sampled)
d3-dispatch x 1,966,766 ops/sec ±8.83% (11 runs sampled)
observable x 1,341,205 ops/sec ±8.83% (11 runs sampled)
signal-emitter x 618,454 ops/sec ±4.67% (11 runs sampled)
JS-Signals x 574,166 ops/sec ±7.11% (11 runs sampled)
namespace-emitter x 509,840 ops/sec ±2.95% (11 runs sampled)
minivents x 460,958 ops/sec ±5.37% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 3,960,025 ops/sec ±4.50% (11 runs sampled) *burn in*
push-stream x 3,515,151 ops/sec ±3.85% (11 runs sampled)
MicroSignals x 3,510,146 ops/sec ±6.66% (11 runs sampled)
xstream x 3,327,181 ops/sec ±3.91% (11 runs sampled)
dripEmitter x 3,222,561 ops/sec ±4.01% (11 runs sampled)
EventEmitter3 x 3,179,543 ops/sec ±3.07% (11 runs sampled)
EventEmitter x 2,901,530 ops/sec ±4.35% (11 runs sampled)
ReactiveProperty x 2,768,054 ops/sec ±9.89% (11 runs sampled)
event-signal x 2,520,817 ops/sec ±3.58% (11 runs sampled)
MiniSignals x 2,245,333 ops/sec ±4.15% (10 runs sampled)
EventEmitter2 x 2,228,091 ops/sec ±5.92% (11 runs sampled)
RXJS x 2,171,439 ops/sec ±3.96% (11 runs sampled)
signal-lite x 2,088,415 ops/sec ±6.97% (11 runs sampled)
pull-notify x 1,878,373 ops/sec ±4.10% (11 runs sampled)
dripEmitterEnhanced x 1,791,988 ops/sec ±4.74% (11 runs sampled)
JS-Signals x 497,561 ops/sec ±4.63% (11 runs sampled)
signal-emitter x 464,486 ops/sec ±2.49% (11 runs sampled)
evee x 450,712 ops/sec ±8.73% (11 runs sampled)
```

_Fastest is **push-stream, MicroSignals**_

## emit one value - many listeners

```
Theoretical max x 5,640,024 ops/sec ±4.52% (11 runs sampled) *burn in*
MiniSignals x 5,044,510 ops/sec ±3.63% (11 runs sampled)
push-stream x 5,133,408 ops/sec ±7.95% (11 runs sampled)
dripEmitter x 4,722,789 ops/sec ±4.24% (11 runs sampled)
MicroSignal x 4,790,490 ops/sec ±8.66% (11 runs sampled)
signal-lite x 4,617,954 ops/sec ±5.72% (11 runs sampled)
EventEmitter x 4,024,322 ops/sec ±3.10% (11 runs sampled)
xstream x 4,179,226 ops/sec ±8.24% (11 runs sampled)
EventEmitter3 x 3,924,608 ops/sec ±6.76% (11 runs sampled)
ReactiveProperty x 3,788,508 ops/sec ±15.19% (11 runs sampled)
evee x 3,240,861 ops/sec ±4.12% (11 runs sampled)
event-signal x 3,160,612 ops/sec ±3.45% (11 runs sampled)
EventEmitter2 x 2,740,247 ops/sec ±6.42% (11 runs sampled)
dripEmitterEnhanced x 1,897,213 ops/sec ±4.99% (11 runs sampled)
RXJS x 1,771,217 ops/sec ±4.14% (11 runs sampled)
mobx x 1,158,953 ops/sec ±5.32% (11 runs sampled)
pull-notify x 875,243 ops/sec ±4.05% (11 runs sampled)
signal-emitter x 552,974 ops/sec ±3.65% (11 runs sampled)
JS-Signals x 395,508 ops/sec ±4.01% (11 runs sampled)
minivents x 111,739 ops/sec ±4.27% (11 runs sampled)
```

_Fastest is **MiniSignals, push-stream, MicroSignal**_

## emit one value - one listener

```
Theoretical max x 40,624,634 ops/sec ±4.40% (11 runs sampled) *burn in*
MicroSignals x 35,102,150 ops/sec ±3.94% (11 runs sampled)
xstream x 32,860,275 ops/sec ±7.70% (10 runs sampled)
sister x 27,738,764 ops/sec ±8.98% (10 runs sampled)
mini-pipe x 24,773,960 ops/sec ±10.75% (11 runs sampled)
push-stream x 21,941,798 ops/sec ±3.42% (11 runs sampled)
MiniSignals x 24,082,224 ops/sec ±15.90% (11 runs sampled)
ReactiveProperty x 20,140,179 ops/sec ±4.79% (10 runs sampled)
EventEmitter3 x 19,131,075 ops/sec ±2.54% (11 runs sampled)
dripEmitter x 19,459,593 ops/sec ±4.98% (11 runs sampled)
push-stream-patch x 19,287,246 ops/sec ±6.71% (10 runs sampled)
EventEmitter x 17,723,304 ops/sec ±3.31% (11 runs sampled)
evee x 16,365,521 ops/sec ±12.09% (11 runs sampled)
EventEmitter2 x 17,058,137 ops/sec ±22.76% (11 runs sampled)
signal-lite x 17,959,177 ops/sec ±32.65% (11 runs sampled)
observ x 10,682,089 ops/sec ±5.09% (11 runs sampled)
event-signal x 6,737,548 ops/sec ±7.35% (11 runs sampled)
pull-pushable x 6,486,767 ops/sec ±6.10% (11 runs sampled)
RXJS x 5,687,811 ops/sec ±6.10% (11 runs sampled)
barracks x 5,019,040 ops/sec ±3.04% (11 runs sampled)
pull-notify x 5,874,381 ops/sec ±26.45% (10 runs sampled)
d3-dispatch x 4,753,699 ops/sec ±37.50% (10 runs sampled)
dripEmitterEnhanced x 3,136,633 ops/sec ±9.17% (10 runs sampled)
observable x 1,877,922 ops/sec ±3.55% (10 runs sampled)
JS-Signals x 593,633 ops/sec ±10.71% (11 runs sampled)
signal-emitter x 519,134 ops/sec ±8.20% (11 runs sampled)
namespace-emitter x 460,282 ops/sec ±19.81% (11 runs sampled)
minivents x 332,698 ops/sec ±64.92% (11 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one value - two listeners

```
Theoretical max x 22,283,760 ops/sec ±15.44% (11 runs sampled) *burn in*
sister x 16,795,669 ops/sec ±1.86% (11 runs sampled)
MiniSignals x 15,917,883 ops/sec ±2.52% (11 runs sampled)
MicroSignals x 14,058,236 ops/sec ±6.90% (11 runs sampled)
push-stream-patch x 12,989,863 ops/sec ±8.61% (11 runs sampled)
push-stream x 12,973,787 ops/sec ±10.23% (11 runs sampled)
ReactiveProperty x 12,034,849 ops/sec ±3.00% (11 runs sampled)
evee x 10,981,571 ops/sec ±6.01% (11 runs sampled)
signal-lite x 11,219,316 ops/sec ±14.91% (11 runs sampled)
EventEmitter x 10,275,460 ops/sec ±5.53% (11 runs sampled)
xstream x 10,692,065 ops/sec ±14.61% (11 runs sampled)
dripEmitter x 9,207,193 ops/sec ±4.91% (11 runs sampled)
EventEmitter3 x 9,400,006 ops/sec ±7.30% (11 runs sampled)
observ x 5,486,951 ops/sec ±5.61% (11 runs sampled)
EventEmitter2 x 4,458,121 ops/sec ±6.54% (11 runs sampled)
event-signal x 4,467,673 ops/sec ±8.13% (11 runs sampled)
RXJS x 3,763,079 ops/sec ±4.04% (11 runs sampled)
d3-dispatch x 3,868,571 ops/sec ±8.11% (11 runs sampled)
pull-notify x 2,861,774 ops/sec ±5.95% (10 runs sampled)
dripEmitterEnhanced x 2,479,205 ops/sec ±6.64% (11 runs sampled)
waddup x 2,003,047 ops/sec ±15.56% (11 runs sampled)
observable x 1,241,420 ops/sec ±8.41% (11 runs sampled)
JS-Signals x 486,676 ops/sec ±6.15% (10 runs sampled)
namespace-emitter x 469,647 ops/sec ±5.14% (11 runs sampled)
signal-emitter x 399,420 ops/sec ±13.16% (11 runs sampled)
minivents x 352,339 ops/sec ±7.95% (11 runs sampled)
```

_Fastest is **sister**_

## emit one value - with context

```
signal-lite x 15,829,379 ops/sec ±5.16% (11 runs sampled)
MiniSignals x 16,625,333 ops/sec ±13.00% (11 runs sampled)
EventEmitter3 x 12,203,032 ops/sec ±4.55% (11 runs sampled)
event-signal x 5,975,985 ops/sec ±7.44% (11 runs sampled)
MicroSignals x 3,535,555 ops/sec ±9.15% (11 runs sampled)
Theoretical max x 3,316,056 ops/sec ±4.69% (11 runs sampled) *burn in*
push-stream x 3,279,017 ops/sec ±4.67% (11 runs sampled)
dripEmitter x 2,976,879 ops/sec ±8.33% (11 runs sampled)
ReactiveProperty x 2,835,349 ops/sec ±7.80% (11 runs sampled)
EventEmitter x 2,539,059 ops/sec ±4.44% (11 runs sampled)
sister x 2,487,784 ops/sec ±19.58% (11 runs sampled)
RXJS x 2,154,292 ops/sec ±5.06% (11 runs sampled)
pull-notify x 2,041,442 ops/sec ±3.23% (11 runs sampled)
EventEmitter2 x 1,940,374 ops/sec ±3.75% (11 runs sampled)
dripEmitterEnhanced x 1,734,610 ops/sec ±11.17% (11 runs sampled)
mobx x 1,361,314 ops/sec ±4.59% (11 runs sampled)
JS-Signals x 573,767 ops/sec ±4.42% (11 runs sampled)
signal-emitter x 551,938 ops/sec ±11.29% (11 runs sampled)
evee x 412,551 ops/sec ±10.96% (11 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit variable number of values

```
Theoretical max x 7,684,608 ops/sec ±6.99% (11 runs sampled) *burn in*
MiniSignals x 3,326,768 ops/sec ±10.98% (11 runs sampled)
signal-lite x 2,164,680 ops/sec ±22.25% (10 runs sampled)
EventEmitter x 1,913,099 ops/sec ±20.72% (11 runs sampled)
EventEmitter3 x 1,518,267 ops/sec ±19.31% (10 runs sampled)
EventEmitter2 x 815,568 ops/sec ±7.07% (11 runs sampled)
dripEmitterEnhanced x 649,836 ops/sec ±5.10% (11 runs sampled)
JS-Signals x 122,219 ops/sec ±12.34% (11 runs sampled)
signal-emitter x 89,332 ops/sec ±28.20% (10 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
DripEmitter x 46,349,699 ops/sec ±4.84% (11 runs sampled)
EventEmitter3 x 39,503,702 ops/sec ±12.03% (11 runs sampled)
EventDispatcher x 37,305,767 ops/sec ±11.59% (11 runs sampled)
Theoretical max x 35,781,981 ops/sec ±7.57% (11 runs sampled) *burn in*
DripEmitterEnhanced x 21,802,014 ops/sec ±6.52% (11 runs sampled)
MiniSignals x 20,683,633 ops/sec ±25.83% (11 runs sampled)
EventEmitter2 x 18,179,424 ops/sec ±11.94% (11 runs sampled)
EventEmitter x 16,377,863 ops/sec ±9.61% (10 runs sampled)
push-stream x 11,819,124 ops/sec ±13.32% (10 runs sampled)
JS-Signals x 1,783,228 ops/sec ±19.60% (11 runs sampled)
pull-notify x 865,525 ops/sec ±18.50% (10 runs sampled)
ReactiveProperty x 905,613 ops/sec ±26.94% (11 runs sampled)
```

_Fastest is **DripEmitter**_
