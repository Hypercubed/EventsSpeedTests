# Firefox 46.0 on OS X 10.11

## emit
    Theoretical max x 1,084,837 ops/sec ±2.70% (10 runs sampled) *burn in*
    EventEmitter x 200,764 ops/sec ±4.69% (10 runs sampled)
    EventEmitter2 x 675,448 ops/sec ±5.40% (10 runs sampled)
    EventEmitter3 x 834,161 ops/sec ±2.00% (10 runs sampled)
    JS-Signals x 160,452 ops/sec ±2.71% (10 runs sampled)
    MiniSignals x 924,627 ops/sec ±3.54% (10 runs sampled)
    signal-emitter x 222,265 ops/sec ±4.80% (10 runs sampled)
    signal-lite x 286,495 ops/sec ±4.76% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit one parameter
    Theoretical max x 294,102,158 ops/sec ±30.74% (10 runs sampled) *burn in*
    EventEmitter x 1,069,120 ops/sec ±2.87% (10 runs sampled)
    EventEmitter2 x 10,693,706 ops/sec ±2.53% (10 runs sampled)
    EventEmitter3 x 16,067,985 ops/sec ±5.66% (10 runs sampled)
    d3-dispatch x 8,444,556 ops/sec ±3.66% (10 runs sampled)
    namespace-emitter x 590,596 ops/sec ±2.98% (10 runs sampled)
    ReactiveProperty x 48,043,204 ops/sec ±5.64% (10 runs sampled)
    observable x 468,295 ops/sec ±3.86% (10 runs sampled)
    observ x 23,875,439 ops/sec ±2.51% (10 runs sampled)
    RXJS x 1,464,766 ops/sec ±186.27% (10 runs sampled)
    JS-Signals x 820,449 ops/sec ±3.57% (10 runs sampled)
    MiniSignals x 27,963,239 ops/sec ±3.49% (10 runs sampled)
    signal-emitter x 1,174,769 ops/sec ±5.36% (10 runs sampled)
    event-signal x 12,895,131 ops/sec ±3.00% (10 runs sampled)
    signal-lite x 1,761,924 ops/sec ±3.66% (10 runs sampled)
    minivents x 842,188 ops/sec ±4.60% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit objects
    Theoretical max x 4,075,505 ops/sec ±3.58% (10 runs sampled) *burn in*
    EventEmitter x 284,243 ops/sec ±3.00% (10 runs sampled)
    EventEmitter2 x 1,613,282 ops/sec ±3.71% (10 runs sampled)
    EventEmitter3 x 1,964,807 ops/sec ±6.44% (10 runs sampled)
    RXJS x 1,358,969 ops/sec ±6.18% (10 runs sampled)
    ReactiveProperty x 5,862,740 ops/sec ±3.14% (10 runs sampled)
    JS-Signals x 245,896 ops/sec ±3.19% (10 runs sampled)
    MiniSignals x 2,516,371 ops/sec ±4.82% (10 runs sampled)
    signal-emitter x 330,335 ops/sec ±5.06% (10 runs sampled)
    event-signal x 1,592,419 ops/sec ±6.38% (10 runs sampled)
    signal-lite x 432,369 ops/sec ±5.41% (10 runs sampled)
    EventDispatcher x 3,237,667 ops/sec ±3.18% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## init
    Theoretical max x 25,549,185 ops/sec ±16.54% (10 runs sampled) *burn in*
    EventEmitter x 9,581,825 ops/sec ±17.74% (10 runs sampled)
    EventEmitter2 x 19,513,834 ops/sec ±4.01% (10 runs sampled)
    EventEmitter3 x 25,761,664 ops/sec ±16.02% (10 runs sampled)
    ReactiveProperty x 5,751,553 ops/sec ±11.48% (10 runs sampled)
    JS-Signals x 11,071,652 ops/sec ±8.44% (10 runs sampled)
    MiniSignals x 9,689,880 ops/sec ±17.40% (10 runs sampled)
    EventDispatcher x 28,408,510 ops/sec ±9.69% (10 runs sampled)

*Fastest is __EventDispatcher,EventEmitter3__*

