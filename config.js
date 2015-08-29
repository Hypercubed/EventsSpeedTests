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
    "eventemitter2": "github:asyncly/EventEmitter2@0.4.14",
    "eventemitter3": "github:primus/eventemitter3@1.1.1",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "hcSignals": "github:Hypercubed/js-signals@fixv8optbuild",
    "signals": "github:millermedeiros/js-signals@1.0.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
