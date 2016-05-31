
------------------------------------ Tests -------------------------------------
✔ Platform [pass: 1, fail: 0, duration: 2ms]
✔ add-remove [pass: 18, fail: 0, duration: 3ms]
✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 2ms]
✔ emit objects [pass: 28, fail: 0, duration: 1ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 3ms]
✔ emit [pass: 18, fail: 0, duration: 3ms]
✔ init [pass: 20, fail: 0, duration: 5ms]

----------------------------------- Summary ------------------------------------
duration: 28ms
assertions: 247
pass: 247
fail: 0

----------------------------------- Comments -----------------------------------
# Platform
Node.js 6.2.0 on Darwin 64-bit

# add-remove
## add-remove
    dripEmitter x 24,821,744 ops/sec ±10.13% (10 runs sampled)
    MiniSignals x 9,308,652 ops/sec ±20.10% (10 runs sampled)
    ReactiveProperty x 4,076,826 ops/sec ±11.65% (10 runs sampled)
    EventDispatcher x 3,865,953 ops/sec ±15.49% (10 runs sampled)
    EventEmitter x 3,414,170 ops/sec ±15.15% (10 runs sampled)
    EventEmitter3 x 1,433,023 ops/sec ±13.49% (10 runs sampled)
    EventEmitter2 x 1,044,467 ops/sec ±5.85% (10 runs sampled)
    JS-Signals x 673,534 ops/sec ±11.45% (10 runs sampled)
    dripEmitterEnhanced x 624,909 ops/sec ±7.54% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 10,387,933 ops/sec ±17.21% (10 runs sampled) *burn in*
    MiniSignals x 6,622,136 ops/sec ±7.56% (10 runs sampled)
    signal-lite x 5,997,587 ops/sec ±9.11% (10 runs sampled)
    dripEmitter x 4,513,108 ops/sec ±9.19% (10 runs sampled)
    ReactiveProperty x 4,314,718 ops/sec ±12.03% (10 runs sampled)
    EventEmitter3 x 3,960,858 ops/sec ±10.23% (10 runs sampled)
    EventEmitter x 2,686,607 ops/sec ±13.39% (10 runs sampled)
    event-signal x 1,818,101 ops/sec ±7.16% (10 runs sampled)
    EventEmitter2 x 1,395,587 ops/sec ±8.17% (10 runs sampled)
    RXJS x 1,269,405 ops/sec ±8.16% (10 runs sampled)
    dripEmitterEnhanced x 550,880 ops/sec ±9.86% (10 runs sampled)
    signal-emitter x 209,383 ops/sec ±7.67% (10 runs sampled)
    JS-Signals x 155,669 ops/sec ±9.69% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit with bound function
## emit with bound function
    Theoretical max x 25,530,950 ops/sec ±10.38% (10 runs sampled) *burn in*
    ReactiveProperty x 13,626,631 ops/sec ±5.37% (10 runs sampled)
    dripEmitter x 12,633,561 ops/sec ±7.53% (10 runs sampled)
    EventEmitter3 x 10,957,194 ops/sec ±14.50% (10 runs sampled)
    EventEmitter x 8,354,661 ops/sec ±9.07% (10 runs sampled)
    MiniSignals x 5,942,015 ops/sec ±10.74% (10 runs sampled)
    signal-lite x 5,073,943 ops/sec ±9.33% (10 runs sampled)
    event-signal x 4,991,641 ops/sec ±11.15% (10 runs sampled)
    EventEmitter2 x 4,595,606 ops/sec ±7.85% (10 runs sampled)
    RXJS x 3,750,958 ops/sec ±7.25% (10 runs sampled)
    dripEmitterEnhanced x 2,205,963 ops/sec ±7.10% (10 runs sampled)
    signal-emitter x 646,053 ops/sec ±6.93% (10 runs sampled)
    JS-Signals x 453,121 ops/sec ±8.87% (10 runs sampled)
*Fastest is __ReactiveProperty, dripEmitter__*

