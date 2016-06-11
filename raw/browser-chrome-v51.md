
TAP version 13
# Platform
ok 1 (unnamed assert)
Chrome 51.0.2704.84 on OS X 10.11.2

1..1
# tests 1
# pass  1

# ok


TAP version 13
# init
ok 1 Theoretical max runs without error
ok 2 Theoretical max constructed an object
ok 3 EventEmitter runs without error
ok 4 EventEmitter constructed an object
ok 5 EventEmitter2 runs without error
ok 6 EventEmitter2 constructed an object
ok 7 EventEmitter3 runs without error
ok 8 EventEmitter3 constructed an object
ok 9 push-stream runs without error
ok 10 push-stream constructed an object
ok 11 DripEmitter runs without error
ok 12 DripEmitter constructed an object
ok 13 DripEmitterEnhanced runs without error
ok 14 DripEmitterEnhanced constructed an object
ok 15 ReactiveProperty runs without error
ok 16 ReactiveProperty constructed an object
ok 17 JS-Signals runs without error
ok 18 JS-Signals constructed an object
ok 19 MiniSignals runs without error
ok 20 MiniSignals constructed an object
ok 21 EventDispatcher runs without error
ok 22 EventDispatcher constructed an object
ok 23 pull-notify runs without error
ok 24 pull-notify constructed an object
## benchmarks

    EventDispatcher x 47,204,468 ops/sec ±7.22% (10 runs sampled)
    DripEmitter x 45,788,157 ops/sec ±4.29% (10 runs sampled)
    Theoretical max x 45,201,696 ops/sec ±4.95% (10 runs sampled) *burn in*
    EventEmitter3 x 44,297,310 ops/sec ±5.87% (10 runs sampled)
    EventEmitter x 33,967,270 ops/sec ±3.87% (10 runs sampled)
    EventEmitter2 x 29,503,525 ops/sec ±3.67% (10 runs sampled)
    MiniSignals x 26,964,885 ops/sec ±7.14% (10 runs sampled)
    DripEmitterEnhanced x 18,902,535 ops/sec ±4.14% (10 runs sampled)
    push-stream x 13,594,718 ops/sec ±6.27% (10 runs sampled)
    JS-Signals x 1,961,500 ops/sec ±7.83% (10 runs sampled)
    ReactiveProperty x 1,165,568 ops/sec ±11.60% (10 runs sampled)
    pull-notify x 936,829 ops/sec ±9.39% (10 runs sampled)

*Fastest is __EventDispatcher, DripEmitter, EventEmitter3__*


1..24
# tests 24
# pass  24

# ok


TAP version 13
# emit variable values
ok 1 Theoretical max runs without error
ok 2 handle called four times
ok 3 handle2 called four times
ok 4 EventEmitter runs without error
ok 5 handle called four times
ok 6 handle2 called four times
ok 7 EventEmitter2 runs without error
ok 8 handle called four times
ok 9 handle2 called four times
ok 10 EventEmitter3 runs without error
ok 11 handle called four times
ok 12 handle2 called four times
ok 13 dripEmitterEnhanced runs without error
ok 14 handle called four times
ok 15 handle2 called four times
ok 16 JS-Signals runs without error
ok 17 handle called four times
ok 18 handle2 called four times
ok 19 MiniSignals runs without error
ok 20 handle called four times
ok 21 handle2 called four times
ok 22 signal-emitter runs without error
ok 23 handle called four times
ok 24 handle2 called four times
ok 25 signal-lite runs without error
ok 26 handle called four times
ok 27 handle2 called four times
## benchmarks

    Theoretical max x 7,242,274 ops/sec ±4.22% (10 runs sampled) *burn in*
    MiniSignals x 4,147,094 ops/sec ±13.45% (10 runs sampled)
    signal-lite x 3,649,062 ops/sec ±12.75% (10 runs sampled)
    EventEmitter3 x 1,032,531 ops/sec ±16.18% (10 runs sampled)
    EventEmitter2 x 721,435 ops/sec ±4.44% (10 runs sampled)
    dripEmitterEnhanced x 438,849 ops/sec ±2.18% (10 runs sampled)
    signal-emitter x 314,806 ops/sec ±2.58% (10 runs sampled)
    JS-Signals x 121,683 ops/sec ±3.87% (10 runs sampled)
    EventEmitter x 109,986 ops/sec ±10.92% (10 runs sampled)

