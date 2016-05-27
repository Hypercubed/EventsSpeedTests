# Node.js 6.2.0 on Darwin 64-bit

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

    dripEmitter x 21,285,780 ops/sec ±7.20% (10 runs sampled)
    MiniSignals x 12,314,626 ops/sec ±6.82% (10 runs sampled)
    ReactiveProperty x 3,788,123 ops/sec ±7.76% (10 runs sampled)
    EventEmitter x 3,552,180 ops/sec ±21.58% (10 runs sampled)
    EventDispatcher x 3,457,934 ops/sec ±29.64% (10 runs sampled)
    EventEmitter3 x 1,619,761 ops/sec ±6.15% (10 runs sampled)
    EventEmitter2 x 626,248 ops/sec ±3.71% (10 runs sampled)
    JS-Signals x 585,260 ops/sec ±6.12% (10 runs sampled)
    dripEmitterEnhanced x 537,308 ops/sec ±9.34% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

ok 1 - ./benchmark/add-remove.js # time=17939.141ms

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

    Theoretical max x 10,374,726 ops/sec ±9.13% (10 runs sampled) *burn in*
    MiniSignals x 5,301,388 ops/sec ±2.36% (10 runs sampled)
    signal-lite x 5,153,995 ops/sec ±12.09% (10 runs sampled)
    dripEmitter x 4,094,445 ops/sec ±3.56% (10 runs sampled)
    ReactiveProperty x 4,022,399 ops/sec ±7.05% (10 runs sampled)
    EventEmitter3 x 3,989,850 ops/sec ±10.76% (10 runs sampled)
    EventEmitter x 1,887,049 ops/sec ±5.41% (10 runs sampled)
    event-signal x 1,495,965 ops/sec ±4.22% (10 runs sampled)
    EventEmitter2 x 1,395,729 ops/sec ±8.99% (10 runs sampled)
    RXJS x 934,551 ops/sec ±5.61% (10 runs sampled)
    dripEmitterEnhanced x 576,346 ops/sec ±5.69% (10 runs sampled)
    JS-Signals x 198,019 ops/sec ±5.17% (10 runs sampled)
    signal-emitter x 186,605 ops/sec ±17.46% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..26
# tests 26
# pass  26

# ok

ok 2 - ./benchmark/emit-arrays.js # time=25824.817ms

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

    Theoretical max x 26,683,093 ops/sec ±7.17% (10 runs sampled) *burn in*
    ReactiveProperty x 14,057,890 ops/sec ±3.59% (10 runs sampled)
    EventEmitter3 x 13,325,129 ops/sec ±4.96% (10 runs sampled)
    dripEmitter x 12,022,819 ops/sec ±3.46% (10 runs sampled)
    EventEmitter x 7,936,484 ops/sec ±12.99% (10 runs sampled)
    MiniSignals x 6,205,978 ops/sec ±4.56% (10 runs sampled)
    signal-lite x 4,934,607 ops/sec ±12.91% (10 runs sampled)
    event-signal x 4,511,574 ops/sec ±6.85% (10 runs sampled)
    EventEmitter2 x 3,879,249 ops/sec ±9.51% (10 runs sampled)
    RXJS x 3,655,801 ops/sec ±9.29% (10 runs sampled)
    dripEmitterEnhanced x 1,803,922 ops/sec ±4.78% (10 runs sampled)
    signal-emitter x 619,546 ops/sec ±7.04% (10 runs sampled)
    JS-Signals x 427,508 ops/sec ±7.14% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

# ok

ok 3 - ./benchmark/emit-bound.js # time=25121.047ms

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

    Theoretical max x 25,941,675 ops/sec ±4.24% (10 runs sampled) *burn in*
    MiniSignals x 17,566,891 ops/sec ±3.28% (10 runs sampled)
    signal-lite x 15,750,435 ops/sec ±4.73% (10 runs sampled)
    ReactiveProperty x 13,261,703 ops/sec ±6.02% (10 runs sampled)
    EventEmitter3 x 11,848,011 ops/sec ±5.03% (10 runs sampled)
    dripEmitter x 11,591,760 ops/sec ±3.61% (10 runs sampled)
    EventEmitter x 7,467,778 ops/sec ±9.27% (10 runs sampled)
    EventEmitter2 x 4,384,568 ops/sec ±10.85% (10 runs sampled)
    event-signal x 4,565,132 ops/sec ±20.67% (10 runs sampled)
    RXJS x 3,356,150 ops/sec ±3.20% (10 runs sampled)
    dripEmitterEnhanced x 2,004,284 ops/sec ±6.08% (10 runs sampled)
    JS-Signals x 538,923 ops/sec ±7.13% (10 runs sampled)
    signal-emitter x 512,524 ops/sec ±7.30% (10 runs sampled)

*Fastest is __MiniSignals__*


1..26
# tests 26
# pass  26

# ok

ok 4 - ./benchmark/emit-context.js # time=24909.951ms

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

    MiniSignals x 4,285,570 ops/sec ±14.60% (10 runs sampled)
    Theoretical max x 3,954,406 ops/sec ±8.77% (10 runs sampled) *burn in*
    signal-lite x 3,493,163 ops/sec ±13.24% (10 runs sampled)
    EventEmitter3 x 3,307,952 ops/sec ±9.41% (10 runs sampled)
    ReactiveProperty x 3,194,349 ops/sec ±14.76% (10 runs sampled)
    dripEmitter x 3,127,437 ops/sec ±17.68% (10 runs sampled)
    EventEmitter x 2,807,896 ops/sec ±8.53% (10 runs sampled)
    event-signal x 2,160,611 ops/sec ±5.41% (10 runs sampled)
    EventEmitter2 x 1,951,842 ops/sec ±4.90% (10 runs sampled)
    RXJS x 1,151,392 ops/sec ±4.14% (10 runs sampled)
    dripEmitterEnhanced x 1,064,173 ops/sec ±8.23% (10 runs sampled)
    signal-emitter x 483,745 ops/sec ±8.13% (10 runs sampled)
    JS-Signals x 230,887 ops/sec ±7.43% (10 runs sampled)
    minivents x 95,374 ops/sec ±5.39% (10 runs sampled)

*Fastest is __MiniSignals__*


1..28
# tests 28
# pass  28

# ok

ok 5 - ./benchmark/emit-many-listeners.js # time=26804.047ms

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

    Theoretical max x 15,145,071 ops/sec ±6.34% (10 runs sampled) *burn in*
    MiniSignals x 12,503,900 ops/sec ±6.65% (10 runs sampled)
    signal-lite x 10,885,284 ops/sec ±9.20% (10 runs sampled)
    EventEmitter3 x 658,220 ops/sec ±8.16% (10 runs sampled)
    EventEmitter x 621,825 ops/sec ±6.16% (10 runs sampled)
    EventEmitter2 x 587,513 ops/sec ±7.27% (10 runs sampled)
    dripEmitterEnhanced x 489,804 ops/sec ±7.72% (10 runs sampled)
    signal-emitter x 302,122 ops/sec ±11.30% (10 runs sampled)
    JS-Signals x 156,512 ops/sec ±7.73% (10 runs sampled)
    minivents x 113,347 ops/sec ±3.73% (10 runs sampled)

*Fastest is __MiniSignals__*


1..20
# tests 20
# pass  20

# ok

ok 6 - ./benchmark/emit-many-params.js # time=20119.969ms

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

    Theoretical max x 8,060,628 ops/sec ±5.23% (10 runs sampled) *burn in*
    signal-lite x 5,688,622 ops/sec ±11.28% (10 runs sampled)
    MiniSignals x 5,015,088 ops/sec ±8.06% (10 runs sampled)
    ReactiveProperty x 4,815,788 ops/sec ±10.98% (10 runs sampled)
    dripEmitter x 4,192,518 ops/sec ±8.24% (10 runs sampled)
    EventEmitter3 x 3,499,959 ops/sec ±5.13% (10 runs sampled)
    EventEmitter x 2,540,863 ops/sec ±4.82% (10 runs sampled)
    EventDispatcher x 1,982,201 ops/sec ±7.49% (10 runs sampled)
    event-signal x 1,813,317 ops/sec ±5.19% (10 runs sampled)
    EventEmitter2 x 1,227,940 ops/sec ±3.89% (10 runs sampled)
    RXJS x 1,095,666 ops/sec ±3.83% (10 runs sampled)
    dripEmitterEnhanced x 582,848 ops/sec ±4.83% (10 runs sampled)
    signal-emitter x 184,400 ops/sec ±11.33% (10 runs sampled)
    JS-Signals x 176,820 ops/sec ±7.02% (10 runs sampled)

