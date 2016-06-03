
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 5ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 1ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 1ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 7ms]

# Summary 

- duration: 21ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Safari 9.0.2 on OS X 10.11.2

# init
## init
    EventEmitter3 x 74,905,067 ops/sec ±3.62% (10 runs sampled)
    Theoretical max x 45,311,622 ops/sec ±3.48% (10 runs sampled) *burn in*
    MiniSignals x 34,416,300 ops/sec ±37.22% (10 runs sampled)
    DripEmitter x 22,364,728 ops/sec ±4.88% (10 runs sampled)
    EventDispatcher x 25,245,035 ops/sec ±34.27% (10 runs sampled)
    JS-Signals x 17,032,235 ops/sec ±1.52% (10 runs sampled)
    EventEmitter2 x 17,174,933 ops/sec ±3.13% (10 runs sampled)
    EventEmitter x 18,640,710 ops/sec ±34.03% (10 runs sampled)
    DripEmitterEnhanced x 9,658,007 ops/sec ±20.05% (10 runs sampled)
    ReactiveProperty x 5,273,627 ops/sec ±15.53% (10 runs sampled)
*Fastest is __EventEmitter3__*

# emit
## emit
    Theoretical max x 1,647,470 ops/sec ±35.28% (10 runs sampled) *burn in*
    MiniSignals x 596,061 ops/sec ±19.50% (10 runs sampled)
    EventEmitter2 x 461,214 ops/sec ±13.12% (10 runs sampled)
    signal-lite x 407,978 ops/sec ±3.11% (10 runs sampled)
    EventEmitter3 x 362,484 ops/sec ±4.46% (10 runs sampled)
    JS-Signals x 287,580 ops/sec ±4.01% (10 runs sampled)
    dripEmitterEnhanced x 266,346 ops/sec ±13.68% (10 runs sampled)
    EventEmitter x 262,393 ops/sec ±19.48% (10 runs sampled)
    signal-emitter x 162,306 ops/sec ±4.14% (10 runs sampled)
*Fastest is __MiniSignals, EventEmitter2__*

# emit one parameter
## emit one parameter
    Theoretical max x 10,275,513 ops/sec ±65.74% (10 runs sampled) *burn in*
    MiniSignals x 3,068,668 ops/sec ±3.89% (10 runs sampled)
    dripEmitter x 2,202,437 ops/sec ±13.26% (10 runs sampled)
    ReactiveProperty x 2,053,872 ops/sec ±5.95% (10 runs sampled)
    RXJS x 1,978,533 ops/sec ±3.21% (10 runs sampled)
    event-signal x 2,077,657 ops/sec ±21.16% (10 runs sampled)
    EventEmitter2 x 1,784,698 ops/sec ±9.02% (10 runs sampled)
    EventEmitter3 x 1,662,917 ops/sec ±8.40% (10 runs sampled)
    EventEmitter x 1,554,930 ops/sec ±16.95% (10 runs sampled)
    d3-dispatch x 1,370,369 ops/sec ±4.03% (10 runs sampled)
    observ x 1,309,097 ops/sec ±3.61% (10 runs sampled)
    observable x 1,298,528 ops/sec ±6.91% (10 runs sampled)
    signal-lite x 1,245,196 ops/sec ±8.67% (10 runs sampled)
    JS-Signals x 1,136,646 ops/sec ±3.00% (10 runs sampled)
    dripEmitterEnhanced x 1,113,940 ops/sec ±9.67% (10 runs sampled)
    minivents x 861,415 ops/sec ±9.09% (10 runs sampled)
    signal-emitter x 661,506 ops/sec ±3.81% (10 runs sampled)
    namespace-emitter x 618,551 ops/sec ±8.62% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 2,086,093 ops/sec ±41.42% (10 runs sampled) *burn in*
    event-signal x 741,052 ops/sec ±2.83% (10 runs sampled)
    MiniSignals x 787,710 ops/sec ±11.74% (10 runs sampled)
    ReactiveProperty x 750,971 ops/sec ±8.45% (10 runs sampled)
    EventDispatcher x 685,739 ops/sec ±7.09% (10 runs sampled)
    RXJS x 611,835 ops/sec ±3.91% (10 runs sampled)
    signal-lite x 477,755 ops/sec ±2.78% (10 runs sampled)
    EventEmitter2 x 513,505 ops/sec ±16.28% (10 runs sampled)
    dripEmitter x 479,188 ops/sec ±12.48% (10 runs sampled)
    EventEmitter x 420,972 ops/sec ±5.43% (10 runs sampled)
    EventEmitter3 x 410,160 ops/sec ±10.04% (10 runs sampled)
    dripEmitterEnhanced x 314,458 ops/sec ±11.84% (10 runs sampled)
    JS-Signals x 268,751 ops/sec ±17.19% (10 runs sampled)
    signal-emitter x 203,755 ops/sec ±4.98% (10 runs sampled)
*Fastest is __event-signal, ReactiveProperty, EventDispatcher__*

