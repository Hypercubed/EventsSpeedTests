# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 48, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 40, fail: 0, duration: 3ms]
- ✔ emit one object - two listeners [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one value - bound function [pass: 51, fail: 0, duration: 10ms]
- ✔ emit one value - many listeners [pass: 36, fail: 0, duration: 3ms]
- ✔ emit one value - one listener [pass: 52, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 69, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 48, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 8ms]

# Summary

- duration: 41ms
- planned: 500
- assertions: 500
- pass: 500
- fail: 0

# Comments

## Platform

Safari 9.1.1 on OS X 10.11.5 NODE_ENV = production BENCH = mid

## add and remove

```
dripEmitter x 7,891,866 ops/sec ±4.51% (15 runs sampled)
pushStream x 6,193,302 ops/sec ±5.16% (15 runs sampled)
EventDispatcher x 2,970,264 ops/sec ±13.05% (13 runs sampled)
MiniSignals x 2,624,283 ops/sec ±28.25% (12 runs sampled)
EventEmitter3 x 1,658,936 ops/sec ±7.77% (15 runs sampled)
ReactiveProperty x 1,300,413 ops/sec ±12.10% (13 runs sampled)
JS-Signals x 748,528 ops/sec ±7.32% (15 runs sampled)
dripEmitterEnhanced x 681,772 ops/sec ±7.64% (14 runs sampled)
EventEmitter x 661,470 ops/sec ±15.02% (14 runs sampled)
EventEmitter2 x 513,284 ops/sec ±10.09% (15 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 1,473,343 ops/sec ±33.45% (11 runs sampled) *burn in*
push-stream x 973,732 ops/sec ±7.22% (14 runs sampled)
MicroSignals x 971,541 ops/sec ±8.28% (14 runs sampled)
event-signal x 761,703 ops/sec ±5.18% (15 runs sampled)
RXJS x 636,191 ops/sec ±4.65% (15 runs sampled)
dripEmitter x 623,895 ops/sec ±10.35% (14 runs sampled)
ReactiveProperty x 590,426 ops/sec ±6.58% (14 runs sampled)
MiniSignals x 614,629 ops/sec ±15.20% (14 runs sampled)
EventEmitter2 x 560,176 ops/sec ±7.52% (14 runs sampled)
signal-lite x 500,602 ops/sec ±5.37% (15 runs sampled)
EventEmitter3 x 486,487 ops/sec ±8.14% (14 runs sampled)
EventEmitter x 414,050 ops/sec ±6.72% (14 runs sampled)
JS-Signals x 340,643 ops/sec ±3.36% (15 runs sampled)
dripEmitterEnhanced x 330,856 ops/sec ±11.42% (14 runs sampled)
pull-notify x 248,750 ops/sec ±6.08% (15 runs sampled)
signal-emitter x 211,974 ops/sec ±7.20% (15 runs sampled)
```

_Fastest is **push-stream, MicroSignals**_

## emit many values - two listeners

```
Theoretical max x 6,372,165 ops/sec ±23.78% (13 runs sampled) *burn in*
MiniSignals x 3,760,761 ops/sec ±3.97% (14 runs sampled)
signal-lite x 1,308,420 ops/sec ±5.29% (15 runs sampled)
EventEmitter2 x 1,307,840 ops/sec ±10.86% (14 runs sampled)
EventEmitter x 1,189,568 ops/sec ±7.54% (14 runs sampled)
EventEmitter3 x 1,032,658 ops/sec ±7.12% (14 runs sampled)
JS-Signals x 922,914 ops/sec ±4.43% (14 runs sampled)
minivents x 848,618 ops/sec ±4.34% (15 runs sampled)
dripEmitterEnhanced x 805,625 ops/sec ±10.22% (13 runs sampled)
signal-emitter x 467,058 ops/sec ±5.96% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 2,646,903 ops/sec ±26.82% (11 runs sampled) *burn in*
push-stream x 1,630,403 ops/sec ±4.99% (15 runs sampled)
mini-pipe x 1,599,512 ops/sec ±3.89% (15 runs sampled)
xstream x 1,402,422 ops/sec ±4.29% (12 runs sampled)
dripEmitter x 948,593 ops/sec ±10.96% (14 runs sampled)
EventDispatcher x 912,574 ops/sec ±6.99% (14 runs sampled)
EventEmitter x 910,863 ops/sec ±8.77% (14 runs sampled)
EventEmitter2 x 881,106 ops/sec ±9.46% (14 runs sampled)
MicroSignals x 770,998 ops/sec ±4.84% (14 runs sampled)
pull-pushable x 782,290 ops/sec ±6.95% (14 runs sampled)
signal-lite x 763,030 ops/sec ±4.48% (15 runs sampled)
event-signal x 713,907 ops/sec ±13.61% (14 runs sampled)
RXJS x 668,417 ops/sec ±14.65% (13 runs sampled)
ReactiveProperty x 601,899 ops/sec ±5.92% (14 runs sampled)
EventEmitter3 x 586,071 ops/sec ±7.17% (14 runs sampled)
MiniSignals x 577,834 ops/sec ±13.93% (13 runs sampled)
pull-notify x 381,056 ops/sec ±9.09% (14 runs sampled)
dripEmitterEnhanced x 382,801 ops/sec ±11.71% (13 runs sampled)
JS-Signals x 239,145 ops/sec ±3.52% (15 runs sampled)
signal-emitter x 121,699 ops/sec ±8.01% (15 runs sampled)
```

_Fastest is **push-stream, mini-pipe**_

## emit one object - two listeners

```
Theoretical max x 1,297,144 ops/sec ±16.10% (12 runs sampled) *burn in*
MicroSignals x 999,710 ops/sec ±3.09% (15 runs sampled)
MiniSignals x 971,036 ops/sec ±4.57% (14 runs sampled)
push-stream x 968,904 ops/sec ±5.14% (15 runs sampled)
xstream x 937,508 ops/sec ±8.71% (14 runs sampled)
event-signal x 767,206 ops/sec ±3.19% (15 runs sampled)
ReactiveProperty x 786,441 ops/sec ±6.70% (14 runs sampled)
dripEmitter x 702,454 ops/sec ±8.86% (13 runs sampled)
EventDispatcher x 664,980 ops/sec ±6.82% (14 runs sampled)
RXJS x 636,593 ops/sec ±4.27% (15 runs sampled)
EventEmitter2 x 539,325 ops/sec ±6.83% (14 runs sampled)
EventEmitter3 x 521,072 ops/sec ±7.82% (14 runs sampled)
signal-lite x 498,331 ops/sec ±3.88% (15 runs sampled)
EventEmitter x 408,540 ops/sec ±3.72% (14 runs sampled)
JS-Signals x 363,341 ops/sec ±5.49% (15 runs sampled)
dripEmitterEnhanced x 338,548 ops/sec ±8.40% (14 runs sampled)
pull-notify x 254,922 ops/sec ±5.27% (15 runs sampled)
signal-emitter x 220,488 ops/sec ±3.64% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, push-stream, xstream**_

## emit one value - bound function

```
Theoretical max x 4,572,695 ops/sec ±14.70% (13 runs sampled) *burn in*
MiniSignals x 3,396,540 ops/sec ±6.41% (14 runs sampled)
MicroSignals x 3,306,118 ops/sec ±6.58% (14 runs sampled)
push-stream x 3,175,463 ops/sec ±3.97% (14 runs sampled)
xstream x 2,613,367 ops/sec ±15.10% (13 runs sampled)
event-signal x 2,182,785 ops/sec ±5.67% (15 runs sampled)
dripEmitter x 2,082,927 ops/sec ±9.69% (14 runs sampled)
RXJS x 1,987,759 ops/sec ±5.36% (14 runs sampled)
ReactiveProperty x 1,919,739 ops/sec ±4.02% (15 runs sampled)
signal-lite x 1,558,389 ops/sec ±7.60% (14 runs sampled)
EventEmitter x 1,474,140 ops/sec ±6.56% (14 runs sampled)
EventEmitter3 x 1,343,536 ops/sec ±7.91% (15 runs sampled)
JS-Signals x 1,166,022 ops/sec ±5.74% (15 runs sampled)
EventEmitter2 x 1,290,486 ops/sec ±19.21% (13 runs sampled)
dripEmitterEnhanced x 1,065,224 ops/sec ±13.87% (13 runs sampled)
pull-notify x 717,736 ops/sec ±8.32% (14 runs sampled)
signal-emitter x 663,789 ops/sec ±7.20% (15 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one value - many listeners

```
Theoretical max x 1,489,311 ops/sec ±21.10% (11 runs sampled) *burn in*
MicroSignal x 1,023,056 ops/sec ±3.87% (15 runs sampled)
push-stream x 988,770 ops/sec ±2.47% (15 runs sampled)
xstream x 960,647 ops/sec ±5.75% (14 runs sampled)
MiniSignals x 880,075 ops/sec ±6.94% (14 runs sampled)
event-signal x 856,598 ops/sec ±4.55% (15 runs sampled)
dripEmitter x 815,884 ops/sec ±10.57% (14 runs sampled)
ReactiveProperty x 785,920 ops/sec ±6.57% (15 runs sampled)
EventEmitter2 x 778,857 ops/sec ±5.89% (14 runs sampled)
EventEmitter3 x 768,036 ops/sec ±5.88% (14 runs sampled)
RXJS x 616,190 ops/sec ±3.25% (15 runs sampled)
EventEmitter x 613,833 ops/sec ±4.46% (14 runs sampled)
signal-lite x 541,100 ops/sec ±4.28% (15 runs sampled)
dripEmitterEnhanced x 532,906 ops/sec ±11.05% (13 runs sampled)
JS-Signals x 453,098 ops/sec ±5.46% (15 runs sampled)
signal-emitter x 430,180 ops/sec ±3.91% (15 runs sampled)
minivents x 355,403 ops/sec ±2.78% (15 runs sampled)
pull-notify x 207,966 ops/sec ±3.30% (15 runs sampled)
```

_Fastest is **MicroSignal, push-stream, xstream**_

## emit one value - one listener

```
MicroSignals x 30,951,700 ops/sec ±39.80% (10 runs sampled)
push-stream x 29,304,158 ops/sec ±32.50% (11 runs sampled)
push-stream-patch x 27,696,636 ops/sec ±37.57% (10 runs sampled)
xstream x 20,898,047 ops/sec ±71.31% (10 runs sampled)
Theoretical max x 18,209,466 ops/sec ±52.68% (11 runs sampled) *burn in*
mini-pipe x 20,231,259 ops/sec ±73.52% (10 runs sampled)
EventEmitter x 5,723,523 ops/sec ±28.20% (12 runs sampled)
event-signal x 5,473,157 ops/sec ±23.38% (12 runs sampled)
dripEmitter x 5,848,769 ops/sec ±33.77% (11 runs sampled)
EventEmitter2 x 5,069,577 ops/sec ±34.32% (11 runs sampled)
MiniSignals x 4,036,668 ops/sec ±10.64% (12 runs sampled)
RXJS x 3,744,251 ops/sec ±2.72% (16 runs sampled)
ReactiveProperty x 3,941,452 ops/sec ±20.75% (12 runs sampled)
signal-lite x 2,956,061 ops/sec ±15.28% (13 runs sampled)
EventEmitter3 x 2,922,291 ops/sec ±15.59% (13 runs sampled)
barracks x 3,330,334 ops/sec ±33.22% (11 runs sampled)
pull-pushable x 2,532,807 ops/sec ±6.09% (13 runs sampled)
d3-dispatch x 2,307,982 ops/sec ±12.03% (13 runs sampled)
minivents x 2,170,586 ops/sec ±11.03% (14 runs sampled)
observable x 1,984,749 ops/sec ±11.14% (14 runs sampled)
observ x 1,870,244 ops/sec ±8.30% (13 runs sampled)
JS-Signals x 1,786,626 ops/sec ±8.70% (14 runs sampled)
pull-notify x 1,499,192 ops/sec ±6.50% (14 runs sampled)
dripEmitterEnhanced x 1,432,063 ops/sec ±17.41% (13 runs sampled)
namespace-emitter x 771,180 ops/sec ±11.79% (13 runs sampled)
signal-emitter x 694,780 ops/sec ±8.21% (14 runs sampled)
```

_Fastest is **MicroSignals, push-stream, push-stream-patch, xstream, mini-pipe**_

## emit one value - two listeners

```
Theoretical max x 7,352,628 ops/sec ±44.51% (11 runs sampled) *burn in*
push-stream x 3,991,532 ops/sec ±3.29% (14 runs sampled)
MicroSignals x 3,691,612 ops/sec ±7.32% (14 runs sampled)
push-stream-patch x 3,635,778 ops/sec ±6.89% (13 runs sampled)
MiniSignals x 3,471,686 ops/sec ±2.51% (15 runs sampled)
event-signal x 2,911,152 ops/sec ±6.33% (13 runs sampled)
xstream x 3,030,976 ops/sec ±12.64% (13 runs sampled)
dripEmitter x 2,368,586 ops/sec ±9.71% (13 runs sampled)
ReactiveProperty x 2,226,064 ops/sec ±4.86% (15 runs sampled)
RXJS x 2,128,133 ops/sec ±4.35% (15 runs sampled)
EventEmitter2 x 2,002,121 ops/sec ±7.20% (13 runs sampled)
EventEmitter3 x 1,791,802 ops/sec ±6.47% (14 runs sampled)
signal-lite x 1,667,668 ops/sec ±2.92% (14 runs sampled)
EventEmitter x 1,550,824 ops/sec ±14.55% (13 runs sampled)
d3-dispatch x 1,421,648 ops/sec ±5.24% (14 runs sampled)
observable x 1,388,475 ops/sec ±5.28% (14 runs sampled)
observ x 1,327,731 ops/sec ±2.91% (15 runs sampled)
minivents x 1,225,332 ops/sec ±3.34% (14 runs sampled)
JS-Signals x 1,168,240 ops/sec ±3.82% (15 runs sampled)
dripEmitterEnhanced x 1,038,062 ops/sec ±11.64% (13 runs sampled)
pull-notify x 810,896 ops/sec ±3.99% (14 runs sampled)
namespace-emitter x 690,352 ops/sec ±8.10% (14 runs sampled)
signal-emitter x 674,654 ops/sec ±6.67% (14 runs sampled)
```

_Fastest is **push-stream, MicroSignals**_

## emit one value - with context

```
Theoretical max x 4,192,005 ops/sec ±13.58% (13 runs sampled) *burn in*
push-stream x 3,196,537 ops/sec ±4.41% (15 runs sampled)
dripEmitter x 2,022,880 ops/sec ±9.38% (13 runs sampled)
MiniSignals x 1,935,336 ops/sec ±6.41% (14 runs sampled)
EventEmitter2 x 1,847,606 ops/sec ±6.50% (14 runs sampled)
event-signal x 1,754,059 ops/sec ±4.89% (14 runs sampled)
EventEmitter3 x 1,778,462 ops/sec ±6.59% (15 runs sampled)
RXJS x 1,574,155 ops/sec ±8.09% (14 runs sampled)
EventEmitter x 1,411,848 ops/sec ±7.14% (14 runs sampled)
MicroSignals x 1,328,559 ops/sec ±5.28% (13 runs sampled)
signal-lite x 1,228,443 ops/sec ±11.59% (14 runs sampled)
ReactiveProperty x 1,110,421 ops/sec ±17.52% (13 runs sampled)
dripEmitterEnhanced x 977,021 ops/sec ±13.78% (13 runs sampled)
JS-Signals x 634,514 ops/sec ±9.55% (14 runs sampled)
pull-notify x 392,766 ops/sec ±3.50% (15 runs sampled)
signal-emitter x 375,768 ops/sec ±9.34% (14 runs sampled)
```

_Fastest is **push-stream**_

## emit variable number of values

```
Theoretical max x 995,761 ops/sec ±22.81% (12 runs sampled) *burn in*
MiniSignals x 418,139 ops/sec ±13.47% (14 runs sampled)
EventEmitter2 x 300,446 ops/sec ±6.40% (13 runs sampled)
signal-lite x 291,400 ops/sec ±8.18% (13 runs sampled)
EventEmitter x 268,881 ops/sec ±6.27% (14 runs sampled)
EventEmitter3 x 272,026 ops/sec ±10.59% (13 runs sampled)
JS-Signals x 195,023 ops/sec ±5.07% (15 runs sampled)
dripEmitterEnhanced x 155,118 ops/sec ±11.24% (13 runs sampled)
signal-emitter x 103,209 ops/sec ±5.34% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 57,257,700 ops/sec ±2.40% (14 runs sampled)
Theoretical max x 45,512,305 ops/sec ±7.17% (14 runs sampled) *burn in*
EventDispatcher x 28,567,696 ops/sec ±31.17% (12 runs sampled)
DripEmitter x 18,416,836 ops/sec ±3.03% (14 runs sampled)
MiniSignals x 23,178,892 ops/sec ±58.36% (10 runs sampled)
JS-Signals x 14,410,744 ops/sec ±1.12% (15 runs sampled)
EventEmitter2 x 13,428,672 ops/sec ±3.23% (15 runs sampled)
pull-notify x 11,987,899 ops/sec ±2.94% (15 runs sampled)
EventEmitter x 13,313,503 ops/sec ±27.70% (12 runs sampled)
DripEmitterEnhanced x 7,660,520 ops/sec ±18.38% (13 runs sampled)
push-stream x 7,841,340 ops/sec ±24.04% (12 runs sampled)
ReactiveProperty x 3,858,670 ops/sec ±13.22% (13 runs sampled)
```

_Fastest is **EventEmitter3**_
