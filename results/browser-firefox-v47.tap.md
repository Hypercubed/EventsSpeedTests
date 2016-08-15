# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 0ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 8ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 8ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 45ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Firefox 47.0 on OS X 10.11 NODE_ENV = undefined BENCH = undefined

## add and remove

```
ReactiveProperty x 16,259,245 ops/sec ±8.87% (14 runs sampled)
dripEmitter x 16,224,174 ops/sec ±25.64% (14 runs sampled)
MiniSignals x 9,388,913 ops/sec ±3.35% (15 runs sampled)
EventEmitter3 x 5,369,353 ops/sec ±4.16% (15 runs sampled)
EventDispatcher x 2,333,683 ops/sec ±3.72% (14 runs sampled)
pushStream x 2,292,269 ops/sec ±5.99% (14 runs sampled)
EventEmitter x 2,306,892 ops/sec ±6.78% (14 runs sampled)
EventEmitter2 x 1,983,037 ops/sec ±5.09% (15 runs sampled)
dripEmitterEnhanced x 439,560 ops/sec ±3.84% (15 runs sampled)
JS-Signals x 351,390 ops/sec ±12.18% (15 runs sampled)
```

_Fastest is **ReactiveProperty, dripEmitter**_

## emit one array

```
Theoretical max x 20,480,816 ops/sec ±5.94% (15 runs sampled) *burn in*
push-stream x 15,572,761 ops/sec ±3.99% (15 runs sampled)
MicroSignals x 12,963,662 ops/sec ±2.86% (15 runs sampled)
ReactiveProperty x 9,321,142 ops/sec ±3.45% (15 runs sampled)
sister x 9,290,146 ops/sec ±5.41% (14 runs sampled)
MiniSignals x 6,312,729 ops/sec ±5.28% (15 runs sampled)
dripEmitter x 4,604,692 ops/sec ±5.27% (15 runs sampled)
EventEmitter3 x 4,349,476 ops/sec ±3.21% (15 runs sampled)
event-signal x 2,654,780 ops/sec ±8.29% (15 runs sampled)
EventEmitter2 x 2,453,936 ops/sec ±8.00% (14 runs sampled)
RXJS x 2,186,974 ops/sec ±6.44% (14 runs sampled)
evee x 1,204,360 ops/sec ±6.31% (14 runs sampled)
pull-notify x 679,275 ops/sec ±6.88% (15 runs sampled)
dripEmitterEnhanced x 583,239 ops/sec ±3.33% (14 runs sampled)
signal-lite x 405,562 ops/sec ±6.42% (15 runs sampled)
signal-emitter x 331,961 ops/sec ±3.86% (14 runs sampled)
EventEmitter x 256,571 ops/sec ±9.56% (15 runs sampled)
JS-Signals x 230,766 ops/sec ±6.84% (15 runs sampled)
```

_Fastest is **push-stream**_

## emit many values - two listeners

