# Safari 9.0.2 on OS X 10.11.2

## add-remove

    dripEmitter x 8,670,414 ops/sec ±3.48% (10 runs sampled)
    MiniSignals x 3,502,567 ops/sec ±19.97% (10 runs sampled)
    EventDispatcher x 2,765,423 ops/sec ±36.17% (10 runs sampled)
    EventEmitter3 x 1,742,750 ops/sec ±3.24% (10 runs sampled)
    ReactiveProperty x 1,722,579 ops/sec ±11.61% (10 runs sampled)
    JS-Signals x 959,755 ops/sec ±4.17% (10 runs sampled)
    dripEmitterEnhanced x 786,229 ops/sec ±5.74% (10 runs sampled)
    EventEmitter x 838,905 ops/sec ±22.57% (10 runs sampled)
    EventEmitter2 x 574,815 ops/sec ±7.38% (10 runs sampled)

*Fastest is __dripEmitter__*

## emit arrays

    Theoretical max x 2,067,361 ops/sec ±34.57% (10 runs sampled) *burn in*
    MiniSignals x 1,012,798 ops/sec ±5.12% (10 runs sampled)
    event-signal x 810,197 ops/sec ±5.72% (10 runs sampled)
    dripEmitter x 706,330 ops/sec ±14.25% (10 runs sampled)
    RXJS x 634,448 ops/sec ±2.85% (10 runs sampled)
    EventEmitter2 x 638,319 ops/sec ±12.91% (10 runs sampled)
    EventEmitter3 x 565,957 ops/sec ±5.96% (10 runs sampled)
    signal-lite x 515,110 ops/sec ±5.42% (10 runs sampled)
    EventEmitter x 442,483 ops/sec ±7.24% (10 runs sampled)
    JS-Signals x 385,100 ops/sec ±5.72% (10 runs sampled)
    dripEmitterEnhanced x 375,427 ops/sec ±9.78% (10 runs sampled)
    ReactiveProperty x 466,531 ops/sec ±41.01% (10 runs sampled)
    signal-emitter x 244,713 ops/sec ±2.57% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit with bound function

    Theoretical max x 5,510,722 ops/sec ±20.14% (10 runs sampled) *burn in*
    MiniSignals x 3,411,581 ops/sec ±8.32% (10 runs sampled)
    event-signal x 2,836,323 ops/sec ±3.61% (10 runs sampled)
    dripEmitter x 2,273,924 ops/sec ±6.95% (10 runs sampled)
    RXJS x 1,919,988 ops/sec ±5.19% (10 runs sampled)
    ReactiveProperty x 1,910,204 ops/sec ±6.35% (10 runs sampled)
    EventEmitter2 x 1,838,755 ops/sec ±8.76% (10 runs sampled)
    EventEmitter3 x 1,491,594 ops/sec ±21.12% (10 runs sampled)
    JS-Signals x 1,250,772 ops/sec ±3.21% (10 runs sampled)
    dripEmitterEnhanced x 1,057,795 ops/sec ±9.96% (10 runs sampled)
    EventEmitter x 1,135,607 ops/sec ±38.74% (10 runs sampled)
    signal-lite x 1,181,887 ops/sec ±45.34% (10 runs sampled)
    signal-emitter x 706,564 ops/sec ±6.25% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit with context

    Theoretical max x 6,333,236 ops/sec ±22.57% (10 runs sampled) *burn in*
    MiniSignals x 4,416,476 ops/sec ±4.43% (10 runs sampled)
    event-signal x 3,751,926 ops/sec ±10.83% (10 runs sampled)
    ReactiveProperty x 1,756,518 ops/sec ±16.56% (10 runs sampled)
    signal-lite x 1,609,317 ops/sec ±11.95% (10 runs sampled)
    EventEmitter2 x 1,704,954 ops/sec ±21.63% (10 runs sampled)
    dripEmitter x 1,707,269 ops/sec ±24.36% (10 runs sampled)
    EventEmitter x 1,493,570 ops/sec ±11.47% (10 runs sampled)
    JS-Signals x 1,323,560 ops/sec ±3.57% (10 runs sampled)
    EventEmitter3 x 1,445,281 ops/sec ±16.84% (10 runs sampled)
    RXJS x 1,349,115 ops/sec ±40.04% (10 runs sampled)
    dripEmitterEnhanced x 1,034,856 ops/sec ±16.93% (10 runs sampled)
    signal-emitter x 812,431 ops/sec ±4.34% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit many listeners

    Theoretical max x 1,463,610 ops/sec ±32.28% (10 runs sampled) *burn in*
    ReactiveProperty x 703,822 ops/sec ±5.95% (10 runs sampled)
    EventEmitter2 x 647,577 ops/sec ±9.83% (10 runs sampled)
    dripEmitter x 650,929 ops/sec ±12.15% (10 runs sampled)
    EventEmitter x 535,633 ops/sec ±5.38% (10 runs sampled)
    event-signal x 581,091 ops/sec ±18.32% (10 runs sampled)
    dripEmitterEnhanced x 490,676 ops/sec ±8.82% (10 runs sampled)
    EventEmitter3 x 518,601 ops/sec ±19.09% (10 runs sampled)
    RXJS x 459,608 ops/sec ±21.13% (10 runs sampled)
    signal-lite x 427,131 ops/sec ±13.70% (10 runs sampled)
    JS-Signals x 387,909 ops/sec ±6.45% (10 runs sampled)
    MiniSignals x 509,838 ops/sec ±59.94% (10 runs sampled)
    signal-emitter x 338,707 ops/sec ±12.05% (10 runs sampled)
    minivents x 285,182 ops/sec ±13.07% (10 runs sampled)

