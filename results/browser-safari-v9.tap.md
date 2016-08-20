# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 4ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 4ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 33ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Safari 9.1.1 on OS X 10.11.5 NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 8,434,556 ops/sec ±4.02% (11 runs sampled)
pushStream x 6,627,770 ops/sec ±3.36% (11 runs sampled)
MiniSignals x 4,052,850 ops/sec ±22.20% (10 runs sampled)
EventDispatcher x 3,640,680 ops/sec ±14.25% (10 runs sampled)
EventEmitter3 x 1,806,132 ops/sec ±4.87% (11 runs sampled)
ReactiveProperty x 1,816,485 ops/sec ±13.00% (10 runs sampled)
JS-Signals x 1,018,914 ops/sec ±4.17% (11 runs sampled)
dripEmitterEnhanced x 803,057 ops/sec ±6.36% (10 runs sampled)
EventEmitter x 681,899 ops/sec ±7.46% (10 runs sampled)
EventEmitter2 x 616,438 ops/sec ±5.32% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 1,962,343 ops/sec ±35.74% (10 runs sampled) *burn in*
MicroSignals x 1,116,837 ops/sec ±5.95% (11 runs sampled)
push-stream x 1,100,943 ops/sec ±7.07% (10 runs sampled)
sister x 1,060,221 ops/sec ±3.60% (11 runs sampled)
event-signal x 936,681 ops/sec ±3.62% (11 runs sampled)
dripEmitter x 807,777 ops/sec ±10.54% (10 runs sampled)
evee x 751,685 ops/sec ±11.61% (10 runs sampled)
MiniSignals x 752,482 ops/sec ±12.68% (11 runs sampled)
pull-notify x 686,460 ops/sec ±3.58% (10 runs sampled)
RXJS x 641,638 ops/sec ±9.08% (10 runs sampled)
EventEmitter2 x 591,396 ops/sec ±9.66% (10 runs sampled)
signal-lite x 541,278 ops/sec ±3.54% (11 runs sampled)
ReactiveProperty x 577,315 ops/sec ±10.49% (10 runs sampled)
EventEmitter3 x 530,583 ops/sec ±7.43% (10 runs sampled)
EventEmitter x 468,996 ops/sec ±6.29% (10 runs sampled)
JS-Signals x 394,652 ops/sec ±3.22% (11 runs sampled)
dripEmitterEnhanced x 388,754 ops/sec ±13.03% (10 runs sampled)
signal-emitter x 244,933 ops/sec ±9.62% (10 runs sampled)
```

_Fastest is **MicroSignals, push-stream, sister**_

## emit many values - two listeners

```
Theoretical max x 6,249,808 ops/sec ±30.55% (10 runs sampled) *burn in*
MiniSignals x 1,657,622 ops/sec ±27.26% (11 runs sampled)
signal-lite x 1,211,896 ops/sec ±5.85% (11 runs sampled)
EventEmitter3 x 1,093,073 ops/sec ±9.30% (11 runs sampled)
EventEmitter2 x 928,273 ops/sec ±18.17% (10 runs sampled)
minivents x 853,871 ops/sec ±9.53% (11 runs sampled)
JS-Signals x 800,160 ops/sec ±5.17% (11 runs sampled)
dripEmitterEnhanced x 697,302 ops/sec ±19.18% (10 runs sampled)
signal-emitter x 433,918 ops/sec ±8.35% (11 runs sampled)
EventEmitter x 1,608 ops/sec ±225.62% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit one object - one listener

