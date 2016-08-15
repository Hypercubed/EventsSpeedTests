# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 2ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 7ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 3ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 9ms]

# Summary

- duration: 36ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Safari 9.1.1 on OS X 10.11.5 NODE_ENV = undefined BENCH = undefined

## add and remove

```
dripEmitter x 6,374,724 ops/sec ±4.88% (14 runs sampled)
pushStream x 5,274,306 ops/sec ±5.49% (15 runs sampled)
MiniSignals x 3,201,266 ops/sec ±19.20% (12 runs sampled)
EventDispatcher x 2,895,920 ops/sec ±10.98% (14 runs sampled)
ReactiveProperty x 1,216,273 ops/sec ±12.14% (13 runs sampled)
EventEmitter3 x 1,077,783 ops/sec ±14.99% (14 runs sampled)
JS-Signals x 795,196 ops/sec ±8.28% (14 runs sampled)
dripEmitterEnhanced x 644,237 ops/sec ±4.93% (15 runs sampled)
EventEmitter x 673,666 ops/sec ±13.75% (15 runs sampled)
EventEmitter2 x 454,666 ops/sec ±7.57% (14 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 1,398,306 ops/sec ±33.31% (11 runs sampled) *burn in*
push-stream x 960,366 ops/sec ±6.58% (14 runs sampled)
sister x 923,787 ops/sec ±3.80% (15 runs sampled)
MicroSignals x 929,732 ops/sec ±4.55% (15 runs sampled)
event-signal x 760,427 ops/sec ±4.27% (15 runs sampled)
MiniSignals x 681,945 ops/sec ±12.70% (15 runs sampled)
pull-notify x 602,481 ops/sec ±5.59% (15 runs sampled)
ReactiveProperty x 511,395 ops/sec ±6.71% (14 runs sampled)
dripEmitter x 560,612 ops/sec ±26.38% (12 runs sampled)
signal-lite x 455,183 ops/sec ±3.77% (15 runs sampled)
RXJS x 459,766 ops/sec ±5.85% (15 runs sampled)
EventEmitter3 x 450,137 ops/sec ±8.73% (14 runs sampled)
EventEmitter x 428,321 ops/sec ±5.57% (14 runs sampled)
EventEmitter2 x 449,858 ops/sec ±29.61% (14 runs sampled)
evee x 352,905 ops/sec ±7.36% (14 runs sampled)
JS-Signals x 321,433 ops/sec ±4.53% (15 runs sampled)
dripEmitterEnhanced x 253,478 ops/sec ±10.83% (13 runs sampled)
signal-emitter x 217,701 ops/sec ±3.59% (15 runs sampled)
```

_Fastest is **push-stream, sister, MicroSignals**_

## emit many values - two listeners

