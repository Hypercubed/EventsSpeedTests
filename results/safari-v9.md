# Safari 9.0.2 on OS X 10.11.2

ok 1 (unnamed assert)

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

    dripEmitter x 8,706,170 ops/sec ±3.34% (10 runs sampled)
    EventDispatcher x 3,601,816 ops/sec ±13.07% (10 runs sampled)
    MiniSignals x 3,807,824 ops/sec ±23.47% (10 runs sampled)
    ReactiveProperty x 1,647,908 ops/sec ±9.76% (10 runs sampled)
    EventEmitter3 x 1,488,972 ops/sec ±2.81% (10 runs sampled)
    JS-Signals x 899,317 ops/sec ±3.97% (10 runs sampled)
    EventEmitter x 877,567 ops/sec ±10.73% (10 runs sampled)
    dripEmitterEnhanced x 753,232 ops/sec ±7.17% (10 runs sampled)
    EventEmitter2 x 638,561 ops/sec ±9.40% (10 runs sampled)

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

    Theoretical max x 1,646,656 ops/sec ±34.24% (10 runs sampled) *burn in*
    event-signal x 911,414 ops/sec ±5.39% (10 runs sampled)
    ReactiveProperty x 725,432 ops/sec ±6.90% (10 runs sampled)
    MiniSignals x 757,461 ops/sec ±20.75% (10 runs sampled)
    RXJS x 641,765 ops/sec ±4.12% (10 runs sampled)
    dripEmitter x 668,818 ops/sec ±13.69% (10 runs sampled)
    EventEmitter2 x 620,461 ops/sec ±10.05% (10 runs sampled)
    signal-lite x 538,030 ops/sec ±2.27% (10 runs sampled)
    EventEmitter x 426,891 ops/sec ±5.83% (10 runs sampled)
    EventEmitter3 x 439,437 ops/sec ±11.45% (10 runs sampled)
    JS-Signals x 403,161 ops/sec ±3.46% (10 runs sampled)
    dripEmitterEnhanced x 361,817 ops/sec ±9.70% (10 runs sampled)
    signal-emitter x 240,093 ops/sec ±2.60% (10 runs sampled)

*Fastest is __event-signal, MiniSignals__*


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

    Theoretical max x 4,527,128 ops/sec ±17.75% (10 runs sampled) *burn in*
    MiniSignals x 3,312,712 ops/sec ±4.95% (10 runs sampled)
    event-signal x 2,761,934 ops/sec ±7.17% (10 runs sampled)
    RXJS x 1,937,633 ops/sec ±4.33% (10 runs sampled)
    ReactiveProperty x 1,977,917 ops/sec ±7.24% (10 runs sampled)
    dripEmitter x 2,071,743 ops/sec ±13.75% (10 runs sampled)
    EventEmitter2 x 1,877,405 ops/sec ±12.72% (10 runs sampled)
    signal-lite x 1,688,175 ops/sec ±2.95% (10 runs sampled)
    EventEmitter x 1,566,771 ops/sec ±9.07% (10 runs sampled)
    EventEmitter3 x 1,628,369 ops/sec ±15.28% (10 runs sampled)
    JS-Signals x 1,080,081 ops/sec ±8.10% (10 runs sampled)
    dripEmitterEnhanced x 1,008,216 ops/sec ±17.57% (10 runs sampled)
    signal-emitter x 689,995 ops/sec ±2.94% (10 runs sampled)

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

    Theoretical max x 5,899,612 ops/sec ±15.65% (10 runs sampled) *burn in*
    event-signal x 3,483,115 ops/sec ±7.64% (10 runs sampled)
    MiniSignals x 3,596,321 ops/sec ±18.16% (10 runs sampled)
    dripEmitter x 2,125,966 ops/sec ±8.17% (10 runs sampled)
    EventEmitter2 x 1,890,995 ops/sec ±7.17% (10 runs sampled)
    EventEmitter3 x 1,938,258 ops/sec ±10.18% (10 runs sampled)
    ReactiveProperty x 1,854,541 ops/sec ±6.97% (10 runs sampled)
    signal-lite x 1,798,220 ops/sec ±5.60% (10 runs sampled)
    RXJS x 1,730,046 ops/sec ±5.32% (10 runs sampled)
    EventEmitter x 1,391,020 ops/sec ±16.32% (10 runs sampled)
    JS-Signals x 1,159,375 ops/sec ±10.60% (10 runs sampled)
    dripEmitterEnhanced x 961,717 ops/sec ±10.35% (10 runs sampled)
    signal-emitter x 703,272 ops/sec ±6.32% (10 runs sampled)

