TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 6.2.0 on Darwin 64-bit

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

    EventDispatcher x 43,410,528 ops/sec ±4.97% (10 runs sampled)
    DripEmitter x 41,288,373 ops/sec ±7.09% (10 runs sampled)
    EventEmitter3 x 40,719,112 ops/sec ±16.98% (10 runs sampled)
    MiniSignals x 36,209,498 ops/sec ±4.36% (10 runs sampled)
    Theoretical max x 38,736,953 ops/sec ±39.12% (10 runs sampled) *burn in*
    EventEmitter2 x 27,185,998 ops/sec ±7.53% (10 runs sampled)
    EventEmitter x 23,905,290 ops/sec ±4.88% (10 runs sampled)
    DripEmitterEnhanced x 19,905,781 ops/sec ±3.61% (10 runs sampled)
    JS-Signals x 1,963,029 ops/sec ±17.18% (10 runs sampled)
    ReactiveProperty x 1,226,899 ops/sec ±21.64% (10 runs sampled)

*Fastest is __EventDispatcher, DripEmitter, EventEmitter3__*


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

    Theoretical max x 10,289,078 ops/sec ±3.07% (10 runs sampled) *burn in*
    MiniSignals x 5,447,147 ops/sec ±4.51% (10 runs sampled)
    signal-lite x 5,381,610 ops/sec ±4.76% (10 runs sampled)
    EventEmitter x 2,419,598 ops/sec ±3.62% (10 runs sampled)
    EventEmitter3 x 1,156,058 ops/sec ±4.65% (10 runs sampled)
    EventEmitter2 x 676,338 ops/sec ±4.49% (10 runs sampled)
    dripEmitterEnhanced x 369,508 ops/sec ±5.49% (10 runs sampled)
    signal-emitter x 162,457 ops/sec ±4.48% (10 runs sampled)
    JS-Signals x 144,347 ops/sec ±4.79% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 24,346,493 ops/sec ±5.34% (10 runs sampled) *burn in*
    signal-lite x 16,939,359 ops/sec ±5.34% (10 runs sampled)
    MiniSignals x 17,209,571 ops/sec ±11.38% (10 runs sampled)
    dripEmitter x 14,357,580 ops/sec ±4.01% (10 runs sampled)
    EventEmitter3 x 13,850,752 ops/sec ±4.11% (10 runs sampled)
    ReactiveProperty x 13,290,298 ops/sec ±4.06% (10 runs sampled)
    EventEmitter x 9,280,114 ops/sec ±3.95% (10 runs sampled)
    observ x 5,661,303 ops/sec ±6.68% (10 runs sampled)
    event-signal x 5,461,813 ops/sec ±3.97% (10 runs sampled)
    EventEmitter2 x 4,851,572 ops/sec ±2.26% (10 runs sampled)
    RXJS x 3,922,878 ops/sec ±2.29% (10 runs sampled)
    d3-dispatch x 1,908,937 ops/sec ±4.27% (10 runs sampled)
    dripEmitterEnhanced x 1,885,497 ops/sec ±4.99% (10 runs sampled)
    signal-emitter x 697,905 ops/sec ±4.82% (10 runs sampled)
    JS-Signals x 540,314 ops/sec ±5.66% (10 runs sampled)
    namespace-emitter x 503,281 ops/sec ±9.69% (10 runs sampled)
    observable x 478,911 ops/sec ±5.34% (10 runs sampled)
    minivents x 453,644 ops/sec ±4.00% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    Theoretical max x 11,394,936 ops/sec ±4.17% (10 runs sampled) *burn in*
    MiniSignals x 6,472,747 ops/sec ±4.87% (10 runs sampled)
    signal-lite x 6,157,774 ops/sec ±3.81% (10 runs sampled)
    ReactiveProperty x 5,337,832 ops/sec ±7.35% (10 runs sampled)
    dripEmitter x 4,882,839 ops/sec ±2.97% (10 runs sampled)
    EventEmitter3 x 4,470,582 ops/sec ±2.85% (10 runs sampled)
    EventEmitter x 3,095,201 ops/sec ±4.65% (10 runs sampled)
    EventDispatcher x 2,565,709 ops/sec ±5.30% (10 runs sampled)
    event-signal x 1,925,661 ops/sec ±4.63% (10 runs sampled)
    RXJS x 1,439,190 ops/sec ±6.07% (10 runs sampled)
    EventEmitter2 x 1,415,763 ops/sec ±17.72% (10 runs sampled)
    dripEmitterEnhanced x 624,502 ops/sec ±4.17% (10 runs sampled)
    signal-emitter x 224,516 ops/sec ±9.39% (10 runs sampled)
    JS-Signals x 176,720 ops/sec ±7.25% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 17,896,976 ops/sec ±3.31% (10 runs sampled) *burn in*
    MiniSignals x 14,820,364 ops/sec ±4.14% (10 runs sampled)
    signal-lite x 13,765,298 ops/sec ±3.73% (10 runs sampled)
    EventEmitter x 707,251 ops/sec ±3.85% (10 runs sampled)
    EventEmitter3 x 703,634 ops/sec ±3.55% (10 runs sampled)
    EventEmitter2 x 661,198 ops/sec ±3.42% (10 runs sampled)
    dripEmitterEnhanced x 533,486 ops/sec ±5.96% (10 runs sampled)
    signal-emitter x 377,296 ops/sec ±8.29% (10 runs sampled)
    JS-Signals x 211,329 ops/sec ±4.92% (10 runs sampled)
    minivents x 138,816 ops/sec ±6.49% (10 runs sampled)

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

    Theoretical max x 5,168,133 ops/sec ±2.97% (10 runs sampled) *burn in*
    MiniSignals x 4,910,195 ops/sec ±2.57% (10 runs sampled)
    signal-lite x 4,691,897 ops/sec ±4.26% (10 runs sampled)
    dripEmitter x 4,362,329 ops/sec ±2.98% (10 runs sampled)
    EventEmitter3 x 4,042,615 ops/sec ±3.00% (10 runs sampled)
    ReactiveProperty x 3,806,742 ops/sec ±7.00% (10 runs sampled)
    EventEmitter x 3,484,167 ops/sec ±4.22% (10 runs sampled)
    event-signal x 2,920,414 ops/sec ±3.42% (10 runs sampled)
    EventEmitter2 x 2,490,420 ops/sec ±4.59% (10 runs sampled)
    RXJS x 1,573,448 ops/sec ±6.55% (10 runs sampled)
    dripEmitterEnhanced x 1,336,878 ops/sec ±5.05% (10 runs sampled)
    signal-emitter x 605,422 ops/sec ±9.80% (10 runs sampled)
    JS-Signals x 260,828 ops/sec ±7.79% (10 runs sampled)
    minivents x 110,042 ops/sec ±4.65% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 31,010,676 ops/sec ±6.97% (10 runs sampled) *burn in*
    signal-lite x 19,451,183 ops/sec ±4.11% (10 runs sampled)
    MiniSignals x 19,614,457 ops/sec ±5.80% (10 runs sampled)
    ReactiveProperty x 16,186,843 ops/sec ±3.28% (10 runs sampled)
    EventEmitter3 x 14,408,889 ops/sec ±4.60% (10 runs sampled)
    dripEmitter x 13,300,831 ops/sec ±4.77% (10 runs sampled)
    EventEmitter x 9,207,299 ops/sec ±2.95% (10 runs sampled)
    event-signal x 5,617,749 ops/sec ±10.98% (10 runs sampled)
    EventEmitter2 x 4,954,037 ops/sec ±3.57% (10 runs sampled)
    RXJS x 4,515,946 ops/sec ±5.82% (10 runs sampled)
    dripEmitterEnhanced x 1,965,885 ops/sec ±3.12% (10 runs sampled)
    signal-emitter x 625,587 ops/sec ±10.18% (10 runs sampled)
    JS-Signals x 555,766 ops/sec ±3.50% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    Theoretical max x 31,919,077 ops/sec ±6.28% (10 runs sampled) *burn in*
    ReactiveProperty x 16,389,650 ops/sec ±3.85% (10 runs sampled)
    dripEmitter x 13,484,450 ops/sec ±5.81% (10 runs sampled)
    EventEmitter3 x 12,986,518 ops/sec ±3.56% (10 runs sampled)
    EventEmitter x 8,840,553 ops/sec ±4.54% (10 runs sampled)
    MiniSignals x 7,518,948 ops/sec ±6.27% (10 runs sampled)
    signal-lite x 6,089,636 ops/sec ±5.18% (10 runs sampled)
    event-signal x 5,425,926 ops/sec ±5.79% (10 runs sampled)
    RXJS x 4,354,777 ops/sec ±4.80% (10 runs sampled)
    EventEmitter2 x 4,302,917 ops/sec ±10.12% (10 runs sampled)
    dripEmitterEnhanced x 1,900,177 ops/sec ±6.78% (10 runs sampled)
    signal-emitter x 690,220 ops/sec ±6.12% (10 runs sampled)
    JS-Signals x 538,151 ops/sec ±6.50% (10 runs sampled)

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

    Theoretical max x 13,065,594 ops/sec ±2.57% (10 runs sampled) *burn in*
    MiniSignals x 7,108,730 ops/sec ±4.67% (10 runs sampled)
    signal-lite x 6,191,924 ops/sec ±4.23% (10 runs sampled)
    ReactiveProperty x 5,055,606 ops/sec ±3.85% (10 runs sampled)
    dripEmitter x 4,982,025 ops/sec ±3.40% (10 runs sampled)
    EventEmitter3 x 4,744,986 ops/sec ±3.89% (10 runs sampled)
    EventEmitter x 3,365,266 ops/sec ±3.82% (10 runs sampled)
    event-signal x 2,013,470 ops/sec ±2.68% (10 runs sampled)
    EventEmitter2 x 1,590,940 ops/sec ±6.64% (10 runs sampled)
    RXJS x 1,457,584 ops/sec ±6.50% (10 runs sampled)
    dripEmitterEnhanced x 607,418 ops/sec ±3.60% (10 runs sampled)
    signal-emitter x 240,298 ops/sec ±5.41% (10 runs sampled)
    JS-Signals x 191,150 ops/sec ±3.02% (10 runs sampled)

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

    dripEmitter x 25,874,699 ops/sec ±4.72% (10 runs sampled)
    MiniSignals x 15,294,959 ops/sec ±4.36% (10 runs sampled)
    ReactiveProperty x 4,502,872 ops/sec ±4.74% (10 runs sampled)
    EventDispatcher x 4,754,103 ops/sec ±12.65% (10 runs sampled)
    EventEmitter x 3,775,169 ops/sec ±16.49% (10 runs sampled)
    EventEmitter3 x 1,803,642 ops/sec ±5.26% (10 runs sampled)
    EventEmitter2 x 1,169,573 ops/sec ±6.14% (10 runs sampled)
    JS-Signals x 792,967 ops/sec ±4.42% (10 runs sampled)
    dripEmitterEnhanced x 613,116 ops/sec ±3.96% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

