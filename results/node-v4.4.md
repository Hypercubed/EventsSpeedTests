# Node.js 4.4.4 on Darwin 64-bit

ok 1 (unnamed assert)

1..1
# tests 1
# pass  1

# ok

TAP version 13
    # Subtest: ./benchmark/add-remove.js
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

        dripEmitter x 22,127,973 ops/sec ±3.57% (10 runs sampled)
        MiniSignals x 11,806,107 ops/sec ±26.33% (10 runs sampled)
        ReactiveProperty x 3,055,283 ops/sec ±4.40% (10 runs sampled)
        EventDispatcher x 3,017,310 ops/sec ±19.37% (10 runs sampled)
        EventEmitter x 3,067,404 ops/sec ±33.99% (10 runs sampled)
        EventEmitter3 x 1,805,106 ops/sec ±4.12% (10 runs sampled)
        EventEmitter2 x 1,272,458 ops/sec ±6.77% (10 runs sampled)
        JS-Signals x 631,938 ops/sec ±4.67% (10 runs sampled)
        dripEmitterEnhanced x 171,328 ops/sec ±9.48% (10 runs sampled)

    *Fastest is __dripEmitter__*


    1..18
    # tests 18
    # pass  18

    # ok

ok 1 - ./benchmark/add-remove.js # time=18553.724ms

    # Subtest: ./benchmark/emit-arrays.js
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

        Theoretical max x 12,113,372 ops/sec ±5.22% (10 runs sampled) *burn in*
        MiniSignals x 6,840,284 ops/sec ±7.53% (10 runs sampled)
        signal-lite x 6,414,037 ops/sec ±2.73% (10 runs sampled)
        ReactiveProperty x 5,923,073 ops/sec ±4.03% (10 runs sampled)
        EventEmitter3 x 4,341,726 ops/sec ±2.31% (10 runs sampled)
        dripEmitter x 4,392,120 ops/sec ±11.44% (10 runs sampled)
        EventEmitter x 3,202,620 ops/sec ±13.86% (10 runs sampled)
        RXJS x 1,444,160 ops/sec ±4.22% (10 runs sampled)
        EventEmitter2 x 1,255,948 ops/sec ±13.89% (10 runs sampled)
        event-signal x 1,259,541 ops/sec ±24.29% (10 runs sampled)
        dripEmitterEnhanced x 994,324 ops/sec ±2.65% (10 runs sampled)
        JS-Signals x 209,815 ops/sec ±4.40% (10 runs sampled)
        signal-emitter x 167,562 ops/sec ±18.09% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 2 - ./benchmark/emit-arrays.js # time=24511.29ms

    # Subtest: ./benchmark/emit-bound.js
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

        Theoretical max x 3,939,109 ops/sec ±11.52% (10 runs sampled) *burn in*
        dripEmitter x 3,224,870 ops/sec ±3.86% (10 runs sampled)
        ReactiveProperty x 2,927,918 ops/sec ±3.40% (10 runs sampled)
        EventEmitter x 2,736,675 ops/sec ±13.66% (10 runs sampled)
        EventEmitter3 x 2,488,265 ops/sec ±14.89% (10 runs sampled)
        EventEmitter2 x 2,271,495 ops/sec ±5.15% (10 runs sampled)
        event-signal x 2,384,531 ops/sec ±10.76% (10 runs sampled)
        MiniSignals x 2,234,283 ops/sec ±7.92% (10 runs sampled)
        RXJS x 2,105,631 ops/sec ±4.37% (10 runs sampled)
        signal-lite x 1,887,871 ops/sec ±12.44% (10 runs sampled)
        dripEmitterEnhanced x 1,758,145 ops/sec ±5.69% (10 runs sampled)
        signal-emitter x 576,361 ops/sec ±4.18% (10 runs sampled)
        JS-Signals x 507,236 ops/sec ±3.76% (10 runs sampled)

    *Fastest is __dripEmitter__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 3 - ./benchmark/emit-bound.js # time=24440.126ms

    # Subtest: ./benchmark/emit-context.js
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

        MiniSignals x 18,614,317 ops/sec ±5.11% (10 runs sampled)
        signal-lite x 13,808,748 ops/sec ±14.17% (10 runs sampled)
        EventEmitter3 x 10,171,580 ops/sec ±39.90% (10 runs sampled)
        event-signal x 5,042,110 ops/sec ±9.08% (10 runs sampled)
        Theoretical max x 3,938,206 ops/sec ±5.81% (10 runs sampled) *burn in*
        dripEmitter x 3,390,640 ops/sec ±5.75% (10 runs sampled)
        ReactiveProperty x 2,768,001 ops/sec ±4.60% (10 runs sampled)
        EventEmitter x 2,490,363 ops/sec ±20.04% (10 runs sampled)
        RXJS x 2,175,477 ops/sec ±5.67% (10 runs sampled)
        dripEmitterEnhanced x 1,757,874 ops/sec ±4.76% (10 runs sampled)
        EventEmitter2 x 1,809,650 ops/sec ±19.45% (10 runs sampled)
        JS-Signals x 592,897 ops/sec ±5.30% (10 runs sampled)
        signal-emitter x 568,839 ops/sec ±11.34% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 4 - ./benchmark/emit-context.js # time=24553.515ms

    # Subtest: ./benchmark/emit-many-listeners.js
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

        MiniSignals x 4,741,114 ops/sec ±3.78% (10 runs sampled)
        Theoretical max x 4,813,645 ops/sec ±8.33% (10 runs sampled) *burn in*
        ReactiveProperty x 4,054,124 ops/sec ±2.88% (10 runs sampled)
        EventEmitter x 3,788,314 ops/sec ±5.00% (10 runs sampled)
        dripEmitter x 3,779,489 ops/sec ±9.33% (10 runs sampled)
        EventEmitter3 x 3,573,082 ops/sec ±8.79% (10 runs sampled)
        signal-lite x 3,597,350 ops/sec ±12.20% (10 runs sampled)
        EventEmitter2 x 2,639,916 ops/sec ±6.84% (10 runs sampled)
        event-signal x 2,600,974 ops/sec ±10.28% (10 runs sampled)
        dripEmitterEnhanced x 1,824,059 ops/sec ±5.53% (10 runs sampled)
        RXJS x 1,551,857 ops/sec ±5.31% (10 runs sampled)
        signal-emitter x 491,517 ops/sec ±4.15% (10 runs sampled)
        JS-Signals x 385,122 ops/sec ±5.92% (10 runs sampled)
        minivents x 74,066 ops/sec ±12.63% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..28
    # tests 28
    # pass  28

    # ok