# emit many parameters
## emit many parameters
    Theoretical max x 5,661,632 ops/sec ±30.15% (10 runs sampled) *burn in*
    MiniSignals x 3,240,806 ops/sec ±4.21% (10 runs sampled)
    signal-lite x 1,156,269 ops/sec ±3.70% (10 runs sampled)
    EventEmitter2 x 1,214,431 ops/sec ±10.74% (10 runs sampled)
    EventEmitter x 1,164,576 ops/sec ±10.43% (10 runs sampled)
    EventEmitter3 x 1,024,690 ops/sec ±10.06% (10 runs sampled)
    minivents x 816,964 ops/sec ±4.72% (10 runs sampled)
    dripEmitterEnhanced x 841,000 ops/sec ±11.10% (10 runs sampled)
    JS-Signals x 771,734 ops/sec ±6.76% (10 runs sampled)
    signal-emitter x 417,001 ops/sec ±4.66% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    Theoretical max x 1,483,639 ops/sec ±35.25% (10 runs sampled) *burn in*
    MiniSignals x 737,618 ops/sec ±2.62% (10 runs sampled)
    ReactiveProperty x 678,000 ops/sec ±4.09% (10 runs sampled)
    event-signal x 663,337 ops/sec ±3.26% (10 runs sampled)
    EventEmitter3 x 567,559 ops/sec ±6.82% (10 runs sampled)
    dripEmitter x 591,356 ops/sec ±12.52% (10 runs sampled)
    EventEmitter2 x 556,660 ops/sec ±6.74% (10 runs sampled)
    signal-lite x 463,592 ops/sec ±1.90% (10 runs sampled)
    EventEmitter x 474,061 ops/sec ±5.57% (10 runs sampled)
    RXJS x 460,334 ops/sec ±7.28% (10 runs sampled)
    JS-Signals x 408,939 ops/sec ±3.96% (10 runs sampled)
    signal-emitter x 386,892 ops/sec ±4.68% (10 runs sampled)
    dripEmitterEnhanced x 402,473 ops/sec ±21.66% (10 runs sampled)
    minivents x 309,409 ops/sec ±3.44% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with context
## emit with context
    Theoretical max x 5,200,840 ops/sec ±21.54% (10 runs sampled) *burn in*
    MiniSignals x 4,409,409 ops/sec ±5.17% (10 runs sampled)
    event-signal x 3,498,048 ops/sec ±4.25% (10 runs sampled)
    ReactiveProperty x 2,046,601 ops/sec ±4.06% (10 runs sampled)
    dripEmitter x 2,146,532 ops/sec ±12.52% (10 runs sampled)
    RXJS x 1,892,196 ops/sec ±4.26% (10 runs sampled)
    EventEmitter3 x 1,889,644 ops/sec ±7.14% (10 runs sampled)
    signal-lite x 1,731,421 ops/sec ±2.91% (10 runs sampled)
    EventEmitter2 x 1,746,106 ops/sec ±10.51% (10 runs sampled)
    EventEmitter x 1,332,621 ops/sec ±7.12% (10 runs sampled)
    JS-Signals x 1,201,690 ops/sec ±2.75% (10 runs sampled)
    dripEmitterEnhanced x 1,051,153 ops/sec ±10.57% (10 runs sampled)
    signal-emitter x 715,742 ops/sec ±3.56% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 5,363,509 ops/sec ±18.07% (10 runs sampled) *burn in*
    MiniSignals x 3,238,643 ops/sec ±4.28% (10 runs sampled)
    event-signal x 2,670,985 ops/sec ±3.13% (10 runs sampled)
    dripEmitter x 2,211,417 ops/sec ±13.06% (10 runs sampled)
    ReactiveProperty x 2,013,237 ops/sec ±5.51% (10 runs sampled)
    RXJS x 1,916,905 ops/sec ±3.09% (10 runs sampled)
    EventEmitter2 x 1,855,196 ops/sec ±13.45% (10 runs sampled)
    signal-lite x 1,594,085 ops/sec ±3.29% (10 runs sampled)
    EventEmitter3 x 1,567,061 ops/sec ±4.08% (10 runs sampled)
    EventEmitter x 1,345,936 ops/sec ±6.53% (10 runs sampled)
    JS-Signals x 1,139,271 ops/sec ±6.65% (10 runs sampled)
    dripEmitterEnhanced x 1,120,225 ops/sec ±10.42% (10 runs sampled)
    signal-emitter x 674,136 ops/sec ±4.37% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit arrays
## emit arrays
    Theoretical max x 1,804,281 ops/sec ±39.77% (10 runs sampled) *burn in*
    MiniSignals x 924,406 ops/sec ±3.08% (10 runs sampled)
    event-signal x 785,408 ops/sec ±3.49% (10 runs sampled)
    dripEmitter x 706,955 ops/sec ±10.54% (10 runs sampled)
    RXJS x 631,203 ops/sec ±5.31% (10 runs sampled)
    ReactiveProperty x 634,830 ops/sec ±6.74% (10 runs sampled)
    EventEmitter2 x 573,310 ops/sec ±7.32% (10 runs sampled)
    EventEmitter3 x 511,173 ops/sec ±9.02% (10 runs sampled)
    signal-lite x 480,390 ops/sec ±3.20% (10 runs sampled)
    EventEmitter x 445,255 ops/sec ±7.07% (10 runs sampled)
    JS-Signals x 347,754 ops/sec ±3.76% (10 runs sampled)
    dripEmitterEnhanced x 323,782 ops/sec ±12.16% (10 runs sampled)
    signal-emitter x 219,688 ops/sec ±4.28% (10 runs sampled)
*Fastest is __MiniSignals__*

# add-remove
## add-remove
    dripEmitter x 7,498,211 ops/sec ±3.39% (10 runs sampled)
    EventDispatcher x 3,398,666 ops/sec ±11.98% (10 runs sampled)
    MiniSignals x 3,482,545 ops/sec ±26.02% (10 runs sampled)
    EventEmitter3 x 1,556,767 ops/sec ±3.60% (10 runs sampled)
    ReactiveProperty x 1,495,482 ops/sec ±14.46% (10 runs sampled)
    EventEmitter x 838,430 ops/sec ±6.78% (10 runs sampled)
    JS-Signals x 797,542 ops/sec ±6.76% (10 runs sampled)
    dripEmitterEnhanced x 693,089 ops/sec ±5.74% (10 runs sampled)
    EventEmitter2 x 587,445 ops/sec ±6.82% (10 runs sampled)
*Fastest is __dripEmitter__*

