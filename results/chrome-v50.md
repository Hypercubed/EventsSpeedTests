# Chrome 50.0.2661.102 on OS X 10.11.2

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

    dripEmitter x 28,029,770 ops/sec ±5.67% (10 runs sampled)
    MiniSignals x 15,898,305 ops/sec ±3.59% (10 runs sampled)
    EventDispatcher x 5,349,106 ops/sec ±5.10% (10 runs sampled)
    ReactiveProperty x 4,992,734 ops/sec ±3.31% (10 runs sampled)
    EventEmitter3 x 1,905,450 ops/sec ±5.70% (10 runs sampled)
    EventEmitter x 1,460,970 ops/sec ±8.17% (10 runs sampled)
    EventEmitter2 x 1,112,004 ops/sec ±13.21% (10 runs sampled)
    JS-Signals x 775,199 ops/sec ±4.12% (10 runs sampled)
    dripEmitterEnhanced x 643,838 ops/sec ±3.12% (10 runs sampled)

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

    Theoretical max x 11,142,783 ops/sec ±23.33% (10 runs sampled) *burn in*
    MiniSignals x 7,163,527 ops/sec ±3.56% (10 runs sampled)
    signal-lite x 6,423,595 ops/sec ±2.78% (10 runs sampled)
    dripEmitter x 5,476,227 ops/sec ±4.23% (10 runs sampled)
    ReactiveProperty x 5,331,197 ops/sec ±2.75% (10 runs sampled)
    EventEmitter3 x 4,907,081 ops/sec ±5.25% (10 runs sampled)
    event-signal x 1,893,246 ops/sec ±6.66% (10 runs sampled)
    EventEmitter2 x 1,586,382 ops/sec ±8.84% (10 runs sampled)
    RXJS x 1,382,320 ops/sec ±6.60% (10 runs sampled)
    dripEmitterEnhanced x 608,056 ops/sec ±6.18% (10 runs sampled)
    signal-emitter x 246,561 ops/sec ±2.41% (10 runs sampled)
    EventEmitter x 201,628 ops/sec ±6.43% (10 runs sampled)
    JS-Signals x 181,395 ops/sec ±4.91% (10 runs sampled)

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

    Theoretical max x 31,841,429 ops/sec ±1.97% (10 runs sampled) *burn in*
    ReactiveProperty x 15,015,507 ops/sec ±2.04% (10 runs sampled)
    dripEmitter x 13,055,657 ops/sec ±5.75% (10 runs sampled)
    EventEmitter3 x 11,141,068 ops/sec ±5.23% (10 runs sampled)
    MiniSignals x 7,305,486 ops/sec ±3.11% (10 runs sampled)
    signal-lite x 5,385,110 ops/sec ±5.51% (10 runs sampled)
    event-signal x 5,263,218 ops/sec ±4.93% (10 runs sampled)
    EventEmitter2 x 4,523,998 ops/sec ±7.52% (10 runs sampled)
    RXJS x 4,040,278 ops/sec ±6.07% (10 runs sampled)
    dripEmitterEnhanced x 1,424,066 ops/sec ±3.87% (10 runs sampled)
    signal-emitter x 709,990 ops/sec ±4.57% (10 runs sampled)
    EventEmitter x 576,189 ops/sec ±7.11% (10 runs sampled)
    JS-Signals x 491,867 ops/sec ±16.72% (10 runs sampled)

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

    Theoretical max x 30,199,359 ops/sec ±7.42% (10 runs sampled) *burn in*
    MiniSignals x 18,978,193 ops/sec ±4.45% (10 runs sampled)
    signal-lite x 17,587,035 ops/sec ±5.65% (10 runs sampled)
    ReactiveProperty x 15,760,570 ops/sec ±5.87% (10 runs sampled)
    EventEmitter3 x 14,103,745 ops/sec ±4.64% (10 runs sampled)
    dripEmitter x 13,403,953 ops/sec ±5.24% (10 runs sampled)
    event-signal x 5,580,000 ops/sec ±4.74% (10 runs sampled)
    EventEmitter2 x 4,327,004 ops/sec ±7.06% (10 runs sampled)
    RXJS x 3,639,394 ops/sec ±16.01% (10 runs sampled)
    dripEmitterEnhanced x 1,996,610 ops/sec ±4.36% (10 runs sampled)
    signal-emitter x 744,698 ops/sec ±3.59% (10 runs sampled)
    JS-Signals x 544,210 ops/sec ±6.55% (10 runs sampled)
    EventEmitter x 522,431 ops/sec ±11.47% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    MiniSignals x 4,706,408 ops/sec ±7.49% (10 runs sampled)
    Theoretical max x 4,662,892 ops/sec ±9.81% (10 runs sampled) *burn in*
    dripEmitter x 4,420,628 ops/sec ±7.16% (10 runs sampled)
    signal-lite x 4,303,547 ops/sec ±8.22% (10 runs sampled)
    EventEmitter3 x 4,100,735 ops/sec ±3.61% (10 runs sampled)
    ReactiveProperty x 3,435,312 ops/sec ±14.55% (10 runs sampled)
    event-signal x 2,770,617 ops/sec ±2.83% (10 runs sampled)
    EventEmitter2 x 2,391,380 ops/sec ±13.80% (10 runs sampled)
    RXJS x 1,483,410 ops/sec ±2.65% (10 runs sampled)
    dripEmitterEnhanced x 1,428,207 ops/sec ±5.50% (10 runs sampled)
    signal-emitter x 622,093 ops/sec ±11.37% (10 runs sampled)
    EventEmitter x 315,809 ops/sec ±3.69% (10 runs sampled)
    JS-Signals x 279,043 ops/sec ±4.52% (10 runs sampled)
    minivents x 429 ops/sec ±223.92% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    MiniSignals x 15,154,222 ops/sec ±2.30% (10 runs sampled)
    signal-lite x 14,156,881 ops/sec ±3.04% (10 runs sampled)
    Theoretical max x 14,013,288 ops/sec ±28.62% (10 runs sampled) *burn in*
    EventEmitter3 x 756,801 ops/sec ±4.31% (10 runs sampled)
    EventEmitter2 x 690,753 ops/sec ±6.12% (10 runs sampled)
    dripEmitterEnhanced x 555,857 ops/sec ±6.23% (10 runs sampled)
    signal-emitter x 363,143 ops/sec ±3.32% (10 runs sampled)
    EventEmitter x 177,842 ops/sec ±3.35% (10 runs sampled)
    JS-Signals x 172,644 ops/sec ±3.77% (10 runs sampled)
    minivents x 112,284 ops/sec ±2.34% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 10,004,813 ops/sec ±23.01% (10 runs sampled) *burn in*
    MiniSignals x 6,495,153 ops/sec ±5.59% (10 runs sampled)
    signal-lite x 5,608,609 ops/sec ±6.85% (10 runs sampled)
    dripEmitter x 5,091,357 ops/sec ±6.69% (10 runs sampled)
    ReactiveProperty x 5,136,411 ops/sec ±8.99% (10 runs sampled)
    EventEmitter3 x 4,367,594 ops/sec ±8.63% (10 runs sampled)
    EventDispatcher x 2,359,885 ops/sec ±10.83% (10 runs sampled)
    event-signal x 1,760,624 ops/sec ±5.92% (10 runs sampled)
    RXJS x 1,364,226 ops/sec ±3.16% (10 runs sampled)
    EventEmitter2 x 891,326 ops/sec ±7.55% (10 runs sampled)
    dripEmitterEnhanced x 633,158 ops/sec ±8.24% (10 runs sampled)
    signal-emitter x 235,518 ops/sec ±4.84% (10 runs sampled)
    JS-Signals x 181,695 ops/sec ±5.69% (10 runs sampled)
    EventEmitter x 186,658 ops/sec ±18.58% (10 runs sampled)

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

    Theoretical max x 23,516,045 ops/sec ±15.84% (5 runs sampled) *burn in*
    MiniSignals x 16,255,142 ops/sec ±13.47% (5 runs sampled)
    dripEmitter x 13,772,523 ops/sec ±15.42% (5 runs sampled)
    ReactiveProperty x 12,360,469 ops/sec ±10.73% (5 runs sampled)
    signal-lite x 14,575,560 ops/sec ±32.99% (5 runs sampled)
    EventEmitter3 x 12,439,900 ops/sec ±30.81% (5 runs sampled)
    event-signal x 5,079,262 ops/sec ±12.80% (5 runs sampled)
    EventEmitter2 x 4,404,688 ops/sec ±16.92% (5 runs sampled)
    observ x 4,326,926 ops/sec ±33.09% (5 runs sampled)
    RXJS x 3,508,029 ops/sec ±10.41% (5 runs sampled)
    d3-dispatch x 1,816,830 ops/sec ±13.80% (5 runs sampled)
    dripEmitterEnhanced x 1,834,225 ops/sec ±16.24% (5 runs sampled)
    signal-emitter x 667,039 ops/sec ±11.10% (5 runs sampled)
    EventEmitter x 583,131 ops/sec ±18.64% (5 runs sampled)
    JS-Signals x 504,115 ops/sec ±9.18% (5 runs sampled)
    namespace-emitter x 488,650 ops/sec ±14.63% (5 runs sampled)
    observable x 484,459 ops/sec ±15.71% (5 runs sampled)
    minivents x 435,258 ops/sec ±9.93% (5 runs sampled)

