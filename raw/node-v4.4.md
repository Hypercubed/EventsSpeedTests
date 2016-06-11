TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 4.4.5 on Darwin 64-bit

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

    EventDispatcher x 61,657,456 ops/sec ±3.24% (10 runs sampled)
    Theoretical max x 62,701,237 ops/sec ±5.08% (10 runs sampled) *burn in*
    EventEmitter3 x 59,036,272 ops/sec ±2.07% (10 runs sampled)
    DripEmitter x 59,209,938 ops/sec ±3.91% (10 runs sampled)
    MiniSignals x 41,062,294 ops/sec ±3.65% (10 runs sampled)
    EventEmitter2 x 34,076,488 ops/sec ±5.14% (10 runs sampled)
    EventEmitter x 29,651,421 ops/sec ±2.86% (10 runs sampled)
    DripEmitterEnhanced x 24,185,290 ops/sec ±4.40% (10 runs sampled)
    push-stream x 16,380,667 ops/sec ±6.23% (10 runs sampled)
    JS-Signals x 2,386,735 ops/sec ±15.12% (10 runs sampled)
    ReactiveProperty x 1,330,588 ops/sec ±16.57% (10 runs sampled)
    pull-notify x 1,142,728 ops/sec ±17.87% (10 runs sampled)

*Fastest is __EventDispatcher, DripEmitter__*


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

    Theoretical max x 8,457,647 ops/sec ±3.69% (10 runs sampled) *burn in*
    MiniSignals x 4,842,391 ops/sec ±3.42% (10 runs sampled)
    signal-lite x 4,384,468 ops/sec ±3.52% (10 runs sampled)
    EventEmitter x 2,474,094 ops/sec ±3.10% (10 runs sampled)
    EventEmitter3 x 2,157,431 ops/sec ±7.41% (10 runs sampled)
    EventEmitter2 x 1,082,594 ops/sec ±3.61% (10 runs sampled)
    dripEmitterEnhanced x 685,327 ops/sec ±3.73% (10 runs sampled)
    signal-emitter x 157,197 ops/sec ±5.72% (10 runs sampled)
    JS-Signals x 152,719 ops/sec ±5.20% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    signal-lite x 20,188,980 ops/sec ±2.15% (10 runs sampled)
    MiniSignals x 18,722,023 ops/sec ±8.15% (10 runs sampled)
    EventEmitter3 x 14,725,866 ops/sec ±11.19% (10 runs sampled)
    event-signal x 6,006,728 ops/sec ±9.29% (10 runs sampled)
    Theoretical max x 4,194,826 ops/sec ±4.13% (10 runs sampled) *burn in*
    dripEmitter x 3,259,319 ops/sec ±2.65% (10 runs sampled)
    push-stream x 3,396,379 ops/sec ±8.71% (10 runs sampled)
    EventEmitter x 3,133,864 ops/sec ±4.33% (10 runs sampled)
    ReactiveProperty x 3,005,452 ops/sec ±5.47% (10 runs sampled)
    EventEmitter2 x 2,465,730 ops/sec ±4.94% (10 runs sampled)
    RXJS x 2,081,212 ops/sec ±4.52% (10 runs sampled)
    dripEmitterEnhanced x 1,826,630 ops/sec ±2.13% (10 runs sampled)
    pull-notify x 844,731 ops/sec ±6.47% (10 runs sampled)
    signal-emitter x 658,024 ops/sec ±4.27% (10 runs sampled)
    JS-Signals x 610,419 ops/sec ±4.61% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    Theoretical max x 26,630,539 ops/sec ±2.33% (10 runs sampled) *burn in*
    MicroSignals x 18,513,413 ops/sec ±3.32% (10 runs sampled)
    MiniSignals x 18,187,584 ops/sec ±6.58% (10 runs sampled)
    signal-lite x 17,463,542 ops/sec ±4.92% (10 runs sampled)
    push-stream-patch x 16,061,476 ops/sec ±3.80% (10 runs sampled)
    push-stream x 16,340,522 ops/sec ±6.66% (10 runs sampled)
    dripEmitter x 14,020,342 ops/sec ±4.88% (10 runs sampled)
    ReactiveProperty x 13,696,239 ops/sec ±3.69% (10 runs sampled)
    EventEmitter3 x 13,332,116 ops/sec ±12.36% (10 runs sampled)
    EventEmitter x 10,705,960 ops/sec ±5.57% (10 runs sampled)
    observ x 6,464,390 ops/sec ±4.59% (10 runs sampled)
    event-signal x 6,150,874 ops/sec ±4.97% (10 runs sampled)
    EventEmitter2 x 5,286,786 ops/sec ±3.32% (10 runs sampled)
    RXJS x 4,587,007 ops/sec ±4.97% (10 runs sampled)
    d3-dispatch x 4,482,329 ops/sec ±6.52% (10 runs sampled)
    dripEmitterEnhanced x 3,060,843 ops/sec ±6.11% (10 runs sampled)
    observable x 1,455,447 ops/sec ±3.76% (10 runs sampled)
    pull-notify x 1,050,237 ops/sec ±8.29% (10 runs sampled)
    JS-Signals x 592,474 ops/sec ±2.74% (10 runs sampled)
    signal-emitter x 622,465 ops/sec ±10.48% (10 runs sampled)
    namespace-emitter x 574,168 ops/sec ±7.75% (10 runs sampled)
    minivents x 471,821 ops/sec ±3.38% (10 runs sampled)

