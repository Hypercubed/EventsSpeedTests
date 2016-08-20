# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 0ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 1ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 8ms]

# Summary

- duration: 25ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Node.js 6.3.1 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 29,717,517 ops/sec ±3.22% (17 runs sampled)
MiniSignals x 14,922,019 ops/sec ±16.87% (15 runs sampled)
EventDispatcher x 5,210,900 ops/sec ±3.24% (16 runs sampled)
ReactiveProperty x 5,283,830 ops/sec ±7.68% (16 runs sampled)
pushStream x 3,759,969 ops/sec ±2.53% (17 runs sampled)
EventEmitter x 3,905,038 ops/sec ±9.60% (15 runs sampled)
EventEmitter3 x 1,571,119 ops/sec ±4.32% (17 runs sampled)
EventEmitter2 x 1,161,836 ops/sec ±4.34% (16 runs sampled)
JS-Signals x 855,787 ops/sec ±2.53% (18 runs sampled)
dripEmitterEnhanced x 596,425 ops/sec ±6.38% (17 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 13,453,678 ops/sec ±2.50% (17 runs sampled) *burn in*
sister x 7,669,582 ops/sec ±2.85% (18 runs sampled)
MicroSignals x 6,904,666 ops/sec ±1.76% (16 runs sampled)
push-stream x 6,206,390 ops/sec ±3.30% (17 runs sampled)
MiniSignals x 6,333,780 ops/sec ±6.11% (17 runs sampled)
dripEmitter x 5,473,044 ops/sec ±4.17% (16 runs sampled)
EventEmitter3 x 5,171,984 ops/sec ±3.57% (17 runs sampled)
signal-lite x 5,330,338 ops/sec ±10.22% (13 runs sampled)
ReactiveProperty x 4,193,850 ops/sec ±9.13% (17 runs sampled)
EventEmitter x 3,648,598 ops/sec ±2.55% (18 runs sampled)
evee x 2,259,000 ops/sec ±8.63% (16 runs sampled)
event-signal x 1,779,575 ops/sec ±5.83% (16 runs sampled)
EventEmitter2 x 1,617,645 ops/sec ±8.42% (16 runs sampled)
RXJS x 1,374,428 ops/sec ±4.92% (17 runs sampled)
pull-notify x 1,162,793 ops/sec ±4.70% (16 runs sampled)
dripEmitterEnhanced x 660,822 ops/sec ±3.54% (18 runs sampled)
signal-emitter x 227,753 ops/sec ±3.94% (16 runs sampled)
JS-Signals x 174,405 ops/sec ±4.42% (17 runs sampled)
```

_Fastest is **sister**_

## emit many values - two listeners

```
Theoretical max x 30,017,112 ops/sec ±3.68% (16 runs sampled) *burn in*
MiniSignals x 15,455,570 ops/sec ±10.64% (16 runs sampled)
signal-lite x 13,475,794 ops/sec ±6.42% (16 runs sampled)
EventEmitter3 x 731,602 ops/sec ±3.52% (16 runs sampled)
EventEmitter x 725,259 ops/sec ±3.11% (17 runs sampled)
EventEmitter2 x 709,373 ops/sec ±3.96% (17 runs sampled)
dripEmitterEnhanced x 542,823 ops/sec ±3.71% (17 runs sampled)
signal-emitter x 378,314 ops/sec ±3.23% (16 runs sampled)
JS-Signals x 220,574 ops/sec ±3.71% (18 runs sampled)
minivents x 105,534 ops/sec ±4.43% (17 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 9,901,489 ops/sec ±5.38% (16 runs sampled) *burn in*
MicroSignals x 10,131,974 ops/sec ±9.68% (17 runs sampled)
MiniSignals x 9,230,348 ops/sec ±9.03% (18 runs sampled)
mini-pipe x 8,844,699 ops/sec ±9.82% (16 runs sampled)
signal-lite x 7,817,600 ops/sec ±9.20% (17 runs sampled)
push-stream x 7,024,746 ops/sec ±10.33% (16 runs sampled)
xstream x 6,207,688 ops/sec ±12.91% (16 runs sampled)
sister x 5,885,105 ops/sec ±7.33% (16 runs sampled)
ReactiveProperty x 5,950,536 ops/sec ±13.91% (16 runs sampled)
dripEmitter x 5,620,818 ops/sec ±14.37% (14 runs sampled)
EventEmitter2 x 5,129,039 ops/sec ±18.42% (17 runs sampled)
EventEmitter3 x 4,498,938 ops/sec ±15.75% (16 runs sampled)
EventEmitter x 3,993,183 ops/sec ±8.24% (16 runs sampled)
EventDispatcher x 2,916,260 ops/sec ±8.79% (17 runs sampled)
evee x 2,763,292 ops/sec ±9.63% (17 runs sampled)
pull-pushable x 2,228,797 ops/sec ±4.75% (17 runs sampled)
pull-notify x 2,076,015 ops/sec ±13.21% (15 runs sampled)
event-signal x 1,726,022 ops/sec ±8.34% (16 runs sampled)
RXJS x 1,590,904 ops/sec ±7.55% (16 runs sampled)
dripEmitterEnhanced x 648,150 ops/sec ±4.85% (17 runs sampled)
JS-Signals x 251,142 ops/sec ±5.82% (17 runs sampled)
signal-emitter x 169,705 ops/sec ±16.44% (13 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,606,284 ops/sec ±3.84% (16 runs sampled) *burn in*
MiniSignals x 5,401,228 ops/sec ±2.87% (18 runs sampled)
MicroSignals x 5,173,774 ops/sec ±4.04% (17 runs sampled)
signal-lite x 5,116,036 ops/sec ±2.95% (17 runs sampled)
ReactiveProperty x 4,702,933 ops/sec ±2.97% (17 runs sampled)
EventEmitter3 x 4,089,682 ops/sec ±2.68% (17 runs sampled)
push-stream x 4,391,581 ops/sec ±11.11% (16 runs sampled)
sister x 4,178,264 ops/sec ±9.37% (16 runs sampled)
dripEmitter x 3,970,579 ops/sec ±4.94% (16 runs sampled)
xstream x 3,290,491 ops/sec ±4.25% (17 runs sampled)
EventEmitter x 2,738,087 ops/sec ±11.98% (17 runs sampled)
EventDispatcher x 2,450,764 ops/sec ±3.79% (17 runs sampled)
evee x 1,977,649 ops/sec ±2.47% (18 runs sampled)
event-signal x 1,785,680 ops/sec ±4.10% (16 runs sampled)
RXJS x 1,350,020 ops/sec ±6.23% (16 runs sampled)
EventEmitter2 x 1,422,142 ops/sec ±12.95% (17 runs sampled)
pull-notify x 988,687 ops/sec ±3.92% (17 runs sampled)
dripEmitterEnhanced x 650,186 ops/sec ±4.13% (16 runs sampled)
signal-emitter x 258,363 ops/sec ±2.76% (18 runs sampled)
JS-Signals x 181,011 ops/sec ±4.87% (17 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one random value - one listener

```
Theoretical max x 28,677,172 ops/sec ±9.57% (15 runs sampled) *burn in*
xstream x 27,174,139 ops/sec ±4.81% (17 runs sampled)
MiniSignals x 23,406,581 ops/sec ±2.92% (16 runs sampled)
signal-lite x 21,600,282 ops/sec ±5.30% (17 runs sampled)
MicroSignals x 21,707,313 ops/sec ±10.56% (16 runs sampled)
mini-pipe x 20,735,544 ops/sec ±10.64% (15 runs sampled)
push-stream-patch x 18,707,678 ops/sec ±5.79% (16 runs sampled)
dripEmitter x 18,479,424 ops/sec ±5.55% (16 runs sampled)
EventEmitter3 x 17,910,291 ops/sec ±4.99% (17 runs sampled)
push-stream x 16,793,900 ops/sec ±3.69% (17 runs sampled)
EventEmitter2 x 17,265,494 ops/sec ±20.05% (17 runs sampled)
ReactiveProperty x 15,235,476 ops/sec ±7.36% (17 runs sampled)
EventEmitter x 12,917,851 ops/sec ±2.55% (17 runs sampled)
evee x 9,914,152 ops/sec ±3.63% (16 runs sampled)
observ x 8,975,983 ops/sec ±9.88% (16 runs sampled)
pull-pushable x 6,666,957 ops/sec ±9.98% (15 runs sampled)
event-signal x 6,113,887 ops/sec ±4.87% (17 runs sampled)
pull-notify x 6,223,436 ops/sec ±8.70% (17 runs sampled)
RXJS x 5,443,520 ops/sec ±2.87% (16 runs sampled)
barracks x 4,443,751 ops/sec ±4.57% (17 runs sampled)
d3-dispatch x 3,001,996 ops/sec ±7.94% (17 runs sampled)
dripEmitterEnhanced x 2,029,776 ops/sec ±10.22% (17 runs sampled)
minivents x 830,172 ops/sec ±2.95% (17 runs sampled)
JS-Signals x 740,624 ops/sec ±2.79% (16 runs sampled)
signal-emitter x 654,870 ops/sec ±6.47% (16 runs sampled)
namespace-emitter x 632,147 ops/sec ±10.76% (16 runs sampled)
observable x 565,062 ops/sec ±4.70% (16 runs sampled)
```

_Fastest is **xstream**_

## emit one random value - two listeners

```
Theoretical max x 18,264,125 ops/sec ±2.30% (18 runs sampled) *burn in*
MicroSignals x 16,247,002 ops/sec ±10.35% (18 runs sampled)
signal-lite x 14,958,037 ops/sec ±4.15% (17 runs sampled)
MiniSignals x 14,260,176 ops/sec ±6.63% (16 runs sampled)
push-stream-patch x 13,789,617 ops/sec ±4.60% (16 runs sampled)
xstream x 12,950,790 ops/sec ±3.32% (17 runs sampled)
push-stream x 13,602,847 ops/sec ±8.77% (18 runs sampled)
EventEmitter3 x 12,185,186 ops/sec ±3.39% (17 runs sampled)
dripEmitter x 12,741,310 ops/sec ±8.71% (17 runs sampled)
ReactiveProperty x 11,530,676 ops/sec ±5.28% (17 runs sampled)
EventEmitter x 9,015,903 ops/sec ±3.68% (16 runs sampled)
evee x 6,226,180 ops/sec ±7.84% (18 runs sampled)
observ x 5,442,058 ops/sec ±2.99% (17 runs sampled)
event-signal x 4,981,464 ops/sec ±10.11% (15 runs sampled)
EventEmitter2 x 4,422,225 ops/sec ±9.93% (16 runs sampled)
RXJS x 3,489,860 ops/sec ±1.92% (17 runs sampled)
pull-notify x 3,043,073 ops/sec ±5.06% (17 runs sampled)
waddup x 2,563,290 ops/sec ±3.77% (17 runs sampled)
dripEmitterEnhanced x 1,929,909 ops/sec ±4.87% (17 runs sampled)
d3-dispatch x 1,700,112 ops/sec ±4.04% (17 runs sampled)
signal-emitter x 741,017 ops/sec ±3.48% (16 runs sampled)
JS-Signals x 563,619 ops/sec ±6.26% (17 runs sampled)
namespace-emitter x 509,439 ops/sec ±5.30% (16 runs sampled)
observable x 471,498 ops/sec ±5.65% (17 runs sampled)
minivents x 484,296 ops/sec ±10.35% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - bound function

```
Theoretical max x 28,679,762 ops/sec ±9.44% (16 runs sampled) *burn in*
MicroSignals x 17,704,332 ops/sec ±4.68% (17 runs sampled)
push-stream x 15,003,847 ops/sec ±3.82% (16 runs sampled)
xstream x 13,534,586 ops/sec ±9.27% (17 runs sampled)
dripEmitter x 12,354,666 ops/sec ±2.36% (16 runs sampled)
EventEmitter3 x 11,924,982 ops/sec ±6.71% (17 runs sampled)
ReactiveProperty x 12,002,373 ops/sec ±9.96% (17 runs sampled)
EventEmitter x 9,417,147 ops/sec ±3.70% (18 runs sampled)
MiniSignals x 7,053,554 ops/sec ±4.37% (17 runs sampled)
signal-lite x 5,764,153 ops/sec ±9.36% (17 runs sampled)
event-signal x 5,374,941 ops/sec ±5.26% (16 runs sampled)
EventEmitter2 x 4,857,284 ops/sec ±3.14% (16 runs sampled)
pull-notify x 3,568,758 ops/sec ±4.81% (18 runs sampled)
RXJS x 3,496,806 ops/sec ±14.80% (17 runs sampled)
evee x 1,719,223 ops/sec ±5.47% (17 runs sampled)
dripEmitterEnhanced x 1,669,636 ops/sec ±4.32% (17 runs sampled)
signal-emitter x 727,424 ops/sec ±4.00% (17 runs sampled)
JS-Signals x 571,029 ops/sec ±5.84% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
Theoretical max x 5,140,091 ops/sec ±2.22% (17 runs sampled) *burn in*
MicroSignal x 4,890,461 ops/sec ±3.86% (18 runs sampled)
MiniSignals x 4,852,217 ops/sec ±3.73% (18 runs sampled)
push-stream x 4,449,766 ops/sec ±3.80% (17 runs sampled)
signal-lite x 4,507,407 ops/sec ±5.35% (17 runs sampled)
dripEmitter x 4,417,330 ops/sec ±5.34% (17 runs sampled)
xstream x 4,131,268 ops/sec ±3.00% (17 runs sampled)
EventEmitter3 x 3,723,939 ops/sec ±7.15% (17 runs sampled)
EventEmitter x 3,626,631 ops/sec ±5.17% (15 runs sampled)
ReactiveProperty x 3,683,753 ops/sec ±9.33% (17 runs sampled)
event-signal x 2,777,318 ops/sec ±10.19% (15 runs sampled)
EventEmitter2 x 2,473,745 ops/sec ±4.34% (17 runs sampled)
evee x 1,687,973 ops/sec ±3.38% (17 runs sampled)
RXJS x 1,610,331 ops/sec ±3.07% (18 runs sampled)
dripEmitterEnhanced x 1,415,436 ops/sec ±4.25% (16 runs sampled)
pull-notify x 781,443 ops/sec ±5.11% (16 runs sampled)
signal-emitter x 635,202 ops/sec ±4.66% (16 runs sampled)
JS-Signals x 284,703 ops/sec ±3.08% (17 runs sampled)
minivents x 104,845 ops/sec ±2.83% (17 runs sampled)
```

_Fastest is **MicroSignal, MiniSignals**_

## emit one value - one listener

```
Theoretical max x 42,776,512 ops/sec ±4.07% (17 runs sampled) *burn in*
xstream x 33,660,619 ops/sec ±5.51% (17 runs sampled)
MicroSignals x 31,640,734 ops/sec ±4.51% (17 runs sampled)
sister x 27,851,357 ops/sec ±5.21% (17 runs sampled)
MiniSignals x 27,167,245 ops/sec ±4.52% (17 runs sampled)
mini-pipe x 25,287,381 ops/sec ±5.44% (16 runs sampled)
signal-lite x 23,014,705 ops/sec ±4.13% (18 runs sampled)
EventEmitter2 x 22,925,025 ops/sec ±4.10% (17 runs sampled)
EventEmitter3 x 22,445,820 ops/sec ±3.70% (16 runs sampled)
dripEmitter x 22,148,943 ops/sec ±3.96% (16 runs sampled)
push-stream x 20,149,057 ops/sec ±2.84% (17 runs sampled)
ReactiveProperty x 19,361,720 ops/sec ±3.00% (16 runs sampled)
push-stream-patch x 19,754,307 ops/sec ±5.25% (17 runs sampled)
EventEmitter x 14,505,366 ops/sec ±8.80% (16 runs sampled)
evee x 11,315,095 ops/sec ±4.19% (17 runs sampled)
observ x 10,911,994 ops/sec ±4.27% (15 runs sampled)
pull-pushable x 7,274,546 ops/sec ±10.61% (15 runs sampled)
pull-notify x 7,255,801 ops/sec ±12.84% (18 runs sampled)
event-signal x 6,182,139 ops/sec ±3.02% (17 runs sampled)
RXJS x 5,670,037 ops/sec ±4.14% (17 runs sampled)
barracks x 4,897,156 ops/sec ±3.70% (17 runs sampled)
d3-dispatch x 3,310,675 ops/sec ±5.89% (17 runs sampled)
dripEmitterEnhanced x 1,869,308 ops/sec ±10.16% (17 runs sampled)
JS-Signals x 696,544 ops/sec ±4.39% (17 runs sampled)
minivents x 679,953 ops/sec ±8.79% (16 runs sampled)
namespace-emitter x 632,181 ops/sec ±7.41% (16 runs sampled)
signal-emitter x 582,530 ops/sec ±10.66% (16 runs sampled)
observable x 508,715 ops/sec ±10.46% (16 runs sampled)
```

_Fastest is **xstream, MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 24,816,672 ops/sec ±4.65% (17 runs sampled) *burn in*
MicroSignals x 18,416,183 ops/sec ±4.79% (16 runs sampled)
MiniSignals x 17,763,363 ops/sec ±3.99% (17 runs sampled)
sister x 17,965,905 ops/sec ±10.25% (16 runs sampled)
push-stream-patch x 15,465,545 ops/sec ±4.03% (17 runs sampled)
push-stream x 15,104,310 ops/sec ±2.70% (16 runs sampled)
xstream x 13,937,345 ops/sec ±4.74% (17 runs sampled)
dripEmitter x 13,646,739 ops/sec ±4.86% (17 runs sampled)
ReactiveProperty x 13,260,189 ops/sec ±3.91% (17 runs sampled)
EventEmitter3 x 13,065,582 ops/sec ±3.70% (17 runs sampled)
signal-lite x 11,928,079 ops/sec ±11.74% (15 runs sampled)
EventEmitter x 8,832,166 ops/sec ±11.11% (16 runs sampled)
evee x 6,736,397 ops/sec ±3.46% (17 runs sampled)
observ x 5,698,289 ops/sec ±11.58% (16 runs sampled)
EventEmitter2 x 4,854,133 ops/sec ±3.81% (17 runs sampled)
RXJS x 3,813,434 ops/sec ±5.63% (16 runs sampled)
event-signal x 3,759,889 ops/sec ±16.08% (14 runs sampled)
pull-notify x 2,996,734 ops/sec ±4.19% (17 runs sampled)
waddup x 2,564,338 ops/sec ±3.99% (17 runs sampled)
dripEmitterEnhanced x 1,896,946 ops/sec ±4.95% (17 runs sampled)
d3-dispatch x 1,710,462 ops/sec ±11.22% (16 runs sampled)
signal-emitter x 692,372 ops/sec ±4.51% (16 runs sampled)
JS-Signals x 621,472 ops/sec ±5.34% (16 runs sampled)
namespace-emitter x 471,155 ops/sec ±5.90% (16 runs sampled)
observable x 469,282 ops/sec ±7.80% (17 runs sampled)
minivents x 426,181 ops/sec ±9.98% (17 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, sister**_

## emit one value - with context

```
Theoretical max x 27,823,082 ops/sec ±3.97% (17 runs sampled) *burn in*
MiniSignals x 18,650,239 ops/sec ±3.87% (16 runs sampled)
MicroSignals x 17,750,098 ops/sec ±3.66% (17 runs sampled)
sister x 16,756,057 ops/sec ±6.42% (17 runs sampled)
signal-lite x 16,340,324 ops/sec ±4.12% (18 runs sampled)
push-stream x 15,196,303 ops/sec ±3.28% (17 runs sampled)
EventEmitter3 x 14,639,994 ops/sec ±3.35% (18 runs sampled)
ReactiveProperty x 14,497,190 ops/sec ±5.33% (17 runs sampled)
dripEmitter x 13,175,955 ops/sec ±4.75% (18 runs sampled)
EventEmitter x 9,288,105 ops/sec ±3.38% (15 runs sampled)
event-signal x 5,572,927 ops/sec ±3.42% (17 runs sampled)
EventEmitter2 x 4,960,338 ops/sec ±3.17% (17 runs sampled)
RXJS x 4,333,688 ops/sec ±4.75% (17 runs sampled)
pull-notify x 3,209,189 ops/sec ±9.36% (17 runs sampled)
dripEmitterEnhanced x 1,960,693 ops/sec ±4.95% (15 runs sampled)
evee x 1,517,260 ops/sec ±3.97% (17 runs sampled)
signal-emitter x 743,378 ops/sec ±4.68% (17 runs sampled)
JS-Signals x 453,617 ops/sec ±5.62% (16 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit variable number of values

```
Theoretical max x 6,583,696 ops/sec ±4.58% (17 runs sampled) *burn in*
MiniSignals x 4,745,853 ops/sec ±2.85% (18 runs sampled)
signal-lite x 4,285,286 ops/sec ±3.24% (18 runs sampled)
EventEmitter x 2,240,283 ops/sec ±3.87% (16 runs sampled)
EventEmitter3 x 1,124,123 ops/sec ±3.53% (18 runs sampled)
EventEmitter2 x 720,079 ops/sec ±2.71% (17 runs sampled)
dripEmitterEnhanced x 391,925 ops/sec ±3.70% (17 runs sampled)
signal-emitter x 157,266 ops/sec ±6.03% (16 runs sampled)
JS-Signals x 145,859 ops/sec ±4.87% (18 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 49,519,190 ops/sec ±5.32% (17 runs sampled)
EventDispatcher x 48,879,733 ops/sec ±4.83% (17 runs sampled)
Theoretical max x 44,268,495 ops/sec ±18.56% (15 runs sampled) *burn in*
DripEmitter x 43,221,672 ops/sec ±21.43% (17 runs sampled)
MiniSignals x 34,627,688 ops/sec ±4.57% (17 runs sampled)
EventEmitter2 x 31,833,518 ops/sec ±2.88% (18 runs sampled)
EventEmitter x 26,064,811 ops/sec ±7.74% (16 runs sampled)
DripEmitterEnhanced x 21,722,009 ops/sec ±4.95% (16 runs sampled)
push-stream x 14,434,874 ops/sec ±3.84% (18 runs sampled)
JS-Signals x 1,981,853 ops/sec ±9.69% (13 runs sampled)
ReactiveProperty x 1,305,025 ops/sec ±12.21% (14 runs sampled)
pull-notify x 973,411 ops/sec ±18.32% (12 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher, DripEmitter**_
