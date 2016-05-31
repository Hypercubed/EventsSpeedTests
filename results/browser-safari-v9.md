
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 4ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 2ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 0ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 1ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 5ms]

# Summary 

- duration: 22ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Safari 9.0.2 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 7,152,719 ops/sec ±10.07% (10 runs sampled)
    MiniSignals x 3,263,189 ops/sec ±20.86% (10 runs sampled)
    EventDispatcher x 2,721,522 ops/sec ±14.69% (10 runs sampled)
    ReactiveProperty x 1,722,028 ops/sec ±11.03% (10 runs sampled)
    EventEmitter3 x 1,483,443 ops/sec ±8.13% (10 runs sampled)
    JS-Signals x 776,846 ops/sec ±7.19% (10 runs sampled)
    dripEmitterEnhanced x 627,299 ops/sec ±14.85% (10 runs sampled)
    EventEmitter x 600,127 ops/sec ±22.30% (10 runs sampled)
    EventEmitter2 x 489,279 ops/sec ±10.38% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 1,421,208 ops/sec ±33.33% (10 runs sampled) *burn in*
    MiniSignals x 963,862 ops/sec ±2.67% (10 runs sampled)
    event-signal x 738,944 ops/sec ±6.05% (10 runs sampled)
    dripEmitter x 703,147 ops/sec ±14.63% (10 runs sampled)
    ReactiveProperty x 636,522 ops/sec ±8.10% (10 runs sampled)
    RXJS x 592,834 ops/sec ±3.14% (10 runs sampled)
    EventEmitter2 x 593,930 ops/sec ±11.05% (10 runs sampled)
    signal-lite x 488,313 ops/sec ±4.98% (10 runs sampled)
    EventEmitter3 x 457,244 ops/sec ±16.02% (10 runs sampled)
    EventEmitter x 412,451 ops/sec ±11.86% (10 runs sampled)
    JS-Signals x 361,325 ops/sec ±6.14% (10 runs sampled)
    dripEmitterEnhanced x 312,633 ops/sec ±11.74% (10 runs sampled)
    signal-emitter x 223,450 ops/sec ±3.93% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 5,429,193 ops/sec ±25.86% (10 runs sampled) *burn in*
    MiniSignals x 3,548,759 ops/sec ±6.00% (10 runs sampled)
    event-signal x 2,915,257 ops/sec ±3.06% (10 runs sampled)
    dripEmitter x 2,342,222 ops/sec ±11.73% (10 runs sampled)
    ReactiveProperty x 2,127,451 ops/sec ±4.57% (10 runs sampled)
    RXJS x 2,031,073 ops/sec ±3.62% (10 runs sampled)
    signal-lite x 1,767,655 ops/sec ±4.17% (10 runs sampled)
    EventEmitter2 x 1,862,571 ops/sec ±16.77% (10 runs sampled)
    EventEmitter3 x 1,604,606 ops/sec ±6.92% (10 runs sampled)
    EventEmitter x 1,453,022 ops/sec ±9.07% (10 runs sampled)
    JS-Signals x 1,160,826 ops/sec ±3.88% (10 runs sampled)
    dripEmitterEnhanced x 1,088,429 ops/sec ±9.77% (10 runs sampled)
    signal-emitter x 722,606 ops/sec ±2.90% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with context
## emit with context
    MiniSignals x 4,290,714 ops/sec ±3.34% (10 runs sampled)
    Theoretical max x 4,835,344 ops/sec ±28.01% (10 runs sampled) *burn in*
    event-signal x 3,422,214 ops/sec ±7.61% (10 runs sampled)
    RXJS x 2,037,339 ops/sec ±3.68% (10 runs sampled)
    dripEmitter x 2,118,693 ops/sec ±12.33% (10 runs sampled)
    EventEmitter3 x 1,827,284 ops/sec ±7.85% (10 runs sampled)
    signal-lite x 1,725,123 ops/sec ±6.03% (10 runs sampled)
    EventEmitter2 x 1,725,997 ops/sec ±11.00% (10 runs sampled)
    EventEmitter x 1,437,041 ops/sec ±10.53% (10 runs sampled)
    JS-Signals x 1,238,309 ops/sec ±8.23% (10 runs sampled)
    ReactiveProperty x 1,347,308 ops/sec ±28.96% (10 runs sampled)
    dripEmitterEnhanced x 1,092,011 ops/sec ±12.62% (10 runs sampled)
    signal-emitter x 669,782 ops/sec ±13.99% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    Theoretical max x 1,602,752 ops/sec ±34.89% (10 runs sampled) *burn in*
    MiniSignals x 761,760 ops/sec ±3.13% (10 runs sampled)
    ReactiveProperty x 759,029 ops/sec ±5.19% (10 runs sampled)
    event-signal x 666,667 ops/sec ±17.84% (10 runs sampled)
    EventEmitter3 x 607,591 ops/sec ±9.29% (10 runs sampled)
    dripEmitter x 582,097 ops/sec ±15.24% (10 runs sampled)
    EventEmitter2 x 583,729 ops/sec ±21.28% (10 runs sampled)
    RXJS x 493,678 ops/sec ±7.51% (10 runs sampled)
    dripEmitterEnhanced x 450,919 ops/sec ±12.11% (10 runs sampled)
    JS-Signals x 383,146 ops/sec ±3.20% (10 runs sampled)
    signal-lite x 404,455 ops/sec ±9.06% (10 runs sampled)
    EventEmitter x 431,969 ops/sec ±19.09% (10 runs sampled)
    signal-emitter x 378,625 ops/sec ±6.10% (10 runs sampled)
    minivents x 309,383 ops/sec ±10.99% (10 runs sampled)