# emit with context
## emit with context
    Theoretical max x 31,298,243 ops/sec ±8.74% (10 runs sampled) *burn in*
    MiniSignals x 18,196,499 ops/sec ±4.96% (10 runs sampled)
    signal-lite x 17,106,259 ops/sec ±4.36% (10 runs sampled)
    ReactiveProperty x 14,035,757 ops/sec ±8.35% (10 runs sampled)
    dripEmitter x 12,747,276 ops/sec ±5.94% (10 runs sampled)
    EventEmitter3 x 11,167,555 ops/sec ±5.96% (10 runs sampled)
    EventEmitter x 8,542,152 ops/sec ±5.55% (10 runs sampled)
    event-signal x 5,266,834 ops/sec ±13.57% (10 runs sampled)
    EventEmitter2 x 4,501,037 ops/sec ±10.43% (10 runs sampled)
    RXJS x 3,583,364 ops/sec ±7.19% (10 runs sampled)
    dripEmitterEnhanced x 2,168,852 ops/sec ±5.43% (10 runs sampled)
    signal-emitter x 587,254 ops/sec ±10.30% (10 runs sampled)
    JS-Signals x 503,729 ops/sec ±7.31% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit many listeners
## emit many listeners
    MiniSignals x 4,621,501 ops/sec ±2.52% (10 runs sampled)
    signal-lite x 4,362,439 ops/sec ±4.48% (10 runs sampled)
    Theoretical max x 4,010,352 ops/sec ±4.17% (10 runs sampled) *burn in*
    EventEmitter3 x 3,888,922 ops/sec ±5.22% (10 runs sampled)
    dripEmitter x 3,929,825 ops/sec ±8.65% (10 runs sampled)
    ReactiveProperty x 3,440,023 ops/sec ±8.87% (10 runs sampled)
    event-signal x 2,815,362 ops/sec ±5.16% (10 runs sampled)
    EventEmitter x 2,970,915 ops/sec ±11.01% (10 runs sampled)
    EventEmitter2 x 2,246,823 ops/sec ±7.15% (10 runs sampled)
    RXJS x 1,589,805 ops/sec ±5.44% (10 runs sampled)
    dripEmitterEnhanced x 1,258,909 ops/sec ±5.91% (10 runs sampled)
    signal-emitter x 582,331 ops/sec ±7.72% (10 runs sampled)
    JS-Signals x 266,125 ops/sec ±5.97% (10 runs sampled)
    minivents x 92,292 ops/sec ±9.08% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many parameters
## emit many parameters
    Theoretical max x 14,330,613 ops/sec ±7.40% (10 runs sampled) *burn in*
    MiniSignals x 12,419,885 ops/sec ±7.72% (10 runs sampled)
    signal-lite x 10,715,430 ops/sec ±16.67% (10 runs sampled)
    EventEmitter x 631,175 ops/sec ±10.56% (10 runs sampled)
    EventEmitter3 x 543,086 ops/sec ±6.66% (10 runs sampled)
    dripEmitterEnhanced x 497,455 ops/sec ±5.29% (10 runs sampled)
    EventEmitter2 x 519,150 ops/sec ±12.71% (10 runs sampled)
    signal-emitter x 280,282 ops/sec ±8.39% (10 runs sampled)
    JS-Signals x 192,946 ops/sec ±6.29% (10 runs sampled)
    minivents x 94,183 ops/sec ±14.74% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit objects
