TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 6.2.1 on Darwin 64-bit

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

    EventEmitter3 x 42,411,612 ops/sec ±5.05% (10 runs sampled)
    DripEmitter x 42,312,172 ops/sec ±4.90% (10 runs sampled)
    EventDispatcher x 34,592,973 ops/sec ±9.29% (10 runs sampled)
    EventEmitter2 x 31,099,163 ops/sec ±2.01% (10 runs sampled)
    Theoretical max x 40,248,760 ops/sec ±37.05% (10 runs sampled) *burn in*
    EventEmitter x 27,375,792 ops/sec ±3.11% (10 runs sampled)
    MiniSignals x 23,548,145 ops/sec ±11.89% (10 runs sampled)
    DripEmitterEnhanced x 17,625,415 ops/sec ±6.97% (10 runs sampled)
    push-stream x 13,471,496 ops/sec ±2.41% (10 runs sampled)
    JS-Signals x 1,305,264 ops/sec ±18.65% (10 runs sampled)
    ReactiveProperty x 852,645 ops/sec ±16.04% (10 runs sampled)
    pull-notify x 618,709 ops/sec ±23.67% (10 runs sampled)

*Fastest is __EventEmitter3, DripEmitter__*


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

    Theoretical max x 4,203,950 ops/sec ±7.70% (10 runs sampled) *burn in*
    MiniSignals x 4,086,861 ops/sec ±6.09% (10 runs sampled)
    signal-lite x 3,901,345 ops/sec ±3.44% (10 runs sampled)
    EventEmitter x 1,040,964 ops/sec ±6.84% (10 runs sampled)
    EventEmitter3 x 788,183 ops/sec ±4.66% (10 runs sampled)
    EventEmitter2 x 378,033 ops/sec ±13.01% (10 runs sampled)
    dripEmitterEnhanced x 282,517 ops/sec ±7.41% (10 runs sampled)
    signal-emitter x 117,121 ops/sec ±9.50% (10 runs sampled)
    JS-Signals x 110,555 ops/sec ±24.26% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 26,734,835 ops/sec ±11.96% (10 runs sampled) *burn in*
    MiniSignals x 20,740,902 ops/sec ±2.62% (10 runs sampled)
    signal-lite x 18,443,910 ops/sec ±4.73% (10 runs sampled)
    ReactiveProperty x 16,279,399 ops/sec ±4.02% (10 runs sampled)
    EventEmitter3 x 13,086,840 ops/sec ±3.35% (10 runs sampled)
    dripEmitter x 12,455,118 ops/sec ±3.35% (10 runs sampled)
    push-stream x 12,647,470 ops/sec ±5.27% (10 runs sampled)
    EventEmitter x 8,020,678 ops/sec ±4.40% (10 runs sampled)
    event-signal x 6,416,492 ops/sec ±4.32% (10 runs sampled)
    EventEmitter2 x 4,508,405 ops/sec ±2.29% (10 runs sampled)
    RXJS x 3,612,689 ops/sec ±9.20% (10 runs sampled)
    dripEmitterEnhanced x 1,623,351 ops/sec ±10.40% (10 runs sampled)
    JS-Signals x 678,176 ops/sec ±1.81% (10 runs sampled)
    signal-emitter x 678,756 ops/sec ±4.59% (10 runs sampled)
    pull-notify x 508,468 ops/sec ±5.18% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 26,162,638 ops/sec ±2.94% (10 runs sampled) *burn in*
    signal-lite x 16,719,742 ops/sec ±5.91% (10 runs sampled)
    MicroSignals x 16,116,656 ops/sec ±4.14% (10 runs sampled)
    MiniSignals x 16,026,079 ops/sec ±5.90% (10 runs sampled)
    push-stream-patch x 15,313,845 ops/sec ±6.70% (10 runs sampled)
    push-stream x 14,772,281 ops/sec ±4.28% (10 runs sampled)
    dripEmitter x 14,175,952 ops/sec ±2.76% (10 runs sampled)
    EventEmitter3 x 13,611,303 ops/sec ±2.57% (10 runs sampled)
    ReactiveProperty x 13,968,609 ops/sec ±7.50% (10 runs sampled)
    EventEmitter x 10,162,313 ops/sec ±4.15% (10 runs sampled)
    event-signal x 5,760,755 ops/sec ±5.55% (10 runs sampled)
    observ x 5,912,049 ops/sec ±8.93% (10 runs sampled)
    EventEmitter2 x 5,126,865 ops/sec ±4.26% (10 runs sampled)
    RXJS x 4,208,382 ops/sec ±3.54% (10 runs sampled)
    dripEmitterEnhanced x 2,047,528 ops/sec ±5.55% (10 runs sampled)
    d3-dispatch x 1,958,002 ops/sec ±5.23% (10 runs sampled)
    signal-emitter x 786,390 ops/sec ±3.49% (10 runs sampled)
    JS-Signals x 633,680 ops/sec ±3.27% (10 runs sampled)
    namespace-emitter x 567,391 ops/sec ±4.60% (10 runs sampled)
    minivents x 516,559 ops/sec ±2.77% (10 runs sampled)
    observable x 517,138 ops/sec ±3.69% (10 runs sampled)
    pull-notify x 473,026 ops/sec ±8.67% (10 runs sampled)

