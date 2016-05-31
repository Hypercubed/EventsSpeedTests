mkdir -p raw

nvm use v6.2
grunion ./scripts/platform-tape.js ./benchmark/*.js --serial | tee ./raw/node-v6.2.md

sleep 10

nvm use v4.4
grunion ./scripts/platform-tape.js ./benchmark/*.js --serial | tee ./raw/node-v4.4.md

nvm use system

grunion --run "tap-summary --no-ansi --no-progress --markdown < <%= file.path %> > ./results/<%= file.base %>" ./raw/node-*.md