```
Theoretical max x 50,438,340 ops/sec ±4.74% (15 runs sampled) *burn in*
MiniSignals x 22,188,386 ops/sec ±2.43% (15 runs sampled)
EventEmitter3 x 7,361,755 ops/sec ±6.12% (15 runs sampled)
EventEmitter2 x 5,238,350 ops/sec ±6.45% (15 runs sampled)
dripEmitterEnhanced x 1,635,656 ops/sec ±3.24% (15 runs sampled)
signal-lite x 762,170 ops/sec ±5.50% (15 runs sampled)
signal-emitter x 772,819 ops/sec ±7.16% (14 runs sampled)
JS-Signals x 354,821 ops/sec ±2.48% (15 runs sampled)
EventEmitter x 347,734 ops/sec ±11.43% (15 runs sampled)
minivents x 227,971 ops/sec ±4.32% (14 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
ReactiveProperty x 8,739,939 ops/sec ±6.30% (15 runs sampled)
push-stream x 3,681,119 ops/sec ±3.60% (15 runs sampled)
Theoretical max x 3,716,242 ops/sec ±4.59% (15 runs sampled) *burn in*
mini-pipe x 3,535,676 ops/sec ±6.64% (15 runs sampled)
MicroSignals x 2,851,067 ops/sec ±4.52% (15 runs sampled)
sister x 2,789,708 ops/sec ±7.94% (15 runs sampled)
MiniSignals x 2,479,890 ops/sec ±5.95% (14 runs sampled)
EventEmitter2 x 2,347,921 ops/sec ±2.66% (15 runs sampled)
xstream x 2,160,054 ops/sec ±3.08% (15 runs sampled)
EventEmitter3 x 2,252,342 ops/sec ±9.82% (14 runs sampled)
dripEmitter x 1,921,202 ops/sec ±5.88% (14 runs sampled)
evee x 1,309,082 ops/sec ±3.25% (14 runs sampled)
event-signal x 1,411,445 ops/sec ±11.48% (14 runs sampled)
RXJS x 1,230,584 ops/sec ±7.54% (15 runs sampled)
EventDispatcher x 1,125,624 ops/sec ±4.44% (14 runs sampled)
pull-pushable x 889,910 ops/sec ±9.98% (14 runs sampled)
EventEmitter x 805,347 ops/sec ±5.41% (15 runs sampled)
pull-notify x 768,045 ops/sec ±4.84% (14 runs sampled)
signal-lite x 441,334 ops/sec ±8.30% (14 runs sampled)
dripEmitterEnhanced x 391,190 ops/sec ±7.57% (15 runs sampled)
signal-emitter x 248,663 ops/sec ±4.48% (13 runs sampled)
JS-Signals x 235,901 ops/sec ±6.09% (15 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one object - two listeners

```
ReactiveProperty x 3,640,475 ops/sec ±13.78% (13 runs sampled)
sister x 2,504,760 ops/sec ±4.55% (14 runs sampled)
push-stream x 2,360,930 ops/sec ±4.94% (15 runs sampled)
Theoretical max x 2,579,571 ops/sec ±16.05% (14 runs sampled) *burn in*
MicroSignals x 2,134,935 ops/sec ±3.41% (14 runs sampled)
dripEmitter x 2,027,213 ops/sec ±4.65% (15 runs sampled)
MiniSignals x 1,903,780 ops/sec ±6.65% (15 runs sampled)
xstream x 1,635,475 ops/sec ±2.99% (14 runs sampled)
EventEmitter3 x 1,618,063 ops/sec ±5.72% (13 runs sampled)
RXJS x 1,361,147 ops/sec ±4.76% (15 runs sampled)
EventEmitter2 x 1,211,328 ops/sec ±4.88% (15 runs sampled)
event-signal x 1,201,582 ops/sec ±4.28% (14 runs sampled)
EventDispatcher x 1,073,668 ops/sec ±3.74% (14 runs sampled)
evee x 851,518 ops/sec ±3.73% (15 runs sampled)
pull-notify x 387,500 ops/sec ±6.36% (14 runs sampled)
signal-lite x 366,281 ops/sec ±3.72% (15 runs sampled)
dripEmitterEnhanced x 335,717 ops/sec ±3.85% (13 runs sampled)
signal-emitter x 268,600 ops/sec ±5.17% (15 runs sampled)
EventEmitter x 219,869 ops/sec ±6.17% (14 runs sampled)
JS-Signals x 174,830 ops/sec ±12.60% (15 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 109,543,141 ops/sec ±3.43% (15 runs sampled) *burn in*
mini-pipe x 81,542,303 ops/sec ±3.18% (14 runs sampled)
ReactiveProperty x 61,030,138 ops/sec ±3.64% (15 runs sampled)
push-stream x 59,378,881 ops/sec ±3.63% (14 runs sampled)
push-stream-patch x 56,911,441 ops/sec ±3.39% (15 runs sampled)
MicroSignals x 57,071,669 ops/sec ±4.79% (14 runs sampled)
xstream x 53,865,193 ops/sec ±2.71% (15 runs sampled)
observ x 45,928,660 ops/sec ±6.57% (14 runs sampled)
MiniSignals x 36,998,497 ops/sec ±2.36% (15 runs sampled)
dripEmitter x 20,991,485 ops/sec ±4.74% (14 runs sampled)
evee x 20,409,081 ops/sec ±4.45% (15 runs sampled)
EventEmitter2 x 18,121,286 ops/sec ±2.52% (14 runs sampled)
EventEmitter3 x 18,274,710 ops/sec ±3.63% (15 runs sampled)
barracks x 13,697,615 ops/sec ±3.70% (14 runs sampled)
d3-dispatch x 13,110,105 ops/sec ±2.79% (15 runs sampled)
event-signal x 13,163,664 ops/sec ±4.79% (14 runs sampled)
RXJS x 10,758,697 ops/sec ±3.60% (15 runs sampled)
pull-pushable x 5,595,717 ops/sec ±5.79% (15 runs sampled)
pull-notify x 4,790,550 ops/sec ±3.42% (14 runs sampled)
EventEmitter x 4,174,036 ops/sec ±3.84% (15 runs sampled)
signal-lite x 2,396,058 ops/sec ±3.24% (15 runs sampled)
dripEmitterEnhanced x 1,932,894 ops/sec ±4.48% (15 runs sampled)
minivents x 1,282,038 ops/sec ±3.31% (15 runs sampled)
signal-emitter x 1,060,131 ops/sec ±3.44% (15 runs sampled)
JS-Signals x 1,025,433 ops/sec ±2.94% (14 runs sampled)
namespace-emitter x 668,465 ops/sec ±3.12% (15 runs sampled)
observable x 510,708 ops/sec ±6.56% (15 runs sampled)
```

_Fastest is **mini-pipe**_

## emit one random value - two listeners

```
Theoretical max x 58,637,558 ops/sec ±4.15% (15 runs sampled) *burn in*
ReactiveProperty x 39,015,210 ops/sec ±5.58% (14 runs sampled)
MicroSignals x 36,894,770 ops/sec ±3.19% (15 runs sampled)
push-stream-patch x 35,886,657 ops/sec ±2.82% (14 runs sampled)
push-stream x 34,572,816 ops/sec ±3.21% (15 runs sampled)
observ x 28,942,803 ops/sec ±8.38% (14 runs sampled)
xstream x 25,157,714 ops/sec ±3.38% (15 runs sampled)
MiniSignals x 24,974,011 ops/sec ±3.31% (15 runs sampled)
waddup x 20,371,260 ops/sec ±5.03% (14 runs sampled)
dripEmitter x 19,243,638 ops/sec ±2.91% (14 runs sampled)
EventEmitter3 x 15,258,902 ops/sec ±3.49% (15 runs sampled)
evee x 14,360,532 ops/sec ±6.17% (14 runs sampled)
event-signal x 10,879,977 ops/sec ±3.97% (15 runs sampled)
d3-dispatch x 10,027,922 ops/sec ±4.25% (14 runs sampled)
EventEmitter2 x 9,570,466 ops/sec ±3.28% (15 runs sampled)
RXJS x 7,465,427 ops/sec ±4.65% (15 runs sampled)
pull-notify x 2,612,237 ops/sec ±4.03% (15 runs sampled)
dripEmitterEnhanced x 1,743,498 ops/sec ±6.20% (15 runs sampled)
signal-lite x 1,516,329 ops/sec ±2.42% (14 runs sampled)
signal-emitter x 977,432 ops/sec ±4.40% (15 runs sampled)
EventEmitter x 955,694 ops/sec ±4.30% (15 runs sampled)
JS-Signals x 804,988 ops/sec ±3.35% (15 runs sampled)
minivents x 719,296 ops/sec ±6.72% (15 runs sampled)
namespace-emitter x 494,511 ops/sec ±6.94% (15 runs sampled)
observable x 246,730 ops/sec ±95.84% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - bound function

```
Theoretical max x 82,439,697 ops/sec ±3.47% (15 runs sampled) *burn in*
MicroSignals x 29,870,495 ops/sec ±3.86% (15 runs sampled)
push-stream x 28,824,642 ops/sec ±4.22% (15 runs sampled)
ReactiveProperty x 25,063,421 ops/sec ±2.87% (15 runs sampled)
MiniSignals x 23,171,227 ops/sec ±3.70% (15 runs sampled)
xstream x 21,812,133 ops/sec ±5.27% (15 runs sampled)
dripEmitter x 17,231,638 ops/sec ±5.27% (14 runs sampled)
EventEmitter3 x 13,722,535 ops/sec ±5.37% (15 runs sampled)
event-signal x 9,747,170 ops/sec ±5.42% (15 runs sampled)
EventEmitter2 x 8,626,781 ops/sec ±5.06% (14 runs sampled)
RXJS x 7,279,917 ops/sec ±7.83% (15 runs sampled)
evee x 2,928,202 ops/sec ±9.81% (14 runs sampled)
pull-notify x 2,385,419 ops/sec ±7.60% (14 runs sampled)
dripEmitterEnhanced x 1,542,088 ops/sec ±6.12% (15 runs sampled)
signal-lite x 1,492,305 ops/sec ±4.58% (14 runs sampled)
signal-emitter x 1,001,388 ops/sec ±3.43% (15 runs sampled)
EventEmitter x 822,568 ops/sec ±4.37% (15 runs sampled)
JS-Signals x 705,436 ops/sec ±3.60% (14 runs sampled)
```

_Fastest is **MicroSignals, push-stream**_

## emit one value - many listeners

```
ReactiveProperty x 16,943,749 ops/sec ±2.93% (15 runs sampled)
push-stream x 15,992,283 ops/sec ±4.28% (15 runs sampled)
MicroSignal x 14,072,122 ops/sec ±3.24% (15 runs sampled)
xstream x 9,800,628 ops/sec ±3.36% (15 runs sampled)
MiniSignals x 6,261,881 ops/sec ±2.51% (15 runs sampled)
Theoretical max x 5,339,886 ops/sec ±4.46% (14 runs sampled) *burn in*
dripEmitter x 4,351,732 ops/sec ±3.80% (15 runs sampled)
evee x 4,274,197 ops/sec ±4.06% (15 runs sampled)
EventEmitter3 x 4,048,658 ops/sec ±5.61% (15 runs sampled)
event-signal x 3,980,325 ops/sec ±3.92% (14 runs sampled)
EventEmitter2 x 2,672,669 ops/sec ±7.65% (14 runs sampled)
RXJS x 2,311,629 ops/sec ±3.48% (13 runs sampled)
dripEmitterEnhanced x 1,200,744 ops/sec ±5.78% (15 runs sampled)
signal-emitter x 896,928 ops/sec ±3.02% (14 runs sampled)
pull-notify x 513,021 ops/sec ±4.42% (14 runs sampled)
signal-lite x 442,245 ops/sec ±2.62% (15 runs sampled)
EventEmitter x 298,188 ops/sec ±8.60% (15 runs sampled)
JS-Signals x 280,482 ops/sec ±3.30% (15 runs sampled)
minivents x 165,659 ops/sec ±3.66% (15 runs sampled)
```

_Fastest is **ReactiveProperty, push-stream**_

## emit one value - one listener

```
Theoretical max x 180,755,652 ops/sec ±4.37% (15 runs sampled) *burn in*
mini-pipe x 84,758,583 ops/sec ±2.95% (15 runs sampled)
MicroSignals x 63,857,717 ops/sec ±2.13% (15 runs sampled)
push-stream x 62,726,987 ops/sec ±2.86% (15 runs sampled)
push-stream-patch x 57,856,401 ops/sec ±2.81% (15 runs sampled)
ReactiveProperty x 54,104,741 ops/sec ±6.07% (14 runs sampled)
xstream x 50,459,618 ops/sec ±9.72% (14 runs sampled)
sister x 38,235,102 ops/sec ±4.61% (15 runs sampled)
MiniSignals x 36,161,619 ops/sec ±5.56% (15 runs sampled)
observ x 34,145,931 ops/sec ±7.13% (15 runs sampled)
dripEmitter x 22,834,414 ops/sec ±2.80% (15 runs sampled)
EventEmitter3 x 20,411,950 ops/sec ±3.23% (14 runs sampled)
EventEmitter2 x 19,135,869 ops/sec ±3.41% (15 runs sampled)
evee x 15,862,901 ops/sec ±11.21% (14 runs sampled)
barracks x 11,668,407 ops/sec ±3.46% (15 runs sampled)
event-signal x 11,304,934 ops/sec ±3.19% (15 runs sampled)
d3-dispatch x 10,035,459 ops/sec ±10.30% (15 runs sampled)
RXJS x 8,660,680 ops/sec ±6.30% (13 runs sampled)
EventEmitter x 4,377,903 ops/sec ±1.79% (15 runs sampled)
pull-pushable x 3,730,409 ops/sec ±3.67% (15 runs sampled)
pull-notify x 3,504,788 ops/sec ±4.10% (14 runs sampled)
signal-lite x 1,929,471 ops/sec ±4.32% (14 runs sampled)
dripEmitterEnhanced x 1,820,872 ops/sec ±5.43% (15 runs sampled)
minivents x 967,976 ops/sec ±5.33% (14 runs sampled)
signal-emitter x 898,834 ops/sec ±4.42% (15 runs sampled)
JS-Signals x 846,564 ops/sec ±3.93% (15 runs sampled)
namespace-emitter x 472,062 ops/sec ±9.49% (14 runs sampled)
observable x 371,052 ops/sec ±13.39% (13 runs sampled)
```

_Fastest is **mini-pipe**_

## emit one value - two listeners

```
Theoretical max x 83,534,518 ops/sec ±4.42% (15 runs sampled) *burn in*
ReactiveProperty x 36,440,643 ops/sec ±2.84% (15 runs sampled)
MicroSignals x 34,463,568 ops/sec ±2.75% (15 runs sampled)
push-stream x 33,399,989 ops/sec ±3.07% (15 runs sampled)
push-stream-patch x 31,838,600 ops/sec ±3.30% (14 runs sampled)
sister x 31,784,143 ops/sec ±3.88% (15 runs sampled)
observ x 27,675,336 ops/sec ±6.42% (15 runs sampled)
xstream x 25,886,925 ops/sec ±3.44% (14 runs sampled)
MiniSignals x 22,176,762 ops/sec ±4.85% (15 runs sampled)
waddup x 18,463,090 ops/sec ±8.55% (14 runs sampled)
dripEmitter x 13,630,876 ops/sec ±7.37% (14 runs sampled)
evee x 12,884,836 ops/sec ±8.76% (14 runs sampled)
EventEmitter3 x 10,944,217 ops/sec ±9.56% (15 runs sampled)
event-signal x 10,302,207 ops/sec ±5.70% (15 runs sampled)
d3-dispatch x 7,804,740 ops/sec ±3.77% (15 runs sampled)
EventEmitter2 x 8,011,539 ops/sec ±7.26% (14 runs sampled)
RXJS x 6,111,733 ops/sec ±6.85% (15 runs sampled)
pull-notify x 2,414,299 ops/sec ±4.21% (14 runs sampled)
signal-lite x 1,557,067 ops/sec ±2.74% (15 runs sampled)
dripEmitterEnhanced x 1,370,744 ops/sec ±6.79% (15 runs sampled)
signal-emitter x 978,009 ops/sec ±5.05% (15 runs sampled)
EventEmitter x 813,743 ops/sec ±2.64% (14 runs sampled)
minivents x 667,751 ops/sec ±6.84% (14 runs sampled)
JS-Signals x 551,087 ops/sec ±5.57% (12 runs sampled)
namespace-emitter x 437,333 ops/sec ±4.63% (15 runs sampled)
observable x 374,813 ops/sec ±7.75% (14 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - with context

```
Theoretical max x 69,236,239 ops/sec ±2.61% (15 runs sampled) *burn in*
MicroSignals x 28,256,738 ops/sec ±4.22% (14 runs sampled)
push-stream x 24,841,753 ops/sec ±3.98% (14 runs sampled)
ReactiveProperty x 24,498,221 ops/sec ±3.88% (15 runs sampled)
MiniSignals x 23,577,916 ops/sec ±3.99% (14 runs sampled)
sister x 22,669,102 ops/sec ±3.67% (15 runs sampled)
dripEmitter x 16,902,724 ops/sec ±5.10% (15 runs sampled)
EventEmitter3 x 12,592,077 ops/sec ±8.96% (14 runs sampled)
event-signal x 11,124,535 ops/sec ±3.23% (15 runs sampled)
RXJS x 7,416,570 ops/sec ±2.76% (15 runs sampled)
EventEmitter2 x 6,983,552 ops/sec ±7.61% (15 runs sampled)
evee x 3,026,030 ops/sec ±11.85% (15 runs sampled)
pull-notify x 2,499,122 ops/sec ±3.14% (15 runs sampled)
dripEmitterEnhanced x 1,716,505 ops/sec ±5.45% (15 runs sampled)
signal-lite x 1,547,260 ops/sec ±4.42% (15 runs sampled)
signal-emitter x 1,040,647 ops/sec ±3.80% (15 runs sampled)
JS-Signals x 677,028 ops/sec ±3.83% (15 runs sampled)
EventEmitter x 652,793 ops/sec ±14.96% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit variable number of values

```
Theoretical max x 42,181,808 ops/sec ±2.41% (15 runs sampled) *burn in*
MiniSignals x 5,130,979 ops/sec ±6.91% (15 runs sampled)
EventEmitter3 x 3,171,140 ops/sec ±4.68% (15 runs sampled)
EventEmitter2 x 1,738,691 ops/sec ±6.91% (15 runs sampled)
signal-lite x 371,652 ops/sec ±3.74% (15 runs sampled)
dripEmitterEnhanced x 378,058 ops/sec ±5.56% (15 runs sampled)
signal-emitter x 239,250 ops/sec ±3.31% (15 runs sampled)
EventEmitter x 196,778 ops/sec ±3.58% (15 runs sampled)
JS-Signals x 152,292 ops/sec ±3.52% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventDispatcher x 59,143,137 ops/sec ±3.77% (15 runs sampled)
EventEmitter3 x 55,624,173 ops/sec ±4.57% (15 runs sampled)
Theoretical max x 52,265,804 ops/sec ±4.45% (15 runs sampled) *burn in*
DripEmitter x 47,609,148 ops/sec ±8.59% (15 runs sampled)
MiniSignals x 30,551,157 ops/sec ±3.78% (15 runs sampled)
EventEmitter2 x 28,604,814 ops/sec ±7.00% (14 runs sampled)
EventEmitter x 26,441,765 ops/sec ±6.31% (15 runs sampled)
JS-Signals x 16,899,387 ops/sec ±5.29% (15 runs sampled)
push-stream x 11,500,201 ops/sec ±3.49% (15 runs sampled)
DripEmitterEnhanced x 11,190,526 ops/sec ±9.94% (14 runs sampled)
pull-notify x 9,054,627 ops/sec ±4.82% (15 runs sampled)
ReactiveProperty x 3,298,806 ops/sec ±2.86% (15 runs sampled)
```

_Fastest is **EventDispatcher**_