## emit objects
    Theoretical max x 8,522,674 ops/sec ±8.46% (10 runs sampled) *burn in*
    MiniSignals x 6,157,606 ops/sec ±5.49% (10 runs sampled)
    signal-lite x 5,628,895 ops/sec ±4.61% (10 runs sampled)
    ReactiveProperty x 5,135,313 ops/sec ±6.82% (10 runs sampled)
    dripEmitter x 4,404,513 ops/sec ±8.58% (10 runs sampled)
    EventEmitter3 x 3,704,235 ops/sec ±10.59% (10 runs sampled)
    EventEmitter x 2,604,541 ops/sec ±4.95% (10 runs sampled)
    EventDispatcher x 2,339,630 ops/sec ±4.47% (10 runs sampled)
    event-signal x 1,748,333 ops/sec ±5.35% (10 runs sampled)
    RXJS x 1,417,085 ops/sec ±4.39% (10 runs sampled)
    EventEmitter2 x 1,140,458 ops/sec ±16.47% (10 runs sampled)
    dripEmitterEnhanced x 571,096 ops/sec ±7.37% (10 runs sampled)
    signal-emitter x 207,383 ops/sec ±5.96% (10 runs sampled)
    JS-Signals x 188,550 ops/sec ±3.30% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 23,948,905 ops/sec ±3.93% (10 runs sampled) *burn in*
    dripEmitter x 13,548,120 ops/sec ±5.22% (10 runs sampled)
    MiniSignals x 13,315,223 ops/sec ±8.10% (10 runs sampled)
    EventEmitter3 x 12,927,140 ops/sec ±5.96% (10 runs sampled)
    signal-lite x 13,587,668 ops/sec ±11.59% (10 runs sampled)
    ReactiveProperty x 12,419,631 ops/sec ±5.97% (10 runs sampled)
    EventEmitter x 8,934,103 ops/sec ±1.76% (10 runs sampled)
    observ x 5,356,579 ops/sec ±4.21% (10 runs sampled)
    event-signal x 4,475,546 ops/sec ±8.93% (10 runs sampled)
    EventEmitter2 x 4,244,939 ops/sec ±5.68% (10 runs sampled)
    RXJS x 3,351,308 ops/sec ±8.46% (10 runs sampled)
    d3-dispatch x 1,772,383 ops/sec ±5.21% (10 runs sampled)
    dripEmitterEnhanced x 1,654,954 ops/sec ±10.60% (10 runs sampled)
    signal-emitter x 553,116 ops/sec ±11.77% (10 runs sampled)
    JS-Signals x 488,453 ops/sec ±7.03% (10 runs sampled)
    namespace-emitter x 482,961 ops/sec ±7.65% (10 runs sampled)
    observable x 457,586 ops/sec ±6.98% (10 runs sampled)
    minivents x 424,645 ops/sec ±4.54% (10 runs sampled)
*Fastest is __dripEmitter, MiniSignals, EventEmitter3, signal-lite__*

# emit
## emit
    Theoretical max x 8,077,053 ops/sec ±8.81% (10 runs sampled) *burn in*
    signal-lite x 4,271,944 ops/sec ±4.78% (10 runs sampled)
    MiniSignals x 4,125,831 ops/sec ±6.42% (10 runs sampled)
    EventEmitter x 2,108,064 ops/sec ±6.62% (10 runs sampled)
    EventEmitter3 x 1,031,394 ops/sec ±3.96% (10 runs sampled)
    EventEmitter2 x 542,655 ops/sec ±7.63% (10 runs sampled)
    dripEmitterEnhanced x 310,351 ops/sec ±10.33% (10 runs sampled)
    JS-Signals x 117,428 ops/sec ±5.86% (10 runs sampled)
    signal-emitter x 123,841 ops/sec ±12.26% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# init
## init
    DripEmitter x 43,292,310 ops/sec ±2.21% (10 runs sampled)
    EventDispatcher x 36,771,327 ops/sec ±9.50% (10 runs sampled)
    EventEmitter3 x 36,480,103 ops/sec ±9.13% (10 runs sampled)
    Theoretical max x 35,440,180 ops/sec ±37.00% (10 runs sampled) *burn in*
    EventEmitter2 x 27,112,396 ops/sec ±6.67% (10 runs sampled)
    MiniSignals x 25,952,447 ops/sec ±5.45% (10 runs sampled)
    EventEmitter x 21,216,248 ops/sec ±12.36% (10 runs sampled)
    DripEmitterEnhanced x 19,358,837 ops/sec ±5.72% (10 runs sampled)
    JS-Signals x 1,441,469 ops/sec ±13.03% (10 runs sampled)
    ReactiveProperty x 1,058,337 ops/sec ±17.35% (10 runs sampled)
*Fastest is __DripEmitter__*

