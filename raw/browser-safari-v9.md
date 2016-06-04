
TAP version 13
# Platform
ok 1 (unnamed assert)
Safari 9.0.2 on OS X 10.11.2

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

    EventEmitter3 x 68,895,311 ops/sec ±4.01% (10 runs sampled)
    Theoretical max x 48,201,151 ops/sec ±5.68% (10 runs sampled) *burn in*
    EventDispatcher x 50,241,158 ops/sec ±11.97% (10 runs sampled)
    DripEmitter x 20,979,407 ops/sec ±3.85% (10 runs sampled)
    EventEmitter2 x 18,073,901 ops/sec ±2.32% (10 runs sampled)
    JS-Signals x 16,912,615 ops/sec ±5.04% (10 runs sampled)
    MiniSignals x 23,584,514 ops/sec ±50.19% (10 runs sampled)
    EventEmitter x 19,925,727 ops/sec ±34.28% (10 runs sampled)
    DripEmitterEnhanced x 9,383,991 ops/sec ±18.47% (10 runs sampled)
    ReactiveProperty x 5,011,228 ops/sec ±14.35% (10 runs sampled)

*Fastest is __EventEmitter3__*


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

    Theoretical max x 2,233,450 ops/sec ±30.98% (10 runs sampled) *burn in*
    MiniSignals x 511,848 ops/sec ±22.24% (10 runs sampled)
    EventEmitter2 x 419,590 ops/sec ±9.74% (10 runs sampled)
    EventEmitter3 x 381,861 ops/sec ±8.46% (10 runs sampled)
    EventEmitter x 350,796 ops/sec ±8.70% (10 runs sampled)
    JS-Signals x 291,190 ops/sec ±3.48% (10 runs sampled)
    signal-lite x 313,105 ops/sec ±22.08% (10 runs sampled)
    dripEmitterEnhanced x 275,556 ops/sec ±13.14% (10 runs sampled)
    signal-emitter x 145,112 ops/sec ±4.48% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter2__*


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

    Theoretical max x 8,527,048 ops/sec ±68.14% (10 runs sampled) *burn in*
    MiniSignals x 2,884,470 ops/sec ±3.22% (10 runs sampled)
    event-signal x 2,156,246 ops/sec ±11.17% (10 runs sampled)
    RXJS x 1,875,320 ops/sec ±3.72% (10 runs sampled)
    dripEmitter x 1,952,138 ops/sec ±10.11% (10 runs sampled)
    ReactiveProperty x 1,808,591 ops/sec ±14.62% (10 runs sampled)
    EventEmitter3 x 1,520,342 ops/sec ±4.70% (10 runs sampled)
    signal-lite x 1,448,082 ops/sec ±5.81% (10 runs sampled)
    EventEmitter x 1,447,145 ops/sec ±15.11% (10 runs sampled)
    EventEmitter2 x 1,437,313 ops/sec ±22.38% (10 runs sampled)
    minivents x 1,132,249 ops/sec ±4.88% (10 runs sampled)
    d3-dispatch x 1,069,471 ops/sec ±12.83% (10 runs sampled)
    observ x 966,864 ops/sec ±9.02% (10 runs sampled)
    observable x 999,243 ops/sec ±17.68% (10 runs sampled)
    JS-Signals x 956,387 ops/sec ±13.77% (10 runs sampled)
    dripEmitterEnhanced x 883,354 ops/sec ±17.19% (10 runs sampled)
    signal-emitter x 550,514 ops/sec ±8.14% (10 runs sampled)
    namespace-emitter x 449,937 ops/sec ±9.70% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 1,835,178 ops/sec ±39.10% (10 runs sampled) *burn in*
    ReactiveProperty x 766,034 ops/sec ±6.29% (10 runs sampled)
    event-signal x 740,380 ops/sec ±3.96% (10 runs sampled)
    EventDispatcher x 711,253 ops/sec ±6.90% (10 runs sampled)
    dripEmitter x 658,653 ops/sec ±8.90% (10 runs sampled)
    RXJS x 627,095 ops/sec ±3.82% (10 runs sampled)
    EventEmitter2 x 585,770 ops/sec ±14.01% (10 runs sampled)
    signal-lite x 481,894 ops/sec ±2.70% (10 runs sampled)
    EventEmitter3 x 468,138 ops/sec ±7.13% (10 runs sampled)
    EventEmitter x 435,799 ops/sec ±6.33% (10 runs sampled)
    dripEmitterEnhanced x 340,631 ops/sec ±10.88% (10 runs sampled)
    MiniSignals x 403,308 ops/sec ±42.57% (10 runs sampled)
    JS-Signals x 303,868 ops/sec ±16.70% (10 runs sampled)
    signal-emitter x 174,758 ops/sec ±9.90% (10 runs sampled)

