TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 4.4.4 on Darwin 64-bit

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

    dripEmitter x 21,286,959 ops/sec ±7.43% (10 runs sampled)
    MiniSignals x 15,590,748 ops/sec ±2.53% (10 runs sampled)
    EventDispatcher x 4,448,321 ops/sec ±4.27% (10 runs sampled)
    EventEmitter x 3,378,542 ops/sec ±23.18% (10 runs sampled)
    ReactiveProperty x 2,768,752 ops/sec ±15.67% (10 runs sampled)
    EventEmitter3 x 1,655,187 ops/sec ±3.25% (10 runs sampled)
    EventEmitter2 x 1,140,466 ops/sec ±6.04% (10 runs sampled)
    JS-Signals x 625,796 ops/sec ±7.71% (10 runs sampled)
    dripEmitterEnhanced x 167,301 ops/sec ±5.08% (10 runs sampled)

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

    Theoretical max x 13,201,141 ops/sec ±6.00% (10 runs sampled) *burn in*
    MiniSignals x 6,874,636 ops/sec ±6.61% (10 runs sampled)
    signal-lite x 6,287,513 ops/sec ±7.47% (10 runs sampled)
    EventEmitter3 x 4,861,470 ops/sec ±2.28% (10 runs sampled)
    dripEmitter x 4,714,727 ops/sec ±3.24% (10 runs sampled)
    ReactiveProperty x 5,057,050 ops/sec ±13.83% (10 runs sampled)
    EventEmitter x 3,739,960 ops/sec ±4.81% (10 runs sampled)
    EventEmitter2 x 1,690,206 ops/sec ±5.75% (10 runs sampled)
    event-signal x 1,873,469 ops/sec ±18.02% (10 runs sampled)
    RXJS x 1,462,302 ops/sec ±5.06% (10 runs sampled)
    dripEmitterEnhanced x 788,700 ops/sec ±6.07% (10 runs sampled)
    signal-emitter x 205,504 ops/sec ±8.11% (10 runs sampled)
    JS-Signals x 179,680 ops/sec ±13.12% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 4,114,927 ops/sec ±5.72% (10 runs sampled) *burn in*
    dripEmitter x 3,238,865 ops/sec ±2.79% (10 runs sampled)
    EventEmitter x 2,907,691 ops/sec ±5.60% (10 runs sampled)
    EventEmitter3 x 2,974,534 ops/sec ±8.93% (10 runs sampled)
    ReactiveProperty x 2,644,722 ops/sec ±11.86% (10 runs sampled)
    RXJS x 2,294,454 ops/sec ±5.32% (10 runs sampled)
    EventEmitter2 x 2,271,039 ops/sec ±6.10% (10 runs sampled)
    signal-lite x 1,926,861 ops/sec ±4.52% (10 runs sampled)
    dripEmitterEnhanced x 1,754,357 ops/sec ±5.25% (10 runs sampled)
    event-signal x 1,642,882 ops/sec ±59.01% (10 runs sampled)
    JS-Signals x 447,189 ops/sec ±4.75% (10 runs sampled)
    MiniSignals x 541,144 ops/sec ±109.36% (10 runs sampled)
    signal-emitter x 101,962 ops/sec ±30.78% (10 runs sampled)

