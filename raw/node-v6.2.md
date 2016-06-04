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

    EventDispatcher x 49,119,506 ops/sec ±4.36% (10 runs sampled)
    DripEmitter x 46,749,448 ops/sec ±6.02% (10 runs sampled)
    EventEmitter3 x 45,726,978 ops/sec ±6.28% (10 runs sampled)
    MiniSignals x 33,649,205 ops/sec ±7.01% (10 runs sampled)
    EventEmitter2 x 30,211,540 ops/sec ±2.04% (10 runs sampled)
    Theoretical max x 36,436,043 ops/sec ±43.79% (10 runs sampled) *burn in*
    EventEmitter x 25,287,281 ops/sec ±4.83% (10 runs sampled)
    DripEmitterEnhanced x 19,037,945 ops/sec ±7.43% (10 runs sampled)
    JS-Signals x 1,757,117 ops/sec ±19.71% (10 runs sampled)
    ReactiveProperty x 1,212,938 ops/sec ±18.10% (10 runs sampled)

*Fastest is __EventDispatcher, DripEmitter, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

TAP version 13
# emit
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
## emit

    Theoretical max x 7,452,386 ops/sec ±3.75% (10 runs sampled) *burn in*
    MiniSignals x 4,268,762 ops/sec ±7.10% (10 runs sampled)
    signal-lite x 3,991,503 ops/sec ±4.55% (10 runs sampled)
    EventEmitter x 2,105,987 ops/sec ±9.31% (10 runs sampled)
    EventEmitter3 x 1,074,215 ops/sec ±4.65% (10 runs sampled)
    EventEmitter2 x 655,415 ops/sec ±6.86% (10 runs sampled)
    dripEmitterEnhanced x 383,339 ops/sec ±2.40% (10 runs sampled)
    JS-Signals x 134,526 ops/sec ±8.10% (10 runs sampled)
    signal-emitter x 137,334 ops/sec ±14.46% (10 runs sampled)

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
ok 13 dripEmitter runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitterEnhanced runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 RXJS runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 ReactiveProperty runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 JS-Signals runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 MiniSignals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 signal-emitter runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 event-signal runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 signal-lite runs without error
ok 38 handle called one time
ok 39 handle2 called one time
## emit with context

    Theoretical max x 27,745,250 ops/sec ±7.46% (10 runs sampled) *burn in*
    MiniSignals x 17,546,838 ops/sec ±4.72% (10 runs sampled)
    signal-lite x 15,612,978 ops/sec ±3.99% (10 runs sampled)
    ReactiveProperty x 14,929,728 ops/sec ±4.84% (10 runs sampled)
    EventEmitter3 x 13,775,666 ops/sec ±4.49% (10 runs sampled)
    dripEmitter x 13,211,618 ops/sec ±4.59% (10 runs sampled)
    EventEmitter x 7,953,224 ops/sec ±5.35% (10 runs sampled)
    event-signal x 5,599,079 ops/sec ±3.96% (10 runs sampled)
    EventEmitter2 x 4,413,073 ops/sec ±6.86% (10 runs sampled)
    RXJS x 3,910,535 ops/sec ±6.57% (10 runs sampled)
    dripEmitterEnhanced x 1,922,321 ops/sec ±4.21% (10 runs sampled)
    signal-emitter x 682,386 ops/sec ±4.59% (10 runs sampled)
    JS-Signals x 519,570 ops/sec ±7.06% (10 runs sampled)

*Fastest is __MiniSignals__*


1..39
# tests 39
# pass  39

# ok