*Fastest is __MiniSignals, ReactiveProperty__*

# emit many parameters
## emit many parameters
    Theoretical max x 5,691,840 ops/sec ±28.22% (10 runs sampled) *burn in*
    MiniSignals x 3,412,722 ops/sec ±4.13% (10 runs sampled)
    signal-lite x 1,126,534 ops/sec ±5.79% (10 runs sampled)
    EventEmitter x 1,140,068 ops/sec ±12.43% (10 runs sampled)
    EventEmitter2 x 1,051,247 ops/sec ±22.22% (10 runs sampled)
    minivents x 858,148 ops/sec ±5.17% (10 runs sampled)
    JS-Signals x 858,107 ops/sec ±5.41% (10 runs sampled)
    EventEmitter3 x 897,723 ops/sec ±12.28% (10 runs sampled)
    dripEmitterEnhanced x 582,349 ops/sec ±13.68% (10 runs sampled)
    signal-emitter x 420,958 ops/sec ±5.52% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 2,216,880 ops/sec ±33.99% (10 runs sampled) *burn in*
    event-signal x 754,799 ops/sec ±3.81% (10 runs sampled)
    ReactiveProperty x 768,518 ops/sec ±6.21% (10 runs sampled)
    EventDispatcher x 737,903 ops/sec ±6.28% (10 runs sampled)
    dripEmitter x 734,012 ops/sec ±11.56% (10 runs sampled)
    MiniSignals x 674,033 ops/sec ±15.58% (10 runs sampled)
    RXJS x 603,374 ops/sec ±4.97% (10 runs sampled)
    EventEmitter2 x 583,274 ops/sec ±7.38% (10 runs sampled)
    signal-lite x 526,270 ops/sec ±3.80% (10 runs sampled)
    EventEmitter3 x 538,934 ops/sec ±9.97% (10 runs sampled)
    EventEmitter x 420,407 ops/sec ±12.01% (10 runs sampled)
    JS-Signals x 354,112 ops/sec ±6.46% (10 runs sampled)
    dripEmitterEnhanced x 324,453 ops/sec ±13.59% (10 runs sampled)
    signal-emitter x 229,732 ops/sec ±4.29% (10 runs sampled)
*Fastest is __event-signal, ReactiveProperty, EventDispatcher, dripEmitter, MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 10,969,435 ops/sec ±60.83% (10 runs sampled) *burn in*
    MiniSignals x 3,157,071 ops/sec ±4.60% (10 runs sampled)
    event-signal x 2,677,583 ops/sec ±3.80% (10 runs sampled)
    ReactiveProperty x 2,001,902 ops/sec ±5.19% (10 runs sampled)
    dripEmitter x 2,156,785 ops/sec ±13.92% (10 runs sampled)
    RXJS x 1,945,453 ops/sec ±2.79% (10 runs sampled)
    EventEmitter2 x 1,817,876 ops/sec ±10.34% (10 runs sampled)
    EventEmitter3 x 1,733,533 ops/sec ±9.44% (10 runs sampled)
    signal-lite x 1,660,648 ops/sec ±5.72% (10 runs sampled)
    EventEmitter x 1,644,961 ops/sec ±14.72% (10 runs sampled)
    observable x 1,399,107 ops/sec ±4.70% (10 runs sampled)
    minivents x 1,338,646 ops/sec ±3.50% (10 runs sampled)
    d3-dispatch x 1,295,035 ops/sec ±12.89% (10 runs sampled)
    JS-Signals x 1,063,240 ops/sec ±5.91% (10 runs sampled)
    dripEmitterEnhanced x 1,085,834 ops/sec ±10.07% (10 runs sampled)
    observ x 1,043,635 ops/sec ±26.50% (10 runs sampled)
    signal-emitter x 658,769 ops/sec ±4.08% (10 runs sampled)
    namespace-emitter x 646,227 ops/sec ±7.29% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit
## emit
    Theoretical max x 2,236,629 ops/sec ±30.39% (10 runs sampled) *burn in*
    MiniSignals x 851,714 ops/sec ±19.29% (10 runs sampled)
    signal-lite x 449,459 ops/sec ±4.32% (10 runs sampled)
    EventEmitter2 x 472,064 ops/sec ±11.69% (10 runs sampled)
    EventEmitter3 x 394,059 ops/sec ±9.87% (10 runs sampled)
    EventEmitter x 322,296 ops/sec ±11.62% (10 runs sampled)
    JS-Signals x 285,093 ops/sec ±5.17% (10 runs sampled)
    dripEmitterEnhanced x 268,886 ops/sec ±16.19% (10 runs sampled)
    signal-emitter x 165,127 ops/sec ±2.38% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    EventEmitter3 x 75,352,620 ops/sec ±3.21% (10 runs sampled)
    Theoretical max x 50,343,496 ops/sec ±6.49% (10 runs sampled) *burn in*
    EventDispatcher x 37,773,099 ops/sec ±31.06% (10 runs sampled)
    DripEmitter x 21,032,272 ops/sec ±4.20% (10 runs sampled)
    MiniSignals x 26,560,150 ops/sec ±53.60% (10 runs sampled)
    JS-Signals x 17,568,843 ops/sec ±4.18% (10 runs sampled)
    EventEmitter x 21,146,538 ops/sec ±33.26% (10 runs sampled)
    EventEmitter2 x 15,391,959 ops/sec ±4.05% (10 runs sampled)
    DripEmitterEnhanced x 7,994,414 ops/sec ±17.88% (10 runs sampled)
    ReactiveProperty x 5,088,340 ops/sec ±15.35% (10 runs sampled)
*Fastest is __EventEmitter3__*