ok 5 - ./benchmark/emit-many-listeners.js # time=27531.106ms

    # Subtest: ./benchmark/emit-many-params.js
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

        MiniSignals x 14,896,148 ops/sec ±5.67% (10 runs sampled)
        Theoretical max x 14,765,788 ops/sec ±15.90% (10 runs sampled) *burn in*
        signal-lite x 11,707,403 ops/sec ±10.31% (10 runs sampled)
        EventEmitter3 x 2,409,666 ops/sec ±6.55% (10 runs sampled)
        EventEmitter2 x 1,900,670 ops/sec ±4.82% (10 runs sampled)
        EventEmitter x 1,877,010 ops/sec ±10.11% (10 runs sampled)
        dripEmitterEnhanced x 1,498,192 ops/sec ±3.67% (10 runs sampled)
        signal-emitter x 331,329 ops/sec ±7.04% (10 runs sampled)
        JS-Signals x 244,954 ops/sec ±3.95% (10 runs sampled)
        minivents x 119,859 ops/sec ±18.11% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..20
    # tests 20
    # pass  20

    # ok

ok 6 - ./benchmark/emit-many-params.js # time=19531.259ms

    # Subtest: ./benchmark/emit-objects.js
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

        Theoretical max x 11,393,942 ops/sec ±7.42% (10 runs sampled) *burn in*
        signal-lite x 5,967,480 ops/sec ±4.98% (10 runs sampled)
        MiniSignals x 5,724,929 ops/sec ±6.57% (10 runs sampled)
        ReactiveProperty x 4,885,939 ops/sec ±24.15% (10 runs sampled)
        EventEmitter x 3,373,563 ops/sec ±4.22% (10 runs sampled)
        dripEmitter x 3,686,109 ops/sec ±15.77% (10 runs sampled)
        EventEmitter3 x 3,817,283 ops/sec ±32.85% (10 runs sampled)
        EventDispatcher x 2,801,215 ops/sec ±5.98% (10 runs sampled)
        RXJS x 1,505,152 ops/sec ±3.24% (10 runs sampled)
        event-signal x 1,585,450 ops/sec ±14.18% (10 runs sampled)
        EventEmitter2 x 1,379,603 ops/sec ±4.42% (10 runs sampled)
        dripEmitterEnhanced x 1,014,117 ops/sec ±4.34% (10 runs sampled)
        signal-emitter x 213,911 ops/sec ±4.94% (10 runs sampled)
        JS-Signals x 136,575 ops/sec ±17.34% (10 runs sampled)

    *Fastest is __signal-lite, MiniSignals, ReactiveProperty__*


    1..28
    # tests 28
    # pass  28

    # ok