*Fastest is __MicroSignals, MiniSignals, signal-lite__*


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

    Theoretical max x 42,432,481 ops/sec ±5.90% (10 runs sampled) *burn in*
    MicroSignals x 33,247,438 ops/sec ±2.93% (10 runs sampled)
    MiniSignals x 30,386,267 ops/sec ±5.36% (10 runs sampled)
    mini-pipe x 29,417,389 ops/sec ±3.59% (10 runs sampled)
    signal-lite x 26,466,988 ops/sec ±4.07% (10 runs sampled)
    push-stream x 24,185,344 ops/sec ±3.52% (10 runs sampled)
    push-stream-patch x 22,771,803 ops/sec ±7.56% (10 runs sampled)
    EventEmitter2 x 21,979,592 ops/sec ±3.91% (10 runs sampled)
    ReactiveProperty x 22,150,278 ops/sec ±4.81% (10 runs sampled)
    dripEmitter x 21,040,022 ops/sec ±4.74% (10 runs sampled)
    EventEmitter3 x 20,980,178 ops/sec ±5.15% (10 runs sampled)
    EventEmitter x 18,009,804 ops/sec ±6.85% (10 runs sampled)
    observ x 10,340,408 ops/sec ±6.47% (10 runs sampled)
    event-signal x 7,074,124 ops/sec ±6.93% (10 runs sampled)
    RXJS x 5,948,060 ops/sec ±4.94% (10 runs sampled)
    d3-dispatch x 6,131,392 ops/sec ±8.65% (10 runs sampled)
    barracks x 5,192,318 ops/sec ±5.92% (10 runs sampled)
    dripEmitterEnhanced x 3,437,463 ops/sec ±3.37% (10 runs sampled)
    observable x 2,197,188 ops/sec ±4.72% (10 runs sampled)
    pull-notify x 1,518,975 ops/sec ±5.97% (10 runs sampled)
    minivents x 855,320 ops/sec ±3.19% (10 runs sampled)
    JS-Signals x 664,414 ops/sec ±2.70% (10 runs sampled)
    signal-emitter x 637,969 ops/sec ±4.35% (10 runs sampled)
    namespace-emitter x 587,327 ops/sec ±4.04% (10 runs sampled)

*Fastest is __MicroSignals__*


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

    Theoretical max x 5,303,366 ops/sec ±4.18% (10 runs sampled) *burn in*
    dripEmitter x 4,578,512 ops/sec ±4.87% (10 runs sampled)
    push-stream x 4,592,064 ops/sec ±5.60% (10 runs sampled)
    signal-lite x 4,528,905 ops/sec ±6.33% (10 runs sampled)
    MiniSignals x 4,711,919 ops/sec ±10.76% (10 runs sampled)
    ReactiveProperty x 3,947,952 ops/sec ±3.05% (10 runs sampled)
    EventEmitter3 x 4,043,766 ops/sec ±6.04% (10 runs sampled)
    EventEmitter x 3,901,810 ops/sec ±5.24% (10 runs sampled)
    event-signal x 3,136,764 ops/sec ±4.21% (10 runs sampled)
    EventEmitter2 x 2,781,291 ops/sec ±3.73% (10 runs sampled)
    dripEmitterEnhanced x 2,086,878 ops/sec ±3.41% (10 runs sampled)
    RXJS x 1,653,491 ops/sec ±4.64% (10 runs sampled)
    signal-emitter x 543,462 ops/sec ±5.73% (10 runs sampled)
    JS-Signals x 406,726 ops/sec ±10.89% (10 runs sampled)
    minivents x 106,669 ops/sec ±2.98% (10 runs sampled)