*Fastest is __event-signal, MiniSignals__*


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

    Theoretical max x 1,674,542 ops/sec ±33.24% (10 runs sampled) *burn in*
    MiniSignals x 776,469 ops/sec ±6.50% (10 runs sampled)
    event-signal x 718,442 ops/sec ±4.22% (10 runs sampled)
    EventEmitter2 x 719,371 ops/sec ±6.04% (10 runs sampled)
    EventEmitter3 x 652,587 ops/sec ±4.02% (10 runs sampled)
    dripEmitter x 668,126 ops/sec ±8.92% (10 runs sampled)
    ReactiveProperty x 656,333 ops/sec ±9.97% (10 runs sampled)
    EventEmitter x 522,365 ops/sec ±5.37% (10 runs sampled)
    dripEmitterEnhanced x 488,784 ops/sec ±8.74% (10 runs sampled)
    RXJS x 461,080 ops/sec ±6.95% (10 runs sampled)
    JS-Signals x 400,920 ops/sec ±6.35% (10 runs sampled)
    signal-lite x 424,137 ops/sec ±13.05% (10 runs sampled)
    signal-emitter x 373,359 ops/sec ±5.18% (10 runs sampled)
    minivents x 285,979 ops/sec ±17.26% (10 runs sampled)

*Fastest is __MiniSignals, EventEmitter2__*


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

    Theoretical max x 7,781,978 ops/sec ±28.24% (10 runs sampled) *burn in*
    MiniSignals x 3,203,042 ops/sec ±10.32% (10 runs sampled)
    signal-lite x 1,285,914 ops/sec ±4.43% (10 runs sampled)
    EventEmitter2 x 1,305,924 ops/sec ±11.52% (10 runs sampled)
    EventEmitter x 1,204,635 ops/sec ±9.19% (10 runs sampled)
    EventEmitter3 x 949,783 ops/sec ±9.26% (10 runs sampled)
    JS-Signals x 828,596 ops/sec ±6.13% (10 runs sampled)
    dripEmitterEnhanced x 820,900 ops/sec ±16.34% (10 runs sampled)
    minivents x 767,108 ops/sec ±16.26% (10 runs sampled)
    signal-emitter x 419,311 ops/sec ±11.22% (10 runs sampled)

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

    Theoretical max x 2,076,691 ops/sec ±32.69% (10 runs sampled) *burn in*
    ReactiveProperty x 742,023 ops/sec ±8.37% (10 runs sampled)
    event-signal x 695,493 ops/sec ±7.62% (10 runs sampled)
    dripEmitter x 663,384 ops/sec ±9.93% (10 runs sampled)
    EventEmitter2 x 643,013 ops/sec ±10.28% (10 runs sampled)
    MiniSignals x 661,050 ops/sec ±18.75% (10 runs sampled)
    RXJS x 564,545 ops/sec ±9.34% (10 runs sampled)
    EventEmitter3 x 531,900 ops/sec ±5.94% (10 runs sampled)
    EventDispatcher x 515,302 ops/sec ±12.00% (10 runs sampled)
    EventEmitter x 472,177 ops/sec ±6.12% (10 runs sampled)
    signal-lite x 412,568 ops/sec ±9.67% (10 runs sampled)
    JS-Signals x 358,243 ops/sec ±4.77% (10 runs sampled)
    dripEmitterEnhanced x 305,144 ops/sec ±10.94% (10 runs sampled)
    signal-emitter x 208,693 ops/sec ±6.64% (10 runs sampled)

