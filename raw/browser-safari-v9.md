
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
ok 9 push-stream runs without error
ok 10 push-stream constructed an object
ok 11 DripEmitter runs without error
ok 12 DripEmitter constructed an object
ok 13 DripEmitterEnhanced runs without error
ok 14 DripEmitterEnhanced constructed an object
ok 15 ReactiveProperty runs without error
ok 16 ReactiveProperty constructed an object
ok 17 JS-Signals runs without error
ok 18 JS-Signals constructed an object
ok 19 MiniSignals runs without error
ok 20 MiniSignals constructed an object
ok 21 EventDispatcher runs without error
ok 22 EventDispatcher constructed an object
ok 23 pull-notify runs without error
ok 24 pull-notify constructed an object
## benchmarks

    EventEmitter3 x 74,875,296 ops/sec ±2.55% (10 runs sampled)
    Theoretical max x 57,271,445 ops/sec ±4.81% (10 runs sampled) *burn in*
    EventDispatcher x 40,641,701 ops/sec ±32.66% (10 runs sampled)
    MiniSignals x 32,398,302 ops/sec ±57.59% (10 runs sampled)
    DripEmitter x 21,903,586 ops/sec ±7.75% (10 runs sampled)
    JS-Signals x 18,811,055 ops/sec ±3.72% (10 runs sampled)
    EventEmitter2 x 18,085,541 ops/sec ±2.93% (10 runs sampled)
    EventEmitter x 22,776,734 ops/sec ±40.30% (10 runs sampled)
    pull-notify x 12,989,340 ops/sec ±2.58% (10 runs sampled)
    push-stream x 10,928,055 ops/sec ±30.59% (10 runs sampled)
    DripEmitterEnhanced x 9,152,576 ops/sec ±18.34% (10 runs sampled)
    ReactiveProperty x 5,386,577 ops/sec ±14.83% (10 runs sampled)

*Fastest is __EventEmitter3__*


1..24
# tests 24
# pass  24

# ok


TAP version 13
# emit variable values
ok 1 Theoretical max runs without error
ok 2 handle called four times
ok 3 handle2 called four times
ok 4 EventEmitter runs without error
ok 5 handle called four times
ok 6 handle2 called four times
ok 7 EventEmitter2 runs without error
ok 8 handle called four times
ok 9 handle2 called four times
ok 10 EventEmitter3 runs without error
ok 11 handle called four times
ok 12 handle2 called four times
ok 13 dripEmitterEnhanced runs without error
ok 14 handle called four times
ok 15 handle2 called four times
ok 16 JS-Signals runs without error
ok 17 handle called four times
ok 18 handle2 called four times
ok 19 MiniSignals runs without error
ok 20 handle called four times
ok 21 handle2 called four times
ok 22 signal-emitter runs without error
ok 23 handle called four times
ok 24 handle2 called four times
ok 25 signal-lite runs without error
ok 26 handle called four times
ok 27 handle2 called four times
## benchmarks

    Theoretical max x 1,789,546 ops/sec ±36.42% (10 runs sampled) *burn in*
    MiniSignals x 641,186 ops/sec ±20.76% (10 runs sampled)
    EventEmitter2 x 465,735 ops/sec ±14.33% (10 runs sampled)
    signal-lite x 430,622 ops/sec ±5.76% (10 runs sampled)
    EventEmitter3 x 408,597 ops/sec ±11.15% (10 runs sampled)
    EventEmitter x 360,302 ops/sec ±7.40% (10 runs sampled)
    JS-Signals x 298,564 ops/sec ±3.71% (10 runs sampled)
    dripEmitterEnhanced x 268,920 ops/sec ±12.19% (10 runs sampled)
    signal-emitter x 173,713 ops/sec ±2.43% (10 runs sampled)

*Fastest is __MiniSignals__*


1..27
# tests 27
# pass  27

# ok


