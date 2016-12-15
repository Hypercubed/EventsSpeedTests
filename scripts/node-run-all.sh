mkdir -p raw

nvm exec v6 npm start bench.node6

sleep 20

nvm exec v4 npm start bench.node4

sleep 20

nvm exec v7 npm start bench.node7

npm start summary.node
