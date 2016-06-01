
TAP version 13
# Platform
ok 1 (unnamed assert)
Chrome 51.0.2704.63 on OS X 10.11.2

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

    dripEmitter x 28,967,487 ops/sec ±4.15% (10 runs sampled)
    MiniSignals x 12,755,342 ops/sec ±5.21% (10 runs sampled)
    EventDispatcher x 5,740,711 ops/sec ±6.16% (10 runs sampled)
    ReactiveProperty x 3,968,723 ops/sec ±8.71% (10 runs sampled)
    EventEmitter3 x 2,264,587 ops/sec ±3.93% (10 runs sampled)
    EventEmitter x 1,515,858 ops/sec ±8.94% (10 runs sampled)
    EventEmitter2 x 1,316,868 ops/sec ±6.57% (10 runs sampled)
    JS-Signals x 821,092 ops/sec ±2.90% (10 runs sampled)
    dripEmitterEnhanced x 614,054 ops/sec ±3.42% (10 runs sampled)

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

    Theoretical max x 11,572,355 ops/sec ±17.38% (10 runs sampled) *burn in*
    MiniSignals x 7,013,237 ops/sec ±5.26% (10 runs sampled)
    signal-lite x 6,296,883 ops/sec ±3.71% (10 runs sampled)
    dripEmitter x 5,654,824 ops/sec ±4.76% (10 runs sampled)
    ReactiveProperty x 5,577,447 ops/sec ±3.57% (10 runs sampled)
    EventEmitter3 x 5,056,159 ops/sec ±3.47% (10 runs sampled)
    event-signal x 1,924,582 ops/sec ±6.77% (10 runs sampled)
    EventEmitter2 x 1,811,193 ops/sec ±3.03% (10 runs sampled)
    RXJS x 1,586,347 ops/sec ±5.32% (10 runs sampled)
    dripEmitterEnhanced x 703,419 ops/sec ±3.89% (10 runs sampled)
    signal-emitter x 464,757 ops/sec ±5.43% (10 runs sampled)
    EventEmitter x 176,583 ops/sec ±3.92% (10 runs sampled)
    JS-Signals x 147,396 ops/sec ±6.88% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 34,537,867 ops/sec ±3.12% (10 runs sampled) *burn in*
    dripEmitter x 14,565,943 ops/sec ±4.25% (10 runs sampled)
    ReactiveProperty x 15,536,389 ops/sec ±13.00% (10 runs sampled)
    EventEmitter3 x 13,408,462 ops/sec ±5.16% (10 runs sampled)
    MiniSignals x 8,110,465 ops/sec ±6.15% (10 runs sampled)
    signal-lite x 6,228,798 ops/sec ±3.49% (10 runs sampled)
    event-signal x 5,878,575 ops/sec ±3.86% (10 runs sampled)
    EventEmitter2 x 5,103,810 ops/sec ±2.90% (10 runs sampled)
    RXJS x 4,559,802 ops/sec ±4.61% (10 runs sampled)
    dripEmitterEnhanced x 2,202,217 ops/sec ±8.02% (10 runs sampled)
    signal-emitter x 1,431,655 ops/sec ±3.84% (10 runs sampled)
    EventEmitter x 513,146 ops/sec ±12.15% (10 runs sampled)
    JS-Signals x 471,373 ops/sec ±4.86% (10 runs sampled)