*Fastest is __signal-lite, MicroSignals, MiniSignals, push-stream-patch__*


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

    Theoretical max x 39,359,119 ops/sec ±6.13% (10 runs sampled) *burn in*
    MiniSignals x 30,665,508 ops/sec ±3.77% (10 runs sampled)
    MicroSignals x 31,468,896 ops/sec ±7.91% (10 runs sampled)
    mini-pipe x 28,082,659 ops/sec ±3.76% (10 runs sampled)
    signal-lite x 25,776,204 ops/sec ±7.75% (10 runs sampled)
    EventEmitter2 x 22,841,398 ops/sec ±4.59% (10 runs sampled)
    push-stream x 21,623,529 ops/sec ±3.65% (10 runs sampled)
    push-stream-patch x 21,166,794 ops/sec ±5.41% (10 runs sampled)
    dripEmitter x 20,951,274 ops/sec ±6.26% (10 runs sampled)
    ReactiveProperty x 20,100,875 ops/sec ±5.98% (10 runs sampled)
    EventEmitter3 x 19,372,357 ops/sec ±28.47% (10 runs sampled)
    EventEmitter x 15,604,232 ops/sec ±4.02% (10 runs sampled)
    observ x 11,045,185 ops/sec ±4.25% (10 runs sampled)
    event-signal x 6,854,686 ops/sec ±5.53% (10 runs sampled)
    RXJS x 5,707,710 ops/sec ±6.50% (10 runs sampled)
    barracks x 4,935,610 ops/sec ±4.30% (10 runs sampled)
    d3-dispatch x 3,506,531 ops/sec ±2.82% (10 runs sampled)
    dripEmitterEnhanced x 2,101,209 ops/sec ±5.67% (10 runs sampled)
    minivents x 907,422 ops/sec ±4.01% (10 runs sampled)
    JS-Signals x 794,962 ops/sec ±3.64% (10 runs sampled)
    signal-emitter x 737,748 ops/sec ±3.62% (10 runs sampled)
    namespace-emitter x 696,878 ops/sec ±4.04% (10 runs sampled)
    pull-notify x 641,528 ops/sec ±5.23% (10 runs sampled)
    observable x 597,298 ops/sec ±6.00% (10 runs sampled)

*Fastest is __MiniSignals, MicroSignals__*


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

    signal-lite x 4,767,401 ops/sec ±4.09% (10 runs sampled)
    Theoretical max x 4,924,954 ops/sec ±8.16% (10 runs sampled) *burn in*
    push-stream x 4,606,987 ops/sec ±4.12% (10 runs sampled)
    MiniSignals x 4,550,717 ops/sec ±3.88% (10 runs sampled)
    dripEmitter x 4,368,301 ops/sec ±5.02% (10 runs sampled)
    EventEmitter3 x 4,100,879 ops/sec ±4.96% (10 runs sampled)
    ReactiveProperty x 4,043,815 ops/sec ±5.00% (10 runs sampled)
    EventEmitter x 3,780,372 ops/sec ±5.44% (10 runs sampled)
    event-signal x 2,903,799 ops/sec ±10.24% (10 runs sampled)
    EventEmitter2 x 2,664,057 ops/sec ±6.31% (10 runs sampled)
    RXJS x 1,620,728 ops/sec ±7.57% (10 runs sampled)
    dripEmitterEnhanced x 1,417,986 ops/sec ±3.30% (10 runs sampled)
    signal-emitter x 669,141 ops/sec ±3.65% (10 runs sampled)
    JS-Signals x 290,525 ops/sec ±4.37% (10 runs sampled)
    minivents x 121,920 ops/sec ±4.56% (10 runs sampled)

