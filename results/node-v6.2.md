# Node.js 6.2.0 on Darwin 64-bit

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

        dripEmitter x 27,292,800 ops/sec ±4.46% (10 runs sampled)
        MiniSignals x 10,724,777 ops/sec ±29.32% (10 runs sampled)
        EventDispatcher x 5,328,112 ops/sec ±4.94% (10 runs sampled)
        ReactiveProperty x 5,066,076 ops/sec ±2.84% (10 runs sampled)
        EventEmitter x 3,898,823 ops/sec ±14.54% (10 runs sampled)
        EventEmitter3 x 1,899,788 ops/sec ±5.74% (10 runs sampled)
        EventEmitter2 x 1,265,348 ops/sec ±6.74% (10 runs sampled)
        JS-Signals x 829,303 ops/sec ±4.16% (10 runs sampled)
        dripEmitterEnhanced x 762,512 ops/sec ±2.30% (10 runs sampled)

    *Fastest is __dripEmitter__*


    1..18
    # tests 18
    # pass  18

    # ok

ok 1 - ./benchmark/add-remove.js # time=18413.647ms

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

        Theoretical max x 13,740,340 ops/sec ±2.40% (10 runs sampled) *burn in*
        MiniSignals x 6,703,901 ops/sec ±4.93% (10 runs sampled)
        dripEmitter x 5,383,534 ops/sec ±3.57% (10 runs sampled)
        EventEmitter3 x 4,943,721 ops/sec ±3.33% (10 runs sampled)
        signal-lite x 5,292,146 ops/sec ±13.70% (10 runs sampled)
        ReactiveProperty x 4,196,381 ops/sec ±7.02% (10 runs sampled)
        EventEmitter x 3,407,923 ops/sec ±5.11% (10 runs sampled)
        event-signal x 1,865,417 ops/sec ±7.20% (10 runs sampled)
        EventEmitter2 x 1,688,604 ops/sec ±3.43% (10 runs sampled)
        RXJS x 1,289,193 ops/sec ±6.44% (10 runs sampled)
        dripEmitterEnhanced x 633,415 ops/sec ±3.49% (10 runs sampled)
        signal-emitter x 210,783 ops/sec ±10.58% (10 runs sampled)
        JS-Signals x 153,182 ops/sec ±6.02% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 2 - ./benchmark/emit-arrays.js # time=24614.194ms

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

        Theoretical max x 31,134,611 ops/sec ±6.08% (10 runs sampled) *burn in*
        ReactiveProperty x 15,952,512 ops/sec ±5.97% (10 runs sampled)
        dripEmitter x 14,017,810 ops/sec ±6.61% (10 runs sampled)
        EventEmitter3 x 12,876,188 ops/sec ±3.09% (10 runs sampled)
        EventEmitter x 8,822,643 ops/sec ±7.23% (10 runs sampled)
        MiniSignals x 6,733,411 ops/sec ±13.22% (10 runs sampled)
        signal-lite x 5,658,684 ops/sec ±6.76% (10 runs sampled)
        event-signal x 5,135,207 ops/sec ±8.19% (10 runs sampled)
        EventEmitter2 x 4,429,761 ops/sec ±7.29% (10 runs sampled)
        RXJS x 4,052,519 ops/sec ±2.89% (10 runs sampled)
        dripEmitterEnhanced x 2,025,759 ops/sec ±6.17% (10 runs sampled)
        signal-emitter x 675,592 ops/sec ±4.13% (10 runs sampled)
        JS-Signals x 559,052 ops/sec ±2.62% (10 runs sampled)

    *Fastest is __ReactiveProperty__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 3 - ./benchmark/emit-bound.js # time=24389.615ms

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

        Theoretical max x 31,879,189 ops/sec ±4.08% (10 runs sampled) *burn in*
        MiniSignals x 20,792,795 ops/sec ±3.42% (10 runs sampled)
        signal-lite x 19,769,499 ops/sec ±4.15% (10 runs sampled)
        ReactiveProperty x 16,952,090 ops/sec ±3.74% (10 runs sampled)
        EventEmitter3 x 13,379,775 ops/sec ±5.30% (10 runs sampled)
        dripEmitter x 13,243,077 ops/sec ±4.82% (10 runs sampled)
        EventEmitter x 9,236,508 ops/sec ±4.86% (10 runs sampled)
        event-signal x 6,415,023 ops/sec ±3.75% (10 runs sampled)
        EventEmitter2 x 4,901,441 ops/sec ±2.62% (10 runs sampled)
        RXJS x 4,072,093 ops/sec ±4.49% (10 runs sampled)
        dripEmitterEnhanced x 2,350,940 ops/sec ±8.95% (10 runs sampled)
        signal-emitter x 655,961 ops/sec ±5.72% (10 runs sampled)
        JS-Signals x 601,836 ops/sec ±4.48% (10 runs sampled)

    *Fastest is __MiniSignals, signal-lite__*


    1..26
    # tests 26
    # pass  26

    # ok

