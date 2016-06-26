mkdir -p raw

nvm use system
npm start bench.node6

sleep 60

nvm exec v4 npm start bench.node4

npm start summary.node
