
# Node (v0.10.24)

## emit
EventEmitter1 x 221,938 ops/sec ±24.58% (71 runs sampled)
EventEmitter2 x 433,326 ops/sec ±7.23% (71 runs sampled)
EventEmitter3 x 914,214 ops/sec ±7.13% (55 runs sampled)
JS-Signals x 28,722 ops/sec ±23.11% (33 runs sampled)
JS-Signals patch x 40,118 ops/sec ±26.15% (46 runs sampled)
MiniSignals x 963,734 ops/sec ±7.22% (77 runs sampled)
signal-emitter x 64,100 ops/sec ±18.67% (56 runs sampled)
event-signal x 233,244 ops/sec ±7.58% (66 runs sampled)
signal-lite x 45,983 ops/sec ±7.36% (53 runs sampled)
*Fastest is MiniSignals,EventEmitter3*

## init
EventEmitter1 x 3,891,003 ops/sec ±3.13% (78 runs sampled)
EventEmitter2 x 3,531,509 ops/sec ±2.99% (84 runs sampled)
EventEmitter3 x 4,999,277 ops/sec ±9.48% (67 runs sampled)
JS-Signals x 481,521 ops/sec ±16.92% (28 runs sampled)
JS-Signals patch x 126,954 ops/sec ±11.31% (51 runs sampled)
MiniSignals x 7,833,554 ops/sec ±13.22% (66 runs sampled)
*Fastest is MiniSignals*

## add-remove
EventEmitter1 x 540,486 ops/sec ±1.68% (78 runs sampled)
EventEmitter2 x 426,914 ops/sec ±4.54% (72 runs sampled)
EventEmitter3 x 751,345 ops/sec ±6.20% (68 runs sampled)
JS-Signals x 242,441 ops/sec ±13.59% (61 runs sampled)
JS-Signals patch x 110,062 ops/sec ±4.37% (72 runs sampled)
MiniSignals x 305,553 ops/sec ±6.18% (60 runs sampled)
*Fastest is EventEmitter3*

# Chrome (Version 44.0.2403.157 m)

# emit
EventEmitter1 x 133,927 ops/sec ±7.66% (49 runs sampled)
EventEmitter2 x 232,837 ops/sec ±6.24% (68 runs sampled)
EventEmitter3 x 438,531 ops/sec ±2.40% (77 runs sampled)
JS-Signals x 13,413 ops/sec ±4.48% (66 runs sampled)
JS-Signals patch x 48,929 ops/sec ±2.38% (80 runs sampled)
MiniSignals x 746,874 ops/sec ±2.22% (79 runs sampled)
signal-emitter x 15,645 ops/sec ±3.63% (57 runs sampled)
event-signal x 215,673 ops/sec ±2.47% (76 runs sampled)
signal-lite x 20,989 ops/sec ±2.61% (70 runs sampled)
*Fastest is MiniSignals*

# init
EventEmitter1 x 10,810,432 ops/sec ±2.69% (75 runs sampled)
EventEmitter2 x 6,490,367 ops/sec ±2.20% (77 runs sampled)
EventEmitter3 x 16,047,062 ops/sec ±1.96% (80 runs sampled)
JS-Signals x 578,781 ops/sec ±18.14% (38 runs sampled)
JS-Signals patch x 295,423 ops/sec ±2.36% (73 runs sampled)
MiniSignals x 16,446,017 ops/sec ±2.00% (64 runs sampled)
*Fastest is MiniSignals,EventEmitter3*

# add-remove
EventEmitter1 x 221,401 ops/sec ±2.60% (73 runs sampled)
EventEmitter2 x 203,999 ops/sec ±4.76% (72 runs sampled)
EventEmitter3 x 349,370 ops/sec ±2.92% (78 runs sampled)
JS-Signals x 148,973 ops/sec ±3.66% (77 runs sampled)
JS-Signals patch x 89,753 ops/sec ±4.09% (47 runs sampled)
MiniSignals x 266,970 ops/sec ±4.21% (70 runs sampled)
*Fastest is EventEmitter3*