ok 4 - ./benchmark/emit-context.js # time=24673.833ms

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

        Theoretical max x 4,776,740 ops/sec ±3.83% (10 runs sampled) *burn in*
        dripEmitter x 4,515,543 ops/sec ±4.15% (10 runs sampled)
        MiniSignals x 4,362,106 ops/sec ±2.80% (10 runs sampled)
        signal-lite x 4,319,217 ops/sec ±9.66% (10 runs sampled)
        EventEmitter3 x 4,085,060 ops/sec ±3.94% (10 runs sampled)
        EventEmitter x 3,913,704 ops/sec ±2.83% (10 runs sampled)
        ReactiveProperty x 3,843,075 ops/sec ±6.63% (10 runs sampled)
        event-signal x 3,011,075 ops/sec ±5.36% (10 runs sampled)
        EventEmitter2 x 2,620,877 ops/sec ±3.95% (10 runs sampled)
        RXJS x 1,575,125 ops/sec ±2.97% (10 runs sampled)
        dripEmitterEnhanced x 1,430,346 ops/sec ±4.59% (10 runs sampled)
        signal-emitter x 617,334 ops/sec ±9.08% (10 runs sampled)
        JS-Signals x 281,712 ops/sec ±3.23% (10 runs sampled)
        minivents x 118,384 ops/sec ±4.07% (10 runs sampled)

    *Fastest is __dripEmitter, MiniSignals, signal-lite__*


    1..28
    # tests 28
    # pass  28

    # ok

ok 5 - ./benchmark/emit-many-listeners.js # time=26375.085ms

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

        Theoretical max x 17,171,552 ops/sec ±7.29% (10 runs sampled) *burn in*
        signal-lite x 14,514,839 ops/sec ±2.90% (10 runs sampled)
        MiniSignals x 14,483,135 ops/sec ±4.05% (10 runs sampled)
        EventEmitter x 721,170 ops/sec ±4.07% (10 runs sampled)
        EventEmitter3 x 730,909 ops/sec ±7.03% (10 runs sampled)
        EventEmitter2 x 706,549 ops/sec ±4.54% (10 runs sampled)
        dripEmitterEnhanced x 578,134 ops/sec ±6.48% (10 runs sampled)
        signal-emitter x 391,939 ops/sec ±6.10% (10 runs sampled)
        JS-Signals x 222,579 ops/sec ±3.89% (10 runs sampled)
        minivents x 147,389 ops/sec ±4.13% (10 runs sampled)

    *Fastest is __signal-lite, MiniSignals__*


    1..20
    # tests 20
    # pass  20

    # ok

ok 6 - ./benchmark/emit-many-params.js # time=19314.658ms

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

        Theoretical max x 12,140,097 ops/sec ±4.31% (10 runs sampled) *burn in*
        MiniSignals x 6,454,126 ops/sec ±5.66% (10 runs sampled)
        signal-lite x 6,088,344 ops/sec ±9.74% (10 runs sampled)
        ReactiveProperty x 5,466,063 ops/sec ±3.56% (10 runs sampled)
        dripEmitter x 5,112,719 ops/sec ±4.84% (10 runs sampled)
        EventEmitter3 x 4,859,045 ops/sec ±3.72% (10 runs sampled)
        EventEmitter x 3,278,374 ops/sec ±2.72% (10 runs sampled)
        EventDispatcher x 2,568,818 ops/sec ±3.80% (10 runs sampled)
        event-signal x 1,916,630 ops/sec ±3.87% (10 runs sampled)
        RXJS x 1,367,494 ops/sec ±4.47% (10 runs sampled)
        EventEmitter2 x 1,493,749 ops/sec ±14.71% (10 runs sampled)
        dripEmitterEnhanced x 661,286 ops/sec ±3.71% (10 runs sampled)
        signal-emitter x 242,176 ops/sec ±6.88% (10 runs sampled)
        JS-Signals x 201,834 ops/sec ±3.44% (10 runs sampled)

    *Fastest is __MiniSignals, signal-lite__*


    1..28
    # tests 28
    # pass  28

    # ok

