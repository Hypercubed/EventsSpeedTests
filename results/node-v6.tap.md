# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 3ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 12ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 6ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 3ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 5ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 3ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 3ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 9ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 60ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Node.js 6.3.1 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 22,473,601 ops/sec ±9.90% (16 runs sampled)
MiniSignals x 14,651,299 ops/sec ±4.83% (16 runs sampled)
ReactiveProperty x 4,559,618 ops/sec ±5.52% (17 runs sampled)
EventDispatcher x 4,514,096 ops/sec ±8.40% (16 runs sampled)
EventEmitter x 3,883,718 ops/sec ±7.04% (17 runs sampled)
pushStream x 3,456,624 ops/sec ±4.69% (17 runs sampled)
EventEmitter3 x 1,611,457 ops/sec ±10.04% (17 runs sampled)
EventEmitter2 x 1,107,345 ops/sec ±4.81% (17 runs sampled)
JS-Signals x 711,038 ops/sec ±6.84% (17 runs sampled)
dripEmitterEnhanced x 499,324 ops/sec ±10.03% (16 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 10,500,473 ops/sec ±9.95% (16 runs sampled) *burn in*
push-stream x 5,698,635 ops/sec ±10.36% (16 runs sampled)
signal-lite x 5,288,874 ops/sec ±4.02% (16 runs sampled)
MicroSignals x 5,176,996 ops/sec ±9.54% (16 runs sampled)
MiniSignals x 5,533,826 ops/sec ±20.99% (16 runs sampled)
dripEmitter x 4,900,904 ops/sec ±7.62% (16 runs sampled)
ReactiveProperty x 4,780,712 ops/sec ±7.04% (16 runs sampled)
EventEmitter3 x 4,466,245 ops/sec ±8.31% (17 runs sampled)
sister x 4,495,878 ops/sec ±15.56% (15 runs sampled)
EventEmitter x 3,029,750 ops/sec ±3.11% (17 runs sampled)
evee x 2,025,474 ops/sec ±7.74% (17 runs sampled)
event-signal x 1,601,567 ops/sec ±5.55% (16 runs sampled)
RXJS x 1,403,711 ops/sec ±4.54% (17 runs sampled)
EventEmitter2 x 1,440,724 ops/sec ±11.32% (16 runs sampled)
pull-notify x 915,003 ops/sec ±11.14% (17 runs sampled)
dripEmitterEnhanced x 600,001 ops/sec ±7.38% (17 runs sampled)
signal-emitter x 162,243 ops/sec ±16.52% (15 runs sampled)
JS-Signals x 154,049 ops/sec ±18.28% (14 runs sampled)
```

_Fastest is **push-stream, MicroSignals, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 25,937,813 ops/sec ±7.52% (17 runs sampled) *burn in*
MiniSignals x 12,898,691 ops/sec ±7.95% (16 runs sampled)
signal-lite x 11,172,064 ops/sec ±8.28% (16 runs sampled)
EventEmitter3 x 662,219 ops/sec ±9.67% (17 runs sampled)
EventEmitter2 x 596,278 ops/sec ±11.58% (17 runs sampled)
EventEmitter x 595,822 ops/sec ±11.98% (17 runs sampled)
dripEmitterEnhanced x 464,243 ops/sec ±11.74% (14 runs sampled)
signal-emitter x 269,767 ops/sec ±15.45% (15 runs sampled)
JS-Signals x 183,658 ops/sec ±11.27% (15 runs sampled)
minivents x 106,673 ops/sec ±13.39% (16 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 9,377,079 ops/sec ±5.81% (17 runs sampled) *burn in*
MicroSignals x 8,873,942 ops/sec ±9.57% (14 runs sampled)
MiniSignals x 8,123,351 ops/sec ±9.76% (17 runs sampled)
mini-pipe x 7,603,776 ops/sec ±4.04% (16 runs sampled)
signal-lite x 7,508,452 ops/sec ±3.37% (17 runs sampled)
xstream x 6,402,467 ops/sec ±5.33% (17 runs sampled)
push-stream x 6,461,713 ops/sec ±9.28% (16 runs sampled)
dripEmitter x 5,988,510 ops/sec ±4.26% (17 runs sampled)
ReactiveProperty x 6,181,188 ops/sec ±8.65% (17 runs sampled)
sister x 5,439,722 ops/sec ±11.65% (16 runs sampled)
EventEmitter2 x 4,948,540 ops/sec ±22.14% (15 runs sampled)
EventEmitter x 3,974,323 ops/sec ±8.34% (17 runs sampled)
evee x 2,561,434 ops/sec ±5.70% (16 runs sampled)
EventEmitter3 x 2,354,233 ops/sec ±3.69% (16 runs sampled)
EventDispatcher x 2,328,155 ops/sec ±12.25% (17 runs sampled)
event-signal x 1,935,085 ops/sec ±7.89% (16 runs sampled)
pull-notify x 1,958,694 ops/sec ±12.98% (17 runs sampled)
pull-pushable x 1,908,263 ops/sec ±15.00% (16 runs sampled)
RXJS x 1,494,781 ops/sec ±12.78% (16 runs sampled)
dripEmitterEnhanced x 610,225 ops/sec ±10.68% (16 runs sampled)
signal-emitter x 219,834 ops/sec ±12.97% (16 runs sampled)
JS-Signals x 211,786 ops/sec ±15.17% (15 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 6,386,063 ops/sec ±6.16% (15 runs sampled) *burn in*
MicroSignals x 5,072,690 ops/sec ±3.63% (17 runs sampled)
MiniSignals x 4,810,201 ops/sec ±4.49% (16 runs sampled)
push-stream x 4,271,165 ops/sec ±9.52% (17 runs sampled)
dripEmitter x 4,047,999 ops/sec ±4.92% (17 runs sampled)
signal-lite x 4,237,692 ops/sec ±13.26% (16 runs sampled)
EventEmitter3 x 3,777,833 ops/sec ±3.99% (17 runs sampled)
sister x 3,787,142 ops/sec ±5.99% (16 runs sampled)
ReactiveProperty x 3,944,863 ops/sec ±13.84% (16 runs sampled)
xstream x 3,229,208 ops/sec ±4.36% (17 runs sampled)
EventEmitter x 2,655,570 ops/sec ±4.65% (17 runs sampled)
EventDispatcher x 2,139,537 ops/sec ±8.39% (16 runs sampled)
evee x 1,717,627 ops/sec ±8.69% (17 runs sampled)
event-signal x 1,608,071 ops/sec ±10.01% (15 runs sampled)
EventEmitter2 x 1,437,375 ops/sec ±4.32% (16 runs sampled)
RXJS x 1,296,600 ops/sec ±10.01% (17 runs sampled)
pull-notify x 931,130 ops/sec ±6.91% (16 runs sampled)
dripEmitterEnhanced x 604,141 ops/sec ±9.83% (16 runs sampled)
signal-emitter x 216,870 ops/sec ±5.00% (17 runs sampled)
JS-Signals x 204,509 ops/sec ±9.30% (17 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one random value - one listener

```
xstream x 25,859,136 ops/sec ±5.86% (17 runs sampled)
Theoretical max x 26,683,747 ops/sec ±10.75% (15 runs sampled) *burn in*
MicroSignals x 24,394,312 ops/sec ±5.57% (16 runs sampled)
MiniSignals x 21,401,457 ops/sec ±7.65% (17 runs sampled)
signal-lite x 18,993,780 ops/sec ±6.31% (17 runs sampled)
dripEmitter x 17,203,531 ops/sec ±3.77% (17 runs sampled)
mini-pipe x 18,395,102 ops/sec ±13.66% (15 runs sampled)
EventEmitter2 x 16,841,993 ops/sec ±5.53% (17 runs sampled)
EventEmitter3 x 16,797,060 ops/sec ±9.86% (16 runs sampled)
ReactiveProperty x 14,628,689 ops/sec ±2.80% (17 runs sampled)
push-stream x 14,125,075 ops/sec ±11.26% (18 runs sampled)
push-stream-patch x 13,619,859 ops/sec ±9.23% (14 runs sampled)
EventEmitter x 11,923,057 ops/sec ±8.25% (17 runs sampled)
evee x 9,148,361 ops/sec ±5.12% (17 runs sampled)
observ x 7,980,890 ops/sec ±9.20% (17 runs sampled)
pull-notify x 7,010,130 ops/sec ±5.74% (16 runs sampled)
pull-pushable x 6,587,362 ops/sec ±9.00% (17 runs sampled)
event-signal x 6,036,171 ops/sec ±5.00% (17 runs sampled)
RXJS x 4,786,329 ops/sec ±5.73% (15 runs sampled)
d3-dispatch x 2,818,682 ops/sec ±4.38% (16 runs sampled)
barracks x 2,928,257 ops/sec ±10.61% (17 runs sampled)
dripEmitterEnhanced x 1,775,479 ops/sec ±8.62% (15 runs sampled)
signal-emitter x 678,658 ops/sec ±5.44% (17 runs sampled)
JS-Signals x 668,099 ops/sec ±10.19% (16 runs sampled)
minivents x 618,783 ops/sec ±7.73% (16 runs sampled)
namespace-emitter x 575,196 ops/sec ±10.07% (16 runs sampled)
observable x 463,082 ops/sec ±5.02% (15 runs sampled)
```

_Fastest is **xstream, MicroSignals**_

## emit one random value - two listeners

```
Theoretical max x 17,113,202 ops/sec ±3.88% (17 runs sampled) *burn in*
MicroSignals x 15,150,833 ops/sec ±4.64% (17 runs sampled)
MiniSignals x 14,206,665 ops/sec ±7.07% (17 runs sampled)
signal-lite x 13,801,059 ops/sec ±7.63% (17 runs sampled)
push-stream-patch x 13,306,195 ops/sec ±6.53% (17 runs sampled)
push-stream x 12,723,906 ops/sec ±8.70% (17 runs sampled)
xstream x 12,197,248 ops/sec ±4.42% (16 runs sampled)
dripEmitter x 11,989,374 ops/sec ±4.68% (16 runs sampled)
EventEmitter3 x 11,782,891 ops/sec ±9.03% (17 runs sampled)
ReactiveProperty x 11,201,518 ops/sec ±4.38% (17 runs sampled)
EventEmitter x 8,209,320 ops/sec ±4.65% (15 runs sampled)
observ x 5,080,369 ops/sec ±4.83% (16 runs sampled)
event-signal x 5,030,038 ops/sec ±6.27% (17 runs sampled)
evee x 5,107,186 ops/sec ±13.17% (16 runs sampled)
EventEmitter2 x 4,581,658 ops/sec ±4.02% (17 runs sampled)
RXJS x 3,814,327 ops/sec ±4.52% (17 runs sampled)
pull-notify x 3,039,007 ops/sec ±9.79% (17 runs sampled)
waddup x 2,404,111 ops/sec ±4.37% (17 runs sampled)
dripEmitterEnhanced x 1,895,428 ops/sec ±6.30% (16 runs sampled)
d3-dispatch x 1,646,749 ops/sec ±3.86% (17 runs sampled)
signal-emitter x 681,576 ops/sec ±5.21% (14 runs sampled)
JS-Signals x 565,550 ops/sec ±5.62% (17 runs sampled)
namespace-emitter x 544,925 ops/sec ±3.46% (17 runs sampled)
minivents x 511,169 ops/sec ±1.89% (17 runs sampled)
observable x 473,702 ops/sec ±3.16% (17 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one value - bound function

```
Theoretical max x 22,157,116 ops/sec ±10.03% (17 runs sampled) *burn in*
MicroSignals x 17,163,657 ops/sec ±4.05% (17 runs sampled)
xstream x 13,009,812 ops/sec ±5.51% (17 runs sampled)
push-stream x 13,290,205 ops/sec ±9.20% (17 runs sampled)
dripEmitter x 12,551,042 ops/sec ±4.90% (17 runs sampled)
ReactiveProperty x 12,756,100 ops/sec ±8.19% (17 runs sampled)
EventEmitter3 x 9,246,356 ops/sec ±8.09% (17 runs sampled)
MiniSignals x 7,319,431 ops/sec ±3.59% (17 runs sampled)
signal-lite x 5,776,118 ops/sec ±4.41% (16 runs sampled)
event-signal x 5,011,357 ops/sec ±3.95% (17 runs sampled)
RXJS x 3,901,175 ops/sec ±9.24% (16 runs sampled)
pull-notify x 3,170,406 ops/sec ±9.32% (17 runs sampled)
EventEmitter x 3,743,433 ops/sec ±44.86% (12 runs sampled)
EventEmitter2 x 2,735,141 ops/sec ±31.14% (17 runs sampled)
dripEmitterEnhanced x 1,758,757 ops/sec ±10.93% (17 runs sampled)
evee x 1,619,008 ops/sec ±4.32% (17 runs sampled)
signal-emitter x 709,324 ops/sec ±4.32% (16 runs sampled)
JS-Signals x 606,504 ops/sec ±3.98% (16 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
push-stream x 4,154,849 ops/sec ±3.40% (18 runs sampled)
MiniSignals x 4,069,349 ops/sec ±5.37% (17 runs sampled)
dripEmitter x 3,870,180 ops/sec ±4.50% (18 runs sampled)
MicroSignal x 3,816,871 ops/sec ±3.43% (17 runs sampled)
EventEmitter3 x 3,677,963 ops/sec ±4.14% (18 runs sampled)
xstream x 3,773,323 ops/sec ±8.55% (16 runs sampled)
signal-lite x 3,666,486 ops/sec ±7.78% (16 runs sampled)
Theoretical max x 3,642,567 ops/sec ±11.46% (16 runs sampled) *burn in*
ReactiveProperty x 3,274,218 ops/sec ±6.45% (16 runs sampled)
EventEmitter x 3,249,780 ops/sec ±10.34% (16 runs sampled)
event-signal x 2,417,243 ops/sec ±6.62% (16 runs sampled)
EventEmitter2 x 2,092,937 ops/sec ±5.81% (17 runs sampled)
evee x 1,635,887 ops/sec ±4.95% (15 runs sampled)
RXJS x 1,437,369 ops/sec ±6.66% (17 runs sampled)
dripEmitterEnhanced x 1,110,553 ops/sec ±6.61% (16 runs sampled)
pull-notify x 703,041 ops/sec ±4.66% (15 runs sampled)
signal-emitter x 528,595 ops/sec ±8.90% (16 runs sampled)
JS-Signals x 235,938 ops/sec ±4.99% (17 runs sampled)
minivents x 111,236 ops/sec ±4.28% (16 runs sampled)
```

_Fastest is **push-stream, MiniSignals**_

## emit one value - one listener

```
Theoretical max x 36,660,813 ops/sec ±9.03% (17 runs sampled) *burn in*
MicroSignals x 29,687,786 ops/sec ±3.68% (16 runs sampled)
MiniSignals x 26,374,889 ops/sec ±4.45% (17 runs sampled)
xstream x 26,406,071 ops/sec ±10.38% (15 runs sampled)
sister x 25,307,050 ops/sec ±8.47% (16 runs sampled)
mini-pipe x 23,570,546 ops/sec ±9.36% (16 runs sampled)
EventEmitter2 x 21,180,378 ops/sec ±3.98% (17 runs sampled)
dripEmitter x 20,504,133 ops/sec ±3.61% (15 runs sampled)
EventEmitter3 x 20,170,567 ops/sec ±4.55% (16 runs sampled)
signal-lite x 20,337,112 ops/sec ±9.14% (16 runs sampled)
ReactiveProperty x 17,937,793 ops/sec ±2.18% (18 runs sampled)
push-stream-patch x 17,048,427 ops/sec ±9.50% (17 runs sampled)
EventEmitter x 14,699,318 ops/sec ±9.74% (17 runs sampled)
push-stream x 13,290,798 ops/sec ±20.63% (15 runs sampled)
evee x 7,077,395 ops/sec ±14.34% (16 runs sampled)
event-signal x 5,969,675 ops/sec ±5.10% (17 runs sampled)
observ x 6,459,054 ops/sec ±33.02% (13 runs sampled)
pull-notify x 4,801,911 ops/sec ±16.03% (15 runs sampled)
barracks x 3,783,793 ops/sec ±8.94% (16 runs sampled)
pull-pushable x 4,489,267 ops/sec ±37.12% (14 runs sampled)
d3-dispatch x 2,759,704 ops/sec ±10.06% (16 runs sampled)
RXJS x 2,557,908 ops/sec ±42.12% (13 runs sampled)
dripEmitterEnhanced x 1,612,226 ops/sec ±10.50% (17 runs sampled)
minivents x 764,386 ops/sec ±10.36% (15 runs sampled)
signal-emitter x 619,337 ops/sec ±7.64% (18 runs sampled)
JS-Signals x 584,179 ops/sec ±5.61% (16 runs sampled)
observable x 477,761 ops/sec ±3.44% (17 runs sampled)
namespace-emitter x 485,378 ops/sec ±10.55% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 21,740,872 ops/sec ±7.14% (17 runs sampled) *burn in*
sister x 17,078,881 ops/sec ±6.81% (17 runs sampled)
MicroSignals x 16,311,752 ops/sec ±5.67% (16 runs sampled)
MiniSignals x 15,506,268 ops/sec ±11.73% (17 runs sampled)
signal-lite x 14,105,375 ops/sec ±6.53% (17 runs sampled)
push-stream x 13,690,208 ops/sec ±5.59% (16 runs sampled)
push-stream-patch x 13,732,570 ops/sec ±6.80% (17 runs sampled)
xstream x 12,426,646 ops/sec ±6.54% (17 runs sampled)
ReactiveProperty x 11,694,875 ops/sec ±5.36% (15 runs sampled)
dripEmitter x 10,943,564 ops/sec ±5.90% (15 runs sampled)
EventEmitter3 x 9,425,657 ops/sec ±8.17% (16 runs sampled)
evee x 6,382,042 ops/sec ±3.49% (17 runs sampled)
EventEmitter x 6,233,478 ops/sec ±8.02% (15 runs sampled)
observ x 5,846,463 ops/sec ±2.76% (17 runs sampled)
event-signal x 5,351,432 ops/sec ±4.10% (17 runs sampled)
RXJS x 3,838,319 ops/sec ±3.25% (18 runs sampled)
EventEmitter2 x 3,994,119 ops/sec ±14.34% (15 runs sampled)
pull-notify x 2,847,691 ops/sec ±5.28% (18 runs sampled)
waddup x 2,308,207 ops/sec ±5.09% (17 runs sampled)
d3-dispatch x 1,740,320 ops/sec ±6.70% (16 runs sampled)
dripEmitterEnhanced x 1,692,107 ops/sec ±9.61% (16 runs sampled)
JS-Signals x 577,243 ops/sec ±4.13% (16 runs sampled)
signal-emitter x 584,531 ops/sec ±5.76% (17 runs sampled)
namespace-emitter x 489,902 ops/sec ±3.47% (17 runs sampled)
minivents x 447,215 ops/sec ±3.22% (17 runs sampled)
observable x 424,221 ops/sec ±4.91% (15 runs sampled)
```

_Fastest is **sister, MicroSignals, MiniSignals**_

## emit one value - with context

```
Theoretical max x 23,736,512 ops/sec ±5.23% (17 runs sampled) *burn in*
signal-lite x 16,009,756 ops/sec ±3.60% (16 runs sampled)
sister x 15,237,534 ops/sec ±3.97% (16 runs sampled)
MiniSignals x 13,661,121 ops/sec ±10.02% (17 runs sampled)
MicroSignals x 13,236,800 ops/sec ±11.68% (16 runs sampled)
ReactiveProperty x 10,160,858 ops/sec ±4.54% (17 runs sampled)
EventEmitter x 7,595,598 ops/sec ±5.39% (17 runs sampled)
EventEmitter3 x 8,146,299 ops/sec ±15.28% (15 runs sampled)
dripEmitter x 6,071,794 ops/sec ±16.63% (16 runs sampled)
push-stream x 6,068,652 ops/sec ±26.42% (12 runs sampled)
event-signal x 5,267,917 ops/sec ±11.72% (17 runs sampled)
EventEmitter2 x 3,909,795 ops/sec ±5.88% (16 runs sampled)
pull-notify x 3,160,665 ops/sec ±5.24% (16 runs sampled)
RXJS x 3,087,856 ops/sec ±9.16% (17 runs sampled)
evee x 1,669,799 ops/sec ±2.91% (17 runs sampled)
dripEmitterEnhanced x 1,181,470 ops/sec ±13.02% (16 runs sampled)
signal-emitter x 624,857 ops/sec ±8.59% (17 runs sampled)
JS-Signals x 379,478 ops/sec ±8.30% (15 runs sampled)
```

_Fastest is **signal-lite, sister**_

## emit variable number of values

```
Theoretical max x 5,951,780 ops/sec ±3.63% (16 runs sampled) *burn in*
MiniSignals x 4,238,390 ops/sec ±3.00% (16 runs sampled)
signal-lite x 4,058,319 ops/sec ±3.23% (17 runs sampled)
EventEmitter x 1,768,125 ops/sec ±5.27% (16 runs sampled)
EventEmitter3 x 1,102,098 ops/sec ±3.92% (17 runs sampled)
EventEmitter2 x 677,059 ops/sec ±3.20% (16 runs sampled)
dripEmitterEnhanced x 391,098 ops/sec ±3.42% (17 runs sampled)
signal-emitter x 167,124 ops/sec ±5.14% (18 runs sampled)
JS-Signals x 151,081 ops/sec ±7.15% (17 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## init

```
EventEmitter3 x 44,503,617 ops/sec ±8.09% (17 runs sampled)
EventDispatcher x 42,705,233 ops/sec ±7.97% (14 runs sampled)
Theoretical max x 42,521,440 ops/sec ±20.64% (17 runs sampled) *burn in*
MiniSignals x 31,927,038 ops/sec ±4.49% (16 runs sampled)
EventEmitter2 x 29,808,666 ops/sec ±3.17% (15 runs sampled)
DripEmitter x 37,557,097 ops/sec ±30.12% (15 runs sampled)
EventEmitter x 23,940,024 ops/sec ±3.92% (16 runs sampled)
DripEmitterEnhanced x 18,946,813 ops/sec ±4.81% (16 runs sampled)
push-stream x 11,830,694 ops/sec ±4.89% (16 runs sampled)
JS-Signals x 1,809,711 ops/sec ±17.64% (15 runs sampled)
ReactiveProperty x 1,123,628 ops/sec ±17.26% (14 runs sampled)
pull-notify x 783,355 ops/sec ±19.54% (12 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher, DripEmitter**_