*Fastest is __dripEmitter, push-stream, signal-lite, MiniSignals__*


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

    Theoretical max x 4,335,860 ops/sec ±3.66% (10 runs sampled) *burn in*
    dripEmitter x 3,559,880 ops/sec ±3.43% (10 runs sampled)
    push-stream x 3,453,187 ops/sec ±3.39% (10 runs sampled)
    EventEmitter3 x 3,356,881 ops/sec ±3.97% (10 runs sampled)
    ReactiveProperty x 3,213,095 ops/sec ±3.86% (10 runs sampled)
    EventEmitter x 3,113,296 ops/sec ±4.82% (10 runs sampled)
    event-signal x 2,576,994 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 2,476,052 ops/sec ±4.43% (10 runs sampled)
    RXJS x 2,219,757 ops/sec ±4.81% (10 runs sampled)
    MiniSignals x 2,170,847 ops/sec ±4.11% (10 runs sampled)
    signal-lite x 2,045,901 ops/sec ±3.62% (10 runs sampled)
    dripEmitterEnhanced x 1,857,121 ops/sec ±3.46% (10 runs sampled)
    pull-notify x 847,064 ops/sec ±6.46% (10 runs sampled)
    signal-emitter x 514,454 ops/sec ±12.83% (10 runs sampled)
    JS-Signals x 470,867 ops/sec ±6.51% (10 runs sampled)

*Fastest is __dripEmitter, push-stream__*


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

    Theoretical max x 9,881,142 ops/sec ±3.28% (10 runs sampled) *burn in*
    ReactiveProperty x 5,685,683 ops/sec ±3.16% (10 runs sampled)
    MiniSignals x 5,910,737 ops/sec ±8.10% (10 runs sampled)
    signal-lite x 5,629,586 ops/sec ±4.21% (10 runs sampled)
    push-stream x 5,571,250 ops/sec ±4.84% (10 runs sampled)
    MicroSignals x 5,692,360 ops/sec ±11.72% (10 runs sampled)
    dripEmitter x 4,568,640 ops/sec ±4.94% (10 runs sampled)
    EventEmitter3 x 4,037,503 ops/sec ±2.91% (10 runs sampled)
    EventEmitter x 3,450,756 ops/sec ±3.82% (10 runs sampled)
    EventDispatcher x 2,868,869 ops/sec ±3.55% (10 runs sampled)
    event-signal x 1,971,820 ops/sec ±5.12% (10 runs sampled)
    EventEmitter2 x 1,651,860 ops/sec ±5.99% (10 runs sampled)
    RXJS x 1,491,239 ops/sec ±3.27% (10 runs sampled)
    dripEmitterEnhanced x 934,070 ops/sec ±4.91% (10 runs sampled)
    pull-notify x 348,870 ops/sec ±4.81% (10 runs sampled)
    signal-emitter x 221,362 ops/sec ±4.57% (10 runs sampled)
    JS-Signals x 191,668 ops/sec ±5.44% (10 runs sampled)