```
Theoretical max x 2,860,146 ops/sec ±31.62% (10 runs sampled) *burn in*
mini-pipe x 1,679,436 ops/sec ±5.35% (11 runs sampled)
push-stream x 1,618,399 ops/sec ±5.02% (11 runs sampled)
xstream x 1,607,184 ops/sec ±4.76% (10 runs sampled)
MicroSignals x 1,620,516 ops/sec ±6.02% (11 runs sampled)
sister x 1,483,316 ops/sec ±5.08% (11 runs sampled)
pull-notify x 1,252,109 ops/sec ±4.72% (11 runs sampled)
pull-pushable x 1,194,478 ops/sec ±6.48% (11 runs sampled)
event-signal x 1,088,814 ops/sec ±2.46% (11 runs sampled)
ReactiveProperty x 1,066,223 ops/sec ±5.40% (10 runs sampled)
dripEmitter x 1,071,296 ops/sec ±13.13% (10 runs sampled)
EventDispatcher x 1,025,575 ops/sec ±11.55% (10 runs sampled)
RXJS x 980,225 ops/sec ±6.81% (11 runs sampled)
MiniSignals x 1,054,661 ops/sec ±15.46% (10 runs sampled)
evee x 1,019,087 ops/sec ±12.49% (10 runs sampled)
EventEmitter2 x 952,403 ops/sec ±11.57% (10 runs sampled)
EventEmitter x 963,370 ops/sec ±16.07% (10 runs sampled)
signal-lite x 780,515 ops/sec ±2.17% (11 runs sampled)
EventEmitter3 x 710,364 ops/sec ±7.57% (11 runs sampled)
JS-Signals x 500,118 ops/sec ±4.45% (11 runs sampled)
dripEmitterEnhanced x 462,041 ops/sec ±13.11% (10 runs sampled)
signal-emitter x 283,421 ops/sec ±3.78% (11 runs sampled)
```