TAP version 13
# emit one value - two listeners
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
ok 13 dripEmitter runs without error
ok 14 handle called once
ok 15 handle2 called once
ok 16 push-stream runs without error
ok 17 handle called once
ok 18 handle2 called once
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called once
ok 21 handle2 called once
ok 22 d3-dispatch runs without error
ok 23 handle called once
ok 24 handle2 called once
ok 25 namespace-emitter runs without error
ok 26 handle called once
ok 27 handle2 called once
ok 28 ReactiveProperty runs without error
ok 29 handle called once
ok 30 handle2 called once
ok 31 observable runs without error
ok 32 handle called once
ok 33 handle2 called once
ok 34 observ runs without error
ok 35 handle called once
ok 36 handle2 called once
ok 37 RXJS runs without error
ok 38 handle called once
ok 39 handle2 called once
ok 40 JS-Signals runs without error
ok 41 handle called once
ok 42 handle2 called once
ok 43 MiniSignals runs without error
ok 44 handle called once
ok 45 handle2 called once
ok 46 signal-emitter runs without error
ok 47 handle called once
ok 48 handle2 called once
ok 49 event-signal runs without error
ok 50 handle called once
ok 51 handle2 called once
ok 52 signal-lite runs without error
ok 53 handle called once
ok 54 handle2 called once
ok 55 minivents runs without error
ok 56 handle called once
ok 57 handle2 called once
## emit one value - two listeners

    Theoretical max x 23,789,275 ops/sec ±6.88% (10 runs sampled) *burn in*
    push-stream x 19,265,683 ops/sec ±5.65% (10 runs sampled)
    signal-lite x 14,444,168 ops/sec ±5.77% (10 runs sampled)
    MiniSignals x 14,764,880 ops/sec ±9.28% (10 runs sampled)
    dripEmitter x 13,451,170 ops/sec ±5.29% (10 runs sampled)
    ReactiveProperty x 13,021,681 ops/sec ±3.64% (10 runs sampled)
    EventEmitter3 x 11,615,751 ops/sec ±9.92% (10 runs sampled)
    EventEmitter x 9,101,311 ops/sec ±3.69% (10 runs sampled)
    observ x 6,149,924 ops/sec ±4.03% (10 runs sampled)
    event-signal x 5,578,947 ops/sec ±4.68% (10 runs sampled)
    EventEmitter2 x 4,411,007 ops/sec ±13.68% (10 runs sampled)
    RXJS x 3,859,983 ops/sec ±5.84% (10 runs sampled)
    d3-dispatch x 1,797,626 ops/sec ±5.68% (10 runs sampled)
    dripEmitterEnhanced x 1,753,624 ops/sec ±5.31% (10 runs sampled)
    signal-emitter x 690,255 ops/sec ±4.30% (10 runs sampled)
    namespace-emitter x 573,355 ops/sec ±5.64% (10 runs sampled)
    JS-Signals x 541,575 ops/sec ±3.98% (10 runs sampled)
    observable x 476,019 ops/sec ±3.17% (10 runs sampled)
    minivents x 450,928 ops/sec ±2.86% (10 runs sampled)

*Fastest is __push-stream__*


1..57
# tests 57
# pass  57

# ok

