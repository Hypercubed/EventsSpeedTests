TAP version 13
# Platform
ok 1 (unnamed assert)
Node.js 6.2.1 on Darwin 64-bit

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
## benchmarks

    EventDispatcher x 46,218,661 ops/sec ±9.27% (10 runs sampled)
    DripEmitter x 43,279,380 ops/sec ±4.40% (10 runs sampled)
    EventEmitter3 x 41,125,904 ops/sec ±11.93% (10 runs sampled)
    MiniSignals x 31,786,194 ops/sec ±14.42% (10 runs sampled)
    EventEmitter2 x 25,352,767 ops/sec ±9.00% (10 runs sampled)
    EventEmitter x 20,669,743 ops/sec ±10.97% (10 runs sampled)
    DripEmitterEnhanced x 19,008,450 ops/sec ±4.82% (10 runs sampled)
    push-stream x 12,317,109 ops/sec ±5.63% (10 runs sampled)
    Theoretical max x 21,648,647 ops/sec ±97.42% (10 runs sampled) *burn in*
    JS-Signals x 1,835,068 ops/sec ±13.69% (10 runs sampled)
    ReactiveProperty x 1,022,743 ops/sec ±21.38% (10 runs sampled)

*Fastest is __EventDispatcher__*


1..22
# tests 22
# pass  22

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

    Theoretical max x 6,211,108 ops/sec ±6.60% (10 runs sampled) *burn in*
    MiniSignals x 4,190,747 ops/sec ±5.64% (10 runs sampled)
    signal-lite x 3,553,544 ops/sec ±8.71% (10 runs sampled)
    EventEmitter x 1,863,017 ops/sec ±6.46% (10 runs sampled)
    EventEmitter3 x 950,869 ops/sec ±4.08% (10 runs sampled)
    EventEmitter2 x 614,614 ops/sec ±3.93% (10 runs sampled)
    dripEmitterEnhanced x 336,419 ops/sec ±2.94% (10 runs sampled)
    signal-emitter x 139,909 ops/sec ±3.92% (10 runs sampled)
    JS-Signals x 134,812 ops/sec ±7.82% (10 runs sampled)

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
## benchmarks

    Theoretical max x 27,502,555 ops/sec ±5.53% (10 runs sampled) *burn in*
    push-stream x 18,379,603 ops/sec ±2.76% (10 runs sampled)
    MiniSignals x 16,082,706 ops/sec ±3.41% (10 runs sampled)
    signal-lite x 14,810,872 ops/sec ±5.22% (10 runs sampled)
    ReactiveProperty x 13,349,499 ops/sec ±5.73% (10 runs sampled)
    dripEmitter x 12,606,721 ops/sec ±6.16% (10 runs sampled)
    EventEmitter3 x 12,519,506 ops/sec ±6.86% (10 runs sampled)
    EventEmitter x 6,073,312 ops/sec ±20.37% (10 runs sampled)
    event-signal x 5,293,028 ops/sec ±12.69% (10 runs sampled)
    RXJS x 3,855,203 ops/sec ±6.95% (10 runs sampled)
    EventEmitter2 x 3,727,178 ops/sec ±13.18% (10 runs sampled)
    dripEmitterEnhanced x 1,860,627 ops/sec ±3.51% (10 runs sampled)
    signal-emitter x 660,037 ops/sec ±4.51% (10 runs sampled)
    JS-Signals x 496,237 ops/sec ±4.51% (10 runs sampled)

*Fastest is __push-stream__*


1..42
# tests 42
# pass  42

# ok

