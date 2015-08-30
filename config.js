System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "benchmark": "npm:benchmark@1.0.0",
    "event-signal": "npm:event-signal@0.1.6",
    "eventemitter2": "github:asyncly/EventEmitter2@0.4.14",
    "eventemitter3": "github:primus/eventemitter3@1.1.1",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "hcSignals": "github:Hypercubed/js-signals@fixv8optbuild",
    "mini-signals": "github:Hypercubed/mini-signals@master",
    "signal-emitter": "npm:signal-emitter@0.0.1",
    "signals": "github:millermedeiros/js-signals@1.0.0",
    "signals-lite": "npm:signals-lite@0.9.3",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "util": "github:jspm/nodelibs-util@0.1.0",
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