*Fastest is __ReactiveProperty, EventEmitter2, dripEmitter, event-signal, MiniSignals__*

## emit many parameters

    Theoretical max x 3,962,996 ops/sec ±24.69% (10 runs sampled) *burn in*
    MiniSignals x 2,770,988 ops/sec ±4.12% (10 runs sampled)
    signal-lite x 1,178,977 ops/sec ±2.54% (10 runs sampled)
    JS-Signals x 919,931 ops/sec ±2.46% (10 runs sampled)
    EventEmitter3 x 958,751 ops/sec ±7.15% (10 runs sampled)
    minivents x 847,086 ops/sec ±6.44% (10 runs sampled)
    EventEmitter x 924,024 ops/sec ±18.70% (10 runs sampled)
    dripEmitterEnhanced x 812,674 ops/sec ±13.50% (10 runs sampled)
    EventEmitter2 x 848,599 ops/sec ±27.24% (10 runs sampled)
    signal-emitter x 449,569 ops/sec ±3.81% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit objects

    Theoretical max x 1,912,812 ops/sec ±27.24% (10 runs sampled) *burn in*
    MiniSignals x 939,879 ops/sec ±3.84% (10 runs sampled)
    ReactiveProperty x 772,593 ops/sec ±9.70% (10 runs sampled)
    EventDispatcher x 715,905 ops/sec ±4.05% (10 runs sampled)
    dripEmitter x 741,900 ops/sec ±9.82% (10 runs sampled)
    RXJS x 646,779 ops/sec ±4.52% (10 runs sampled)
    event-signal x 741,641 ops/sec ±21.55% (10 runs sampled)
    EventEmitter2 x 582,182 ops/sec ±11.75% (10 runs sampled)
    signal-lite x 488,820 ops/sec ±7.61% (10 runs sampled)
    EventEmitter x 471,646 ops/sec ±4.71% (10 runs sampled)
    EventEmitter3 x 488,293 ops/sec ±8.54% (10 runs sampled)
    JS-Signals x 366,289 ops/sec ±4.93% (10 runs sampled)
    dripEmitterEnhanced x 370,257 ops/sec ±11.42% (10 runs sampled)
    signal-emitter x 156,060 ops/sec ±43.02% (10 runs sampled)

