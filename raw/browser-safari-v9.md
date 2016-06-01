
TAP version 13
# Platform
ok 1 (unnamed assert)
Safari 9.0.2 on OS X 10.11.2

1..1
# tests 1
# pass  1

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

    dripEmitter x 6,101,453 ops/sec ±4.23% (10 runs sampled)
    MiniSignals x 2,803,316 ops/sec ±20.21% (10 runs sampled)
    EventDispatcher x 2,375,420 ops/sec ±14.06% (10 runs sampled)
    EventEmitter3 x 1,292,633 ops/sec ±2.84% (10 runs sampled)
    ReactiveProperty x 1,162,361 ops/sec ±14.38% (10 runs sampled)
    EventEmitter x 648,400 ops/sec ±6.21% (10 runs sampled)
    JS-Signals x 619,520 ops/sec ±7.14% (10 runs sampled)
    dripEmitterEnhanced x 557,108 ops/sec ±5.29% (10 runs sampled)
    EventEmitter2 x 463,133 ops/sec ±7.09% (10 runs sampled)

*Fastest is __dripEmitter__*


1..18
# tests 18
# pass  18

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

    Theoretical max x 1,354,802 ops/sec ±33.98% (10 runs sampled) *burn in*
    MiniSignals x 703,388 ops/sec ±12.90% (10 runs sampled)
    event-signal x 566,802 ops/sec ±7.67% (10 runs sampled)
    dripEmitter x 590,196 ops/sec ±15.20% (10 runs sampled)
    ReactiveProperty x 506,899 ops/sec ±6.36% (10 runs sampled)
    RXJS x 493,949 ops/sec ±5.16% (10 runs sampled)
    EventEmitter2 x 465,502 ops/sec ±11.04% (10 runs sampled)
    EventEmitter3 x 383,062 ops/sec ±7.65% (10 runs sampled)
    EventEmitter x 350,096 ops/sec ±7.01% (10 runs sampled)
    signal-lite x 342,492 ops/sec ±10.97% (10 runs sampled)
    JS-Signals x 278,428 ops/sec ±7.46% (10 runs sampled)
    dripEmitterEnhanced x 274,942 ops/sec ±12.69% (10 runs sampled)
    signal-emitter x 152,702 ops/sec ±1.53% (10 runs sampled)

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

    Theoretical max x 4,427,236 ops/sec ±26.77% (10 runs sampled) *burn in*
    MiniSignals x 2,640,141 ops/sec ±6.78% (10 runs sampled)
    event-signal x 2,126,112 ops/sec ±3.92% (10 runs sampled)
    dripEmitter x 1,834,898 ops/sec ±12.46% (10 runs sampled)
    RXJS x 1,591,336 ops/sec ±4.03% (10 runs sampled)
    ReactiveProperty x 1,476,948 ops/sec ±10.82% (10 runs sampled)
    EventEmitter2 x 1,458,746 ops/sec ±13.93% (10 runs sampled)
    EventEmitter3 x 1,337,719 ops/sec ±7.73% (10 runs sampled)
    signal-lite x 1,293,558 ops/sec ±5.06% (10 runs sampled)
    EventEmitter x 946,756 ops/sec ±10.71% (10 runs sampled)
    JS-Signals x 805,019 ops/sec ±3.80% (10 runs sampled)
    dripEmitterEnhanced x 850,168 ops/sec ±15.25% (10 runs sampled)
    signal-emitter x 448,437 ops/sec ±8.07% (10 runs sampled)

*Fastest is __MiniSignals__*


