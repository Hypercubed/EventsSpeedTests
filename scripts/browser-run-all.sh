node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x open | tee ./results/chrome-v50.md

node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x "open -a /Applications/Firefox.app" | tee ./results/firefox-v45.md

node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x "open -a Safari" | tee ./results/safari-v9.md
