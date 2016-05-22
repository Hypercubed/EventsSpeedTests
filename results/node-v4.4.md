# Node.js 4.4.4 on Darwin 64-bit

## add-remove
    EventEmitter x 3,380,848 ops/sec ±18.99% (10 runs sampled)
    EventEmitter2 x 1,234,939 ops/sec ±4.94% (10 runs sampled)
    EventEmitter3 x 1,641,490 ops/sec ±7.49% (10 runs sampled)
    ReactiveProperty x 2,756,639 ops/sec ±5.52% (10 runs sampled)
    JS-Signals x 690,671 ops/sec ±5.12% (10 runs sampled)
    MiniSignals x 14,846,164 ops/sec ±5.13% (10 runs sampled)
    EventDispatcher x 4,697,527 ops/sec ±4.68% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays
    Theoretical max x 11,530,952 ops/sec ±12.76% (10 runs sampled) *burn in*
    EventEmitter x 3,225,929 ops/sec ±11.72% (10 runs sampled)
    EventEmitter2 x 1,291,979 ops/sec ±11.52% (10 runs sampled)
    EventEmitter3 x 4,072,215 ops/sec ±12.45% (10 runs sampled)
    RXJS x 1,131,248 ops/sec ±13.60% (10 runs sampled)
    ReactiveProperty x 5,214,096 ops/sec ±5.33% (10 runs sampled)
    JS-Signals x 169,774 ops/sec ±3.42% (10 runs sampled)
    MiniSignals x 5,502,511 ops/sec ±25.73% (10 runs sampled)
    signal-emitter x 187,537 ops/sec ±8.16% (10 runs sampled)
    event-signal x 1,615,469 ops/sec ±12.99% (10 runs sampled)
    signal-lite x 6,102,957 ops/sec ±7.18% (10 runs sampled)

*Fastest is __signal-lite,MiniSignals__*

## emit with bound function
    Theoretical max x 3,820,488 ops/sec ±8.08% (10 runs sampled) *burn in*
    EventEmitter x 2,561,161 ops/sec ±27.09% (10 runs sampled)
    EventEmitter2 x 2,153,949 ops/sec ±7.07% (10 runs sampled)
    EventEmitter3 x 3,012,375 ops/sec ±6.22% (10 runs sampled)
    RXJS x 2,066,125 ops/sec ±6.76% (10 runs sampled)
    ReactiveProperty x 2,851,100 ops/sec ±6.56% (10 runs sampled)
    JS-Signals x 452,624 ops/sec ±4.63% (10 runs sampled)
    MiniSignals x 2,135,283 ops/sec ±6.89% (10 runs sampled)
    signal-emitter x 550,799 ops/sec ±3.95% (10 runs sampled)
    event-signal x 2,248,287 ops/sec ±7.63% (10 runs sampled)
    signal-lite x 1,781,665 ops/sec ±7.98% (10 runs sampled)

*Fastest is __EventEmitter3,ReactiveProperty,EventEmitter__*