*Fastest is __signal-lite, push-stream__*


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

    Theoretical max x 29,035,041 ops/sec ±6.93% (10 runs sampled) *burn in*
    ReactiveProperty x 16,827,695 ops/sec ±4.53% (10 runs sampled)
    push-stream x 15,644,823 ops/sec ±6.54% (10 runs sampled)
    EventEmitter3 x 13,694,892 ops/sec ±4.16% (10 runs sampled)
    dripEmitter x 14,120,030 ops/sec ±8.59% (10 runs sampled)
    EventEmitter x 9,958,609 ops/sec ±4.47% (10 runs sampled)
    MiniSignals x 8,112,025 ops/sec ±4.89% (10 runs sampled)
    signal-lite x 6,184,561 ops/sec ±9.25% (10 runs sampled)
    event-signal x 5,693,774 ops/sec ±9.85% (10 runs sampled)
    EventEmitter2 x 5,018,392 ops/sec ±4.00% (10 runs sampled)
    RXJS x 4,652,760 ops/sec ±3.89% (10 runs sampled)
    dripEmitterEnhanced x 1,979,618 ops/sec ±6.76% (10 runs sampled)
    signal-emitter x 764,274 ops/sec ±9.10% (10 runs sampled)
    JS-Signals x 647,189 ops/sec ±9.17% (10 runs sampled)
    pull-notify x 512,107 ops/sec ±5.57% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 8,506,113 ops/sec ±3.14% (10 runs sampled) *burn in*
    MicroSignals x 5,756,360 ops/sec ±3.18% (10 runs sampled)
    signal-lite x 5,325,690 ops/sec ±3.61% (10 runs sampled)
    MiniSignals x 5,484,929 ops/sec ±7.72% (10 runs sampled)
    push-stream x 5,188,365 ops/sec ±5.16% (10 runs sampled)
    ReactiveProperty x 4,709,390 ops/sec ±3.57% (10 runs sampled)
    dripEmitter x 4,582,925 ops/sec ±5.03% (10 runs sampled)
    EventEmitter3 x 4,143,886 ops/sec ±2.73% (10 runs sampled)
    EventEmitter x 2,939,141 ops/sec ±7.44% (10 runs sampled)
    EventDispatcher x 2,432,099 ops/sec ±6.77% (10 runs sampled)
    event-signal x 1,894,734 ops/sec ±5.61% (10 runs sampled)
    EventEmitter2 x 1,522,087 ops/sec ±6.50% (10 runs sampled)
    RXJS x 1,407,209 ops/sec ±7.51% (10 runs sampled)
    dripEmitterEnhanced x 601,017 ops/sec ±9.05% (10 runs sampled)
    signal-emitter x 235,780 ops/sec ±9.86% (10 runs sampled)
    JS-Signals x 211,761 ops/sec ±4.01% (10 runs sampled)
    pull-notify x 173,645 ops/sec ±3.42% (10 runs sampled)