*Fastest is __dripEmitter__*


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

    Theoretical max x 31,948,181 ops/sec ±8.43% (10 runs sampled) *burn in*
    MiniSignals x 20,329,961 ops/sec ±6.59% (10 runs sampled)
    signal-lite x 18,865,979 ops/sec ±5.37% (10 runs sampled)
    ReactiveProperty x 16,799,266 ops/sec ±1.94% (10 runs sampled)
    EventEmitter3 x 15,288,424 ops/sec ±5.04% (10 runs sampled)
    dripEmitter x 13,922,929 ops/sec ±5.91% (10 runs sampled)
    event-signal x 6,317,618 ops/sec ±5.44% (10 runs sampled)
    EventEmitter2 x 5,005,605 ops/sec ±6.90% (10 runs sampled)
    RXJS x 4,575,628 ops/sec ±3.21% (10 runs sampled)
    dripEmitterEnhanced x 2,304,093 ops/sec ±5.28% (10 runs sampled)
    signal-emitter x 1,503,620 ops/sec ±3.91% (10 runs sampled)
    JS-Signals x 519,170 ops/sec ±5.54% (10 runs sampled)
    EventEmitter x 512,105 ops/sec ±28.62% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    MiniSignals x 4,248,822 ops/sec ±3.11% (10 runs sampled)
    EventEmitter3 x 4,062,807 ops/sec ±5.06% (10 runs sampled)
    Theoretical max x 4,388,764 ops/sec ±16.19% (10 runs sampled) *burn in*
    ReactiveProperty x 3,945,455 ops/sec ±5.71% (10 runs sampled)
    dripEmitter x 3,971,403 ops/sec ±21.28% (10 runs sampled)
    signal-lite x 3,180,961 ops/sec ±2.61% (10 runs sampled)
    EventEmitter2 x 2,271,417 ops/sec ±13.60% (10 runs sampled)
    event-signal x 1,719,946 ops/sec ±10.70% (10 runs sampled)
    dripEmitterEnhanced x 1,512,904 ops/sec ±5.00% (10 runs sampled)
    RXJS x 1,476,604 ops/sec ±8.38% (10 runs sampled)
    signal-emitter x 981,202 ops/sec ±7.57% (10 runs sampled)
    EventEmitter x 292,645 ops/sec ±2.55% (10 runs sampled)
    JS-Signals x 226,698 ops/sec ±4.97% (10 runs sampled)
    minivents x 47,296 ops/sec ±2.05% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter3, ReactiveProperty, dripEmitter__*


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

    Theoretical max x 12,087,224 ops/sec ±2.29% (10 runs sampled) *burn in*
    signal-lite x 8,572,903 ops/sec ±7.27% (10 runs sampled)
    MiniSignals x 7,861,225 ops/sec ±10.87% (10 runs sampled)
    EventEmitter3 x 518,932 ops/sec ±3.08% (10 runs sampled)
    EventEmitter2 x 433,441 ops/sec ±6.85% (10 runs sampled)
    dripEmitterEnhanced x 398,464 ops/sec ±2.94% (10 runs sampled)
    signal-emitter x 328,990 ops/sec ±7.04% (10 runs sampled)
    EventEmitter x 74,781 ops/sec ±4.93% (10 runs sampled)
    JS-Signals x 66,014 ops/sec ±7.42% (10 runs sampled)
    minivents x 36,331 ops/sec ±8.91% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    Theoretical max x 6,548,987 ops/sec ±8.56% (10 runs sampled) *burn in*
    MiniSignals x 3,657,581 ops/sec ±4.91% (10 runs sampled)
    signal-lite x 3,475,124 ops/sec ±4.43% (10 runs sampled)
    ReactiveProperty x 3,095,564 ops/sec ±7.76% (10 runs sampled)
    EventEmitter3 x 2,397,960 ops/sec ±9.86% (10 runs sampled)
    dripEmitter x 2,493,718 ops/sec ±16.85% (10 runs sampled)
    EventDispatcher x 1,460,874 ops/sec ±5.40% (10 runs sampled)
    event-signal x 856,534 ops/sec ±8.87% (10 runs sampled)
    EventEmitter2 x 842,750 ops/sec ±13.63% (10 runs sampled)
    RXJS x 788,870 ops/sec ±12.05% (10 runs sampled)
    dripEmitterEnhanced x 348,139 ops/sec ±12.33% (10 runs sampled)
    signal-emitter x 251,350 ops/sec ±5.18% (10 runs sampled)
    JS-Signals x 96,402 ops/sec ±4.81% (10 runs sampled)
    EventEmitter x 74,373 ops/sec ±45.54% (10 runs sampled)

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

    Theoretical max x 15,376,307 ops/sec ±7.95% (10 runs sampled) *burn in*
    signal-lite x 12,425,867 ops/sec ±5.49% (10 runs sampled)
    MiniSignals x 12,505,596 ops/sec ±16.37% (10 runs sampled)
    dripEmitter x 10,301,731 ops/sec ±9.38% (10 runs sampled)
    ReactiveProperty x 9,683,681 ops/sec ±12.89% (10 runs sampled)
    EventEmitter3 x 8,015,853 ops/sec ±8.64% (10 runs sampled)
    event-signal x 4,454,116 ops/sec ±2.88% (10 runs sampled)
    EventEmitter2 x 3,627,871 ops/sec ±8.56% (10 runs sampled)
    RXJS x 2,993,796 ops/sec ±10.61% (10 runs sampled)
    observ x 3,336,304 ops/sec ±26.99% (10 runs sampled)
    d3-dispatch x 1,717,907 ops/sec ±3.27% (10 runs sampled)
    dripEmitterEnhanced x 1,603,474 ops/sec ±14.88% (10 runs sampled)
    signal-emitter x 854,943 ops/sec ±18.48% (10 runs sampled)
    JS-Signals x 370,403 ops/sec ±4.54% (10 runs sampled)
    namespace-emitter x 327,899 ops/sec ±2.96% (10 runs sampled)
    observable x 383,918 ops/sec ±25.88% (10 runs sampled)
    EventEmitter x 328,784 ops/sec ±9.18% (10 runs sampled)
    minivents x 279,176 ops/sec ±2.71% (10 runs sampled)

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

    Theoretical max x 6,945,080 ops/sec ±8.84% (10 runs sampled) *burn in*
    MiniSignals x 4,177,675 ops/sec ±2.59% (10 runs sampled)
    signal-lite x 4,010,073 ops/sec ±1.45% (10 runs sampled)
    EventEmitter3 x 767,113 ops/sec ±14.67% (10 runs sampled)
    EventEmitter2 x 581,148 ops/sec ±6.68% (10 runs sampled)
    dripEmitterEnhanced x 299,347 ops/sec ±3.92% (10 runs sampled)
    signal-emitter x 243,606 ops/sec ±1.95% (10 runs sampled)
    JS-Signals x 89,324 ops/sec ±3.11% (10 runs sampled)
    EventEmitter x 86,313 ops/sec ±4.88% (10 runs sampled)

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

    EventDispatcher x 40,455,322 ops/sec ±1.80% (10 runs sampled)
    DripEmitter x 35,982,763 ops/sec ±2.74% (10 runs sampled)
    EventEmitter3 x 36,334,663 ops/sec ±6.62% (10 runs sampled)
    EventEmitter x 26,478,839 ops/sec ±1.52% (10 runs sampled)
    MiniSignals x 23,380,319 ops/sec ±5.43% (10 runs sampled)
    EventEmitter2 x 21,969,491 ops/sec ±14.64% (10 runs sampled)
    DripEmitterEnhanced x 16,250,822 ops/sec ±1.45% (10 runs sampled)
    Theoretical max x 25,598,834 ops/sec ±87.38% (10 runs sampled) *burn in*
    JS-Signals x 1,234,068 ops/sec ±27.84% (10 runs sampled)
    ReactiveProperty x 932,880 ops/sec ±16.68% (10 runs sampled)

*Fastest is __EventDispatcher__*


1..20
# tests 20
# pass  20

# ok