TAP version 13
# emit with context
ok 1 Theoretical max runs without error
ok 2 handle called one time
ok 3 handle2 called one time
ok 4 EventEmitter runs without error
ok 5 handle called one time
ok 6 handle2 called one time
ok 7 EventEmitter2 runs without error
ok 8 handle called one time
ok 9 handle2 called one time
ok 10 EventEmitter3 runs without error
ok 11 handle called one time
ok 12 handle2 called one time
ok 13 push-stream runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitter runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 RXJS runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 ReactiveProperty runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 JS-Signals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 MiniSignals runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 signal-emitter runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 event-signal runs without error
ok 38 handle called one time
ok 39 handle2 called one time
ok 40 signal-lite runs without error
ok 41 handle called one time
ok 42 handle2 called one time
ok 43 pull-notify runs without error
ok 44 handle called one time
ok 45 handle2 called one time
## benchmarks

    Theoretical max x 5,910,044 ops/sec ±17.49% (10 runs sampled) *burn in*
    MiniSignals x 4,828,920 ops/sec ±2.83% (10 runs sampled)
    push-stream x 3,905,559 ops/sec ±5.84% (10 runs sampled)
    event-signal x 3,919,101 ops/sec ±7.08% (10 runs sampled)
    dripEmitter x 2,506,584 ops/sec ±12.15% (10 runs sampled)
    RXJS x 2,152,654 ops/sec ±3.80% (10 runs sampled)
    ReactiveProperty x 2,166,425 ops/sec ±5.66% (10 runs sampled)
    EventEmitter3 x 2,077,086 ops/sec ±6.93% (10 runs sampled)
    signal-lite x 1,953,904 ops/sec ±3.82% (10 runs sampled)
    EventEmitter2 x 2,079,934 ops/sec ±11.82% (10 runs sampled)
    EventEmitter x 1,643,866 ops/sec ±5.88% (10 runs sampled)
    JS-Signals x 1,367,975 ops/sec ±3.20% (10 runs sampled)
    dripEmitterEnhanced x 1,173,612 ops/sec ±10.44% (10 runs sampled)
    pull-notify x 815,746 ops/sec ±3.70% (10 runs sampled)
    signal-emitter x 814,238 ops/sec ±5.79% (10 runs sampled)

*Fastest is __MiniSignals__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# emit one value - two listeners
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle once
ok 3 Theoretical max called handle2 once
ok 4 EventEmitter runs without error
ok 5 EventEmitter called handle once
ok 6 EventEmitter called handle2 once
ok 7 EventEmitter2 runs without error
ok 8 EventEmitter2 called handle once
ok 9 EventEmitter2 called handle2 once
ok 10 EventEmitter3 runs without error
ok 11 EventEmitter3 called handle once
ok 12 EventEmitter3 called handle2 once
ok 13 dripEmitter runs without error
ok 14 dripEmitter called handle once
ok 15 dripEmitter called handle2 once
ok 16 push-stream-patch runs without error
ok 17 push-stream-patch called handle once
ok 18 push-stream-patch called handle2 once
ok 19 push-stream runs without error
ok 20 push-stream called handle once
ok 21 push-stream called handle2 once
ok 22 dripEmitterEnhanced runs without error
ok 23 dripEmitterEnhanced called handle once
ok 24 dripEmitterEnhanced called handle2 once
ok 25 d3-dispatch runs without error
ok 26 d3-dispatch called handle once
ok 27 d3-dispatch called handle2 once
ok 28 namespace-emitter runs without error
ok 29 namespace-emitter called handle once
ok 30 namespace-emitter called handle2 once
ok 31 ReactiveProperty runs without error
ok 32 ReactiveProperty called handle once
ok 33 ReactiveProperty called handle2 once
ok 34 observable runs without error
ok 35 observable called handle once
ok 36 observable called handle2 once
ok 37 observ runs without error
ok 38 observ called handle once
ok 39 observ called handle2 once
ok 40 RXJS runs without error
ok 41 RXJS called handle once
ok 42 RXJS called handle2 once
ok 43 JS-Signals runs without error
ok 44 JS-Signals called handle once
ok 45 JS-Signals called handle2 once
ok 46 MiniSignals runs without error
ok 47 MiniSignals called handle once
ok 48 MiniSignals called handle2 once
ok 49 MicroSignals runs without error
ok 50 MicroSignals called handle once
ok 51 MicroSignals called handle2 once
ok 52 signal-emitter runs without error
ok 53 signal-emitter called handle once
ok 54 signal-emitter called handle2 once
ok 55 event-signal runs without error
ok 56 event-signal called handle once
ok 57 event-signal called handle2 once
ok 58 signal-lite runs without error
ok 59 signal-lite called handle once
ok 60 signal-lite called handle2 once
ok 61 minivents runs without error
ok 62 minivents called handle once
ok 63 minivents called handle2 once
ok 64 pull-notify runs without error
ok 65 pull-notify called handle once
ok 66 pull-notify called handle2 once
## benchmarks

    Theoretical max x 8,115,001 ops/sec ±53.11% (10 runs sampled) *burn in*
    push-stream-patch x 3,741,413 ops/sec ±6.70% (10 runs sampled)
    MiniSignals x 3,500,296 ops/sec ±1.60% (10 runs sampled)
    push-stream x 3,720,787 ops/sec ±10.11% (10 runs sampled)
    MicroSignals x 3,531,221 ops/sec ±15.83% (10 runs sampled)
    event-signal x 2,932,692 ops/sec ±9.18% (10 runs sampled)
    ReactiveProperty x 2,256,389 ops/sec ±5.40% (10 runs sampled)
    dripEmitter x 2,389,420 ops/sec ±11.97% (10 runs sampled)
    EventEmitter2 x 2,025,764 ops/sec ±11.36% (10 runs sampled)
    RXJS x 2,059,267 ops/sec ±15.83% (10 runs sampled)
    signal-lite x 1,725,501 ops/sec ±3.09% (10 runs sampled)
    EventEmitter x 1,840,861 ops/sec ±16.92% (10 runs sampled)
    EventEmitter3 x 1,670,973 ops/sec ±9.51% (10 runs sampled)
    d3-dispatch x 1,482,124 ops/sec ±5.80% (10 runs sampled)
    observ x 1,387,146 ops/sec ±5.81% (10 runs sampled)
    observable x 1,365,508 ops/sec ±7.21% (10 runs sampled)
    minivents x 1,246,469 ops/sec ±5.30% (10 runs sampled)
    dripEmitterEnhanced x 1,236,656 ops/sec ±9.23% (10 runs sampled)
    JS-Signals x 1,159,638 ops/sec ±13.27% (10 runs sampled)
    pull-notify x 847,834 ops/sec ±7.32% (10 runs sampled)
    signal-emitter x 774,746 ops/sec ±4.91% (10 runs sampled)
    namespace-emitter x 651,786 ops/sec ±10.31% (10 runs sampled)

