mkdir -p raw

npm start bench.chrome
sleep 10

npm start bench.firefox
sleep 10

npm start bench.safari

npm start summary.browsers