*Fastest is __MicroSignals, MiniSignals__*


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

    Theoretical max x 11,943,369 ops/sec ±4.06% (10 runs sampled) *burn in*
    MiniSignals x 9,745,562 ops/sec ±4.43% (10 runs sampled)
    mini-pipe x 9,400,762 ops/sec ±11.12% (10 runs sampled)
    signal-lite x 8,759,792 ops/sec ±5.31% (10 runs sampled)
    dripEmitter x 7,467,133 ops/sec ±4.25% (10 runs sampled)
    push-stream x 7,744,765 ops/sec ±8.67% (10 runs sampled)
    EventEmitter2 x 7,239,884 ops/sec ±4.03% (10 runs sampled)
    ReactiveProperty x 7,072,778 ops/sec ±5.80% (10 runs sampled)
    EventEmitter x 4,878,537 ops/sec ±5.87% (10 runs sampled)
    EventEmitter3 x 5,932,810 ops/sec ±30.45% (10 runs sampled)
    EventDispatcher x 3,076,864 ops/sec ±4.92% (10 runs sampled)
    event-signal x 2,164,362 ops/sec ±14.26% (10 runs sampled)
    RXJS x 1,880,543 ops/sec ±7.32% (10 runs sampled)
    dripEmitterEnhanced x 709,074 ops/sec ±3.88% (10 runs sampled)
    JS-Signals x 264,259 ops/sec ±9.05% (10 runs sampled)
    signal-emitter x 240,507 ops/sec ±6.36% (10 runs sampled)

*Fastest is __MiniSignals, mini-pipe__*


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

    Theoretical max x 18,136,620 ops/sec ±5.98% (10 runs sampled) *burn in*
    MiniSignals x 15,712,395 ops/sec ±5.36% (10 runs sampled)
    signal-lite x 14,213,317 ops/sec ±4.44% (10 runs sampled)
    EventEmitter3 x 761,212 ops/sec ±2.85% (10 runs sampled)
    EventEmitter x 763,927 ops/sec ±5.19% (10 runs sampled)
    EventEmitter2 x 658,045 ops/sec ±3.95% (10 runs sampled)
    dripEmitterEnhanced x 548,851 ops/sec ±6.98% (10 runs sampled)
    signal-emitter x 392,277 ops/sec ±5.56% (10 runs sampled)
    JS-Signals x 228,794 ops/sec ±3.73% (10 runs sampled)
    minivents x 146,167 ops/sec ±4.10% (10 runs sampled)

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

    Theoretical max x 12,774,319 ops/sec ±4.14% (10 runs sampled) *burn in*
    signal-lite x 6,732,910 ops/sec ±4.91% (10 runs sampled)
    MiniSignals x 6,854,771 ops/sec ±7.23% (10 runs sampled)
    push-stream x 6,009,739 ops/sec ±3.73% (10 runs sampled)
    dripEmitter x 5,543,531 ops/sec ±4.86% (10 runs sampled)
    ReactiveProperty x 5,258,630 ops/sec ±6.17% (10 runs sampled)
    EventEmitter3 x 4,996,582 ops/sec ±5.74% (10 runs sampled)
    EventEmitter x 3,380,892 ops/sec ±2.81% (10 runs sampled)
    event-signal x 2,044,725 ops/sec ±4.62% (10 runs sampled)
    EventEmitter2 x 1,734,980 ops/sec ±4.10% (10 runs sampled)
    RXJS x 1,483,978 ops/sec ±6.85% (10 runs sampled)
    dripEmitterEnhanced x 681,999 ops/sec ±3.95% (10 runs sampled)
    signal-emitter x 269,916 ops/sec ±4.20% (10 runs sampled)
    JS-Signals x 222,155 ops/sec ±5.37% (10 runs sampled)
    pull-notify x 173,614 ops/sec ±3.01% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    dripEmitter x 29,889,390 ops/sec ±3.55% (10 runs sampled)
    MiniSignals x 9,160,927 ops/sec ±35.11% (10 runs sampled)
    ReactiveProperty x 5,253,361 ops/sec ±3.63% (10 runs sampled)
    EventDispatcher x 5,328,356 ops/sec ±8.54% (10 runs sampled)
    pushStream x 3,702,955 ops/sec ±5.06% (10 runs sampled)
    EventEmitter x 3,976,457 ops/sec ±13.83% (10 runs sampled)
    EventEmitter3 x 1,878,573 ops/sec ±7.62% (10 runs sampled)
    EventEmitter2 x 1,297,452 ops/sec ±6.32% (10 runs sampled)
    JS-Signals x 814,421 ops/sec ±3.10% (10 runs sampled)
    dripEmitterEnhanced x 613,806 ops/sec ±4.21% (10 runs sampled)

*Fastest is __dripEmitter__*


1..20
# tests 20
# pass  20

# ok