```
Theoretical max x 4,837,783 ops/sec ±24.07% (12 runs sampled) *burn in*
MiniSignals x 1,709,311 ops/sec ±18.53% (15 runs sampled)
signal-lite x 1,142,162 ops/sec ±4.40% (15 runs sampled)
EventEmitter x 1,101,944 ops/sec ±9.24% (13 runs sampled)
EventEmitter2 x 1,119,731 ops/sec ±13.40% (13 runs sampled)
EventEmitter3 x 939,526 ops/sec ±7.98% (14 runs sampled)
minivents x 842,314 ops/sec ±3.30% (15 runs sampled)
JS-Signals x 825,644 ops/sec ±5.61% (14 runs sampled)
dripEmitterEnhanced x 718,241 ops/sec ±10.34% (13 runs sampled)
signal-emitter x 441,694 ops/sec ±3.74% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 2,107,760 ops/sec ±23.30% (12 runs sampled) *burn in*
mini-pipe x 1,410,822 ops/sec ±3.90% (15 runs sampled)
xstream x 1,397,196 ops/sec ±6.31% (14 runs sampled)
MicroSignals x 1,324,781 ops/sec ±7.87% (14 runs sampled)
push-stream x 1,240,451 ops/sec ±5.47% (14 runs sampled)
sister x 1,181,864 ops/sec ±5.84% (15 runs sampled)
pull-notify x 1,130,172 ops/sec ±4.46% (14 runs sampled)
pull-pushable x 1,107,240 ops/sec ±4.16% (15 runs sampled)
event-signal x 1,043,601 ops/sec ±4.54% (15 runs sampled)
MiniSignals x 1,052,053 ops/sec ±14.07% (15 runs sampled)
ReactiveProperty x 951,634 ops/sec ±9.57% (14 runs sampled)
EventDispatcher x 914,816 ops/sec ±9.03% (14 runs sampled)
RXJS x 848,051 ops/sec ±8.34% (14 runs sampled)
dripEmitter x 879,939 ops/sec ±12.78% (13 runs sampled)
EventEmitter x 782,882 ops/sec ±9.16% (14 runs sampled)
signal-lite x 718,721 ops/sec ±9.92% (14 runs sampled)
EventEmitter2 x 666,179 ops/sec ±14.06% (13 runs sampled)
JS-Signals x 430,863 ops/sec ±6.91% (15 runs sampled)
evee x 432,349 ops/sec ±9.17% (14 runs sampled)
EventEmitter3 x 445,225 ops/sec ±14.67% (14 runs sampled)
dripEmitterEnhanced x 379,662 ops/sec ±10.27% (14 runs sampled)
signal-emitter x 252,989 ops/sec ±2.79% (15 runs sampled)
```

