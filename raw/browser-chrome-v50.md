
TAP version 13
# Platform
ok 1 (unnamed assert)
Chrome 51.0.2704.63 on OS X 10.11.2

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

    EventEmitter3 x 48,573,401 ops/sec ±3.58% (10 runs sampled)
    DripEmitter x 46,246,901 ops/sec ±3.35% (10 runs sampled)
    EventDispatcher x 45,991,005 ops/sec ±3.79% (10 runs sampled)
    Theoretical max x 44,555,946 ops/sec ±7.17% (10 runs sampled) *burn in*
    EventEmitter x 33,353,584 ops/sec ±4.32% (10 runs sampled)
    EventEmitter2 x 29,345,347 ops/sec ±3.15% (10 runs sampled)
    MiniSignals x 26,418,064 ops/sec ±4.33% (10 runs sampled)
    DripEmitterEnhanced x 21,054,203 ops/sec ±3.01% (10 runs sampled)
    JS-Signals x 1,666,974 ops/sec ±19.95% (10 runs sampled)
    ReactiveProperty x 1,138,632 ops/sec ±17.28% (10 runs sampled)

*Fastest is __EventEmitter3, DripEmitter__*


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

    Theoretical max x 9,533,165 ops/sec ±15.03% (10 runs sampled) *burn in*
    MiniSignals x 5,080,529 ops/sec ±6.82% (10 runs sampled)
    signal-lite x 4,787,181 ops/sec ±5.14% (10 runs sampled)
    EventEmitter3 x 1,192,282 ops/sec ±3.16% (10 runs sampled)
    EventEmitter2 x 726,597 ops/sec ±2.89% (10 runs sampled)
    dripEmitterEnhanced x 343,257 ops/sec ±16.40% (10 runs sampled)
    signal-emitter x 283,581 ops/sec ±4.06% (10 runs sampled)
    EventEmitter x 114,214 ops/sec ±7.99% (10 runs sampled)
    JS-Signals x 92,626 ops/sec ±20.85% (10 runs sampled)

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

    Theoretical max x 21,713,658 ops/sec ±6.44% (10 runs sampled) *burn in*
    MiniSignals x 17,402,719 ops/sec ±4.83% (10 runs sampled)
    signal-lite x 16,585,708 ops/sec ±6.37% (10 runs sampled)
    dripEmitter x 14,242,041 ops/sec ±2.80% (10 runs sampled)
    EventEmitter3 x 13,495,536 ops/sec ±3.66% (10 runs sampled)
    ReactiveProperty x 13,239,006 ops/sec ±5.48% (10 runs sampled)
    event-signal x 5,667,058 ops/sec ±4.41% (10 runs sampled)
    observ x 5,207,335 ops/sec ±3.65% (10 runs sampled)
    EventEmitter2 x 4,823,088 ops/sec ±3.77% (10 runs sampled)
    RXJS x 3,876,753 ops/sec ±5.18% (10 runs sampled)
    d3-dispatch x 2,221,511 ops/sec ±2.88% (10 runs sampled)
    dripEmitterEnhanced x 2,063,860 ops/sec ±6.64% (10 runs sampled)
    signal-emitter x 1,327,396 ops/sec ±3.49% (10 runs sampled)
    observable x 681,938 ops/sec ±4.67% (10 runs sampled)
    EventEmitter x 494,199 ops/sec ±5.64% (10 runs sampled)
    JS-Signals x 449,531 ops/sec ±3.45% (10 runs sampled)
    namespace-emitter x 419,474 ops/sec ±4.06% (10 runs sampled)
    minivents x 309,876 ops/sec ±3.05% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 10,746,977 ops/sec ±8.25% (10 runs sampled) *burn in*
    MiniSignals x 6,164,225 ops/sec ±3.33% (10 runs sampled)
    signal-lite x 5,743,242 ops/sec ±5.71% (10 runs sampled)
    ReactiveProperty x 5,121,456 ops/sec ±3.87% (10 runs sampled)
    dripEmitter x 4,770,088 ops/sec ±6.31% (10 runs sampled)
    EventEmitter3 x 4,368,703 ops/sec ±5.18% (10 runs sampled)
    EventDispatcher x 2,450,524 ops/sec ±5.14% (10 runs sampled)
    event-signal x 1,755,782 ops/sec ±3.90% (10 runs sampled)
    EventEmitter2 x 1,527,475 ops/sec ±5.43% (10 runs sampled)
    RXJS x 1,404,662 ops/sec ±5.61% (10 runs sampled)
    dripEmitterEnhanced x 549,217 ops/sec ±3.71% (10 runs sampled)
    signal-emitter x 441,040 ops/sec ±4.78% (10 runs sampled)
    EventEmitter x 172,243 ops/sec ±5.22% (10 runs sampled)
    JS-Signals x 153,411 ops/sec ±7.85% (10 runs sampled)

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

    MiniSignals x 14,826,356 ops/sec ±2.30% (10 runs sampled)
    Theoretical max x 16,190,278 ops/sec ±13.40% (10 runs sampled) *burn in*
    signal-lite x 13,901,297 ops/sec ±5.04% (10 runs sampled)
    EventEmitter3 x 725,368 ops/sec ±3.30% (10 runs sampled)
    EventEmitter2 x 688,822 ops/sec ±5.64% (10 runs sampled)
    dripEmitterEnhanced x 564,062 ops/sec ±6.45% (10 runs sampled)
    signal-emitter x 505,189 ops/sec ±2.43% (10 runs sampled)
    JS-Signals x 107,506 ops/sec ±3.53% (10 runs sampled)
    EventEmitter x 102,607 ops/sec ±3.20% (10 runs sampled)
    minivents x 52,790 ops/sec ±16.25% (10 runs sampled)

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

    MiniSignals x 4,568,439 ops/sec ±5.40% (10 runs sampled)
    signal-lite x 4,142,143 ops/sec ±5.56% (10 runs sampled)
    ReactiveProperty x 3,779,123 ops/sec ±4.39% (10 runs sampled)
    EventEmitter3 x 3,627,338 ops/sec ±3.65% (10 runs sampled)
    Theoretical max x 3,736,223 ops/sec ±11.40% (10 runs sampled) *burn in*
    dripEmitter x 3,525,021 ops/sec ±9.58% (10 runs sampled)
    event-signal x 2,514,413 ops/sec ±3.05% (10 runs sampled)
    EventEmitter2 x 2,264,858 ops/sec ±3.53% (10 runs sampled)
    RXJS x 1,534,036 ops/sec ±1.83% (10 runs sampled)
    dripEmitterEnhanced x 1,310,974 ops/sec ±3.96% (10 runs sampled)
    signal-emitter x 1,047,527 ops/sec ±5.95% (10 runs sampled)
    EventEmitter x 264,012 ops/sec ±4.44% (10 runs sampled)
    JS-Signals x 244,275 ops/sec ±4.68% (10 runs sampled)
    minivents x 67,164 ops/sec ±5.03% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 30,571,882 ops/sec ±6.08% (10 runs sampled) *burn in*
    signal-lite x 18,955,745 ops/sec ±2.29% (10 runs sampled)
    MiniSignals x 18,600,997 ops/sec ±4.11% (10 runs sampled)
    ReactiveProperty x 15,214,201 ops/sec ±5.34% (10 runs sampled)
    EventEmitter3 x 13,761,713 ops/sec ±5.01% (10 runs sampled)
    dripEmitter x 13,024,185 ops/sec ±3.86% (10 runs sampled)
    event-signal x 5,838,154 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 4,778,855 ops/sec ±6.04% (10 runs sampled)
    RXJS x 4,353,477 ops/sec ±2.64% (10 runs sampled)
    dripEmitterEnhanced x 1,889,857 ops/sec ±7.72% (10 runs sampled)
    signal-emitter x 1,442,581 ops/sec ±2.45% (10 runs sampled)
    EventEmitter x 493,774 ops/sec ±10.36% (10 runs sampled)
    JS-Signals x 451,399 ops/sec ±4.21% (10 runs sampled)

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

    Theoretical max x 29,611,625 ops/sec ±4.20% (10 runs sampled) *burn in*
    ReactiveProperty x 15,325,058 ops/sec ±5.42% (10 runs sampled)
    dripEmitter x 13,128,918 ops/sec ±4.03% (10 runs sampled)
    EventEmitter3 x 11,888,587 ops/sec ±3.71% (10 runs sampled)
    MiniSignals x 7,817,032 ops/sec ±3.47% (10 runs sampled)
    signal-lite x 5,928,199 ops/sec ±5.42% (10 runs sampled)
    event-signal x 5,680,735 ops/sec ±2.13% (10 runs sampled)
    EventEmitter2 x 4,703,149 ops/sec ±3.93% (10 runs sampled)
    RXJS x 4,268,341 ops/sec ±5.49% (10 runs sampled)
    dripEmitterEnhanced x 2,103,764 ops/sec ±2.78% (10 runs sampled)
    signal-emitter x 1,371,568 ops/sec ±4.49% (10 runs sampled)
    EventEmitter x 589,015 ops/sec ±2.74% (10 runs sampled)
    JS-Signals x 492,493 ops/sec ±3.38% (10 runs sampled)

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

    Theoretical max x 11,505,182 ops/sec ±11.10% (10 runs sampled) *burn in*
    MiniSignals x 6,870,031 ops/sec ±3.38% (10 runs sampled)
    signal-lite x 6,317,041 ops/sec ±3.54% (10 runs sampled)
    ReactiveProperty x 5,023,529 ops/sec ±4.92% (10 runs sampled)
    dripEmitter x 4,926,960 ops/sec ±6.41% (10 runs sampled)
    EventEmitter3 x 4,838,635 ops/sec ±5.25% (10 runs sampled)
    event-signal x 1,851,458 ops/sec ±2.87% (10 runs sampled)
    EventEmitter2 x 1,653,548 ops/sec ±1.94% (10 runs sampled)
    RXJS x 1,460,832 ops/sec ±3.65% (10 runs sampled)
    dripEmitterEnhanced x 704,020 ops/sec ±4.23% (10 runs sampled)
    signal-emitter x 409,363 ops/sec ±19.66% (10 runs sampled)
    EventEmitter x 178,479 ops/sec ±3.32% (10 runs sampled)
    JS-Signals x 166,381 ops/sec ±3.29% (10 runs sampled)

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

    dripEmitter x 27,554,074 ops/sec ±3.51% (10 runs sampled)
    MiniSignals x 11,768,273 ops/sec ±3.88% (10 runs sampled)
    EventDispatcher x 5,210,706 ops/sec ±5.06% (10 runs sampled)
    ReactiveProperty x 3,965,584 ops/sec ±3.84% (10 runs sampled)
    EventEmitter3 x 1,990,812 ops/sec ±3.14% (10 runs sampled)
    EventEmitter x 1,527,376 ops/sec ±4.36% (10 runs sampled)
    EventEmitter2 x 1,204,836 ops/sec ±7.81% (10 runs sampled)
    JS-Signals x 729,708 ops/sec ±4.30% (10 runs sampled)
    dripEmitterEnhanced x 551,370 ops/sec ±3.12% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