*Fastest is __MiniSignals, dripEmitter, signal-lite__*


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

    Theoretical max x 8,494,433 ops/sec ±14.02% (10 runs sampled) *burn in*
    signal-lite x 4,372,309 ops/sec ±10.80% (10 runs sampled)
    MiniSignals x 4,763,952 ops/sec ±21.51% (10 runs sampled)
    EventEmitter3 x 1,209,079 ops/sec ±4.43% (10 runs sampled)
    EventEmitter2 x 655,756 ops/sec ±15.18% (10 runs sampled)
    dripEmitterEnhanced x 390,768 ops/sec ±4.15% (10 runs sampled)
    JS-Signals x 137,578 ops/sec ±6.20% (10 runs sampled)
    EventEmitter x 132,621 ops/sec ±6.30% (10 runs sampled)
    signal-emitter x 126,888 ops/sec ±21.78% (10 runs sampled)

*Fastest is __signal-lite__*


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

    DripEmitter x 46,771,631 ops/sec ±4.95% (10 runs sampled)
    EventDispatcher x 44,857,728 ops/sec ±7.26% (10 runs sampled)
    EventEmitter3 x 43,218,784 ops/sec ±5.68% (10 runs sampled)
    MiniSignals x 32,430,408 ops/sec ±11.37% (10 runs sampled)
    EventEmitter x 29,858,217 ops/sec ±8.96% (10 runs sampled)
    EventEmitter2 x 28,534,592 ops/sec ±5.67% (10 runs sampled)
    Theoretical max x 26,082,001 ops/sec ±54.85% (10 runs sampled) *burn in*
    DripEmitterEnhanced x 16,354,878 ops/sec ±15.29% (10 runs sampled)
    JS-Signals x 2,044,313 ops/sec ±5.48% (10 runs sampled)
    ReactiveProperty x 1,143,186 ops/sec ±15.48% (10 runs sampled)

*Fastest is __DripEmitter, EventDispatcher, EventEmitter3__*


1..20
# tests 20
# pass  20

# ok
