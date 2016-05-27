# Firefox 46.0 on OS X 10.11

ok 1 (unnamed assert)

1..1
# tests 1
# pass  1

# ok


TAP version 13
# add-remove
ok 1 runs without error
ok 2 never called
ok 3 runs without error
ok 4 never called
ok 5 runs without error
ok 6 never called
ok 7 runs without error
ok 8 never called
ok 9 runs without error
ok 10 never called
ok 11 runs without error
ok 12 never called
ok 13 runs without error
ok 14 never called
ok 15 runs without error
ok 16 never called
ok 17 runs without error
ok 18 never called
## add-remove

    dripEmitter x 23,773,751 ops/sec ±6.20% (10 runs sampled)
    ReactiveProperty x 16,417,865 ops/sec ±10.30% (10 runs sampled)
    MiniSignals x 9,815,442 ops/sec ±8.05% (10 runs sampled)
    EventEmitter3 x 4,935,654 ops/sec ±9.46% (10 runs sampled)
    EventDispatcher x 4,496,777 ops/sec ±3.07% (10 runs sampled)
    EventEmitter x 2,510,326 ops/sec ±6.36% (10 runs sampled)
    EventEmitter2 x 1,955,629 ops/sec ±6.33% (10 runs sampled)
    dripEmitterEnhanced x 470,178 ops/sec ±3.98% (10 runs sampled)
    JS-Signals x 376,272 ops/sec ±18.08% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok


TAP version 13
# emit arrays
ok 1 runs without error
ok 2 called three times
ok 3 runs without error
ok 4 called three times
ok 5 runs without error
ok 6 called three times
ok 7 runs without error
ok 8 called three times
ok 9 runs without error
ok 10 called three times
ok 11 runs without error
ok 12 called three times
ok 13 runs without error
ok 14 called three times
ok 15 runs without error
ok 16 called three times
ok 17 runs without error
ok 18 called three times
ok 19 runs without error
ok 20 called three times
ok 21 runs without error
ok 22 called three times
ok 23 runs without error
ok 24 called three times
ok 25 runs without error
ok 26 called three times
## emit arrays

    Theoretical max x 22,508,505 ops/sec ±4.06% (10 runs sampled) *burn in*
    ReactiveProperty x 9,236,634 ops/sec ±3.36% (10 runs sampled)
    MiniSignals x 6,677,794 ops/sec ±7.25% (10 runs sampled)
    dripEmitter x 5,227,178 ops/sec ±2.98% (10 runs sampled)
    EventEmitter3 x 4,774,975 ops/sec ±2.72% (10 runs sampled)
    event-signal x 2,897,322 ops/sec ±14.63% (10 runs sampled)
    RXJS x 2,426,532 ops/sec ±3.14% (10 runs sampled)
    EventEmitter2 x 2,303,625 ops/sec ±9.12% (10 runs sampled)
    dripEmitterEnhanced x 569,445 ops/sec ±5.61% (10 runs sampled)
    signal-lite x 444,914 ops/sec ±9.50% (10 runs sampled)
    signal-emitter x 343,389 ops/sec ±7.51% (10 runs sampled)
    EventEmitter x 280,841 ops/sec ±7.81% (10 runs sampled)
    JS-Signals x 262,000 ops/sec ±3.55% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

# ok


