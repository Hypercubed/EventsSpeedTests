
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 2ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 2ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 0ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 0ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 8ms]

# Summary 

- duration: 22ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Chrome 51.0.2704.63 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 21,918,827 ops/sec ±7.03% (10 runs sampled)
    MiniSignals x 10,861,737 ops/sec ±18.74% (10 runs sampled)
    EventDispatcher x 5,196,328 ops/sec ±6.56% (10 runs sampled)
    ReactiveProperty x 3,846,944 ops/sec ±5.27% (10 runs sampled)
    EventEmitter3 x 1,585,293 ops/sec ±7.87% (10 runs sampled)
    EventEmitter x 1,025,791 ops/sec ±7.70% (10 runs sampled)
    EventEmitter2 x 879,613 ops/sec ±15.75% (10 runs sampled)
    JS-Signals x 734,878 ops/sec ±5.61% (10 runs sampled)
    dripEmitterEnhanced x 525,972 ops/sec ±6.94% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 10,099,620 ops/sec ±4.84% (10 runs sampled) *burn in*
    MiniSignals x 6,321,604 ops/sec ±7.50% (10 runs sampled)
    dripEmitter x 5,241,769 ops/sec ±3.38% (10 runs sampled)
    signal-lite x 5,652,805 ops/sec ±11.51% (10 runs sampled)
    ReactiveProperty x 4,703,191 ops/sec ±8.12% (10 runs sampled)
    EventEmitter3 x 4,300,320 ops/sec ±5.70% (10 runs sampled)
    event-signal x 1,717,737 ops/sec ±6.51% (10 runs sampled)
    EventEmitter2 x 1,496,621 ops/sec ±6.38% (10 runs sampled)
    RXJS x 1,224,664 ops/sec ±4.93% (10 runs sampled)
    dripEmitterEnhanced x 674,570 ops/sec ±6.62% (10 runs sampled)
    signal-emitter x 424,058 ops/sec ±4.10% (10 runs sampled)
    EventEmitter x 147,307 ops/sec ±6.85% (10 runs sampled)
    JS-Signals x 141,205 ops/sec ±5.81% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit with bound function
## emit with bound function
    Theoretical max x 25,625,743 ops/sec ±10.73% (10 runs sampled) *burn in*
    ReactiveProperty x 12,605,426 ops/sec ±6.58% (10 runs sampled)
    dripEmitter x 11,041,989 ops/sec ±8.29% (10 runs sampled)
    EventEmitter3 x 9,787,913 ops/sec ±3.97% (10 runs sampled)
    MiniSignals x 5,992,151 ops/sec ±19.15% (10 runs sampled)
    event-signal x 4,820,868 ops/sec ±4.06% (10 runs sampled)
    signal-lite x 4,870,077 ops/sec ±8.03% (10 runs sampled)
    EventEmitter2 x 3,881,505 ops/sec ±8.32% (10 runs sampled)
    RXJS x 3,150,588 ops/sec ±21.22% (10 runs sampled)
    dripEmitterEnhanced x 1,775,034 ops/sec ±6.45% (10 runs sampled)
    signal-emitter x 1,173,739 ops/sec ±6.15% (10 runs sampled)
    EventEmitter x 441,811 ops/sec ±5.02% (10 runs sampled)
    JS-Signals x 380,226 ops/sec ±4.42% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with context
## emit with context
    Theoretical max x 29,876,808 ops/sec ±9.16% (10 runs sampled) *burn in*
    signal-lite x 17,868,620 ops/sec ±9.01% (10 runs sampled)
    MiniSignals x 17,485,910 ops/sec ±14.32% (10 runs sampled)
    ReactiveProperty x 15,895,872 ops/sec ±4.77% (10 runs sampled)
    dripEmitter x 14,252,410 ops/sec ±3.95% (10 runs sampled)
    EventEmitter3 x 13,311,423 ops/sec ±15.02% (10 runs sampled)
    event-signal x 5,512,417 ops/sec ±5.94% (10 runs sampled)
    EventEmitter2 x 4,346,883 ops/sec ±8.74% (10 runs sampled)
    RXJS x 3,979,254 ops/sec ±5.24% (10 runs sampled)
    dripEmitterEnhanced x 2,190,767 ops/sec ±4.18% (10 runs sampled)
    signal-emitter x 1,338,320 ops/sec ±5.42% (10 runs sampled)
    JS-Signals x 490,501 ops/sec ±3.46% (10 runs sampled)
    EventEmitter x 493,993 ops/sec ±6.96% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit many listeners
## emit many listeners
    MiniSignals x 4,328,272 ops/sec ±4.49% (10 runs sampled)
    dripEmitter x 4,219,688 ops/sec ±3.69% (10 runs sampled)
    signal-lite x 4,292,925 ops/sec ±7.41% (10 runs sampled)
    Theoretical max x 4,245,864 ops/sec ±12.77% (10 runs sampled) *burn in*
    ReactiveProperty x 3,846,641 ops/sec ±3.84% (10 runs sampled)
    EventEmitter3 x 3,797,220 ops/sec ±7.72% (10 runs sampled)
    event-signal x 2,556,367 ops/sec ±6.95% (10 runs sampled)
    EventEmitter2 x 2,312,726 ops/sec ±4.18% (10 runs sampled)
    dripEmitterEnhanced x 1,482,288 ops/sec ±4.60% (10 runs sampled)
    RXJS x 1,328,976 ops/sec ±6.81% (10 runs sampled)
    signal-emitter x 1,023,570 ops/sec ±6.74% (10 runs sampled)
    EventEmitter x 284,350 ops/sec ±5.37% (10 runs sampled)
    JS-Signals x 236,335 ops/sec ±4.58% (10 runs sampled)
    minivents x 76,783 ops/sec ±5.36% (10 runs sampled)
