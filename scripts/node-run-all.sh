mkdir -p raw

nvm exec v6 npm start bench.node6

sleep 60

nvm exec v4 npm start bench.node4

npm start summary.node
