node_modules/.bin/browserify ./matcha-run.js | node_modules/.bin/testling -x open

node_modules/.bin/browserify ./matcha-run.js | node_modules/.bin/testling -x "open -a /Applications/Firefox.app"

node_modules/.bin/browserify ./matcha-run.js | node_modules/.bin/testling -x "open -a Safari"