_Fastest is **mini-pipe, push-stream, xstream, MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 2,002,200 ops/sec ±25.19% (10 runs sampled) *burn in*
sister x 1,001,916 ops/sec ±4.50% (11 runs sampled)
xstream x 977,569 ops/sec ±6.39% (10 runs sampled)
push-stream x 977,016 ops/sec ±7.23% (10 runs sampled)
event-signal x 831,818 ops/sec ±5.03% (11 runs sampled)
ReactiveProperty x 821,509 ops/sec ±9.65% (11 runs sampled)
MiniSignals x 828,447 ops/sec ±15.16% (11 runs sampled)
RXJS x 724,237 ops/sec ±4.41% (11 runs sampled)
EventDispatcher x 739,392 ops/sec ±6.97% (10 runs sampled)
pull-notify x 684,543 ops/sec ±3.23% (11 runs sampled)
MicroSignals x 692,358 ops/sec ±13.05% (11 runs sampled)
evee x 671,913 ops/sec ±10.69% (10 runs sampled)
EventEmitter2 x 634,245 ops/sec ±9.50% (10 runs sampled)
dripEmitter x 636,105 ops/sec ±13.32% (10 runs sampled)
signal-lite x 513,385 ops/sec ±3.28% (11 runs sampled)
EventEmitter3 x 485,550 ops/sec ±8.24% (10 runs sampled)
EventEmitter x 450,823 ops/sec ±13.14% (10 runs sampled)
JS-Signals x 390,432 ops/sec ±3.63% (11 runs sampled)
dripEmitterEnhanced x 336,995 ops/sec ±11.12% (10 runs sampled)
signal-emitter x 243,904 ops/sec ±6.46% (11 runs sampled)
```

_Fastest is **sister, xstream, push-stream, MiniSignals**_

## emit one random value - one listener

```
push-stream-patch x 29,340,723 ops/sec ±25.15% (10 runs sampled)
MicroSignals x 24,699,674 ops/sec ±33.29% (10 runs sampled)
push-stream x 21,818,539 ops/sec ±35.69% (10 runs sampled)
Theoretical max x 18,370,243 ops/sec ±48.71% (11 runs sampled) *burn in*
mini-pipe x 18,341,883 ops/sec ±58.75% (10 runs sampled)
xstream x 14,211,276 ops/sec ±63.36% (10 runs sampled)
pull-notify x 7,227,946 ops/sec ±31.75% (10 runs sampled)
event-signal x 6,593,487 ops/sec ±33.80% (10 runs sampled)
dripEmitter x 6,406,976 ops/sec ±37.03% (10 runs sampled)
evee x 5,806,381 ops/sec ±40.58% (10 runs sampled)
EventEmitter2 x 5,765,538 ops/sec ±39.99% (10 runs sampled)
ReactiveProperty x 4,965,254 ops/sec ±22.92% (10 runs sampled)
EventEmitter x 5,230,162 ops/sec ±29.85% (10 runs sampled)
RXJS x 3,862,281 ops/sec ±9.96% (10 runs sampled)
pull-pushable x 3,730,978 ops/sec ±7.89% (11 runs sampled)
MiniSignals x 3,754,439 ops/sec ±14.93% (10 runs sampled)
barracks x 3,834,515 ops/sec ±37.22% (10 runs sampled)
EventEmitter3 x 2,978,302 ops/sec ±17.28% (10 runs sampled)
signal-lite x 2,923,091 ops/sec ±16.43% (10 runs sampled)
minivents x 2,390,485 ops/sec ±14.60% (10 runs sampled)
observable x 2,292,352 ops/sec ±14.52% (10 runs sampled)
d3-dispatch x 2,130,105 ops/sec ±22.65% (10 runs sampled)
observ x 1,950,544 ops/sec ±13.63% (10 runs sampled)
JS-Signals x 1,831,238 ops/sec ±13.66% (10 runs sampled)
dripEmitterEnhanced x 1,756,584 ops/sec ±18.01% (10 runs sampled)
namespace-emitter x 996,423 ops/sec ±13.08% (10 runs sampled)
signal-emitter x 799,603 ops/sec ±15.41% (11 runs sampled)
```

_Fastest is **push-stream-patch, MicroSignals, push-stream, mini-pipe, xstream**_

## emit one random value - two listeners

```
Theoretical max x 8,948,868 ops/sec ±46.50% (10 runs sampled) *burn in*
push-stream-patch x 4,908,906 ops/sec ±6.07% (10 runs sampled)
push-stream x 4,559,805 ops/sec ±9.26% (10 runs sampled)
MicroSignals x 4,617,021 ops/sec ±14.47% (10 runs sampled)
event-signal x 3,551,507 ops/sec ±6.38% (10 runs sampled)
xstream x 3,702,407 ops/sec ±13.24% (10 runs sampled)
evee x 2,775,531 ops/sec ±12.34% (10 runs sampled)
dripEmitter x 2,810,290 ops/sec ±18.35% (10 runs sampled)
ReactiveProperty x 2,412,663 ops/sec ±10.71% (10 runs sampled)
RXJS x 2,319,314 ops/sec ±6.69% (11 runs sampled)
pull-notify x 2,422,591 ops/sec ±13.95% (10 runs sampled)
MiniSignals x 2,287,164 ops/sec ±15.55% (10 runs sampled)
EventEmitter2 x 2,185,323 ops/sec ±12.28% (10 runs sampled)
EventEmitter3 x 1,901,527 ops/sec ±9.46% (10 runs sampled)
signal-lite x 1,747,533 ops/sec ±6.82% (11 runs sampled)
EventEmitter x 1,702,240 ops/sec ±14.27% (10 runs sampled)
d3-dispatch x 1,477,205 ops/sec ±8.27% (11 runs sampled)
observable x 1,506,066 ops/sec ±10.45% (11 runs sampled)
minivents x 1,382,620 ops/sec ±2.65% (11 runs sampled)
waddup x 1,303,464 ops/sec ±6.53% (10 runs sampled)
observ x 1,317,842 ops/sec ±8.25% (10 runs sampled)
dripEmitterEnhanced x 1,304,523 ops/sec ±14.09% (10 runs sampled)
JS-Signals x 1,192,004 ops/sec ±8.13% (10 runs sampled)
signal-emitter x 718,964 ops/sec ±3.74% (11 runs sampled)
namespace-emitter x 670,331 ops/sec ±11.56% (10 runs sampled)
```

_Fastest is **push-stream-patch, push-stream, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 3,900,448 ops/sec ±17.83% (10 runs sampled) *burn in*
MicroSignals x 3,185,627 ops/sec ±4.36% (10 runs sampled)
push-stream x 3,188,422 ops/sec ±4.83% (10 runs sampled)
MiniSignals x 3,027,838 ops/sec ±5.40% (11 runs sampled)
xstream x 2,937,491 ops/sec ±8.24% (10 runs sampled)
event-signal x 2,604,407 ops/sec ±5.38% (11 runs sampled)
pull-notify x 2,210,197 ops/sec ±7.07% (11 runs sampled)
RXJS x 2,041,469 ops/sec ±3.23% (11 runs sampled)
dripEmitter x 2,155,521 ops/sec ±10.50% (10 runs sampled)
ReactiveProperty x 2,033,613 ops/sec ±6.92% (11 runs sampled)
EventEmitter2 x 1,936,842 ops/sec ±9.22% (10 runs sampled)
EventEmitter3 x 1,684,910 ops/sec ±7.49% (11 runs sampled)
EventEmitter x 1,498,482 ops/sec ±5.20% (11 runs sampled)
signal-lite x 1,660,408 ops/sec ±17.10% (11 runs sampled)
evee x 1,447,386 ops/sec ±8.45% (10 runs sampled)
JS-Signals x 1,235,238 ops/sec ±3.06% (11 runs sampled)
dripEmitterEnhanced x 1,096,391 ops/sec ±11.29% (10 runs sampled)
signal-emitter x 672,618 ops/sec ±8.41% (10 runs sampled)
```