1..26
# tests 26
# pass  26

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

    Theoretical max x 4,397,861 ops/sec ±27.38% (10 runs sampled) *burn in*
    MiniSignals x 3,270,194 ops/sec ±6.99% (10 runs sampled)
    event-signal x 2,718,954 ops/sec ±4.81% (10 runs sampled)
    ReactiveProperty x 1,621,102 ops/sec ±4.29% (10 runs sampled)
    EventEmitter3 x 1,610,915 ops/sec ±7.66% (10 runs sampled)
    signal-lite x 1,466,979 ops/sec ±1.91% (10 runs sampled)
    dripEmitter x 1,620,703 ops/sec ±15.26% (10 runs sampled)
    RXJS x 1,487,066 ops/sec ±9.99% (10 runs sampled)
    EventEmitter2 x 1,442,348 ops/sec ±14.03% (10 runs sampled)
    EventEmitter x 1,017,819 ops/sec ±10.38% (10 runs sampled)
    JS-Signals x 981,151 ops/sec ±8.21% (10 runs sampled)
    dripEmitterEnhanced x 809,057 ops/sec ±10.38% (10 runs sampled)
    signal-emitter x 566,768 ops/sec ±3.56% (10 runs sampled)

*Fastest is __MiniSignals__*


1..26
# tests 26
# pass  26

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

    Theoretical max x 1,173,289 ops/sec ±33.57% (10 runs sampled) *burn in*
    MiniSignals x 803,342 ops/sec ±2.11% (10 runs sampled)
    ReactiveProperty x 717,176 ops/sec ±7.49% (10 runs sampled)
    dripEmitter x 548,720 ops/sec ±5.45% (10 runs sampled)
    EventEmitter2 x 521,665 ops/sec ±5.49% (10 runs sampled)
    event-signal x 527,433 ops/sec ±13.17% (10 runs sampled)
    RXJS x 492,089 ops/sec ±7.96% (10 runs sampled)
    EventEmitter3 x 452,080 ops/sec ±7.88% (10 runs sampled)
    signal-lite x 441,496 ops/sec ±6.21% (10 runs sampled)
    EventEmitter x 394,242 ops/sec ±5.40% (10 runs sampled)
    JS-Signals x 394,505 ops/sec ±6.89% (10 runs sampled)
    signal-emitter x 343,662 ops/sec ±9.49% (10 runs sampled)
    dripEmitterEnhanced x 346,545 ops/sec ±15.74% (10 runs sampled)
    minivents x 279,053 ops/sec ±9.58% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 6,924,988 ops/sec ±31.61% (10 runs sampled) *burn in*
    MiniSignals x 3,614,870 ops/sec ±5.04% (10 runs sampled)
    signal-lite x 1,286,801 ops/sec ±4.02% (10 runs sampled)
    EventEmitter2 x 1,245,437 ops/sec ±12.48% (10 runs sampled)
    EventEmitter x 1,181,459 ops/sec ±12.88% (10 runs sampled)
    EventEmitter3 x 1,116,955 ops/sec ±8.62% (10 runs sampled)
    JS-Signals x 955,860 ops/sec ±3.88% (10 runs sampled)
    minivents x 843,851 ops/sec ±4.83% (10 runs sampled)
    dripEmitterEnhanced x 812,777 ops/sec ±18.81% (10 runs sampled)
    signal-emitter x 469,704 ops/sec ±4.01% (10 runs sampled)

*Fastest is __MiniSignals__*


1..20
# tests 20
# pass  20

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

    Theoretical max x 2,598,308 ops/sec ±36.40% (10 runs sampled) *burn in*
    MiniSignals x 1,015,353 ops/sec ±2.76% (10 runs sampled)
    event-signal x 846,243 ops/sec ±3.60% (10 runs sampled)
    ReactiveProperty x 860,911 ops/sec ±6.25% (10 runs sampled)
    EventDispatcher x 758,716 ops/sec ±5.01% (10 runs sampled)
    RXJS x 682,534 ops/sec ±6.05% (10 runs sampled)
    dripEmitter x 720,769 ops/sec ±14.32% (10 runs sampled)
    EventEmitter2 x 614,094 ops/sec ±9.20% (10 runs sampled)
    EventEmitter3 x 576,878 ops/sec ±6.56% (10 runs sampled)
    signal-lite x 504,025 ops/sec ±5.48% (10 runs sampled)
    EventEmitter x 480,495 ops/sec ±6.33% (10 runs sampled)
    JS-Signals x 384,781 ops/sec ±2.79% (10 runs sampled)
    dripEmitterEnhanced x 402,359 ops/sec ±11.47% (10 runs sampled)
    signal-emitter x 241,678 ops/sec ±3.32% (10 runs sampled)