TAP version 13
# emit with bound function
ok 1 runs without error
ok 2 called one time
ok 3 runs without error
ok 4 called one time
ok 5 runs without error
ok 6 called one time
ok 7 runs without error
ok 8 called one time
ok 9 runs without error
ok 10 called one time
ok 11 runs without error
ok 12 called one time
ok 13 runs without error
ok 14 called one time
ok 15 runs without error
ok 16 called one time
ok 17 runs without error
ok 18 called one time
ok 19 runs without error
ok 20 called one time
ok 21 runs without error
ok 22 called one time
ok 23 runs without error
ok 24 called one time
ok 25 runs without error
ok 26 called one time
## emit with bound function

    Theoretical max x 90,162,407 ops/sec ±7.67% (10 runs sampled) *burn in*
    ReactiveProperty x 24,057,008 ops/sec ±2.14% (10 runs sampled)
    MiniSignals x 19,379,062 ops/sec ±3.81% (10 runs sampled)
    EventEmitter3 x 15,945,961 ops/sec ±4.19% (10 runs sampled)
    dripEmitter x 15,897,906 ops/sec ±8.84% (10 runs sampled)
    EventEmitter2 x 9,526,008 ops/sec ±8.84% (10 runs sampled)
    event-signal x 7,268,948 ops/sec ±6.73% (10 runs sampled)
    RXJS x 4,991,751 ops/sec ±6.71% (10 runs sampled)
    signal-lite x 1,328,614 ops/sec ±1.45% (10 runs sampled)
    dripEmitterEnhanced x 1,286,599 ops/sec ±4.35% (10 runs sampled)
    EventEmitter x 998,688 ops/sec ±3.69% (10 runs sampled)
    signal-emitter x 825,883 ops/sec ±5.62% (10 runs sampled)
    JS-Signals x 540,045 ops/sec ±5.30% (10 runs sampled)

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

    Theoretical max x 86,569,012 ops/sec ±5.73% (10 runs sampled) *burn in*
    ReactiveProperty x 29,713,930 ops/sec ±5.50% (10 runs sampled)
    MiniSignals x 29,160,338 ops/sec ±5.86% (10 runs sampled)
    dripEmitter x 17,599,295 ops/sec ±4.62% (10 runs sampled)
    EventEmitter3 x 15,495,789 ops/sec ±9.62% (10 runs sampled)
    event-signal x 11,991,228 ops/sec ±4.68% (10 runs sampled)
    EventEmitter2 x 8,539,040 ops/sec ±2.51% (10 runs sampled)
    RXJS x 5,833,501 ops/sec ±8.74% (10 runs sampled)
    signal-lite x 1,641,387 ops/sec ±4.88% (10 runs sampled)
    dripEmitterEnhanced x 1,447,303 ops/sec ±6.33% (10 runs sampled)
    EventEmitter x 899,069 ops/sec ±5.11% (10 runs sampled)
    signal-emitter x 1,005,846 ops/sec ±20.50% (10 runs sampled)
    JS-Signals x 756,159 ops/sec ±6.24% (10 runs sampled)