*Fastest is __push-stream-patch, push-stream, MicroSignals__*


1..66
# tests 66
# pass  66

# ok


TAP version 13
# emit one value - one listener
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle once
ok 3 EventEmitter runs without error
ok 4 EventEmitter called handle once
ok 5 EventEmitter2 runs without error
ok 6 EventEmitter2 called handle once
ok 7 EventEmitter3 runs without error
ok 8 EventEmitter3 called handle once
ok 9 dripEmitter runs without error
ok 10 dripEmitter called handle once
ok 11 barracks runs without error
ok 12 barracks called handle once
ok 13 push-stream runs without error
ok 14 push-stream called handle once
ok 15 push-stream-patch runs without error
ok 16 push-stream-patch called handle once
ok 17 mini-pipe runs without error
ok 18 mini-pipe called handle once
ok 19 dripEmitterEnhanced runs without error
ok 20 dripEmitterEnhanced called handle once
ok 21 d3-dispatch runs without error
ok 22 d3-dispatch called handle once
ok 23 namespace-emitter runs without error
ok 24 namespace-emitter called handle once
ok 25 ReactiveProperty runs without error
ok 26 ReactiveProperty called handle once
ok 27 observable runs without error
ok 28 observable called handle once
ok 29 observ runs without error
ok 30 observ called handle once
ok 31 RXJS runs without error
ok 32 RXJS called handle once
ok 33 JS-Signals runs without error
ok 34 JS-Signals called handle once
ok 35 MiniSignals runs without error
ok 36 MiniSignals called handle once
ok 37 MicroSignals runs without error
ok 38 MicroSignals called handle once
ok 39 signal-emitter runs without error
ok 40 signal-emitter called handle once
ok 41 event-signal runs without error
ok 42 event-signal called handle once
ok 43 signal-lite runs without error
ok 44 signal-lite called handle once
ok 45 minivents runs without error
ok 46 minivents called handle once
ok 47 pull-notify runs without error
ok 48 pull-notify called handle once
## benchmarks

    push-stream-patch x 33,263,565 ops/sec ±32.21% (10 runs sampled)
    MicroSignals x 32,126,005 ops/sec ±34.24% (10 runs sampled)
    push-stream x 31,743,407 ops/sec ±34.02% (10 runs sampled)
    mini-pipe x 21,592,468 ops/sec ±52.18% (10 runs sampled)
    Theoretical max x 22,598,141 ops/sec ±64.71% (10 runs sampled) *burn in*
    event-signal x 7,621,339 ops/sec ±26.24% (10 runs sampled)
    EventEmitter x 7,031,620 ops/sec ±30.35% (10 runs sampled)
    dripEmitter x 6,895,157 ops/sec ±33.16% (10 runs sampled)
    EventEmitter2 x 6,024,829 ops/sec ±31.30% (10 runs sampled)
    MiniSignals x 4,388,464 ops/sec ±16.50% (10 runs sampled)
    RXJS x 3,841,429 ops/sec ±3.78% (10 runs sampled)
    ReactiveProperty x 4,443,485 ops/sec ±22.67% (10 runs sampled)
    signal-lite x 3,427,453 ops/sec ±17.05% (10 runs sampled)
    barracks x 3,714,145 ops/sec ±36.36% (10 runs sampled)
    EventEmitter3 x 2,995,790 ops/sec ±18.36% (10 runs sampled)
    d3-dispatch x 2,512,236 ops/sec ±14.77% (10 runs sampled)
    observable x 2,398,455 ops/sec ±12.09% (10 runs sampled)
    minivents x 2,380,561 ops/sec ±19.54% (10 runs sampled)
    JS-Signals x 1,987,364 ops/sec ±10.07% (10 runs sampled)
    observ x 1,936,168 ops/sec ±10.02% (10 runs sampled)
    pull-notify x 1,595,152 ops/sec ±12.40% (10 runs sampled)
    dripEmitterEnhanced x 1,608,895 ops/sec ±17.24% (10 runs sampled)
    signal-emitter x 888,187 ops/sec ±3.15% (10 runs sampled)
    namespace-emitter x 936,120 ops/sec ±13.58% (10 runs sampled)