*Fastest is __ReactiveProperty, event-signal, dripEmitter, MiniSignals__*


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

    Theoretical max x 20,970,549 ops/sec ±35.49% (5 runs sampled) *burn in*
    MiniSignals x 2,972,262 ops/sec ±14.27% (5 runs sampled)
    event-signal x 2,921,947 ops/sec ±13.22% (5 runs sampled)
    dripEmitter x 2,569,087 ops/sec ±12.39% (5 runs sampled)
    EventEmitter2 x 2,153,653 ops/sec ±5.66% (5 runs sampled)
    RXJS x 1,953,662 ops/sec ±10.00% (5 runs sampled)
    ReactiveProperty x 1,997,739 ops/sec ±16.27% (5 runs sampled)
    EventEmitter3 x 1,773,317 ops/sec ±5.21% (5 runs sampled)
    EventEmitter x 1,481,363 ops/sec ±23.25% (5 runs sampled)
    signal-lite x 1,302,880 ops/sec ±8.72% (5 runs sampled)
    observ x 1,288,100 ops/sec ±8.17% (5 runs sampled)
    JS-Signals x 1,128,752 ops/sec ±2.93% (5 runs sampled)
    observable x 1,199,719 ops/sec ±14.55% (5 runs sampled)
    d3-dispatch x 1,135,252 ops/sec ±21.60% (5 runs sampled)
    dripEmitterEnhanced x 1,089,643 ops/sec ±21.04% (5 runs sampled)
    minivents x 994,298 ops/sec ±19.74% (5 runs sampled)
    namespace-emitter x 756,644 ops/sec ±7.02% (5 runs sampled)
    signal-emitter x 658,686 ops/sec ±8.63% (5 runs sampled)

*Fastest is __MiniSignals, event-signal, dripEmitter__*


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

    Theoretical max x 1,936,388 ops/sec ±33.67% (10 runs sampled) *burn in*
    MiniSignals x 842,301 ops/sec ±19.09% (10 runs sampled)
    EventEmitter2 x 435,969 ops/sec ±9.45% (10 runs sampled)
    EventEmitter3 x 410,590 ops/sec ±7.21% (10 runs sampled)
    signal-lite x 390,434 ops/sec ±13.79% (10 runs sampled)
    EventEmitter x 329,120 ops/sec ±14.99% (10 runs sampled)
    JS-Signals x 285,181 ops/sec ±5.55% (10 runs sampled)
    dripEmitterEnhanced x 270,029 ops/sec ±9.29% (10 runs sampled)
    signal-emitter x 156,559 ops/sec ±11.76% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    EventEmitter3 x 75,528,719 ops/sec ±4.69% (10 runs sampled)
    Theoretical max x 51,491,176 ops/sec ±4.30% (10 runs sampled) *burn in*
    EventDispatcher x 29,520,668 ops/sec ±28.75% (10 runs sampled)
    MiniSignals x 33,333,573 ops/sec ±51.82% (10 runs sampled)
    DripEmitter x 22,640,240 ops/sec ±4.70% (10 runs sampled)
    EventEmitter x 20,089,683 ops/sec ±28.60% (10 runs sampled)
    JS-Signals x 15,996,503 ops/sec ±4.91% (10 runs sampled)
    EventEmitter2 x 15,686,629 ops/sec ±3.92% (10 runs sampled)
    DripEmitterEnhanced x 10,722,656 ops/sec ±13.54% (10 runs sampled)
    ReactiveProperty x 4,677,462 ops/sec ±12.58% (10 runs sampled)

*Fastest is __EventEmitter3__*


1..20
# tests 20
# pass  20

# ok
