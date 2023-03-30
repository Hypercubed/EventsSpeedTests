const browserify =
  'browserify <%= file.path %> --fast --im -t envify -p esmify -o ./browserified/<%= file.base %>';
const tapMarkdown = 'tap-markdown';

const nodeScripts = './benchmark/platform-tape.js ./benchmark/*.mjs';
const browserifiedScripts =
  './browserified/platform-tape.js ./browserified/*.mjs';

const browsers = {
  firefox: 'firefox',
};

module.exports = {
  scripts: {
    build: {
      default: `cross-env NODE_ENV=production grunion --run "${browserify}" --silent ${nodeScripts}`,
    },
    bench: {
      default: `cross-env NODE_ENV=production grunion ${nodeScripts} --serial --raw`,
      fast: `cross-env NODE_ENV=production BENCH=fast grunion ${nodeScripts} --serial --raw`,
      node: `cross-env NODE_ENV=production grunion ${nodeScripts} --serial --raw | tee ./raw/node.tap`,
      browser: `grunion --run "testling < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser.tap`,
    },
    summary: {
      default: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/*.tap`,
      node: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/node-*.tap`,
      browsers: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/browser-*.tap`,
    },
  },
};