*Fastest is __push-stream-patch, MicroSignals, push-stream, mini-pipe__*


1..48
# tests 48
# pass  48

# ok


TAP version 13
# emit many listeners
ok 1 Theoretical max runs without error
ok 2 handels called N times
ok 3 EventEmitter runs without error
ok 4 handels called N times
ok 5 EventEmitter2 runs without error
ok 6 handels called N times
ok 7 EventEmitter3 runs without error
ok 8 handels called N times
ok 9 push-stream runs without error
ok 10 handels called N times
ok 11 dripEmitter runs without error
ok 12 handels called N times
ok 13 dripEmitterEnhanced runs without error
ok 14 handels called N times
ok 15 RXJS runs without error
ok 16 handels called N times
ok 17 ReactiveProperty runs without error
ok 18 handels called N times
ok 19 JS-Signals runs without error
ok 20 handels called N times
ok 21 MiniSignals runs without error
ok 22 handels called N times
ok 23 signal-emitter runs without error
ok 24 handels called N times
ok 25 event-signal runs without error
ok 26 handels called N times
ok 27 signal-lite runs without error
ok 28 handels called N times
ok 29 minivents runs without error
ok 30 handels called N times
## benchmarks

    Theoretical max x 1,689,140 ops/sec ±32.93% (10 runs sampled) *burn in*
    MiniSignals x 853,934 ops/sec ±3.09% (10 runs sampled)
    push-stream x 845,974 ops/sec ±3.69% (10 runs sampled)
    event-signal x 789,962 ops/sec ±3.22% (10 runs sampled)
    ReactiveProperty x 773,784 ops/sec ±6.10% (10 runs sampled)
    EventEmitter2 x 721,695 ops/sec ±6.84% (10 runs sampled)
    EventEmitter3 x 679,567 ops/sec ±5.63% (10 runs sampled)
    dripEmitter x 676,868 ops/sec ±8.92% (10 runs sampled)
    RXJS x 560,893 ops/sec ±2.02% (10 runs sampled)
    EventEmitter x 560,076 ops/sec ±3.82% (10 runs sampled)
    signal-lite x 517,074 ops/sec ±2.62% (10 runs sampled)
    dripEmitterEnhanced x 533,907 ops/sec ±8.72% (10 runs sampled)
    JS-Signals x 438,279 ops/sec ±4.13% (10 runs sampled)
    signal-emitter x 420,322 ops/sec ±3.42% (10 runs sampled)
    minivents x 344,346 ops/sec ±2.99% (10 runs sampled)

