
node_modules/.bin/_matcha ./benchmark/emit.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-one.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-objects.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/init.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/add-remove.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-context.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-bound.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-many.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-large.js $@
sleep 10

node_modules/.bin/_matcha ./benchmark/emit-arrays.js $@
