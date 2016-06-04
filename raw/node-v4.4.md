TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 4.4.4 on Darwin 64-bit

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

    DripEmitter x 57,739,015 ops/sec ±2.68% (10 runs sampled)
    EventDispatcher x 55,835,691 ops/sec ±4.56% (10 runs sampled)
    Theoretical max x 55,891,377 ops/sec ±5.54% (10 runs sampled) *burn in*
    EventEmitter3 x 54,515,230 ops/sec ±4.12% (10 runs sampled)
    MiniSignals x 37,670,567 ops/sec ±5.00% (10 runs sampled)
    EventEmitter2 x 33,800,610 ops/sec ±2.59% (10 runs sampled)
    DripEmitterEnhanced x 24,526,320 ops/sec ±3.02% (10 runs sampled)
    EventEmitter x 25,682,120 ops/sec ±9.62% (10 runs sampled)
    JS-Signals x 1,919,869 ops/sec ±16.48% (10 runs sampled)
    ReactiveProperty x 1,226,016 ops/sec ±22.30% (10 runs sampled)

*Fastest is __DripEmitter, EventDispatcher__*


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

    Theoretical max x 8,080,614 ops/sec ±5.93% (10 runs sampled) *burn in*
    MiniSignals x 4,660,832 ops/sec ±3.40% (10 runs sampled)
    signal-lite x 4,215,087 ops/sec ±8.15% (10 runs sampled)
    EventEmitter3 x 1,997,039 ops/sec ±5.37% (10 runs sampled)
    EventEmitter x 1,919,421 ops/sec ±21.02% (10 runs sampled)
    EventEmitter2 x 982,483 ops/sec ±5.87% (10 runs sampled)
    dripEmitterEnhanced x 631,276 ops/sec ±7.22% (10 runs sampled)
    signal-emitter x 140,401 ops/sec ±4.16% (10 runs sampled)
    JS-Signals x 141,010 ops/sec ±12.52% (10 runs sampled)

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

    MiniSignals x 18,939,640 ops/sec ±3.53% (10 runs sampled)
    signal-lite x 17,169,958 ops/sec ±5.67% (10 runs sampled)
    EventEmitter3 x 13,401,917 ops/sec ±2.24% (10 runs sampled)
    event-signal x 5,954,996 ops/sec ±5.27% (10 runs sampled)
    Theoretical max x 3,800,582 ops/sec ±12.54% (10 runs sampled) *burn in*
    dripEmitter x 3,142,341 ops/sec ±4.27% (10 runs sampled)
    ReactiveProperty x 2,953,182 ops/sec ±3.00% (10 runs sampled)
    EventEmitter x 2,574,903 ops/sec ±4.62% (10 runs sampled)
    EventEmitter2 x 2,332,582 ops/sec ±3.27% (10 runs sampled)
    RXJS x 2,151,213 ops/sec ±7.34% (10 runs sampled)
    dripEmitterEnhanced x 1,654,753 ops/sec ±4.18% (10 runs sampled)
    signal-emitter x 603,064 ops/sec ±5.79% (10 runs sampled)
    JS-Signals x 554,970 ops/sec ±3.04% (10 runs sampled)

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

    Theoretical max x 23,552,132 ops/sec ±6.84% (10 runs sampled) *burn in*
    push-stream x 19,350,664 ops/sec ±7.17% (10 runs sampled)
    MiniSignals x 17,417,255 ops/sec ±5.70% (10 runs sampled)
    signal-lite x 17,156,658 ops/sec ±4.94% (10 runs sampled)
    EventEmitter3 x 13,700,238 ops/sec ±2.52% (10 runs sampled)
    dripEmitter x 13,919,312 ops/sec ±5.59% (10 runs sampled)
    ReactiveProperty x 13,238,152 ops/sec ±6.74% (10 runs sampled)
    EventEmitter x 10,449,656 ops/sec ±5.63% (10 runs sampled)
    observ x 5,958,533 ops/sec ±13.81% (10 runs sampled)
    event-signal x 5,237,464 ops/sec ±9.39% (10 runs sampled)
    EventEmitter2 x 4,847,137 ops/sec ±3.09% (10 runs sampled)
    RXJS x 3,882,386 ops/sec ±3.94% (10 runs sampled)
    d3-dispatch x 3,883,934 ops/sec ±5.51% (10 runs sampled)
    dripEmitterEnhanced x 2,979,076 ops/sec ±3.82% (10 runs sampled)
    observable x 1,353,476 ops/sec ±4.85% (10 runs sampled)
    JS-Signals x 565,816 ops/sec ±6.02% (10 runs sampled)
    signal-emitter x 541,925 ops/sec ±5.01% (10 runs sampled)
    namespace-emitter x 473,365 ops/sec ±9.71% (10 runs sampled)
    minivents x 445,202 ops/sec ±3.32% (10 runs sampled)

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

    Theoretical max x 37,625,730 ops/sec ±4.50% (10 runs sampled) *burn in*
    push-stream x 31,010,258 ops/sec ±4.43% (10 runs sampled)
    MiniSignals x 28,544,690 ops/sec ±3.36% (10 runs sampled)
    signal-lite x 23,783,427 ops/sec ±2.37% (10 runs sampled)
    EventEmitter2 x 21,569,624 ops/sec ±3.00% (10 runs sampled)
    EventEmitter3 x 19,720,245 ops/sec ±2.54% (10 runs sampled)
    dripEmitter x 19,711,060 ops/sec ±4.13% (10 runs sampled)
    EventEmitter x 17,553,296 ops/sec ±3.54% (10 runs sampled)
    ReactiveProperty x 19,486,248 ops/sec ±15.04% (10 runs sampled)
    observ x 9,583,291 ops/sec ±9.25% (10 runs sampled)
    event-signal x 6,645,796 ops/sec ±7.13% (10 runs sampled)
    RXJS x 5,562,077 ops/sec ±6.74% (10 runs sampled)
    d3-dispatch x 5,544,498 ops/sec ±11.02% (10 runs sampled)
    barracks x 4,699,642 ops/sec ±4.32% (10 runs sampled)
    dripEmitterEnhanced x 3,225,005 ops/sec ±4.97% (10 runs sampled)
    observable x 1,858,726 ops/sec ±10.02% (10 runs sampled)
    minivents x 800,236 ops/sec ±4.22% (10 runs sampled)
    signal-emitter x 616,454 ops/sec ±3.61% (10 runs sampled)
    namespace-emitter x 536,712 ops/sec ±6.52% (10 runs sampled)
    JS-Signals x 528,958 ops/sec ±5.89% (10 runs sampled)

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

    Theoretical max x 4,719,322 ops/sec ±5.04% (10 runs sampled) *burn in*
    MiniSignals x 4,370,025 ops/sec ±8.42% (10 runs sampled)
    signal-lite x 4,259,983 ops/sec ±7.70% (10 runs sampled)
    dripEmitter x 4,155,855 ops/sec ±5.58% (10 runs sampled)
    EventEmitter3 x 3,771,817 ops/sec ±5.73% (10 runs sampled)
    ReactiveProperty x 3,705,314 ops/sec ±7.50% (10 runs sampled)
    EventEmitter x 3,487,937 ops/sec ±4.91% (10 runs sampled)
    event-signal x 2,773,690 ops/sec ±10.57% (10 runs sampled)
    EventEmitter2 x 2,400,253 ops/sec ±7.42% (10 runs sampled)
    dripEmitterEnhanced x 1,717,222 ops/sec ±5.49% (10 runs sampled)
    RXJS x 1,452,445 ops/sec ±16.37% (10 runs sampled)
    signal-emitter x 541,640 ops/sec ±5.59% (10 runs sampled)
    JS-Signals x 382,411 ops/sec ±5.81% (10 runs sampled)
    minivents x 105,210 ops/sec ±1.83% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite, dripEmitter__*


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

    Theoretical max x 3,936,624 ops/sec ±11.09% (10 runs sampled) *burn in*
    dripEmitter x 3,076,240 ops/sec ±4.19% (10 runs sampled)
    EventEmitter x 2,979,427 ops/sec ±2.61% (10 runs sampled)
    ReactiveProperty x 2,833,967 ops/sec ±3.15% (10 runs sampled)
    EventEmitter3 x 2,795,216 ops/sec ±4.90% (10 runs sampled)
    event-signal x 2,501,034 ops/sec ±3.86% (10 runs sampled)
    MiniSignals x 2,242,716 ops/sec ±2.67% (10 runs sampled)
    EventEmitter2 x 2,196,107 ops/sec ±2.80% (10 runs sampled)
    RXJS x 2,146,422 ops/sec ±4.04% (10 runs sampled)
    signal-lite x 1,890,729 ops/sec ±7.90% (10 runs sampled)
    dripEmitterEnhanced x 1,647,676 ops/sec ±6.49% (10 runs sampled)
    JS-Signals x 486,040 ops/sec ±2.58% (10 runs sampled)
    signal-emitter x 489,330 ops/sec ±6.95% (10 runs sampled)