*Fastest is __MiniSignals__*


1..27
# tests 27
# pass  27

# ok


TAP version 13
# emit with context
ok 1 Theoretical max runs without error
ok 2 handle called one time
ok 3 handle2 called one time
ok 4 EventEmitter runs without error
ok 5 handle called one time
ok 6 handle2 called one time
ok 7 EventEmitter2 runs without error
ok 8 handle called one time
ok 9 handle2 called one time
ok 10 EventEmitter3 runs without error
ok 11 handle called one time
ok 12 handle2 called one time
ok 13 push-stream runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitter runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 RXJS runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 ReactiveProperty runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 JS-Signals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 MiniSignals runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 signal-emitter runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 event-signal runs without error
ok 38 handle called one time
ok 39 handle2 called one time
ok 40 signal-lite runs without error
ok 41 handle called one time
ok 42 handle2 called one time
ok 43 pull-notify runs without error
ok 44 handle called one time
ok 45 handle2 called one time
## benchmarks

    Theoretical max x 32,545,052 ops/sec ±3.24% (10 runs sampled) *burn in*
    signal-lite x 16,927,740 ops/sec ±4.95% (10 runs sampled)
    MiniSignals x 17,718,360 ops/sec ±19.49% (10 runs sampled)
    push-stream x 15,609,022 ops/sec ±5.31% (10 runs sampled)
    EventEmitter3 x 14,396,218 ops/sec ±4.32% (10 runs sampled)
    ReactiveProperty x 14,375,284 ops/sec ±17.94% (10 runs sampled)
    dripEmitter x 12,918,285 ops/sec ±6.12% (10 runs sampled)
    event-signal x 5,959,482 ops/sec ±7.94% (10 runs sampled)
    RXJS x 4,478,897 ops/sec ±2.57% (10 runs sampled)
    EventEmitter2 x 4,604,570 ops/sec ±8.04% (10 runs sampled)
    dripEmitterEnhanced x 1,862,618 ops/sec ±16.30% (10 runs sampled)
    signal-emitter x 1,405,150 ops/sec ±5.39% (10 runs sampled)
    pull-notify x 1,400,438 ops/sec ±6.85% (10 runs sampled)
    JS-Signals x 515,667 ops/sec ±6.94% (10 runs sampled)
    EventEmitter x 505,227 ops/sec ±10.48% (10 runs sampled)

