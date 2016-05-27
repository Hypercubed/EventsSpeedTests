
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

    dripEmitter x 7,670,814 ops/sec ±5.01% (10 runs sampled)
    EventDispatcher x 2,839,877 ops/sec ±14.99% (10 runs sampled)
    MiniSignals x 2,643,085 ops/sec ±23.83% (10 runs sampled)
    EventEmitter3 x 1,346,737 ops/sec ±3.86% (10 runs sampled)
    ReactiveProperty x 1,333,543 ops/sec ±14.34% (10 runs sampled)
    JS-Signals x 735,701 ops/sec ±5.27% (10 runs sampled)
    dripEmitterEnhanced x 576,274 ops/sec ±6.55% (10 runs sampled)
    EventEmitter x 663,296 ops/sec ±28.26% (10 runs sampled)
    EventEmitter2 x 490,186 ops/sec ±8.46% (10 runs sampled)

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

    Theoretical max x 1,634,088 ops/sec ±32.75% (10 runs sampled) *burn in*
    MiniSignals x 827,720 ops/sec ±6.68% (10 runs sampled)
    event-signal x 691,102 ops/sec ±10.56% (10 runs sampled)
    ReactiveProperty x 608,833 ops/sec ±7.21% (10 runs sampled)
    dripEmitter x 572,234 ops/sec ±13.69% (10 runs sampled)
    RXJS x 521,296 ops/sec ±5.71% (10 runs sampled)
    EventEmitter2 x 532,242 ops/sec ±12.48% (10 runs sampled)
    signal-lite x 411,230 ops/sec ±4.79% (10 runs sampled)
    EventEmitter3 x 390,478 ops/sec ±9.32% (10 runs sampled)
    EventEmitter x 362,347 ops/sec ±11.78% (10 runs sampled)
    JS-Signals x 342,427 ops/sec ±13.32% (10 runs sampled)
    dripEmitterEnhanced x 265,754 ops/sec ±10.94% (10 runs sampled)
    signal-emitter x 168,452 ops/sec ±2.99% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 5,112,510 ops/sec ±23.32% (10 runs sampled) *burn in*
    MiniSignals x 3,184,395 ops/sec ±5.18% (10 runs sampled)
    event-signal x 2,506,510 ops/sec ±9.62% (10 runs sampled)
    dripEmitter x 2,181,855 ops/sec ±6.44% (10 runs sampled)
    ReactiveProperty x 1,718,050 ops/sec ±6.46% (10 runs sampled)
    RXJS x 1,666,681 ops/sec ±8.04% (10 runs sampled)
    EventEmitter2 x 1,542,360 ops/sec ±12.50% (10 runs sampled)
    EventEmitter3 x 1,425,463 ops/sec ±4.65% (10 runs sampled)
    EventEmitter x 1,172,914 ops/sec ±7.88% (10 runs sampled)
    JS-Signals x 1,027,443 ops/sec ±5.56% (10 runs sampled)
    signal-lite x 1,226,290 ops/sec ±28.84% (10 runs sampled)
    dripEmitterEnhanced x 938,466 ops/sec ±8.51% (10 runs sampled)
    signal-emitter x 605,823 ops/sec ±9.01% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 5,049,417 ops/sec ±23.78% (10 runs sampled) *burn in*
    MiniSignals x 3,767,268 ops/sec ±7.72% (10 runs sampled)
    event-signal x 2,718,619 ops/sec ±2.28% (10 runs sampled)
    dripEmitter x 1,986,007 ops/sec ±16.81% (10 runs sampled)
    RXJS x 1,629,128 ops/sec ±3.51% (10 runs sampled)
    EventEmitter3 x 1,598,217 ops/sec ±7.58% (10 runs sampled)
    ReactiveProperty x 1,556,375 ops/sec ±6.15% (10 runs sampled)
    signal-lite x 1,502,212 ops/sec ±4.71% (10 runs sampled)
    EventEmitter2 x 1,495,757 ops/sec ±12.88% (10 runs sampled)
    JS-Signals x 1,056,071 ops/sec ±3.39% (10 runs sampled)
    EventEmitter x 1,103,631 ops/sec ±8.48% (10 runs sampled)
    dripEmitterEnhanced x 976,546 ops/sec ±11.07% (10 runs sampled)
    signal-emitter x 566,125 ops/sec ±6.58% (10 runs sampled)

