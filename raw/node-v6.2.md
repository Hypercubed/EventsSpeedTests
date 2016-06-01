TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 6.2.0 on Darwin 64-bit

1..1
# tests 1
# pass  1

# ok

TAP version 13
# add-remove
ok 1 EventEmitter runs without error
ok 2 never called
ok 3 EventEmitter2 runs without error
ok 4 never called
ok 5 EventEmitter3 runs without error
ok 6 never called
ok 7 dripEmitter runs without error
ok 8 never called
ok 9 dripEmitterEnhanced runs without error
ok 10 never called
ok 11 ReactiveProperty runs without error
ok 12 never called
ok 13 JS-Signals runs without error
ok 14 never called
ok 15 MiniSignals runs without error
ok 16 never called
ok 17 EventDispatcher runs without error
ok 18 never called
## add-remove

    dripEmitter x 25,909,414 ops/sec ±4.27% (10 runs sampled)
    MiniSignals x 15,200,033 ops/sec ±9.43% (10 runs sampled)
    ReactiveProperty x 4,983,989 ops/sec ±5.01% (10 runs sampled)
    EventDispatcher x 4,707,744 ops/sec ±18.83% (10 runs sampled)
    EventEmitter x 3,545,748 ops/sec ±21.66% (10 runs sampled)
    EventEmitter3 x 1,775,102 ops/sec ±4.80% (10 runs sampled)
    EventEmitter2 x 1,205,277 ops/sec ±6.12% (10 runs sampled)
    JS-Signals x 746,931 ops/sec ±4.62% (10 runs sampled)
    dripEmitterEnhanced x 674,038 ops/sec ±5.71% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

TAP version 13
# emit arrays
ok 1 Theoretical max runs without error
ok 2 called three times
ok 3 EventEmitter runs without error
ok 4 called three times
ok 5 EventEmitter2 runs without error
ok 6 called three times
ok 7 EventEmitter3 runs without error
ok 8 called three times
ok 9 dripEmitter runs without error
ok 10 called three times
ok 11 dripEmitterEnhanced runs without error
ok 12 called three times
ok 13 RXJS runs without error
ok 14 called three times
ok 15 ReactiveProperty runs without error
ok 16 called three times
ok 17 JS-Signals runs without error
ok 18 called three times
ok 19 MiniSignals runs without error
ok 20 called three times
ok 21 signal-emitter runs without error
ok 22 called three times
ok 23 event-signal runs without error
ok 24 called three times
ok 25 signal-lite runs without error
ok 26 called three times
## emit arrays

    Theoretical max x 13,410,607 ops/sec ±4.19% (10 runs sampled) *burn in*
    MiniSignals x 7,157,556 ops/sec ±4.41% (10 runs sampled)
    signal-lite x 6,099,499 ops/sec ±19.12% (10 runs sampled)
    dripEmitter x 5,336,784 ops/sec ±7.51% (10 runs sampled)
    ReactiveProperty x 5,047,724 ops/sec ±5.63% (10 runs sampled)
    EventEmitter3 x 4,697,615 ops/sec ±6.87% (10 runs sampled)
    EventEmitter x 3,186,444 ops/sec ±5.76% (10 runs sampled)
    event-signal x 1,904,688 ops/sec ±4.50% (10 runs sampled)
    EventEmitter2 x 1,666,724 ops/sec ±3.35% (10 runs sampled)
    RXJS x 1,471,175 ops/sec ±3.45% (10 runs sampled)
    dripEmitterEnhanced x 619,175 ops/sec ±4.76% (10 runs sampled)
    JS-Signals x 205,747 ops/sec ±4.78% (10 runs sampled)
    signal-emitter x 205,261 ops/sec ±13.51% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..26
# tests 26
# pass  26

# ok