## add-remove
    EventEmitter x 1,864,945 ops/sec ±42.03% (10 runs sampled)
    EventEmitter2 x 2,075,462 ops/sec ±9.92% (10 runs sampled)
    EventEmitter3 x 5,384,247 ops/sec ±3.64% (10 runs sampled)
    ReactiveProperty x 16,978,321 ops/sec ±5.21% (10 runs sampled)
    JS-Signals x 428,801 ops/sec ±10.67% (10 runs sampled)
    MiniSignals x 10,390,180 ops/sec ±2.73% (10 runs sampled)
    EventDispatcher x 4,272,152 ops/sec ±3.94% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with bound function
    Theoretical max x 101,630,235 ops/sec ±4.93% (10 runs sampled) *burn in*
    EventEmitter x 970,124 ops/sec ±2.42% (10 runs sampled)
    EventEmitter2 x 7,410,834 ops/sec ±16.34% (10 runs sampled)
    EventEmitter3 x 13,179,222 ops/sec ±3.05% (10 runs sampled)
    RXJS x 6,757,261 ops/sec ±9.13% (10 runs sampled)
    ReactiveProperty x 38,191,584 ops/sec ±3.16% (10 runs sampled)
    JS-Signals x 770,356 ops/sec ±5.99% (10 runs sampled)
    MiniSignals x 21,728,432 ops/sec ±6.80% (10 runs sampled)
    signal-emitter x 1,059,758 ops/sec ±2.73% (10 runs sampled)
    event-signal x 11,087,214 ops/sec ±5.73% (10 runs sampled)
    signal-lite x 1,583,103 ops/sec ±6.60% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many listeners
    Theoretical max x 6,603,100 ops/sec ±3.63% (10 runs sampled) *burn in*
    EventEmitter x 378,490 ops/sec ±4.88% (10 runs sampled)
    EventEmitter2 x 2,938,775 ops/sec ±4.88% (10 runs sampled)
    EventEmitter3 x 3,442,221 ops/sec ±5.24% (10 runs sampled)
    RXJS x 1,945,529 ops/sec ±3.90% (10 runs sampled)
    ReactiveProperty x 11,818,647 ops/sec ±16.06% (10 runs sampled)
    JS-Signals x 299,336 ops/sec ±4.11% (10 runs sampled)
    MiniSignals x 5,587,864 ops/sec ±3.66% (10 runs sampled)
    signal-emitter x 864,424 ops/sec ±6.04% (10 runs sampled)
    event-signal x 3,870,558 ops/sec ±4.25% (10 runs sampled)
    signal-lite x 426,677 ops/sec ±3.60% (10 runs sampled)
    minivents x 173,284 ops/sec ±5.81% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many parameters
    Theoretical max x 242,938,135 ops/sec ±6.31% (10 runs sampled) *burn in*
    EventEmitter x 399,680 ops/sec ±2.52% (10 runs sampled)
    EventEmitter2 x 4,376,589 ops/sec ±8.62% (10 runs sampled)
    EventEmitter3 x 6,541,655 ops/sec ±5.66% (10 runs sampled)
    JS-Signals x 328,705 ops/sec ±3.31% (10 runs sampled)
    MiniSignals x 18,811,678 ops/sec ±4.78% (10 runs sampled)
    signal-emitter x 753,750 ops/sec ±20.72% (10 runs sampled)
    signal-lite x 909,017 ops/sec ±3.82% (10 runs sampled)
    minivents x 248,048 ops/sec ±5.79% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays
    Theoretical max x 25,815,344 ops/sec ±5.57% (10 runs sampled) *burn in*
    EventEmitter x 285,480 ops/sec ±15.42% (10 runs sampled)
    EventEmitter2 x 1,987,492 ops/sec ±3.69% (10 runs sampled)
    EventEmitter3 x 3,683,517 ops/sec ±9.47% (10 runs sampled)
    RXJS x 2,213,162 ops/sec ±3.29% (10 runs sampled)
    ReactiveProperty x 3,827,153 ops/sec ±4.47% (10 runs sampled)
    JS-Signals x 241,486 ops/sec ±7.66% (10 runs sampled)
    MiniSignals x 6,176,206 ops/sec ±5.40% (10 runs sampled)
    signal-emitter x 368,357 ops/sec ±6.13% (10 runs sampled)
    event-signal x 3,102,175 ops/sec ±16.03% (10 runs sampled)
    signal-lite x 512,741 ops/sec ±2.88% (10 runs sampled)

*Fastest is __MiniSignals__*
