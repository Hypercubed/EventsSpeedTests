
TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# add-remove
ok 2 runs without error
ok 3 never called
ok 4 runs without error
ok 5 never called
ok 6 runs without error
ok 7 never called
ok 8 runs without error
ok 9 never called
ok 10 runs without error
ok 11 never called
ok 12 runs without error
ok 13 never called
ok 14 runs without error
ok 15 never called
ok 16 runs without error
ok 17 never called
ok 18 runs without error
ok 19 never called
## add-remove

    dripEmitter x 8,364,688 ops/sec ±4.58% (10 runs sampled)
    EventDispatcher x 3,564,016 ops/sec ±11.26% (10 runs sampled)
    MiniSignals x 3,825,967 ops/sec ±25.77% (10 runs sampled)
    ReactiveProperty x 1,861,656 ops/sec ±13.98% (10 runs sampled)
    EventEmitter3 x 1,688,630 ops/sec ±5.42% (10 runs sampled)
    JS-Signals x 866,467 ops/sec ±4.65% (10 runs sampled)
    EventEmitter x 886,112 ops/sec ±11.33% (10 runs sampled)
    dripEmitterEnhanced x 793,917 ops/sec ±3.89% (10 runs sampled)
    EventEmitter2 x 635,556 ops/sec ±6.25% (10 runs sampled)

*Fastest is __dripEmitter__*


1..19
# tests 19
# pass  19

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit arrays
ok 2 runs without error
ok 3 called three times
ok 4 runs without error
ok 5 called three times
ok 6 runs without error
ok 7 called three times
ok 8 runs without error
ok 9 called three times
ok 10 runs without error
ok 11 called three times
ok 12 runs without error
ok 13 called three times
ok 14 runs without error
ok 15 called three times
ok 16 runs without error
ok 17 called three times
ok 18 runs without error
ok 19 called three times
ok 20 runs without error
ok 21 called three times
ok 22 runs without error
ok 23 called three times
ok 24 runs without error
ok 25 called three times
ok 26 runs without error
ok 27 called three times
## emit arrays

    Theoretical max x 1,356,744 ops/sec ±31.73% (10 runs sampled) *burn in*
    MiniSignals x 942,722 ops/sec ±7.60% (10 runs sampled)
    event-signal x 787,234 ops/sec ±5.92% (10 runs sampled)
    dripEmitter x 726,516 ops/sec ±14.47% (10 runs sampled)
    ReactiveProperty x 652,408 ops/sec ±6.60% (10 runs sampled)
    RXJS x 610,739 ops/sec ±6.10% (10 runs sampled)
    EventEmitter2 x 595,109 ops/sec ±6.81% (10 runs sampled)
    EventEmitter3 x 529,493 ops/sec ±6.89% (10 runs sampled)
    signal-lite x 501,857 ops/sec ±4.11% (10 runs sampled)
    EventEmitter x 438,323 ops/sec ±9.24% (10 runs sampled)
    JS-Signals x 360,380 ops/sec ±6.05% (10 runs sampled)
    dripEmitterEnhanced x 376,312 ops/sec ±13.13% (10 runs sampled)
    signal-emitter x 222,823 ops/sec ±5.58% (10 runs sampled)

*Fastest is __MiniSignals__*


1..27
# tests 27
# pass  27

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit with bound function
ok 2 runs without error
ok 3 called one time
ok 4 runs without error
ok 5 called one time
ok 6 runs without error
ok 7 called one time
ok 8 runs without error
ok 9 called one time
ok 10 runs without error
ok 11 called one time
ok 12 runs without error
ok 13 called one time
ok 14 runs without error
ok 15 called one time
ok 16 runs without error
ok 17 called one time
ok 18 runs without error
ok 19 called one time
ok 20 runs without error
ok 21 called one time
ok 22 runs without error
ok 23 called one time
ok 24 runs without error
ok 25 called one time
ok 26 runs without error
ok 27 called one time
## emit with bound function

    Theoretical max x 5,624,621 ops/sec ±24.67% (10 runs sampled) *burn in*
    MiniSignals x 3,552,503 ops/sec ±3.01% (10 runs sampled)
    event-signal x 2,593,078 ops/sec ±9.13% (10 runs sampled)
    dripEmitter x 2,216,177 ops/sec ±12.14% (10 runs sampled)
    RXJS x 2,058,336 ops/sec ±4.63% (10 runs sampled)
    ReactiveProperty x 1,999,953 ops/sec ±5.93% (10 runs sampled)
    EventEmitter2 x 1,904,878 ops/sec ±10.23% (10 runs sampled)
    signal-lite x 1,547,829 ops/sec ±7.00% (10 runs sampled)
    EventEmitter3 x 1,462,566 ops/sec ±15.28% (10 runs sampled)
    EventEmitter x 1,326,142 ops/sec ±7.78% (10 runs sampled)
    JS-Signals x 1,128,147 ops/sec ±7.99% (10 runs sampled)
    dripEmitterEnhanced x 928,667 ops/sec ±16.10% (10 runs sampled)
    signal-emitter x 683,546 ops/sec ±6.57% (10 runs sampled)