TAP version 13
# emit with bound function
ok 1 Theoretical max runs without error
ok 2 called one time
ok 3 EventEmitter runs without error
ok 4 called one time
ok 5 EventEmitter2 runs without error
ok 6 called one time
ok 7 EventEmitter3 runs without error
ok 8 called one time
ok 9 dripEmitter runs without error
ok 10 called one time
ok 11 dripEmitterEnhanced runs without error
ok 12 called one time
ok 13 RXJS runs without error
ok 14 called one time
ok 15 ReactiveProperty runs without error
ok 16 called one time
ok 17 JS-Signals runs without error
ok 18 called one time
ok 19 MiniSignals runs without error
ok 20 called one time
ok 21 signal-emitter runs without error
ok 22 called one time
ok 23 event-signal runs without error
ok 24 called one time
ok 25 signal-lite runs without error
ok 26 called one time
## emit with bound function

    Theoretical max x 31,510,849 ops/sec ±8.46% (10 runs sampled) *burn in*
    ReactiveProperty x 16,666,068 ops/sec ±6.01% (10 runs sampled)
    dripEmitter x 13,268,182 ops/sec ±6.70% (10 runs sampled)
    EventEmitter3 x 12,709,633 ops/sec ±11.57% (10 runs sampled)
    MiniSignals x 7,902,891 ops/sec ±7.19% (10 runs sampled)
    EventEmitter x 8,004,231 ops/sec ±18.62% (10 runs sampled)
    signal-lite x 6,230,629 ops/sec ±9.10% (10 runs sampled)
    event-signal x 5,753,250 ops/sec ±2.74% (10 runs sampled)
    EventEmitter2 x 5,020,509 ops/sec ±5.14% (10 runs sampled)
    RXJS x 4,764,673 ops/sec ±6.25% (10 runs sampled)
    dripEmitterEnhanced x 2,247,057 ops/sec ±15.10% (10 runs sampled)
    signal-emitter x 743,921 ops/sec ±5.29% (10 runs sampled)
    JS-Signals x 545,268 ops/sec ±6.08% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

# ok

TAP version 13
# emit with context
ok 1 Theoretical max runs without error
ok 2 called one time
ok 3 EventEmitter runs without error
ok 4 called one time
ok 5 EventEmitter2 runs without error
ok 6 called one time
ok 7 EventEmitter3 runs without error
ok 8 called one time
ok 9 dripEmitter runs without error
ok 10 called one time
ok 11 dripEmitterEnhanced runs without error
ok 12 called one time
ok 13 RXJS runs without error
ok 14 called one time
ok 15 ReactiveProperty runs without error
ok 16 called one time
ok 17 JS-Signals runs without error
ok 18 called one time
ok 19 MiniSignals runs without error
ok 20 called one time
ok 21 signal-emitter runs without error
ok 22 called one time
ok 23 event-signal runs without error
ok 24 called one time
ok 25 signal-lite runs without error
ok 26 called one time
## emit with context

    Theoretical max x 34,721,399 ops/sec ±7.25% (10 runs sampled) *burn in*
    MiniSignals x 20,400,667 ops/sec ±4.49% (10 runs sampled)
    signal-lite x 19,449,377 ops/sec ±5.55% (10 runs sampled)
    ReactiveProperty x 15,956,979 ops/sec ±3.92% (10 runs sampled)
    EventEmitter3 x 14,992,312 ops/sec ±3.25% (10 runs sampled)
    dripEmitter x 14,340,762 ops/sec ±5.01% (10 runs sampled)
    EventEmitter x 10,268,395 ops/sec ±1.88% (10 runs sampled)
    event-signal x 6,458,036 ops/sec ±3.53% (10 runs sampled)
    EventEmitter2 x 5,250,085 ops/sec ±3.10% (10 runs sampled)
    RXJS x 4,649,607 ops/sec ±3.35% (10 runs sampled)
    dripEmitterEnhanced x 2,415,506 ops/sec ±6.74% (10 runs sampled)
    signal-emitter x 690,590 ops/sec ±7.59% (10 runs sampled)
    JS-Signals x 633,264 ops/sec ±2.80% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..26
# tests 26
# pass  26

# ok