TAP version 13
# emit one value - one listener
ok 1 Theoretical max runs without error
ok 2 handle called once
ok 3 EventEmitter runs without error
ok 4 handle called once
ok 5 EventEmitter2 runs without error
ok 6 handle called once
ok 7 EventEmitter3 runs without error
ok 8 handle called once
ok 9 dripEmitter runs without error
ok 10 handle called once
ok 11 barracks runs without error
ok 12 handle called once
ok 13 push-stream runs without error
ok 14 handle called once
ok 15 dripEmitterEnhanced runs without error
ok 16 handle called once
ok 17 d3-dispatch runs without error
ok 18 handle called once
ok 19 namespace-emitter runs without error
ok 20 handle called once
ok 21 ReactiveProperty runs without error
ok 22 handle called once
ok 23 observable runs without error
ok 24 handle called once
ok 25 observ runs without error
ok 26 handle called once
ok 27 RXJS runs without error
ok 28 handle called once
ok 29 JS-Signals runs without error
ok 30 handle called once
ok 31 MiniSignals runs without error
ok 32 handle called once
ok 33 signal-emitter runs without error
ok 34 handle called once
ok 35 event-signal runs without error
ok 36 handle called once
ok 37 signal-lite runs without error
ok 38 handle called once
ok 39 minivents runs without error
ok 40 handle called once
## emit one value - one listener

    Theoretical max x 36,191,757 ops/sec ±10.59% (10 runs sampled) *burn in*
    push-stream x 30,937,301 ops/sec ±4.45% (10 runs sampled)
    MiniSignals x 27,552,289 ops/sec ±5.28% (10 runs sampled)
    signal-lite x 24,612,896 ops/sec ±4.17% (10 runs sampled)
    dripEmitter x 21,059,272 ops/sec ±5.79% (10 runs sampled)
    EventEmitter3 x 18,995,541 ops/sec ±8.03% (10 runs sampled)
    ReactiveProperty x 19,128,801 ops/sec ±12.11% (10 runs sampled)
    EventEmitter2 x 17,938,095 ops/sec ±34.40% (10 runs sampled)
    EventEmitter x 13,824,714 ops/sec ±6.60% (10 runs sampled)
    observ x 10,252,412 ops/sec ±6.09% (10 runs sampled)
    event-signal x 6,844,013 ops/sec ±3.23% (10 runs sampled)
    RXJS x 5,190,285 ops/sec ±8.39% (10 runs sampled)
    barracks x 4,771,946 ops/sec ±2.52% (10 runs sampled)
    d3-dispatch x 3,111,234 ops/sec ±4.81% (10 runs sampled)
    dripEmitterEnhanced x 1,918,794 ops/sec ±8.00% (10 runs sampled)
    minivents x 786,989 ops/sec ±9.32% (10 runs sampled)
    JS-Signals x 687,276 ops/sec ±5.42% (10 runs sampled)
    signal-emitter x 659,844 ops/sec ±7.43% (10 runs sampled)
    namespace-emitter x 625,448 ops/sec ±5.08% (10 runs sampled)
    observable x 535,378 ops/sec ±4.31% (10 runs sampled)

*Fastest is __push-stream__*


1..40
# tests 40
# pass  40

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
ok 9 dripEmitter runs without error
ok 10 handels called N times
ok 11 dripEmitterEnhanced runs without error
ok 12 handels called N times
ok 13 RXJS runs without error
ok 14 handels called N times
ok 15 ReactiveProperty runs without error
ok 16 handels called N times
ok 17 JS-Signals runs without error
ok 18 handels called N times
ok 19 MiniSignals runs without error
ok 20 handels called N times
ok 21 signal-emitter runs without error
ok 22 handels called N times
ok 23 event-signal runs without error
ok 24 handels called N times
ok 25 signal-lite runs without error
ok 26 handels called N times
ok 27 minivents runs without error
ok 28 handels called N times
## emit many listeners

    MiniSignals x 4,626,841 ops/sec ±4.62% (10 runs sampled)
    Theoretical max x 4,730,650 ops/sec ±7.93% (10 runs sampled) *burn in*
    dripEmitter x 4,326,602 ops/sec ±4.95% (10 runs sampled)
    signal-lite x 4,187,036 ops/sec ±5.08% (10 runs sampled)
    EventEmitter3 x 4,038,210 ops/sec ±4.75% (10 runs sampled)
    ReactiveProperty x 3,873,895 ops/sec ±4.82% (10 runs sampled)
    EventEmitter x 3,611,600 ops/sec ±3.34% (10 runs sampled)
    event-signal x 2,763,065 ops/sec ±4.83% (10 runs sampled)
    EventEmitter2 x 2,523,259 ops/sec ±2.71% (10 runs sampled)
    RXJS x 1,575,177 ops/sec ±4.85% (10 runs sampled)
    dripEmitterEnhanced x 1,418,371 ops/sec ±5.74% (10 runs sampled)
    signal-emitter x 556,397 ops/sec ±17.06% (10 runs sampled)
    JS-Signals x 260,487 ops/sec ±2.65% (10 runs sampled)
    minivents x 104,752 ops/sec ±6.54% (10 runs sampled)