*Fastest is __MiniSignals__*


## emit one parameter

```
not ok 1 Error: invalid arguments undefined
  ---
    operator: error
    expected: |-
      undefined
    actual: |-
      { [Error: invalid arguments undefined] line: 6788, column: 24, sourceURL: 'http://localhost:51040/__testling?show=true' }
    stack: |-
      Error: invalid arguments undefined
          handle@http://localhost:51040/__testling?show=true:6788:24
          apply@http://localhost:51040/__testling?show=true:7858:83
          call@http://localhost:51040/__testling?show=true:7854:17
          uid1464184965744createFunction@http://localhost:51040/__testling?show=true:3:159
          clock@http://localhost:51040/__testling?show=true:16587:33
          cycle@http://localhost:51040/__testling?show=true:16936:54
          cycle@http://localhost:51040/__testling?show=true:16992:16
          cycle@http://localhost:51040/__testling?show=true:16992:16
          run@http://localhost:51040/__testling?show=true:17043:18
          execute@http://localhost:51040/__testling?show=true:15802:79
          invoke@http://localhost:51040/__testling?show=true:15912:27
          compute@http://localhost:51040/__testling?show=true:16895:13
          run@http://localhost:51040/__testling?show=true:17048:18
          execute@http://localhost:51040/__testling?show=true:15802:79
          invoke@http://localhost:51040/__testling?show=true:15912:27
          runSuite@http://localhost:51040/__testling?show=true:16111:13
          run@http://localhost:51040/__testling?show=true:39753:16
          createSuite@http://localhost:51040/__testling?show=true:39757:5
          exports@http://localhost:51040/__testling?show=true:39619:21
          bound@http://localhost:51040/__testling?show=true:13771:37
          run@http://localhost:51040/__testling?show=true:7754:33
          bound@http://localhost:51040/__testling?show=true:13771:37
          next@http://localhost:51040/__testling?show=true:13589:18
          run@http://localhost:51040/__testling?show=true:39556:19
          drainQueue@http://localhost:51040/__testling?show=true:39526:45
  ...
```


## emit

    Theoretical max x 1,042,926 ops/sec ±13.63% (10 runs sampled) *burn in*
    MiniSignals x 604,501 ops/sec ±19.76% (10 runs sampled)
    signal-lite x 413,785 ops/sec ±5.23% (10 runs sampled)
    EventEmitter2 x 430,859 ops/sec ±13.37% (10 runs sampled)
    EventEmitter3 x 343,433 ops/sec ±19.09% (10 runs sampled)
    EventEmitter x 303,078 ops/sec ±17.48% (10 runs sampled)
    JS-Signals x 267,088 ops/sec ±5.99% (10 runs sampled)
    dripEmitterEnhanced x 248,351 ops/sec ±10.71% (10 runs sampled)
    signal-emitter x 129,180 ops/sec ±41.17% (10 runs sampled)

*Fastest is __MiniSignals__*


## init

    EventEmitter3 x 78,008,734 ops/sec ±5.88% (10 runs sampled)
    Theoretical max x 52,414,010 ops/sec ±4.08% (10 runs sampled) *burn in*
    EventDispatcher x 45,072,115 ops/sec ±25.46% (10 runs sampled)
    DripEmitter x 22,995,506 ops/sec ±4.78% (10 runs sampled)
    MiniSignals x 32,484,171 ops/sec ±53.60% (10 runs sampled)
    JS-Signals x 18,879,146 ops/sec ±3.47% (10 runs sampled)
    EventEmitter2 x 17,538,753 ops/sec ±6.28% (10 runs sampled)
    EventEmitter x 20,633,934 ops/sec ±35.49% (10 runs sampled)
    DripEmitterEnhanced x 9,158,966 ops/sec ±28.58% (10 runs sampled)
    ReactiveProperty x 3,788,010 ops/sec ±36.48% (10 runs sampled)

*Fastest is __EventEmitter3__*