*Fastest is __MiniSignals__*


1..27
# tests 27
# pass  27

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit with context
ok 2 runs without error
ok 3 called one time
ok 4 runs without error
ok 5 called one time
ok 6 runs without error
ok 7 called one time
ok 8 runs without error
ok 9 called one time
ok 10 runs without error
ok 11 called one time
ok 12 runs without error
ok 13 called one time
ok 14 runs without error
ok 15 called one time
ok 16 runs without error
ok 17 called one time
ok 18 runs without error
ok 19 called one time
ok 20 runs without error
ok 21 called one time
ok 22 runs without error
ok 23 called one time
ok 24 runs without error
ok 25 called one time
ok 26 runs without error
ok 27 called one time
## emit with context

    Theoretical max x 5,528,261 ops/sec ±27.91% (10 runs sampled) *burn in*
    MiniSignals x 3,264,623 ops/sec ±8.20% (10 runs sampled)
    event-signal x 2,635,813 ops/sec ±13.05% (10 runs sampled)
    dripEmitter x 2,084,311 ops/sec ±12.43% (10 runs sampled)
    RXJS x 1,911,460 ops/sec ±4.43% (10 runs sampled)
    EventEmitter3 x 1,713,530 ops/sec ±8.21% (10 runs sampled)
    ReactiveProperty x 1,692,374 ops/sec ±11.81% (10 runs sampled)
    EventEmitter2 x 1,654,076 ops/sec ±15.87% (10 runs sampled)
    signal-lite x 1,517,612 ops/sec ±10.75% (10 runs sampled)
    EventEmitter x 1,358,461 ops/sec ±9.30% (10 runs sampled)
    JS-Signals x 1,137,825 ops/sec ±7.05% (10 runs sampled)
    dripEmitterEnhanced x 910,164 ops/sec ±21.83% (10 runs sampled)
    signal-emitter x 595,606 ops/sec ±7.02% (10 runs sampled)

*Fastest is __MiniSignals__*


1..27
# tests 27
# pass  27

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit many listeners
ok 2 runs without error
ok 3 called N times
ok 4 runs without error
ok 5 called N times
ok 6 runs without error
ok 7 called N times
ok 8 runs without error
ok 9 called N times
ok 10 runs without error
ok 11 called N times
ok 12 runs without error
ok 13 called N times
ok 14 runs without error
ok 15 called N times
ok 16 runs without error
ok 17 called N times
ok 18 runs without error
ok 19 called N times
ok 20 runs without error
ok 21 called N times
ok 22 runs without error
ok 23 called N times
ok 24 runs without error
ok 25 called N times
ok 26 runs without error
ok 27 called N times
ok 28 runs without error
ok 29 called N times
## emit many listeners

    Theoretical max x 1,500,984 ops/sec ±40.42% (10 runs sampled) *burn in*
    EventEmitter3 x 666,170 ops/sec ±7.81% (10 runs sampled)
    EventEmitter2 x 650,749 ops/sec ±7.44% (10 runs sampled)
    event-signal x 606,965 ops/sec ±15.41% (10 runs sampled)
    MiniSignals x 560,668 ops/sec ±15.98% (10 runs sampled)
    EventEmitter x 496,749 ops/sec ±7.26% (10 runs sampled)
    signal-lite x 458,803 ops/sec ±6.85% (10 runs sampled)
    ReactiveProperty x 449,606 ops/sec ±15.78% (10 runs sampled)
    dripEmitter x 508,781 ops/sec ±33.16% (10 runs sampled)
    signal-emitter x 349,494 ops/sec ±9.37% (10 runs sampled)
    dripEmitterEnhanced x 340,055 ops/sec ±8.95% (10 runs sampled)
    RXJS x 292,026 ops/sec ±14.18% (10 runs sampled)
    JS-Signals x 277,836 ops/sec ±26.73% (10 runs sampled)
    minivents x 225,268 ops/sec ±24.04% (10 runs sampled)

