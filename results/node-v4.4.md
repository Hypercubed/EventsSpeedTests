# Node.js 4.4.4 on Darwin 64-bit

TAP version 13
# Subtest: ./benchmark/add-remove.js
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

    dripEmitter x 15,873,358 ops/sec ±10.25% (10 runs sampled)
    MiniSignals x 12,929,518 ops/sec ±6.94% (10 runs sampled)
    EventDispatcher x 4,207,405 ops/sec ±4.64% (10 runs sampled)
    EventEmitter x 3,068,429 ops/sec ±16.62% (10 runs sampled)
    ReactiveProperty x 2,566,966 ops/sec ±7.27% (10 runs sampled)
    EventEmitter3 x 1,444,524 ops/sec ±5.04% (10 runs sampled)
    EventEmitter2 x 902,963 ops/sec ±15.43% (10 runs sampled)
    JS-Signals x 643,362 ops/sec ±11.93% (10 runs sampled)
    dripEmitterEnhanced x 160,093 ops/sec ±8.02% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

ok 1 - ./benchmark/add-remove.js # time=19013.557ms

# Subtest: ./benchmark/emit-arrays.js
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

    Theoretical max x 10,212,988 ops/sec ±6.17% (10 runs sampled) *burn in*
    signal-lite x 6,145,091 ops/sec ±7.88% (10 runs sampled)
    MiniSignals x 4,890,012 ops/sec ±3.64% (10 runs sampled)
    ReactiveProperty x 4,484,650 ops/sec ±7.24% (10 runs sampled)
    dripEmitter x 4,090,349 ops/sec ±5.74% (10 runs sampled)
    EventEmitter3 x 3,901,979 ops/sec ±7.14% (10 runs sampled)
    EventEmitter x 2,559,964 ops/sec ±7.30% (10 runs sampled)
    event-signal x 1,503,158 ops/sec ±10.83% (10 runs sampled)
    EventEmitter2 x 1,429,631 ops/sec ±6.08% (10 runs sampled)
    RXJS x 1,214,695 ops/sec ±6.14% (10 runs sampled)
    dripEmitterEnhanced x 960,401 ops/sec ±5.72% (10 runs sampled)
    JS-Signals x 174,728 ops/sec ±6.40% (10 runs sampled)
    signal-emitter x 163,722 ops/sec ±6.74% (10 runs sampled)

*Fastest is __signal-lite__*


1..26
# tests 26
# pass  26

# ok

ok 2 - ./benchmark/emit-arrays.js # time=25699.865ms

# Subtest: ./benchmark/emit-bound.js
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

    Theoretical max x 3,449,598 ops/sec ±7.77% (10 runs sampled) *burn in*
    EventEmitter3 x 2,770,784 ops/sec ±6.17% (10 runs sampled)
    EventEmitter x 2,644,661 ops/sec ±5.79% (10 runs sampled)
    dripEmitter x 2,632,639 ops/sec ±5.84% (10 runs sampled)
    ReactiveProperty x 2,479,416 ops/sec ±5.86% (10 runs sampled)
    event-signal x 2,034,589 ops/sec ±5.18% (10 runs sampled)
    EventEmitter2 x 1,938,694 ops/sec ±3.57% (10 runs sampled)
    MiniSignals x 1,776,636 ops/sec ±5.87% (10 runs sampled)
    RXJS x 1,741,942 ops/sec ±5.03% (10 runs sampled)
    signal-lite x 1,512,451 ops/sec ±9.31% (10 runs sampled)
    dripEmitterEnhanced x 1,432,633 ops/sec ±5.23% (10 runs sampled)
    signal-emitter x 480,691 ops/sec ±7.51% (10 runs sampled)
    JS-Signals x 399,870 ops/sec ±8.86% (10 runs sampled)

*Fastest is __EventEmitter3, EventEmitter, dripEmitter__*


1..26
# tests 26
# pass  26

# ok

