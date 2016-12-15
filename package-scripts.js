
const browserify = 'browserify <%= file.path %> --im -t envify -o ./browserified/<%= file.base %>';
const tapMarkdown = 'tap-markdown';

const nodeScripts = './benchmark/platform-tape.js ./benchmark/*.js';
const browserifiedScripts = './browserified/platform-tape.js ./browserified/*.js';

const browsers = {
  chrome: 'open',
  firefox: 'open -a /Applications/Firefox.app',
  safari: 'open -a Safari'
};

module.exports = {
  scripts: {
    build: {
      default: `cross-env NODE_ENV=production grunion --run "${browserify}" --silent ${nodeScripts}`
    },
    bench: {
      default: `grunion ${nodeScripts}`,
      fast: `cross-env BENCH=fast grunion ${nodeScripts}`,
      node: `grunion ${nodeScripts}`,
      node4: `cross-env NODE_ENV=production grunion ${nodeScripts} --serial --raw | tee ./raw/node-v4.tap`,
      node6: `cross-env NODE_ENV=production grunion ${nodeScripts} --serial --raw | tee ./raw/node-v6.tap`,
      node7: `cross-env NODE_ENV=production grunion ${nodeScripts} --serial --raw | tee ./raw/node-v7.tap`,
      browser: `grunion --run "testling -x \\"${browsers.chrome}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw`,
      chrome: `grunion --run "testling -x \\"${browsers.chrome}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-chrome-v51.tap`,
      firefox: `grunion --run "testling -x \\"${browsers.firefox}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-firefox-v47.tap`,
      safari: `grunion --run "testling -x \\"${browsers.safari}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-safari-v9.tap`
    },
    summary: {
      default: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/*.tap`,
      node: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/node-*.tap`,
      browsers: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>.md" ./raw/browser-*.tap`
    }
  }
};
