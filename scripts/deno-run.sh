npx p-s bench.node
mv raw/deno.tap raw/deno-v1_32.tap

npx p-s summary.deno

echo "Fastest is MiniSignals" >> ./results/deno-v1_32.tap.md
cat ./raw/deno-v1_32.tap | grep Fastest | grep MiniSignals | wc -l >> ./results/deno-v1_32.tap.md
echo "Fastest is drip" >> ./results/deno-v1_32.tap.md
cat ./raw/deno-v1_32.tap | grep Fastest | grep drip | wc -l >> ./results/deno-v1_32.tap.md
echo "Fastest is sister" >> ./results/deno-v1_32.tap.md
cat ./raw/deno-v1_32.tap | grep Fastest | grep sister | wc -l >> ./results/deno-v1_32.tap.md
echo "Fastest is ReactiveProperty" >> ./results/deno-v1_32.tap.md
cat ./raw/deno-v1_32.tap | grep Fastest | grep ReactiveProperty | wc -l >> ./results/deno-v1_32.tap.md
echo "Fastest is EventEmitter3" >> ./results/deno-v1_32.tap.md
cat ./raw/deno-v1_32.tap | grep Fastest | grep EventEmitter3 | wc -l >> ./results/deno-v1_32.tap.md