*Fastest is __signal-lite__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# emit one value - two listeners
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle once
ok 3 Theoretical max called handle2 once
ok 4 EventEmitter runs without error
ok 5 EventEmitter called handle once
ok 6 EventEmitter called handle2 once
ok 7 EventEmitter2 runs without error
ok 8 EventEmitter2 called handle once
ok 9 EventEmitter2 called handle2 once
ok 10 EventEmitter3 runs without error
ok 11 EventEmitter3 called handle once
ok 12 EventEmitter3 called handle2 once
ok 13 dripEmitter runs without error
ok 14 dripEmitter called handle once
ok 15 dripEmitter called handle2 once
ok 16 push-stream-patch runs without error
ok 17 push-stream-patch called handle once
ok 18 push-stream-patch called handle2 once
ok 19 push-stream runs without error
ok 20 push-stream called handle once
ok 21 push-stream called handle2 once
ok 22 dripEmitterEnhanced runs without error
ok 23 dripEmitterEnhanced called handle once
ok 24 dripEmitterEnhanced called handle2 once
ok 25 d3-dispatch runs without error
ok 26 d3-dispatch called handle once
ok 27 d3-dispatch called handle2 once
ok 28 namespace-emitter runs without error
ok 29 namespace-emitter called handle once
ok 30 namespace-emitter called handle2 once
ok 31 ReactiveProperty runs without error
ok 32 ReactiveProperty called handle once
ok 33 ReactiveProperty called handle2 once
ok 34 observable runs without error
ok 35 observable called handle once
ok 36 observable called handle2 once
ok 37 observ runs without error
ok 38 observ called handle once
ok 39 observ called handle2 once
ok 40 RXJS runs without error
ok 41 RXJS called handle once
ok 42 RXJS called handle2 once
ok 43 JS-Signals runs without error
ok 44 JS-Signals called handle once
ok 45 JS-Signals called handle2 once
ok 46 MiniSignals runs without error
ok 47 MiniSignals called handle once
ok 48 MiniSignals called handle2 once
ok 49 MicroSignals runs without error
ok 50 MicroSignals called handle once
ok 51 MicroSignals called handle2 once
ok 52 signal-emitter runs without error
ok 53 signal-emitter called handle once
ok 54 signal-emitter called handle2 once
ok 55 event-signal runs without error
ok 56 event-signal called handle once
ok 57 event-signal called handle2 once
ok 58 signal-lite runs without error
ok 59 signal-lite called handle once
ok 60 signal-lite called handle2 once
ok 61 minivents runs without error
ok 62 minivents called handle once
ok 63 minivents called handle2 once
ok 64 pull-notify runs without error
ok 65 pull-notify called handle once
ok 66 pull-notify called handle2 once
## benchmarks

    Theoretical max x 22,734,014 ops/sec ±9.38% (10 runs sampled) *burn in*
    MiniSignals x 16,598,468 ops/sec ±8.93% (10 runs sampled)
    MicroSignals x 15,770,272 ops/sec ±5.26% (10 runs sampled)
    push-stream-patch x 14,400,772 ops/sec ±3.92% (10 runs sampled)
    signal-lite x 14,427,898 ops/sec ±5.11% (10 runs sampled)
    dripEmitter x 13,650,903 ops/sec ±5.56% (10 runs sampled)
    push-stream x 13,698,798 ops/sec ±7.03% (10 runs sampled)
    ReactiveProperty x 13,367,844 ops/sec ±5.71% (10 runs sampled)
    EventEmitter3 x 12,799,483 ops/sec ±6.92% (10 runs sampled)
    observ x 5,648,148 ops/sec ±2.88% (10 runs sampled)
    event-signal x 5,783,210 ops/sec ±5.69% (10 runs sampled)
    EventEmitter2 x 4,795,635 ops/sec ±5.70% (10 runs sampled)
    RXJS x 3,944,474 ops/sec ±4.88% (10 runs sampled)
    d3-dispatch x 2,265,241 ops/sec ±7.48% (10 runs sampled)
    dripEmitterEnhanced x 2,133,111 ops/sec ±4.79% (10 runs sampled)
    signal-emitter x 1,454,231 ops/sec ±3.84% (10 runs sampled)
    pull-notify x 1,310,803 ops/sec ±5.66% (10 runs sampled)
    observable x 692,813 ops/sec ±13.24% (10 runs sampled)
    EventEmitter x 533,536 ops/sec ±4.06% (10 runs sampled)
    JS-Signals x 478,347 ops/sec ±11.06% (10 runs sampled)
    namespace-emitter x 436,996 ops/sec ±5.74% (10 runs sampled)
    minivents x 323,780 ops/sec ±2.70% (10 runs sampled)

*Fastest is __MiniSignals, MicroSignals, signal-lite__*


1..66
# tests 66
# pass  66

# ok