*Fastest is __MiniSignals__*


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

    Theoretical max x 1,379,889 ops/sec ±36.68% (10 runs sampled) *burn in*
    ReactiveProperty x 642,503 ops/sec ±5.07% (10 runs sampled)
    EventEmitter3 x 599,086 ops/sec ±7.01% (10 runs sampled)
    MiniSignals x 597,034 ops/sec ±7.39% (10 runs sampled)
    EventEmitter2 x 608,169 ops/sec ±11.50% (10 runs sampled)
    event-signal x 567,171 ops/sec ±8.44% (10 runs sampled)
    dripEmitter x 502,202 ops/sec ±12.26% (10 runs sampled)
    RXJS x 446,731 ops/sec ±3.95% (10 runs sampled)
    dripEmitterEnhanced x 445,881 ops/sec ±9.96% (10 runs sampled)
    signal-lite x 371,197 ops/sec ±6.69% (10 runs sampled)
    EventEmitter x 399,553 ops/sec ±18.99% (10 runs sampled)
    signal-emitter x 311,755 ops/sec ±10.19% (10 runs sampled)
    JS-Signals x 312,553 ops/sec ±13.50% (10 runs sampled)
    minivents x 267,162 ops/sec ±9.29% (10 runs sampled)

*Fastest is __ReactiveProperty, EventEmitter3, MiniSignals, EventEmitter2__*


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

    Theoretical max x 5,615,461 ops/sec ±31.62% (10 runs sampled) *burn in*
    MiniSignals x 2,890,497 ops/sec ±4.69% (10 runs sampled)
    signal-lite x 941,136 ops/sec ±6.91% (10 runs sampled)
    EventEmitter2 x 969,796 ops/sec ±13.35% (10 runs sampled)
    EventEmitter x 916,891 ops/sec ±11.76% (10 runs sampled)
    JS-Signals x 833,888 ops/sec ±10.29% (10 runs sampled)
    minivents x 799,127 ops/sec ±7.07% (10 runs sampled)
    EventEmitter3 x 783,432 ops/sec ±20.41% (10 runs sampled)
    dripEmitterEnhanced x 663,486 ops/sec ±12.04% (10 runs sampled)
    signal-emitter x 370,071 ops/sec ±3.73% (10 runs sampled)

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

    Theoretical max x 1,675,646 ops/sec ±31.88% (10 runs sampled) *burn in*
    event-signal x 670,330 ops/sec ±5.37% (10 runs sampled)
    MiniSignals x 692,452 ops/sec ±14.83% (10 runs sampled)
    ReactiveProperty x 614,829 ops/sec ±7.34% (10 runs sampled)
    EventDispatcher x 602,372 ops/sec ±7.52% (10 runs sampled)
    dripEmitter x 549,668 ops/sec ±12.99% (10 runs sampled)
    RXJS x 507,189 ops/sec ±5.35% (10 runs sampled)
    EventEmitter2 x 476,427 ops/sec ±16.28% (10 runs sampled)
    EventEmitter3 x 414,313 ops/sec ±4.60% (10 runs sampled)
    signal-lite x 399,350 ops/sec ±2.53% (10 runs sampled)
    JS-Signals x 282,808 ops/sec ±5.22% (10 runs sampled)
    EventEmitter x 318,273 ops/sec ±21.81% (10 runs sampled)
    dripEmitterEnhanced x 260,325 ops/sec ±15.73% (10 runs sampled)
    signal-emitter x 189,118 ops/sec ±11.49% (10 runs sampled)

