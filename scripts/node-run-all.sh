
# Using tap as a harness runs each test in a child process

nvm use v6.2
node ./scripts/platform.js | tee ./results/node-v6.2.md
tap ./benchmark/*.js -R tap | tee -a ./results/node-v6.2.md

sleep 30

nvm use v4.4
node ./scripts/platform.js | tee ./results/node-v4.4.md
tap ./benchmark/*.js -R tap | tee -a ./results/node-v4.4.md

nvm use system