*Fastest is __MiniSignals__*


1..28
# tests 28
# pass  28

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
ok 13 dripEmitter runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitterEnhanced runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 RXJS runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 ReactiveProperty runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 JS-Signals runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 MiniSignals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 signal-emitter runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 event-signal runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 signal-lite runs without error
ok 38 handle called one time
ok 39 handle2 called one time
## emit with bound function

    Theoretical max x 28,248,955 ops/sec ±5.35% (10 runs sampled) *burn in*
    ReactiveProperty x 14,317,447 ops/sec ±2.30% (10 runs sampled)
    dripEmitter x 12,969,386 ops/sec ±4.16% (10 runs sampled)
    EventEmitter3 x 11,576,992 ops/sec ±3.72% (10 runs sampled)
    EventEmitter x 8,417,891 ops/sec ±6.89% (10 runs sampled)
    MiniSignals x 7,389,469 ops/sec ±7.69% (10 runs sampled)
    event-signal x 5,203,765 ops/sec ±3.86% (10 runs sampled)
    signal-lite x 5,170,669 ops/sec ±8.89% (10 runs sampled)
    EventEmitter2 x 4,721,671 ops/sec ±4.97% (10 runs sampled)
    RXJS x 4,026,867 ops/sec ±4.92% (10 runs sampled)
    dripEmitterEnhanced x 1,916,624 ops/sec ±2.54% (10 runs sampled)
    signal-emitter x 699,044 ops/sec ±5.86% (10 runs sampled)
    JS-Signals x 490,259 ops/sec ±4.61% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..39
# tests 39
# pass  39

# ok

TAP version 13
# emit one object
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
ok 43 EventDispatcher runs without error
ok 44 handle called three times
ok 45 handle2 called three times
## emit one object

    Theoretical max x 8,476,845 ops/sec ±4.74% (10 runs sampled) *burn in*
    push-stream x 5,472,662 ops/sec ±4.64% (10 runs sampled)
    MiniSignals x 4,918,885 ops/sec ±10.35% (10 runs sampled)
    signal-lite x 4,782,333 ops/sec ±9.20% (10 runs sampled)
    ReactiveProperty x 4,226,828 ops/sec ±5.71% (10 runs sampled)
    EventEmitter3 x 4,126,006 ops/sec ±4.39% (10 runs sampled)
    dripEmitter x 4,157,207 ops/sec ±5.82% (10 runs sampled)
    EventEmitter x 2,688,965 ops/sec ±6.24% (10 runs sampled)
    EventDispatcher x 2,310,650 ops/sec ±2.88% (10 runs sampled)
    event-signal x 1,777,858 ops/sec ±3.01% (10 runs sampled)
    EventEmitter2 x 1,502,670 ops/sec ±4.08% (10 runs sampled)
    RXJS x 1,274,362 ops/sec ±10.64% (10 runs sampled)
    dripEmitterEnhanced x 552,601 ops/sec ±3.57% (10 runs sampled)
    signal-emitter x 222,931 ops/sec ±6.04% (10 runs sampled)
    JS-Signals x 172,693 ops/sec ±6.70% (10 runs sampled)

*Fastest is __push-stream, MiniSignals__*