ok 7 - ./benchmark/emit-objects.js # time=27379.424ms

    # Subtest: ./benchmark/emit-one.js
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

        Theoretical max x 26,044,803 ops/sec ±7.83% (5 runs sampled) *burn in*
        signal-lite x 17,079,562 ops/sec ±3.43% (5 runs sampled)
        MiniSignals x 16,551,449 ops/sec ±14.04% (5 runs sampled)
        dripEmitter x 14,470,477 ops/sec ±4.22% (5 runs sampled)
        EventEmitter3 x 13,679,293 ops/sec ±6.53% (5 runs sampled)
        ReactiveProperty x 14,332,207 ops/sec ±13.42% (5 runs sampled)
        EventEmitter x 11,081,535 ops/sec ±9.79% (5 runs sampled)
        event-signal x 6,016,140 ops/sec ±2.75% (5 runs sampled)
        observ x 5,849,242 ops/sec ±12.40% (5 runs sampled)
        EventEmitter2 x 5,246,356 ops/sec ±5.84% (5 runs sampled)
        d3-dispatch x 4,387,356 ops/sec ±4.24% (5 runs sampled)
        RXJS x 4,096,222 ops/sec ±6.43% (5 runs sampled)
        dripEmitterEnhanced x 3,083,630 ops/sec ±8.60% (5 runs sampled)
        observable x 1,577,771 ops/sec ±4.76% (5 runs sampled)
        signal-emitter x 623,433 ops/sec ±4.73% (5 runs sampled)
        JS-Signals x 578,542 ops/sec ±5.08% (5 runs sampled)
        namespace-emitter x 496,046 ops/sec ±7.34% (5 runs sampled)
        minivents x 390,048 ops/sec ±22.92% (5 runs sampled)

    *Fastest is __signal-lite, MiniSignals__*


    1..36
    # tests 36
    # pass  36

    # ok

ok 8 - ./benchmark/emit-one.js # time=20238.109ms

    # Subtest: ./benchmark/emit.js
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

        Theoretical max x 7,670,541 ops/sec ±27.54% (10 runs sampled) *burn in*
        MiniSignals x 5,510,358 ops/sec ±4.54% (10 runs sampled)
        signal-lite x 3,552,470 ops/sec ±44.70% (10 runs sampled)
        EventEmitter3 x 2,149,889 ops/sec ±4.70% (10 runs sampled)
        EventEmitter x 2,160,648 ops/sec ±14.69% (10 runs sampled)
        EventEmitter2 x 1,015,310 ops/sec ±6.31% (10 runs sampled)
        dripEmitterEnhanced x 686,266 ops/sec ±4.88% (10 runs sampled)
        signal-emitter x 149,166 ops/sec ±6.19% (10 runs sampled)
        JS-Signals x 143,754 ops/sec ±4.75% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..18
    # tests 18
    # pass  18

    # ok

ok 9 - ./benchmark/emit.js # time=17161.123ms

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

        EventEmitter3 x 58,586,491 ops/sec ±3.78% (10 runs sampled)
        EventDispatcher x 51,454,345 ops/sec ±8.27% (10 runs sampled)
        DripEmitter x 51,757,386 ops/sec ±9.57% (10 runs sampled)
        Theoretical max x 46,147,260 ops/sec ±11.30% (10 runs sampled) *burn in*
        EventEmitter2 x 30,793,090 ops/sec ±5.74% (10 runs sampled)
        MiniSignals x 29,323,137 ops/sec ±17.58% (10 runs sampled)
        EventEmitter x 26,459,596 ops/sec ±10.69% (10 runs sampled)
        DripEmitterEnhanced x 20,692,857 ops/sec ±13.93% (10 runs sampled)
        JS-Signals x 2,042,217 ops/sec ±9.99% (10 runs sampled)
        ReactiveProperty x 1,093,639 ops/sec ±43.96% (10 runs sampled)

    *Fastest is __EventEmitter3__*


    1..20
    # tests 20
    # pass  20

    # ok

ok 10 - ./benchmark/init.js # time=21210.634ms

1..10
# time=225158.921ms