*Fastest is __ReactiveProperty, MiniSignals__*


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

    ReactiveProperty x 20,938,804 ops/sec ±6.75% (10 runs sampled)
    MiniSignals x 5,673,355 ops/sec ±4.77% (10 runs sampled)
    Theoretical max x 5,555,430 ops/sec ±4.52% (10 runs sampled) *burn in*
    dripEmitter x 4,465,293 ops/sec ±4.14% (10 runs sampled)
    EventEmitter3 x 4,073,433 ops/sec ±6.24% (10 runs sampled)
    event-signal x 3,551,179 ops/sec ±8.71% (10 runs sampled)
    EventEmitter2 x 3,109,712 ops/sec ±4.40% (10 runs sampled)
    RXJS x 2,072,571 ops/sec ±9.11% (10 runs sampled)
    dripEmitterEnhanced x 1,042,773 ops/sec ±8.01% (10 runs sampled)
    signal-emitter x 845,974 ops/sec ±7.45% (10 runs sampled)
    signal-lite x 468,382 ops/sec ±3.11% (10 runs sampled)
    EventEmitter x 367,738 ops/sec ±5.59% (10 runs sampled)
    JS-Signals x 250,884 ops/sec ±7.25% (10 runs sampled)
    minivents x 189,509 ops/sec ±4.79% (10 runs sampled)

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

    Theoretical max x 180,531,314 ops/sec ±4.68% (10 runs sampled) *burn in*
    MiniSignals x 20,166,904 ops/sec ±13.51% (10 runs sampled)
    EventEmitter2 x 6,071,726 ops/sec ±4.07% (10 runs sampled)
    EventEmitter3 x 6,054,585 ops/sec ±18.28% (10 runs sampled)
    dripEmitterEnhanced x 1,121,307 ops/sec ±26.11% (10 runs sampled)
    signal-emitter x 707,169 ops/sec ±10.66% (10 runs sampled)
    signal-lite x 714,348 ops/sec ±17.44% (10 runs sampled)
    EventEmitter x 357,442 ops/sec ±9.27% (10 runs sampled)
    JS-Signals x 288,181 ops/sec ±27.22% (10 runs sampled)
    minivents x 158,447 ops/sec ±16.84% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    ReactiveProperty x 10,050,424 ops/sec ±7.14% (10 runs sampled)
    MiniSignals x 2,636,072 ops/sec ±4.75% (10 runs sampled)
    Theoretical max x 2,703,204 ops/sec ±22.50% (10 runs sampled) *burn in*
    dripEmitter x 2,246,951 ops/sec ±11.83% (10 runs sampled)
    event-signal x 1,699,445 ops/sec ±6.66% (10 runs sampled)
    EventEmitter3 x 1,823,382 ops/sec ±19.21% (10 runs sampled)
    EventDispatcher x 1,467,847 ops/sec ±3.81% (10 runs sampled)
    EventEmitter2 x 1,401,771 ops/sec ±7.09% (10 runs sampled)
    RXJS x 1,222,661 ops/sec ±6.40% (10 runs sampled)
    signal-lite x 461,884 ops/sec ±4.70% (10 runs sampled)
    dripEmitterEnhanced x 435,947 ops/sec ±8.75% (10 runs sampled)
    signal-emitter x 311,160 ops/sec ±10.93% (10 runs sampled)
    JS-Signals x 242,681 ops/sec ±7.03% (10 runs sampled)
    EventEmitter x 224,918 ops/sec ±10.29% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 194,779,383 ops/sec ±11.29% (5 runs sampled) *burn in*
    ReactiveProperty x 52,437,351 ops/sec ±10.44% (5 runs sampled)
    MiniSignals x 29,302,890 ops/sec ±8.83% (5 runs sampled)
    observ x 25,003,375 ops/sec ±10.85% (5 runs sampled)
    dripEmitter x 21,557,369 ops/sec ±11.35% (5 runs sampled)
    EventEmitter3 x 16,937,791 ops/sec ±6.73% (5 runs sampled)
    d3-dispatch x 11,115,823 ops/sec ±10.60% (5 runs sampled)
    event-signal x 10,675,400 ops/sec ±11.32% (5 runs sampled)
    EventEmitter2 x 9,382,393 ops/sec ±11.67% (5 runs sampled)
    RXJS x 7,781,321 ops/sec ±5.80% (5 runs sampled)
    dripEmitterEnhanced x 1,832,321 ops/sec ±12.45% (5 runs sampled)
    signal-lite x 1,617,441 ops/sec ±9.70% (5 runs sampled)
    signal-emitter x 1,232,397 ops/sec ±10.21% (5 runs sampled)
    EventEmitter x 997,002 ops/sec ±18.46% (5 runs sampled)
    JS-Signals x 846,715 ops/sec ±12.33% (5 runs sampled)
    minivents x 814,267 ops/sec ±20.31% (5 runs sampled)
    namespace-emitter x 534,507 ops/sec ±11.96% (5 runs sampled)
    observable x 466,068 ops/sec ±10.05% (5 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 36,189,424 ops/sec ±2.78% (10 runs sampled) *burn in*
    MiniSignals x 6,820,928 ops/sec ±4.94% (10 runs sampled)
    EventEmitter3 x 3,458,688 ops/sec ±6.91% (10 runs sampled)
    EventEmitter2 x 1,599,947 ops/sec ±7.70% (10 runs sampled)
    signal-lite x 417,226 ops/sec ±4.72% (10 runs sampled)
    dripEmitterEnhanced x 311,556 ops/sec ±6.82% (10 runs sampled)
    signal-emitter x 287,508 ops/sec ±8.13% (10 runs sampled)
    EventEmitter x 235,036 ops/sec ±6.18% (10 runs sampled)
    JS-Signals x 193,510 ops/sec ±7.45% (10 runs sampled)

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

    Theoretical max x 57,532,720 ops/sec ±6.06% (10 runs sampled) *burn in*
    DripEmitter x 51,856,698 ops/sec ±6.79% (10 runs sampled)
    EventEmitter3 x 53,429,840 ops/sec ±15.57% (10 runs sampled)
    EventEmitter2 x 32,391,930 ops/sec ±6.02% (10 runs sampled)
    EventEmitter x 27,894,917 ops/sec ±7.33% (10 runs sampled)
    EventDispatcher x 27,410,063 ops/sec ±13.70% (10 runs sampled)
    DripEmitterEnhanced x 13,376,599 ops/sec ±7.84% (10 runs sampled)
    MiniSignals x 10,797,757 ops/sec ±6.53% (10 runs sampled)
    JS-Signals x 9,298,160 ops/sec ±9.01% (10 runs sampled)
    ReactiveProperty x 7,433,903 ops/sec ±16.34% (10 runs sampled)

*Fastest is __DripEmitter, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok
