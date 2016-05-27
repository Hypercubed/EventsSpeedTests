
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

    dripEmitter x 21,742,347 ops/sec ±3.80% (10 runs sampled)
    MiniSignals x 12,056,429 ops/sec ±3.80% (10 runs sampled)
    EventDispatcher x 4,142,421 ops/sec ±2.67% (10 runs sampled)
    ReactiveProperty x 3,538,720 ops/sec ±21.28% (10 runs sampled)
    EventEmitter3 x 1,445,666 ops/sec ±5.04% (10 runs sampled)
    EventEmitter x 1,097,045 ops/sec ±5.80% (10 runs sampled)
    EventEmitter2 x 809,545 ops/sec ±15.42% (10 runs sampled)
    JS-Signals x 554,657 ops/sec ±7.38% (10 runs sampled)
    dripEmitterEnhanced x 444,619 ops/sec ±6.57% (10 runs sampled)

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

    Theoretical max x 9,461,895 ops/sec ±18.93% (10 runs sampled) *burn in*
    MiniSignals x 5,788,198 ops/sec ±4.34% (10 runs sampled)
    signal-lite x 5,273,586 ops/sec ±5.22% (10 runs sampled)
    dripEmitter x 4,353,419 ops/sec ±3.54% (10 runs sampled)
    ReactiveProperty x 4,016,269 ops/sec ±4.13% (10 runs sampled)
    EventEmitter3 x 3,819,444 ops/sec ±5.52% (10 runs sampled)
    event-signal x 1,634,383 ops/sec ±3.19% (10 runs sampled)
    EventEmitter2 x 1,413,419 ops/sec ±4.73% (10 runs sampled)
    RXJS x 1,134,535 ops/sec ±4.08% (10 runs sampled)
    dripEmitterEnhanced x 530,083 ops/sec ±5.36% (10 runs sampled)
    signal-emitter x 198,507 ops/sec ±6.10% (10 runs sampled)
    EventEmitter x 153,116 ops/sec ±5.34% (10 runs sampled)
    JS-Signals x 147,658 ops/sec ±3.69% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 27,208,059 ops/sec ±3.25% (10 runs sampled) *burn in*
    ReactiveProperty x 14,048,106 ops/sec ±4.34% (10 runs sampled)
    dripEmitter x 11,663,345 ops/sec ±2.66% (10 runs sampled)
    EventEmitter3 x 11,052,514 ops/sec ±3.67% (10 runs sampled)
    MiniSignals x 6,310,248 ops/sec ±6.09% (10 runs sampled)
    signal-lite x 4,914,551 ops/sec ±3.64% (10 runs sampled)
    event-signal x 4,761,584 ops/sec ±5.60% (10 runs sampled)
    EventEmitter2 x 4,140,879 ops/sec ±2.99% (10 runs sampled)
    RXJS x 3,503,882 ops/sec ±6.13% (10 runs sampled)
    dripEmitterEnhanced x 1,679,114 ops/sec ±3.94% (10 runs sampled)
    signal-emitter x 610,379 ops/sec ±5.11% (10 runs sampled)
    EventEmitter x 483,696 ops/sec ±5.99% (10 runs sampled)
    JS-Signals x 417,681 ops/sec ±7.39% (10 runs sampled)

*Fastest is __ReactiveProperty__*


1..26
# tests 26
# pass  26

# ok


TAP version 13
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

    Theoretical max x 23,680,124 ops/sec ±30.83% (10 runs sampled) *burn in*
    MiniSignals x 16,059,039 ops/sec ±3.42% (10 runs sampled)
    signal-lite x 15,773,992 ops/sec ±2.66% (10 runs sampled)
    ReactiveProperty x 13,998,239 ops/sec ±4.70% (10 runs sampled)
    EventEmitter3 x 11,888,883 ops/sec ±4.45% (10 runs sampled)
    dripEmitter x 11,729,422 ops/sec ±7.00% (10 runs sampled)
    event-signal x 4,828,676 ops/sec ±3.95% (10 runs sampled)
    EventEmitter2 x 4,039,837 ops/sec ±6.08% (10 runs sampled)
    RXJS x 3,439,699 ops/sec ±3.77% (10 runs sampled)
    dripEmitterEnhanced x 1,555,518 ops/sec ±5.58% (10 runs sampled)
    signal-emitter x 595,534 ops/sec ±4.48% (10 runs sampled)
    EventEmitter x 471,065 ops/sec ±4.89% (10 runs sampled)
    JS-Signals x 437,115 ops/sec ±7.30% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..26
# tests 26
# pass  26

# ok


TAP version 13
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

    Theoretical max x 4,191,617 ops/sec ±4.07% (10 runs sampled) *burn in*
    MiniSignals x 3,591,666 ops/sec ±3.71% (10 runs sampled)
    signal-lite x 3,412,091 ops/sec ±4.51% (10 runs sampled)
    dripEmitter x 3,267,402 ops/sec ±2.71% (10 runs sampled)
    EventEmitter3 x 3,132,848 ops/sec ±4.92% (10 runs sampled)
    ReactiveProperty x 2,527,624 ops/sec ±27.84% (10 runs sampled)
    event-signal x 2,027,129 ops/sec ±6.88% (10 runs sampled)
    EventEmitter2 x 1,915,723 ops/sec ±3.39% (10 runs sampled)
    RXJS x 1,220,214 ops/sec ±4.58% (10 runs sampled)
    dripEmitterEnhanced x 1,113,354 ops/sec ±6.04% (10 runs sampled)
    signal-emitter x 509,058 ops/sec ±3.26% (10 runs sampled)
    EventEmitter x 241,465 ops/sec ±4.04% (10 runs sampled)
    JS-Signals x 221,550 ops/sec ±4.55% (10 runs sampled)
    minivents x 86,270 ops/sec ±4.99% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..28
# tests 28
# pass  28

# ok


TAP version 13
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

    Theoretical max x 14,894,927 ops/sec ±3.78% (10 runs sampled) *burn in*
    signal-lite x 11,875,508 ops/sec ±5.92% (10 runs sampled)
    MiniSignals x 11,914,519 ops/sec ±7.61% (10 runs sampled)
    EventEmitter3 x 605,717 ops/sec ±3.90% (10 runs sampled)
    EventEmitter2 x 554,664 ops/sec ±4.63% (10 runs sampled)
    dripEmitterEnhanced x 444,538 ops/sec ±5.88% (10 runs sampled)
    signal-emitter x 307,451 ops/sec ±3.12% (10 runs sampled)
    JS-Signals x 140,096 ops/sec ±2.96% (10 runs sampled)
    EventEmitter x 142,528 ops/sec ±6.45% (10 runs sampled)
    minivents x 88,362 ops/sec ±4.12% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


1..20
# tests 20
# pass  20

# ok


TAP version 13
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

    Theoretical max x 9,329,667 ops/sec ±8.31% (10 runs sampled) *burn in*
    MiniSignals x 5,279,613 ops/sec ±4.01% (10 runs sampled)
    signal-lite x 4,814,847 ops/sec ±2.89% (10 runs sampled)
    ReactiveProperty x 4,366,877 ops/sec ±2.42% (10 runs sampled)
    dripEmitter x 4,113,846 ops/sec ±3.84% (10 runs sampled)
    EventEmitter3 x 3,742,267 ops/sec ±6.55% (10 runs sampled)
    EventDispatcher x 2,003,276 ops/sec ±3.57% (10 runs sampled)
    event-signal x 1,574,175 ops/sec ±3.40% (10 runs sampled)
    EventEmitter2 x 1,311,035 ops/sec ±2.29% (10 runs sampled)
    RXJS x 1,092,955 ops/sec ±3.64% (10 runs sampled)
    dripEmitterEnhanced x 508,017 ops/sec ±8.44% (10 runs sampled)
    signal-emitter x 199,983 ops/sec ±4.52% (10 runs sampled)
    EventEmitter x 163,000 ops/sec ±4.71% (10 runs sampled)
    JS-Signals x 152,424 ops/sec ±3.10% (10 runs sampled)

*Fastest is __MiniSignals__*


1..28
# tests 28
# pass  28

# ok


TAP version 13
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

    Theoretical max x 19,929,260 ops/sec ±13.47% (5 runs sampled) *burn in*
    MiniSignals x 14,940,415 ops/sec ±5.68% (5 runs sampled)
    signal-lite x 14,630,185 ops/sec ±7.36% (5 runs sampled)
    EventEmitter3 x 11,411,865 ops/sec ±4.53% (5 runs sampled)
    dripEmitter x 11,955,302 ops/sec ±10.30% (5 runs sampled)
    ReactiveProperty x 11,174,895 ops/sec ±4.09% (5 runs sampled)
    observ x 4,630,927 ops/sec ±4.66% (5 runs sampled)
    event-signal x 4,376,399 ops/sec ±9.07% (5 runs sampled)
    EventEmitter2 x 4,095,309 ops/sec ±4.12% (5 runs sampled)
    RXJS x 3,217,688 ops/sec ±9.06% (5 runs sampled)
    d3-dispatch x 1,590,957 ops/sec ±3.38% (5 runs sampled)
    dripEmitterEnhanced x 1,591,205 ops/sec ±9.17% (5 runs sampled)
    signal-emitter x 569,207 ops/sec ±9.42% (5 runs sampled)
    EventEmitter x 475,333 ops/sec ±10.51% (5 runs sampled)
    observable x 422,633 ops/sec ±6.30% (5 runs sampled)
    namespace-emitter x 408,775 ops/sec ±8.28% (5 runs sampled)
    JS-Signals x 392,297 ops/sec ±7.60% (5 runs sampled)
    minivents x 370,469 ops/sec ±5.62% (5 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


1..36
# tests 36
# pass  36

# ok


TAP version 13
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

    Theoretical max x 8,725,379 ops/sec ±4.61% (10 runs sampled) *burn in*
    MiniSignals x 4,541,210 ops/sec ±5.17% (10 runs sampled)
    signal-lite x 3,947,219 ops/sec ±20.81% (10 runs sampled)
    EventEmitter3 x 998,977 ops/sec ±2.68% (10 runs sampled)
    EventEmitter2 x 580,976 ops/sec ±4.00% (10 runs sampled)
    dripEmitterEnhanced x 304,133 ops/sec ±6.08% (10 runs sampled)
    signal-emitter x 135,637 ops/sec ±6.78% (10 runs sampled)
    JS-Signals x 117,111 ops/sec ±4.59% (10 runs sampled)
    EventEmitter x 117,889 ops/sec ±6.47% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    EventEmitter3 x 40,876,969 ops/sec ±4.77% (10 runs sampled)
    EventDispatcher x 41,229,539 ops/sec ±5.68% (10 runs sampled)
    DripEmitter x 40,405,886 ops/sec ±4.38% (10 runs sampled)
    MiniSignals x 28,935,185 ops/sec ±4.13% (10 runs sampled)
    EventEmitter x 27,643,505 ops/sec ±6.61% (10 runs sampled)
    EventEmitter2 x 23,716,140 ops/sec ±6.57% (10 runs sampled)
    Theoretical max x 31,816,442 ops/sec ±52.74% (10 runs sampled) *burn in*
    DripEmitterEnhanced x 16,543,165 ops/sec ±6.12% (10 runs sampled)
    JS-Signals x 1,613,901 ops/sec ±9.99% (10 runs sampled)
    ReactiveProperty x 967,486 ops/sec ±21.46% (10 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher, DripEmitter__*


1..20
# tests 20
# pass  20

# ok

