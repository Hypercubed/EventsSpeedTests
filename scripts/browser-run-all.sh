mkdir -p raw

grunion --run "testling -x open < <%= file.path %>" ./browserified/platform-tape.js ./browserified/*.js --serial | tee ./raw/browser-chrome-v50.md
grunion --run "testling -x \"open -a /Applications/Firefox.app\" < <%= file.path %>"  ./browserified/platform-tape.js ./browserified/*.js --serial | tee ./raw/browser-firefox-v46.md
grunion --run "testling -x \"open -a Safari\" < <%= file.path %>"  ./browserified/platform-tape.js ./browserified/*.js --serial | tee ./raw/browser-safari-v9.md

grunion --run "tap-summary --no-ansi --no-progress --markdown < <%= file.path %> > ./results/<%= file.base %>" ./raw/browser-*.md