ok 3 - ./benchmark/emit-bound.js # time=24206.168ms

# Subtest: ./benchmark/emit-context.js
# emit with context
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
## emit with context

    MiniSignals x 16,412,463 ops/sec ±6.37% (10 runs sampled)
    signal-lite x 15,785,116 ops/sec ±7.80% (10 runs sampled)
    EventEmitter3 x 11,985,872 ops/sec ±6.92% (10 runs sampled)
    event-signal x 5,443,681 ops/sec ±7.42% (10 runs sampled)
    Theoretical max x 3,836,274 ops/sec ±10.56% (10 runs sampled) *burn in*
    dripEmitter x 2,925,871 ops/sec ±7.57% (10 runs sampled)
    ReactiveProperty x 2,598,923 ops/sec ±6.90% (10 runs sampled)
    EventEmitter x 2,549,398 ops/sec ±8.11% (10 runs sampled)
    EventEmitter2 x 1,890,494 ops/sec ±5.77% (10 runs sampled)
    RXJS x 1,627,265 ops/sec ±8.31% (10 runs sampled)
    dripEmitterEnhanced x 1,314,439 ops/sec ±6.53% (10 runs sampled)
    signal-emitter x 525,310 ops/sec ±7.64% (10 runs sampled)
    JS-Signals x 464,027 ops/sec ±6.28% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..26
# tests 26
# pass  26

# ok

ok 4 - ./benchmark/emit-context.js # time=25350.032ms

# Subtest: ./benchmark/emit-many-listeners.js
# emit many listeners
ok 1 runs without error
ok 2 called N times
ok 3 runs without error
ok 4 called N times
ok 5 runs without error
ok 6 called N times
ok 7 runs without error
ok 8 called N times
ok 9 runs without error
ok 10 called N times
ok 11 runs without error
ok 12 called N times
ok 13 runs without error
ok 14 called N times
ok 15 runs without error
ok 16 called N times
ok 17 runs without error
ok 18 called N times
ok 19 runs without error
ok 20 called N times
ok 21 runs without error
ok 22 called N times
ok 23 runs without error
ok 24 called N times
ok 25 runs without error
ok 26 called N times
ok 27 runs without error
ok 28 called N times
## emit many listeners

    Theoretical max x 4,586,877 ops/sec ±10.20% (10 runs sampled) *burn in*
    ReactiveProperty x 3,666,244 ops/sec ±9.67% (10 runs sampled)
    MiniSignals x 3,664,581 ops/sec ±11.50% (10 runs sampled)
    signal-lite x 3,541,904 ops/sec ±7.94% (10 runs sampled)
    dripEmitter x 3,344,663 ops/sec ±11.61% (10 runs sampled)
    EventEmitter x 3,137,994 ops/sec ±4.84% (10 runs sampled)
    EventEmitter3 x 2,932,739 ops/sec ±4.86% (10 runs sampled)
    EventEmitter2 x 2,584,513 ops/sec ±4.42% (10 runs sampled)
    event-signal x 2,072,553 ops/sec ±27.85% (10 runs sampled)
    dripEmitterEnhanced x 1,451,393 ops/sec ±4.30% (10 runs sampled)
    RXJS x 1,303,187 ops/sec ±7.38% (10 runs sampled)
    signal-emitter x 421,172 ops/sec ±6.11% (10 runs sampled)
    JS-Signals x 324,026 ops/sec ±6.53% (10 runs sampled)
    minivents x 87,656 ops/sec ±9.23% (10 runs sampled)

*Fastest is __ReactiveProperty, MiniSignals, signal-lite, dripEmitter__*


1..28
# tests 28
# pass  28

# ok

ok 5 - ./benchmark/emit-many-listeners.js # time=27581.267ms