ok 7 - ./benchmark/emit-objects.js # time=27508.874ms

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

        Theoretical max x 24,841,679 ops/sec ±4.40% (5 runs sampled) *burn in*
        MiniSignals x 17,893,569 ops/sec ±5.30% (5 runs sampled)
        signal-lite x 17,434,761 ops/sec ±8.47% (5 runs sampled)
        EventEmitter3 x 12,756,332 ops/sec ±4.85% (5 runs sampled)
        dripEmitter x 13,857,104 ops/sec ±14.46% (5 runs sampled)
        ReactiveProperty x 10,927,422 ops/sec ±23.72% (5 runs sampled)
        EventEmitter x 8,816,294 ops/sec ±5.35% (5 runs sampled)
        observ x 6,255,281 ops/sec ±7.56% (5 runs sampled)
        event-signal x 5,213,935 ops/sec ±7.47% (5 runs sampled)
        EventEmitter2 x 4,085,607 ops/sec ±27.26% (5 runs sampled)
        RXJS x 3,233,926 ops/sec ±16.53% (5 runs sampled)
        d3-dispatch x 1,849,023 ops/sec ±12.29% (5 runs sampled)
        dripEmitterEnhanced x 1,430,279 ops/sec ±49.53% (5 runs sampled)
        signal-emitter x 729,872 ops/sec ±6.04% (5 runs sampled)
        JS-Signals x 571,931 ops/sec ±5.43% (5 runs sampled)
        minivents x 513,631 ops/sec ±6.40% (5 runs sampled)
        namespace-emitter x 513,209 ops/sec ±8.31% (5 runs sampled)
        observable x 368,863 ops/sec ±31.57% (5 runs sampled)

    *Fastest is __MiniSignals, signal-lite__*


    1..36
    # tests 36
    # pass  36

    # ok

ok 8 - ./benchmark/emit-one.js # time=21341.397ms

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

        Theoretical max x 9,835,125 ops/sec ±5.65% (10 runs sampled) *burn in*
        MiniSignals x 4,794,795 ops/sec ±8.66% (10 runs sampled)
        signal-lite x 4,065,813 ops/sec ±13.36% (10 runs sampled)
        EventEmitter x 2,335,679 ops/sec ±5.51% (10 runs sampled)
        EventEmitter3 x 874,773 ops/sec ±21.54% (10 runs sampled)
        EventEmitter2 x 623,254 ops/sec ±9.82% (10 runs sampled)
        dripEmitterEnhanced x 290,874 ops/sec ±18.19% (10 runs sampled)
        signal-emitter x 124,320 ops/sec ±13.73% (10 runs sampled)
        JS-Signals x 92,273 ops/sec ±30.66% (10 runs sampled)

    *Fastest is __MiniSignals__*


    1..18
    # tests 18
    # pass  18

    # ok

ok 9 - ./benchmark/emit.js # time=19781.646ms

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

        EventEmitter3 x 43,276,167 ops/sec ±10.35% (10 runs sampled)
        DripEmitter x 38,431,042 ops/sec ±13.16% (10 runs sampled)
        EventDispatcher x 37,403,349 ops/sec ±13.25% (10 runs sampled)
        DripEmitterEnhanced x 20,050,653 ops/sec ±9.05% (10 runs sampled)
        EventEmitter x 20,632,496 ops/sec ±23.66% (10 runs sampled)
        EventEmitter2 x 20,031,903 ops/sec ±21.46% (10 runs sampled)
        Theoretical max x 26,734,483 ops/sec ±62.13% (10 runs sampled) *burn in*
        MiniSignals x 21,622,878 ops/sec ±42.78% (10 runs sampled)
        JS-Signals x 1,889,326 ops/sec ±22.34% (10 runs sampled)
        ReactiveProperty x 1,123,304 ops/sec ±23.64% (10 runs sampled)

    *Fastest is __EventEmitter3, DripEmitter__*


    1..20
    # tests 20
    # pass  20

    # ok

ok 10 - ./benchmark/init.js # time=22251.409ms

1..10
# time=228683.728ms
