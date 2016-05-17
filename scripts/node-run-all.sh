nvm use v6
./scripts/node-run-one.sh -R ./reporters/markdown.js | tee ./results/node-v6.1.0.md
sleep 30

echo "date,suite,bench,elapsed,iterations,ops" > ./results/node-v6.1.0.csv
./scripts/node-run-one.sh -R csv | tee ./results/node-v6.1.0.csv
sleep 30

nvm use v4
./scripts/node-run-one.sh -R ./reporters/markdown.js | tee ./results/node-v4.4.4.md
sleep 30

echo "date,suite,bench,elapsed,iterations,ops" > ./results/node-v6.1.0.csv
./scripts/node-run-one.sh -R csv | tee ./results/node-v4.4.4.csv
