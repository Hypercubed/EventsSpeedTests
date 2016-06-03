
const browserify = 'browserify <%= file.path %> --im -o ./browserified/<%= file.base %>';
const tapMarkdown = 'tap-markdown';

const nodeScripts = './scripts/platform-tape.js ./benchmark/*.js';
const browserifiedScripts = './browserified/platform-tape.js ./browserified/*.js';

const browsers = {
  chrome: 'open',
  firefox: 'open -a /Applications/Firefox.app',
  safari: 'open -a Safari'
};

module.exports = {
  scripts: {
    build: `grunion --run "${browserify}" ${nodeScripts}`,
    bench: {
      node: `grunion ${nodeScripts} --serial --raw`,
      node4: `grunion ${nodeScripts} --serial --raw | tee ./raw/node-v4.4.md`,
      node6: `grunion ${nodeScripts} --serial --no-raw | tee ./raw/node-v6.2.md`,
      browser: `grunion --run "testling -x \\"${browsers.chrome}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw`,
      chrome: `grunion --run "testling -x \\"${browsers.chrome}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-chrome-v50.md`,
      firefox: `grunion --run "testling -x \\"${browsers.firefox}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-firefox-v46.md`,
      safari: `grunion --run "testling -x \\"${browsers.safari}\\" < <%= file.path %>" ${browserifiedScripts} --serial --raw | tee ./raw/browser-safari-v9.md`
    },
    summary: {
      default: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>" ./raw/*.md`,
      node: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>" ./raw/node-*.md`,
      browsers: `grunion --run "${tapMarkdown} < <%= file.path %> > ./results/<%= file.base %>" ./raw/browser-*.md`
    }
  }
};