1..45
# tests 45
# pass  45

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
## emit many values

    Theoretical max x 15,966,938 ops/sec ±6.97% (10 runs sampled) *burn in*
    MiniSignals x 13,009,829 ops/sec ±1.49% (10 runs sampled)
    signal-lite x 11,169,267 ops/sec ±7.67% (10 runs sampled)
    EventEmitter3 x 644,918 ops/sec ±6.68% (10 runs sampled)
    EventEmitter2 x 640,831 ops/sec ±6.79% (10 runs sampled)
    EventEmitter x 618,644 ops/sec ±25.41% (10 runs sampled)
    dripEmitterEnhanced x 511,120 ops/sec ±7.30% (10 runs sampled)
    signal-emitter x 340,303 ops/sec ±6.27% (10 runs sampled)
    JS-Signals x 192,824 ops/sec ±4.51% (10 runs sampled)
    minivents x 129,726 ops/sec ±4.75% (10 runs sampled)

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
ok 13 dripEmitter runs without error
ok 14 handle called three times
ok 15 handle2 called three times
ok 16 dripEmitterEnhanced runs without error
ok 17 handle called three times
ok 18 handle2 called three times
ok 19 RXJS runs without error
ok 20 handle called three times
ok 21 handle2 called three times
ok 22 ReactiveProperty runs without error
ok 23 handle called three times
ok 24 handle2 called three times
ok 25 JS-Signals runs without error
ok 26 handle called three times
ok 27 handle2 called three times
ok 28 MiniSignals runs without error
ok 29 handle called three times
ok 30 handle2 called three times
ok 31 signal-emitter runs without error
ok 32 handle called three times
ok 33 handle2 called three times
ok 34 event-signal runs without error
ok 35 handle called three times
ok 36 handle2 called three times
ok 37 signal-lite runs without error
ok 38 handle called three times
ok 39 handle2 called three times
## emit multiple arrays

    Theoretical max x 12,042,462 ops/sec ±4.13% (10 runs sampled) *burn in*
    MiniSignals x 6,863,322 ops/sec ±3.34% (10 runs sampled)
    signal-lite x 5,886,870 ops/sec ±4.70% (10 runs sampled)
    dripEmitter x 5,130,596 ops/sec ±4.31% (10 runs sampled)
    ReactiveProperty x 4,977,698 ops/sec ±6.15% (10 runs sampled)
    EventEmitter3 x 4,650,121 ops/sec ±5.34% (10 runs sampled)
    EventEmitter x 3,027,784 ops/sec ±4.87% (10 runs sampled)
    event-signal x 1,676,113 ops/sec ±8.04% (10 runs sampled)
    EventEmitter2 x 1,502,371 ops/sec ±5.15% (10 runs sampled)
    RXJS x 1,397,071 ops/sec ±5.80% (10 runs sampled)
    dripEmitterEnhanced x 548,632 ops/sec ±6.20% (10 runs sampled)
    JS-Signals x 178,404 ops/sec ±4.52% (10 runs sampled)
    signal-emitter x 195,012 ops/sec ±19.11% (10 runs sampled)

*Fastest is __MiniSignals__*


1..39
# tests 39
# pass  39

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
ok 9 dripEmitterEnhanced runs without error
ok 10 handle never called
ok 11 ReactiveProperty runs without error
ok 12 handle never called
ok 13 JS-Signals runs without error
ok 14 handle never called
ok 15 MiniSignals runs without error
ok 16 handle never called
ok 17 EventDispatcher runs without error
ok 18 handle never called
## add-remove

    dripEmitter x 16,903,862 ops/sec ±26.22% (10 runs sampled)
    MiniSignals x 12,640,258 ops/sec ±20.23% (10 runs sampled)
    EventDispatcher x 4,377,114 ops/sec ±13.09% (10 runs sampled)
    ReactiveProperty x 4,012,678 ops/sec ±8.51% (10 runs sampled)
    EventEmitter x 3,428,553 ops/sec ±11.11% (10 runs sampled)
    EventEmitter2 x 1,141,326 ops/sec ±5.74% (10 runs sampled)
    EventEmitter3 x 1,256,399 ops/sec ±21.80% (10 runs sampled)
    JS-Signals x 772,267 ops/sec ±2.63% (10 runs sampled)
    dripEmitterEnhanced x 461,619 ops/sec ±6.20% (10 runs sampled)

*Fastest is __dripEmitter, MiniSignals__*


1..18
# tests 18
# pass  18

# ok