TAP version 13
# emit one value - one listener
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle once
ok 3 EventEmitter runs without error
ok 4 EventEmitter called handle once
ok 5 EventEmitter2 runs without error
ok 6 EventEmitter2 called handle once
ok 7 EventEmitter3 runs without error
ok 8 EventEmitter3 called handle once
ok 9 dripEmitter runs without error
ok 10 dripEmitter called handle once
ok 11 barracks runs without error
ok 12 barracks called handle once
ok 13 push-stream runs without error
ok 14 push-stream called handle once
ok 15 push-stream-patch runs without error
ok 16 push-stream-patch called handle once
ok 17 mini-pipe runs without error
ok 18 mini-pipe called handle once
ok 19 dripEmitterEnhanced runs without error
ok 20 dripEmitterEnhanced called handle once
ok 21 d3-dispatch runs without error
ok 22 d3-dispatch called handle once
ok 23 namespace-emitter runs without error
ok 24 namespace-emitter called handle once
ok 25 ReactiveProperty runs without error
ok 26 ReactiveProperty called handle once
ok 27 observable runs without error
ok 28 observable called handle once
ok 29 observ runs without error
ok 30 observ called handle once
ok 31 RXJS runs without error
ok 32 RXJS called handle once
ok 33 JS-Signals runs without error
ok 34 JS-Signals called handle once
ok 35 MiniSignals runs without error
ok 36 MiniSignals called handle once
ok 37 MicroSignals runs without error
ok 38 MicroSignals called handle once
ok 39 signal-emitter runs without error
ok 40 signal-emitter called handle once
ok 41 event-signal runs without error
ok 42 event-signal called handle once
ok 43 signal-lite runs without error
ok 44 signal-lite called handle once
ok 45 minivents runs without error
ok 46 minivents called handle once
ok 47 pull-notify runs without error
ok 48 pull-notify called handle once
## benchmarks

    Theoretical max x 35,492,635 ops/sec ±14.80% (10 runs sampled) *burn in*
    MicroSignals x 30,341,925 ops/sec ±7.68% (10 runs sampled)
    mini-pipe x 26,152,680 ops/sec ±6.88% (10 runs sampled)
    MiniSignals x 26,911,765 ops/sec ±14.24% (10 runs sampled)
    signal-lite x 24,431,817 ops/sec ±4.74% (10 runs sampled)
    dripEmitter x 20,994,007 ops/sec ±4.60% (10 runs sampled)
    EventEmitter2 x 20,635,840 ops/sec ±5.17% (10 runs sampled)
    push-stream x 19,687,505 ops/sec ±6.96% (10 runs sampled)
    ReactiveProperty x 18,731,719 ops/sec ±6.49% (10 runs sampled)
    EventEmitter3 x 18,955,789 ops/sec ±13.89% (10 runs sampled)
    push-stream-patch x 17,699,836 ops/sec ±26.31% (10 runs sampled)
    observ x 9,221,196 ops/sec ±2.39% (10 runs sampled)
    EventEmitter x 9,845,963 ops/sec ±18.98% (10 runs sampled)
    event-signal x 6,740,063 ops/sec ±8.82% (10 runs sampled)
    RXJS x 5,433,408 ops/sec ±4.56% (10 runs sampled)
    barracks x 4,615,205 ops/sec ±7.45% (10 runs sampled)
    d3-dispatch x 4,356,452 ops/sec ±5.93% (10 runs sampled)
    pull-notify x 2,404,157 ops/sec ±5.72% (10 runs sampled)
    dripEmitterEnhanced x 2,303,838 ops/sec ±4.35% (10 runs sampled)
    signal-emitter x 1,334,403 ops/sec ±7.33% (10 runs sampled)
    observable x 742,092 ops/sec ±5.53% (10 runs sampled)
    minivents x 639,255 ops/sec ±2.97% (10 runs sampled)
    JS-Signals x 551,415 ops/sec ±5.11% (10 runs sampled)
    namespace-emitter x 509,381 ops/sec ±3.01% (10 runs sampled)

*Fastest is __MicroSignals, MiniSignals__*


1..48
# tests 48
# pass  48

# ok


TAP version 13
# emit many listeners
ok 1 Theoretical max runs without error
ok 2 handels called N times
ok 3 EventEmitter runs without error
ok 4 handels called N times
ok 5 EventEmitter2 runs without error
ok 6 handels called N times
ok 7 EventEmitter3 runs without error
ok 8 handels called N times
ok 9 push-stream runs without error
ok 10 handels called N times
ok 11 dripEmitter runs without error
ok 12 handels called N times
ok 13 dripEmitterEnhanced runs without error
ok 14 handels called N times
ok 15 RXJS runs without error
ok 16 handels called N times
ok 17 ReactiveProperty runs without error
ok 18 handels called N times
ok 19 JS-Signals runs without error
ok 20 handels called N times
ok 21 MiniSignals runs without error
ok 22 handels called N times
ok 23 signal-emitter runs without error
ok 24 handels called N times
ok 25 event-signal runs without error
ok 26 handels called N times
ok 27 signal-lite runs without error
ok 28 handels called N times
ok 29 minivents runs without error
ok 30 handels called N times
## benchmarks

    MiniSignals x 4,792,210 ops/sec ±5.89% (10 runs sampled)
    push-stream x 4,608,055 ops/sec ±6.37% (10 runs sampled)
    signal-lite x 4,494,799 ops/sec ±5.85% (10 runs sampled)
    dripEmitter x 4,268,506 ops/sec ±5.26% (10 runs sampled)
    Theoretical max x 4,465,835 ops/sec ±12.12% (10 runs sampled) *burn in*
    ReactiveProperty x 4,021,277 ops/sec ±4.29% (10 runs sampled)
    EventEmitter3 x 3,971,649 ops/sec ±7.18% (10 runs sampled)
    event-signal x 2,634,168 ops/sec ±5.41% (10 runs sampled)
    EventEmitter2 x 2,432,910 ops/sec ±4.27% (10 runs sampled)
    RXJS x 1,550,236 ops/sec ±4.28% (10 runs sampled)
    dripEmitterEnhanced x 1,524,387 ops/sec ±7.30% (10 runs sampled)
    signal-emitter x 1,110,550 ops/sec ±5.15% (10 runs sampled)
    EventEmitter x 316,261 ops/sec ±3.36% (10 runs sampled)
    JS-Signals x 277,272 ops/sec ±5.05% (10 runs sampled)
    minivents x 81,012 ops/sec ±3.68% (10 runs sampled)