*Fastest is __EventEmitter3, EventEmitter2, event-signal, dripEmitter__*


1..29
# tests 29
# pass  29

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit many parameters
ok 2 runs without error
ok 3 called three times
ok 4 runs without error
ok 5 called three times
ok 6 runs without error
ok 7 called three times
ok 8 runs without error
ok 9 called three times
ok 10 runs without error
ok 11 called three times
ok 12 runs without error
ok 13 called three times
ok 14 runs without error
ok 15 called three times
ok 16 runs without error
ok 17 called three times
ok 18 runs without error
ok 19 called three times
ok 20 runs without error
ok 21 called three times
## emit many parameters

    Theoretical max x 7,664,103 ops/sec ±36.00% (10 runs sampled) *burn in*
    MiniSignals x 2,798,105 ops/sec ±18.63% (10 runs sampled)
    signal-lite x 1,235,953 ops/sec ±7.44% (10 runs sampled)
    EventEmitter2 x 1,295,500 ops/sec ±13.10% (10 runs sampled)
    EventEmitter x 1,215,923 ops/sec ±13.12% (10 runs sampled)
    EventEmitter3 x 1,100,848 ops/sec ±11.43% (10 runs sampled)
    minivents x 872,599 ops/sec ±5.38% (10 runs sampled)
    JS-Signals x 760,956 ops/sec ±9.74% (10 runs sampled)
    dripEmitterEnhanced x 720,609 ops/sec ±10.76% (10 runs sampled)
    signal-emitter x 432,113 ops/sec ±4.68% (10 runs sampled)

*Fastest is __MiniSignals__*


1..21
# tests 21
# pass  21

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit objects
ok 2 runs without error
ok 3 called three times
ok 4 runs without error
ok 5 called three times
ok 6 runs without error
ok 7 called three times
ok 8 runs without error
ok 9 called three times
ok 10 runs without error
ok 11 called three times
ok 12 runs without error
ok 13 called three times
ok 14 runs without error
ok 15 called three times
ok 16 runs without error
ok 17 called three times
ok 18 runs without error
ok 19 called three times
ok 20 runs without error
ok 21 called three times
ok 22 runs without error
ok 23 called three times
ok 24 runs without error
ok 25 called three times
ok 26 runs without error
ok 27 called three times
ok 28 runs without error
ok 29 called three times
## emit objects

    Theoretical max x 1,480,821 ops/sec ±35.55% (10 runs sampled) *burn in*
    ReactiveProperty x 639,593 ops/sec ±9.22% (10 runs sampled)
    event-signal x 604,365 ops/sec ±5.53% (10 runs sampled)
    EventDispatcher x 576,823 ops/sec ±12.62% (10 runs sampled)
    MiniSignals x 608,374 ops/sec ±19.09% (10 runs sampled)
    dripEmitter x 528,468 ops/sec ±16.11% (10 runs sampled)
    RXJS x 474,963 ops/sec ±6.60% (10 runs sampled)
    EventEmitter3 x 433,812 ops/sec ±4.69% (10 runs sampled)
    signal-lite x 393,911 ops/sec ±4.67% (10 runs sampled)
    EventEmitter2 x 355,655 ops/sec ±17.60% (10 runs sampled)
    JS-Signals x 295,872 ops/sec ±5.67% (10 runs sampled)
    EventEmitter x 304,256 ops/sec ±12.06% (10 runs sampled)
    dripEmitterEnhanced x 302,052 ops/sec ±11.38% (10 runs sampled)
    signal-emitter x 165,126 ops/sec ±5.95% (10 runs sampled)

*Fastest is __ReactiveProperty, event-signal, EventDispatcher, MiniSignals__*