*Fastest is __ReactiveProperty, event-signal, EventDispatcher__*


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

    Theoretical max x 6,215,470 ops/sec ±31.84% (10 runs sampled) *burn in*
    MiniSignals x 3,360,284 ops/sec ±3.56% (10 runs sampled)
    signal-lite x 1,202,830 ops/sec ±5.85% (10 runs sampled)
    EventEmitter3 x 1,052,551 ops/sec ±7.65% (10 runs sampled)
    EventEmitter x 1,066,908 ops/sec ±10.11% (10 runs sampled)
    EventEmitter2 x 1,057,921 ops/sec ±10.01% (10 runs sampled)
    JS-Signals x 889,113 ops/sec ±4.15% (10 runs sampled)
    minivents x 777,714 ops/sec ±5.21% (10 runs sampled)
    dripEmitterEnhanced x 782,988 ops/sec ±12.74% (10 runs sampled)
    signal-emitter x 426,573 ops/sec ±3.35% (10 runs sampled)

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

    Theoretical max x 1,341,762 ops/sec ±32.61% (10 runs sampled) *burn in*
    EventEmitter3 x 535,280 ops/sec ±5.23% (10 runs sampled)
    dripEmitter x 564,780 ops/sec ±11.47% (10 runs sampled)
    MiniSignals x 559,787 ops/sec ±16.95% (10 runs sampled)
    EventEmitter x 498,767 ops/sec ±4.38% (10 runs sampled)
    ReactiveProperty x 513,412 ops/sec ±9.96% (10 runs sampled)
    RXJS x 408,866 ops/sec ±8.18% (10 runs sampled)
    EventEmitter2 x 443,585 ops/sec ±17.92% (10 runs sampled)
    JS-Signals x 367,391 ops/sec ±5.03% (10 runs sampled)
    dripEmitterEnhanced x 397,620 ops/sec ±15.06% (10 runs sampled)
    event-signal x 432,291 ops/sec ±29.97% (10 runs sampled)
    signal-lite x 361,230 ops/sec ±11.51% (10 runs sampled)
    minivents x 297,199 ops/sec ±4.73% (10 runs sampled)
    signal-emitter x 310,591 ops/sec ±16.00% (10 runs sampled)

*Fastest is __EventEmitter3, dripEmitter, MiniSignals, ReactiveProperty, event-signal__*


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

    MiniSignals x 4,034,388 ops/sec ±5.80% (10 runs sampled)
    event-signal x 3,556,944 ops/sec ±5.72% (10 runs sampled)
    Theoretical max x 3,437,011 ops/sec ±31.87% (10 runs sampled) *burn in*
    dripEmitter x 1,991,216 ops/sec ±12.33% (10 runs sampled)
    EventEmitter3 x 1,888,354 ops/sec ±7.32% (10 runs sampled)
    signal-lite x 1,754,192 ops/sec ±4.41% (10 runs sampled)
    ReactiveProperty x 1,730,859 ops/sec ±4.69% (10 runs sampled)
    RXJS x 1,624,460 ops/sec ±7.52% (10 runs sampled)
    EventEmitter2 x 1,673,263 ops/sec ±11.40% (10 runs sampled)
    EventEmitter x 1,204,324 ops/sec ±15.81% (10 runs sampled)
    JS-Signals x 1,078,174 ops/sec ±7.14% (10 runs sampled)
    dripEmitterEnhanced x 912,708 ops/sec ±14.28% (10 runs sampled)
    signal-emitter x 624,893 ops/sec ±7.41% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 5,686,141 ops/sec ±19.50% (10 runs sampled) *burn in*
    MiniSignals x 3,395,133 ops/sec ±2.57% (10 runs sampled)
    event-signal x 2,423,340 ops/sec ±10.98% (10 runs sampled)
    RXJS x 1,885,051 ops/sec ±2.88% (10 runs sampled)
    dripEmitter x 1,780,377 ops/sec ±11.18% (10 runs sampled)
    EventEmitter2 x 1,593,899 ops/sec ±8.67% (10 runs sampled)
    signal-lite x 1,508,511 ops/sec ±10.28% (10 runs sampled)
    ReactiveProperty x 1,497,592 ops/sec ±16.49% (10 runs sampled)
    EventEmitter x 1,322,331 ops/sec ±9.01% (10 runs sampled)
    EventEmitter3 x 1,291,981 ops/sec ±11.09% (10 runs sampled)
    JS-Signals x 1,070,162 ops/sec ±5.43% (10 runs sampled)
    dripEmitterEnhanced x 864,064 ops/sec ±10.57% (10 runs sampled)
    signal-emitter x 607,297 ops/sec ±3.83% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 1,749,909 ops/sec ±40.93% (10 runs sampled) *burn in*
    MiniSignals x 962,738 ops/sec ±2.68% (10 runs sampled)
    event-signal x 682,064 ops/sec ±6.50% (10 runs sampled)
    RXJS x 652,485 ops/sec ±5.88% (10 runs sampled)
    ReactiveProperty x 640,420 ops/sec ±11.59% (10 runs sampled)
    dripEmitter x 576,977 ops/sec ±10.40% (10 runs sampled)
    signal-lite x 445,047 ops/sec ±4.26% (10 runs sampled)
    EventEmitter3 x 439,659 ops/sec ±12.16% (10 runs sampled)
    EventEmitter2 x 480,080 ops/sec ±25.67% (10 runs sampled)
    EventEmitter x 385,995 ops/sec ±3.76% (10 runs sampled)
    JS-Signals x 327,249 ops/sec ±5.49% (10 runs sampled)
    dripEmitterEnhanced x 332,081 ops/sec ±9.60% (10 runs sampled)
    signal-emitter x 198,141 ops/sec ±3.62% (10 runs sampled)

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

    dripEmitter x 7,248,099 ops/sec ±3.10% (10 runs sampled)
    EventDispatcher x 3,058,986 ops/sec ±16.76% (10 runs sampled)
    MiniSignals x 3,186,970 ops/sec ±22.55% (10 runs sampled)
    EventEmitter3 x 1,559,503 ops/sec ±6.85% (10 runs sampled)
    ReactiveProperty x 1,533,711 ops/sec ±11.02% (10 runs sampled)
    JS-Signals x 772,768 ops/sec ±9.63% (10 runs sampled)
    EventEmitter x 755,244 ops/sec ±15.43% (10 runs sampled)
    dripEmitterEnhanced x 658,879 ops/sec ±6.89% (10 runs sampled)
    EventEmitter2 x 572,722 ops/sec ±10.76% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

# ok

