mkdir -p raw

nvm exec v16 npx p-s bench.node
mv raw/node.tap raw/node-v16.tap

sleep 20

nvm exec v18 npx p-s bench.node
mv raw/node.tap raw/node-v18.tap

npx p-s summary.node