_Fastest is **MicroSignals, push-stream, MiniSignals, xstream**_

## emit one value - many listeners

```
Theoretical max x 1,916,274 ops/sec ±29.89% (10 runs sampled) *burn in*
MicroSignal x 1,082,522 ops/sec ±6.22% (10 runs sampled)
push-stream x 1,036,287 ops/sec ±3.11% (11 runs sampled)
MiniSignals x 1,016,925 ops/sec ±3.94% (11 runs sampled)
xstream x 984,472 ops/sec ±5.18% (11 runs sampled)
event-signal x 953,146 ops/sec ±1.97% (11 runs sampled)
ReactiveProperty x 903,409 ops/sec ±4.57% (11 runs sampled)
EventEmitter2 x 876,029 ops/sec ±6.96% (11 runs sampled)
dripEmitter x 841,380 ops/sec ±12.79% (10 runs sampled)
EventEmitter3 x 735,351 ops/sec ±12.18% (11 runs sampled)
RXJS x 632,290 ops/sec ±6.16% (10 runs sampled)
evee x 665,474 ops/sec ±11.86% (10 runs sampled)
EventEmitter x 619,600 ops/sec ±5.82% (10 runs sampled)
pull-notify x 593,040 ops/sec ±2.59% (11 runs sampled)
signal-lite x 590,481 ops/sec ±4.63% (11 runs sampled)
dripEmitterEnhanced x 593,693 ops/sec ±14.31% (10 runs sampled)
signal-emitter x 471,024 ops/sec ±3.60% (11 runs sampled)
JS-Signals x 464,534 ops/sec ±11.28% (10 runs sampled)
minivents x 384,160 ops/sec ±2.46% (11 runs sampled)
```

_Fastest is **MicroSignal**_

## emit one value - one listener

