
TAP version 13
# Platform
ok 1 (unnamed assert)
Chrome 51.0.2704.63 on OS X 10.11.2

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

    Theoretical max x 54,551,982 ops/sec ±4.99% (10 runs sampled) *burn in*
    EventEmitter3 x 53,003,694 ops/sec ±5.02% (10 runs sampled)
    EventDispatcher x 52,673,694 ops/sec ±6.29% (10 runs sampled)
    DripEmitter x 50,659,186 ops/sec ±4.20% (10 runs sampled)
    EventEmitter2 x 30,820,982 ops/sec ±5.87% (10 runs sampled)
    MiniSignals x 28,519,486 ops/sec ±11.70% (10 runs sampled)
    EventEmitter x 26,659,003 ops/sec ±4.72% (10 runs sampled)
    JS-Signals x 14,903,741 ops/sec ±18.36% (10 runs sampled)
    DripEmitterEnhanced x 10,227,381 ops/sec ±15.65% (10 runs sampled)
    ReactiveProperty x 8,482,378 ops/sec ±12.55% (10 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher, DripEmitter__*


1..20
# tests 20
# pass  20

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

    Theoretical max x 77,318,236 ops/sec ±9.38% (10 runs sampled) *burn in*
    MiniSignals x 6,109,371 ops/sec ±5.58% (10 runs sampled)
    EventEmitter3 x 2,960,638 ops/sec ±12.41% (10 runs sampled)
    EventEmitter2 x 1,931,024 ops/sec ±3.43% (10 runs sampled)
    dripEmitterEnhanced x 413,399 ops/sec ±2.45% (10 runs sampled)
    signal-lite x 382,748 ops/sec ±1.99% (10 runs sampled)
    signal-emitter x 269,658 ops/sec ±5.87% (10 runs sampled)
    JS-Signals x 181,669 ops/sec ±1.98% (10 runs sampled)
    EventEmitter x 175,205 ops/sec ±15.07% (10 runs sampled)

*Fastest is __MiniSignals__*


1..18
# tests 18
# pass  18

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

    Theoretical max x 181,836,258 ops/sec ±2.66% (10 runs sampled) *burn in*
    MiniSignals x 25,726,010 ops/sec ±2.64% (10 runs sampled)
    ReactiveProperty x 23,752,152 ops/sec ±17.77% (10 runs sampled)
    dripEmitter x 19,837,780 ops/sec ±5.00% (10 runs sampled)
    EventEmitter3 x 16,571,620 ops/sec ±2.46% (10 runs sampled)
    observ x 15,601,890 ops/sec ±7.79% (10 runs sampled)
    event-signal x 11,794,509 ops/sec ±3.73% (10 runs sampled)
    d3-dispatch x 10,192,768 ops/sec ±3.67% (10 runs sampled)
    EventEmitter2 x 9,256,417 ops/sec ±2.14% (10 runs sampled)
    RXJS x 7,914,875 ops/sec ±4.96% (10 runs sampled)
    signal-lite x 1,585,166 ops/sec ±3.11% (10 runs sampled)
    dripEmitterEnhanced x 1,266,143 ops/sec ±10.93% (10 runs sampled)
    signal-emitter x 1,131,787 ops/sec ±3.35% (10 runs sampled)
    EventEmitter x 946,116 ops/sec ±6.08% (10 runs sampled)
    minivents x 784,251 ops/sec ±3.37% (10 runs sampled)
    JS-Signals x 783,578 ops/sec ±4.29% (10 runs sampled)
    namespace-emitter x 487,720 ops/sec ±4.12% (10 runs sampled)
    observable x 438,295 ops/sec ±4.93% (10 runs sampled)

*Fastest is __MiniSignals, ReactiveProperty__*


1..36
# tests 36
# pass  36

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

    ReactiveProperty x 9,794,032 ops/sec ±3.69% (10 runs sampled)
    Theoretical max x 3,948,772 ops/sec ±3.39% (10 runs sampled) *burn in*
    MiniSignals x 2,643,868 ops/sec ±1.57% (10 runs sampled)
    dripEmitter x 2,298,445 ops/sec ±3.21% (10 runs sampled)
    EventEmitter3 x 2,120,298 ops/sec ±2.51% (10 runs sampled)
    event-signal x 1,839,233 ops/sec ±2.41% (10 runs sampled)
    EventEmitter2 x 1,643,487 ops/sec ±2.82% (10 runs sampled)
    RXJS x 1,503,773 ops/sec ±3.69% (10 runs sampled)
    EventDispatcher x 1,489,209 ops/sec ±2.95% (10 runs sampled)
    dripEmitterEnhanced x 486,397 ops/sec ±4.29% (10 runs sampled)
    signal-lite x 457,150 ops/sec ±3.34% (10 runs sampled)
    signal-emitter x 321,075 ops/sec ±5.71% (10 runs sampled)
    EventEmitter x 277,735 ops/sec ±2.81% (10 runs sampled)
    JS-Signals x 232,648 ops/sec ±3.37% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 179,377,456 ops/sec ±5.22% (10 runs sampled) *burn in*
    MiniSignals x 24,789,231 ops/sec ±1.78% (10 runs sampled)
    EventEmitter3 x 7,339,287 ops/sec ±2.96% (10 runs sampled)
    EventEmitter2 x 5,660,288 ops/sec ±2.33% (10 runs sampled)
    dripEmitterEnhanced x 1,504,938 ops/sec ±2.46% (10 runs sampled)
    signal-lite x 957,146 ops/sec ±3.50% (10 runs sampled)
    signal-emitter x 891,611 ops/sec ±2.17% (10 runs sampled)
    EventEmitter x 407,696 ops/sec ±1.90% (10 runs sampled)
    JS-Signals x 352,751 ops/sec ±4.86% (10 runs sampled)
    minivents x 259,190 ops/sec ±3.32% (10 runs sampled)

*Fastest is __MiniSignals__*


1..20
# tests 20
# pass  20

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

    ReactiveProperty x 17,417,601 ops/sec ±16.74% (10 runs sampled)
    Theoretical max x 5,150,116 ops/sec ±2.80% (10 runs sampled) *burn in*
    MiniSignals x 5,105,879 ops/sec ±6.84% (10 runs sampled)
    dripEmitter x 4,383,760 ops/sec ±5.84% (10 runs sampled)
    EventEmitter3 x 3,972,387 ops/sec ±3.03% (10 runs sampled)
    event-signal x 3,742,617 ops/sec ±3.15% (10 runs sampled)
    EventEmitter2 x 3,149,556 ops/sec ±4.21% (10 runs sampled)
    RXJS x 2,102,329 ops/sec ±3.71% (10 runs sampled)
    dripEmitterEnhanced x 1,120,241 ops/sec ±5.53% (10 runs sampled)
    signal-emitter x 843,958 ops/sec ±5.32% (10 runs sampled)
    signal-lite x 442,063 ops/sec ±5.77% (10 runs sampled)
    EventEmitter x 368,945 ops/sec ±4.03% (10 runs sampled)
    JS-Signals x 250,906 ops/sec ±12.16% (10 runs sampled)
    minivents x 179,473 ops/sec ±6.89% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..28
# tests 28
# pass  28

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

    Theoretical max x 90,336,392 ops/sec ±4.79% (10 runs sampled) *burn in*
    ReactiveProperty x 31,089,902 ops/sec ±5.13% (10 runs sampled)
    MiniSignals x 28,173,240 ops/sec ±6.81% (10 runs sampled)
    EventEmitter3 x 16,932,831 ops/sec ±3.85% (10 runs sampled)
    dripEmitter x 17,061,844 ops/sec ±9.28% (10 runs sampled)
    event-signal x 11,709,975 ops/sec ±4.07% (10 runs sampled)
    RXJS x 7,406,668 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 7,893,896 ops/sec ±14.69% (10 runs sampled)
    dripEmitterEnhanced x 1,587,642 ops/sec ±8.46% (10 runs sampled)
    signal-lite x 1,449,075 ops/sec ±12.38% (10 runs sampled)
    signal-emitter x 1,106,142 ops/sec ±3.96% (10 runs sampled)
    EventEmitter x 852,457 ops/sec ±5.34% (10 runs sampled)
    JS-Signals x 786,498 ops/sec ±5.53% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 91,927,046 ops/sec ±4.26% (10 runs sampled) *burn in*
    ReactiveProperty x 28,511,387 ops/sec ±3.86% (10 runs sampled)
    MiniSignals x 25,419,356 ops/sec ±2.78% (10 runs sampled)
    dripEmitter x 18,678,463 ops/sec ±3.75% (10 runs sampled)
    EventEmitter3 x 14,706,526 ops/sec ±4.56% (10 runs sampled)
    event-signal x 10,802,989 ops/sec ±4.23% (10 runs sampled)
    EventEmitter2 x 9,106,803 ops/sec ±6.09% (10 runs sampled)
    RXJS x 7,454,489 ops/sec ±4.65% (10 runs sampled)
    dripEmitterEnhanced x 1,669,808 ops/sec ±3.03% (10 runs sampled)
    signal-lite x 1,622,684 ops/sec ±3.55% (10 runs sampled)
    signal-emitter x 1,130,697 ops/sec ±2.08% (10 runs sampled)
    EventEmitter x 968,223 ops/sec ±5.80% (10 runs sampled)
    JS-Signals x 759,418 ops/sec ±3.81% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

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

    Theoretical max x 22,539,642 ops/sec ±4.96% (10 runs sampled) *burn in*
    ReactiveProperty x 9,027,537 ops/sec ±3.53% (10 runs sampled)
    MiniSignals x 6,061,381 ops/sec ±6.13% (10 runs sampled)
    dripEmitter x 4,836,756 ops/sec ±5.20% (10 runs sampled)
    EventEmitter3 x 3,843,627 ops/sec ±17.00% (10 runs sampled)
    event-signal x 3,106,639 ops/sec ±6.82% (10 runs sampled)
    EventEmitter2 x 2,738,877 ops/sec ±2.76% (10 runs sampled)
    RXJS x 2,237,931 ops/sec ±4.83% (10 runs sampled)
    dripEmitterEnhanced x 526,365 ops/sec ±4.40% (10 runs sampled)
    signal-lite x 478,294 ops/sec ±4.43% (10 runs sampled)
    EventEmitter x 312,695 ops/sec ±2.55% (10 runs sampled)
    signal-emitter x 327,065 ops/sec ±9.62% (10 runs sampled)
    JS-Signals x 236,814 ops/sec ±8.46% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

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

    dripEmitter x 26,150,090 ops/sec ±4.18% (10 runs sampled)
    ReactiveProperty x 14,304,432 ops/sec ±8.59% (10 runs sampled)
    EventEmitter3 x 4,371,156 ops/sec ±14.58% (10 runs sampled)
    EventDispatcher x 3,633,058 ops/sec ±17.51% (10 runs sampled)
    MiniSignals x 2,680,369 ops/sec ±17.10% (10 runs sampled)
    EventEmitter x 2,161,735 ops/sec ±9.07% (10 runs sampled)
    EventEmitter2 x 1,915,034 ops/sec ±10.75% (10 runs sampled)
    dripEmitterEnhanced x 408,881 ops/sec ±14.38% (10 runs sampled)
    JS-Signals x 347,991 ops/sec ±14.83% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

