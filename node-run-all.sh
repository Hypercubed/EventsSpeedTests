echo ""
matcha ./benchmark/emit.js $@
sleep 10

echo ""
matcha ./benchmark/emit-one.js $@
sleep 10

echo ""
matcha ./benchmark/init.js $@
sleep 10

echo ""
matcha ./benchmark/add-remove.js $@
sleep 10

echo ""
matcha ./benchmark/emit-context.js $@
sleep 10

echo ""
matcha ./benchmark/emit-bound.js $@
sleep 10

echo ""
matcha ./benchmark/emit-many.js $@
sleep 10

echo ""
matcha ./benchmark/emit-large.js $@
sleep 10

echo ""
matcha ./benchmark/emit-arrays.js $@
sleep 10

echo ""
matcha ./benchmark/emit-objects.js $@
sleep 10
