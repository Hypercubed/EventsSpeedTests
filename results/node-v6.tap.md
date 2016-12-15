# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 3ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 6ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 46, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 63, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 56, fail: 0, duration: 11ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 40, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 57, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 43ms
- planned: 681
- assertions: 681
- pass: 681
- fail: 0

# Comments

## Platform

Node.js 6.9.1 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 19,077,251 ops/sec ±12.71% (11 runs sampled)
MiniSignals x 11,655,856 ops/sec ±4.87% (11 runs sampled)
EventEmitter x 3,703,959 ops/sec ±12.94% (11 runs sampled)
ReactiveProperty x 2,491,303 ops/sec ±3.45% (11 runs sampled)
EventEmitter3 x 2,065,287 ops/sec ±4.54% (11 runs sampled)
EventEmitter2 x 1,391,823 ops/sec ±7.26% (11 runs sampled)
EventDispatcher x 607,716 ops/sec ±2.87% (11 runs sampled)
pushStream x 464,748 ops/sec ±8.25% (11 runs sampled)
dripEmitterEnhanced x 284,514 ops/sec ±4.34% (11 runs sampled)
JS-Signals x 260,468 ops/sec ±3.67% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 12,975,156 ops/sec ±5.24% (10 runs sampled) *burn in*
MicroSignals x 7,317,373 ops/sec ±4.47% (11 runs sampled)
signal-lite x 6,606,112 ops/sec ±4.56% (11 runs sampled)
push-stream x 6,195,000 ops/sec ±3.89% (11 runs sampled)
sister x 6,982,959 ops/sec ±18.11% (10 runs sampled)
MiniSignals x 6,680,758 ops/sec ±14.07% (11 runs sampled)
dripEmitter x 5,585,955 ops/sec ±4.41% (11 runs sampled)
EventEmitter3 x 5,290,951 ops/sec ±3.50% (11 runs sampled)
ReactiveProperty x 5,305,887 ops/sec ±4.25% (11 runs sampled)
evee x 4,582,047 ops/sec ±4.87% (11 runs sampled)
EventEmitter x 3,179,587 ops/sec ±10.88% (11 runs sampled)
pull-notify x 1,195,533 ops/sec ±4.58% (11 runs sampled)
dripEmitterEnhanced x 758,567 ops/sec ±2.90% (11 runs sampled)
signal-emitter x 480,623 ops/sec ±5.84% (11 runs sampled)
RXJS x 216,395 ops/sec ±2.28% (11 runs sampled)
EventEmitter2 x 218,250 ops/sec ±3.37% (11 runs sampled)
event-signal x 212,960 ops/sec ±8.05% (11 runs sampled)
JS-Signals x 95,317 ops/sec ±5.58% (11 runs sampled)
```

_Fastest is **MicroSignals, sister, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 29,222,826 ops/sec ±6.91% (11 runs sampled) *burn in*
MiniSignals x 16,289,652 ops/sec ±3.62% (11 runs sampled)
signal-lite x 15,624,058 ops/sec ±4.79% (11 runs sampled)
EventEmitter x 866,080 ops/sec ±3.42% (11 runs sampled)
EventEmitter3 x 884,113 ops/sec ±9.16% (11 runs sampled)
dripEmitterEnhanced x 630,025 ops/sec ±10.63% (11 runs sampled)
signal-emitter x 515,733 ops/sec ±16.36% (11 runs sampled)
EventEmitter2 x 350,331 ops/sec ±6.94% (11 runs sampled)
JS-Signals x 107,501 ops/sec ±4.76% (11 runs sampled)
minivents x 64,981 ops/sec ±4.75% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit one object - one listener

```
Theoretical max x 11,548,488 ops/sec ±3.12% (11 runs sampled) *burn in*
MicroSignals x 9,963,915 ops/sec ±6.34% (11 runs sampled)
MiniSignals x 8,726,570 ops/sec ±4.60% (11 runs sampled)
signal-lite x 7,730,473 ops/sec ±5.64% (11 runs sampled)
push-stream x 7,215,356 ops/sec ±2.75% (11 runs sampled)
mini-pipe x 7,825,123 ops/sec ±15.48% (11 runs sampled)
xstream x 6,975,849 ops/sec ±3.82% (11 runs sampled)
dripEmitter x 6,668,334 ops/sec ±4.34% (11 runs sampled)
sister x 6,302,777 ops/sec ±3.21% (10 runs sampled)
EventEmitter2 x 6,461,779 ops/sec ±7.19% (11 runs sampled)
EventEmitter3 x 5,949,377 ops/sec ±14.13% (11 runs sampled)
ReactiveProperty x 5,693,308 ops/sec ±19.91% (11 runs sampled)
EventEmitter x 4,876,331 ops/sec ±3.10% (11 runs sampled)
evee x 4,261,827 ops/sec ±4.85% (11 runs sampled)
EventDispatcher x 3,010,383 ops/sec ±2.68% (11 runs sampled)
pull-pushable x 2,122,812 ops/sec ±5.48% (11 runs sampled)
pull-notify x 1,916,533 ops/sec ±15.40% (10 runs sampled)
dripEmitterEnhanced x 725,110 ops/sec ±15.26% (11 runs sampled)
signal-emitter x 431,270 ops/sec ±15.89% (10 runs sampled)
RXJS x 283,718 ops/sec ±7.27% (11 runs sampled)
event-signal x 284,892 ops/sec ±15.52% (11 runs sampled)
mobx x 260,325 ops/sec ±6.35% (11 runs sampled)
JS-Signals x 115,624 ops/sec ±7.15% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,343,420 ops/sec ±15.69% (11 runs sampled) *burn in*
MicroSignals x 5,511,846 ops/sec ±1.78% (11 runs sampled)
MiniSignals x 5,020,271 ops/sec ±13.54% (11 runs sampled)
push-stream x 4,581,075 ops/sec ±4.07% (11 runs sampled)
dripEmitter x 4,415,127 ops/sec ±3.08% (11 runs sampled)
ReactiveProperty x 4,426,309 ops/sec ±3.61% (11 runs sampled)
EventEmitter3 x 4,176,658 ops/sec ±3.95% (11 runs sampled)
sister x 4,175,045 ops/sec ±6.74% (11 runs sampled)
signal-lite x 4,508,399 ops/sec ±15.99% (11 runs sampled)
xstream x 3,531,446 ops/sec ±4.22% (11 runs sampled)
EventEmitter x 3,002,968 ops/sec ±7.06% (11 runs sampled)
evee x 2,968,872 ops/sec ±6.73% (11 runs sampled)
EventDispatcher x 2,288,979 ops/sec ±5.84% (11 runs sampled)
pull-notify x 952,724 ops/sec ±9.84% (11 runs sampled)
dripEmitterEnhanced x 679,426 ops/sec ±16.56% (10 runs sampled)
signal-emitter x 436,372 ops/sec ±2.74% (11 runs sampled)
RXJS x 210,346 ops/sec ±3.58% (11 runs sampled)
mobx x 196,233 ops/sec ±3.85% (11 runs sampled)
event-signal x 196,090 ops/sec ±7.88% (11 runs sampled)
EventEmitter2 x 187,701 ops/sec ±15.45% (11 runs sampled)
JS-Signals x 87,991 ops/sec ±7.10% (11 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one random value - one listener

```
Theoretical max x 28,401,726 ops/sec ±3.96% (11 runs sampled) *burn in*
MicroSignals x 23,947,651 ops/sec ±3.12% (11 runs sampled)
xstream x 24,383,275 ops/sec ±14.26% (11 runs sampled)
MiniSignals x 22,051,857 ops/sec ±6.97% (11 runs sampled)
mini-pipe x 22,463,155 ops/sec ±15.23% (11 runs sampled)
push-stream x 18,684,177 ops/sec ±2.22% (11 runs sampled)
EventEmitter3 x 18,565,018 ops/sec ±3.41% (11 runs sampled)
push-stream-patch x 17,950,745 ops/sec ±17.43% (10 runs sampled)
evee x 15,653,900 ops/sec ±3.11% (11 runs sampled)
EventEmitter2 x 16,952,562 ops/sec ±19.78% (11 runs sampled)
dripEmitter x 16,016,061 ops/sec ±18.66% (10 runs sampled)
ReactiveProperty x 12,475,575 ops/sec ±14.21% (11 runs sampled)
EventEmitter x 11,927,373 ops/sec ±9.82% (11 runs sampled)
signal-lite x 13,874,300 ops/sec ±34.16% (11 runs sampled)
observ x 8,390,544 ops/sec ±4.82% (11 runs sampled)
pull-notify x 6,911,599 ops/sec ±4.85% (11 runs sampled)
pull-pushable x 6,263,220 ops/sec ±9.73% (11 runs sampled)
barracks x 4,402,900 ops/sec ±19.93% (11 runs sampled)
d3-dispatch x 3,110,884 ops/sec ±20.26% (10 runs sampled)
dripEmitterEnhanced x 1,715,426 ops/sec ±9.26% (11 runs sampled)
signal-emitter x 1,297,016 ops/sec ±4.93% (11 runs sampled)
event-signal x 799,309 ops/sec ±3.90% (11 runs sampled)
RXJS x 739,267 ops/sec ±2.39% (11 runs sampled)
mobx x 596,884 ops/sec ±5.59% (11 runs sampled)
namespace-emitter x 497,394 ops/sec ±6.31% (11 runs sampled)
observable x 526,385 ops/sec ±16.58% (11 runs sampled)
minivents x 360,489 ops/sec ±3.81% (10 runs sampled)
JS-Signals x 331,243 ops/sec ±3.61% (11 runs sampled)
```

_Fastest is **MicroSignals, xstream, mini-pipe**_

## emit one random value - two listeners

```
Theoretical max x 17,301,993 ops/sec ±6.48% (11 runs sampled) *burn in*
MicroSignals x 16,360,947 ops/sec ±3.49% (11 runs sampled)
signal-lite x 14,293,841 ops/sec ±7.29% (11 runs sampled)
MiniSignals x 14,130,022 ops/sec ±8.80% (11 runs sampled)
dripEmitter x 12,809,184 ops/sec ±4.87% (11 runs sampled)
push-stream x 12,248,128 ops/sec ±2.58% (11 runs sampled)
EventEmitter3 x 12,022,089 ops/sec ±3.82% (11 runs sampled)
push-stream-patch x 12,037,169 ops/sec ±4.83% (11 runs sampled)
ReactiveProperty x 11,021,795 ops/sec ±3.71% (11 runs sampled)
xstream x 11,806,803 ops/sec ±16.34% (11 runs sampled)
evee x 10,421,757 ops/sec ±3.82% (11 runs sampled)
EventEmitter x 8,686,934 ops/sec ±3.90% (10 runs sampled)
observ x 5,465,586 ops/sec ±5.34% (11 runs sampled)
pull-notify x 2,993,483 ops/sec ±6.99% (11 runs sampled)
waddup x 2,557,245 ops/sec ±8.83% (11 runs sampled)
dripEmitterEnhanced x 1,875,258 ops/sec ±3.23% (10 runs sampled)
d3-dispatch x 1,871,265 ops/sec ±5.31% (11 runs sampled)
signal-emitter x 1,390,736 ops/sec ±4.16% (11 runs sampled)
event-signal x 612,205 ops/sec ±4.48% (11 runs sampled)
observable x 620,000 ops/sec ±5.95% (11 runs sampled)
EventEmitter2 x 593,387 ops/sec ±5.00% (11 runs sampled)
RXJS x 528,680 ops/sec ±3.52% (11 runs sampled)
namespace-emitter x 357,253 ops/sec ±8.49% (11 runs sampled)
JS-Signals x 247,790 ops/sec ±2.63% (11 runs sampled)
minivents x 232,009 ops/sec ±3.31% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - bound function

```
Theoretical max x 31,138,710 ops/sec ±4.02% (11 runs sampled) *burn in*
MicroSignals x 17,050,184 ops/sec ±4.06% (11 runs sampled)
ReactiveProperty x 14,692,857 ops/sec ±4.55% (11 runs sampled)
xstream x 14,609,269 ops/sec ±5.13% (10 runs sampled)
push-stream x 13,421,468 ops/sec ±4.48% (11 runs sampled)
EventEmitter3 x 11,734,495 ops/sec ±4.99% (11 runs sampled)
EventEmitter x 9,028,869 ops/sec ±5.95% (11 runs sampled)
dripEmitter x 9,451,992 ops/sec ±12.26% (11 runs sampled)
MiniSignals x 7,871,683 ops/sec ±8.19% (11 runs sampled)
signal-lite x 6,105,338 ops/sec ±2.93% (11 runs sampled)
pull-notify x 3,495,670 ops/sec ±4.17% (11 runs sampled)
evee x 2,237,316 ops/sec ±2.62% (11 runs sampled)
dripEmitterEnhanced x 1,735,800 ops/sec ±18.76% (11 runs sampled)
signal-emitter x 1,239,706 ops/sec ±4.00% (11 runs sampled)
RXJS x 580,195 ops/sec ±3.42% (11 runs sampled)
EventEmitter2 x 573,640 ops/sec ±5.00% (11 runs sampled)
event-signal x 534,277 ops/sec ±5.99% (11 runs sampled)
JS-Signals x 265,851 ops/sec ±7.66% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
Theoretical max x 5,364,323 ops/sec ±3.74% (11 runs sampled) *burn in*
MicroSignal x 4,829,208 ops/sec ±5.52% (11 runs sampled)
signal-lite x 4,683,450 ops/sec ±4.69% (11 runs sampled)
push-stream x 4,629,201 ops/sec ±5.10% (11 runs sampled)
dripEmitter x 4,484,452 ops/sec ±3.82% (11 runs sampled)
EventEmitter3 x 4,251,259 ops/sec ±4.69% (11 runs sampled)
MiniSignals x 4,592,623 ops/sec ±13.86% (10 runs sampled)
xstream x 4,176,647 ops/sec ±3.86% (11 runs sampled)
ReactiveProperty x 4,066,445 ops/sec ±2.57% (11 runs sampled)
EventEmitter x 3,792,287 ops/sec ±4.37% (11 runs sampled)
evee x 3,011,179 ops/sec ±4.11% (11 runs sampled)
dripEmitterEnhanced x 1,618,338 ops/sec ±2.14% (11 runs sampled)
signal-emitter x 1,150,322 ops/sec ±3.16% (11 runs sampled)
pull-notify x 754,171 ops/sec ±7.05% (11 runs sampled)
EventEmitter2 x 209,077 ops/sec ±4.26% (11 runs sampled)
event-signal x 201,069 ops/sec ±7.05% (11 runs sampled)
mobx x 193,846 ops/sec ±4.44% (11 runs sampled)
RXJS x 193,066 ops/sec ±4.12% (11 runs sampled)
JS-Signals x 120,396 ops/sec ±6.17% (11 runs sampled)
minivents x 57,911 ops/sec ±5.88% (10 runs sampled)
```

_Fastest is **MicroSignal, signal-lite, push-stream, MiniSignals**_

## emit one value - one listener

```
Theoretical max x 42,063,091 ops/sec ±3.61% (11 runs sampled) *burn in*
xstream x 35,125,330 ops/sec ±3.75% (11 runs sampled)
MiniSignals x 29,356,044 ops/sec ±2.21% (10 runs sampled)
mini-pipe x 29,430,182 ops/sec ±4.33% (11 runs sampled)
sister x 28,373,296 ops/sec ±4.29% (11 runs sampled)
MicroSignals x 30,825,156 ops/sec ±14.67% (11 runs sampled)
signal-lite x 24,908,264 ops/sec ±6.38% (11 runs sampled)
EventEmitter3 x 22,306,105 ops/sec ±4.35% (11 runs sampled)
EventEmitter2 x 21,782,018 ops/sec ±3.19% (11 runs sampled)
push-stream x 21,487,851 ops/sec ±3.85% (11 runs sampled)
push-stream-patch x 21,483,418 ops/sec ±5.22% (11 runs sampled)
dripEmitter x 20,865,298 ops/sec ±4.02% (11 runs sampled)
evee x 19,769,488 ops/sec ±3.60% (11 runs sampled)
ReactiveProperty x 19,319,017 ops/sec ±5.21% (11 runs sampled)
EventEmitter x 15,898,057 ops/sec ±6.32% (11 runs sampled)
observ x 10,219,951 ops/sec ±10.31% (11 runs sampled)
pull-notify x 8,195,231 ops/sec ±4.16% (11 runs sampled)
pull-pushable x 7,482,467 ops/sec ±10.71% (11 runs sampled)
barracks x 5,270,792 ops/sec ±3.07% (11 runs sampled)
d3-dispatch x 4,638,678 ops/sec ±6.06% (11 runs sampled)
dripEmitterEnhanced x 2,251,246 ops/sec ±8.38% (11 runs sampled)
signal-emitter x 1,454,404 ops/sec ±3.05% (11 runs sampled)
event-signal x 864,536 ops/sec ±5.12% (11 runs sampled)
RXJS x 831,543 ops/sec ±6.17% (11 runs sampled)
observable x 723,467 ops/sec ±4.22% (11 runs sampled)
namespace-emitter x 507,487 ops/sec ±4.02% (11 runs sampled)
minivents x 395,006 ops/sec ±5.84% (11 runs sampled)
JS-Signals x 338,335 ops/sec ±5.27% (10 runs sampled)
```

_Fastest is **xstream, MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 26,117,576 ops/sec ±4.54% (11 runs sampled) *burn in*
sister x 18,267,415 ops/sec ±4.85% (11 runs sampled)
MicroSignals x 18,033,798 ops/sec ±3.83% (11 runs sampled)
MiniSignals x 17,807,823 ops/sec ±3.92% (10 runs sampled)
signal-lite x 16,378,747 ops/sec ±4.30% (11 runs sampled)
push-stream-patch x 14,997,785 ops/sec ±4.57% (10 runs sampled)
push-stream x 14,709,996 ops/sec ±3.92% (11 runs sampled)
dripEmitter x 13,619,910 ops/sec ±3.76% (10 runs sampled)
xstream x 13,769,213 ops/sec ±6.06% (11 runs sampled)
EventEmitter3 x 13,289,572 ops/sec ±4.76% (11 runs sampled)
ReactiveProperty x 13,309,425 ops/sec ±8.70% (11 runs sampled)
evee x 11,883,609 ops/sec ±2.67% (11 runs sampled)
EventEmitter x 9,851,482 ops/sec ±4.56% (11 runs sampled)
observ x 6,515,881 ops/sec ±3.84% (11 runs sampled)
pull-notify x 3,193,525 ops/sec ±3.76% (11 runs sampled)
waddup x 2,854,394 ops/sec ±2.58% (11 runs sampled)
d3-dispatch x 2,490,048 ops/sec ±3.18% (11 runs sampled)
dripEmitterEnhanced x 2,268,759 ops/sec ±4.53% (11 runs sampled)
signal-emitter x 1,468,903 ops/sec ±5.13% (11 runs sampled)
event-signal x 653,627 ops/sec ±2.41% (11 runs sampled)
RXJS x 611,077 ops/sec ±5.48% (11 runs sampled)
EventEmitter2 x 588,545 ops/sec ±4.49% (10 runs sampled)
namespace-emitter x 462,789 ops/sec ±8.93% (11 runs sampled)
observable x 520,231 ops/sec ±35.93% (11 runs sampled)
JS-Signals x 293,041 ops/sec ±6.13% (11 runs sampled)
minivents x 255,580 ops/sec ±4.48% (11 runs sampled)
```

_Fastest is **sister, MicroSignals, MiniSignals**_

## emit one value - with context

```
Theoretical max x 29,658,769 ops/sec ±5.24% (10 runs sampled) *burn in*
sister x 18,708,952 ops/sec ±3.48% (11 runs sampled)
MicroSignals x 17,895,937 ops/sec ±3.76% (11 runs sampled)
signal-lite x 17,278,649 ops/sec ±4.58% (11 runs sampled)
MiniSignals x 16,647,429 ops/sec ±7.36% (10 runs sampled)
push-stream x 15,561,023 ops/sec ±3.94% (10 runs sampled)
EventEmitter3 x 14,795,421 ops/sec ±3.01% (11 runs sampled)
ReactiveProperty x 14,216,603 ops/sec ±5.11% (11 runs sampled)
dripEmitter x 13,214,319 ops/sec ±3.52% (11 runs sampled)
EventEmitter x 9,182,485 ops/sec ±2.16% (11 runs sampled)
pull-notify x 2,758,762 ops/sec ±22.10% (11 runs sampled)
dripEmitterEnhanced x 2,259,401 ops/sec ±4.16% (11 runs sampled)
evee x 2,109,991 ops/sec ±7.56% (11 runs sampled)
signal-emitter x 1,460,379 ops/sec ±2.92% (11 runs sampled)
RXJS x 635,569 ops/sec ±2.73% (11 runs sampled)
EventEmitter2 x 620,085 ops/sec ±4.18% (11 runs sampled)
event-signal x 624,671 ops/sec ±5.62% (11 runs sampled)
mobx x 464,986 ops/sec ±12.22% (11 runs sampled)
JS-Signals x 296,477 ops/sec ±7.31% (11 runs sampled)
```

_Fastest is **sister, MicroSignals**_

## emit variable number of values

```
Theoretical max x 6,769,119 ops/sec ±5.18% (11 runs sampled) *burn in*
MiniSignals x 4,634,128 ops/sec ±3.06% (11 runs sampled)
signal-lite x 4,430,146 ops/sec ±2.91% (11 runs sampled)
EventEmitter x 2,370,254 ops/sec ±3.82% (11 runs sampled)
EventEmitter3 x 1,212,434 ops/sec ±3.99% (11 runs sampled)
dripEmitterEnhanced x 447,621 ops/sec ±3.52% (11 runs sampled)
signal-emitter x 305,735 ops/sec ±4.96% (11 runs sampled)
EventEmitter2 x 147,200 ops/sec ±3.17% (11 runs sampled)
JS-Signals x 70,674 ops/sec ±7.60% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventDispatcher x 51,328,935 ops/sec ±3.18% (11 runs sampled)
EventEmitter3 x 49,991,647 ops/sec ±4.18% (11 runs sampled)
DripEmitter x 47,959,687 ops/sec ±4.71% (11 runs sampled)
Theoretical max x 43,091,846 ops/sec ±36.96% (11 runs sampled) *burn in*
EventEmitter2 x 30,483,478 ops/sec ±5.97% (11 runs sampled)
EventEmitter x 26,769,272 ops/sec ±3.53% (11 runs sampled)
MiniSignals x 27,595,381 ops/sec ±14.22% (11 runs sampled)
DripEmitterEnhanced x 21,847,248 ops/sec ±2.84% (11 runs sampled)
push-stream x 14,891,621 ops/sec ±4.18% (11 runs sampled)
JS-Signals x 1,988,231 ops/sec ±13.38% (11 runs sampled)
ReactiveProperty x 1,173,561 ops/sec ±28.20% (11 runs sampled)
pull-notify x 1,004,497 ops/sec ±18.95% (11 runs sampled)
```

_Fastest is **EventDispatcher, EventEmitter3**_