*Fastest is __ReactiveProperty, MiniSignals, signal-lite, push-stream, MicroSignals__*


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

    Theoretical max x 12,924,775 ops/sec ±5.03% (10 runs sampled) *burn in*
    MiniSignals x 10,122,401 ops/sec ±5.48% (10 runs sampled)
    mini-pipe x 9,772,194 ops/sec ±4.71% (10 runs sampled)
    signal-lite x 9,044,706 ops/sec ±5.25% (10 runs sampled)
    push-stream x 8,212,837 ops/sec ±3.70% (10 runs sampled)
    ReactiveProperty x 8,054,908 ops/sec ±7.24% (10 runs sampled)
    dripEmitter x 7,397,594 ops/sec ±3.16% (10 runs sampled)
    EventEmitter2 x 7,156,523 ops/sec ±3.10% (10 runs sampled)
    EventEmitter3 x 6,687,368 ops/sec ±3.54% (10 runs sampled)
    EventEmitter x 6,118,076 ops/sec ±3.00% (10 runs sampled)
    EventDispatcher x 3,709,538 ops/sec ±4.61% (10 runs sampled)
    event-signal x 2,445,595 ops/sec ±3.41% (10 runs sampled)
    RXJS x 1,965,521 ops/sec ±5.40% (10 runs sampled)
    dripEmitterEnhanced x 1,069,221 ops/sec ±5.43% (10 runs sampled)
    signal-emitter x 209,873 ops/sec ±4.10% (10 runs sampled)
    JS-Signals x 197,416 ops/sec ±4.81% (10 runs sampled)

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

    Theoretical max x 19,414,195 ops/sec ±4.08% (10 runs sampled) *burn in*
    MiniSignals x 15,001,702 ops/sec ±3.96% (10 runs sampled)
    signal-lite x 14,474,319 ops/sec ±7.20% (10 runs sampled)
    EventEmitter x 2,597,816 ops/sec ±4.16% (10 runs sampled)
    EventEmitter3 x 2,511,763 ops/sec ±5.11% (10 runs sampled)
    EventEmitter2 x 1,939,867 ops/sec ±3.32% (10 runs sampled)
    dripEmitterEnhanced x 1,598,162 ops/sec ±3.35% (10 runs sampled)
    signal-emitter x 379,490 ops/sec ±5.24% (10 runs sampled)
    JS-Signals x 244,685 ops/sec ±5.98% (10 runs sampled)
    minivents x 153,295 ops/sec ±3.08% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 13,576,359 ops/sec ±5.51% (10 runs sampled) *burn in*
    signal-lite x 6,481,101 ops/sec ±4.90% (10 runs sampled)
    push-stream x 6,394,050 ops/sec ±4.41% (10 runs sampled)
    MiniSignals x 6,727,254 ops/sec ±11.54% (10 runs sampled)
    dripEmitter x 5,296,857 ops/sec ±3.90% (10 runs sampled)
    ReactiveProperty x 5,267,341 ops/sec ±5.37% (10 runs sampled)
    EventEmitter3 x 4,972,775 ops/sec ±3.64% (10 runs sampled)
    EventEmitter x 3,889,763 ops/sec ±4.58% (10 runs sampled)
    event-signal x 2,165,051 ops/sec ±3.91% (10 runs sampled)
    EventEmitter2 x 1,733,521 ops/sec ±4.73% (10 runs sampled)
    RXJS x 1,565,289 ops/sec ±4.00% (10 runs sampled)
    dripEmitterEnhanced x 1,032,101 ops/sec ±6.44% (10 runs sampled)
    pull-notify x 356,671 ops/sec ±3.45% (10 runs sampled)
    signal-emitter x 228,044 ops/sec ±3.54% (10 runs sampled)
    JS-Signals x 202,300 ops/sec ±8.50% (10 runs sampled)

*Fastest is __signal-lite, push-stream, MiniSignals__*


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

    dripEmitter x 22,810,070 ops/sec ±5.77% (10 runs sampled)
    MiniSignals x 16,758,909 ops/sec ±3.90% (10 runs sampled)
    EventDispatcher x 5,175,038 ops/sec ±5.36% (10 runs sampled)
    pushStream x 3,814,480 ops/sec ±2.70% (10 runs sampled)
    EventEmitter x 3,865,656 ops/sec ±17.42% (10 runs sampled)
    ReactiveProperty x 3,191,716 ops/sec ±4.62% (10 runs sampled)
    EventEmitter3 x 1,845,674 ops/sec ±5.37% (10 runs sampled)
    EventEmitter2 x 1,320,443 ops/sec ±4.38% (10 runs sampled)
    JS-Signals x 731,101 ops/sec ±3.12% (10 runs sampled)
    dripEmitterEnhanced x 168,494 ops/sec ±7.51% (10 runs sampled)

*Fastest is __dripEmitter__*


1..20
# tests 20
# pass  20

# ok

