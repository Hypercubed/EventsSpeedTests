nvm use v6.2
./scripts/node-run-one.sh | tee ./results/node-v6.2.md
sleep 30

nvm use v4.4
./scripts/node-run-one.sh | tee ./results/node-v4.4.md
sleep 30

nvm use system