*Fastest is __MiniSignals, push-stream__*


1..30
# tests 30
# pass  30

# ok


TAP version 13
# emit with bound function
ok 1 Theoretical max runs without error
ok 2 handle called one time
ok 3 handle2 called one time
ok 4 EventEmitter runs without error
ok 5 handle called one time
ok 6 handle2 called one time
ok 7 EventEmitter2 runs without error
ok 8 handle called one time
ok 9 handle2 called one time
ok 10 EventEmitter3 runs without error
ok 11 handle called one time
ok 12 handle2 called one time
ok 13 push-stream runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitter runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 RXJS runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 ReactiveProperty runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 JS-Signals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 MiniSignals runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 signal-emitter runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 event-signal runs without error
ok 38 handle called one time
ok 39 handle2 called one time
ok 40 signal-lite runs without error
ok 41 handle called one time
ok 42 handle2 called one time
ok 43 pull-notify runs without error
ok 44 handle called one time
ok 45 handle2 called one time
## benchmarks

    Theoretical max x 28,474,626 ops/sec ±10.65% (10 runs sampled) *burn in*
    push-stream x 16,778,729 ops/sec ±2.43% (10 runs sampled)
    dripEmitter x 14,447,553 ops/sec ±2.76% (10 runs sampled)
    ReactiveProperty x 16,220,991 ops/sec ±16.96% (10 runs sampled)
    EventEmitter3 x 13,644,951 ops/sec ±6.34% (10 runs sampled)
    MiniSignals x 7,275,577 ops/sec ±9.92% (10 runs sampled)
    event-signal x 5,717,026 ops/sec ±6.59% (10 runs sampled)
    signal-lite x 5,889,353 ops/sec ±16.15% (10 runs sampled)
    EventEmitter2 x 5,060,949 ops/sec ±6.60% (10 runs sampled)
    RXJS x 4,811,571 ops/sec ±6.48% (10 runs sampled)
    dripEmitterEnhanced x 2,180,627 ops/sec ±14.62% (10 runs sampled)
    pull-notify x 1,616,300 ops/sec ±2.62% (10 runs sampled)
    signal-emitter x 1,478,598 ops/sec ±3.25% (10 runs sampled)
    EventEmitter x 616,214 ops/sec ±1.77% (10 runs sampled)
    JS-Signals x 562,537 ops/sec ±2.23% (10 runs sampled)