TAP version 13
# emit one value - two listeners
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
ok 13 dripEmitter runs without error
ok 14 handle called once
ok 15 handle2 called once
ok 16 push-stream runs without error
ok 17 handle called once
ok 18 handle2 called once
ok 19 dripEmitterEnhanced runs without error
ok 20 handle called once
ok 21 handle2 called once
ok 22 d3-dispatch runs without error
ok 23 handle called once
ok 24 handle2 called once
ok 25 namespace-emitter runs without error
ok 26 handle called once
ok 27 handle2 called once
ok 28 ReactiveProperty runs without error
ok 29 handle called once
ok 30 handle2 called once
ok 31 observable runs without error
ok 32 handle called once
ok 33 handle2 called once
ok 34 observ runs without error
ok 35 handle called once
ok 36 handle2 called once
ok 37 RXJS runs without error
ok 38 handle called once
ok 39 handle2 called once
ok 40 JS-Signals runs without error
ok 41 handle called once
ok 42 handle2 called once
ok 43 MiniSignals runs without error
ok 44 handle called once
ok 45 handle2 called once
ok 46 signal-emitter runs without error
ok 47 handle called once
ok 48 handle2 called once
ok 49 event-signal runs without error
ok 50 handle called once
ok 51 handle2 called once
ok 52 signal-lite runs without error
ok 53 handle called once
ok 54 handle2 called once
ok 55 minivents runs without error
ok 56 handle called once
ok 57 handle2 called once
## benchmarks

    Theoretical max x 22,567,551 ops/sec ±11.35% (10 runs sampled) *burn in*
    push-stream x 18,801,869 ops/sec ±7.07% (10 runs sampled)
    MiniSignals x 15,999,335 ops/sec ±5.32% (10 runs sampled)
    signal-lite x 15,236,614 ops/sec ±5.98% (10 runs sampled)
    dripEmitter x 13,311,824 ops/sec ±3.95% (10 runs sampled)
    ReactiveProperty x 12,181,828 ops/sec ±4.52% (10 runs sampled)
    EventEmitter3 x 11,925,987 ops/sec ±4.28% (10 runs sampled)
    EventEmitter x 8,509,548 ops/sec ±4.96% (10 runs sampled)
    observ x 5,597,467 ops/sec ±4.36% (10 runs sampled)
    event-signal x 4,891,648 ops/sec ±6.60% (10 runs sampled)
    EventEmitter2 x 4,714,846 ops/sec ±6.20% (10 runs sampled)
    RXJS x 3,555,069 ops/sec ±3.21% (10 runs sampled)
    dripEmitterEnhanced x 1,748,624 ops/sec ±3.48% (10 runs sampled)
    d3-dispatch x 1,750,439 ops/sec ±7.07% (10 runs sampled)
    signal-emitter x 601,312 ops/sec ±6.06% (10 runs sampled)
    JS-Signals x 507,894 ops/sec ±9.21% (10 runs sampled)
    namespace-emitter x 421,583 ops/sec ±4.89% (10 runs sampled)
    minivents x 432,672 ops/sec ±7.78% (10 runs sampled)
    observable x 395,525 ops/sec ±7.43% (10 runs sampled)

*Fastest is __push-stream__*


1..57
# tests 57
# pass  57

# ok

TAP version 13
# emit one value - one listener
ok 1 Theoretical max runs without error
ok 2 handle called once
ok 3 EventEmitter runs without error
ok 4 handle called once
ok 5 EventEmitter2 runs without error
ok 6 handle called once
ok 7 EventEmitter3 runs without error
ok 8 handle called once
ok 9 dripEmitter runs without error
ok 10 handle called once
ok 11 barracks runs without error
ok 12 handle called once
ok 13 push-stream runs without error
ok 14 handle called once
ok 15 dripEmitterEnhanced runs without error
ok 16 handle called once
ok 17 d3-dispatch runs without error
ok 18 handle called once
ok 19 namespace-emitter runs without error
ok 20 handle called once
ok 21 ReactiveProperty runs without error
ok 22 handle called once
ok 23 observable runs without error
ok 24 handle called once
ok 25 observ runs without error
ok 26 handle called once
ok 27 RXJS runs without error
ok 28 handle called once
ok 29 JS-Signals runs without error
ok 30 handle called once
ok 31 MiniSignals runs without error
ok 32 handle called once
ok 33 signal-emitter runs without error
ok 34 handle called once
ok 35 event-signal runs without error
ok 36 handle called once
ok 37 signal-lite runs without error
ok 38 handle called once
ok 39 minivents runs without error
ok 40 handle called once
## benchmarks

    Theoretical max x 34,078,482 ops/sec ±6.02% (10 runs sampled) *burn in*
    push-stream x 29,700,217 ops/sec ±3.99% (10 runs sampled)
    MiniSignals x 28,460,549 ops/sec ±6.58% (10 runs sampled)
    signal-lite x 23,473,293 ops/sec ±2.81% (10 runs sampled)
    EventEmitter2 x 19,497,206 ops/sec ±3.62% (10 runs sampled)
    dripEmitter x 19,349,060 ops/sec ±5.63% (10 runs sampled)
    ReactiveProperty x 17,338,503 ops/sec ±9.90% (10 runs sampled)
    EventEmitter3 x 16,609,631 ops/sec ±27.14% (10 runs sampled)
    EventEmitter x 12,816,357 ops/sec ±4.04% (10 runs sampled)
    observ x 8,148,815 ops/sec ±16.69% (10 runs sampled)
    event-signal x 6,024,076 ops/sec ±4.88% (10 runs sampled)
    RXJS x 4,664,925 ops/sec ±6.42% (10 runs sampled)
    barracks x 4,461,669 ops/sec ±6.09% (10 runs sampled)
    d3-dispatch x 2,870,166 ops/sec ±7.10% (10 runs sampled)
    dripEmitterEnhanced x 1,614,793 ops/sec ±5.02% (10 runs sampled)
    minivents x 741,354 ops/sec ±4.61% (10 runs sampled)
    JS-Signals x 636,996 ops/sec ±7.51% (10 runs sampled)
    signal-emitter x 593,844 ops/sec ±6.35% (10 runs sampled)
    namespace-emitter x 567,472 ops/sec ±4.23% (10 runs sampled)
    observable x 460,493 ops/sec ±3.44% (10 runs sampled)

