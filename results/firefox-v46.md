
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

    dripEmitter x 29,642,473 ops/sec ±2.40% (10 runs sampled)
    ReactiveProperty x 18,004,814 ops/sec ±1.97% (10 runs sampled)
    MiniSignals x 9,202,297 ops/sec ±7.58% (10 runs sampled)
    EventEmitter3 x 5,696,591 ops/sec ±3.50% (10 runs sampled)
    EventDispatcher x 4,178,290 ops/sec ±7.82% (10 runs sampled)
    EventEmitter x 2,369,033 ops/sec ±8.35% (10 runs sampled)
    EventEmitter2 x 2,028,400 ops/sec ±6.43% (10 runs sampled)
    dripEmitterEnhanced x 466,129 ops/sec ±5.74% (10 runs sampled)
    JS-Signals x 353,241 ops/sec ±14.92% (10 runs sampled)

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

    Theoretical max x 13,597,151 ops/sec ±43.39% (10 runs sampled) *burn in*
    ReactiveProperty x 8,053,318 ops/sec ±9.20% (10 runs sampled)
    MiniSignals x 7,197,312 ops/sec ±3.12% (10 runs sampled)
    dripEmitter x 4,985,380 ops/sec ±5.25% (10 runs sampled)
    EventEmitter3 x 3,791,610 ops/sec ±6.51% (10 runs sampled)
    event-signal x 3,342,925 ops/sec ±5.14% (10 runs sampled)
    EventEmitter2 x 2,343,546 ops/sec ±7.26% (10 runs sampled)
    RXJS x 2,192,548 ops/sec ±5.19% (10 runs sampled)
    dripEmitterEnhanced x 541,910 ops/sec ±4.22% (10 runs sampled)
    signal-lite x 497,997 ops/sec ±5.65% (10 runs sampled)
    signal-emitter x 375,606 ops/sec ±3.64% (10 runs sampled)
    EventEmitter x 311,296 ops/sec ±4.96% (10 runs sampled)
    JS-Signals x 260,681 ops/sec ±4.94% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 91,455,796 ops/sec ±8.00% (10 runs sampled) *burn in*
    ReactiveProperty x 29,001,139 ops/sec ±10.34% (10 runs sampled)
    MiniSignals x 21,421,855 ops/sec ±10.91% (10 runs sampled)
    dripEmitter x 16,227,568 ops/sec ±11.21% (10 runs sampled)
    EventEmitter3 x 13,540,820 ops/sec ±12.65% (10 runs sampled)
    EventEmitter2 x 9,865,740 ops/sec ±5.75% (10 runs sampled)
    event-signal x 9,187,817 ops/sec ±3.79% (10 runs sampled)
    RXJS x 6,576,637 ops/sec ±15.56% (10 runs sampled)
    signal-lite x 1,524,009 ops/sec ±7.05% (10 runs sampled)
    dripEmitterEnhanced x 1,230,395 ops/sec ±11.51% (10 runs sampled)
    EventEmitter x 932,981 ops/sec ±3.97% (10 runs sampled)
    signal-emitter x 902,296 ops/sec ±22.01% (10 runs sampled)
    JS-Signals x 740,661 ops/sec ±9.71% (10 runs sampled)

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

    Theoretical max x 88,909,344 ops/sec ±5.21% (10 runs sampled) *burn in*
    ReactiveProperty x 28,527,063 ops/sec ±10.49% (10 runs sampled)
    MiniSignals x 24,735,087 ops/sec ±6.00% (10 runs sampled)
    dripEmitter x 17,504,314 ops/sec ±5.97% (10 runs sampled)
    EventEmitter3 x 16,539,604 ops/sec ±7.58% (10 runs sampled)
    event-signal x 9,473,968 ops/sec ±14.33% (10 runs sampled)
    RXJS x 7,164,323 ops/sec ±4.02% (10 runs sampled)
    EventEmitter2 x 8,364,698 ops/sec ±22.68% (10 runs sampled)
    dripEmitterEnhanced x 1,640,572 ops/sec ±7.36% (10 runs sampled)
    signal-lite x 1,394,425 ops/sec ±3.88% (10 runs sampled)
    EventEmitter x 940,706 ops/sec ±11.66% (10 runs sampled)
    signal-emitter x 835,826 ops/sec ±13.84% (10 runs sampled)
    JS-Signals x 727,440 ops/sec ±11.69% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    ReactiveProperty x 18,382,774 ops/sec ±2.91% (10 runs sampled)
    MiniSignals x 5,669,061 ops/sec ±3.99% (10 runs sampled)
    Theoretical max x 5,437,156 ops/sec ±3.20% (10 runs sampled) *burn in*
    dripEmitter x 4,915,074 ops/sec ±4.15% (10 runs sampled)
    EventEmitter3 x 4,558,031 ops/sec ±3.28% (10 runs sampled)
    event-signal x 4,048,418 ops/sec ±2.92% (10 runs sampled)
    EventEmitter2 x 3,415,129 ops/sec ±2.34% (10 runs sampled)
    RXJS x 2,320,719 ops/sec ±3.01% (10 runs sampled)
    dripEmitterEnhanced x 1,306,944 ops/sec ±4.51% (10 runs sampled)
    signal-emitter x 915,582 ops/sec ±10.18% (10 runs sampled)
    signal-lite x 427,164 ops/sec ±9.31% (10 runs sampled)
    EventEmitter x 330,698 ops/sec ±8.73% (10 runs sampled)
    JS-Signals x 271,545 ops/sec ±9.63% (10 runs sampled)
    minivents x 216,065 ops/sec ±3.23% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 182,631,899 ops/sec ±4.07% (10 runs sampled) *burn in*
    MiniSignals x 21,986,742 ops/sec ±7.55% (10 runs sampled)
    EventEmitter3 x 7,399,824 ops/sec ±7.33% (10 runs sampled)
    EventEmitter2 x 6,145,407 ops/sec ±10.70% (10 runs sampled)
    dripEmitterEnhanced x 1,385,902 ops/sec ±6.19% (10 runs sampled)
    signal-emitter x 756,154 ops/sec ±10.13% (10 runs sampled)
    signal-lite x 765,541 ops/sec ±11.63% (10 runs sampled)
    EventEmitter x 361,472 ops/sec ±8.22% (10 runs sampled)
    JS-Signals x 332,715 ops/sec ±7.49% (10 runs sampled)
    minivents x 242,067 ops/sec ±5.49% (10 runs sampled)

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

    ReactiveProperty x 7,760,149 ops/sec ±11.58% (10 runs sampled)
    Theoretical max x 4,033,845 ops/sec ±4.95% (10 runs sampled) *burn in*
    MiniSignals x 2,262,092 ops/sec ±16.22% (10 runs sampled)
    EventEmitter3 x 1,961,080 ops/sec ±5.81% (10 runs sampled)
    dripEmitter x 2,071,934 ops/sec ±14.32% (10 runs sampled)
    event-signal x 1,489,291 ops/sec ±8.74% (10 runs sampled)
    RXJS x 1,363,770 ops/sec ±3.98% (10 runs sampled)
    EventEmitter2 x 1,349,609 ops/sec ±14.74% (10 runs sampled)
    EventDispatcher x 1,168,591 ops/sec ±24.87% (10 runs sampled)
    dripEmitterEnhanced x 384,761 ops/sec ±12.67% (10 runs sampled)
    signal-emitter x 310,897 ops/sec ±4.86% (10 runs sampled)
    signal-lite x 331,780 ops/sec ±33.15% (10 runs sampled)
    EventEmitter x 248,239 ops/sec ±8.54% (10 runs sampled)
    JS-Signals x 210,808 ops/sec ±5.79% (10 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 174,867,968 ops/sec ±16.61% (5 runs sampled) *burn in*
    ReactiveProperty x 44,864,676 ops/sec ±20.42% (5 runs sampled)
    MiniSignals x 28,200,665 ops/sec ±6.91% (5 runs sampled)
    dripEmitter x 19,271,967 ops/sec ±13.37% (5 runs sampled)
    EventEmitter3 x 15,319,251 ops/sec ±5.45% (5 runs sampled)
    observ x 17,256,108 ops/sec ±23.33% (5 runs sampled)
    event-signal x 10,036,614 ops/sec ±10.28% (5 runs sampled)
    EventEmitter2 x 8,549,987 ops/sec ±6.76% (5 runs sampled)
    d3-dispatch x 7,450,288 ops/sec ±8.13% (5 runs sampled)
    RXJS x 5,682,505 ops/sec ±17.47% (5 runs sampled)
    signal-lite x 1,631,289 ops/sec ±9.04% (5 runs sampled)
    dripEmitterEnhanced x 1,673,197 ops/sec ±14.06% (5 runs sampled)
    signal-emitter x 983,066 ops/sec ±6.93% (5 runs sampled)
    EventEmitter x 862,770 ops/sec ±15.77% (5 runs sampled)
    minivents x 787,245 ops/sec ±11.37% (5 runs sampled)
    JS-Signals x 704,158 ops/sec ±10.78% (5 runs sampled)
    namespace-emitter x 535,631 ops/sec ±16.29% (5 runs sampled)
    observable x 376,255 ops/sec ±19.11% (5 runs sampled)

*Fastest is __ReactiveProperty__*


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

    Theoretical max x 79,658,360 ops/sec ±4.63% (10 runs sampled) *burn in*
    MiniSignals x 5,929,190 ops/sec ±6.87% (10 runs sampled)
    EventEmitter3 x 3,248,500 ops/sec ±10.05% (10 runs sampled)
    EventEmitter2 x 1,635,774 ops/sec ±4.10% (10 runs sampled)
    dripEmitterEnhanced x 405,808 ops/sec ±7.51% (10 runs sampled)
    signal-lite x 373,264 ops/sec ±6.50% (10 runs sampled)
    signal-emitter x 248,969 ops/sec ±6.58% (10 runs sampled)
    EventEmitter x 187,129 ops/sec ±9.08% (10 runs sampled)
    JS-Signals x 160,962 ops/sec ±4.28% (10 runs sampled)

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

    Theoretical max x 59,177,045 ops/sec ±5.39% (10 runs sampled) *burn in*
    EventDispatcher x 52,638,896 ops/sec ±10.53% (10 runs sampled)
    EventEmitter3 x 46,863,809 ops/sec ±6.66% (10 runs sampled)
    DripEmitter x 41,919,278 ops/sec ±12.56% (10 runs sampled)
    EventEmitter2 x 27,727,921 ops/sec ±8.52% (10 runs sampled)
    EventEmitter x 26,349,134 ops/sec ±6.82% (10 runs sampled)
    MiniSignals x 25,159,893 ops/sec ±8.13% (10 runs sampled)
    JS-Signals x 14,843,914 ops/sec ±22.27% (10 runs sampled)
    DripEmitterEnhanced x 7,344,081 ops/sec ±15.06% (10 runs sampled)
    ReactiveProperty x 6,232,101 ops/sec ±8.07% (10 runs sampled)

*Fastest is __EventDispatcher__*


1..20
# tests 20
# pass  20

# ok

