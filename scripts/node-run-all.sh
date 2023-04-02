mkdir -p raw

nvm exec v16 npx p-s bench.node
mv raw/node.tap raw/node-v16.tap

sleep 20

nvm exec v18 npx p-s bench.node
mv raw/node.tap raw/node-v18.tap

npx p-s summary.node

echo "v16"
echo "Fastest is MiniSignals"
cat ./raw/node-v16.tap | grep Fastest | grep MiniSignals | wc -l
echo "Fastest is drip"
cat ./raw/node-v16.tap | grep Fastest | grep drip | wc -l
echo "Fastest is sister"
cat ./raw/node-v16.tap | grep Fastest | grep sister | wc -l
echo "Fastest is ReactiveProperty"
cat ./raw/node-v16.tap | grep Fastest | grep ReactiveProperty | wc -l
echo "Fastest is EventEmitter3"
cat ./raw/node-v16.tap | grep Fastest | grep EventEmitter3 | wc -l

echo "v18"
echo "Fastest is MiniSignals"
cat ./raw/node-v18.tap | grep Fastest | grep MiniSignals | wc -l
echo "Fastest is drip"
cat ./raw/node-v18.tap | grep Fastest | grep drip | wc -l
echo "Fastest is sister"
cat ./raw/node-v18.tap | grep Fastest | grep sister | wc -l
echo "Fastest is ReactiveProperty"
cat ./raw/node-v18.tap | grep Fastest | grep ReactiveProperty | wc -l
echo "Fastest is EventEmitter3"
cat ./raw/node-v18.tap | grep Fastest | grep EventEmitter3 | wc -l