*Fastest is __push-stream, MiniSignals__*


1..40
# tests 40
# pass  40

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

    Theoretical max x 4,296,420 ops/sec ±3.63% (10 runs sampled) *burn in*
    push-stream x 4,214,808 ops/sec ±4.72% (10 runs sampled)
    MiniSignals x 4,218,446 ops/sec ±6.24% (10 runs sampled)
    signal-lite x 4,037,399 ops/sec ±6.22% (10 runs sampled)
    dripEmitter x 3,856,792 ops/sec ±3.89% (10 runs sampled)
    EventEmitter3 x 3,678,854 ops/sec ±3.54% (10 runs sampled)
    ReactiveProperty x 3,440,665 ops/sec ±4.13% (10 runs sampled)
    EventEmitter x 3,380,231 ops/sec ±3.77% (10 runs sampled)
    event-signal x 2,458,046 ops/sec ±10.71% (10 runs sampled)
    EventEmitter2 x 2,227,236 ops/sec ±7.61% (10 runs sampled)
    RXJS x 1,263,817 ops/sec ±6.94% (10 runs sampled)
    dripEmitterEnhanced x 1,170,196 ops/sec ±5.20% (10 runs sampled)
    signal-emitter x 542,040 ops/sec ±3.87% (10 runs sampled)
    JS-Signals x 246,276 ops/sec ±7.46% (10 runs sampled)
    minivents x 97,527 ops/sec ±7.93% (10 runs sampled)

*Fastest is __push-stream, MiniSignals, signal-lite__*


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
## benchmarks

    Theoretical max x 26,485,372 ops/sec ±4.29% (10 runs sampled) *burn in*
    push-stream x 18,820,014 ops/sec ±2.63% (10 runs sampled)
    ReactiveProperty x 14,011,463 ops/sec ±5.09% (10 runs sampled)
    dripEmitter x 12,958,005 ops/sec ±5.34% (10 runs sampled)
    EventEmitter3 x 10,843,654 ops/sec ±4.14% (10 runs sampled)
    EventEmitter x 8,148,882 ops/sec ±5.22% (10 runs sampled)
    MiniSignals x 6,780,329 ops/sec ±8.21% (10 runs sampled)
    signal-lite x 5,181,449 ops/sec ±8.18% (10 runs sampled)
    event-signal x 4,623,781 ops/sec ±10.17% (10 runs sampled)
    EventEmitter2 x 4,151,189 ops/sec ±3.48% (10 runs sampled)
    RXJS x 3,631,893 ops/sec ±3.61% (10 runs sampled)
    dripEmitterEnhanced x 1,691,534 ops/sec ±7.74% (10 runs sampled)
    signal-emitter x 631,331 ops/sec ±5.39% (10 runs sampled)
    JS-Signals x 462,829 ops/sec ±14.60% (10 runs sampled)

*Fastest is __push-stream__*


1..42
# tests 42
# pass  42

# ok