*Fastest is __push-stream, ReactiveProperty__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# emit one object
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle three times
ok 3 Theoretical max called handle2 three times
ok 4 EventEmitter runs without error
ok 5 EventEmitter called handle three times
ok 6 EventEmitter called handle2 three times
ok 7 EventEmitter2 runs without error
ok 8 EventEmitter2 called handle three times
ok 9 EventEmitter2 called handle2 three times
ok 10 EventEmitter3 runs without error
ok 11 EventEmitter3 called handle three times
ok 12 EventEmitter3 called handle2 three times
ok 13 push-stream runs without error
ok 14 push-stream called handle three times
ok 15 push-stream called handle2 three times
ok 16 dripEmitter runs without error
ok 17 dripEmitter called handle three times
ok 18 dripEmitter called handle2 three times
ok 19 dripEmitterEnhanced runs without error
ok 20 dripEmitterEnhanced called handle three times
ok 21 dripEmitterEnhanced called handle2 three times
ok 22 RXJS runs without error
ok 23 RXJS called handle three times
ok 24 RXJS called handle2 three times
ok 25 ReactiveProperty runs without error
ok 26 ReactiveProperty called handle three times
ok 27 ReactiveProperty called handle2 three times
ok 28 JS-Signals runs without error
ok 29 JS-Signals called handle three times
ok 30 JS-Signals called handle2 three times
ok 31 MiniSignals runs without error
ok 32 MiniSignals called handle three times
ok 33 MiniSignals called handle2 three times
ok 34 MicroSignals runs without error
ok 35 MicroSignals called handle three times
ok 36 MicroSignals called handle2 three times
ok 37 signal-emitter runs without error
ok 38 signal-emitter called handle three times
ok 39 signal-emitter called handle2 three times
ok 40 event-signal runs without error
ok 41 event-signal called handle three times
ok 42 event-signal called handle2 three times
ok 43 signal-lite runs without error
ok 44 signal-lite called handle three times
ok 45 signal-lite called handle2 three times
ok 46 EventDispatcher runs without error
ok 47 EventDispatcher called handle three times
ok 48 EventDispatcher called handle2 three times
ok 49 pull-notify runs without error
ok 50 pull-notify called handle three times
ok 51 pull-notify called handle2 three times
## benchmarks

    Theoretical max x 7,623,776 ops/sec ±11.59% (10 runs sampled) *burn in*
    MiniSignals x 5,293,244 ops/sec ±5.15% (10 runs sampled)
    MicroSignals x 5,306,484 ops/sec ±6.00% (10 runs sampled)
    push-stream x 4,955,702 ops/sec ±3.88% (10 runs sampled)
    signal-lite x 4,929,481 ops/sec ±4.18% (10 runs sampled)
    ReactiveProperty x 4,764,800 ops/sec ±5.12% (10 runs sampled)
    EventEmitter3 x 4,416,264 ops/sec ±4.52% (10 runs sampled)
    dripEmitter x 4,310,067 ops/sec ±4.00% (10 runs sampled)
    EventDispatcher x 2,277,520 ops/sec ±3.42% (10 runs sampled)
    event-signal x 1,817,383 ops/sec ±5.60% (10 runs sampled)
    EventEmitter2 x 1,610,955 ops/sec ±3.13% (10 runs sampled)
    RXJS x 1,428,217 ops/sec ±4.89% (10 runs sampled)
    dripEmitterEnhanced x 718,819 ops/sec ±2.82% (10 runs sampled)
    signal-emitter x 526,123 ops/sec ±1.54% (10 runs sampled)
    pull-notify x 467,433 ops/sec ±2.16% (10 runs sampled)
    EventEmitter x 176,710 ops/sec ±3.06% (10 runs sampled)
    JS-Signals x 162,146 ops/sec ±3.91% (10 runs sampled)

*Fastest is __MiniSignals, MicroSignals__*


1..51
# tests 51
# pass  51

# ok


