
TAP version 13
# Platform
ok 1 (unnamed assert)
Safari 9.0.2 on OS X 10.11.2

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

    EventEmitter3 x 74,905,067 ops/sec ±3.62% (10 runs sampled)
    Theoretical max x 45,311,622 ops/sec ±3.48% (10 runs sampled) *burn in*
    MiniSignals x 34,416,300 ops/sec ±37.22% (10 runs sampled)
    DripEmitter x 22,364,728 ops/sec ±4.88% (10 runs sampled)
    EventDispatcher x 25,245,035 ops/sec ±34.27% (10 runs sampled)
    JS-Signals x 17,032,235 ops/sec ±1.52% (10 runs sampled)
    EventEmitter2 x 17,174,933 ops/sec ±3.13% (10 runs sampled)
    EventEmitter x 18,640,710 ops/sec ±34.03% (10 runs sampled)
    DripEmitterEnhanced x 9,658,007 ops/sec ±20.05% (10 runs sampled)
    ReactiveProperty x 5,273,627 ops/sec ±15.53% (10 runs sampled)

*Fastest is __EventEmitter3__*


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

    Theoretical max x 1,647,470 ops/sec ±35.28% (10 runs sampled) *burn in*
    MiniSignals x 596,061 ops/sec ±19.50% (10 runs sampled)
    EventEmitter2 x 461,214 ops/sec ±13.12% (10 runs sampled)
    signal-lite x 407,978 ops/sec ±3.11% (10 runs sampled)
    EventEmitter3 x 362,484 ops/sec ±4.46% (10 runs sampled)
    JS-Signals x 287,580 ops/sec ±4.01% (10 runs sampled)
    dripEmitterEnhanced x 266,346 ops/sec ±13.68% (10 runs sampled)
    EventEmitter x 262,393 ops/sec ±19.48% (10 runs sampled)
    signal-emitter x 162,306 ops/sec ±4.14% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter2__*


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

    Theoretical max x 10,275,513 ops/sec ±65.74% (10 runs sampled) *burn in*
    MiniSignals x 3,068,668 ops/sec ±3.89% (10 runs sampled)
    dripEmitter x 2,202,437 ops/sec ±13.26% (10 runs sampled)
    ReactiveProperty x 2,053,872 ops/sec ±5.95% (10 runs sampled)
    RXJS x 1,978,533 ops/sec ±3.21% (10 runs sampled)
    event-signal x 2,077,657 ops/sec ±21.16% (10 runs sampled)
    EventEmitter2 x 1,784,698 ops/sec ±9.02% (10 runs sampled)
    EventEmitter3 x 1,662,917 ops/sec ±8.40% (10 runs sampled)
    EventEmitter x 1,554,930 ops/sec ±16.95% (10 runs sampled)
    d3-dispatch x 1,370,369 ops/sec ±4.03% (10 runs sampled)
    observ x 1,309,097 ops/sec ±3.61% (10 runs sampled)
    observable x 1,298,528 ops/sec ±6.91% (10 runs sampled)
    signal-lite x 1,245,196 ops/sec ±8.67% (10 runs sampled)
    JS-Signals x 1,136,646 ops/sec ±3.00% (10 runs sampled)
    dripEmitterEnhanced x 1,113,940 ops/sec ±9.67% (10 runs sampled)
    minivents x 861,415 ops/sec ±9.09% (10 runs sampled)
    signal-emitter x 661,506 ops/sec ±3.81% (10 runs sampled)
    namespace-emitter x 618,551 ops/sec ±8.62% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 2,086,093 ops/sec ±41.42% (10 runs sampled) *burn in*
    event-signal x 741,052 ops/sec ±2.83% (10 runs sampled)
    MiniSignals x 787,710 ops/sec ±11.74% (10 runs sampled)
    ReactiveProperty x 750,971 ops/sec ±8.45% (10 runs sampled)
    EventDispatcher x 685,739 ops/sec ±7.09% (10 runs sampled)
    RXJS x 611,835 ops/sec ±3.91% (10 runs sampled)
    signal-lite x 477,755 ops/sec ±2.78% (10 runs sampled)
    EventEmitter2 x 513,505 ops/sec ±16.28% (10 runs sampled)
    dripEmitter x 479,188 ops/sec ±12.48% (10 runs sampled)
    EventEmitter x 420,972 ops/sec ±5.43% (10 runs sampled)
    EventEmitter3 x 410,160 ops/sec ±10.04% (10 runs sampled)
    dripEmitterEnhanced x 314,458 ops/sec ±11.84% (10 runs sampled)
    JS-Signals x 268,751 ops/sec ±17.19% (10 runs sampled)
    signal-emitter x 203,755 ops/sec ±4.98% (10 runs sampled)