*Fastest is __dripEmitter, EventEmitter3__*


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

    MiniSignals x 19,390,207 ops/sec ±1.83% (10 runs sampled)
    signal-lite x 18,581,889 ops/sec ±4.54% (10 runs sampled)
    EventEmitter3 x 14,178,247 ops/sec ±5.79% (10 runs sampled)
    event-signal x 6,447,151 ops/sec ±4.99% (10 runs sampled)
    Theoretical max x 3,944,303 ops/sec ±11.23% (10 runs sampled) *burn in*
    dripEmitter x 3,267,426 ops/sec ±4.86% (10 runs sampled)
    ReactiveProperty x 3,162,866 ops/sec ±4.37% (10 runs sampled)
    EventEmitter x 2,956,987 ops/sec ±4.64% (10 runs sampled)
    RXJS x 2,342,976 ops/sec ±3.33% (10 runs sampled)
    EventEmitter2 x 2,299,190 ops/sec ±7.24% (10 runs sampled)
    dripEmitterEnhanced x 1,871,331 ops/sec ±6.20% (10 runs sampled)
    JS-Signals x 620,865 ops/sec ±3.36% (10 runs sampled)
    signal-emitter x 617,610 ops/sec ±5.45% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    Theoretical max x 5,526,862 ops/sec ±4.02% (10 runs sampled) *burn in*
    MiniSignals x 4,642,418 ops/sec ±3.58% (10 runs sampled)
    signal-lite x 4,307,683 ops/sec ±2.94% (10 runs sampled)
    dripEmitter x 4,303,634 ops/sec ±4.63% (10 runs sampled)
    EventEmitter3 x 3,925,244 ops/sec ±3.93% (10 runs sampled)
    ReactiveProperty x 3,867,525 ops/sec ±4.91% (10 runs sampled)
    EventEmitter x 3,771,199 ops/sec ±4.68% (10 runs sampled)
    event-signal x 2,933,734 ops/sec ±6.19% (10 runs sampled)
    EventEmitter2 x 2,506,363 ops/sec ±6.41% (10 runs sampled)
    dripEmitterEnhanced x 1,907,648 ops/sec ±5.90% (10 runs sampled)
    RXJS x 1,680,056 ops/sec ±5.64% (10 runs sampled)
    signal-emitter x 474,653 ops/sec ±8.48% (10 runs sampled)
    JS-Signals x 386,622 ops/sec ±7.75% (10 runs sampled)
    minivents x 92,995 ops/sec ±5.36% (10 runs sampled)

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

    Theoretical max x 19,295,346 ops/sec ±5.27% (10 runs sampled) *burn in*
    signal-lite x 13,654,522 ops/sec ±5.34% (10 runs sampled)
    MiniSignals x 14,031,657 ops/sec ±9.41% (10 runs sampled)
    EventEmitter3 x 2,410,526 ops/sec ±2.84% (10 runs sampled)
    EventEmitter x 2,359,513 ops/sec ±3.73% (10 runs sampled)
    EventEmitter2 x 1,926,885 ops/sec ±4.62% (10 runs sampled)
    dripEmitterEnhanced x 1,505,346 ops/sec ±5.34% (10 runs sampled)
    signal-emitter x 348,580 ops/sec ±6.02% (10 runs sampled)
    JS-Signals x 233,317 ops/sec ±5.89% (10 runs sampled)
    minivents x 139,905 ops/sec ±6.00% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    Theoretical max x 11,432,247 ops/sec ±4.10% (10 runs sampled) *burn in*
    MiniSignals x 6,289,043 ops/sec ±4.60% (10 runs sampled)
    signal-lite x 6,093,054 ops/sec ±6.94% (10 runs sampled)
    ReactiveProperty x 5,682,958 ops/sec ±5.52% (10 runs sampled)
    dripEmitter x 4,783,940 ops/sec ±7.45% (10 runs sampled)
    EventEmitter3 x 4,424,107 ops/sec ±4.95% (10 runs sampled)
    EventEmitter x 3,508,857 ops/sec ±3.44% (10 runs sampled)
    EventDispatcher x 2,654,601 ops/sec ±13.73% (10 runs sampled)
    event-signal x 2,003,068 ops/sec ±5.09% (10 runs sampled)
    EventEmitter2 x 1,669,671 ops/sec ±4.41% (10 runs sampled)
    RXJS x 1,476,075 ops/sec ±6.06% (10 runs sampled)
    dripEmitterEnhanced x 896,987 ops/sec ±9.96% (10 runs sampled)
    signal-emitter x 196,344 ops/sec ±4.54% (10 runs sampled)
    JS-Signals x 181,640 ops/sec ±9.03% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    MiniSignals x 18,691,450 ops/sec ±3.47% (10 runs sampled)
    Theoretical max x 21,405,937 ops/sec ±50.20% (10 runs sampled) *burn in*
    signal-lite x 15,468,795 ops/sec ±9.66% (10 runs sampled)
    ReactiveProperty x 14,255,871 ops/sec ±9.06% (10 runs sampled)
    dripEmitter x 13,806,621 ops/sec ±6.36% (10 runs sampled)
    EventEmitter3 x 13,172,417 ops/sec ±6.14% (10 runs sampled)
    EventEmitter x 10,096,276 ops/sec ±5.38% (10 runs sampled)
    event-signal x 6,020,389 ops/sec ±4.90% (10 runs sampled)
    EventEmitter2 x 4,898,577 ops/sec ±5.25% (10 runs sampled)
    observ x 5,194,194 ops/sec ±31.55% (10 runs sampled)
    RXJS x 4,240,468 ops/sec ±11.13% (10 runs sampled)
    d3-dispatch x 4,037,577 ops/sec ±6.63% (10 runs sampled)
    dripEmitterEnhanced x 3,068,496 ops/sec ±3.92% (10 runs sampled)
    observable x 1,525,887 ops/sec ±4.93% (10 runs sampled)
    JS-Signals x 556,614 ops/sec ±2.60% (10 runs sampled)
    signal-emitter x 571,442 ops/sec ±7.36% (10 runs sampled)
    namespace-emitter x 513,203 ops/sec ±5.85% (10 runs sampled)
    minivents x 411,346 ops/sec ±7.90% (10 runs sampled)

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

    Theoretical max x 10,073,841 ops/sec ±9.00% (10 runs sampled) *burn in*
    signal-lite x 5,342,842 ops/sec ±4.70% (10 runs sampled)
    MiniSignals x 5,297,294 ops/sec ±6.19% (10 runs sampled)
    EventEmitter x 2,661,908 ops/sec ±5.56% (10 runs sampled)
    EventEmitter3 x 2,374,015 ops/sec ±3.67% (10 runs sampled)
    EventEmitter2 x 957,601 ops/sec ±12.56% (10 runs sampled)
    dripEmitterEnhanced x 680,202 ops/sec ±6.09% (10 runs sampled)
    JS-Signals x 141,624 ops/sec ±2.81% (10 runs sampled)
    signal-emitter x 144,606 ops/sec ±5.27% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*


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

    EventDispatcher x 59,629,161 ops/sec ±4.59% (10 runs sampled)
    EventEmitter3 x 58,921,627 ops/sec ±4.46% (10 runs sampled)
    DripEmitter x 56,527,289 ops/sec ±4.81% (10 runs sampled)
    Theoretical max x 56,597,518 ops/sec ±9.28% (10 runs sampled) *burn in*
    MiniSignals x 38,068,470 ops/sec ±10.54% (10 runs sampled)
    EventEmitter2 x 34,777,679 ops/sec ±3.81% (10 runs sampled)
    EventEmitter x 28,460,004 ops/sec ±6.13% (10 runs sampled)
    DripEmitterEnhanced x 25,086,782 ops/sec ±2.11% (10 runs sampled)
    JS-Signals x 2,046,128 ops/sec ±13.24% (10 runs sampled)
    ReactiveProperty x 1,445,560 ops/sec ±10.43% (10 runs sampled)

*Fastest is __EventDispatcher, EventEmitter3, DripEmitter__*


1..20
# tests 20
# pass  20

# ok