TAP version 13
# emit one object
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle three times
ok 3 EventEmitter runs without error
ok 4 EventEmitter called handle three times
ok 5 EventEmitter2 runs without error
ok 6 EventEmitter2 called handle three times
ok 7 EventEmitter3 runs without error
ok 8 EventEmitter3 called handle three times
ok 9 push-stream runs without error
ok 10 push-stream called handle three times
ok 11 mini-pipe runs without error
ok 12 mini-pipe called handle three times
ok 13 dripEmitter runs without error
ok 14 dripEmitter called handle three times
ok 15 dripEmitterEnhanced runs without error
ok 16 dripEmitterEnhanced called handle three times
ok 17 RXJS runs without error
ok 18 RXJS called handle three times
ok 19 ReactiveProperty runs without error
ok 20 ReactiveProperty called handle three times
ok 21 JS-Signals runs without error
ok 22 JS-Signals called handle three times
ok 23 MiniSignals runs without error
ok 24 MiniSignals called handle three times
ok 25 signal-emitter runs without error
ok 26 signal-emitter called handle three times
ok 27 event-signal runs without error
ok 28 event-signal called handle three times
ok 29 signal-lite runs without error
ok 30 signal-lite called handle three times
ok 31 EventDispatcher runs without error
ok 32 EventDispatcher called handle three times
## benchmarks

    Theoretical max x 12,236,739 ops/sec ±3.38% (10 runs sampled) *burn in*
    mini-pipe x 9,749,645 ops/sec ±5.35% (10 runs sampled)
    MiniSignals x 9,489,445 ops/sec ±5.08% (10 runs sampled)
    signal-lite x 8,721,929 ops/sec ±4.94% (10 runs sampled)
    push-stream x 7,576,541 ops/sec ±6.04% (10 runs sampled)
    dripEmitter x 7,338,037 ops/sec ±3.01% (10 runs sampled)
    EventEmitter3 x 7,240,795 ops/sec ±3.92% (10 runs sampled)
    ReactiveProperty x 7,185,286 ops/sec ±3.21% (10 runs sampled)
    EventEmitter2 x 7,054,892 ops/sec ±5.97% (10 runs sampled)
    EventDispatcher x 2,980,950 ops/sec ±4.04% (10 runs sampled)
    EventEmitter x 3,113,684 ops/sec ±11.93% (10 runs sampled)
    event-signal x 2,347,738 ops/sec ±4.22% (10 runs sampled)
    RXJS x 1,870,401 ops/sec ±5.03% (10 runs sampled)
    dripEmitterEnhanced x 757,409 ops/sec ±3.99% (10 runs sampled)
    signal-emitter x 497,968 ops/sec ±6.60% (10 runs sampled)
    JS-Signals x 201,329 ops/sec ±6.52% (10 runs sampled)

*Fastest is __mini-pipe, MiniSignals__*


1..32
# tests 32
# pass  32

# ok


TAP version 13
# emit many values
ok 1 Theoretical max runs without error
ok 2 handle called once
ok 3 handle2 called once
ok 4 EventEmitter runs without error
ok 5 handle called once
ok 6 handle2 called once
ok 7 EventEmitter2 runs without error
ok 8 handle called once
ok 9 handle2 called once
ok 10 EventEmitter3 runs without error
ok 11 handle called once
ok 12 handle2 called once
ok 13 dripEmitterEnhanced runs without error
ok 14 handle called once
ok 15 handle2 called once
ok 16 JS-Signals runs without error
ok 17 handle called once
ok 18 handle2 called once
ok 19 MiniSignals runs without error
ok 20 handle called once
ok 21 handle2 called once
ok 22 signal-emitter runs without error
ok 23 handle called once
ok 24 handle2 called once
ok 25 signal-lite runs without error
ok 26 handle called once
ok 27 handle2 called once
ok 28 minivents runs without error
ok 29 handle called once
ok 30 handle2 called once
## benchmarks

    Theoretical max x 16,437,162 ops/sec ±11.01% (10 runs sampled) *burn in*
    MiniSignals x 14,653,778 ops/sec ±3.64% (10 runs sampled)
    signal-lite x 13,381,603 ops/sec ±4.08% (10 runs sampled)
    EventEmitter3 x 867,905 ops/sec ±3.05% (10 runs sampled)
    EventEmitter2 x 828,840 ops/sec ±3.07% (10 runs sampled)
    dripEmitterEnhanced x 695,014 ops/sec ±2.03% (10 runs sampled)
    signal-emitter x 585,759 ops/sec ±3.08% (10 runs sampled)
    JS-Signals x 123,131 ops/sec ±4.25% (10 runs sampled)
    EventEmitter x 122,552 ops/sec ±4.66% (10 runs sampled)
    minivents x 64,948 ops/sec ±5.64% (10 runs sampled)

*Fastest is __MiniSignals__*


1..30
# tests 30
# pass  30

# ok


