# Chrome 50.0.2661.102 on OS X 10.11.2

## emit
    Theoretical max x 2,918,124 ops/sec ±2.95% (10 runs sampled) *burn in*
    EventEmitter x 115,971 ops/sec ±13.10% (10 runs sampled)
    EventEmitter2 x 491,880 ops/sec ±6.65% (10 runs sampled)
    EventEmitter3 x 754,458 ops/sec ±6.07% (10 runs sampled)
    JS-Signals x 127,123 ops/sec ±3.16% (10 runs sampled)
    MiniSignals x 2,005,629 ops/sec ±6.84% (10 runs sampled)
    signal-emitter x 149,927 ops/sec ±4.77% (10 runs sampled)
    signal-lite x 2,223,854 ops/sec ±4.55% (10 runs sampled)

*Fastest is __signal-lite__*

## emit one parameter
    Theoretical max x 25,852,706 ops/sec ±2.99% (10 runs sampled) *burn in*
    EventEmitter x 583,309 ops/sec ±14.07% (10 runs sampled)
    EventEmitter2 x 4,702,252 ops/sec ±5.54% (10 runs sampled)
    EventEmitter3 x 10,392,197 ops/sec ±4.72% (10 runs sampled)
    d3-dispatch x 1,618,440 ops/sec ±8.91% (10 runs sampled)
    namespace-emitter x 479,444 ops/sec ±5.48% (10 runs sampled)
    ReactiveProperty x 12,573,392 ops/sec ±5.82% (10 runs sampled)
    observable x 426,153 ops/sec ±7.15% (10 runs sampled)
    observ x 5,415,315 ops/sec ±2.24% (10 runs sampled)
    RXJS x 3,778,268 ops/sec ±10.35% (10 runs sampled)
    JS-Signals x 539,645 ops/sec ±3.52% (10 runs sampled)
    MiniSignals x 6,389,313 ops/sec ±3.41% (10 runs sampled)
    signal-emitter x 632,740 ops/sec ±6.38% (10 runs sampled)
    event-signal x 5,106,211 ops/sec ±5.11% (10 runs sampled)
    signal-lite x 17,525,595 ops/sec ±4.08% (10 runs sampled)
    minivents x 477,509 ops/sec ±6.95% (10 runs sampled)

*Fastest is __signal-lite__*

## emit objects
    Theoretical max x 11,070,718 ops/sec ±4.38% (10 runs sampled) *burn in*
    EventEmitter x 197,974 ops/sec ±5.57% (10 runs sampled)
    EventEmitter2 x 1,522,963 ops/sec ±8.99% (10 runs sampled)
    EventEmitter3 x 3,350,655 ops/sec ±5.97% (10 runs sampled)
    RXJS x 1,271,102 ops/sec ±4.95% (10 runs sampled)
    ReactiveProperty x 4,548,383 ops/sec ±10.65% (10 runs sampled)
    JS-Signals x 179,688 ops/sec ±3.82% (10 runs sampled)
    MiniSignals x 2,498,557 ops/sec ±4.50% (10 runs sampled)
    signal-emitter x 207,248 ops/sec ±9.78% (10 runs sampled)
    event-signal x 1,912,544 ops/sec ±2.13% (10 runs sampled)
    signal-lite x 6,126,959 ops/sec ±2.55% (10 runs sampled)
    EventDispatcher x 2,383,565 ops/sec ±8.37% (10 runs sampled)

*Fastest is __signal-lite__*

## init
    Theoretical max x 49,651,020 ops/sec ±2.64% (10 runs sampled) *burn in*
    EventEmitter x 33,351,397 ops/sec ±1.83% (10 runs sampled)
    EventEmitter2 x 22,405,294 ops/sec ±21.16% (10 runs sampled)
    EventEmitter3 x 38,983,886 ops/sec ±10.63% (10 runs sampled)
    ReactiveProperty x 996,830 ops/sec ±11.26% (10 runs sampled)
    JS-Signals x 1,524,243 ops/sec ±21.61% (10 runs sampled)
    MiniSignals x 22,227,417 ops/sec ±77.89% (10 runs sampled)
    EventDispatcher x 38,498,444 ops/sec ±4.82% (10 runs sampled)

*Fastest is __EventDispatcher,EventEmitter3__*