*Fastest is __event-signal, ReactiveProperty, EventDispatcher__*


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

    Theoretical max x 5,661,632 ops/sec ±30.15% (10 runs sampled) *burn in*
    MiniSignals x 3,240,806 ops/sec ±4.21% (10 runs sampled)
    signal-lite x 1,156,269 ops/sec ±3.70% (10 runs sampled)
    EventEmitter2 x 1,214,431 ops/sec ±10.74% (10 runs sampled)
    EventEmitter x 1,164,576 ops/sec ±10.43% (10 runs sampled)
    EventEmitter3 x 1,024,690 ops/sec ±10.06% (10 runs sampled)
    minivents x 816,964 ops/sec ±4.72% (10 runs sampled)
    dripEmitterEnhanced x 841,000 ops/sec ±11.10% (10 runs sampled)
    JS-Signals x 771,734 ops/sec ±6.76% (10 runs sampled)
    signal-emitter x 417,001 ops/sec ±4.66% (10 runs sampled)

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

    Theoretical max x 1,483,639 ops/sec ±35.25% (10 runs sampled) *burn in*
    MiniSignals x 737,618 ops/sec ±2.62% (10 runs sampled)
    ReactiveProperty x 678,000 ops/sec ±4.09% (10 runs sampled)
    event-signal x 663,337 ops/sec ±3.26% (10 runs sampled)
    EventEmitter3 x 567,559 ops/sec ±6.82% (10 runs sampled)
    dripEmitter x 591,356 ops/sec ±12.52% (10 runs sampled)
    EventEmitter2 x 556,660 ops/sec ±6.74% (10 runs sampled)
    signal-lite x 463,592 ops/sec ±1.90% (10 runs sampled)
    EventEmitter x 474,061 ops/sec ±5.57% (10 runs sampled)
    RXJS x 460,334 ops/sec ±7.28% (10 runs sampled)
    JS-Signals x 408,939 ops/sec ±3.96% (10 runs sampled)
    signal-emitter x 386,892 ops/sec ±4.68% (10 runs sampled)
    dripEmitterEnhanced x 402,473 ops/sec ±21.66% (10 runs sampled)
    minivents x 309,409 ops/sec ±3.44% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 5,200,840 ops/sec ±21.54% (10 runs sampled) *burn in*
    MiniSignals x 4,409,409 ops/sec ±5.17% (10 runs sampled)
    event-signal x 3,498,048 ops/sec ±4.25% (10 runs sampled)
    ReactiveProperty x 2,046,601 ops/sec ±4.06% (10 runs sampled)
    dripEmitter x 2,146,532 ops/sec ±12.52% (10 runs sampled)
    RXJS x 1,892,196 ops/sec ±4.26% (10 runs sampled)
    EventEmitter3 x 1,889,644 ops/sec ±7.14% (10 runs sampled)
    signal-lite x 1,731,421 ops/sec ±2.91% (10 runs sampled)
    EventEmitter2 x 1,746,106 ops/sec ±10.51% (10 runs sampled)
    EventEmitter x 1,332,621 ops/sec ±7.12% (10 runs sampled)
    JS-Signals x 1,201,690 ops/sec ±2.75% (10 runs sampled)
    dripEmitterEnhanced x 1,051,153 ops/sec ±10.57% (10 runs sampled)
    signal-emitter x 715,742 ops/sec ±3.56% (10 runs sampled)

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

    Theoretical max x 5,363,509 ops/sec ±18.07% (10 runs sampled) *burn in*
    MiniSignals x 3,238,643 ops/sec ±4.28% (10 runs sampled)
    event-signal x 2,670,985 ops/sec ±3.13% (10 runs sampled)
    dripEmitter x 2,211,417 ops/sec ±13.06% (10 runs sampled)
    ReactiveProperty x 2,013,237 ops/sec ±5.51% (10 runs sampled)
    RXJS x 1,916,905 ops/sec ±3.09% (10 runs sampled)
    EventEmitter2 x 1,855,196 ops/sec ±13.45% (10 runs sampled)
    signal-lite x 1,594,085 ops/sec ±3.29% (10 runs sampled)
    EventEmitter3 x 1,567,061 ops/sec ±4.08% (10 runs sampled)
    EventEmitter x 1,345,936 ops/sec ±6.53% (10 runs sampled)
    JS-Signals x 1,139,271 ops/sec ±6.65% (10 runs sampled)
    dripEmitterEnhanced x 1,120,225 ops/sec ±10.42% (10 runs sampled)
    signal-emitter x 674,136 ops/sec ±4.37% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 1,804,281 ops/sec ±39.77% (10 runs sampled) *burn in*
    MiniSignals x 924,406 ops/sec ±3.08% (10 runs sampled)
    event-signal x 785,408 ops/sec ±3.49% (10 runs sampled)
    dripEmitter x 706,955 ops/sec ±10.54% (10 runs sampled)
    RXJS x 631,203 ops/sec ±5.31% (10 runs sampled)
    ReactiveProperty x 634,830 ops/sec ±6.74% (10 runs sampled)
    EventEmitter2 x 573,310 ops/sec ±7.32% (10 runs sampled)
    EventEmitter3 x 511,173 ops/sec ±9.02% (10 runs sampled)
    signal-lite x 480,390 ops/sec ±3.20% (10 runs sampled)
    EventEmitter x 445,255 ops/sec ±7.07% (10 runs sampled)
    JS-Signals x 347,754 ops/sec ±3.76% (10 runs sampled)
    dripEmitterEnhanced x 323,782 ops/sec ±12.16% (10 runs sampled)
    signal-emitter x 219,688 ops/sec ±4.28% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    dripEmitter x 7,498,211 ops/sec ±3.39% (10 runs sampled)
    EventDispatcher x 3,398,666 ops/sec ±11.98% (10 runs sampled)
    MiniSignals x 3,482,545 ops/sec ±26.02% (10 runs sampled)
    EventEmitter3 x 1,556,767 ops/sec ±3.60% (10 runs sampled)
    ReactiveProperty x 1,495,482 ops/sec ±14.46% (10 runs sampled)
    EventEmitter x 838,430 ops/sec ±6.78% (10 runs sampled)
    JS-Signals x 797,542 ops/sec ±6.76% (10 runs sampled)
    dripEmitterEnhanced x 693,089 ops/sec ±5.74% (10 runs sampled)
    EventEmitter2 x 587,445 ops/sec ±6.82% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