_Fastest is **mini-pipe, xstream, MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 1,254,840 ops/sec ±26.04% (12 runs sampled) *burn in*
push-stream x 1,012,554 ops/sec ±4.15% (15 runs sampled)
sister x 879,230 ops/sec ±4.41% (15 runs sampled)
xstream x 838,621 ops/sec ±6.57% (15 runs sampled)
event-signal x 772,708 ops/sec ±4.09% (14 runs sampled)
ReactiveProperty x 733,177 ops/sec ±9.18% (14 runs sampled)
EventDispatcher x 737,103 ops/sec ±10.09% (13 runs sampled)
MiniSignals x 697,707 ops/sec ±14.36% (15 runs sampled)
RXJS x 615,769 ops/sec ±5.57% (15 runs sampled)
MicroSignals x 656,060 ops/sec ±14.04% (13 runs sampled)
pull-notify x 583,693 ops/sec ±3.55% (15 runs sampled)
dripEmitter x 563,832 ops/sec ±14.35% (13 runs sampled)
EventEmitter2 x 549,478 ops/sec ±12.59% (13 runs sampled)
signal-lite x 487,575 ops/sec ±5.36% (15 runs sampled)
EventEmitter3 x 472,398 ops/sec ±5.33% (14 runs sampled)
EventEmitter x 419,225 ops/sec ±2.32% (14 runs sampled)
JS-Signals x 357,048 ops/sec ±6.66% (14 runs sampled)
dripEmitterEnhanced x 338,889 ops/sec ±10.47% (14 runs sampled)
evee x 308,912 ops/sec ±11.26% (13 runs sampled)
signal-emitter x 228,365 ops/sec ±3.90% (15 runs sampled)
```

_Fastest is **push-stream**_

## emit one random value - one listener

```
push-stream x 20,838,247 ops/sec ±33.63% (11 runs sampled)
push-stream-patch x 19,885,647 ops/sec ±37.11% (11 runs sampled)
MicroSignals x 19,379,177 ops/sec ±37.74% (11 runs sampled)
mini-pipe x 15,517,744 ops/sec ±56.92% (10 runs sampled)
Theoretical max x 12,953,642 ops/sec ±53.25% (11 runs sampled) *burn in*
xstream x 11,951,788 ops/sec ±59.84% (10 runs sampled)
event-signal x 5,589,622 ops/sec ±27.26% (12 runs sampled)
pull-notify x 5,582,526 ops/sec ±35.07% (11 runs sampled)
dripEmitter x 5,630,508 ops/sec ±36.26% (11 runs sampled)
EventEmitter x 4,425,939 ops/sec ±22.76% (12 runs sampled)
RXJS x 3,787,435 ops/sec ±5.99% (15 runs sampled)
EventEmitter2 x 4,610,552 ops/sec ±38.50% (11 runs sampled)
pull-pushable x 3,440,704 ops/sec ±5.48% (13 runs sampled)
ReactiveProperty x 3,624,693 ops/sec ±22.31% (12 runs sampled)
MiniSignals x 3,282,135 ops/sec ±17.71% (12 runs sampled)
signal-lite x 2,521,904 ops/sec ±18.04% (13 runs sampled)
EventEmitter3 x 2,291,597 ops/sec ±11.14% (13 runs sampled)
barracks x 2,549,618 ops/sec ±27.51% (11 runs sampled)
minivents x 2,079,756 ops/sec ±10.20% (14 runs sampled)
d3-dispatch x 1,885,340 ops/sec ±9.28% (14 runs sampled)
observable x 1,920,041 ops/sec ±12.14% (13 runs sampled)
observ x 1,818,352 ops/sec ±9.81% (14 runs sampled)
JS-Signals x 1,571,122 ops/sec ±13.14% (13 runs sampled)
dripEmitterEnhanced x 1,415,177 ops/sec ±14.25% (13 runs sampled)
evee x 1,378,073 ops/sec ±11.97% (13 runs sampled)
signal-emitter x 757,241 ops/sec ±5.99% (15 runs sampled)
namespace-emitter x 756,056 ops/sec ±10.58% (14 runs sampled)
```

_Fastest is **push-stream, push-stream-patch, MicroSignals, mini-pipe, xstream**_

## emit one random value - two listeners

```
Theoretical max x 6,796,086 ops/sec ±45.19% (11 runs sampled) *burn in*
push-stream x 4,157,125 ops/sec ±2.99% (15 runs sampled)
MicroSignals x 3,702,425 ops/sec ±4.31% (14 runs sampled)
push-stream-patch x 3,852,411 ops/sec ±11.93% (13 runs sampled)
xstream x 3,448,196 ops/sec ±13.46% (13 runs sampled)
event-signal x 2,981,153 ops/sec ±5.35% (14 runs sampled)
pull-notify x 2,205,869 ops/sec ±3.68% (14 runs sampled)
MiniSignals x 2,194,090 ops/sec ±15.43% (15 runs sampled)
RXJS x 2,013,550 ops/sec ±6.07% (15 runs sampled)
dripEmitter x 2,088,733 ops/sec ±11.34% (13 runs sampled)
ReactiveProperty x 1,921,280 ops/sec ±6.33% (15 runs sampled)
EventEmitter2 x 1,756,336 ops/sec ±7.44% (14 runs sampled)
EventEmitter3 x 1,615,129 ops/sec ±7.35% (14 runs sampled)
signal-lite x 1,544,924 ops/sec ±7.45% (14 runs sampled)
EventEmitter x 1,405,479 ops/sec ±8.21% (13 runs sampled)
d3-dispatch x 1,357,282 ops/sec ±9.54% (14 runs sampled)
observ x 1,195,771 ops/sec ±4.51% (15 runs sampled)
observable x 1,233,139 ops/sec ±7.96% (14 runs sampled)
minivents x 1,163,629 ops/sec ±3.45% (14 runs sampled)
waddup x 1,184,931 ops/sec ±6.73% (14 runs sampled)
dripEmitterEnhanced x 1,091,907 ops/sec ±9.19% (13 runs sampled)
JS-Signals x 1,023,987 ops/sec ±6.18% (14 runs sampled)
evee x 1,017,434 ops/sec ±7.86% (14 runs sampled)
namespace-emitter x 555,840 ops/sec ±3.07% (15 runs sampled)
signal-emitter x 562,817 ops/sec ±10.22% (15 runs sampled)
```

_Fastest is **push-stream, push-stream-patch**_

## emit one value - bound function

```
Theoretical max x 4,574,966 ops/sec ±21.93% (12 runs sampled) *burn in*
MicroSignals x 3,009,024 ops/sec ±5.40% (14 runs sampled)
MiniSignals x 2,900,245 ops/sec ±8.57% (15 runs sampled)
push-stream x 2,695,144 ops/sec ±6.19% (14 runs sampled)
event-signal x 2,527,660 ops/sec ±3.33% (15 runs sampled)
xstream x 2,423,588 ops/sec ±8.88% (14 runs sampled)
pull-notify x 2,039,306 ops/sec ±3.42% (15 runs sampled)
dripEmitter x 1,970,986 ops/sec ±10.58% (13 runs sampled)
RXJS x 1,867,567 ops/sec ±5.43% (15 runs sampled)
ReactiveProperty x 1,864,181 ops/sec ±5.56% (15 runs sampled)
signal-lite x 1,649,408 ops/sec ±4.71% (15 runs sampled)
EventEmitter2 x 1,615,874 ops/sec ±4.60% (14 runs sampled)
EventEmitter3 x 1,439,748 ops/sec ±3.62% (14 runs sampled)
EventEmitter x 1,275,374 ops/sec ±6.21% (14 runs sampled)
JS-Signals x 1,119,216 ops/sec ±3.06% (15 runs sampled)
dripEmitterEnhanced x 908,989 ops/sec ±13.71% (14 runs sampled)
evee x 854,314 ops/sec ±7.63% (14 runs sampled)
signal-emitter x 702,710 ops/sec ±4.40% (15 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one value - many listeners

```
Theoretical max x 1,806,380 ops/sec ±31.25% (10 runs sampled) *burn in*
MiniSignals x 932,277 ops/sec ±5.41% (15 runs sampled)
event-signal x 814,642 ops/sec ±4.67% (15 runs sampled)
MicroSignal x 828,156 ops/sec ±9.07% (13 runs sampled)
push-stream x 782,679 ops/sec ±6.88% (13 runs sampled)
xstream x 804,604 ops/sec ±14.35% (14 runs sampled)
EventEmitter2 x 712,217 ops/sec ±7.65% (14 runs sampled)
EventEmitter x 593,646 ops/sec ±5.35% (14 runs sampled)
dripEmitter x 603,057 ops/sec ±9.30% (13 runs sampled)
EventEmitter3 x 583,949 ops/sec ±16.57% (13 runs sampled)
pull-notify x 516,714 ops/sec ±3.56% (15 runs sampled)
RXJS x 515,583 ops/sec ±5.51% (14 runs sampled)
signal-lite x 509,634 ops/sec ±5.27% (15 runs sampled)
ReactiveProperty x 551,890 ops/sec ±15.85% (13 runs sampled)
evee x 434,474 ops/sec ±4.36% (15 runs sampled)
JS-Signals x 397,078 ops/sec ±4.68% (14 runs sampled)
signal-emitter x 392,423 ops/sec ±5.41% (15 runs sampled)
dripEmitterEnhanced x 405,172 ops/sec ±18.48% (14 runs sampled)
minivents x 320,639 ops/sec ±5.40% (14 runs sampled)
```

_Fastest is **MiniSignals, xstream**_

## emit one value - one listener

```
push-stream-patch x 29,778,417 ops/sec ±35.39% (11 runs sampled)
push-stream x 28,808,051 ops/sec ±35.59% (10 runs sampled)
MicroSignals x 27,074,196 ops/sec ±32.43% (10 runs sampled)
Theoretical max x 22,254,145 ops/sec ±62.65% (10 runs sampled) *burn in*
mini-pipe x 22,447,318 ops/sec ±71.97% (10 runs sampled)
sister x 15,821,326 ops/sec ±23.21% (12 runs sampled)
xstream x 12,095,616 ops/sec ±70.61% (10 runs sampled)
event-signal x 5,830,524 ops/sec ±23.34% (12 runs sampled)
pull-notify x 5,552,403 ops/sec ±29.25% (11 runs sampled)
EventEmitter x 5,519,818 ops/sec ±32.54% (12 runs sampled)
dripEmitter x 5,131,977 ops/sec ±35.38% (11 runs sampled)
RXJS x 3,768,095 ops/sec ±3.22% (15 runs sampled)
ReactiveProperty x 4,182,489 ops/sec ±19.80% (13 runs sampled)
MiniSignals x 3,927,367 ops/sec ±12.53% (11 runs sampled)
pull-pushable x 3,270,404 ops/sec ±4.75% (13 runs sampled)
EventEmitter2 x 4,187,845 ops/sec ±34.77% (11 runs sampled)
barracks x 3,129,810 ops/sec ±33.74% (11 runs sampled)
signal-lite x 2,634,788 ops/sec ±15.17% (13 runs sampled)
EventEmitter3 x 2,506,502 ops/sec ±14.29% (13 runs sampled)
d3-dispatch x 2,320,661 ops/sec ±12.08% (13 runs sampled)
observable x 2,022,561 ops/sec ±11.15% (14 runs sampled)
JS-Signals x 1,786,739 ops/sec ±6.45% (14 runs sampled)
observ x 1,768,237 ops/sec ±7.82% (14 runs sampled)
minivents x 1,838,643 ops/sec ±15.02% (13 runs sampled)
dripEmitterEnhanced x 1,479,091 ops/sec ±15.63% (13 runs sampled)
evee x 1,199,960 ops/sec ±9.19% (13 runs sampled)
namespace-emitter x 798,669 ops/sec ±11.02% (13 runs sampled)
signal-emitter x 623,047 ops/sec ±5.62% (15 runs sampled)
```

_Fastest is **push-stream-patch, push-stream, MicroSignals, mini-pipe, xstream**_

## emit one value - two listeners

```
Theoretical max x 8,029,216 ops/sec ±54.22% (10 runs sampled) *burn in*
push-stream-patch x 3,561,282 ops/sec ±9.45% (13 runs sampled)
MicroSignals x 3,152,236 ops/sec ±4.44% (14 runs sampled)
sister x 2,979,271 ops/sec ±4.51% (15 runs sampled)
push-stream x 2,978,464 ops/sec ±10.60% (14 runs sampled)
MiniSignals x 2,829,102 ops/sec ±7.31% (15 runs sampled)
event-signal x 2,556,626 ops/sec ±4.64% (14 runs sampled)
xstream x 2,562,800 ops/sec ±12.11% (13 runs sampled)
pull-notify x 1,969,496 ops/sec ±3.96% (14 runs sampled)
dripEmitter x 1,971,992 ops/sec ±12.87% (13 runs sampled)
ReactiveProperty x 1,733,931 ops/sec ±8.17% (14 runs sampled)
EventEmitter2 x 1,654,996 ops/sec ±8.65% (13 runs sampled)
EventEmitter3 x 1,558,657 ops/sec ±8.77% (14 runs sampled)
signal-lite x 1,343,145 ops/sec ±5.63% (14 runs sampled)
RXJS x 1,347,420 ops/sec ±7.77% (14 runs sampled)
EventEmitter x 1,337,690 ops/sec ±11.46% (13 runs sampled)
d3-dispatch x 1,162,783 ops/sec ±5.17% (15 runs sampled)
waddup x 1,121,843 ops/sec ±4.08% (14 runs sampled)
evee x 1,089,836 ops/sec ±2.28% (15 runs sampled)
minivents x 1,002,759 ops/sec ±4.50% (14 runs sampled)
observable x 1,057,239 ops/sec ±10.45% (15 runs sampled)
observ x 1,011,291 ops/sec ±6.38% (14 runs sampled)
JS-Signals x 888,114 ops/sec ±2.42% (14 runs sampled)
dripEmitterEnhanced x 716,273 ops/sec ±7.27% (14 runs sampled)
signal-emitter x 600,220 ops/sec ±2.57% (15 runs sampled)
namespace-emitter x 562,171 ops/sec ±6.13% (13 runs sampled)
```

_Fastest is **push-stream-patch**_

## emit one value - with context

```
MiniSignals x 3,697,964 ops/sec ±3.99% (15 runs sampled)
Theoretical max x 3,581,775 ops/sec ±24.55% (12 runs sampled) *burn in*
event-signal x 2,926,272 ops/sec ±3.64% (14 runs sampled)
MicroSignals x 2,734,251 ops/sec ±6.26% (15 runs sampled)
sister x 2,434,204 ops/sec ±10.49% (14 runs sampled)
push-stream x 2,466,453 ops/sec ±12.81% (14 runs sampled)
pull-notify x 2,064,250 ops/sec ±4.10% (14 runs sampled)
signal-lite x 1,731,897 ops/sec ±4.10% (14 runs sampled)
dripEmitter x 1,693,950 ops/sec ±9.23% (13 runs sampled)
RXJS x 1,426,663 ops/sec ±5.64% (15 runs sampled)
ReactiveProperty x 1,357,282 ops/sec ±11.55% (14 runs sampled)
EventEmitter3 x 1,286,129 ops/sec ±6.56% (14 runs sampled)
EventEmitter2 x 1,239,744 ops/sec ±13.88% (13 runs sampled)
JS-Signals x 1,086,545 ops/sec ±4.93% (14 runs sampled)
EventEmitter x 984,742 ops/sec ±18.38% (12 runs sampled)
evee x 821,500 ops/sec ±6.09% (14 runs sampled)
dripEmitterEnhanced x 791,794 ops/sec ±7.11% (14 runs sampled)
signal-emitter x 732,706 ops/sec ±4.49% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit variable number of values

```
Theoretical max x 1,733,680 ops/sec ±33.38% (12 runs sampled) *burn in*
MiniSignals x 584,255 ops/sec ±17.60% (13 runs sampled)
signal-lite x 395,179 ops/sec ±3.07% (13 runs sampled)
EventEmitter2 x 415,910 ops/sec ±10.06% (14 runs sampled)
EventEmitter x 325,642 ops/sec ±6.90% (14 runs sampled)
JS-Signals x 276,814 ops/sec ±3.87% (15 runs sampled)
EventEmitter3 x 270,472 ops/sec ±23.60% (12 runs sampled)
dripEmitterEnhanced x 217,551 ops/sec ±13.20% (13 runs sampled)
signal-emitter x 143,305 ops/sec ±7.09% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 70,479,280 ops/sec ±5.01% (14 runs sampled)
Theoretical max x 54,021,816 ops/sec ±5.55% (15 runs sampled) *burn in*
EventDispatcher x 40,820,029 ops/sec ±28.96% (12 runs sampled)
DripEmitter x 22,308,709 ops/sec ±5.06% (14 runs sampled)
MiniSignals x 26,913,649 ops/sec ±51.16% (11 runs sampled)
JS-Signals x 18,099,270 ops/sec ±2.97% (16 runs sampled)
EventEmitter2 x 17,970,818 ops/sec ±2.76% (15 runs sampled)
EventEmitter x 21,213,981 ops/sec ±37.21% (11 runs sampled)
pull-notify x 12,400,631 ops/sec ±2.15% (15 runs sampled)
push-stream x 10,097,046 ops/sec ±24.18% (12 runs sampled)
DripEmitterEnhanced x 8,929,339 ops/sec ±17.46% (13 runs sampled)
ReactiveProperty x 5,115,312 ops/sec ±13.34% (13 runs sampled)
```

_Fastest is **EventEmitter3**_