1..29
# tests 29
# pass  29

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit one parameter
## emit one parameter

    event-signal x 1,964,557 ops/sec ±9.32% (5 runs sampled)
    MiniSignals x 2,386,094 ops/sec ±36.06% (5 runs sampled)
    ReactiveProperty x 1,665,122 ops/sec ±3.96% (5 runs sampled)
    dripEmitter x 2,130,086 ops/sec ±33.75% (5 runs sampled)
    EventEmitter2 x 1,593,959 ops/sec ±15.84% (5 runs sampled)
    EventEmitter x 1,582,725 ops/sec ±22.09% (5 runs sampled)
    EventEmitter3 x 1,470,095 ops/sec ±17.30% (5 runs sampled)
    d3-dispatch x 1,264,481 ops/sec ±2.62% (5 runs sampled)
    signal-lite x 1,255,148 ops/sec ±9.26% (5 runs sampled)
    RXJS x 1,297,017 ops/sec ±14.61% (5 runs sampled)
    observ x 1,020,122 ops/sec ±9.14% (5 runs sampled)
    observable x 1,023,747 ops/sec ±10.81% (5 runs sampled)
    JS-Signals x 984,334 ops/sec ±11.57% (5 runs sampled)
    minivents x 1,041,785 ops/sec ±22.56% (5 runs sampled)
    dripEmitterEnhanced x 935,495 ops/sec ±15.81% (5 runs sampled)
    namespace-emitter x 583,251 ops/sec ±6.94% (5 runs sampled)
    signal-emitter x 565,513 ops/sec ±13.52% (5 runs sampled)

*Fastest is __event-signal, MiniSignals, dripEmitter, EventEmitter__*


1..1
# tests 1
# pass  1

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# emit
ok 2 runs without error
ok 3 called four times
ok 4 runs without error
ok 5 called four times
ok 6 runs without error
ok 7 called four times
ok 8 runs without error
ok 9 called four times
ok 10 runs without error
ok 11 called four times
ok 12 runs without error
ok 13 called four times
ok 14 runs without error
ok 15 called four times
ok 16 runs without error
ok 17 called four times
ok 18 runs without error
ok 19 called four times
## emit

    Theoretical max x 2,167,522 ops/sec ±32.20% (10 runs sampled) *burn in*
    MiniSignals x 532,639 ops/sec ±15.02% (10 runs sampled)
    EventEmitter3 x 407,013 ops/sec ±7.88% (10 runs sampled)
    EventEmitter2 x 436,514 ops/sec ±15.99% (10 runs sampled)
    signal-lite x 391,059 ops/sec ±4.92% (10 runs sampled)
    EventEmitter x 312,100 ops/sec ±10.81% (10 runs sampled)
    JS-Signals x 237,308 ops/sec ±7.39% (10 runs sampled)
    dripEmitterEnhanced x 217,780 ops/sec ±12.67% (10 runs sampled)
    signal-emitter x 121,259 ops/sec ±9.49% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter2__*


1..19
# tests 19
# pass  19

# ok


TAP version 13
# (anonymous)
# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)
# init
ok 2 Theoretical max runs without error
ok 3 Theoretical max constructed an object
ok 4 EventEmitter runs without error
ok 5 EventEmitter constructed an object
ok 6 EventEmitter2 runs without error
ok 7 EventEmitter2 constructed an object
ok 8 EventEmitter3 runs without error
ok 9 EventEmitter3 constructed an object
ok 10 DripEmitter runs without error
ok 11 DripEmitter constructed an object
ok 12 DripEmitterEnhanced runs without error
ok 13 DripEmitterEnhanced constructed an object
ok 14 ReactiveProperty runs without error
ok 15 ReactiveProperty constructed an object
ok 16 JS-Signals runs without error
ok 17 JS-Signals constructed an object
ok 18 MiniSignals runs without error
ok 19 MiniSignals constructed an object
ok 20 EventDispatcher runs without error
ok 21 EventDispatcher constructed an object
## init

    EventEmitter3 x 70,895,041 ops/sec ±6.80% (10 runs sampled)
    Theoretical max x 49,971,956 ops/sec ±6.87% (10 runs sampled) *burn in*
    EventDispatcher x 34,987,725 ops/sec ±23.72% (10 runs sampled)
    DripEmitter x 22,787,994 ops/sec ±4.10% (10 runs sampled)
    EventEmitter2 x 17,980,312 ops/sec ±3.52% (10 runs sampled)
    EventEmitter x 22,319,318 ops/sec ±33.78% (10 runs sampled)
    MiniSignals x 19,194,014 ops/sec ±37.93% (10 runs sampled)
    JS-Signals x 13,906,305 ops/sec ±8.36% (10 runs sampled)
    DripEmitterEnhanced x 7,912,081 ops/sec ±32.31% (10 runs sampled)
    ReactiveProperty x 3,729,269 ops/sec ±11.87% (10 runs sampled)

*Fastest is __EventEmitter3__*


1..21
# tests 21
# pass  21

# ok