## emit with context
    Theoretical max x 3,285,608 ops/sec ±22.85% (10 runs sampled) *burn in*
    EventEmitter x 2,643,398 ops/sec ±7.28% (10 runs sampled)
    EventEmitter2 x 2,002,380 ops/sec ±11.04% (10 runs sampled)
    EventEmitter3 x 13,934,270 ops/sec ±5.42% (10 runs sampled)
    RXJS x 2,033,600 ops/sec ±5.10% (10 runs sampled)
    ReactiveProperty x 2,955,929 ops/sec ±5.16% (10 runs sampled)
    JS-Signals x 544,777 ops/sec ±19.16% (10 runs sampled)
    MiniSignals x 17,799,479 ops/sec ±7.49% (10 runs sampled)
    signal-emitter x 575,594 ops/sec ±9.34% (10 runs sampled)
    event-signal x 5,810,562 ops/sec ±4.43% (10 runs sampled)
    signal-lite x 17,178,260 ops/sec ±5.68% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit many parameters
    Theoretical max x 18,230,048 ops/sec ±8.19% (10 runs sampled) *burn in*
    EventEmitter x 2,328,517 ops/sec ±3.60% (10 runs sampled)
    EventEmitter2 x 1,685,881 ops/sec ±6.84% (10 runs sampled)
    EventEmitter3 x 2,238,129 ops/sec ±7.71% (10 runs sampled)
    JS-Signals x 217,584 ops/sec ±5.82% (10 runs sampled)
    MiniSignals x 15,258,602 ops/sec ±4.89% (10 runs sampled)
    signal-emitter x 344,538 ops/sec ±5.06% (10 runs sampled)
    signal-lite x 14,427,256 ops/sec ±2.93% (10 runs sampled)
    minivents x 122,022 ops/sec ±15.96% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit many listeners
    Theoretical max x 5,504,955 ops/sec ±7.47% (10 runs sampled) *burn in*
    EventEmitter x 3,860,438 ops/sec ±4.79% (10 runs sampled)
    EventEmitter2 x 2,640,111 ops/sec ±5.43% (10 runs sampled)
    EventEmitter3 x 4,121,662 ops/sec ±6.74% (10 runs sampled)
    RXJS x 1,561,429 ops/sec ±3.33% (10 runs sampled)
    ReactiveProperty x 3,370,158 ops/sec ±9.38% (10 runs sampled)
    JS-Signals x 391,009 ops/sec ±4.88% (10 runs sampled)
    MiniSignals x 4,960,421 ops/sec ±4.28% (10 runs sampled)
    signal-emitter x 526,655 ops/sec ±6.16% (10 runs sampled)
    event-signal x 2,871,982 ops/sec ±6.50% (10 runs sampled)
    signal-lite x 4,540,400 ops/sec ±8.61% (10 runs sampled)
    minivents x 96,332 ops/sec ±6.95% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit objects
    Theoretical max x 12,623,628 ops/sec ±2.68% (10 runs sampled) *burn in*
    EventEmitter x 3,602,127 ops/sec ±5.53% (10 runs sampled)
    EventEmitter2 x 1,514,297 ops/sec ±6.00% (10 runs sampled)
    EventEmitter3 x 4,472,367 ops/sec ±3.92% (10 runs sampled)
    RXJS x 1,405,509 ops/sec ±2.95% (10 runs sampled)
    ReactiveProperty x 5,953,534 ops/sec ±4.40% (10 runs sampled)
    JS-Signals x 204,243 ops/sec ±4.77% (10 runs sampled)
    MiniSignals x 6,543,880 ops/sec ±6.75% (10 runs sampled)
    signal-emitter x 196,234 ops/sec ±7.62% (10 runs sampled)
    event-signal x 1,957,970 ops/sec ±3.69% (10 runs sampled)
    signal-lite x 6,162,187 ops/sec ±5.89% (10 runs sampled)
    EventDispatcher x 2,675,401 ops/sec ±8.79% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit one parameter
    Theoretical max x 28,635,216 ops/sec ±3.58% (10 runs sampled) *burn in*
    EventEmitter x 10,618,073 ops/sec ±4.81% (10 runs sampled)
    EventEmitter2 x 4,923,106 ops/sec ±8.32% (10 runs sampled)
    EventEmitter3 x 13,578,012 ops/sec ±2.94% (10 runs sampled)
    d3-dispatch x 4,053,427 ops/sec ±7.10% (10 runs sampled)
    namespace-emitter x 538,749 ops/sec ±6.59% (10 runs sampled)
    ReactiveProperty x 13,969,699 ops/sec ±6.56% (10 runs sampled)
    observable x 1,517,565 ops/sec ±4.83% (10 runs sampled)
    observ x 5,727,743 ops/sec ±7.72% (10 runs sampled)
    RXJS x 3,616,721 ops/sec ±6.63% (10 runs sampled)
    JS-Signals x 563,806 ops/sec ±3.03% (10 runs sampled)
    MiniSignals x 17,274,407 ops/sec ±8.03% (10 runs sampled)
    signal-emitter x 613,716 ops/sec ±4.85% (10 runs sampled)
    event-signal x 5,701,939 ops/sec ±4.65% (10 runs sampled)
    signal-lite x 18,082,153 ops/sec ±4.89% (10 runs sampled)
    minivents x 463,627 ops/sec ±6.77% (10 runs sampled)

*Fastest is __signal-lite,MiniSignals__*

## emit
    Theoretical max x 2,987,500 ops/sec ±7.03% (10 runs sampled) *burn in*
    EventEmitter x 1,437,579 ops/sec ±5.53% (10 runs sampled)
    EventEmitter2 x 850,994 ops/sec ±4.16% (10 runs sampled)
    EventEmitter3 x 1,426,192 ops/sec ±6.88% (10 runs sampled)
    JS-Signals x 124,900 ops/sec ±5.30% (10 runs sampled)
    MiniSignals x 2,483,944 ops/sec ±3.06% (10 runs sampled)
    signal-emitter x 134,206 ops/sec ±12.18% (10 runs sampled)
    signal-lite x 2,275,826 ops/sec ±6.83% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## init
    Theoretical max x 57,749,005 ops/sec ±4.58% (10 runs sampled) *burn in*
    EventEmitter x 27,857,104 ops/sec ±3.75% (10 runs sampled)
    EventEmitter2 x 33,717,347 ops/sec ±5.32% (10 runs sampled)
    EventEmitter3 x 57,848,808 ops/sec ±3.86% (10 runs sampled)
    ReactiveProperty x 1,542,603 ops/sec ±9.98% (10 runs sampled)
    JS-Signals x 2,252,491 ops/sec ±20.76% (10 runs sampled)
    MiniSignals x 38,566,811 ops/sec ±4.63% (10 runs sampled)
    EventDispatcher x 52,763,202 ops/sec ±5.34% (10 runs sampled)

*Fastest is __EventEmitter3__*