## add-remove
    EventEmitter x 1,523,695 ops/sec ±3.44% (10 runs sampled)
    EventEmitter2 x 1,102,925 ops/sec ±2.89% (10 runs sampled)
    EventEmitter3 x 1,727,777 ops/sec ±2.67% (10 runs sampled)
    ReactiveProperty x 4,468,629 ops/sec ±3.38% (10 runs sampled)
    JS-Signals x 664,488 ops/sec ±4.37% (10 runs sampled)
    MiniSignals x 14,371,728 ops/sec ±10.33% (10 runs sampled)
    EventDispatcher x 4,527,021 ops/sec ±4.50% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit with bound function
    Theoretical max x 29,469,332 ops/sec ±5.05% (10 runs sampled) *burn in*
    EventEmitter x 535,342 ops/sec ±7.24% (10 runs sampled)
    EventEmitter2 x 3,882,551 ops/sec ±3.48% (10 runs sampled)
    EventEmitter3 x 9,644,236 ops/sec ±4.77% (10 runs sampled)
    RXJS x 3,343,436 ops/sec ±4.75% (10 runs sampled)
    ReactiveProperty x 15,430,395 ops/sec ±7.56% (10 runs sampled)
    JS-Signals x 444,251 ops/sec ±7.99% (10 runs sampled)
    MiniSignals x 7,432,636 ops/sec ±3.03% (10 runs sampled)
    signal-emitter x 703,846 ops/sec ±3.35% (10 runs sampled)
    event-signal x 4,999,596 ops/sec ±10.85% (10 runs sampled)
    signal-lite x 5,511,652 ops/sec ±2.56% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many listeners
    Theoretical max x 4,843,545 ops/sec ±3.34% (10 runs sampled) *burn in*
    EventEmitter x 241,253 ops/sec ±8.51% (10 runs sampled)
    EventEmitter2 x 1,575,308 ops/sec ±19.10% (10 runs sampled)
    EventEmitter3 x 2,432,697 ops/sec ±8.49% (10 runs sampled)
    RXJS x 1,108,314 ops/sec ±12.57% (10 runs sampled)
    ReactiveProperty x 3,688,747 ops/sec ±4.38% (10 runs sampled)
    JS-Signals x 227,978 ops/sec ±4.00% (10 runs sampled)
    MiniSignals x 1,568,607 ops/sec ±3.80% (10 runs sampled)
    signal-emitter x 517,857 ops/sec ±16.26% (10 runs sampled)
    event-signal x 2,178,097 ops/sec ±5.78% (10 runs sampled)
    signal-lite x 1,263,221 ops/sec ±5.50% (10 runs sampled)
    minivents x 78,505 ops/sec ±9.38% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many parameters
    Theoretical max x 16,256,906 ops/sec ±9.66% (10 runs sampled) *burn in*
    EventEmitter x 164,865 ops/sec ±13.79% (10 runs sampled)
    EventEmitter2 x 553,375 ops/sec ±5.72% (10 runs sampled)
    EventEmitter3 x 685,230 ops/sec ±4.19% (10 runs sampled)
    JS-Signals x 171,002 ops/sec ±4.74% (10 runs sampled)
    MiniSignals x 4,532,135 ops/sec ±6.94% (10 runs sampled)
    signal-emitter x 323,667 ops/sec ±3.78% (10 runs sampled)
    signal-lite x 4,213,133 ops/sec ±3.95% (10 runs sampled)
    minivents x 109,424 ops/sec ±8.37% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays
    Theoretical max x 13,187,736 ops/sec ±3.50% (10 runs sampled) *burn in*
    EventEmitter x 179,645 ops/sec ±2.78% (10 runs sampled)
    EventEmitter2 x 1,461,050 ops/sec ±5.17% (10 runs sampled)
    EventEmitter3 x 3,196,735 ops/sec ±9.98% (10 runs sampled)
    RXJS x 1,237,386 ops/sec ±5.63% (10 runs sampled)
    ReactiveProperty x 4,559,533 ops/sec ±2.05% (10 runs sampled)
    JS-Signals x 142,412 ops/sec ±5.70% (10 runs sampled)
    MiniSignals x 2,256,639 ops/sec ±4.27% (10 runs sampled)
    signal-emitter x 227,491 ops/sec ±2.91% (10 runs sampled)
    event-signal x 1,634,957 ops/sec ±7.08% (10 runs sampled)
    signal-lite x 1,723,815 ops/sec ±4.79% (10 runs sampled)

*Fastest is __ReactiveProperty__*