TAP version 13
# emit many listeners
ok 1 Theoretical max runs without error
ok 2 called N times
ok 3 EventEmitter runs without error
ok 4 called N times
ok 5 EventEmitter2 runs without error
ok 6 called N times
ok 7 EventEmitter3 runs without error
ok 8 called N times
ok 9 dripEmitter runs without error
ok 10 called N times
ok 11 dripEmitterEnhanced runs without error
ok 12 called N times
ok 13 RXJS runs without error
ok 14 called N times
ok 15 ReactiveProperty runs without error
ok 16 called N times
ok 17 JS-Signals runs without error
ok 18 called N times
ok 19 MiniSignals runs without error
ok 20 called N times
ok 21 signal-emitter runs without error
ok 22 called N times
ok 23 event-signal runs without error
ok 24 called N times
ok 25 signal-lite runs without error
ok 26 called N times
ok 27 minivents runs without error
ok 28 called N times
## emit many listeners

    Theoretical max x 5,059,548 ops/sec ±3.75% (10 runs sampled) *burn in*
    signal-lite x 4,564,158 ops/sec ±3.65% (10 runs sampled)
    MiniSignals x 4,579,816 ops/sec ±5.89% (10 runs sampled)
    dripEmitter x 4,376,954 ops/sec ±5.60% (10 runs sampled)
    ReactiveProperty x 3,876,289 ops/sec ±6.06% (10 runs sampled)
    EventEmitter x 3,726,289 ops/sec ±6.12% (10 runs sampled)
    EventEmitter3 x 3,762,846 ops/sec ±10.85% (10 runs sampled)
    event-signal x 2,844,259 ops/sec ±3.70% (10 runs sampled)
    EventEmitter2 x 2,566,562 ops/sec ±6.15% (10 runs sampled)
    RXJS x 1,644,420 ops/sec ±4.14% (10 runs sampled)
    dripEmitterEnhanced x 1,336,970 ops/sec ±6.91% (10 runs sampled)
    signal-emitter x 635,051 ops/sec ±5.27% (10 runs sampled)
    JS-Signals x 283,692 ops/sec ±5.32% (10 runs sampled)
    minivents x 106,212 ops/sec ±9.42% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals, dripEmitter__*


1..28
# tests 28
# pass  28

# ok

TAP version 13
# emit many parameters
ok 1 Theoretical max runs without error
ok 2 called three times
ok 3 EventEmitter runs without error
ok 4 called three times
ok 5 EventEmitter2 runs without error
ok 6 called three times
ok 7 EventEmitter3 runs without error
ok 8 called three times
ok 9 dripEmitterEnhanced runs without error
ok 10 called three times
ok 11 JS-Signals runs without error
ok 12 called three times
ok 13 MiniSignals runs without error
ok 14 called three times
ok 15 signal-emitter runs without error
ok 16 called three times
ok 17 signal-lite runs without error
ok 18 called three times
ok 19 minivents runs without error
ok 20 called three times
## emit many parameters

    Theoretical max x 17,859,509 ops/sec ±3.87% (10 runs sampled) *burn in*
    MiniSignals x 14,832,045 ops/sec ±5.33% (10 runs sampled)
    signal-lite x 13,926,661 ops/sec ±6.07% (10 runs sampled)
    EventEmitter3 x 744,993 ops/sec ±4.93% (10 runs sampled)
    EventEmitter x 703,498 ops/sec ±3.81% (10 runs sampled)
    EventEmitter2 x 682,237 ops/sec ±5.61% (10 runs sampled)
    dripEmitterEnhanced x 560,320 ops/sec ±4.81% (10 runs sampled)
    signal-emitter x 377,331 ops/sec ±6.11% (10 runs sampled)
    JS-Signals x 208,614 ops/sec ±4.42% (10 runs sampled)
    minivents x 123,322 ops/sec ±17.82% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..20
# tests 20
# pass  20

# ok