TAP version 13
# emit one object
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
ok 43 EventDispatcher runs without error
ok 44 handle called three times
ok 45 handle2 called three times
## benchmarks

    Theoretical max x 7,816,851 ops/sec ±5.24% (10 runs sampled) *burn in*
    push-stream x 5,140,627 ops/sec ±4.36% (10 runs sampled)
    MiniSignals x 5,136,151 ops/sec ±10.55% (10 runs sampled)
    signal-lite x 4,547,079 ops/sec ±7.71% (10 runs sampled)
    ReactiveProperty x 4,048,834 ops/sec ±5.31% (10 runs sampled)
    dripEmitter x 3,670,785 ops/sec ±2.40% (10 runs sampled)
    EventEmitter3 x 3,484,009 ops/sec ±5.52% (10 runs sampled)
    EventEmitter x 2,735,842 ops/sec ±6.89% (10 runs sampled)
    EventDispatcher x 2,196,963 ops/sec ±6.49% (10 runs sampled)
    event-signal x 1,524,815 ops/sec ±9.58% (10 runs sampled)
    EventEmitter2 x 1,350,235 ops/sec ±8.18% (10 runs sampled)
    RXJS x 1,115,938 ops/sec ±7.22% (10 runs sampled)
    dripEmitterEnhanced x 573,168 ops/sec ±5.03% (10 runs sampled)
    signal-emitter x 216,098 ops/sec ±4.09% (10 runs sampled)
    JS-Signals x 177,536 ops/sec ±7.85% (10 runs sampled)

*Fastest is __push-stream, MiniSignals__*


1..45
# tests 45
# pass  45

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

    Theoretical max x 15,980,514 ops/sec ±4.92% (10 runs sampled) *burn in*
    MiniSignals x 13,557,923 ops/sec ±6.94% (10 runs sampled)
    signal-lite x 12,435,963 ops/sec ±3.56% (10 runs sampled)
    EventEmitter x 674,513 ops/sec ±5.23% (10 runs sampled)
    EventEmitter3 x 656,848 ops/sec ±3.90% (10 runs sampled)
    EventEmitter2 x 617,599 ops/sec ±7.36% (10 runs sampled)
    dripEmitterEnhanced x 487,031 ops/sec ±7.38% (10 runs sampled)
    signal-emitter x 338,699 ops/sec ±4.57% (10 runs sampled)
    JS-Signals x 176,628 ops/sec ±7.32% (10 runs sampled)
    minivents x 121,548 ops/sec ±5.00% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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
## benchmarks

    Theoretical max x 9,147,213 ops/sec ±27.99% (10 runs sampled) *burn in*
    push-stream x 6,509,473 ops/sec ±6.43% (10 runs sampled)
    MiniSignals x 6,109,983 ops/sec ±8.12% (10 runs sampled)
    signal-lite x 5,761,676 ops/sec ±6.13% (10 runs sampled)
    dripEmitter x 4,740,622 ops/sec ±3.57% (10 runs sampled)
    ReactiveProperty x 4,741,572 ops/sec ±7.57% (10 runs sampled)
    EventEmitter3 x 4,408,391 ops/sec ±6.01% (10 runs sampled)
    EventEmitter x 2,812,793 ops/sec ±6.15% (10 runs sampled)
    event-signal x 1,678,926 ops/sec ±7.05% (10 runs sampled)
    EventEmitter2 x 1,480,534 ops/sec ±4.22% (10 runs sampled)
    RXJS x 1,323,157 ops/sec ±6.46% (10 runs sampled)
    dripEmitterEnhanced x 578,892 ops/sec ±3.02% (10 runs sampled)
    signal-emitter x 200,699 ops/sec ±2.84% (10 runs sampled)
    JS-Signals x 183,533 ops/sec ±6.21% (10 runs sampled)

*Fastest is __push-stream, MiniSignals__*


1..42
# tests 42
# pass  42

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

    dripEmitter x 23,977,735 ops/sec ±5.29% (10 runs sampled)
    MiniSignals x 14,665,866 ops/sec ±6.46% (10 runs sampled)
    ReactiveProperty x 4,576,699 ops/sec ±7.56% (10 runs sampled)
    EventDispatcher x 4,180,722 ops/sec ±16.84% (10 runs sampled)
    pushStream x 3,156,441 ops/sec ±4.97% (10 runs sampled)
    EventEmitter x 3,133,317 ops/sec ±11.59% (10 runs sampled)
    EventEmitter3 x 1,721,919 ops/sec ±5.02% (10 runs sampled)
    EventEmitter2 x 1,088,927 ops/sec ±8.03% (10 runs sampled)
    JS-Signals x 562,424 ops/sec ±8.81% (10 runs sampled)
    dripEmitterEnhanced x 521,443 ops/sec ±4.44% (10 runs sampled)

*Fastest is __dripEmitter__*


1..20
# tests 20
# pass  20

# ok