```
MicroSignals x 36,046,079 ops/sec ±33.69% (10 runs sampled)
push-stream-patch x 32,808,683 ops/sec ±37.35% (10 runs sampled)
push-stream x 31,445,663 ops/sec ±33.63% (10 runs sampled)
sister x 19,044,496 ops/sec ±24.52% (10 runs sampled)
mini-pipe x 22,731,876 ops/sec ±73.08% (10 runs sampled)
Theoretical max x 18,949,605 ops/sec ±57.30% (10 runs sampled) *burn in*
xstream x 16,164,607 ops/sec ±69.32% (10 runs sampled)
EventEmitter x 7,493,835 ops/sec ±31.36% (10 runs sampled)
event-signal x 6,911,749 ops/sec ±26.70% (10 runs sampled)
pull-notify x 7,028,906 ops/sec ±32.64% (10 runs sampled)
dripEmitter x 6,748,157 ops/sec ±33.84% (10 runs sampled)
evee x 6,562,500 ops/sec ±38.14% (10 runs sampled)
EventEmitter2 x 6,267,924 ops/sec ±33.64% (10 runs sampled)
RXJS x 4,135,462 ops/sec ±1.74% (11 runs sampled)
ReactiveProperty x 4,903,754 ops/sec ±21.16% (10 runs sampled)
MiniSignals x 4,445,676 ops/sec ±10.61% (10 runs sampled)
pull-pushable x 4,168,296 ops/sec ±4.89% (11 runs sampled)
signal-lite x 3,396,108 ops/sec ±15.58% (10 runs sampled)
barracks x 3,714,744 ops/sec ±37.85% (10 runs sampled)
EventEmitter3 x 3,039,377 ops/sec ±23.75% (10 runs sampled)
minivents x 2,594,367 ops/sec ±15.08% (10 runs sampled)
observable x 2,442,719 ops/sec ±10.55% (10 runs sampled)
d3-dispatch x 2,558,448 ops/sec ±16.24% (10 runs sampled)
observ x 2,112,280 ops/sec ±11.64% (10 runs sampled)
JS-Signals x 2,008,260 ops/sec ±8.37% (10 runs sampled)
dripEmitterEnhanced x 1,601,606 ops/sec ±16.66% (10 runs sampled)
signal-emitter x 899,994 ops/sec ±5.06% (11 runs sampled)
namespace-emitter x 945,361 ops/sec ±17.52% (10 runs sampled)
```

_Fastest is **MicroSignals, push-stream-patch, push-stream, mini-pipe, xstream**_

## emit one value - two listeners

```
Theoretical max x 11,165,580 ops/sec ±65.31% (10 runs sampled) *burn in*
MicroSignals x 4,348,002 ops/sec ±3.73% (10 runs sampled)
push-stream-patch x 4,151,897 ops/sec ±5.58% (11 runs sampled)
push-stream x 4,066,525 ops/sec ±7.87% (10 runs sampled)
MiniSignals x 3,881,610 ops/sec ±3.20% (11 runs sampled)
sister x 3,766,982 ops/sec ±5.51% (11 runs sampled)
xstream x 3,681,576 ops/sec ±14.69% (10 runs sampled)
event-signal x 3,233,252 ops/sec ±4.70% (10 runs sampled)
pull-notify x 2,558,311 ops/sec ±4.98% (10 runs sampled)
dripEmitter x 2,636,387 ops/sec ±12.33% (10 runs sampled)
ReactiveProperty x 2,405,026 ops/sec ±4.81% (11 runs sampled)
RXJS x 2,318,954 ops/sec ±4.56% (11 runs sampled)
evee x 2,393,285 ops/sec ±11.19% (10 runs sampled)
EventEmitter2 x 2,165,515 ops/sec ±10.99% (10 runs sampled)
EventEmitter3 x 1,792,344 ops/sec ±6.76% (11 runs sampled)
signal-lite x 1,726,406 ops/sec ±3.98% (11 runs sampled)
EventEmitter x 1,771,946 ops/sec ±13.28% (10 runs sampled)
d3-dispatch x 1,569,441 ops/sec ±3.08% (11 runs sampled)
observable x 1,533,870 ops/sec ±4.28% (11 runs sampled)
observ x 1,382,301 ops/sec ±5.08% (10 runs sampled)
minivents x 1,337,889 ops/sec ±3.23% (11 runs sampled)
JS-Signals x 1,286,798 ops/sec ±3.98% (11 runs sampled)
waddup x 1,243,458 ops/sec ±7.02% (10 runs sampled)
dripEmitterEnhanced x 1,280,558 ops/sec ±10.80% (10 runs sampled)
signal-emitter x 769,829 ops/sec ±1.54% (11 runs sampled)
namespace-emitter x 721,716 ops/sec ±10.10% (10 runs sampled)
```