*Fastest is __MiniSignals, push-stream__*


1..30
# tests 30
# pass  30

# ok


TAP version 13
# emit with bound function
ok 1 Theoretical max runs without error
ok 2 handle called one time
ok 3 handle2 called one time
ok 4 EventEmitter runs without error
ok 5 handle called one time
ok 6 handle2 called one time
ok 7 EventEmitter2 runs without error
ok 8 handle called one time
ok 9 handle2 called one time
ok 10 EventEmitter3 runs without error
ok 11 handle called one time
ok 12 handle2 called one time
ok 13 push-stream runs without error
ok 14 handle called one time
ok 15 handle2 called one time
ok 16 dripEmitter runs without error
ok 17 handle called one time
ok 18 handle2 called one time
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called one time
ok 21 handle2 called one time
ok 22 RXJS runs without error
ok 23 handle called one time
ok 24 handle2 called one time
ok 25 ReactiveProperty runs without error
ok 26 handle called one time
ok 27 handle2 called one time
ok 28 JS-Signals runs without error
ok 29 handle called one time
ok 30 handle2 called one time
ok 31 MiniSignals runs without error
ok 32 handle called one time
ok 33 handle2 called one time
ok 34 signal-emitter runs without error
ok 35 handle called one time
ok 36 handle2 called one time
ok 37 event-signal runs without error
ok 38 handle called one time
ok 39 handle2 called one time
ok 40 signal-lite runs without error
ok 41 handle called one time
ok 42 handle2 called one time
ok 43 pull-notify runs without error
ok 44 handle called one time
ok 45 handle2 called one time
## benchmarks

    Theoretical max x 6,281,094 ops/sec ±17.80% (10 runs sampled) *burn in*
    MiniSignals x 3,598,841 ops/sec ±1.93% (10 runs sampled)
    push-stream x 3,735,087 ops/sec ±6.02% (10 runs sampled)
    event-signal x 2,994,026 ops/sec ±2.02% (10 runs sampled)
    dripEmitter x 2,486,302 ops/sec ±11.60% (10 runs sampled)
    RXJS x 2,247,213 ops/sec ±3.60% (10 runs sampled)
    ReactiveProperty x 2,067,573 ops/sec ±7.15% (10 runs sampled)
    EventEmitter2 x 2,102,256 ops/sec ±13.12% (10 runs sampled)
    EventEmitter3 x 1,853,338 ops/sec ±5.97% (10 runs sampled)
    signal-lite x 1,817,856 ops/sec ±5.48% (10 runs sampled)
    EventEmitter x 1,562,323 ops/sec ±7.22% (10 runs sampled)
    JS-Signals x 1,235,764 ops/sec ±4.13% (10 runs sampled)
    dripEmitterEnhanced x 1,078,877 ops/sec ±11.33% (10 runs sampled)
    signal-emitter x 768,745 ops/sec ±3.05% (10 runs sampled)
    pull-notify x 759,764 ops/sec ±4.60% (10 runs sampled)