# Subtest: ./benchmark/emit-many-params.js
# emit many parameters
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
## emit many parameters

    MiniSignals x 15,209,960 ops/sec ±2.59% (10 runs sampled)
    Theoretical max x 14,378,447 ops/sec ±6.10% (10 runs sampled) *burn in*
    signal-lite x 13,234,631 ops/sec ±7.90% (10 runs sampled)
    EventEmitter3 x 2,353,010 ops/sec ±2.48% (10 runs sampled)
    EventEmitter x 2,040,733 ops/sec ±7.76% (10 runs sampled)
    EventEmitter2 x 1,893,496 ops/sec ±3.58% (10 runs sampled)
    dripEmitterEnhanced x 1,110,717 ops/sec ±6.53% (10 runs sampled)
    signal-emitter x 298,839 ops/sec ±5.37% (10 runs sampled)
    JS-Signals x 206,656 ops/sec ±4.55% (10 runs sampled)
    minivents x 128,418 ops/sec ±10.47% (10 runs sampled)

*Fastest is __MiniSignals__*


1..20
# tests 20
# pass  20

# ok

ok 6 - ./benchmark/emit-many-params.js # time=20377.733ms

# Subtest: ./benchmark/emit-objects.js
# emit objects
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
ok 27 runs without error
ok 28 called three times
## emit objects

    Theoretical max x 8,541,473 ops/sec ±8.51% (10 runs sampled) *burn in*
    MiniSignals x 5,630,132 ops/sec ±9.32% (10 runs sampled)
    signal-lite x 4,889,953 ops/sec ±5.32% (10 runs sampled)
    ReactiveProperty x 4,571,010 ops/sec ±5.21% (10 runs sampled)
    dripEmitter x 3,714,271 ops/sec ±6.21% (10 runs sampled)
    EventEmitter3 x 3,540,548 ops/sec ±6.27% (10 runs sampled)
    EventEmitter x 2,682,023 ops/sec ±5.53% (10 runs sampled)
    EventDispatcher x 2,557,180 ops/sec ±5.41% (10 runs sampled)
    event-signal x 1,516,131 ops/sec ±11.40% (10 runs sampled)
    EventEmitter2 x 1,294,013 ops/sec ±3.46% (10 runs sampled)
    RXJS x 1,188,528 ops/sec ±5.55% (10 runs sampled)
    dripEmitterEnhanced x 955,585 ops/sec ±5.62% (10 runs sampled)
    signal-emitter x 197,505 ops/sec ±10.07% (10 runs sampled)
    JS-Signals x 175,046 ops/sec ±8.23% (10 runs sampled)

*Fastest is __MiniSignals__*


1..28
# tests 28
# pass  28

# ok

ok 7 - ./benchmark/emit-objects.js # time=28276.67ms

# Subtest: ./benchmark/emit-one.js
# emit one parameter
ok 1 runs without error
ok 2 called once
ok 3 runs without error
ok 4 called once
ok 5 runs without error
ok 6 called once
ok 7 runs without error
ok 8 called once
ok 9 runs without error
ok 10 called once
ok 11 runs without error
ok 12 called once
ok 13 runs without error
ok 14 called once
ok 15 runs without error
ok 16 called once
ok 17 runs without error
ok 18 called once
ok 19 runs without error
ok 20 called once
ok 21 runs without error
ok 22 called once
ok 23 runs without error
ok 24 called once
ok 25 runs without error
ok 26 called once
ok 27 runs without error
ok 28 called once
ok 29 runs without error
ok 30 called once
ok 31 runs without error
ok 32 called once
ok 33 runs without error
ok 34 called once
ok 35 runs without error
ok 36 called once
## emit one parameter

    Theoretical max x 20,238,472 ops/sec ±6.04% (5 runs sampled) *burn in*
    MiniSignals x 16,328,169 ops/sec ±14.45% (5 runs sampled)
    signal-lite x 13,474,799 ops/sec ±5.58% (5 runs sampled)
    dripEmitter x 12,828,980 ops/sec ±5.15% (5 runs sampled)
    ReactiveProperty x 12,840,949 ops/sec ±16.51% (5 runs sampled)
    EventEmitter3 x 11,961,234 ops/sec ±16.34% (5 runs sampled)
    EventEmitter x 9,307,301 ops/sec ±12.71% (5 runs sampled)
    observ x 4,946,164 ops/sec ±4.30% (5 runs sampled)
    event-signal x 4,625,493 ops/sec ±7.54% (5 runs sampled)
    EventEmitter2 x 4,536,549 ops/sec ±12.02% (5 runs sampled)
    RXJS x 3,607,470 ops/sec ±13.36% (5 runs sampled)
    d3-dispatch x 3,119,194 ops/sec ±11.76% (5 runs sampled)
    dripEmitterEnhanced x 2,375,440 ops/sec ±13.64% (5 runs sampled)
    observable x 1,318,992 ops/sec ±15.95% (5 runs sampled)
    JS-Signals x 502,518 ops/sec ±21.07% (5 runs sampled)
    signal-emitter x 453,061 ops/sec ±10.93% (5 runs sampled)
    namespace-emitter x 437,337 ops/sec ±11.01% (5 runs sampled)
    minivents x 341,819 ops/sec ±19.73% (5 runs sampled)