*Fastest is __MiniSignals, dripEmitter, signal-lite__*

# emit many parameters
## emit many parameters
    Theoretical max x 16,858,195 ops/sec ±6.24% (10 runs sampled) *burn in*
    signal-lite x 14,024,136 ops/sec ±4.80% (10 runs sampled)
    MiniSignals x 13,055,407 ops/sec ±12.71% (10 runs sampled)
    EventEmitter3 x 790,455 ops/sec ±5.96% (10 runs sampled)
    EventEmitter2 x 744,413 ops/sec ±4.51% (10 runs sampled)
    dripEmitterEnhanced x 597,446 ops/sec ±5.51% (10 runs sampled)
    signal-emitter x 533,861 ops/sec ±5.20% (10 runs sampled)
    JS-Signals x 106,441 ops/sec ±4.62% (10 runs sampled)
    EventEmitter x 104,320 ops/sec ±4.64% (10 runs sampled)
    minivents x 59,098 ops/sec ±5.29% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 10,048,980 ops/sec ±8.90% (10 runs sampled) *burn in*
    ReactiveProperty x 5,645,926 ops/sec ±2.45% (10 runs sampled)
    signal-lite x 5,503,743 ops/sec ±4.65% (10 runs sampled)
    MiniSignals x 5,615,462 ops/sec ±20.52% (10 runs sampled)
    EventEmitter3 x 4,571,755 ops/sec ±5.96% (10 runs sampled)
    dripEmitter x 4,615,584 ops/sec ±7.35% (10 runs sampled)
    EventDispatcher x 2,279,033 ops/sec ±6.15% (10 runs sampled)
    event-signal x 1,845,763 ops/sec ±3.65% (10 runs sampled)
    EventEmitter2 x 1,470,376 ops/sec ±5.59% (10 runs sampled)
    RXJS x 1,247,795 ops/sec ±5.52% (10 runs sampled)
    dripEmitterEnhanced x 700,078 ops/sec ±4.86% (10 runs sampled)
    signal-emitter x 436,753 ops/sec ±11.96% (10 runs sampled)
    EventEmitter x 184,355 ops/sec ±4.27% (10 runs sampled)
    JS-Signals x 167,296 ops/sec ±5.59% (10 runs sampled)
*Fastest is __ReactiveProperty, signal-lite, MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 23,922,326 ops/sec ±10.47% (10 runs sampled) *burn in*
    MiniSignals x 18,855,677 ops/sec ±5.46% (10 runs sampled)
    signal-lite x 17,529,406 ops/sec ±5.85% (10 runs sampled)
    EventEmitter3 x 13,003,235 ops/sec ±6.35% (10 runs sampled)
    ReactiveProperty x 12,904,747 ops/sec ±7.65% (10 runs sampled)
    dripEmitter x 12,727,438 ops/sec ±9.70% (10 runs sampled)
    event-signal x 6,036,419 ops/sec ±4.11% (10 runs sampled)
    observ x 5,395,047 ops/sec ±4.26% (10 runs sampled)
    EventEmitter2 x 4,783,275 ops/sec ±7.21% (10 runs sampled)
    RXJS x 3,952,418 ops/sec ±3.31% (10 runs sampled)
    d3-dispatch x 2,241,049 ops/sec ±2.69% (10 runs sampled)
    dripEmitterEnhanced x 1,921,125 ops/sec ±6.94% (10 runs sampled)
    signal-emitter x 1,462,538 ops/sec ±4.82% (10 runs sampled)
    observable x 709,038 ops/sec ±6.51% (10 runs sampled)
    EventEmitter x 582,396 ops/sec ±3.69% (10 runs sampled)
    JS-Signals x 500,649 ops/sec ±2.92% (10 runs sampled)
    namespace-emitter x 417,771 ops/sec ±3.97% (10 runs sampled)
    minivents x 362,162 ops/sec ±2.46% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit
## emit
    Theoretical max x 9,435,416 ops/sec ±11.78% (10 runs sampled) *burn in*
    MiniSignals x 5,523,359 ops/sec ±3.86% (10 runs sampled)
    signal-lite x 5,248,710 ops/sec ±7.83% (10 runs sampled)
    EventEmitter3 x 1,296,377 ops/sec ±3.63% (10 runs sampled)
    EventEmitter2 x 764,420 ops/sec ±3.31% (10 runs sampled)
    dripEmitterEnhanced x 431,276 ops/sec ±3.44% (10 runs sampled)
    signal-emitter x 302,695 ops/sec ±4.23% (10 runs sampled)
    EventEmitter x 126,411 ops/sec ±2.77% (10 runs sampled)
    JS-Signals x 127,357 ops/sec ±4.12% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# init
## init
    EventDispatcher x 49,616,398 ops/sec ±3.63% (10 runs sampled)
    EventEmitter3 x 48,601,767 ops/sec ±3.84% (10 runs sampled)
    DripEmitter x 47,615,958 ops/sec ±4.31% (10 runs sampled)
    Theoretical max x 46,384,958 ops/sec ±8.46% (10 runs sampled) *burn in*
    EventEmitter x 34,263,049 ops/sec ±5.53% (10 runs sampled)
    EventEmitter2 x 30,157,970 ops/sec ±3.00% (10 runs sampled)
    MiniSignals x 27,909,896 ops/sec ±7.73% (10 runs sampled)
    DripEmitterEnhanced x 20,762,257 ops/sec ±4.42% (10 runs sampled)
    JS-Signals x 1,681,304 ops/sec ±19.16% (10 runs sampled)
    ReactiveProperty x 1,165,830 ops/sec ±15.33% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3, DripEmitter__*