TAP version 13
# emit objects
ok 1 Theoretical max runs without error
ok 2 called three times
ok 3 EventEmitter runs without error
ok 4 called three times
ok 5 EventEmitter2 runs without error
ok 6 called three times
ok 7 EventEmitter3 runs without error
ok 8 called three times
ok 9 dripEmitter runs without error
ok 10 called three times
ok 11 dripEmitterEnhanced runs without error
ok 12 called three times
ok 13 RXJS runs without error
ok 14 called three times
ok 15 ReactiveProperty runs without error
ok 16 called three times
ok 17 JS-Signals runs without error
ok 18 called three times
ok 19 MiniSignals runs without error
ok 20 called three times
ok 21 signal-emitter runs without error
ok 22 called three times
ok 23 event-signal runs without error
ok 24 called three times
ok 25 signal-lite runs without error
ok 26 called three times
ok 27 EventDispatcher runs without error
ok 28 called three times
## emit objects

    Theoretical max x 11,688,269 ops/sec ±6.47% (10 runs sampled) *burn in*
    MiniSignals x 6,025,531 ops/sec ±3.97% (10 runs sampled)
    signal-lite x 6,051,438 ops/sec ±10.25% (10 runs sampled)
    ReactiveProperty x 5,156,854 ops/sec ±8.16% (10 runs sampled)
    EventEmitter3 x 4,432,382 ops/sec ±5.62% (10 runs sampled)
    dripEmitter x 4,305,174 ops/sec ±14.38% (10 runs sampled)
    EventDispatcher x 2,418,781 ops/sec ±3.34% (10 runs sampled)
    EventEmitter x 2,560,260 ops/sec ±16.56% (10 runs sampled)
    event-signal x 1,874,636 ops/sec ±4.29% (10 runs sampled)
    RXJS x 1,432,114 ops/sec ±8.65% (10 runs sampled)
    EventEmitter2 x 1,388,148 ops/sec ±11.86% (10 runs sampled)
    dripEmitterEnhanced x 623,522 ops/sec ±2.70% (10 runs sampled)
    signal-emitter x 222,117 ops/sec ±12.92% (10 runs sampled)
    JS-Signals x 178,021 ops/sec ±16.02% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..28
# tests 28
# pass  28

# ok

TAP version 13
# emit one parameter
ok 1 Theoretical max runs without error
ok 2 called once
ok 3 EventEmitter runs without error
ok 4 called once
ok 5 EventEmitter2 runs without error
ok 6 called once
ok 7 EventEmitter3 runs without error
ok 8 called once
ok 9 dripEmitter runs without error
ok 10 called once
ok 11 dripEmitterEnhanced runs without error
ok 12 called once
ok 13 d3-dispatch runs without error
ok 14 called once
ok 15 namespace-emitter runs without error
ok 16 called once
ok 17 ReactiveProperty runs without error
ok 18 called once
ok 19 observable runs without error
ok 20 called once
ok 21 observ runs without error
ok 22 called once
ok 23 RXJS runs without error
ok 24 called once
ok 25 JS-Signals runs without error
ok 26 called once
ok 27 MiniSignals runs without error
ok 28 called once
ok 29 signal-emitter runs without error
ok 30 called once
ok 31 event-signal runs without error
ok 32 called once
ok 33 signal-lite runs without error
ok 34 called once
ok 35 minivents runs without error
ok 36 called once
## emit one parameter

    Theoretical max x 25,859,243 ops/sec ±2.82% (10 runs sampled) *burn in*
    signal-lite x 16,611,509 ops/sec ±6.18% (10 runs sampled)
    dripEmitter x 14,857,773 ops/sec ±4.87% (10 runs sampled)
    ReactiveProperty x 14,215,778 ops/sec ±5.79% (10 runs sampled)
    EventEmitter3 x 13,140,182 ops/sec ±7.86% (10 runs sampled)
    MiniSignals x 14,074,972 ops/sec ±27.26% (10 runs sampled)
    EventEmitter x 9,378,436 ops/sec ±4.36% (10 runs sampled)
    observ x 6,299,033 ops/sec ±4.03% (10 runs sampled)
    EventEmitter2 x 5,100,354 ops/sec ±2.47% (10 runs sampled)
    event-signal x 5,122,672 ops/sec ±17.14% (10 runs sampled)
    RXJS x 3,931,396 ops/sec ±12.31% (10 runs sampled)
    d3-dispatch x 1,940,159 ops/sec ±4.57% (10 runs sampled)
    dripEmitterEnhanced x 1,871,555 ops/sec ±6.03% (10 runs sampled)
    signal-emitter x 666,984 ops/sec ±15.45% (10 runs sampled)
    namespace-emitter x 560,998 ops/sec ±6.31% (10 runs sampled)
    JS-Signals x 553,561 ops/sec ±5.22% (10 runs sampled)
    observable x 519,579 ops/sec ±3.48% (10 runs sampled)
    minivents x 478,885 ops/sec ±7.39% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