*Fastest is __event-signal, ReactiveProperty__*


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
not ok 13 Error: invalid arguments undefined
  ---
    operator: error
    expected: |-
      undefined
    actual: |-
      { [Error: invalid arguments undefined] line: 6814, column: 24, sourceURL: 'http://localhost:55325/__testling?show=true' }
    stack: |-
      Error: invalid arguments undefined
          handle@http://localhost:55325/__testling?show=true:6814:24
          apply@http://localhost:55325/__testling?show=true:7885:83
          call@http://localhost:55325/__testling?show=true:7881:17
          uid1464356016797createFunction@http://localhost:55325/__testling?show=true:3:159
          clock@http://localhost:55325/__testling?show=true:15469:33
          cycle@http://localhost:55325/__testling?show=true:15818:54
          cycle@http://localhost:55325/__testling?show=true:15874:16
          cycle@http://localhost:55325/__testling?show=true:15874:16
          run@http://localhost:55325/__testling?show=true:15925:18
          execute@http://localhost:55325/__testling?show=true:14684:79
          invoke@http://localhost:55325/__testling?show=true:14794:27
          compute@http://localhost:55325/__testling?show=true:15777:13
          run@http://localhost:55325/__testling?show=true:15930:18
          execute@http://localhost:55325/__testling?show=true:14684:79
          invoke@http://localhost:55325/__testling?show=true:14794:27
          runSuite@http://localhost:55325/__testling?show=true:14993:13
          run@http://localhost:55325/__testling?show=true:38639:16
          createSuite@http://localhost:55325/__testling?show=true:38669:5
          exports@http://localhost:55325/__testling?show=true:38501:21
          bound@http://localhost:55325/__testling?show=true:12659:37
          run@http://localhost:55325/__testling?show=true:7781:33
          bound@http://localhost:55325/__testling?show=true:12659:37
          next@http://localhost:55325/__testling?show=true:12477:18
          run@http://localhost:55325/__testling?show=true:38438:19
          drainQueue@http://localhost:55325/__testling?show=true:38408:45
  ...

1..13
# tests 13
# pass  12
# fail  1


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

    Theoretical max x 2,068,212 ops/sec ±32.45% (10 runs sampled) *burn in*
    MiniSignals x 508,406 ops/sec ±20.50% (10 runs sampled)
    signal-lite x 406,831 ops/sec ±8.10% (10 runs sampled)
    EventEmitter3 x 336,913 ops/sec ±6.80% (10 runs sampled)
    EventEmitter2 x 342,724 ops/sec ±15.46% (10 runs sampled)
    JS-Signals x 243,002 ops/sec ±4.89% (10 runs sampled)
    dripEmitterEnhanced x 235,238 ops/sec ±11.92% (10 runs sampled)
    EventEmitter x 255,769 ops/sec ±28.58% (10 runs sampled)
    signal-emitter x 139,772 ops/sec ±9.04% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*


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

    EventEmitter3 x 59,399,010 ops/sec ±5.04% (10 runs sampled)
    Theoretical max x 47,557,717 ops/sec ±7.32% (10 runs sampled) *burn in*
    EventDispatcher x 31,765,414 ops/sec ±31.49% (10 runs sampled)
    MiniSignals x 32,121,711 ops/sec ±38.39% (10 runs sampled)
    DripEmitter x 19,203,808 ops/sec ±3.54% (10 runs sampled)
    JS-Signals x 15,597,381 ops/sec ±3.24% (10 runs sampled)
    EventEmitter2 x 14,669,347 ops/sec ±3.00% (10 runs sampled)
    EventEmitter x 16,400,976 ops/sec ±35.81% (10 runs sampled)
    DripEmitterEnhanced x 9,043,528 ops/sec ±15.32% (10 runs sampled)
    ReactiveProperty x 4,221,562 ops/sec ±19.32% (10 runs sampled)

*Fastest is __EventEmitter3__*


1..20
# tests 20
# pass  20

# ok