*Fastest is __dripEmitter, EventEmitter__*


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

    Theoretical max x 8,781,912 ops/sec ±4.78% (10 runs sampled) *burn in*
    signal-lite x 5,320,298 ops/sec ±2.93% (10 runs sampled)
    MiniSignals x 5,401,797 ops/sec ±4.87% (10 runs sampled)
    push-stream x 5,420,693 ops/sec ±6.85% (10 runs sampled)
    ReactiveProperty x 5,079,153 ops/sec ±3.83% (10 runs sampled)
    dripEmitter x 4,257,954 ops/sec ±3.68% (10 runs sampled)
    EventEmitter3 x 3,800,901 ops/sec ±6.42% (10 runs sampled)
    EventEmitter x 2,959,590 ops/sec ±7.38% (10 runs sampled)
    EventDispatcher x 2,340,627 ops/sec ±7.35% (10 runs sampled)
    event-signal x 1,694,982 ops/sec ±8.88% (10 runs sampled)
    EventEmitter2 x 1,527,509 ops/sec ±4.49% (10 runs sampled)
    RXJS x 1,175,709 ops/sec ±8.19% (10 runs sampled)
    dripEmitterEnhanced x 886,723 ops/sec ±7.01% (10 runs sampled)
    JS-Signals x 180,345 ops/sec ±9.17% (10 runs sampled)
    signal-emitter x 176,795 ops/sec ±8.84% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals, push-stream, ReactiveProperty__*


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

    Theoretical max x 16,061,498 ops/sec ±10.62% (10 runs sampled) *burn in*
    MiniSignals x 15,137,104 ops/sec ±4.48% (10 runs sampled)
    signal-lite x 12,902,970 ops/sec ±6.12% (10 runs sampled)
    EventEmitter x 2,260,065 ops/sec ±4.78% (10 runs sampled)
    EventEmitter3 x 2,201,065 ops/sec ±5.70% (10 runs sampled)
    EventEmitter2 x 1,831,143 ops/sec ±4.49% (10 runs sampled)
    dripEmitterEnhanced x 1,499,267 ops/sec ±4.61% (10 runs sampled)
    signal-emitter x 347,750 ops/sec ±3.91% (10 runs sampled)
    JS-Signals x 231,470 ops/sec ±4.33% (10 runs sampled)
    minivents x 139,047 ops/sec ±4.11% (10 runs sampled)

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

    Theoretical max x 11,751,158 ops/sec ±8.87% (10 runs sampled) *burn in*
    signal-lite x 6,288,560 ops/sec ±6.46% (10 runs sampled)
    MiniSignals x 6,119,263 ops/sec ±6.02% (10 runs sampled)
    ReactiveProperty x 5,251,065 ops/sec ±4.28% (10 runs sampled)
    dripEmitter x 4,813,020 ops/sec ±4.73% (10 runs sampled)
    EventEmitter3 x 4,544,112 ops/sec ±4.48% (10 runs sampled)
    EventEmitter x 3,255,483 ops/sec ±4.55% (10 runs sampled)
    event-signal x 1,908,013 ops/sec ±11.99% (10 runs sampled)
    EventEmitter2 x 1,501,669 ops/sec ±4.70% (10 runs sampled)
    RXJS x 1,457,390 ops/sec ±4.06% (10 runs sampled)
    dripEmitterEnhanced x 956,090 ops/sec ±3.13% (10 runs sampled)
    signal-emitter x 202,121 ops/sec ±4.02% (10 runs sampled)
    JS-Signals x 190,610 ops/sec ±4.85% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    dripEmitter x 21,225,326 ops/sec ±5.93% (10 runs sampled)
    MiniSignals x 15,097,512 ops/sec ±5.05% (10 runs sampled)
    EventDispatcher x 4,608,416 ops/sec ±5.96% (10 runs sampled)
    EventEmitter x 3,630,787 ops/sec ±21.14% (10 runs sampled)
    ReactiveProperty x 2,666,798 ops/sec ±2.58% (10 runs sampled)
    EventEmitter3 x 1,678,084 ops/sec ±4.25% (10 runs sampled)
    EventEmitter2 x 1,111,323 ops/sec ±3.66% (10 runs sampled)
    JS-Signals x 645,490 ops/sec ±4.96% (10 runs sampled)
    dripEmitterEnhanced x 151,974 ops/sec ±12.44% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