*Fastest is __MiniSignals__*


1..28
# tests 28
# pass  28

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

    Theoretical max x 9,950,376 ops/sec ±65.94% (10 runs sampled) *burn in*
    MiniSignals x 3,531,702 ops/sec ±2.71% (10 runs sampled)
    event-signal x 2,954,314 ops/sec ±7.47% (10 runs sampled)
    dripEmitter x 2,440,443 ops/sec ±11.23% (10 runs sampled)
    RXJS x 2,227,537 ops/sec ±3.31% (10 runs sampled)
    ReactiveProperty x 2,078,538 ops/sec ±6.69% (10 runs sampled)
    EventEmitter2 x 2,007,644 ops/sec ±9.96% (10 runs sampled)
    EventEmitter3 x 1,769,042 ops/sec ±7.85% (10 runs sampled)
    signal-lite x 1,688,595 ops/sec ±7.39% (10 runs sampled)
    observable x 1,499,970 ops/sec ±3.23% (10 runs sampled)
    EventEmitter x 1,651,527 ops/sec ±15.45% (10 runs sampled)
    observ x 1,459,022 ops/sec ±2.60% (10 runs sampled)
    d3-dispatch x 1,449,760 ops/sec ±7.68% (10 runs sampled)
    JS-Signals x 1,229,729 ops/sec ±3.83% (10 runs sampled)
    minivents x 1,192,526 ops/sec ±8.16% (10 runs sampled)
    dripEmitterEnhanced x 1,189,905 ops/sec ±11.66% (10 runs sampled)
    signal-emitter x 754,750 ops/sec ±4.24% (10 runs sampled)
    namespace-emitter x 689,546 ops/sec ±6.88% (10 runs sampled)

*Fastest is __MiniSignals__*


1..36
# tests 36
# pass  36

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

    Theoretical max x 2,726,236 ops/sec ±29.78% (10 runs sampled) *burn in*
    MiniSignals x 641,347 ops/sec ±19.92% (10 runs sampled)
    EventEmitter2 x 501,888 ops/sec ±13.28% (10 runs sampled)
    signal-lite x 458,926 ops/sec ±4.33% (10 runs sampled)
    EventEmitter3 x 432,923 ops/sec ±7.23% (10 runs sampled)
    EventEmitter x 386,519 ops/sec ±9.27% (10 runs sampled)
    JS-Signals x 313,478 ops/sec ±5.06% (10 runs sampled)
    dripEmitterEnhanced x 302,646 ops/sec ±11.95% (10 runs sampled)
    signal-emitter x 172,892 ops/sec ±3.90% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter2__*


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

    EventEmitter3 x 78,786,813 ops/sec ±8.66% (10 runs sampled)
    Theoretical max x 60,288,715 ops/sec ±3.48% (10 runs sampled) *burn in*
    EventDispatcher x 40,591,975 ops/sec ±33.91% (10 runs sampled)
    DripEmitter x 23,695,595 ops/sec ±4.12% (10 runs sampled)
    MiniSignals x 34,669,958 ops/sec ±52.35% (10 runs sampled)
    JS-Signals x 19,481,634 ops/sec ±1.95% (10 runs sampled)
    EventEmitter2 x 18,637,698 ops/sec ±3.85% (10 runs sampled)
    EventEmitter x 20,010,172 ops/sec ±33.49% (10 runs sampled)
    DripEmitterEnhanced x 10,903,042 ops/sec ±20.42% (10 runs sampled)
    ReactiveProperty x 5,417,752 ops/sec ±16.87% (10 runs sampled)

*Fastest is __EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

