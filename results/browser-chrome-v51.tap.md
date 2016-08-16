# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 2ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 13ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 3ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 2ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 13ms]
- ✔ init [pass: 24, fail: 0, duration: 6ms]

# Summary

- duration: 54ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Chrome 51.0.2704.106 on OS X 10.11.5 NODE_ENV = undefined BENCH = undefined

## add and remove

```
dripEmitter x 24,975,093 ops/sec ±7.95% (14 runs sampled)
MiniSignals x 11,365,591 ops/sec ±4.64% (15 runs sampled)
EventDispatcher x 5,259,156 ops/sec ±5.64% (14 runs sampled)
ReactiveProperty x 4,394,150 ops/sec ±8.55% (15 runs sampled)
pushStream x 3,410,826 ops/sec ±7.01% (14 runs sampled)
EventEmitter3 x 1,921,131 ops/sec ±5.44% (15 runs sampled)
EventEmitter x 1,308,862 ops/sec ±13.28% (14 runs sampled)
EventEmitter2 x 1,101,754 ops/sec ±11.56% (15 runs sampled)
JS-Signals x 728,714 ops/sec ±7.57% (15 runs sampled)
dripEmitterEnhanced x 545,776 ops/sec ±4.71% (15 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 10,607,400 ops/sec ±5.35% (15 runs sampled) *burn in*
MicroSignals x 6,504,837 ops/sec ±5.42% (14 runs sampled)
sister x 5,915,948 ops/sec ±7.98% (14 runs sampled)
MiniSignals x 5,954,059 ops/sec ±12.29% (15 runs sampled)
signal-lite x 4,981,694 ops/sec ±10.30% (14 runs sampled)
ReactiveProperty x 4,559,559 ops/sec ±3.27% (15 runs sampled)
push-stream x 4,786,984 ops/sec ±11.28% (14 runs sampled)
dripEmitter x 4,452,395 ops/sec ±8.74% (15 runs sampled)
EventEmitter3 x 4,018,050 ops/sec ±11.31% (15 runs sampled)
evee x 2,274,094 ops/sec ±4.91% (15 runs sampled)
event-signal x 1,634,257 ops/sec ±3.68% (15 runs sampled)
EventEmitter2 x 1,254,653 ops/sec ±6.98% (15 runs sampled)
RXJS x 1,218,234 ops/sec ±5.44% (14 runs sampled)
pull-notify x 998,937 ops/sec ±5.39% (14 runs sampled)
dripEmitterEnhanced x 689,404 ops/sec ±5.53% (15 runs sampled)
signal-emitter x 429,483 ops/sec ±5.11% (15 runs sampled)
EventEmitter x 174,445 ops/sec ±4.75% (14 runs sampled)
JS-Signals x 149,164 ops/sec ±6.38% (14 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 24,095,174 ops/sec ±6.37% (15 runs sampled) *burn in*
MiniSignals x 15,216,186 ops/sec ±3.40% (15 runs sampled)
signal-lite x 12,921,567 ops/sec ±12.28% (14 runs sampled)
EventEmitter3 x 729,876 ops/sec ±8.16% (14 runs sampled)
EventEmitter2 x 694,426 ops/sec ±4.01% (15 runs sampled)
signal-emitter x 501,992 ops/sec ±4.25% (15 runs sampled)
dripEmitterEnhanced x 518,110 ops/sec ±14.30% (13 runs sampled)
JS-Signals x 109,188 ops/sec ±5.37% (14 runs sampled)
EventEmitter x 111,215 ops/sec ±7.48% (15 runs sampled)
minivents x 64,517 ops/sec ±5.67% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
MicroSignals x 8,605,019 ops/sec ±5.74% (14 runs sampled)
Theoretical max x 8,676,073 ops/sec ±7.78% (15 runs sampled) *burn in*
MiniSignals x 8,286,266 ops/sec ±4.96% (15 runs sampled)
mini-pipe x 7,747,650 ops/sec ±7.83% (14 runs sampled)
signal-lite x 7,204,707 ops/sec ±6.19% (15 runs sampled)
push-stream x 6,365,546 ops/sec ±6.16% (14 runs sampled)
ReactiveProperty x 5,903,237 ops/sec ±3.87% (14 runs sampled)
EventEmitter2 x 5,802,624 ops/sec ±3.72% (15 runs sampled)
dripEmitter x 5,912,615 ops/sec ±6.30% (14 runs sampled)
EventEmitter3 x 5,433,633 ops/sec ±6.15% (15 runs sampled)
xstream x 5,536,929 ops/sec ±9.41% (14 runs sampled)
sister x 5,216,444 ops/sec ±4.56% (15 runs sampled)
EventEmitter x 3,056,767 ops/sec ±2.70% (14 runs sampled)
EventDispatcher x 2,351,968 ops/sec ±9.46% (14 runs sampled)
evee x 2,210,780 ops/sec ±8.73% (14 runs sampled)
event-signal x 1,821,989 ops/sec ±4.79% (15 runs sampled)
pull-pushable x 1,788,271 ops/sec ±4.36% (15 runs sampled)
RXJS x 1,630,020 ops/sec ±3.80% (15 runs sampled)
pull-notify x 1,687,572 ops/sec ±7.63% (14 runs sampled)
dripEmitterEnhanced x 656,518 ops/sec ±15.69% (14 runs sampled)
signal-emitter x 401,237 ops/sec ±10.83% (14 runs sampled)
JS-Signals x 186,547 ops/sec ±5.12% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 5,859,238 ops/sec ±10.69% (15 runs sampled) *burn in*
MicroSignals x 4,748,712 ops/sec ±3.26% (15 runs sampled)
MiniSignals x 4,640,747 ops/sec ±9.07% (15 runs sampled)
push-stream x 4,226,620 ops/sec ±3.62% (15 runs sampled)
ReactiveProperty x 3,943,068 ops/sec ±5.66% (15 runs sampled)
dripEmitter x 3,837,182 ops/sec ±5.94% (15 runs sampled)
sister x 3,666,554 ops/sec ±3.42% (15 runs sampled)
signal-lite x 3,768,564 ops/sec ±7.85% (14 runs sampled)
EventEmitter3 x 3,638,310 ops/sec ±7.50% (14 runs sampled)
xstream x 3,191,860 ops/sec ±3.74% (15 runs sampled)
EventDispatcher x 2,077,862 ops/sec ±5.20% (15 runs sampled)
evee x 1,647,146 ops/sec ±5.36% (15 runs sampled)
EventEmitter2 x 1,228,074 ops/sec ±6.85% (14 runs sampled)
RXJS x 1,129,381 ops/sec ±5.32% (15 runs sampled)
event-signal x 1,226,630 ops/sec ±15.26% (14 runs sampled)
pull-notify x 886,871 ops/sec ±6.41% (15 runs sampled)
dripEmitterEnhanced x 645,602 ops/sec ±3.61% (15 runs sampled)
signal-emitter x 382,382 ops/sec ±15.75% (13 runs sampled)
EventEmitter x 161,083 ops/sec ±8.30% (14 runs sampled)
JS-Signals x 149,632 ops/sec ±3.67% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one random value - one listener

```
MicroSignals x 24,571,728 ops/sec ±5.07% (15 runs sampled)
Theoretical max x 24,508,915 ops/sec ±6.20% (14 runs sampled) *burn in*
MiniSignals x 23,005,701 ops/sec ±4.49% (14 runs sampled)
mini-pipe x 21,196,911 ops/sec ±3.75% (15 runs sampled)
xstream x 22,588,878 ops/sec ±17.93% (14 runs sampled)
signal-lite x 19,675,746 ops/sec ±5.24% (15 runs sampled)
push-stream-patch x 17,394,356 ops/sec ±4.27% (15 runs sampled)
push-stream x 16,564,829 ops/sec ±7.90% (14 runs sampled)
dripEmitter x 16,026,793 ops/sec ±5.17% (14 runs sampled)
ReactiveProperty x 14,796,224 ops/sec ±3.62% (15 runs sampled)
EventEmitter3 x 14,480,017 ops/sec ±9.15% (14 runs sampled)
EventEmitter2 x 15,219,808 ops/sec ±18.09% (13 runs sampled)
EventEmitter x 8,731,309 ops/sec ±5.64% (15 runs sampled)
observ x 7,275,609 ops/sec ±4.53% (15 runs sampled)
pull-pushable x 6,036,780 ops/sec ±5.66% (15 runs sampled)
evee x 6,126,632 ops/sec ±20.93% (13 runs sampled)
RXJS x 5,079,997 ops/sec ±4.57% (15 runs sampled)
event-signal x 5,190,012 ops/sec ±10.66% (14 runs sampled)
pull-notify x 5,237,071 ops/sec ±12.20% (14 runs sampled)
barracks x 3,987,624 ops/sec ±6.57% (13 runs sampled)
d3-dispatch x 3,538,607 ops/sec ±3.89% (14 runs sampled)
dripEmitterEnhanced x 1,872,552 ops/sec ±8.62% (15 runs sampled)
signal-emitter x 1,332,995 ops/sec ±6.70% (15 runs sampled)
observable x 726,792 ops/sec ±5.60% (15 runs sampled)
minivents x 602,942 ops/sec ±4.29% (15 runs sampled)
JS-Signals x 576,626 ops/sec ±3.83% (15 runs sampled)
namespace-emitter x 462,066 ops/sec ±5.35% (15 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one random value - two listeners

```
MicroSignals x 14,073,003 ops/sec ±2.97% (15 runs sampled)
Theoretical max x 14,178,182 ops/sec ±5.47% (15 runs sampled) *burn in*
signal-lite x 13,101,796 ops/sec ±4.77% (15 runs sampled)
push-stream x 12,494,806 ops/sec ±3.93% (15 runs sampled)
MiniSignals x 12,759,301 ops/sec ±8.14% (15 runs sampled)
push-stream-patch x 11,973,929 ops/sec ±8.56% (14 runs sampled)
xstream x 10,622,107 ops/sec ±7.61% (14 runs sampled)
dripEmitter x 10,525,299 ops/sec ±11.01% (14 runs sampled)
EventEmitter3 x 9,569,299 ops/sec ±13.48% (15 runs sampled)
ReactiveProperty x 8,688,705 ops/sec ±15.38% (15 runs sampled)
evee x 6,200,998 ops/sec ±4.65% (15 runs sampled)
observ x 4,107,444 ops/sec ±14.29% (14 runs sampled)
EventEmitter2 x 3,586,955 ops/sec ±13.67% (14 runs sampled)
RXJS x 3,274,068 ops/sec ±7.37% (14 runs sampled)
event-signal x 2,952,598 ops/sec ±3.02% (15 runs sampled)
pull-notify x 2,547,022 ops/sec ±13.74% (14 runs sampled)
dripEmitterEnhanced x 2,030,535 ops/sec ±3.41% (14 runs sampled)
d3-dispatch x 1,977,220 ops/sec ±3.67% (15 runs sampled)
waddup x 2,048,106 ops/sec ±9.18% (15 runs sampled)
signal-emitter x 1,293,159 ops/sec ±4.03% (15 runs sampled)
observable x 669,127 ops/sec ±4.73% (14 runs sampled)
JS-Signals x 426,706 ops/sec ±4.13% (15 runs sampled)
EventEmitter x 440,053 ops/sec ±7.43% (14 runs sampled)
namespace-emitter x 346,354 ops/sec ±8.91% (13 runs sampled)
minivents x 268,792 ops/sec ±10.05% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - bound function

```
Theoretical max x 25,203,056 ops/sec ±6.65% (14 runs sampled) *burn in*
MicroSignals x 16,117,418 ops/sec ±4.17% (15 runs sampled)
push-stream x 13,906,326 ops/sec ±5.25% (15 runs sampled)
ReactiveProperty x 13,286,729 ops/sec ±3.41% (15 runs sampled)
dripEmitter x 12,537,546 ops/sec ±3.59% (14 runs sampled)
xstream x 12,030,679 ops/sec ±3.88% (15 runs sampled)
EventEmitter3 x 10,963,103 ops/sec ±4.98% (14 runs sampled)
MiniSignals x 7,449,839 ops/sec ±3.32% (14 runs sampled)
signal-lite x 5,378,136 ops/sec ±5.91% (15 runs sampled)
event-signal x 4,491,554 ops/sec ±7.59% (13 runs sampled)
RXJS x 3,888,164 ops/sec ±4.01% (15 runs sampled)
EventEmitter2 x 3,860,944 ops/sec ±5.64% (14 runs sampled)
pull-notify x 3,256,302 ops/sec ±3.40% (15 runs sampled)
dripEmitterEnhanced x 2,110,467 ops/sec ±6.82% (14 runs sampled)
evee x 1,626,023 ops/sec ±9.16% (14 runs sampled)
signal-emitter x 1,328,779 ops/sec ±7.23% (15 runs sampled)
JS-Signals x 535,666 ops/sec ±2.97% (15 runs sampled)
EventEmitter x 515,637 ops/sec ±3.64% (15 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
MiniSignals x 4,582,926 ops/sec ±3.83% (15 runs sampled)
MicroSignal x 4,549,807 ops/sec ±3.57% (15 runs sampled)
push-stream x 4,485,304 ops/sec ±5.69% (14 runs sampled)
Theoretical max x 4,336,948 ops/sec ±5.22% (14 runs sampled) *burn in*
EventEmitter3 x 4,106,540 ops/sec ±4.31% (15 runs sampled)
dripEmitter x 4,054,895 ops/sec ±4.02% (14 runs sampled)
ReactiveProperty x 3,533,642 ops/sec ±3.02% (15 runs sampled)
xstream x 3,282,312 ops/sec ±10.98% (15 runs sampled)
signal-lite x 2,914,493 ops/sec ±6.52% (13 runs sampled)
event-signal x 2,544,525 ops/sec ±5.73% (15 runs sampled)
EventEmitter2 x 2,261,576 ops/sec ±8.17% (14 runs sampled)
evee x 1,691,733 ops/sec ±5.71% (15 runs sampled)
RXJS x 1,462,849 ops/sec ±4.17% (15 runs sampled)
dripEmitterEnhanced x 1,469,918 ops/sec ±4.73% (14 runs sampled)
signal-emitter x 920,613 ops/sec ±3.33% (15 runs sampled)
pull-notify x 609,237 ops/sec ±7.48% (15 runs sampled)
EventEmitter x 258,198 ops/sec ±8.13% (15 runs sampled)
JS-Signals x 240,007 ops/sec ±4.59% (15 runs sampled)
minivents x 49,284 ops/sec ±21.36% (13 runs sampled)
```

_Fastest is **MiniSignals, MicroSignal, push-stream**_

## emit one value - one listener

```
MicroSignals x 32,528,278 ops/sec ±3.06% (15 runs sampled)
xstream x 32,912,255 ops/sec ±6.32% (15 runs sampled)
Theoretical max x 33,000,268 ops/sec ±6.86% (14 runs sampled) *burn in*
mini-pipe x 26,510,433 ops/sec ±5.58% (14 runs sampled)
MiniSignals x 25,887,324 ops/sec ±3.88% (15 runs sampled)
signal-lite x 23,848,194 ops/sec ±3.42% (15 runs sampled)
sister x 24,015,287 ops/sec ±8.35% (14 runs sampled)
EventEmitter3 x 20,431,068 ops/sec ±2.30% (15 runs sampled)
push-stream x 20,448,234 ops/sec ±3.73% (15 runs sampled)
push-stream-patch x 19,852,353 ops/sec ±4.47% (15 runs sampled)
ReactiveProperty x 17,514,338 ops/sec ±3.29% (14 runs sampled)
EventEmitter2 x 17,053,939 ops/sec ±17.44% (14 runs sampled)
dripEmitter x 15,640,391 ops/sec ±16.39% (14 runs sampled)
evee x 10,546,397 ops/sec ±5.28% (15 runs sampled)
observ x 8,676,722 ops/sec ±4.19% (14 runs sampled)
EventEmitter x 9,085,376 ops/sec ±13.47% (14 runs sampled)
event-signal x 6,586,113 ops/sec ±8.50% (14 runs sampled)
pull-pushable x 6,237,402 ops/sec ±11.02% (15 runs sampled)
pull-notify x 6,064,815 ops/sec ±12.34% (14 runs sampled)
d3-dispatch x 4,413,789 ops/sec ±3.27% (15 runs sampled)
RXJS x 4,712,583 ops/sec ±12.48% (14 runs sampled)
barracks x 3,604,596 ops/sec ±16.37% (14 runs sampled)
dripEmitterEnhanced x 2,314,862 ops/sec ±3.56% (15 runs sampled)
signal-emitter x 1,377,653 ops/sec ±5.08% (15 runs sampled)
observable x 770,550 ops/sec ±3.58% (15 runs sampled)
minivents x 603,807 ops/sec ±3.92% (13 runs sampled)
JS-Signals x 576,777 ops/sec ±4.17% (15 runs sampled)
namespace-emitter x 492,384 ops/sec ±2.62% (13 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one value - two listeners

```
Theoretical max x 21,418,330 ops/sec ±6.75% (14 runs sampled) *burn in*
MicroSignals x 16,911,513 ops/sec ±3.47% (14 runs sampled)
sister x 17,133,102 ops/sec ±6.66% (13 runs sampled)
MiniSignals x 15,886,399 ops/sec ±4.83% (15 runs sampled)
signal-lite x 14,751,707 ops/sec ±13.45% (15 runs sampled)
ReactiveProperty x 13,227,605 ops/sec ±3.86% (15 runs sampled)
push-stream x 13,403,016 ops/sec ±5.82% (15 runs sampled)
push-stream-patch x 13,033,949 ops/sec ±11.98% (15 runs sampled)
dripEmitter x 12,193,961 ops/sec ±5.05% (14 runs sampled)
EventEmitter3 x 11,860,561 ops/sec ±4.61% (15 runs sampled)
xstream x 10,791,911 ops/sec ±14.43% (12 runs sampled)
evee x 6,152,405 ops/sec ±8.25% (14 runs sampled)
event-signal x 5,511,997 ops/sec ±4.53% (14 runs sampled)
observ x 4,809,283 ops/sec ±3.94% (14 runs sampled)
EventEmitter2 x 4,659,866 ops/sec ±3.47% (15 runs sampled)
RXJS x 3,797,534 ops/sec ±2.70% (14 runs sampled)
pull-notify x 2,938,032 ops/sec ±3.05% (15 runs sampled)
waddup x 2,390,686 ops/sec ±12.81% (13 runs sampled)
d3-dispatch x 2,173,242 ops/sec ±4.26% (14 runs sampled)
dripEmitterEnhanced x 1,938,803 ops/sec ±7.29% (14 runs sampled)
signal-emitter x 1,447,084 ops/sec ±4.62% (15 runs sampled)
observable x 678,280 ops/sec ±4.85% (15 runs sampled)
EventEmitter x 514,216 ops/sec ±4.10% (15 runs sampled)
JS-Signals x 501,869 ops/sec ±3.44% (15 runs sampled)
namespace-emitter x 448,918 ops/sec ±3.31% (15 runs sampled)
minivents x 307,860 ops/sec ±3.46% (15 runs sampled)
```

_Fastest is **MicroSignals, sister, MiniSignals**_

## emit one value - with context

```
Theoretical max x 24,636,913 ops/sec ±7.65% (14 runs sampled) *burn in*
sister x 16,333,919 ops/sec ±4.11% (15 runs sampled)
MicroSignals x 16,047,198 ops/sec ±3.53% (15 runs sampled)
MiniSignals x 15,744,219 ops/sec ±5.83% (15 runs sampled)
push-stream x 13,053,888 ops/sec ±5.28% (15 runs sampled)
ReactiveProperty x 12,832,487 ops/sec ±4.08% (15 runs sampled)
EventEmitter3 x 12,322,073 ops/sec ±4.94% (15 runs sampled)
dripEmitter x 11,512,099 ops/sec ±3.64% (14 runs sampled)
signal-lite x 10,272,697 ops/sec ±10.99% (14 runs sampled)
RXJS x 4,246,223 ops/sec ±3.69% (15 runs sampled)
event-signal x 4,391,712 ops/sec ±12.98% (13 runs sampled)
EventEmitter2 x 3,917,152 ops/sec ±10.48% (14 runs sampled)
pull-notify x 2,657,299 ops/sec ±7.95% (14 runs sampled)
dripEmitterEnhanced x 2,047,507 ops/sec ±4.34% (15 runs sampled)
evee x 1,713,062 ops/sec ±3.70% (14 runs sampled)
signal-emitter x 1,363,255 ops/sec ±6.34% (15 runs sampled)
EventEmitter x 556,226 ops/sec ±5.38% (15 runs sampled)
JS-Signals x 481,039 ops/sec ±4.45% (14 runs sampled)
```

_Fastest is **sister, MicroSignals, MiniSignals**_

## emit variable number of values

```
Theoretical max x 5,438,573 ops/sec ±11.18% (14 runs sampled) *burn in*
MiniSignals x 4,224,733 ops/sec ±3.24% (15 runs sampled)
signal-lite x 3,864,020 ops/sec ±3.11% (15 runs sampled)
EventEmitter3 x 1,128,455 ops/sec ±5.90% (15 runs sampled)
EventEmitter2 x 523,674 ops/sec ±9.51% (14 runs sampled)
dripEmitterEnhanced x 403,231 ops/sec ±7.67% (15 runs sampled)
signal-emitter x 283,756 ops/sec ±4.72% (14 runs sampled)
JS-Signals x 120,048 ops/sec ±4.12% (15 runs sampled)
EventEmitter x 113,116 ops/sec ±7.79% (14 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventDispatcher x 45,033,722 ops/sec ±4.11% (13 runs sampled)
EventEmitter3 x 41,658,503 ops/sec ±6.81% (15 runs sampled)
EventEmitter x 31,145,063 ops/sec ±2.70% (15 runs sampled)
Theoretical max x 37,532,606 ops/sec ±32.98% (14 runs sampled) *burn in*
EventEmitter2 x 26,774,963 ops/sec ±5.38% (15 runs sampled)
MiniSignals x 22,230,205 ops/sec ±9.81% (12 runs sampled)
DripEmitterEnhanced x 18,684,528 ops/sec ±5.21% (15 runs sampled)
DripEmitter x 18,679,238 ops/sec ±29.59% (12 runs sampled)
push-stream x 10,598,887 ops/sec ±11.43% (14 runs sampled)
JS-Signals x 1,575,000 ops/sec ±9.02% (12 runs sampled)
ReactiveProperty x 1,083,612 ops/sec ±12.26% (13 runs sampled)
pull-notify x 886,508 ops/sec ±12.54% (13 runs sampled)
```

_Fastest is **EventDispatcher**_