*Fastest is __signal-lite__*


1..28
# tests 28
# pass  28

# ok

ok 7 - ./benchmark/emit-objects.js # time=27128.963ms

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

    Theoretical max x 20,485,671 ops/sec ±10.22% (5 runs sampled) *burn in*
    MiniSignals x 17,115,567 ops/sec ±12.13% (5 runs sampled)
    signal-lite x 13,215,421 ops/sec ±2.98% (5 runs sampled)
    ReactiveProperty x 13,731,882 ops/sec ±9.86% (5 runs sampled)
    EventEmitter3 x 10,872,274 ops/sec ±9.16% (5 runs sampled)
    dripEmitter x 11,461,101 ops/sec ±25.86% (5 runs sampled)
    EventEmitter x 8,726,367 ops/sec ±5.69% (5 runs sampled)
    observ x 5,169,430 ops/sec ±10.00% (5 runs sampled)
    EventEmitter2 x 4,014,469 ops/sec ±11.68% (5 runs sampled)
    event-signal x 3,942,292 ops/sec ±13.08% (5 runs sampled)
    RXJS x 2,850,413 ops/sec ±21.19% (5 runs sampled)
    d3-dispatch x 1,634,849 ops/sec ±10.86% (5 runs sampled)
    dripEmitterEnhanced x 1,515,450 ops/sec ±13.01% (5 runs sampled)
    JS-Signals x 562,438 ops/sec ±5.01% (5 runs sampled)
    signal-emitter x 561,429 ops/sec ±8.84% (5 runs sampled)
    observable x 495,337 ops/sec ±4.89% (5 runs sampled)
    minivents x 439,421 ops/sec ±12.35% (5 runs sampled)
    namespace-emitter x 420,949 ops/sec ±13.49% (5 runs sampled)

*Fastest is __MiniSignals__*


1..36
# tests 36
# pass  36

# ok

ok 8 - ./benchmark/emit-one.js # time=20682.321ms

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

    Theoretical max x 7,859,234 ops/sec ±7.62% (10 runs sampled) *burn in*
    MiniSignals x 4,122,480 ops/sec ±6.87% (10 runs sampled)
    signal-lite x 3,994,943 ops/sec ±4.28% (10 runs sampled)
    EventEmitter x 2,260,530 ops/sec ±7.76% (10 runs sampled)
    EventEmitter3 x 1,067,619 ops/sec ±5.95% (10 runs sampled)
    EventEmitter2 x 570,196 ops/sec ±5.80% (10 runs sampled)
    dripEmitterEnhanced x 320,714 ops/sec ±6.06% (10 runs sampled)
    signal-emitter x 137,860 ops/sec ±5.35% (10 runs sampled)
    JS-Signals x 126,968 ops/sec ±4.09% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..18
# tests 18
# pass  18

# ok

ok 9 - ./benchmark/emit.js # time=18968.157ms

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

    EventEmitter3 x 39,720,544 ops/sec ±4.58% (10 runs sampled)
    EventDispatcher x 38,792,486 ops/sec ±9.89% (10 runs sampled)
    DripEmitter x 36,148,166 ops/sec ±5.77% (10 runs sampled)
    MiniSignals x 30,196,022 ops/sec ±6.95% (10 runs sampled)
    EventEmitter2 x 27,824,297 ops/sec ±5.30% (10 runs sampled)
    Theoretical max x 34,983,622 ops/sec ±46.80% (10 runs sampled) *burn in*
    EventEmitter x 18,692,524 ops/sec ±4.84% (10 runs sampled)
    DripEmitterEnhanced x 16,376,635 ops/sec ±5.80% (10 runs sampled)
    JS-Signals x 1,391,892 ops/sec ±47.95% (10 runs sampled)
    ReactiveProperty x 918,728 ops/sec ±23.32% (10 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher__*


1..20
# tests 20
# pass  20

# ok

ok 10 - ./benchmark/init.js # time=21868.119ms

1..10
# time=229388.613ms