*Fastest is __MiniSignals__*


1..36
# tests 36
# pass  36

# ok

ok 8 - ./benchmark/emit-one.js # time=21525.564ms

# Subtest: ./benchmark/emit.js
# emit
ok 1 runs without error
ok 2 called four times
ok 3 runs without error
ok 4 called four times
ok 5 runs without error
ok 6 called four times
ok 7 runs without error
ok 8 called four times
ok 9 runs without error
ok 10 called four times
ok 11 runs without error
ok 12 called four times
ok 13 runs without error
ok 14 called four times
ok 15 runs without error
ok 16 called four times
ok 17 runs without error
ok 18 called four times
## emit

    Theoretical max x 9,521,402 ops/sec ±9.21% (10 runs sampled) *burn in*
    MiniSignals x 4,963,399 ops/sec ±7.46% (10 runs sampled)
    signal-lite x 4,203,106 ops/sec ±5.45% (10 runs sampled)
    EventEmitter x 2,107,712 ops/sec ±6.20% (10 runs sampled)
    EventEmitter3 x 2,027,240 ops/sec ±4.31% (10 runs sampled)
    EventEmitter2 x 877,175 ops/sec ±4.79% (10 runs sampled)
    dripEmitterEnhanced x 653,588 ops/sec ±4.88% (10 runs sampled)
    signal-emitter x 125,109 ops/sec ±8.80% (10 runs sampled)
    JS-Signals x 108,175 ops/sec ±17.31% (10 runs sampled)

*Fastest is __MiniSignals__*


1..18
# tests 18
# pass  18

# ok

ok 9 - ./benchmark/emit.js # time=19023.759ms

# Subtest: ./benchmark/init.js
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

    Theoretical max x 49,624,526 ops/sec ±6.93% (10 runs sampled) *burn in*
    DripEmitter x 46,925,675 ops/sec ±4.94% (10 runs sampled)
    EventEmitter3 x 47,344,294 ops/sec ±5.96% (10 runs sampled)
    EventDispatcher x 41,186,316 ops/sec ±4.23% (10 runs sampled)
    EventEmitter2 x 34,046,116 ops/sec ±3.41% (10 runs sampled)
    MiniSignals x 29,300,593 ops/sec ±6.07% (10 runs sampled)
    EventEmitter x 23,181,404 ops/sec ±11.15% (10 runs sampled)
    DripEmitterEnhanced x 17,663,200 ops/sec ±7.35% (10 runs sampled)
    JS-Signals x 1,788,462 ops/sec ±11.19% (10 runs sampled)
    ReactiveProperty x 1,118,180 ops/sec ±16.43% (10 runs sampled)

*Fastest is __DripEmitter, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

ok 10 - ./benchmark/init.js # time=21182.057ms

1..10
# time=232259.91ms