TAP version 13
# emit multiple arrays
ok 1 Theoretical max runs without error
ok 2 handle called three times
ok 3 handle2 called three times
ok 4 EventEmitter runs without error
ok 5 handle called three times
ok 6 handle2 called three times
ok 7 EventEmitter2 runs without error
ok 8 handle called three times
ok 9 handle2 called three times
ok 10 EventEmitter3 runs without error
ok 11 handle called three times
ok 12 handle2 called three times
ok 13 push-stream runs without error
ok 14 handle called three times
ok 15 handle2 called three times
ok 16 dripEmitter runs without error
ok 17 handle called three times
ok 18 handle2 called three times
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called three times
ok 21 handle2 called three times
ok 22 RXJS runs without error
ok 23 handle called three times
ok 24 handle2 called three times
ok 25 ReactiveProperty runs without error
ok 26 handle called three times
ok 27 handle2 called three times
ok 28 JS-Signals runs without error
ok 29 handle called three times
ok 30 handle2 called three times
ok 31 MiniSignals runs without error
ok 32 handle called three times
ok 33 handle2 called three times
ok 34 signal-emitter runs without error
ok 35 handle called three times
ok 36 handle2 called three times
ok 37 event-signal runs without error
ok 38 handle called three times
ok 39 handle2 called three times
ok 40 signal-lite runs without error
ok 41 handle called three times
ok 42 handle2 called three times
ok 43 pull-notify runs without error
ok 44 handle called three times
ok 45 handle2 called three times
## benchmarks

    Theoretical max x 12,980,438 ops/sec ±3.35% (10 runs sampled) *burn in*
    MiniSignals x 7,310,297 ops/sec ±3.33% (10 runs sampled)
    signal-lite x 6,646,595 ops/sec ±4.61% (10 runs sampled)
    push-stream x 6,316,974 ops/sec ±3.80% (10 runs sampled)
    ReactiveProperty x 5,214,483 ops/sec ±2.91% (10 runs sampled)
    dripEmitter x 5,251,424 ops/sec ±5.60% (10 runs sampled)
    EventEmitter3 x 5,154,098 ops/sec ±6.26% (10 runs sampled)
    event-signal x 2,102,488 ops/sec ±3.95% (10 runs sampled)
    EventEmitter2 x 1,662,761 ops/sec ±12.14% (10 runs sampled)
    RXJS x 1,542,492 ops/sec ±4.30% (10 runs sampled)
    dripEmitterEnhanced x 782,481 ops/sec ±4.72% (10 runs sampled)
    signal-emitter x 541,951 ops/sec ±2.35% (10 runs sampled)
    pull-notify x 498,281 ops/sec ±4.21% (10 runs sampled)
    JS-Signals x 167,200 ops/sec ±2.81% (10 runs sampled)
    EventEmitter x 150,356 ops/sec ±14.94% (10 runs sampled)

*Fastest is __MiniSignals__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# add-remove
ok 1 EventEmitter runs without error
ok 2 handle never called
ok 3 EventEmitter2 runs without error
ok 4 handle never called
ok 5 EventEmitter3 runs without error
ok 6 handle never called
ok 7 dripEmitter runs without error
ok 8 handle never called
ok 9 pushStream runs without error
ok 10 handle never called
ok 11 dripEmitterEnhanced runs without error
ok 12 handle never called
ok 13 ReactiveProperty runs without error
ok 14 handle never called
ok 15 JS-Signals runs without error
ok 16 handle never called
ok 17 MiniSignals runs without error
ok 18 handle never called
ok 19 EventDispatcher runs without error
ok 20 handle never called
## benchmarks

    dripEmitter x 28,363,697 ops/sec ±3.30% (10 runs sampled)
    MiniSignals x 12,422,808 ops/sec ±6.15% (10 runs sampled)
    EventDispatcher x 5,049,612 ops/sec ±2.71% (10 runs sampled)
    ReactiveProperty x 4,239,759 ops/sec ±15.28% (10 runs sampled)
    pushStream x 3,506,897 ops/sec ±6.05% (10 runs sampled)
    EventEmitter3 x 2,182,525 ops/sec ±5.13% (10 runs sampled)
    EventEmitter x 1,430,501 ops/sec ±10.57% (10 runs sampled)
    EventEmitter2 x 1,271,452 ops/sec ±4.04% (10 runs sampled)
    JS-Signals x 825,314 ops/sec ±3.44% (10 runs sampled)
    dripEmitterEnhanced x 606,859 ops/sec ±3.31% (10 runs sampled)

*Fastest is __dripEmitter__*


1..20
# tests 20
# pass  20

# ok