1..36
# tests 36
# pass  36

# ok

TAP version 13
# emit
ok 1 Theoretical max runs without error
ok 2 called four times
ok 3 EventEmitter runs without error
ok 4 called four times
ok 5 EventEmitter2 runs without error
ok 6 called four times
ok 7 EventEmitter3 runs without error
ok 8 called four times
ok 9 dripEmitterEnhanced runs without error
ok 10 called four times
ok 11 JS-Signals runs without error
ok 12 called four times
ok 13 MiniSignals runs without error
ok 14 called four times
ok 15 signal-emitter runs without error
ok 16 called four times
ok 17 signal-lite runs without error
ok 18 called four times
## emit

    Theoretical max x 10,232,370 ops/sec ±6.93% (10 runs sampled) *burn in*
    MiniSignals x 4,956,314 ops/sec ±10.81% (10 runs sampled)
    EventEmitter x 2,442,165 ops/sec ±6.90% (10 runs sampled)
    EventEmitter3 x 1,049,464 ops/sec ±18.87% (10 runs sampled)
    EventEmitter2 x 654,818 ops/sec ±12.95% (10 runs sampled)
    signal-lite x 722,107 ops/sec ±39.64% (10 runs sampled)
    dripEmitterEnhanced x 393,616 ops/sec ±6.07% (10 runs sampled)
    signal-emitter x 127,020 ops/sec ±9.45% (10 runs sampled)
    JS-Signals x 116,543 ops/sec ±6.96% (10 runs sampled)

*Fastest is __MiniSignals__*


1..18
# tests 18
# pass  18

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
ok 9 DripEmitter runs without error
ok 10 DripEmitter constructed an object
ok 11 DripEmitterEnhanced runs without error
ok 12 DripEmitterEnhanced constructed an object
ok 13 ReactiveProperty runs without error
ok 14 ReactiveProperty constructed an object
ok 15 JS-Signals runs without error
ok 16 JS-Signals constructed an object
ok 17 MiniSignals runs without error
ok 18 MiniSignals constructed an object
ok 19 EventDispatcher runs without error
ok 20 EventDispatcher constructed an object
## init

    EventDispatcher x 46,568,879 ops/sec ±2.92% (10 runs sampled)
    EventEmitter3 x 44,961,250 ops/sec ±6.14% (10 runs sampled)
    DripEmitter x 41,107,754 ops/sec ±11.74% (10 runs sampled)
    MiniSignals x 36,408,512 ops/sec ±4.80% (10 runs sampled)
    Theoretical max x 39,048,634 ops/sec ±37.75% (10 runs sampled) *burn in*
    EventEmitter2 x 29,411,686 ops/sec ±7.19% (10 runs sampled)
    EventEmitter x 22,816,660 ops/sec ±14.27% (10 runs sampled)
    DripEmitterEnhanced x 19,787,616 ops/sec ±6.38% (10 runs sampled)
    JS-Signals x 2,077,800 ops/sec ±16.02% (10 runs sampled)
    ReactiveProperty x 1,185,010 ops/sec ±23.73% (10 runs sampled)

*Fastest is __EventDispatcher, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