_Fastest is **MicroSignals, push-stream-patch, push-stream, xstream**_

## emit one value - with context

```
Theoretical max x 5,314,774 ops/sec ±19.85% (10 runs sampled) *burn in*
MiniSignals x 3,951,138 ops/sec ±3.59% (11 runs sampled)
push-stream x 3,427,824 ops/sec ±5.17% (10 runs sampled)
MicroSignals x 3,285,895 ops/sec ±5.36% (10 runs sampled)
event-signal x 3,162,532 ops/sec ±2.21% (11 runs sampled)
sister x 3,089,302 ops/sec ±1.78% (11 runs sampled)
pull-notify x 2,258,101 ops/sec ±4.23% (11 runs sampled)
RXJS x 2,130,015 ops/sec ±2.85% (11 runs sampled)
ReactiveProperty x 2,047,178 ops/sec ±3.25% (11 runs sampled)
dripEmitter x 2,147,515 ops/sec ±10.65% (10 runs sampled)
signal-lite x 1,929,595 ops/sec ±2.42% (11 runs sampled)
EventEmitter3 x 1,904,837 ops/sec ±5.17% (11 runs sampled)
EventEmitter2 x 1,855,334 ops/sec ±10.84% (10 runs sampled)
EventEmitter x 1,464,747 ops/sec ±6.99% (10 runs sampled)
evee x 1,427,272 ops/sec ±9.33% (10 runs sampled)
JS-Signals x 1,321,279 ops/sec ±4.34% (11 runs sampled)
dripEmitterEnhanced x 1,191,402 ops/sec ±12.51% (10 runs sampled)
signal-emitter x 780,035 ops/sec ±3.86% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit variable number of values

```
Theoretical max x 1,726,477 ops/sec ±33.39% (10 runs sampled) *burn in*
MiniSignals x 632,805 ops/sec ±19.10% (10 runs sampled)
signal-lite x 442,418 ops/sec ±2.18% (11 runs sampled)
EventEmitter2 x 446,600 ops/sec ±9.25% (10 runs sampled)
EventEmitter3 x 399,526 ops/sec ±7.22% (11 runs sampled)
EventEmitter x 361,522 ops/sec ±6.57% (10 runs sampled)
JS-Signals x 294,256 ops/sec ±5.23% (11 runs sampled)
dripEmitterEnhanced x 277,030 ops/sec ±12.49% (10 runs sampled)
signal-emitter x 171,684 ops/sec ±3.49% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 81,097,612 ops/sec ±2.76% (11 runs sampled)
Theoretical max x 61,462,141 ops/sec ±3.72% (11 runs sampled) *burn in*
EventDispatcher x 43,528,737 ops/sec ±34.04% (10 runs sampled)
DripEmitter x 25,087,945 ops/sec ±3.73% (11 runs sampled)
MiniSignals x 30,372,992 ops/sec ±53.41% (10 runs sampled)
EventEmitter2 x 19,784,979 ops/sec ±2.32% (11 runs sampled)
JS-Signals x 18,924,509 ops/sec ±2.70% (10 runs sampled)
EventEmitter x 22,904,960 ops/sec ±35.97% (10 runs sampled)
pull-notify x 13,403,751 ops/sec ±2.11% (11 runs sampled)
DripEmitterEnhanced x 11,585,994 ops/sec ±20.75% (10 runs sampled)
push-stream x 11,147,258 ops/sec ±28.07% (10 runs sampled)
ReactiveProperty x 5,807,219 ops/sec ±15.02% (10 runs sampled)
```

_Fastest is **EventEmitter3**_
