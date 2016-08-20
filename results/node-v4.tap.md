# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 4ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 4ms]

# Summary

- duration: 22ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Node.js 4.4.7 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 23,104,874 ops/sec ±3.06% (15 runs sampled)
MiniSignals x 16,574,727 ops/sec ±2.51% (17 runs sampled)
EventDispatcher x 4,565,629 ops/sec ±4.90% (17 runs sampled)
pushStream x 3,468,422 ops/sec ±4.31% (14 runs sampled)
EventEmitter x 3,745,923 ops/sec ±15.47% (17 runs sampled)
ReactiveProperty x 2,826,357 ops/sec ±12.30% (14 runs sampled)
EventEmitter3 x 1,848,972 ops/sec ±2.59% (16 runs sampled)
EventEmitter2 x 1,284,855 ops/sec ±3.36% (17 runs sampled)
JS-Signals x 682,087 ops/sec ±3.16% (18 runs sampled)
dripEmitterEnhanced x 165,898 ops/sec ±9.01% (16 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 13,558,969 ops/sec ±4.36% (15 runs sampled) *burn in*
MicroSignals x 7,656,847 ops/sec ±4.64% (17 runs sampled)
MiniSignals x 7,074,757 ops/sec ±6.19% (15 runs sampled)
signal-lite x 6,954,074 ops/sec ±4.57% (16 runs sampled)
sister x 7,084,769 ops/sec ±7.11% (15 runs sampled)
push-stream x 6,475,944 ops/sec ±4.12% (18 runs sampled)
ReactiveProperty x 5,634,825 ops/sec ±2.90% (15 runs sampled)
dripEmitter x 5,273,172 ops/sec ±3.13% (17 runs sampled)
EventEmitter3 x 4,765,230 ops/sec ±5.20% (13 runs sampled)
EventEmitter x 3,792,250 ops/sec ±4.01% (16 runs sampled)
evee x 3,277,680 ops/sec ±6.86% (18 runs sampled)
event-signal x 2,145,083 ops/sec ±2.84% (16 runs sampled)
EventEmitter2 x 1,736,336 ops/sec ±3.83% (16 runs sampled)
RXJS x 1,532,559 ops/sec ±5.83% (16 runs sampled)
pull-notify x 1,393,451 ops/sec ±3.93% (16 runs sampled)
dripEmitterEnhanced x 981,693 ops/sec ±6.01% (16 runs sampled)
signal-emitter x 212,832 ops/sec ±4.83% (18 runs sampled)
JS-Signals x 208,829 ops/sec ±4.61% (17 runs sampled)
```

_Fastest is **MicroSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 25,705,557 ops/sec ±2.74% (17 runs sampled) *burn in*
signal-lite x 15,069,682 ops/sec ±4.12% (18 runs sampled)
MiniSignals x 15,251,111 ops/sec ±6.37% (17 runs sampled)
EventEmitter x 2,436,859 ops/sec ±3.20% (18 runs sampled)
EventEmitter3 x 2,476,681 ops/sec ±4.92% (17 runs sampled)
EventEmitter2 x 1,946,833 ops/sec ±3.95% (16 runs sampled)
dripEmitterEnhanced x 1,404,785 ops/sec ±8.13% (14 runs sampled)
signal-emitter x 370,648 ops/sec ±3.46% (18 runs sampled)
JS-Signals x 223,990 ops/sec ±3.79% (12 runs sampled)
minivents x 145,001 ops/sec ±4.03% (18 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit one object - one listener

```
Theoretical max x 11,432,428 ops/sec ±2.98% (18 runs sampled) *burn in*
mini-pipe x 9,178,441 ops/sec ±1.83% (18 runs sampled)
MiniSignals x 9,227,740 ops/sec ±3.08% (18 runs sampled)
MicroSignals x 9,242,013 ops/sec ±9.35% (15 runs sampled)
signal-lite x 7,830,709 ops/sec ±3.55% (18 runs sampled)
ReactiveProperty x 7,600,724 ops/sec ±2.55% (18 runs sampled)
push-stream x 7,049,161 ops/sec ±3.48% (17 runs sampled)
xstream x 7,052,555 ops/sec ±4.10% (18 runs sampled)
dripEmitter x 6,807,349 ops/sec ±5.11% (18 runs sampled)
sister x 6,577,760 ops/sec ±2.26% (18 runs sampled)
EventEmitter2 x 6,303,872 ops/sec ±4.31% (16 runs sampled)
EventEmitter3 x 5,949,742 ops/sec ±5.25% (17 runs sampled)
EventEmitter x 5,633,850 ops/sec ±3.71% (16 runs sampled)
evee x 3,815,804 ops/sec ±1.95% (18 runs sampled)
EventDispatcher x 3,460,939 ops/sec ±3.21% (18 runs sampled)
pull-notify x 2,434,603 ops/sec ±3.33% (18 runs sampled)
pull-pushable x 2,314,165 ops/sec ±2.07% (16 runs sampled)
event-signal x 2,253,613 ops/sec ±3.31% (18 runs sampled)
RXJS x 1,759,359 ops/sec ±5.39% (18 runs sampled)
dripEmitterEnhanced x 1,107,280 ops/sec ±2.76% (14 runs sampled)
JS-Signals x 232,484 ops/sec ±3.12% (18 runs sampled)
signal-emitter x 225,154 ops/sec ±5.20% (15 runs sampled)
```

_Fastest is **mini-pipe, MiniSignals, MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,859,019 ops/sec ±10.14% (17 runs sampled) *burn in*
push-stream x 5,068,425 ops/sec ±6.35% (18 runs sampled)
signal-lite x 4,886,947 ops/sec ±9.96% (18 runs sampled)
ReactiveProperty x 4,248,807 ops/sec ±6.83% (16 runs sampled)
MiniSignals x 4,349,623 ops/sec ±10.28% (15 runs sampled)
EventEmitter3 x 3,905,822 ops/sec ±11.91% (16 runs sampled)
MicroSignals x 3,791,346 ops/sec ±9.17% (16 runs sampled)
EventEmitter x 3,367,263 ops/sec ±2.89% (18 runs sampled)
xstream x 3,327,939 ops/sec ±6.66% (17 runs sampled)
EventDispatcher x 2,581,526 ops/sec ±9.58% (15 runs sampled)
sister x 2,674,469 ops/sec ±19.70% (17 runs sampled)
evee x 1,858,052 ops/sec ±16.87% (17 runs sampled)
EventEmitter2 x 1,588,279 ops/sec ±3.71% (18 runs sampled)
RXJS x 1,147,988 ops/sec ±11.23% (13 runs sampled)
event-signal x 1,092,543 ops/sec ±9.20% (17 runs sampled)
pull-notify x 998,399 ops/sec ±5.84% (18 runs sampled)
dripEmitter x 1,701,321 ops/sec ±131.82% (17 runs sampled)
dripEmitterEnhanced x 773,636 ops/sec ±13.05% (12 runs sampled)
signal-emitter x 138,727 ops/sec ±9.43% (17 runs sampled)
JS-Signals x 133,260 ops/sec ±13.28% (15 runs sampled)
```

_Fastest is **push-stream, signal-lite**_

## emit one random value - one listener

```
MicroSignals x 18,131,421 ops/sec ±2.30% (15 runs sampled)
xstream x 17,972,418 ops/sec ±6.50% (12 runs sampled)
MiniSignals x 15,941,197 ops/sec ±8.19% (18 runs sampled)
Theoretical max x 14,298,454 ops/sec ±11.61% (16 runs sampled) *burn in*
signal-lite x 13,730,160 ops/sec ±7.66% (17 runs sampled)
mini-pipe x 13,135,360 ops/sec ±13.99% (16 runs sampled)
ReactiveProperty x 10,916,571 ops/sec ±5.94% (16 runs sampled)
push-stream x 10,732,406 ops/sec ±6.41% (16 runs sampled)
push-stream-patch x 10,292,898 ops/sec ±7.71% (16 runs sampled)
dripEmitter x 9,254,811 ops/sec ±6.97% (16 runs sampled)
EventEmitter2 x 8,604,364 ops/sec ±17.77% (16 runs sampled)
evee x 8,039,249 ops/sec ±11.44% (17 runs sampled)
EventEmitter3 x 7,530,676 ops/sec ±15.01% (17 runs sampled)
pull-pushable x 5,531,798 ops/sec ±5.01% (14 runs sampled)
pull-notify x 5,544,102 ops/sec ±7.38% (17 runs sampled)
observ x 5,384,913 ops/sec ±5.27% (13 runs sampled)
event-signal x 4,083,242 ops/sec ±3.41% (17 runs sampled)
EventEmitter x 4,086,345 ops/sec ±26.07% (14 runs sampled)
RXJS x 3,329,848 ops/sec ±3.40% (16 runs sampled)
barracks x 2,266,524 ops/sec ±3.65% (17 runs sampled)
d3-dispatch x 2,276,187 ops/sec ±4.31% (15 runs sampled)
dripEmitterEnhanced x 2,284,934 ops/sec ±5.05% (17 runs sampled)
observable x 1,246,748 ops/sec ±4.07% (16 runs sampled)
minivents x 543,290 ops/sec ±6.07% (15 runs sampled)
JS-Signals x 401,655 ops/sec ±4.43% (17 runs sampled)
signal-emitter x 389,830 ops/sec ±5.80% (17 runs sampled)
namespace-emitter x 343,108 ops/sec ±5.04% (17 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one random value - two listeners

```
signal-lite x 11,896,925 ops/sec ±1.86% (18 runs sampled)
MicroSignals x 12,076,245 ops/sec ±4.58% (17 runs sampled)
MiniSignals x 11,211,219 ops/sec ±8.43% (15 runs sampled)
push-stream-patch x 10,638,220 ops/sec ±3.19% (17 runs sampled)
dripEmitter x 9,277,977 ops/sec ±3.72% (18 runs sampled)
ReactiveProperty x 9,156,366 ops/sec ±3.62% (17 runs sampled)
xstream x 9,158,287 ops/sec ±4.42% (13 runs sampled)
push-stream x 9,258,594 ops/sec ±6.56% (17 runs sampled)
EventEmitter3 x 8,890,288 ops/sec ±3.44% (16 runs sampled)
Theoretical max x 10,413,051 ops/sec ±23.44% (15 runs sampled) *burn in*
EventEmitter x 6,845,489 ops/sec ±4.89% (15 runs sampled)
evee x 5,429,630 ops/sec ±4.12% (16 runs sampled)
observ x 4,167,856 ops/sec ±3.74% (18 runs sampled)
event-signal x 3,935,944 ops/sec ±3.85% (17 runs sampled)
EventEmitter2 x 3,637,051 ops/sec ±2.43% (17 runs sampled)
RXJS x 3,054,877 ops/sec ±3.60% (15 runs sampled)
pull-notify x 2,781,889 ops/sec ±1.99% (16 runs sampled)
waddup x 1,921,195 ops/sec ±2.40% (17 runs sampled)
dripEmitterEnhanced x 1,970,578 ops/sec ±7.74% (17 runs sampled)
d3-dispatch x 1,611,503 ops/sec ±3.37% (16 runs sampled)
observable x 1,012,710 ops/sec ±2.09% (16 runs sampled)
signal-emitter x 441,907 ops/sec ±3.29% (15 runs sampled)
JS-Signals x 406,769 ops/sec ±6.15% (16 runs sampled)
namespace-emitter x 382,476 ops/sec ±6.96% (15 runs sampled)
minivents x 335,207 ops/sec ±4.12% (17 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit one value - bound function

```
EventEmitter3 x 2,543,798 ops/sec ±3.41% (17 runs sampled)
Theoretical max x 2,495,151 ops/sec ±7.60% (13 runs sampled) *burn in*
dripEmitter x 2,329,249 ops/sec ±2.04% (18 runs sampled)
push-stream x 2,316,149 ops/sec ±2.15% (16 runs sampled)
xstream x 2,356,302 ops/sec ±4.57% (17 runs sampled)
MicroSignals x 2,198,706 ops/sec ±5.28% (16 runs sampled)
EventEmitter x 2,043,895 ops/sec ±5.17% (16 runs sampled)
ReactiveProperty x 1,969,247 ops/sec ±7.63% (16 runs sampled)
event-signal x 1,607,496 ops/sec ±8.30% (16 runs sampled)
EventEmitter2 x 1,469,331 ops/sec ±7.08% (17 runs sampled)
RXJS x 1,483,931 ops/sec ±8.56% (17 runs sampled)
MiniSignals x 1,357,469 ops/sec ±5.20% (17 runs sampled)
pull-notify x 1,307,798 ops/sec ±4.11% (15 runs sampled)
dripEmitterEnhanced x 1,267,654 ops/sec ±3.00% (18 runs sampled)
signal-lite x 1,270,995 ops/sec ±5.54% (15 runs sampled)
JS-Signals x 369,090 ops/sec ±3.03% (18 runs sampled)
evee x 320,584 ops/sec ±7.23% (17 runs sampled)
signal-emitter x 304,095 ops/sec ±7.20% (17 runs sampled)
```

_Fastest is **EventEmitter3**_

## emit one value - many listeners

```
MicroSignal x 4,350,086 ops/sec ±8.13% (11 runs sampled)
MiniSignals x 4,142,851 ops/sec ±4.97% (11 runs sampled)
xstream x 4,062,794 ops/sec ±6.12% (11 runs sampled)
Theoretical max x 3,752,370 ops/sec ±3.72% (11 runs sampled) *burn in*
push-stream x 3,403,189 ops/sec ±3.30% (11 runs sampled)
signal-lite x 3,616,127 ops/sec ±12.41% (11 runs sampled)
ReactiveProperty x 3,394,015 ops/sec ±12.09% (11 runs sampled)
dripEmitter x 3,079,210 ops/sec ±7.03% (11 runs sampled)
EventEmitter3 x 2,978,579 ops/sec ±4.19% (11 runs sampled)
event-signal x 2,590,580 ops/sec ±13.22% (10 runs sampled)
EventEmitter x 2,275,272 ops/sec ±4.30% (11 runs sampled)
EventEmitter2 x 1,768,312 ops/sec ±1.63% (11 runs sampled)
evee x 1,814,215 ops/sec ±4.79% (11 runs sampled)
dripEmitterEnhanced x 1,314,348 ops/sec ±9.20% (11 runs sampled)
RXJS x 1,216,986 ops/sec ±6.50% (10 runs sampled)
pull-notify x 848,621 ops/sec ±3.94% (11 runs sampled)
signal-emitter x 557,021 ops/sec ±5.07% (11 runs sampled)
JS-Signals x 362,915 ops/sec ±13.46% (11 runs sampled)
minivents x 94,903 ops/sec ±10.11% (10 runs sampled)
```

_Fastest is **MicroSignal, MiniSignals, xstream**_

## emit one value - one listener

```
Theoretical max x 42,057,516 ops/sec ±5.60% (11 runs sampled) *burn in*
xstream x 31,096,973 ops/sec ±4.04% (11 runs sampled)
MiniSignals x 29,677,415 ops/sec ±6.60% (11 runs sampled)
MicroSignals x 29,350,924 ops/sec ±6.83% (11 runs sampled)
sister x 28,551,936 ops/sec ±5.16% (11 runs sampled)
signal-lite x 26,769,782 ops/sec ±4.01% (11 runs sampled)
push-stream x 23,462,436 ops/sec ±4.10% (11 runs sampled)
EventEmitter2 x 21,856,743 ops/sec ±3.97% (10 runs sampled)
ReactiveProperty x 21,802,420 ops/sec ±4.46% (11 runs sampled)
push-stream-patch x 21,316,768 ops/sec ±4.94% (11 runs sampled)
mini-pipe x 23,159,532 ops/sec ±17.35% (10 runs sampled)
dripEmitter x 19,365,265 ops/sec ±4.50% (11 runs sampled)
EventEmitter x 18,734,648 ops/sec ±6.55% (11 runs sampled)
EventEmitter3 x 18,445,021 ops/sec ±6.40% (11 runs sampled)
evee x 11,967,485 ops/sec ±5.68% (11 runs sampled)
observ x 10,819,675 ops/sec ±5.26% (11 runs sampled)
pull-notify x 9,379,193 ops/sec ±3.93% (11 runs sampled)
pull-pushable x 7,948,480 ops/sec ±5.32% (11 runs sampled)
d3-dispatch x 6,760,572 ops/sec ±3.08% (10 runs sampled)
event-signal x 6,526,816 ops/sec ±6.73% (11 runs sampled)
RXJS x 5,166,645 ops/sec ±6.74% (11 runs sampled)
barracks x 4,980,998 ops/sec ±5.35% (11 runs sampled)
dripEmitterEnhanced x 3,347,979 ops/sec ±8.81% (11 runs sampled)
observable x 1,787,898 ops/sec ±8.07% (11 runs sampled)
minivents x 858,910 ops/sec ±3.69% (11 runs sampled)
namespace-emitter x 598,154 ops/sec ±4.32% (11 runs sampled)
JS-Signals x 542,208 ops/sec ±4.97% (11 runs sampled)
signal-emitter x 494,396 ops/sec ±2.04% (11 runs sampled)
```

_Fastest is **xstream, MiniSignals, MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 23,074,705 ops/sec ±6.43% (11 runs sampled) *burn in*
MiniSignals x 18,614,208 ops/sec ±4.46% (11 runs sampled)
sister x 18,473,008 ops/sec ±6.57% (11 runs sampled)
signal-lite x 18,000,529 ops/sec ±6.32% (11 runs sampled)
MicroSignals x 18,466,503 ops/sec ±9.67% (11 runs sampled)
push-stream-patch x 15,808,941 ops/sec ±4.73% (11 runs sampled)
xstream x 15,163,764 ops/sec ±5.02% (11 runs sampled)
push-stream x 14,717,375 ops/sec ±11.28% (11 runs sampled)
ReactiveProperty x 14,102,378 ops/sec ±11.51% (11 runs sampled)
EventEmitter3 x 12,258,989 ops/sec ±9.05% (11 runs sampled)
EventEmitter x 10,457,720 ops/sec ±3.27% (10 runs sampled)
dripEmitter x 10,903,698 ops/sec ±14.32% (10 runs sampled)
evee x 9,294,219 ops/sec ±3.00% (11 runs sampled)
observ x 6,194,600 ops/sec ±3.80% (11 runs sampled)
event-signal x 5,860,998 ops/sec ±4.32% (11 runs sampled)
d3-dispatch x 4,701,028 ops/sec ±3.58% (11 runs sampled)
pull-notify x 4,276,207 ops/sec ±2.92% (11 runs sampled)
RXJS x 4,409,506 ops/sec ±7.35% (11 runs sampled)
EventEmitter2 x 4,299,325 ops/sec ±16.32% (11 runs sampled)
dripEmitterEnhanced x 2,890,682 ops/sec ±10.72% (10 runs sampled)
waddup x 2,656,165 ops/sec ±4.31% (11 runs sampled)
observable x 1,535,856 ops/sec ±2.64% (11 runs sampled)
signal-emitter x 644,396 ops/sec ±5.62% (10 runs sampled)
JS-Signals x 552,305 ops/sec ±4.81% (11 runs sampled)
namespace-emitter x 549,396 ops/sec ±9.54% (10 runs sampled)
minivents x 465,464 ops/sec ±3.10% (11 runs sampled)
```

_Fastest is **MiniSignals, sister, signal-lite, MicroSignals**_

## emit one value - with context

```
MiniSignals x 18,826,188 ops/sec ±3.70% (11 runs sampled)
signal-lite x 18,622,524 ops/sec ±3.43% (11 runs sampled)
EventEmitter3 x 14,056,224 ops/sec ±2.81% (11 runs sampled)
event-signal x 6,333,213 ops/sec ±2.90% (11 runs sampled)
Theoretical max x 4,218,688 ops/sec ±5.21% (10 runs sampled) *burn in*
sister x 3,739,526 ops/sec ±5.43% (11 runs sampled)
MicroSignals x 3,614,672 ops/sec ±4.95% (11 runs sampled)
dripEmitter x 3,517,788 ops/sec ±3.02% (11 runs sampled)
push-stream x 3,527,218 ops/sec ±5.65% (11 runs sampled)
EventEmitter x 3,135,620 ops/sec ±3.93% (11 runs sampled)
ReactiveProperty x 3,045,802 ops/sec ±6.29% (11 runs sampled)
EventEmitter2 x 2,401,325 ops/sec ±4.28% (11 runs sampled)
RXJS x 2,345,064 ops/sec ±4.39% (11 runs sampled)
pull-notify x 2,062,431 ops/sec ±5.99% (11 runs sampled)
dripEmitterEnhanced x 1,824,736 ops/sec ±11.07% (11 runs sampled)
signal-emitter x 640,424 ops/sec ±3.63% (11 runs sampled)
JS-Signals x 611,436 ops/sec ±6.69% (11 runs sampled)
evee x 456,193 ops/sec ±5.53% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit variable number of values

```
Theoretical max x 8,642,094 ops/sec ±4.01% (11 runs sampled) *burn in*
signal-lite x 4,581,784 ops/sec ±3.25% (11 runs sampled)
MiniSignals x 4,480,719 ops/sec ±9.03% (10 runs sampled)
EventEmitter x 2,697,921 ops/sec ±4.22% (11 runs sampled)
EventEmitter3 x 2,201,337 ops/sec ±5.18% (11 runs sampled)
EventEmitter2 x 1,049,241 ops/sec ±2.83% (11 runs sampled)
dripEmitterEnhanced x 618,660 ops/sec ±4.32% (11 runs sampled)
JS-Signals x 161,068 ops/sec ±5.50% (11 runs sampled)
signal-emitter x 155,618 ops/sec ±4.69% (11 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## init

```
Theoretical max x 64,467,596 ops/sec ±4.03% (11 runs sampled) *burn in*
EventEmitter3 x 61,784,812 ops/sec ±4.64% (11 runs sampled)
DripEmitter x 61,083,822 ops/sec ±4.38% (11 runs sampled)
EventDispatcher x 53,595,003 ops/sec ±9.66% (11 runs sampled)
MiniSignals x 39,694,496 ops/sec ±13.41% (11 runs sampled)
EventEmitter2 x 33,823,725 ops/sec ±5.16% (10 runs sampled)
EventEmitter x 29,670,865 ops/sec ±3.24% (11 runs sampled)
DripEmitterEnhanced x 26,516,059 ops/sec ±2.20% (11 runs sampled)
push-stream x 16,835,154 ops/sec ±3.55% (11 runs sampled)
JS-Signals x 2,367,865 ops/sec ±13.54% (10 runs sampled)
ReactiveProperty x 1,258,653 ops/sec ±11.70% (11 runs sampled)
pull-notify x 1,037,435 ops/sec ±16.59% (10 runs sampled)
```

_Fastest is **EventEmitter3, DripEmitter**_