*Fastest is __MiniSignals, push-stream__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# emit one object
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle three times
ok 3 Theoretical max called handle2 three times
ok 4 EventEmitter runs without error
ok 5 EventEmitter called handle three times
ok 6 EventEmitter called handle2 three times
ok 7 EventEmitter2 runs without error
ok 8 EventEmitter2 called handle three times
ok 9 EventEmitter2 called handle2 three times
ok 10 EventEmitter3 runs without error
ok 11 EventEmitter3 called handle three times
ok 12 EventEmitter3 called handle2 three times
ok 13 push-stream runs without error
ok 14 push-stream called handle three times
ok 15 push-stream called handle2 three times
ok 16 dripEmitter runs without error
ok 17 dripEmitter called handle three times
ok 18 dripEmitter called handle2 three times
ok 19 dripEmitterEnhanced runs without error
ok 20 dripEmitterEnhanced called handle three times
ok 21 dripEmitterEnhanced called handle2 three times
ok 22 RXJS runs without error
ok 23 RXJS called handle three times
ok 24 RXJS called handle2 three times
ok 25 ReactiveProperty runs without error
ok 26 ReactiveProperty called handle three times
ok 27 ReactiveProperty called handle2 three times
ok 28 JS-Signals runs without error
ok 29 JS-Signals called handle three times
ok 30 JS-Signals called handle2 three times
ok 31 MiniSignals runs without error
ok 32 MiniSignals called handle three times
ok 33 MiniSignals called handle2 three times
ok 34 MicroSignals runs without error
ok 35 MicroSignals called handle three times
ok 36 MicroSignals called handle2 three times
ok 37 signal-emitter runs without error
ok 38 signal-emitter called handle three times
ok 39 signal-emitter called handle2 three times
ok 40 event-signal runs without error
ok 41 event-signal called handle three times
ok 42 event-signal called handle2 three times
ok 43 signal-lite runs without error
ok 44 signal-lite called handle three times
ok 45 signal-lite called handle2 three times
ok 46 EventDispatcher runs without error
ok 47 EventDispatcher called handle three times
ok 48 EventDispatcher called handle2 three times
ok 49 pull-notify runs without error
ok 50 pull-notify called handle three times
ok 51 pull-notify called handle2 three times
## benchmarks

    Theoretical max x 1,816,905 ops/sec ±30.39% (10 runs sampled) *burn in*
    push-stream x 1,101,499 ops/sec ±4.57% (10 runs sampled)
    MicroSignals x 1,056,895 ops/sec ±1.90% (10 runs sampled)
    MiniSignals x 1,033,234 ops/sec ±3.48% (10 runs sampled)
    event-signal x 848,176 ops/sec ±3.03% (10 runs sampled)
    ReactiveProperty x 832,846 ops/sec ±7.55% (10 runs sampled)
    EventDispatcher x 799,082 ops/sec ±7.42% (10 runs sampled)
    dripEmitter x 763,033 ops/sec ±11.66% (10 runs sampled)
    RXJS x 673,367 ops/sec ±3.18% (10 runs sampled)
    EventEmitter2 x 648,714 ops/sec ±11.07% (10 runs sampled)
    EventEmitter3 x 540,085 ops/sec ±5.38% (10 runs sampled)
    signal-lite x 534,357 ops/sec ±5.33% (10 runs sampled)
    EventEmitter x 470,735 ops/sec ±6.46% (10 runs sampled)
    JS-Signals x 400,934 ops/sec ±2.59% (10 runs sampled)
    dripEmitterEnhanced x 379,789 ops/sec ±12.13% (10 runs sampled)
    pull-notify x 285,806 ops/sec ±2.52% (10 runs sampled)
    signal-emitter x 245,277 ops/sec ±4.75% (10 runs sampled)

*Fastest is __push-stream, MicroSignals, MiniSignals__*


1..51
# tests 51
# pass  51

# ok


