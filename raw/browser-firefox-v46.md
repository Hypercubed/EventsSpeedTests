
TAP version 13
# Platform
ok 1 (unnamed assert)
Firefox 46.0 on OS X 10.11

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

    dripEmitter x 22,879,391 ops/sec ±6.79% (10 runs sampled)
    ReactiveProperty x 10,207,199 ops/sec ±12.30% (10 runs sampled)
    MiniSignals x 7,736,641 ops/sec ±8.00% (10 runs sampled)
    EventEmitter3 x 4,244,250 ops/sec ±3.21% (10 runs sampled)
    EventDispatcher x 3,914,722 ops/sec ±4.61% (10 runs sampled)
    EventEmitter x 2,047,896 ops/sec ±10.20% (10 runs sampled)
    EventEmitter2 x 1,469,751 ops/sec ±19.24% (10 runs sampled)
    dripEmitterEnhanced x 400,739 ops/sec ±2.46% (10 runs sampled)
    JS-Signals x 312,812 ops/sec ±19.56% (10 runs sampled)

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

    Theoretical max x 19,729,965 ops/sec ±4.76% (10 runs sampled) *burn in*
    ReactiveProperty x 8,437,688 ops/sec ±2.85% (10 runs sampled)
    MiniSignals x 6,326,744 ops/sec ±2.47% (10 runs sampled)
    dripEmitter x 4,420,410 ops/sec ±3.38% (10 runs sampled)
    EventEmitter3 x 3,755,866 ops/sec ±2.88% (10 runs sampled)
    event-signal x 3,289,413 ops/sec ±1.17% (10 runs sampled)
    EventEmitter2 x 2,510,247 ops/sec ±4.04% (10 runs sampled)
    RXJS x 2,112,866 ops/sec ±1.78% (10 runs sampled)
    signal-lite x 492,431 ops/sec ±3.35% (10 runs sampled)
    dripEmitterEnhanced x 489,714 ops/sec ±5.14% (10 runs sampled)
    signal-emitter x 341,739 ops/sec ±1.01% (10 runs sampled)
    EventEmitter x 269,698 ops/sec ±6.06% (10 runs sampled)
    JS-Signals x 230,535 ops/sec ±1.40% (10 runs sampled)

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

    Theoretical max x 82,569,428 ops/sec ±6.20% (10 runs sampled) *burn in*
    MiniSignals x 22,734,057 ops/sec ±1.52% (10 runs sampled)
    dripEmitter x 17,330,734 ops/sec ±1.49% (10 runs sampled)
    ReactiveProperty x 16,126,222 ops/sec ±3.54% (10 runs sampled)
    EventEmitter3 x 12,516,287 ops/sec ±9.51% (10 runs sampled)
    event-signal x 8,789,739 ops/sec ±5.52% (10 runs sampled)
    EventEmitter2 x 6,226,054 ops/sec ±5.69% (10 runs sampled)
    RXJS x 5,853,953 ops/sec ±9.30% (10 runs sampled)
    signal-lite x 1,188,519 ops/sec ±10.66% (10 runs sampled)
    signal-emitter x 1,043,511 ops/sec ±3.13% (10 runs sampled)
    dripEmitterEnhanced x 906,683 ops/sec ±5.11% (10 runs sampled)
    EventEmitter x 888,421 ops/sec ±3.12% (10 runs sampled)
    JS-Signals x 688,631 ops/sec ±2.64% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 85,897,339 ops/sec ±6.52% (10 runs sampled) *burn in*
    ReactiveProperty x 28,534,320 ops/sec ±4.07% (10 runs sampled)
    MiniSignals x 22,884,197 ops/sec ±4.27% (10 runs sampled)
    dripEmitter x 17,532,282 ops/sec ±3.55% (10 runs sampled)
    EventEmitter3 x 16,322,632 ops/sec ±1.63% (10 runs sampled)
    event-signal x 9,896,675 ops/sec ±5.60% (10 runs sampled)
    EventEmitter2 x 8,382,837 ops/sec ±1.16% (10 runs sampled)
    RXJS x 5,771,649 ops/sec ±3.43% (10 runs sampled)
    signal-lite x 1,519,225 ops/sec ±1.18% (10 runs sampled)
    dripEmitterEnhanced x 1,374,674 ops/sec ±7.44% (10 runs sampled)
    signal-emitter x 946,029 ops/sec ±11.75% (10 runs sampled)
    EventEmitter x 874,245 ops/sec ±3.66% (10 runs sampled)
    JS-Signals x 632,944 ops/sec ±6.19% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    ReactiveProperty x 19,610,645 ops/sec ±0.89% (10 runs sampled)
    MiniSignals x 5,370,157 ops/sec ±1.31% (10 runs sampled)
    Theoretical max x 4,840,482 ops/sec ±7.19% (10 runs sampled) *burn in*
    dripEmitter x 4,364,420 ops/sec ±0.71% (10 runs sampled)
    EventEmitter3 x 3,942,673 ops/sec ±0.99% (10 runs sampled)
    event-signal x 3,247,831 ops/sec ±2.90% (10 runs sampled)
    EventEmitter2 x 2,856,061 ops/sec ±2.41% (10 runs sampled)
    RXJS x 1,981,045 ops/sec ±1.55% (10 runs sampled)
    signal-emitter x 881,419 ops/sec ±1.89% (10 runs sampled)
    dripEmitterEnhanced x 940,058 ops/sec ±12.71% (10 runs sampled)
    signal-lite x 405,348 ops/sec ±7.24% (10 runs sampled)
    EventEmitter x 302,968 ops/sec ±4.60% (10 runs sampled)
    JS-Signals x 265,826 ops/sec ±2.27% (10 runs sampled)
    minivents x 167,036 ops/sec ±6.15% (10 runs sampled)

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

    Theoretical max x 167,637,515 ops/sec ±7.08% (10 runs sampled) *burn in*
    MiniSignals x 21,926,286 ops/sec ±3.98% (10 runs sampled)
    EventEmitter3 x 5,934,920 ops/sec ±5.32% (10 runs sampled)
    EventEmitter2 x 5,018,881 ops/sec ±3.31% (10 runs sampled)
    dripEmitterEnhanced x 1,190,349 ops/sec ±5.36% (10 runs sampled)
    signal-lite x 897,116 ops/sec ±1.74% (10 runs sampled)
    signal-emitter x 765,353 ops/sec ±5.04% (10 runs sampled)
    EventEmitter x 311,437 ops/sec ±5.06% (10 runs sampled)
    JS-Signals x 290,492 ops/sec ±6.27% (10 runs sampled)
    minivents x 190,427 ops/sec ±14.00% (10 runs sampled)

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

    ReactiveProperty x 8,710,720 ops/sec ±8.59% (10 runs sampled)
    Theoretical max x 3,619,678 ops/sec ±2.65% (10 runs sampled) *burn in*
    MiniSignals x 2,415,980 ops/sec ±3.62% (10 runs sampled)
    EventEmitter3 x 1,979,636 ops/sec ±3.50% (10 runs sampled)
    dripEmitter x 2,034,243 ops/sec ±7.27% (10 runs sampled)
    event-signal x 1,683,299 ops/sec ±0.72% (10 runs sampled)
    EventEmitter2 x 1,538,450 ops/sec ±10.84% (10 runs sampled)
    RXJS x 1,331,092 ops/sec ±1.81% (10 runs sampled)
    EventDispatcher x 1,312,844 ops/sec ±8.05% (10 runs sampled)
    signal-lite x 411,614 ops/sec ±2.01% (10 runs sampled)
    dripEmitterEnhanced x 404,230 ops/sec ±6.42% (10 runs sampled)
    signal-emitter x 306,102 ops/sec ±2.33% (10 runs sampled)
    JS-Signals x 223,276 ops/sec ±2.04% (10 runs sampled)
    EventEmitter x 234,683 ops/sec ±16.18% (10 runs sampled)

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

    Theoretical max x 175,594,144 ops/sec ±1.63% (10 runs sampled) *burn in*
    ReactiveProperty x 43,749,520 ops/sec ±7.87% (10 runs sampled)
    MiniSignals x 25,807,014 ops/sec ±1.13% (10 runs sampled)
    observ x 20,786,889 ops/sec ±7.56% (10 runs sampled)
    dripEmitter x 16,320,478 ops/sec ±5.33% (10 runs sampled)
    EventEmitter3 x 14,980,810 ops/sec ±1.98% (10 runs sampled)
    d3-dispatch x 9,068,653 ops/sec ±4.71% (10 runs sampled)
    EventEmitter2 x 8,796,751 ops/sec ±4.62% (10 runs sampled)
    event-signal x 8,306,101 ops/sec ±9.36% (10 runs sampled)
    RXJS x 7,451,204 ops/sec ±1.08% (10 runs sampled)
    dripEmitterEnhanced x 1,479,365 ops/sec ±4.20% (10 runs sampled)
    signal-lite x 1,256,712 ops/sec ±8.10% (10 runs sampled)
    signal-emitter x 1,040,531 ops/sec ±4.86% (10 runs sampled)
    EventEmitter x 810,606 ops/sec ±8.36% (10 runs sampled)
    JS-Signals x 723,100 ops/sec ±1.22% (10 runs sampled)
    minivents x 704,182 ops/sec ±3.96% (10 runs sampled)
    namespace-emitter x 369,401 ops/sec ±3.78% (10 runs sampled)
    observable x 366,825 ops/sec ±4.03% (10 runs sampled)

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

    Theoretical max x 79,509,477 ops/sec ±1.97% (10 runs sampled) *burn in*
    MiniSignals x 5,872,854 ops/sec ±3.89% (10 runs sampled)
    EventEmitter3 x 2,571,555 ops/sec ±5.98% (10 runs sampled)
    EventEmitter2 x 1,735,846 ops/sec ±3.35% (10 runs sampled)
    signal-lite x 379,428 ops/sec ±0.96% (10 runs sampled)
    dripEmitterEnhanced x 309,572 ops/sec ±4.41% (10 runs sampled)
    signal-emitter x 223,434 ops/sec ±5.46% (10 runs sampled)
    EventEmitter x 204,346 ops/sec ±5.79% (10 runs sampled)
    JS-Signals x 163,133 ops/sec ±4.31% (10 runs sampled)

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

    Theoretical max x 47,258,315 ops/sec ±4.71% (10 runs sampled) *burn in*
    EventDispatcher x 46,340,424 ops/sec ±7.00% (10 runs sampled)
    EventEmitter3 x 45,643,001 ops/sec ±7.44% (10 runs sampled)
    DripEmitter x 42,548,189 ops/sec ±3.47% (10 runs sampled)
    EventEmitter2 x 28,586,142 ops/sec ±1.91% (10 runs sampled)
    MiniSignals x 23,850,489 ops/sec ±8.80% (10 runs sampled)
    EventEmitter x 22,098,062 ops/sec ±5.72% (10 runs sampled)
    DripEmitterEnhanced x 10,535,622 ops/sec ±7.72% (10 runs sampled)
    JS-Signals x 10,044,652 ops/sec ±14.66% (10 runs sampled)
    ReactiveProperty x 7,843,372 ops/sec ±10.25% (10 runs sampled)

*Fastest is __EventDispatcher, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

