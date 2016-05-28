
# Using tap as a harness runs each test in a child process

#nvm use v6.2
node ./scripts/platform.js | tee ./results/node-v6.2.md
. ./scripts/node-run-one.sh | tee ./raw/node-v6.2.md
cat ./raw/node-v6.2.md | ./node_modules/.bin/tap-summary -CP >> ./results/node-v6.2.md

sleep 10

nvm use v4.4
node ./scripts/platform.js | tee ./results/node-v4.4.md
. ./scripts/node-run-one.sh | tee ./raw/node-v4.4.md
cat ./raw/node-v6.2.md | ./node_modules/.bin/tap-summary -CP >> ./results/node-v4.4.md

nvm use system