TAP version 13
# emit one object
ok 1 Theoretical max runs without error
ok 2 Theoretical max called handle three times
ok 3 EventEmitter runs without error
ok 4 EventEmitter called handle three times
ok 5 EventEmitter2 runs without error
ok 6 EventEmitter2 called handle three times
ok 7 EventEmitter3 runs without error
ok 8 EventEmitter3 called handle three times
ok 9 push-stream runs without error
ok 10 push-stream called handle three times
ok 11 mini-pipe runs without error
ok 12 mini-pipe called handle three times
ok 13 dripEmitter runs without error
ok 14 dripEmitter called handle three times
ok 15 dripEmitterEnhanced runs without error
ok 16 dripEmitterEnhanced called handle three times
ok 17 RXJS runs without error
ok 18 RXJS called handle three times
ok 19 ReactiveProperty runs without error
ok 20 ReactiveProperty called handle three times
ok 21 JS-Signals runs without error
ok 22 JS-Signals called handle three times
ok 23 MiniSignals runs without error
ok 24 MiniSignals called handle three times
ok 25 signal-emitter runs without error
ok 26 signal-emitter called handle three times
ok 27 event-signal runs without error
ok 28 event-signal called handle three times
ok 29 signal-lite runs without error
ok 30 signal-lite called handle three times
ok 31 EventDispatcher runs without error
ok 32 EventDispatcher called handle three times
## benchmarks

    Theoretical max x 2,680,144 ops/sec ±34.18% (10 runs sampled) *burn in*
    mini-pipe x 1,520,066 ops/sec ±3.19% (10 runs sampled)
    push-stream x 1,471,482 ops/sec ±2.78% (10 runs sampled)
    event-signal x 1,129,427 ops/sec ±3.63% (10 runs sampled)
    ReactiveProperty x 1,030,024 ops/sec ±5.04% (10 runs sampled)
    RXJS x 980,996 ops/sec ±2.56% (10 runs sampled)
    dripEmitter x 996,642 ops/sec ±6.70% (10 runs sampled)
    EventDispatcher x 960,336 ops/sec ±4.57% (10 runs sampled)
    EventEmitter2 x 992,634 ops/sec ±10.83% (10 runs sampled)
    EventEmitter x 953,249 ops/sec ±7.09% (10 runs sampled)
    MiniSignals x 990,824 ops/sec ±16.49% (10 runs sampled)
    signal-lite x 751,338 ops/sec ±3.03% (10 runs sampled)
    EventEmitter3 x 695,652 ops/sec ±5.74% (10 runs sampled)
    JS-Signals x 505,418 ops/sec ±4.07% (10 runs sampled)
    dripEmitterEnhanced x 453,555 ops/sec ±9.21% (10 runs sampled)
    signal-emitter x 242,438 ops/sec ±8.71% (10 runs sampled)

*Fastest is __mini-pipe, push-stream__*


1..32
# tests 32
# pass  32

# ok


TAP version 13
# emit many values
ok 1 Theoretical max runs without error
ok 2 handle called once
ok 3 handle2 called once
ok 4 EventEmitter runs without error
ok 5 handle called once
ok 6 handle2 called once
ok 7 EventEmitter2 runs without error
ok 8 handle called once
ok 9 handle2 called once
ok 10 EventEmitter3 runs without error
ok 11 handle called once
ok 12 handle2 called once
ok 13 dripEmitterEnhanced runs without error
ok 14 handle called once
ok 15 handle2 called once
ok 16 JS-Signals runs without error
ok 17 handle called once
ok 18 handle2 called once
ok 19 MiniSignals runs without error
ok 20 handle called once
ok 21 handle2 called once
ok 22 signal-emitter runs without error
ok 23 handle called once
ok 24 handle2 called once
ok 25 signal-lite runs without error
ok 26 handle called once
ok 27 handle2 called once
ok 28 minivents runs without error
ok 29 handle called once
ok 30 handle2 called once
## benchmarks

    Theoretical max x 6,398,387 ops/sec ±28.16% (10 runs sampled) *burn in*
    MiniSignals x 2,923,567 ops/sec ±9.34% (10 runs sampled)
    EventEmitter x 1,184,904 ops/sec ±11.40% (10 runs sampled)
    EventEmitter3 x 1,108,152 ops/sec ±8.98% (10 runs sampled)
    signal-lite x 1,073,774 ops/sec ±6.08% (10 runs sampled)
    EventEmitter2 x 1,138,906 ops/sec ±12.62% (10 runs sampled)
    JS-Signals x 849,466 ops/sec ±4.67% (10 runs sampled)
    dripEmitterEnhanced x 859,318 ops/sec ±14.32% (10 runs sampled)
    minivents x 641,034 ops/sec ±20.65% (10 runs sampled)
    signal-emitter x 353,980 ops/sec ±14.29% (10 runs sampled)

*Fastest is __MiniSignals__*


1..30
# tests 30
# pass  30

# ok


