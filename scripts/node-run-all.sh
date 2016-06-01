mkdir -p raw

nvm exec v6.2 npm start bench.node6

sleep 10

nvm exec v4.4 npm start bench.node4

npm start summary.node