TAP version 13
# emit multiple arrays
ok 1 Theoretical max runs without error
ok 2 handle called three times
ok 3 handle2 called three times
ok 4 EventEmitter runs without error
ok 5 handle called three times
ok 6 handle2 called three times
ok 7 EventEmitter2 runs without error
ok 8 handle called three times
ok 9 handle2 called three times
ok 10 EventEmitter3 runs without error
ok 11 handle called three times
ok 12 handle2 called three times
ok 13 push-stream runs without error
ok 14 handle called three times
ok 15 handle2 called three times
ok 16 dripEmitter runs without error
ok 17 handle called three times
ok 18 handle2 called three times
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called three times
ok 21 handle2 called three times
ok 22 RXJS runs without error
ok 23 handle called three times
ok 24 handle2 called three times
ok 25 ReactiveProperty runs without error
ok 26 handle called three times
ok 27 handle2 called three times
ok 28 JS-Signals runs without error
ok 29 handle called three times
ok 30 handle2 called three times
ok 31 MiniSignals runs without error
ok 32 handle called three times
ok 33 handle2 called three times
ok 34 signal-emitter runs without error
ok 35 handle called three times
ok 36 handle2 called three times
ok 37 event-signal runs without error
ok 38 handle called three times
ok 39 handle2 called three times
ok 40 signal-lite runs without error
ok 41 handle called three times
ok 42 handle2 called three times
ok 43 pull-notify runs without error
ok 44 handle called three times
ok 45 handle2 called three times
## benchmarks

    Theoretical max x 1,340,852 ops/sec ±29.85% (10 runs sampled) *burn in*
    MiniSignals x 992,981 ops/sec ±3.12% (10 runs sampled)
    push-stream x 1,002,705 ops/sec ±13.24% (10 runs sampled)
    event-signal x 881,397 ops/sec ±3.68% (10 runs sampled)
    dripEmitter x 731,458 ops/sec ±15.16% (10 runs sampled)
    ReactiveProperty x 658,691 ops/sec ±8.50% (10 runs sampled)
    RXJS x 625,131 ops/sec ±7.05% (10 runs sampled)
    EventEmitter2 x 599,637 ops/sec ±12.76% (10 runs sampled)
    signal-lite x 542,632 ops/sec ±5.66% (10 runs sampled)
    EventEmitter3 x 503,357 ops/sec ±4.07% (10 runs sampled)
    EventEmitter x 462,975 ops/sec ±8.74% (10 runs sampled)
    JS-Signals x 374,660 ops/sec ±5.70% (10 runs sampled)
    dripEmitterEnhanced x 389,499 ops/sec ±12.44% (10 runs sampled)
    pull-notify x 275,877 ops/sec ±6.61% (10 runs sampled)
    signal-emitter x 225,179 ops/sec ±4.19% (10 runs sampled)

*Fastest is __MiniSignals, push-stream__*


1..45
# tests 45
# pass  45

# ok


TAP version 13
# add-remove
ok 1 EventEmitter runs without error
ok 2 handle never called
ok 3 EventEmitter2 runs without error
ok 4 handle never called
ok 5 EventEmitter3 runs without error
ok 6 handle never called
ok 7 dripEmitter runs without error
ok 8 handle never called
ok 9 pushStream runs without error
ok 10 handle never called
ok 11 dripEmitterEnhanced runs without error
ok 12 handle never called
ok 13 ReactiveProperty runs without error
ok 14 handle never called
ok 15 JS-Signals runs without error
ok 16 handle never called
ok 17 MiniSignals runs without error
ok 18 handle never called
ok 19 EventDispatcher runs without error
ok 20 handle never called
## benchmarks

    dripEmitter x 7,845,099 ops/sec ±7.26% (10 runs sampled)
    pushStream x 5,506,579 ops/sec ±8.78% (10 runs sampled)
    MiniSignals x 3,732,906 ops/sec ±22.22% (10 runs sampled)
    EventDispatcher x 3,045,326 ops/sec ±23.95% (10 runs sampled)
    EventEmitter3 x 1,672,076 ops/sec ±6.29% (10 runs sampled)
    ReactiveProperty x 1,524,484 ops/sec ±18.31% (10 runs sampled)
    JS-Signals x 942,030 ops/sec ±5.86% (10 runs sampled)
    EventEmitter x 811,709 ops/sec ±10.64% (10 runs sampled)
    dripEmitterEnhanced x 663,426 ops/sec ±12.35% (10 runs sampled)
    EventEmitter2 x 550,221 ops/sec ±7.84% (10 runs sampled)

*Fastest is __dripEmitter__*


1..20
# tests 20
# pass  20

# ok

